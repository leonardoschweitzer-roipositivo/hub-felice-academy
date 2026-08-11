'use client';

import { useEffect } from 'react';

/* Marca só as jornadas que realmente cortam na largura atual, para o
   esmaecimento da borda e a dica de arrastar não aparecerem quando a
   corrente inteira já cabe na tela. Não renderiza nada. */
export function FlowScrollHint() {
  useEffect(() => {
    const flows = Array.from(document.querySelectorAll<HTMLElement>('.arq-flow'));
    const sync = () => {
      flows.forEach((f) => {
        const s = f.querySelector<HTMLElement>('.arq-scroll');
        if (!s) return;
        f.classList.toggle('is-scrollable', s.scrollWidth > s.clientWidth + 2);
      });
    };
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, []);

  return null;
}
