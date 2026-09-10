// ─────────────────────────────────────────────────────────────────────────────
// Weather decision engine for the viewpoint.
//
// Responsibility:
//   1. build the upstream request URL
//   2. normalise the raw payload into a small, stable shape
//   3. turn that shape into *actionable* traveller advice (never raw numbers alone)
//   4. render the HTML fragments used by both the server (build-time) and the
//      client (refresh) so the markup logic lives in exactly one place.
//
// Geography note: Punto Panorámico is a cliff-side lake terrace in the Andean
// forest belt (~770 m). The dominant local hazards are strong westerly wind,
// sudden rain/sleet, cold snaps and the resulting slippery ground — plus the
// fire risk of dry, windy summer days. The rule set below is tuned for that
// "mountain + lake" context rather than a generic city forecast.
// ─────────────────────────────────────────────────────────────────────────────
import { WX_COPY, type CondKey, type WeatherCopy } from '../i18n/weather.copy';

export interface WxNow {
  code: number;
  temp: number;
  feels: number;
  hum: number;
  wind: number;
  gust: number;
  dir: number;
  uv: number;
  precipProb: number;
  isDay: boolean;
}

export interface WxDay {
  date: string;
  code: number;
  tmax: number;
  tmin: number;
  pop: number;
  wind: number;
  gust: number;
  uv: number;
}

export interface WxPayload {
  now: WxNow;
  days: WxDay[];
  at: number;
}

export type Cat = 'risk' | 'outfit' | 'plan' | 'pack';

export interface WxItem {
  id: string;
  icon: string;
  text: string;
}

export interface Advice {
  risks: WxItem[];
  outfit: WxItem[];
  plan: WxItem[];
  pack: WxItem[];
}

// ── Request ──────────────────────────────────────────────────────────────────
export function buildWeatherUrl(lat: number, lng: number, tz: string): string {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lng),
    current:
      'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m',
    hourly: 'precipitation_probability,uv_index',
    daily:
      'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,uv_index_max',
    timezone: tz,
    forecast_days: '7',
    wind_speed_unit: 'kmh',
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

// ── Normalisation ────────────────────────────────────────────────────────────
function num(...values: unknown[]): number {
  for (const v of values) {
    const n = typeof v === 'string' ? Number(v) : (v as number);
    if (typeof n === 'number' && Number.isFinite(n)) return n;
  }
  return 0;
}

export function parseOpenMeteo(raw: any): WxPayload {
  const c = raw?.current ?? {};
  const d = raw?.daily ?? {};
  const h = raw?.hourly ?? {};

  // Align the hourly series with the current observation hour ("2026-09-10T14:00").
  const currentTime: string = typeof c.time === 'string' ? c.time : '';
  let idx = -1;
  if (Array.isArray(h.time) && currentTime) {
    const hourKey = currentTime.slice(0, 13) + ':00';
    idx = h.time.indexOf(hourKey);
  }
  const at = (key: string, fallback = 0) => (idx >= 0 ? num(h[key]?.[idx], fallback) : num(fallback));

  const now: WxNow = {
    code: num(c.weather_code),
    temp: num(c.temperature_2m),
    feels: num(c.apparent_temperature, c.temperature_2m),
    hum: num(c.relative_humidity_2m),
    wind: num(c.wind_speed_10m),
    gust: num(c.wind_gusts_10m, c.wind_speed_10m),
    dir: num(c.wind_direction_10m),
    uv: at('uv_index', d.uv_index_max?.[0]),
    precipProb: at('precipitation_probability', d.precipitation_probability_max?.[0]),
    isDay: num(c.is_day, 1) >= 0.5,
  };

  const days: WxDay[] = Array.isArray(d.time)
    ? d.time.map((date: string, i: number) => ({
        date,
        code: num(d.weather_code?.[i]),
        tmax: num(d.temperature_2m_max?.[i]),
        tmin: num(d.temperature_2m_min?.[i]),
        pop: num(d.precipitation_probability_max?.[i]),
        wind: num(d.wind_speed_10m_max?.[i]),
        gust: num(d.wind_gusts_10m_max?.[i]),
        uv: num(d.uv_index_max?.[i]),
      }))
    : [];

  return { now, days, at: Date.now() };
}

// ── Condition mapping (WMO weather codes) ────────────────────────────────────
export function conditionKey(code: number): CondKey {
  if (code === 0) return 'clear';
  if (code === 1) return 'mainlyClear';
  if (code === 2) return 'partlyCloudy';
  if (code === 3) return 'overcast';
  if (code === 45 || code === 48) return 'fog';
  if (code >= 51 && code <= 55) return 'drizzle';
  if (code === 56 || code === 57 || code === 66 || code === 67) return 'freezingRain';
  if (code === 61 || code === 63) return 'rain';
  if (code === 65) return 'heavyRain';
  if (code >= 71 && code <= 77) return 'snow';
  if (code === 80 || code === 81) return 'rain';
  if (code === 82) return 'heavyRain';
  if (code === 85 || code === 86) return 'snow';
  if (code >= 95) return 'thunder';
  return 'overcast';
}

export function uvLevelIndex(uv: number): number {
  if (uv < 3) return 0;
  if (uv < 6) return 1;
  if (uv < 8) return 2;
  if (uv < 11) return 3;
  return 4;
}

export function compass(deg: number): string {
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return dirs[Math.round(deg / 45) % 8];
}

// ── Rules ────────────────────────────────────────────────────────────────────
interface Facts {
  cond: CondKey;
  temp: number;
  feels: number;
  tmax: number;
  tmin: number;
  diff: number;
  pop: number;
  wind: number;
  gust: number;
  uv: number;
  hum: number;
  rain: boolean;
  heavy: boolean;
  drizzle: boolean;
  thunder: boolean;
  snow: boolean;
  freezing: boolean;
  fog: boolean;
}

interface Rule {
  id: string;
  cat: Cat;
  icon: string;
  when: (f: Facts) => boolean;
}

const STRONG_WIND = (f: Facts) => f.wind >= 30 || f.gust >= 50;
const STORM_WIND = (f: Facts) => f.wind >= 50 || f.gust >= 75;

// Order matters: within a category the first matches win (most specific first).
const RULES: Rule[] = [
  // ── Safety first ──
  { id: 'riskThunder', cat: 'risk', icon: '⛈️', when: (f) => f.thunder },
  { id: 'riskHeavyRain', cat: 'risk', icon: '🌊', when: (f) => f.heavy },
  { id: 'riskFreezing', cat: 'risk', icon: '🧊', when: (f) => f.freezing },
  { id: 'riskSnow', cat: 'risk', icon: '❄️', when: (f) => f.snow },
  { id: 'riskWind', cat: 'risk', icon: '💨', when: STORM_WIND },
  { id: 'riskFog', cat: 'risk', icon: '🌫️', when: (f) => f.fog },
  { id: 'riskFire', cat: 'risk', icon: '🔥', when: (f) => f.hum < 35 && f.wind >= 25 && f.tmax >= 25 },

  // ── What to wear ──
  { id: 'outfitFreezing', cat: 'outfit', icon: '🥾', when: (f) => f.freezing || f.snow },
  { id: 'outfitCold', cat: 'outfit', icon: '🧣', when: (f) => f.tmax <= 10 },
  { id: 'outfitHot', cat: 'outfit', icon: '👕', when: (f) => f.tmax >= 32 },
  { id: 'outfitWind', cat: 'outfit', icon: '🧥', when: STRONG_WIND },
  { id: 'outfitRain', cat: 'outfit', icon: '🧥', when: (f) => f.rain || f.heavy || f.drizzle || f.pop >= 60 },
  { id: 'outfitDiff', cat: 'outfit', icon: '🧥', when: (f) => f.diff > 8 },
  {
    id: 'outfitUv',
    cat: 'outfit',
    icon: '🧴',
    when: (f) => f.uv >= 5 && !(f.rain || f.heavy || f.thunder || f.snow),
  },

  // ── What to do ──
  { id: 'planThunder', cat: 'plan', icon: '⛈️', when: (f) => f.thunder },
  { id: 'planHeavyRain', cat: 'plan', icon: '🌧️', when: (f) => f.heavy },
  { id: 'planSnow', cat: 'plan', icon: '❄️', when: (f) => f.snow || f.freezing },
  { id: 'planWind', cat: 'plan', icon: '💨', when: STRONG_WIND },
  { id: 'planHot', cat: 'plan', icon: '🥵', when: (f) => f.tmax >= 32 },
  { id: 'planFog', cat: 'plan', icon: '🌫️', when: (f) => f.fog },
  { id: 'planRain', cat: 'plan', icon: '🌂', when: (f) => f.rain || f.drizzle || f.pop >= 60 },
  { id: 'planClear', cat: 'plan', icon: '☀️', when: (f) => f.cond === 'clear' || f.cond === 'mainlyClear' },
  {
    id: 'planGolden',
    cat: 'plan',
    icon: '🌇',
    when: (f) => (f.cond === 'clear' || f.cond === 'mainlyClear') && !f.rain && !f.heavy && !f.thunder,
  },
  { id: 'planCloudy', cat: 'plan', icon: '⛅', when: (f) => f.cond === 'partlyCloudy' || f.cond === 'overcast' },

  // ── What to bring ──
  {
    id: 'packRaincoat',
    cat: 'pack',
    icon: '🧥',
    when: (f) => (f.rain || f.heavy || f.pop >= 60) && STRONG_WIND(f),
  },
  {
    id: 'packUmbrella',
    cat: 'pack',
    icon: '🌂',
    when: (f) => (f.rain || f.drizzle || f.heavy || f.pop >= 60) && !STRONG_WIND(f),
  },
  {
    id: 'packShoe',
    cat: 'pack',
    icon: '🥾',
    when: (f) => f.rain || f.heavy || f.drizzle || f.snow || f.freezing,
  },
  { id: 'packWarm', cat: 'pack', icon: '🧣', when: (f) => f.tmax <= 10 || f.diff > 8 },
  { id: 'packSun', cat: 'pack', icon: '🕶️', when: (f) => f.uv >= 5 },
  { id: 'packWater', cat: 'pack', icon: '💧', when: (f) => f.tmax >= 28 },
  { id: 'packWind', cat: 'pack', icon: '💨', when: STRONG_WIND },
  { id: 'packMask', cat: 'pack', icon: '😷', when: (f) => f.fog },
  {
    id: 'packCamera',
    cat: 'pack',
    icon: '📷',
    when: (f) => (f.cond === 'clear' || f.cond === 'mainlyClear') && !f.rain && !f.heavy && !f.thunder,
  },
];

const CAPS: Record<Cat, number> = { risk: 3, outfit: 3, plan: 3, pack: 5 };

export function evaluateWeather(now: WxNow, tmax: number, tmin: number, copy: WeatherCopy): Advice {
  const cond = conditionKey(now.code);
  const facts: Facts = {
    cond,
    temp: now.temp,
    feels: now.feels,
    tmax,
    tmin,
    diff: Math.abs(tmax - tmin),
    pop: now.precipProb,
    wind: now.wind,
    gust: now.gust,
    uv: now.uv,
    hum: now.hum,
    rain: cond === 'rain',
    heavy: cond === 'heavyRain',
    drizzle: cond === 'drizzle',
    thunder: cond === 'thunder',
    snow: cond === 'snow',
    freezing: cond === 'freezingRain',
    fog: cond === 'fog',
  };

  const pick = (cat: Cat): WxItem[] =>
    RULES.filter((r) => r.cat === cat && r.when(facts))
      .slice(0, CAPS[cat])
      .map((r) => ({ id: r.id, icon: r.icon, text: copy.rule[r.id] ?? '' }))
      .filter((item) => item.text);

  const outfit = pick('outfit');
  if (!outfit.length && copy.rule.outfitMild) {
    outfit.push({ id: 'outfitMild', icon: '🧥', text: copy.rule.outfitMild });
  }

  return { risks: pick('risk'), outfit, plan: pick('plan'), pack: pick('pack') };
}

// ── Rendering (shared by server + client) ────────────────────────────────────
const esc = (s: string): string =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const chip = (label: string, value: string, icon = ''): string => `
  <div class="rounded-2xl bg-[color:var(--color-mist)] px-4 py-3">
    <div class="text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-moss)]/60">${esc(label)}</div>
    <div class="mt-1 text-sm font-medium">${icon ? icon + ' ' : ''}${esc(value)}</div>
  </div>`;

export function conditionIcon(cond: CondKey, isDay: boolean): string {
  if (cond === 'clear' && !isDay) return '🌙';
  return WX_COPY.es.cond[cond].icon;
}

export function renderCurrent(now: WxNow, copy: WeatherCopy): string {
  const cond = conditionKey(now.code);
  const icon = cond === 'clear' && !now.isDay ? '🌙' : copy.cond[cond].icon;
  const uvIdx = uvLevelIndex(now.uv);
  return `
    <div class="flex items-center gap-5">
      <div class="text-6xl leading-none select-none" aria-hidden="true">${icon}</div>
      <div>
        <div class="num-display text-6xl leading-none">${Math.round(now.temp)}°</div>
        <div class="mt-2 text-sm text-[color:var(--color-moss)]/80">${esc(copy.cond[cond].label)}</div>
      </div>
    </div>
    <div class="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
      ${chip(copy.ui.feels, `${Math.round(now.feels)}°`)}
      ${chip(copy.ui.precip, `${Math.round(now.precipProb)}%`, '💧')}
      ${chip(copy.ui.wind, `${Math.round(now.wind)} km/h`, '💨')}
      ${chip(copy.ui.direction, `${compass(now.dir)} · ${Math.round(now.dir)}°`, '🧭')}
      ${chip(copy.ui.humidity, `${Math.round(now.hum)}%`)}
      ${chip(copy.ui.uv, `${Math.round(now.uv)} · ${copy.ui.uvLevel[uvIdx]}`)}
    </div>`;
}

export function renderForecast(days: WxDay[], copy: WeatherCopy, locale: string): string {
  if (!days.length) return '';
  const lows = days.map((d) => d.tmin);
  const highs = days.map((d) => d.tmax);
  const min = Math.min(...lows);
  const max = Math.max(...highs);
  const span = Math.max(1, max - min);

  const dayLabel = (date: string, i: number): string => {
    if (i === 0) return copy.ui.today;
    if (i === 1) return copy.ui.tomorrow;
    const parsed = new Date(`${date}T12:00:00`);
    if (Number.isNaN(parsed.getTime())) return date;
    const label = new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(parsed);
    return label.charAt(0).toUpperCase() + label.slice(1);
  };

  return days
    .map((d, i) => {
      const cond = conditionKey(d.code);
      const left = ((d.tmin - min) / span) * 100;
      const right = ((max - d.tmax) / span) * 100;
      return `
      <div class="flex items-center gap-3 py-3 border-b border-black/5 last:border-0">
        <div class="w-16 shrink-0 text-sm text-[color:var(--color-moss)]/80">${esc(dayLabel(d.date, i))}</div>
        <div class="w-8 shrink-0 text-center text-lg" aria-hidden="true">${copy.cond[cond].icon}</div>
        <div class="hidden sm:block flex-1 min-w-0">
          <div class="relative h-1.5 rounded-full bg-[color:var(--color-mist)]">
            <div class="absolute inset-y-0 rounded-full bg-[color:var(--color-emerald)]" style="left:${left.toFixed(1)}%;right:${right.toFixed(1)}%"></div>
          </div>
        </div>
        <div class="flex-1 sm:flex-none text-right text-sm tabular-nums">
          <span class="text-[color:var(--color-moss)]/60">${Math.round(d.tmin)}°</span>
          <span class="mx-1 text-[color:var(--color-moss)]/40">/</span>
          <span class="font-medium">${Math.round(d.tmax)}°</span>
        </div>
        <div class="w-14 shrink-0 text-right text-xs text-[color:var(--color-moss)]/60">💧${Math.round(d.pop)}%</div>
      </div>`;
    })
    .join('');
}

export function renderRisk(advice: Advice, copy: WeatherCopy): string {
  if (!advice.risks.length) {
    return `
      <div class="flex items-center gap-3 rounded-2xl border border-[color:var(--color-emerald)]/25 bg-[color:var(--color-emerald)]/5 px-5 py-4">
        <span class="text-lg" aria-hidden="true">✅</span>
        <span class="text-sm text-[color:var(--color-moss)]">${esc(copy.ui.noRisk)}</span>
      </div>`;
  }
  return `
    <div class="rounded-2xl border border-red-200 bg-red-50 px-5 py-4">
      <div class="flex items-center gap-2 text-sm font-semibold text-red-700">
        <span aria-hidden="true">⚠️</span><span>${esc(copy.ui.riskTitle)}</span>
      </div>
      <ul class="mt-3 space-y-2">
        ${advice.risks
          .map(
            (r) =>
              `<li class="flex items-start gap-2 text-sm leading-relaxed text-red-800/90"><span aria-hidden="true">${r.icon}</span><span>${esc(r.text)}</span></li>`
          )
          .join('')}
      </ul>
    </div>`;
}

export function renderList(items: WxItem[]): string {
  if (!items.length) return '';
  return `
    <ul class="space-y-3">
      ${items
        .map(
          (it) => `
        <li class="flex items-start gap-3">
          <span class="mt-0.5 text-lg leading-none" aria-hidden="true">${it.icon}</span>
          <span class="text-sm leading-relaxed text-[color:var(--color-moss)]">${esc(it.text)}</span>
        </li>`
        )
        .join('')}
    </ul>`;
}

export function formatUpdated(at: number, locale: string, tz: string): string {
  try {
    return new Intl.DateTimeFormat(locale, {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date(at));
  } catch {
    return new Date(at).toISOString().slice(11, 16);
  }
}
