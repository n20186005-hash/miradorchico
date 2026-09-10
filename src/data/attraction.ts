// ─────────────────────────────────────────────────────────────────────────────
// Central entity configuration for miradorchico.com
//
// This file is the single source of truth for the "single-attraction SEO entity
// binding" strategy. It keeps the domain meaning ("Mirador Chico") and the
// official attraction name ("Punto Panorámico - Circuito Chico") bound to the
// same real-world place, with consistent NAP data (Name / Address / Place).
//
//   {{DOMAIN_NAME}}            -> ATTRACTION.domain
//   {{ATTRACTION_FULL_NAME}}   -> ATTRACTION.fullName
//   {{ATTRACTION_SHORT_NAME}}  -> ATTRACTION.shortName   (domain meaning)
//   {{CITY_NAME}}              -> ATTRACTION.city
//   {{STATE_PROVINCE}}         -> ATTRACTION.state
//   {{COUNTRY_NAME}}           -> ATTRACTION.country
//   {{COUNTRY_CODE_2LETTER}}   -> ATTRACTION.countryCode
//   {{POSTAL_CODE}}            -> ATTRACTION.postalCode
//   {{LATITUDE}}               -> ATTRACTION.latitude
//   {{LONGITUDE}}              -> ATTRACTION.longitude
//   {{MAPS_SHARE_URL}}         -> ATTRACTION.mapsShareUrl
//   {{MAPS_EMBED_SRC}}         -> ATTRACTION.mapsEmbedSrc
//   {{GOVT_TOURISM_URL}}       -> ATTRACTION.govtTourismUrl
// ─────────────────────────────────────────────────────────────────────────────

export const ATTRACTION = {
  domain: 'miradorchico.com',
  siteUrl: 'https://miradorchico.com',

  fullName: 'Punto Panorámico - Circuito Chico',
  shortName: 'Mirador Chico',
  commonName: 'Punto Panorámico',

  city: 'San Carlos de Bariloche',
  cityShort: 'Bariloche',
  state: 'Río Negro',
  stateCode: 'AR-R',
  country: 'Argentina',
  countryCode: 'AR',
  postalCode: 'R8400',
  streetAddress: 'Cto. Chico (RP77), Circuito Chico',

  latitude: -41.0826966,
  longitude: -71.5465405,
  plusCode: 'WFHH+74',

  mapsShareUrl: 'https://maps.app.goo.gl/xxMwnuJaomSDMuVw7',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d42761.08459343349!2d-71.5465405!3d-41.0826966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a75a7ac573b15%3A0xafc44c986c92e7f1!2sPunto%20Panor%C3%A1mico%20-%20Circuito%20Chico!5e1!3m2!1szh-CN!2s!4v1789006265953!5m2!1szh-CN!2s',

  govtTourismUrl: 'https://barilocheturismo.gob.ar/es/circuito-chico',
  nationalParkUrl: 'https://www.argentina.gob.ar/parquesnacionales/nahuelhuapi',
  municipalityUrl: 'https://www.bariloche.gov.ar/',

  heroImage: '/gallery/punto-panoramico-circuito-chico-1.jpg',
  galleryPrefix: '/gallery/punto-panoramico-circuito-chico-',

  ga4Id: 'G-HXM22WWPKP',
} as const;

// Alternate names help Google reconcile the domain with the Knowledge Graph node.
export const ALTERNATE_NAMES = [
  ATTRACTION.commonName,
  ATTRACTION.shortName,
  `${ATTRACTION.cityShort} ${ATTRACTION.commonName}`,
  'Mirador del Circuito Chico',
];

// Nearby semantic cluster used in the entity intro and landmark markup.
export const NEARBY_LANDMARKS = [
  { name: 'Llao Llao', query: 'Llao Llao Bariloche' },
  { name: 'Cerro Catedral', query: 'Cerro Catedral Bariloche' },
  { name: 'Colonia Suiza', query: 'Colonia Suiza Bariloche' },
  { name: 'Bahía López', query: 'Bahía López Bariloche' },
  { name: 'Puerto Pañuelo', query: 'Puerto Pañuelo Bariloche' },
] as const;

export function absoluteUrl(path: string, site?: URL | null): string {
  const base = site ?? new URL(ATTRACTION.siteUrl);
  return new URL(path, base).href;
}
