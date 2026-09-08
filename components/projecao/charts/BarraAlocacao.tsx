import type { CSSProperties } from 'react';

/* Barra 100% empilhada: como a verba se reparte entre os produtos no ar.
   Existe para tornar visível de relance o desequilíbrio que a tabela só
   revela lendo linha por linha.

   ⚠️ A cor NÃO identifica o produto — com 8 produtos, oito amarelos seriam
   indistinguíveis e não diriam nada. O tom identifica o TIER, e aí passa a
   responder de relance a pergunta que importa: quanto da verba está na porta
   de entrada? A trilha vem por textura (hachura), que é um segundo canal e
   sobrevive em preto e branco. */

export type Fatia = {
  id: string;
  nome: string;
  trilha: string;
  tier: string;
  valor: number;
  rotulo: string;
};

export function BarraAlocacao({ fatias }: { fatias: Fatia[] }) {
  const total = fatias.reduce((a, f) => a + f.valor, 0) || 1;

  return (
    <div className="pj-aloc">
      <div className="pj-aloc-bar">
        {fatias.map((f) => {
          const share = f.valor / total;
          return (
            <div
              key={f.id}
              className={`pj-aloc-seg pj-aloc-seg--${f.tier} pj-aloc-tr--${f.trilha}`}
              style={{ '--w': `${share * 100}%` } as CSSProperties}
              title={`${f.nome}: ${f.rotulo}`}
            >
              {/* Abaixo de 6% o rótulo não cabe e vaza para o segmento vizinho. */}
              {share >= 0.06 && <span>{Math.round(share * 100)}%</span>}
            </div>
          );
        })}
      </div>
      <ul className="pj-aloc-leg">
        {fatias.map((f) => (
          <li key={f.id}>
            <i className={`pj-dot pj-dot--${f.tier} pj-aloc-tr--${f.trilha}`} aria-hidden="true" />
            {f.nome} <b>{f.rotulo}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
