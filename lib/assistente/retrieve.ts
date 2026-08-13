/* ============================================================
   RECUPERAÇÃO DE PRODUTO — BM25-lite, sem embeddings.

   Generalização do `retrieve()` que vive inline no chat do Kit F4
   (app/produtos/kitgestaof4/kit-f4/api/chat/route.ts). O corpus aqui são
   as 9 ofertas do catálogo, não trechos de documento: o que se recupera é
   "de qual produto esta conversa está falando", para anexar o dossiê
   completo dele ao prompt.

   Por que não embeddings: o corpus tem 9 itens. Uma chamada de embedding
   por mensagem custaria mais latência do que a busca inteira, e o vocabulário
   é fechado (nomes de produto, dores da clínica) — os `gatilhos` curados no
   catálogo resolvem os sinônimos que o BM25 sozinho perderia.
   ============================================================ */

import { CATALOGO, type OfertaKB } from './catalogo';

const STOPWORDS = new Set(
  'a o e de da do das dos que para com em no na nos nas um uma os as por se ao a e como mais ou ja meu minha meus minhas eu nao sim tem ter esta este isso muito quero'.split(
    ' ',
  ),
);

/** minúsculas + sem acento — "objeção" e "objecao" têm de casar. */
export const norm = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

/** Texto indexado de uma oferta. Nome e gatilhos pesam mais que o corpo:
 *  quem escreve "zigomático" está falando de um produto, não citando de
 *  passagem. */
function campos(o: OfertaKB) {
  return {
    forte: norm(`${o.nome} ${o.gatilhos.join(' ')}`),
    corpo: norm(
      `${o.categoria} ${o.paraQuem} ${o.lead} ${o.dores.join(' ')} ${o.inclui.join(' ')} ${o.faq
        .map((f) => f.q)
        .join(' ')}`,
    ),
  };
}

const INDICE = CATALOGO.map((o) => ({ oferta: o, ...campos(o) }));

/**
 * Devolve as ofertas mais prováveis para o texto da conversa.
 *
 * Diferente do retrieve do Kit F4, aqui NÃO existe fallback "se nada
 * pontuar, devolve os k primeiros": o Nível 1 do prompt já descreve o
 * catálogo inteiro, então anexar dois dossiês arbitrários gastaria ~1.200
 * tokens para piorar a resposta — a IA passaria a puxar assunto de produto
 * que ninguém mencionou. Sem sinal, devolvemos vazio de propósito.
 *
 * `excluir` serve para não repetir o dossiê do produto da página atual,
 * que o prompt já anexa por conta própria.
 */
export function recuperarOfertas(texto: string, k: number, excluir: string[] = []): OfertaKB[] {
  const termos = norm(texto)
    .split(/\W+/)
    .filter((t) => t.length > 2 && !STOPWORDS.has(t));
  if (termos.length === 0) return [];

  return INDICE.filter((i) => !excluir.includes(i.oferta.slug))
    .map((i) => {
      let score = 0;
      for (const t of termos) {
        if (i.forte.includes(t)) score += 4;
        if (i.corpo.includes(t)) score += 1;
      }
      // Produto que a IA não pode oferecer sozinha (o CRM) só entra se
      // alguém falou o nome dele — daí o peso do campo forte segura.
      if (!i.oferta.ofertavel) score -= 3;
      return { oferta: i.oferta, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k)
    .map((s) => s.oferta);
}
