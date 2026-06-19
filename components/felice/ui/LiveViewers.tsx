'use client';

import { useEffect, useState } from 'react';

/**
 * Aviso de prova social: "X pessoas vendo esta página agora".
 * O número oscila levemente dentro de uma faixa para parecer "ao vivo".
 */
export function LiveViewers({ min = 17, max = 42 }: { min?: number; max?: number }) {
  const [count, setCount] = useState(Math.round((min + max) / 2));

  useEffect(() => {
    const rand = (lo: number, hi: number) => lo + Math.floor(Math.random() * (hi - lo + 1));
    setCount(rand(min, max));
    const id = setInterval(() => {
      setCount((c) => {
        const delta = rand(-3, 3);
        const next = c + delta;
        return Math.min(max, Math.max(min, next));
      });
    }, 4000);
    return () => clearInterval(id);
  }, [min, max]);

  return (
    <div className="live-viewers" aria-live="off">
      <span className="live-dot" />
      <b>{count}</b>&nbsp;pessoas vendo esta página agora
    </div>
  );
}
