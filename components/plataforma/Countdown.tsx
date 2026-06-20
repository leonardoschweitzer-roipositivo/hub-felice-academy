'use client';

import { useEffect, useState } from 'react';

/**
 * Conta regressiva até um evento a `offsetMin` minutos de agora. O alvo é
 * fixado no mount (client-only) — começa como null para não quebrar a
 * hidratação (servidor e primeiro render do client mostram o mesmo placeholder).
 */
export function Countdown({ offsetMin }: { offsetMin: number }) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const target = Date.now() + offsetMin * 60_000;
    const tick = () => setLeft(Math.max(0, target - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [offsetMin]);

  const ms = left ?? 0;
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1000);

  const cells: [number, string][] =
    d > 0
      ? [
          [d, 'dias'],
          [h, 'horas'],
          [m, 'min'],
        ]
      : [
          [h, 'horas'],
          [m, 'min'],
          [s, 'seg'],
        ];

  return (
    <div className="countdown" aria-label="Tempo restante">
      {cells.map(([num, lbl]) => (
        <div className="cd-cell" key={lbl}>
          <div className="cd-num">{String(num).padStart(2, '0')}</div>
          <div className="cd-lbl">{lbl}</div>
        </div>
      ))}
    </div>
  );
}
