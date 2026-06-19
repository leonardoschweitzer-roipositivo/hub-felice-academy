'use client';

import { useEffect, useRef, useState } from 'react';

const TOTAL = 5 * 60;
const STEPS = [
  'Enviar mensagem de confirmação (WhatsApp/SMS)',
  'Reforçar data, horário e profissional',
  'Anexar localização e orientações de chegada',
  'Registrar o contato no sistema',
];

/** Cronômetro da "Regra dos 5 minutos" + checklist de encerramento. */
export function FiveMinTimer() {
  const [left, setLeft] = useState(TOTAL);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState<Record<number, boolean>>({});
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    ref.current = window.setInterval(() => {
      setLeft((l) => {
        if (l <= 1) {
          setRunning(false);
          return 0;
        }
        return l - 1;
      });
    }, 1000);
    return () => {
      if (ref.current) window.clearInterval(ref.current);
    };
  }, [running]);

  const mm = String(Math.floor(left / 60)).padStart(2, '0');
  const ss = String(left % 60).padStart(2, '0');
  const reset = () => {
    setRunning(false);
    setLeft(TOTAL);
  };

  return (
    <div className="kit-timer">
      <div className={`kit-timer-clock${left === 0 ? ' is-up' : ''}`}>
        {mm}:{ss}
      </div>
      <div className="kit-timer-controls">
        <button type="button" className="btn btn-primary" onClick={() => setRunning((r) => !r)}>
          {running ? 'Pausar' : left === 0 ? 'Tempo esgotado' : 'Iniciar'}
        </button>
        <button type="button" className="btn btn-ghost" onClick={reset}>
          Zerar
        </button>
      </div>
      <ul className="kit-timer-checklist">
        {STEPS.map((s, i) => (
          <li key={i}>
            <label className={done[i] ? 'is-checked' : undefined}>
              <input type="checkbox" checked={!!done[i]} onChange={() => setDone((d) => ({ ...d, [i]: !d[i] }))} />
              <span className="kit-check-box" aria-hidden="true" />
              <span>{s}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
