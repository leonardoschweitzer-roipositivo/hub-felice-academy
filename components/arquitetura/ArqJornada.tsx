import type { CSSProperties } from 'react';

import { Mock, type MockTipo } from './ArqMock';

/* ============================================================
   A corrente das duas jornadas, com uma mini-tela por etapa.

   As telas são wireframes desenhados em CSS — a composição de cada uma
   está em ArqMock.tsx, compartilhada com a árvore de rotas do ArqMapa.

   A animação é 100% CSS: cada nó tem um `--i` inline e o `::after` acende
   com `animation-delay: calc(var(--i) * passo)`, então o brilho percorre a
   corrente em onda e recomeça. Sem JS — este é um server component, e um
   `setInterval` aqui só custaria hidratação. Quem tem `prefers-reduced-
   motion` vê tudo parado (regra no arquitetura.css).

   ⚠️ O acender vive no `::after`, NÃO na borda do próprio nó: `.arq-node.ok`
   e `.ext` pintam `border-color`/`border-style` e animar a borda apagaria a
   distinção verde e a tracejada durante todo o ciclo.
   ============================================================ */

export type { MockTipo };

export type Etapa = {
  /** Nome da etapa, o que já aparecia na caixa. */
  n: string;
  /** Evento ou natureza da etapa (linha monoespaçada dourada). */
  e: string;
  /** Qual wireframe desenhar em cima. */
  mock: MockTipo;
  /** Página fora do site (borda tracejada). */
  ext?: boolean;
  /** Etapa que fecha o ciclo (borda e evento em verde). */
  ok?: boolean;
};

export function ArqJornada({ etapas }: { etapas: Etapa[] }) {
  return (
    <div className="arq-scroll">
      <div
        className="arq-chain arq-chain--mock"
        style={{ '--n': etapas.length } as CSSProperties}
      >
        {etapas.map((et, i) => (
          <div className="arq-elo" key={et.n}>
            {i > 0 && (
              <span
                className="arq-arw"
                aria-hidden="true"
                style={{ '--i': i - 0.5 } as CSSProperties}
              >
                →
              </span>
            )}
            <div
              className={`arq-node${et.ext ? ' ext' : ''}${et.ok ? ' ok' : ''}`}
              style={{ '--i': i } as CSSProperties}
            >
              <Mock tipo={et.mock} />
              <span className="n">{et.n}</span>
              <span className="e">{et.e}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
