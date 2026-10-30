'use client';

import { useState } from 'react';

const ITENS = [
  { q: 'Pergunta de exemplo, curta e direta?', a: 'Resposta objetiva, em até três linhas, no tom da marca.' },
  { q: 'Segunda pergunta de exemplo?', a: 'O max-height do .acc-a é definido inline pelo componente: 0 fechado, 320px aberto.' },
];

export function FaqExemplo() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq" style={{ margin: 0 }}>
      {ITENS.map((it, i) => (
        <div key={it.q} className={`acc${open === i ? ' open' : ''}`}>
          <button className="acc-q" onClick={() => setOpen(open === i ? null : i)}>
            {it.q} <span className="ic">+</span>
          </button>
          <div className="acc-a" style={{ maxHeight: open === i ? '320px' : 0 }}>
            <p>{it.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
