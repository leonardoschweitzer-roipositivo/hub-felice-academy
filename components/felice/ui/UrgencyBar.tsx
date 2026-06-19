'use client';

import { useEffect, useRef } from 'react';
import { CountdownTimer } from './CountdownTimer';
import { LiveViewers } from './LiveViewers';

/**
 * Barra de urgência fixa no topo da página: contador regressivo da oferta +
 * prova social ("X pessoas vendo agora"). Fica visível o tempo todo.
 *
 * Mede a própria altura e a expõe em `--urgency-h` no container `.felice`,
 * para que o header e o hero desçam exatamente o necessário — não importa
 * se a barra quebra em 1, 2 ou mais linhas (mobile).
 */
export function UrgencyBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const root = bar?.closest('.felice') as HTMLElement | null;
    if (!bar || !root) return;

    let last = -1;
    const apply = () => {
      const h = bar.offsetHeight;
      // só escreve quando muda de fato — evita qualquer realimentação
      if (h !== last) {
        last = h;
        root.style.setProperty('--urgency-h', `${h}px`);
      }
    };
    apply();

    const ro = new ResizeObserver(apply);
    ro.observe(bar);
    window.addEventListener('resize', apply);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', apply);
    };
  }, []);

  return (
    <div className="urgency-bar" ref={barRef}>
      <div className="wrap urgency-bar-inner">
        <CountdownTimer minutes={8} />
        <span className="urgency-sep" />
        <LiveViewers />
      </div>
    </div>
  );
}
