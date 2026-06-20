import type { CSSProperties } from 'react';

/** Aplica CSS custom properties (ex.: --acc) via style inline com tipagem ok. */
export const styleVars = (vars: Record<string, string | number>): CSSProperties =>
  vars as unknown as CSSProperties;

/** Gradiente de thumb a partir de um par de cores [de, para]. */
export const thumbVars = (thumb: [string, string]): CSSProperties =>
  ({ '--c1': thumb[0], '--c2': thumb[1] }) as unknown as CSSProperties;

/** Converte texto em slug URL-safe (sem acentos). */
export const slugify = (s: string): string =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/** Id curto único (client-side, usado no submit dos forms do admin). */
export const uid = (prefix = 'id'): string =>
  `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
