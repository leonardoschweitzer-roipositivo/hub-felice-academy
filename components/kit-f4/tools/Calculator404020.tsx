'use client';

import { useState } from 'react';

/** Calculadora da proporção 40/40/20 — planeja nº de vídeos por pilar. */
export function Calculator404020() {
  const [total, setTotal] = useState(20);
  const conexao = Math.round(total * 0.4);
  const autoridade = Math.round(total * 0.4);
  const conversao = total - conexao - autoridade;

  return (
    <div className="kit-calc">
      <label className="kit-calc-input">
        Vídeos no mês
        <input
          type="number"
          min={0}
          max={300}
          value={total}
          onChange={(e) => setTotal(Math.max(0, Number(e.target.value) || 0))}
        />
      </label>
      <div className="kit-calc-grid">
        <div className="kit-calc-pillar kit-calc-pillar--conexao">
          <span className="kit-calc-pct">40%</span>
          <strong>{conexao}</strong>
          <span>Conexão</span>
        </div>
        <div className="kit-calc-pillar kit-calc-pillar--autoridade">
          <span className="kit-calc-pct">40%</span>
          <strong>{autoridade}</strong>
          <span>Autoridade</span>
        </div>
        <div className="kit-calc-pillar kit-calc-pillar--conversao">
          <span className="kit-calc-pct">20%</span>
          <strong>{conversao}</strong>
          <span>Conversão</span>
        </div>
      </div>
    </div>
  );
}
