import type { Lang } from './utils';

type T = { zh: string; en: string; it: string; es: string };

export const t = (s: Record<string, string> | string, lang: Lang): string =>
  typeof s === 'string' ? s : (s[lang] || s.it || s.es || s.pt || '');

// Translation content is split across modules to keep this file manageable.
// Each module exposes the same set of named exports (one per site section),
// all typed as the 4-language `T` object above.
export * from './translations.core';
export * from './translations.extra';
