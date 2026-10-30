'use client';

import { useEffect, useState } from 'react';
import { SECOES } from '../content';

/** Índice lateral (desktop) e faixa rolável (mobile), com a seção atual marcada. */
export function Indice() {
  const [atual, setAtual] = useState<string>(SECOES[0].id);

  useEffect(() => {
    const els = SECOES.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setAtual(vis[0].target.id);
      },
      { rootMargin: '-20% 0px -65% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="ds-indice" aria-label="Seções">
      {SECOES.map((s) => (
        <a key={s.id} href={`#${s.id}`} className={atual === s.id ? 'is-on' : ''}>
          <span>{s.n}</span> {s.t}
        </a>
      ))}
    </nav>
  );
}
