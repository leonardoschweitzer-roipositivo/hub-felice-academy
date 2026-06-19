'use client';

import { useState } from 'react';
import { FUNNEL_5N } from '../content/toolsData';

/** Visualizador interativo do Funil 5Ns (N1 → N5). */
export function Funnel5N() {
  const [active, setActive] = useState(0);
  const level = FUNNEL_5N[active];

  return (
    <div className="kit-funnel">
      <div className="kit-funnel-bars">
        {FUNNEL_5N.map((l, i) => (
          <button
            key={l.nivel}
            type="button"
            className={`kit-funnel-bar${i === active ? ' is-active' : ''}`}
            style={{ width: `${100 - i * 14}%` }}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
          >
            <strong>{l.nivel}</strong> {l.nome}
          </button>
        ))}
      </div>
      <div className="kit-funnel-detail">
        <h4>
          {level.nivel} · {level.nome}
        </h4>
        <p>
          <strong>Objetivo:</strong> {level.objetivo}
        </p>
        <p>
          <strong>Tipo de vídeo:</strong> {level.tipoVideo}
        </p>
      </div>
    </div>
  );
}
