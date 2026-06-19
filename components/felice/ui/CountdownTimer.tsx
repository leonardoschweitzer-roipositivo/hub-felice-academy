'use client';

import { useEffect, useState } from 'react';

/**
 * Contador regressivo da oferta. Zera (reinicia) toda vez que a página é
 * aberta — não persiste entre recargas. Quando chega a zero, para em 00:00.
 */
export function CountdownTimer({ minutes = 8 }: { minutes?: number }) {
  const total = minutes * 60;
  const [secondsLeft, setSecondsLeft] = useState(total);

  useEffect(() => {
    setSecondsLeft(total); // reinicia ao montar (cada visita)
    const id = setInterval(() => {
      setSecondsLeft((s) => (s <= 1 ? 0 : s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [total]);

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const ss = String(secondsLeft % 60).padStart(2, '0');

  return (
    <div className="countdown" role="timer" aria-live="off">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l2 2M9 2h6" />
      </svg>
      <span className="countdown-label">Esta oferta termina em</span>
      <span className="countdown-clock">
        <b>{mm}</b>
        <i>:</i>
        <b>{ss}</b>
      </span>
    </div>
  );
}
