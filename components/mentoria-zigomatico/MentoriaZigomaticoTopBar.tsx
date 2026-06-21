'use client';

import { useEffect, useRef } from 'react';

/**
 * Barra superior de escassez autêntica, sem countdown: entrada por aplicação e
 * vagas limitadas (a prática presencial exige turmas pequenas). Reusa o visual
 * `.urgency-bar` e mede a própria altura para expor `--urgency-h`.
 */
export function MentoriaZigomaticoTopBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const root = bar?.closest('.felice') as HTMLElement | null;
    if (!bar || !root) return;
    let last = -1;
    const apply = () => {
      const ht = bar.offsetHeight;
      if (ht !== last) {
        last = ht;
        root.style.setProperty('--urgency-h', `${ht}px`);
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
        <span className="mz-vagas">
          <span className="mz-vagas-dot" /> Turmas pequenas · poucas vagas
        </span>
        <span className="urgency-sep" />
        <span className="mz-vagas" style={{ fontWeight: 600 }}>
          Encontros presenciais · entrada por aplicação
        </span>
      </div>
    </div>
  );
}
