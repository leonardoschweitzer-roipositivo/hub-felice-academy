'use client';

import { useEffect, useRef } from 'react';

/**
 * Barra superior de escassez AUTÊNTICA, sem countdown: a entrada da mentoria é
 * por aplicação e as vagas são limitadas por turma. Reusa o visual dourado
 * `.urgency-bar` do felice.css e mede a própria altura para expor `--urgency-h`
 * (o header e o hero descem o necessário).
 */
export function MentoriaGestaoTopBar() {
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
          <span className="mz-vagas-dot" /> Poucas vagas por turma
        </span>
        <span className="urgency-sep" />
        <span className="mz-vagas" style={{ fontWeight: 600 }}>
          Entrada por aplicação · resposta rápida
        </span>
      </div>
    </div>
  );
}
