/* ============================================================
   A mini-tela de cada página, desenhada em CSS.

   Nenhuma imagem, nenhum screenshot que envelheça junto com as landings:
   só barras, campos e bolhas que sugerem o formato da página. O `tipo`
   escolhe a composição.

   Vive aqui, e não dentro do ArqJornada, porque dois desenhos da mesma
   página seriam dois lugares para atualizar quando uma landing mudar de
   formato. Consomem este módulo:
     · ArqJornada.tsx — a corrente das duas jornadas
     · ArqMapa.tsx    — a árvore de rotas

   Os oito primeiros tipos são as etapas de um funil; os quatro últimos
   (vitrine, doc, legal, painel) existem para o mapa, que precisa desenhar
   também as páginas que não vendem nada.
   ============================================================ */

export type MockTipo =
  | 'anuncio'
  | 'landing'
  | 'checkout'
  | 'obrigado'
  | 'quiz'
  | 'confirmacao'
  | 'whatsapp'
  | 'boasvindas'
  | 'vitrine'
  | 'doc'
  | 'legal'
  | 'painel';

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

    /* Vitrine: título e a grade de cards de produto. A home, /produtos e
       o hub das mentorias — páginas que escolhem, não que vendem. */
    case 'vitrine':
      return (
        <>
          <i className="arq-mk-l w50" />
          <span className="arq-mk-grid">
            <i className="arq-mk-cardlet" />
            <i className="arq-mk-cardlet" />
            <i className="arq-mk-cardlet" />
            <i className="arq-mk-cardlet" />
            <i className="arq-mk-cardlet" />
            <i className="arq-mk-cardlet" />
          </span>
        </>
      );

    /* Documento do Kit F4: o índice lateral à esquerda, o texto à direita. */
    case 'doc':
      return (
        <span className="arq-mk-split">
          <span className="arq-mk-toc">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="arq-mk-col">
            <i className="arq-mk-l w60" />
            <i className="arq-mk-l w80" />
            <i className="arq-mk-l w75" />
            <i className="arq-mk-l w70" />
          </span>
        </span>
      );

    /* Página legal: texto corrido, sem botão nenhum. */
    case 'legal':
      return (
        <>
          <i className="arq-mk-l w40" />
          <i className="arq-mk-l w80" />
          <i className="arq-mk-l w75" />
          <i className="arq-mk-l w80" />
          <i className="arq-mk-l w55" />
        </>
      );

    /* Plataforma: barra lateral escura, topo e a grade de widgets. */
    case 'painel':
      return (
        <span className="arq-mk-split">
          <span className="arq-mk-sb">
            <i />
            <i />
            <i />
          </span>
          <span className="arq-mk-col">
            <i className="arq-mk-l w45" />
            <span className="arq-mk-grid wide">
              <i className="arq-mk-wid" />
              <i className="arq-mk-wid" />
              <i className="arq-mk-wid" />
              <i className="arq-mk-wid" />
            </span>
          </span>
        </span>
      );
  }
}

export function Mock({ tipo }: { tipo: MockTipo }) {
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
