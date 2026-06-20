'use client';

import { useEffect, useRef, useState } from 'react';
import { DEADLINE_ISO } from './content';

/**
 * Barra de escassez AUTÊNTICA: contagem regressiva até o fechamento real da
 * turma (DEADLINE_ISO) + "Vagas limitadas por turma". Sem viewers nem toasts
 * falsos — só o prazo de matrícula de verdade.
 *
 * Reusa o visual dourado `.urgency-bar` do felice.css e mede a própria altura
 * para expor `--urgency-h` (o header e o hero descem o necessário).
 */
function useCountdown(targetIso: string) {
  const [left, setLeft] = useState({ d: 0, h: 0, m: 0, s: 0, done: false });

  useEffect(() => {
    const target = new Date(targetIso).getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setLeft({ d: 0, h: 0, m: 0, s: 0, done: true });
        return;
      }
      const s = Math.floor(diff / 1000);
      setLeft({
        d: Math.floor(s / 86400),
        h: Math.floor((s % 86400) / 3600),
        m: Math.floor((s % 3600) / 60),
        s: s % 60,
        done: false,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetIso]);

  return left;
}

const pad = (n: number) => String(n).padStart(2, '0');

export function MaestriaDeadlineBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const { d, h, m, s } = useCountdown(DEADLINE_ISO);

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
        <div className="countdown" role="timer" aria-live="off">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2 2M9 2h6" />
          </svg>
          <span className="countdown-label">As matrículas encerram em</span>
          <span className="countdown-clock mz-clock">
            <span className="mz-seg">
              <b>{pad(d)}</b>
              <em>dias</em>
            </span>
            <i>:</i>
            <span className="mz-seg">
              <b>{pad(h)}</b>
              <em>hrs</em>
            </span>
            <i>:</i>
            <span className="mz-seg">
              <b>{pad(m)}</b>
              <em>min</em>
            </span>
            <i>:</i>
            <span className="mz-seg">
              <b>{pad(s)}</b>
              <em>seg</em>
            </span>
          </span>
        </div>
        <span className="urgency-sep" />
        <span className="mz-vagas">
          <span className="mz-vagas-dot" /> Vagas limitadas por turma
        </span>
      </div>
    </div>
  );
}
