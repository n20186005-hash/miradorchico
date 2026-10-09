import type { APIRoute } from 'astro';
import { LANGUAGES } from '../i18n/utils';
import { ATTRACTION } from '../data/attraction';

const PATHS = ['', 'privacy/', 'terms/', 'cookies/', 'como-llegar/', 'circuito-chico-recorrido/', 'vistas-lago-moreno/'];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL(ATTRACTION.siteUrl);
  const urls: string[] = [];

  for (const lang of LANGUAGES) {
    for (const p of PATHS) {
      const loc = new URL(`/${lang}/${p}`, base).href;
      const alternates = LANGUAGES.map(
        (l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${new URL(`/${l}/${p}`, base).href}"/>`
      ).join('');
      urls.push(
        `<url><loc>${loc}</loc>${alternates}<xhtml:link rel="alternate" hreflang="x-default" href="${new URL(`/${LANGUAGES[0]}/${p}`, base).href}"/></url>`
      );
    }
  }

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' +
    urls.join('') +
    '</urlset>';

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
