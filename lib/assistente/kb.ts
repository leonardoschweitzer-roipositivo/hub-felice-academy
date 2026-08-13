/* ============================================================
   BASE DE CONHECIMENTO — dois níveis.

   Por que não serializar os 9 content.ts inteiros (o padrão que a ROI
   POSITIVO usa em lib/ai/knowledge.ts): lá é UMA landing, ~15 KB. Aqui os
   nove somam ~146 KB — cerca de 42 mil tokens em TODA mensagem. Inviável.

   Nível 1 (~2,4 KB): uma linha por oferta, sempre presente. Responde
   sozinho a pergunta mais comum, "o que vocês têm?".
   Nível 2 (~2,1 KB cada, no máximo 2): o dossiê completo de um produto,
   anexado só quando a conversa é sobre ele.

   ORDEM IMPORTA no prompt: nível 0 (regras) + nível 1 são byte-idênticos
   entre requisições, e a Gemini faz cache implícito de prefixo (a partir de
   ~1.024 tokens, com desconto). Por isso os dossiês, que mudam a cada
   mensagem, entram DEPOIS — ver prompt.ts.
   ============================================================ */

import { CATALOGO, POR_SLUG, type OfertaKB } from './catalogo';

/** Como a oferta aparece no catálogo compacto. */
function linhaCompacta(o: OfertaKB): string {
  const preco = o.preco ?? 'SEM PREÇO PÚBLICO — nunca cite valor';
  const entrada =
    o.entrada === 'checkout' ? 'compra direta no checkout' : 'entrada por candidatura';
  const rotas = { curta: 'ROTA CURTA', media: 'ROTA MÉDIA', spin: 'ROTA SPIN' };
  const linhas = [
    `### ${o.nome}`,
    `slug: ${o.slug} | ${o.categoria} | ${preco} | ${entrada} | ${rotas[o.rota]}`,
    `para quem: ${o.paraQuem}`,
    `NÃO é para: ${o.naoEhFit}`,
  ];
  if (o.dores.length) linhas.push(`resolve: ${o.dores.join(' · ')}`);
  if (!o.ofertavel) {
    linhas.push(
      'ATENÇÃO: não ofereça este item por conta própria. Só fale dele se a pessoa perguntar pelo nome.',
    );
  }
  return linhas.join('\n');
}

let _nivel1: string | null = null;

/** Catálogo compacto — cache de módulo: o processo monta uma vez e reusa
 *  em todas as requisições daquela instância. */
export function nivel1(): string {
  if (_nivel1) return _nivel1;
  _nivel1 = CATALOGO.map(linhaCompacta).join('\n\n');
  return _nivel1;
}

const _dossies = new Map<string, string>();

/** Dossiê completo de um produto: o que ele entrega e o FAQ inteiro dele.
 *  É o que faz a Sônia responder "isso serve para clínica pequena?" sem
 *  inventar. */
export function dossie(slug: string): string {
  const cache = _dossies.get(slug);
  if (cache) return cache;

  const o = POR_SLUG[slug];
  if (!o) return '';

  const partes = [
    `## ${o.nome} (slug: ${o.slug})`,
    `Página: ${o.href}`,
    o.preco
      ? `Preço: ${o.preco}`
      : 'Preço: NÃO EXISTE PREÇO PÚBLICO. Não cite, não estime, não dê faixa.',
    o.aplicacaoHref ? `Candidatura: ${o.aplicacaoHref}` : '',
    '',
    o.lead,
  ];

  if (o.dores.length) {
    partes.push('', 'Dores que este produto resolve:', ...o.dores.map((d) => `- ${d}`));
  }
  if (o.inclui.length) {
    partes.push('', 'O que está incluso:', ...o.inclui.map((i) => `- ${i}`));
  }
  if (o.faq.length) {
    partes.push('', 'Perguntas frequentes deste produto:');
    for (const f of o.faq) partes.push(`P: ${f.q}`, `R: ${f.a}`);
  }

  const texto = partes.filter((l) => l !== '').join('\n').replace(/\n{3,}/g, '\n\n');
  _dossies.set(slug, texto);
  return texto;
}

/** Só para a rota de inspeção do PR 1 e para medir custo em tokens. */
export function tamanhos() {
  return {
    nivel1: nivel1().length,
    dossies: Object.fromEntries(CATALOGO.map((o) => [o.slug, dossie(o.slug).length])),
  };
}
