/* ============================================================
   CONTEXTO DE PÁGINA — onde a Sônia aparece e o que ela sabe do lugar.

   O assistente é montado no app/layout.tsx (o único ponto global do repo),
   então ele alcança as 64 rotas. Quem decide onde ele NÃO aparece é este
   arquivo.
   ============================================================ */

import { CATALOGO, POR_SLUG, type OfertaKB } from './catalogo';

export type ContextoPagina = {
  /** Frase que entra no system prompt descrevendo onde a pessoa está. */
  rotulo: string;
  /** Produto da página, quando ela é de um produto. */
  oferta?: OfertaKB;
  /** Página de obrigado: quem está aqui JÁ COMPROU. Muda a conversa de
   *  venda para suporte e próximo passo. */
  posCompra: boolean;
};

/** Tira a barra final e a querystring para comparar caminhos com segurança
 *  (o next.config tem `trailingSlash: true`, então tudo chega com barra). */
function limpar(pathname: string): string {
  const semQuery = pathname.split('?')[0].split('#')[0];
  return semQuery.length > 1 ? semQuery.replace(/\/+$/, '') : semQuery;
}

/* ---------- Rotas sem assistente ---------- */

/** Prefixos onde ele não entra, e o motivo de cada um. */
const BLOQUEADAS = [
  '/plataforma', // protótipo mockado da área do aluno, com dados fictícios
  '/arquitetura-de-paginas', // documento interno de arquitetura
  '/produtos/kitgestaof4/kit-f4', // área de entrega paga: JÁ TEM o chat de RAG do próprio Kit
];

/** Último segmento das rotas de funil (questionário e confirmação). Um chat
 *  flutuante ali competiria com o formulário que estamos tentando fazer a
 *  pessoa preencher. */
const FINAIS_DE_FUNIL = new Set(['aplicacao', 'consultoria', 'confirmado']);

/**
 * ⚠️ Cuidado com o homônimo `consultoria`, que neste repo é TRÊS coisas:
 *  1. `/produtos/consultoria` — a landing do produto Consultoria Gestão F4,
 *     onde a Sônia PRECISA aparecer;
 *  2. `/produtos/<outro-produto>/consultoria` — o questionário da consultoria
 *     gratuita do pós-compra, onde ela não pode aparecer;
 *  3. `styles/consultoria.css` — o CSS do questionário.
 *
 * Por isso a checagem é por PROFUNDIDADE, e não por `pathname.includes()`:
 * um `includes('/consultoria/')` derrubaria o assistente da landing do
 * produto, que é justamente a página de maior valor do site.
 */
export function rotaBloqueada(pathname: string): boolean {
  const p = limpar(pathname);
  if (BLOQUEADAS.some((b) => p === b || p.startsWith(b + '/'))) return true;

  const segs = p.split('/').filter(Boolean); // ['produtos','consultoria']
  const ultimo = segs[segs.length - 1];
  // Só é funil a partir de /produtos/<produto>/<etapa> — 3 segmentos.
  return segs.length >= 3 && segs[0] === 'produtos' && FINAIS_DE_FUNIL.has(ultimo);
}

/* ---------- Descrição da página para o prompt ---------- */

/** Casa o caminho com a oferta de href mais longo que o prefixa — assim
 *  `/produtos/consultoria/obrigado` resolve para a Consultoria sem precisar
 *  de uma tabela paralela de rotas que envelheceria sozinha. */
function ofertaDaRota(p: string): OfertaKB | undefined {
  let achada: OfertaKB | undefined;
  for (const o of CATALOGO) {
    const base = limpar(o.href);
    if (p === base || p.startsWith(base + '/')) {
      if (!achada || base.length > limpar(achada.href).length) achada = o;
    }
  }
  return achada;
}

export function contextoDaPagina(pathname: string): ContextoPagina {
  const p = limpar(pathname);
  const posCompra = p.endsWith('/obrigado');

  if (p === '/') {
    return {
      rotulo:
        'A pessoa está na HOME do site, vendo a vitrine com todos os produtos. Ela ainda não escolheu nada — descubra a dor antes de recomendar.',
      posCompra: false,
    };
  }
  if (p === '/produtos') {
    return {
      rotulo:
        'A pessoa está na página que lista TODOS os produtos. Ela está comparando opções — ajude a escolher, não repita a lista.',
      posCompra: false,
    };
  }
  if (p === '/produtos/mentorias') {
    return {
      rotulo:
        'A pessoa está na página que apresenta as DUAS trilhas de mentoria (Gestão F4 e Zigomático). A dúvida dela provavelmente é qual das duas serve ao caso dela: uma é de negócio, a outra é clínica.',
      oferta: POR_SLUG['mentoria-gestao-f4'],
      posCompra: false,
    };
  }
  if (p === '/privacidade' || p === '/termos') {
    return {
      rotulo:
        'A pessoa está numa página legal (privacidade ou termos). Provavelmente chegou aqui por curiosidade ou preocupação com dados — responda com objetividade e não empurre produto.',
      posCompra: false,
    };
  }

  const oferta = ofertaDaRota(p);
  if (oferta && posCompra) {
    return {
      rotulo: `A pessoa está na página de OBRIGADO de "${oferta.nome}" — ela ACABOU DE COMPRAR. Não venda este produto de novo: parabenize, ajude com o acesso e, só se fizer sentido para a dor dela, aponte o próximo degrau.`,
      oferta,
      posCompra: true,
    };
  }
  if (oferta) {
    return {
      rotulo: `A pessoa está na landing de "${oferta.nome}". Assuma que o interesse é este produto e faça uma pergunta específica dele — não comece perguntando "o que você procura?".`,
      oferta,
      posCompra: false,
    };
  }

  return {
    rotulo: 'A pessoa está numa página do site da Felice Academy.',
    posCompra: false,
  };
}
