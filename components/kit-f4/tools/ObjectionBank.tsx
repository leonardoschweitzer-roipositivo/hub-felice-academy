'use client';

import { useState } from 'react';
import { OBJECTIONS } from '../content/toolsData';

/** Banco de objeções copiáveis (gestão de objeções do CRC Comercial). */
export function ObjectionBank() {
  const [copied, setCopied] = useState<number | null>(null);

  const copy = async (text: string, i: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(i);
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      /* indisponível */
    }
  };

  return (
    <div className="kit-objections">
      {OBJECTIONS.map((o, i) => (
        <div className="kit-objection" key={i}>
          <p className="kit-objection-q">“{o.objecao}”</p>
          <p className="kit-objection-a">{o.resposta}</p>
          <button type="button" className="kit-copy-btn" onClick={() => copy(o.resposta, i)}>
            {copied === i ? '✓ Copiado' : 'Copiar resposta'}
          </button>
        </div>
      ))}
    </div>
  );
}
