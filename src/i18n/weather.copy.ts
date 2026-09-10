// ─────────────────────────────────────────────────────────────────────────────
// Weather module copy (zh / en / it / es)
//
// Kept separate from translations.core / translations.extra because this copy is
// coupled to the weather decision engine in `src/lib/weather.ts`: the `rule`
// keys must match the rule ids used by that engine.
//
// Tone rules (product requirement):
//   - plain, spoken language for travellers — no meteorological jargon
//   - never mention "free API", "no key", "no signup" in the UI
//   - never promise rain ("60% chance" -> "bring an umbrella"), just advise
// ─────────────────────────────────────────────────────────────────────────────
import type { Lang } from './utils';

export type CondKey =
  | 'clear'
  | 'mainlyClear'
  | 'partlyCloudy'
  | 'overcast'
  | 'fog'
  | 'drizzle'
  | 'rain'
  | 'heavyRain'
  | 'freezingRain'
  | 'snow'
  | 'thunder';

export interface WeatherCopy {
  ui: {
    sectionNum: string;
    heading: string;
    subtitle: string;
    current: string;
    feels: string;
    precip: string;
    wind: string;
    humidity: string;
    uv: string;
    direction: string;
    uvLevel: [string, string, string, string, string];
    forecastTitle: string;
    today: string;
    tomorrow: string;
    adviceTitle: string;
    tabOutfit: string;
    tabPlan: string;
    tabPack: string;
    riskTitle: string;
    noRisk: string;
    loading: string;
    error: string;
    source: string;
    updated: string;
  };
  cond: Record<CondKey, { label: string; icon: string }>;
  rule: Record<string, string>;
}

export const WX_COPY: Record<Lang, WeatherCopy> = {
  zh: {
    ui: {
      sectionNum: `实时天气`,
      heading: `此刻的天气<br/><em class="text-[color:var(--color-emerald)]">与出行建议</em>`,
      subtitle: `巴里洛切天气多变、风大。以下为观景台所在位置的实时天气、未来 7 天预报，以及根据天气自动生成的出行建议，帮您决定穿什么、怎么玩、带什么。`,
      current: `实时天气`,
      feels: `体感温度`,
      precip: `降水概率`,
      wind: `风力`,
      humidity: `湿度`,
      uv: `紫外线`,
      direction: `风向`,
      uvLevel: [`弱`, `中等`, `强`, `很强`, `极强`],
      forecastTitle: `未来 7 天`,
      today: `今天`,
      tomorrow: `明天`,
      adviceTitle: `出行建议`,
      tabOutfit: `出行穿搭`,
      tabPlan: `游玩安排`,
      tabPack: `随身物品`,
      riskTitle: `风险提醒`,
      noRisk: `暂无气象预警，放心出发`,
      loading: `正在获取实时天气…`,
      error: `实时天气暂时不可用，请稍后再试，或参考下方的气候与光影信息。`,
      source: `气象数据：Open-Meteo`,
      updated: `更新于`,
    },
    cond: {
      clear: { label: `晴`, icon: `☀️` },
      mainlyClear: { label: `晴间多云`, icon: `🌤️` },
      partlyCloudy: { label: `多云`, icon: `⛅` },
      overcast: { label: `阴`, icon: `☁️` },
      fog: { label: `雾`, icon: `🌫️` },
      drizzle: { label: `小雨`, icon: `🌦️` },
      rain: { label: `中雨`, icon: `🌧️` },
      heavyRain: { label: `大雨`, icon: `🌧️` },
      freezingRain: { label: `冻雨`, icon: `🧊` },
      snow: { label: `降雪`, icon: `❄️` },
      thunder: { label: `雷暴`, icon: `⛈️` },
    },
    rule: {
      riskThunder: `雷暴天气：请勿登高，不要靠近湖面或空旷台地，也不要在大树下避雨。`,
      riskHeavyRain: `降雨较强：避开山谷、低洼处与崖边，注意山洪与落石；游船、缆车可能停运。`,
      riskFreezing: `有冻雨或结冰：路面湿滑，请穿防滑鞋、放慢脚步，谨慎驾驶。`,
      riskSnow: `有降雪：台地与山路可能结冰，注意防滑保暖，谨慎驾驶。`,
      riskWind: `大风天气：远离崖边、湖岸礁石与广告牌，缆车与游船可能停运。`,
      riskFog: `能见度差：湖景与雪峰可能被遮蔽，行车请减速并开启雾灯。`,
      riskFire: `天气干燥且风大：森林火险高，严禁一切明火与吸烟。`,

      outfitFreezing: `低温结冰：请穿防滑保暖的鞋子与厚外套。`,
      outfitCold: `气温偏低：注意防寒，建议厚外套与围巾。`,
      outfitHot: `气温偏高：建议轻薄透气的衣物。`,
      outfitWind: `风力较大：建议穿防风外套，避免宽松长裙和容易被吹落的帽子。`,
      outfitRain: `有雨：建议防水外套与防水鞋。`,
      outfitDiff: `昼夜温差大：建议备一件外套，方便随时增减。`,
      outfitUv: `紫外线较强：注意防晒，可穿长袖或防晒衣。`,
      outfitMild: `体感舒适：正常穿搭即可，早晚可加一件薄外套。`,

      planThunder: `立即停止水上与登山活动，尽快进入室内安全场所。`,
      planHeavyRain: `不建议户外游玩，游船、缆车等项目可能停运。`,
      planSnow: `雪天路滑：减少远距离徒步，留意道路通行信息。`,
      planWind: `湖上游船与部分露天项目可能停运，行程请预留弹性。`,
      planHot: `缩短正午户外时间，多在树荫或室内休息。`,
      planFog: `不适合观景看湖，建议改期或换到能见度更好的时段。`,
      planRain: `优先安排室内景点，露天与湖上项目建议延后。`,
      planClear: `天气晴好：适合户外游览，也很适合看日出日落。`,
      planGolden: `日落前约一小时，雪峰常被夕阳染成金红，是拍摄的最佳窗口。`,
      planCloudy: `光线柔和：很适合拍照，也适合长时间户外漫步。`,

      packRaincoat: `雨衣（风大时比长柄伞更稳妥）`,
      packUmbrella: `折叠伞`,
      packShoe: `防滑鞋`,
      packWarm: `厚外套、围巾`,
      packSun: `防晒霜、墨镜、遮阳帽`,
      packWater: `充足的饮用水`,
      packWind: `防风外套，固定好帽子`,
      packMask: `口罩（能见度差时）`,
      packCamera: `相机与备用电池`,
    },
  },

  en: {
    ui: {
      sectionNum: `Live Weather`,
      heading: `Today's weather<br/><em class="text-[color:var(--color-emerald)]"> & travel advice</em>`,
      subtitle: `Bariloche's weather is changeable and windy. Below is the live weather at the viewpoint, a 7-day forecast, and advice generated automatically from the data — so you know what to wear, what to do and what to bring.`,
      current: `Right now`,
      feels: `Feels like`,
      precip: `Rain chance`,
      wind: `Wind`,
      humidity: `Humidity`,
      uv: `UV`,
      direction: `Direction`,
      uvLevel: [`Low`, `Moderate`, `High`, `Very high`, `Extreme`],
      forecastTitle: `Next 7 days`,
      today: `Today`,
      tomorrow: `Tomorrow`,
      adviceTitle: `Travel advice`,
      tabOutfit: `What to wear`,
      tabPlan: `What to do`,
      tabPack: `What to pack`,
      riskTitle: `Weather alerts`,
      noRisk: `No weather alerts — enjoy your visit`,
      loading: `Loading live weather…`,
      error: `Live weather is unavailable right now. Please try again later, or read the climate notes below.`,
      source: `Weather data: Open-Meteo`,
      updated: `Updated`,
    },
    cond: {
      clear: { label: `Clear`, icon: `☀️` },
      mainlyClear: { label: `Mostly clear`, icon: `🌤️` },
      partlyCloudy: { label: `Partly cloudy`, icon: `⛅` },
      overcast: { label: `Overcast`, icon: `☁️` },
      fog: { label: `Fog`, icon: `🌫️` },
      drizzle: { label: `Light rain`, icon: `🌦️` },
      rain: { label: `Rain`, icon: `🌧️` },
      heavyRain: { label: `Heavy rain`, icon: `🌧️` },
      freezingRain: { label: `Freezing rain`, icon: `🧊` },
      snow: { label: `Snow`, icon: `❄️` },
      thunder: { label: `Thunderstorm`, icon: `⛈️` },
    },
    rule: {
      riskThunder: `Thunderstorms: do not climb, keep away from the lake and open terraces, and never shelter under a lone tree.`,
      riskHeavyRain: `Heavy rain: avoid valleys, low ground and the cliff edge; watch for flash floods and rockfall. Boats and cable cars may stop.`,
      riskFreezing: `Freezing rain or ice: surfaces are slippery — wear grippy shoes, slow down and drive carefully.`,
      riskSnow: `Snow: terraces and mountain roads may ice up — dress warm, watch your step and drive carefully.`,
      riskWind: `Strong wind: stay clear of the cliff edge, lakeside rocks and signboards. Cable cars and boats may stop.`,
      riskFog: `Poor visibility: the lake and peaks may be hidden — slow down and use fog lights when driving.`,
      riskFire: `Dry and windy: high fire risk — no open flames or smoking of any kind.`,

      outfitFreezing: `Freezing conditions: wear insulated, grippy shoes and a thick coat.`,
      outfitCold: `Chilly: dress for the cold — a thick coat and a scarf.`,
      outfitHot: `Hot: choose light, breathable clothing.`,
      outfitWind: `Windy: wear a windproof jacket and skip loose long skirts or hats that blow off.`,
      outfitRain: `Rain: a waterproof jacket and shoes are a good idea.`,
      outfitDiff: `Big day–night temperature swing: bring a layer you can add or remove.`,
      outfitUv: `Strong UV: protect yourself with long sleeves or sun-protective clothing.`,
      outfitMild: `Comfortable: normal clothing is fine; a light layer helps in the morning and evening.`,

      planThunder: `Stop water and mountain activities at once and head indoors.`,
      planHeavyRain: `Outdoor plans are not advised; boats and cable cars may be suspended.`,
      planSnow: `Snowy and slippery: keep hikes short and check road conditions.`,
      planWind: `Lake cruises and some open-air activities may be cancelled — keep your plans flexible.`,
      planHot: `Limit time outdoors at midday; rest in the shade or indoors.`,
      planFog: `Not a good time for lake views — reschedule or come back when it clears.`,
      planRain: `Favour indoor sights; postpone open-air and lake activities.`,
      planClear: `Clear skies: great for outdoor exploring and for sunrise or sunset.`,
      planGolden: `About an hour before sunset the peaks often glow gold-red — the best photo window.`,
      planCloudy: `Soft light: lovely for photos and for long, easy walks.`,

      packRaincoat: `Rain jacket (safer than a long umbrella in wind)`,
      packUmbrella: `Folding umbrella`,
      packShoe: `Grippy shoes`,
      packWarm: `Thick coat, scarf`,
      packSun: `Sunscreen, sunglasses, hat`,
      packWater: `Plenty of drinking water`,
      packWind: `Windproof jacket, secure your hat`,
      packMask: `Face mask (when visibility is poor)`,
      packCamera: `Camera and spare battery`,
    },
  },

  it: {
    ui: {
      sectionNum: `Meteo in tempo reale`,
      heading: `Il meteo di oggi<br/><em class="text-[color:var(--color-emerald)]"> e i consigli di viaggio</em>`,
      subtitle: `Il clima di Bariloche è variabile e ventoso. Qui trovi il meteo in tempo reale al belvedere, le previsioni per 7 giorni e consigli generati automaticamente dai dati: cosa indossare, cosa fare e cosa portare.`,
      current: `Adesso`,
      feels: `Percepita`,
      precip: `Probabilità di pioggia`,
      wind: `Vento`,
      humidity: `Umidità`,
      uv: `UV`,
      direction: `Direzione`,
      uvLevel: [`Bassa`, `Moderata`, `Alta`, `Molto alta`, `Estrema`],
      forecastTitle: `Prossimi 7 giorni`,
      today: `Oggi`,
      tomorrow: `Domani`,
      adviceTitle: `Consigli di viaggio`,
      tabOutfit: `Come vestirsi`,
      tabPlan: `Cosa fare`,
      tabPack: `Cosa portare`,
      riskTitle: `Avvisi meteo`,
      noRisk: `Nessun avviso meteo: buona visita`,
      loading: `Caricamento del meteo in tempo reale…`,
      error: `Il meteo in tempo reale non è disponibile. Riprova più tardi o leggi le note sul clima qui sotto.`,
      source: `Dati meteo: Open-Meteo`,
      updated: `Aggiornato`,
    },
    cond: {
      clear: { label: `Sereno`, icon: `☀️` },
      mainlyClear: { label: `Prevalentemente sereno`, icon: `🌤️` },
      partlyCloudy: { label: `Parzialmente nuvoloso`, icon: `⛅` },
      overcast: { label: `Coperto`, icon: `☁️` },
      fog: { label: `Nebbia`, icon: `🌫️` },
      drizzle: { label: `Pioggia debole`, icon: `🌦️` },
      rain: { label: `Pioggia`, icon: `🌧️` },
      heavyRain: { label: `Pioggia forte`, icon: `🌧️` },
      freezingRain: { label: `Pioggia gelata`, icon: `🧊` },
      snow: { label: `Neve`, icon: `❄️` },
      thunder: { label: `Temporale`, icon: `⛈️` },
    },
    rule: {
      riskThunder: `Temporali: non salire in quota, stai lontano dal lago e dalle terrazze aperte e non ripararti sotto un albero isolato.`,
      riskHeavyRain: `Pioggia intensa: evita valli, zone depresse e il bordo della scarpata; attenzione a piene improvvise e caduta massi. Battelli e funivie possono fermarsi.`,
      riskFreezing: `Pioggia gelata o ghiaccio: superfici scivolose — usa scarpe con grip, vai piano e guida con prudenza.`,
      riskSnow: `Neve: terrazze e strade di montagna possono ghiacciarsi — vestiti caldo, attenzione ai passi e guida con prudenza.`,
      riskWind: `Vento forte: stai lontano dal bordo della scarpata, dagli scogli del lago e dalle insegne. Funivie e battelli possono fermarsi.`,
      riskFog: `Visibilità scarsa: lago e cime possono essere nascosti — rallenta e accendi i fendinebbia alla guida.`,
      riskFire: `Secco e ventoso: rischio incendi elevato — vietati fiamme libere e fumo.`,

      outfitFreezing: `Freddo e ghiaccio: scarpe calde con grip e cappotto pesante.`,
      outfitCold: `Freddo: vestiti pesante, con cappotto e sciarpa.`,
      outfitHot: `Caldo: scegli abiti leggeri e traspiranti.`,
      outfitWind: `Ventoso: giacca antivento; evita gonne lunghe e cappelli che volano via.`,
      outfitRain: `Pioggia: meglio giacca e scarpe impermeabili.`,
      outfitDiff: `Forte escursione termica: porta uno strato da mettere e togliere.`,
      outfitUv: `UV forte: proteggiti con maniche lunghe o abbigliamento anti-UV.`,
      outfitMild: `Clima mite: abbigliamento normale; uno strato leggero per mattina e sera.`,

      planThunder: `Interrompi subito le attività in acqua e in montagna e rientra al chiuso.`,
      planHeavyRain: `Non consigliato all'aperto; battelli e funivie possono essere sospesi.`,
      planSnow: `Neve e scivoloso: riduci le escursioni e controlla le condizioni delle strade.`,
      planWind: `Crociere sul lago e alcune attività all'aperto possono saltare: mantieni flessibilità.`,
      planHot: `Limita le ore all'aperto a mezzogiorno; riposa all'ombra o al chiuso.`,
      planFog: `Non è il momento per il panorama: riprogramma o torna quando schiarisce.`,
      planRain: `Preferisci luoghi al chiuso; rimanda attività all'aperto e sul lago.`,
      planClear: `Cielo sereno: ideale per esplorare all'aperto e per alba o tramonto.`,
      planGolden: `Circa un'ora prima del tramonto le cime si tingono d'oro e rosso: la migliore finestra per le foto.`,
      planCloudy: `Luce morbida: perfetta per le foto e per lunghe passeggiate tranquille.`,

      packRaincoat: `Giacca antipioggia (più sicura di un ombrello col vento)`,
      packUmbrella: `Ombrello pieghevole`,
      packShoe: `Scarpe con grip`,
      packWarm: `Cappotto pesante, sciarpa`,
      packSun: `Crema solare, occhiali da sole, cappello`,
      packWater: `Acqua a sufficienza`,
      packWind: `Giacca antivento, fissa bene il cappello`,
      packMask: `Mascherina (quando la visibilità è scarsa)`,
      packCamera: `Fotocamera e batteria di riserva`,
    },
  },

  es: {
    ui: {
      sectionNum: `Clima en vivo`,
      heading: `El tiempo de hoy<br/><em class="text-[color:var(--color-emerald)]"> y consejos de viaje</em>`,
      subtitle: `El clima de Bariloche es cambiante y ventoso. Aquí tienes el tiempo en vivo en el mirador, el pronóstico de 7 días y consejos generados automáticamente a partir de los datos: qué ponerse, qué hacer y qué llevar.`,
      current: `Ahora mismo`,
      feels: `Sensación`,
      precip: `Prob. de lluvia`,
      wind: `Viento`,
      humidity: `Humedad`,
      uv: `UV`,
      direction: `Dirección`,
      uvLevel: [`Baja`, `Moderada`, `Alta`, `Muy alta`, `Extrema`],
      forecastTitle: `Próximos 7 días`,
      today: `Hoy`,
      tomorrow: `Mañana`,
      adviceTitle: `Consejos de viaje`,
      tabOutfit: `Qué ponerse`,
      tabPlan: `Qué hacer`,
      tabPack: `Qué llevar`,
      riskTitle: `Avisos meteorológicos`,
      noRisk: `Sin avisos meteorológicos: disfrute su visita`,
      loading: `Cargando el tiempo en vivo…`,
      error: `El tiempo en vivo no está disponible. Inténtelo más tarde o lea las notas de clima de abajo.`,
      source: `Datos meteorológicos: Open-Meteo`,
      updated: `Actualizado`,
    },
    cond: {
      clear: { label: `Despejado`, icon: `☀️` },
      mainlyClear: { label: `Mayormente despejado`, icon: `🌤️` },
      partlyCloudy: { label: `Parcialmente nublado`, icon: `⛅` },
      overcast: { label: `Cubierto`, icon: `☁️` },
      fog: { label: `Niebla`, icon: `🌫️` },
      drizzle: { label: `Lluvia débil`, icon: `🌦️` },
      rain: { label: `Lluvia`, icon: `🌧️` },
      heavyRain: { label: `Lluvia intensa`, icon: `🌧️` },
      freezingRain: { label: `Lluvia helada`, icon: `🧊` },
      snow: { label: `Nieve`, icon: `❄️` },
      thunder: { label: `Tormenta`, icon: `⛈️` },
    },
    rule: {
      riskThunder: `Tormentas: no suba a zonas altas, manténgase lejos del lago y de terrazas abiertas, y no se refugie bajo un árbol aislado.`,
      riskHeavyRain: `Lluvia intensa: evite valles, zonas bajas y el borde del acantilado; cuidado con crecidas y caída de rocas. Los barcos y teleféricos pueden suspenderse.`,
      riskFreezing: `Lluvia helada o hielo: superficies resbaladizas — use calzado con agarre, vaya despacio y conduzca con cuidado.`,
      riskSnow: `Nieve: las terrazas y los caminos de montaña pueden helarse — abríguese, mire dónde pisa y conduzca con cuidado.`,
      riskWind: `Viento fuerte: aléjese del borde del acantilado, de las rocas de la costa y de los carteles. Teleféricos y barcos pueden suspenderse.`,
      riskFog: `Mala visibilidad: el lago y las cumbres pueden quedar ocultos — reduzca la velocidad y use las luces antiniebla.`,
      riskFire: `Seco y ventoso: alto riesgo de incendio — prohibido cualquier fuego o fumar.`,

      outfitFreezing: `Frío y hielo: calzado cálido con agarre y abrigo grueso.`,
      outfitCold: `Hace frío: abríguese con un buen abrigo y bufanda.`,
      outfitHot: `Calor: elija ropa ligera y transpirable.`,
      outfitWind: `Ventoso: use chaqueta cortavientos y evite faldas largas y gorros que se vuelen.`,
      outfitRain: `Lluvia: conviene una chaqueta y calzado impermeables.`,
      outfitDiff: `Gran amplitud térmica: lleve una prenda que pueda ponerse o quitarse.`,
      outfitUv: `UV alto: protéjase con mangas largas o ropa de protección solar.`,
      outfitMild: `Clima agradable: ropa normal; una capa ligera para la mañana y la noche.`,

      planThunder: `Suspenda de inmediato las actividades en el agua y en la montaña y refúgiese bajo techo.`,
      planHeavyRain: `No se recomiendan actividades al aire libre; barcos y teleféricos pueden suspenderse.`,
      planSnow: `Nieve y resbaladizo: reduzca las caminatas y consulte el estado de los caminos.`,
      planWind: `Los paseos en barco y algunas actividades al aire libre pueden cancelarse: deje margen en su plan.`,
      planHot: `Reduzca el tiempo al aire libre al mediodía; descanse a la sombra o bajo techo.`,
      planFog: `No es buen momento para el mirador: reprograme o vuelva cuando despeje.`,
      planRain: `Priorice lugares bajo techo; aplace las actividades al aire libre y en el lago.`,
      planClear: `Cielo despejado: ideal para recorrer al aire libre y para el amanecer o el atardecer.`,
      planGolden: `Cerca de una hora antes del atardecer las cumbres suelen teñirse de oro y rojo: la mejor ventana para fotografiar.`,
      planCloudy: `Luz suave: ideal para fotos y para caminatas largas y tranquilas.`,

      packRaincoat: `Chaqueta impermeable (más segura que un paraguas con viento)`,
      packUmbrella: `Paraguas plegable`,
      packShoe: `Calzado con agarre`,
      packWarm: `Abrigo grueso, bufanda`,
      packSun: `Protector solar, gafas de sol, gorro`,
      packWater: `Agua suficiente`,
      packWind: `Chaqueta cortavientos, sujete bien el gorro`,
      packMask: `Mascarilla (si la visibilidad es mala)`,
      packCamera: `Cámara y batería de repuesto`,
    },
  },
};
