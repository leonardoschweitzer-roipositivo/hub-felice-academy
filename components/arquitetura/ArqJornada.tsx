import type { CSSProperties } from 'react';

/* ============================================================
   A corrente das duas jornadas, com uma mini-tela por etapa.

   As telas são wireframes desenhados em CSS (nenhuma imagem, nenhum
   screenshot que envelheça junto com as landings): só barras, campos e
   bolhas que sugerem o formato da página. O `tipo` escolhe a composição.

   A animação é 100% CSS: cada nó tem um `--i` inline e o `::after` acende
   com `animation-delay: calc(var(--i) * passo)`, então o brilho percorre a
   corrente em onda e recomeça. Sem JS — este é um server component, e um
   `setInterval` aqui só custaria hidratação. Quem tem `prefers-reduced-
   motion` vê tudo parado (regra no arquitetura.css).

   ⚠️ O acender vive no `::after`, NÃO na borda do próprio nó: `.arq-node.ok`
   e `.ext` pintam `border-color`/`border-style` e animar a borda apagaria a
   distinção verde e a tracejada durante todo o ciclo.
   ============================================================ */

export type MockTipo =
  | 'anuncio'
  | 'landing'
  | 'checkout'
  | 'obrigado'
  | 'quiz'
  | 'confirmacao'
  | 'whatsapp'
  | 'boasvindas';

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

/** O miolo de cada wireframe. Sem texto: é forma, não conteúdo. */
function MockMiolo({ tipo }: { tipo: MockTipo }) {
  switch (tipo) {
    /* Post patrocinado no feed: perfil, arte e a chamada. */
    case 'anuncio':
      return (
        <>
          <span className="arq-mk-row">
            <i className="arq-mk-av" />
            <i className="arq-mk-l w45" />
          </span>
          <i className="arq-mk-img" />
          <i className="arq-mk-l w80" />
        </>
      );

    /* Landing: headline forte, apoio e o botão dourado embaixo. */
    case 'landing':
      return (
        <>
          <i className="arq-mk-h" />
          <i className="arq-mk-l w70" />
          <i className="arq-mk-l w55" />
          <i className="arq-mk-btn" />
        </>
      );

    /* Checkout: dois campos e o botão de pagar. */
    case 'checkout':
      return (
        <>
          <i className="arq-mk-l w40" />
          <i className="arq-mk-field" />
          <i className="arq-mk-field" />
          <i className="arq-mk-btn wide" />
        </>
      );

    /* Obrigado: confirmação + o player que entrega o produto. */
    case 'obrigado':
      return (
        <>
          <span className="arq-mk-row">
            <i className="arq-mk-ok" />
            <i className="arq-mk-l w55" />
          </span>
          <i className="arq-mk-video" />
        </>
      );

    /* Questionário/candidatura: as opções em chips e o botão de enviar. */
    case 'quiz':
      return (
        <>
          <i className="arq-mk-l w60" />
          <span className="arq-mk-chips">
            <i className="arq-mk-chip" />
            <i className="arq-mk-chip on" />
            <i className="arq-mk-chip" />
          </span>
          <span className="arq-mk-chips">
            <i className="arq-mk-chip on" />
            <i className="arq-mk-chip" />
          </span>
          <i className="arq-mk-btn" />
        </>
      );

    /* Confirmação: só o aviso de que o lead entrou. */
    case 'confirmacao':
      return (
        <>
          <span className="arq-mk-row">
            <i className="arq-mk-ok" />
            <i className="arq-mk-l w45" />
          </span>
          <i className="arq-mk-l w75" />
          <i className="arq-mk-l w60" />
        </>
      );

    /* WhatsApp: a conversa. Sem chrome de navegador — não é página. */
    case 'whatsapp':
      return (
        <>
          <i className="arq-mk-bub w60" />
          <i className="arq-mk-bub me w70" />
          <i className="arq-mk-bub w45" />
        </>
      );

    /* Boas-vindas: confirmação da venda fechada + acesso. */
    case 'boasvindas':
      return (
        <>
          <span className="arq-mk-row">
            <i className="arq-mk-ok" />
            <i className="arq-mk-l w50" />
          </span>
          <i className="arq-mk-l w70" />
          <i className="arq-mk-btn wide" />
        </>
      );
  }
}

function Mock({ tipo }: { tipo: MockTipo }) {
  // Barra de navegador só no que é página aberta no browser: o anúncio é um
  // card no feed e o WhatsApp é uma conversa — nenhum dos dois tem barra. A
  // landing é a única com a faixa de escassez dourada acima dela.
  const chrome = tipo !== 'whatsapp' && tipo !== 'anuncio';

  return (
    <span className={`arq-mock arq-mock--${tipo}`} aria-hidden="true">
      {tipo === 'landing' && <i className="arq-mk-urg" />}
      {chrome && <i className="arq-mk-chrome" />}
      <span className="arq-mk-body">
        <MockMiolo tipo={tipo} />
      </span>
    </span>
  );
}

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
