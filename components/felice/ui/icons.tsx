import type { ReactNode } from 'react';

/* Ícones compartilhados da página Felice. */

export const Check = ({ size = 20, stroke = '#E8B447' }: { size?: number; stroke?: string }): ReactNode => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/* Atalho usado nas listas (mesma cor dourada padrão). */
export const check = <Check />;
