import type { CSSProperties } from 'react';

/* Barra 100% empilhada: como a verba se reparte entre os três produtos.
   Existe para tornar visível de relance o desequilíbrio que a tabela só
   revela lendo linha por linha. */

export type Fatia = { id: string; nome: string; valor: number; rotulo: string };

export function BarraAlocacao({ fatias }: { fatias: Fatia[] }) {
  const total = fatias.reduce((a, f) => a + f.valor, 0) || 1;

  return (
    <div className="pj-aloc">
      <div className="pj-aloc-bar">
        {fatias.map((f) => (
          <div
            key={f.id}
            className={`pj-aloc-seg pj-aloc-seg--${f.id}`}
            style={{ '--w': `${(f.valor / total) * 100}%` } as CSSProperties}
            title={`${f.nome}: ${f.rotulo}`}
          >
            <span>{Math.round((f.valor / total) * 100)}%</span>
          </div>
        ))}
      </div>
      <ul className="pj-aloc-leg">
        {fatias.map((f) => (
          <li key={f.id}>
            <i className={`pj-dot pj-dot--${f.id}`} aria-hidden="true" />
            {f.nome} <b>{f.rotulo}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
