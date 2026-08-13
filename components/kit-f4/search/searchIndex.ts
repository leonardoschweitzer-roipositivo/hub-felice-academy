import { DOC_META, DOC_ORDER } from '../content';
import type { DocId } from '../content/types';

export type SearchEntry = {
  docId: DocId;
  docTitle: string;
  sectionId: string;
  sectionTitle: string;
  text: string;
  href: string;
};

/** Índice plano de busca client-side. Alimentado pelo ragCorpus (texto puro
    por seção), evitando duplicar o conteúdo. */
import { CHUNKS } from '../content/ragCorpus';

export const SEARCH_INDEX: SearchEntry[] = CHUNKS.map((c) => ({
  docId: c.docId,
  docTitle: DOC_META[c.docId].title,
  sectionId: c.sectionId,
  sectionTitle: c.title,
  text: c.text,
  href: `${DOC_META[c.docId].href}#${c.sectionId}`,
}));

/* Título + categoria + descrição do documento a que a seção pertence. Até
   13/08/2026 a busca lia só `sectionTitle` e `text`, e o corpus é extração
   dos PDFs: a palavra "marketing" não aparece em nenhum dos dois, embora
   exista um documento de Marketing com 7 seções — buscar "marketing" dava
   ZERO. Mesma história com "objeção", que só existe na descrição da CRC
   ("gestão de objeções"). Pesa menos que o título da seção e mais que o
   corpo: casa o documento certo sem afogar o acerto pontual. */
const DOC_BLURB: Record<string, string> = Object.fromEntries(
  Object.values(DOC_META).map((m) => [m.id, `${m.title} ${m.categoria} ${m.descricao}`])
);

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

/* Reduz a flexão de plural do português. A busca já era insensível a acento
   (o `norm` acima), mas comparava as formas por inteiro: o corpus escreve
   "objeções" e quem digita "objeção" via `indexOf` não achava nada, porque
   "objecoes".includes("objecao") é false. Era esse o buraco, não o acento.

   Roda nos DOIS lados — consulta e corpus —, e é por isso que a regra pode
   ser grosseira: "país" vira "pal" pela regra do -ais, mas vira "pal" também
   no texto indexado, então continua casando. Sobre-reduzir custa recall a
   mais (palavras diferentes colidindo), nunca resultado zero, que é o defeito
   que estamos consertando. Recebe palavra já normalizada, sem acento. */
function stem(w: string): string {
  if (w.length < 4) return w;
  if (w.endsWith('oes') || w.endsWith('aes')) return w.slice(0, -3) + 'ao'; // objecoes→objecao, paes→pao
  if (w.endsWith('ais')) return w.slice(0, -3) + 'al'; // materiais→material
  if (w.endsWith('eis')) return w.slice(0, -3) + 'el'; // papeis→papel
  if (w.endsWith('ns')) return w.slice(0, -2) + 'm'; // bons→bom
  if (w.length > 4 && w.endsWith('es')) return w.slice(0, -2); // valores→valor, vezes→vez
  if (w.endsWith('s')) return w.slice(0, -1); // atendimentos→atendimento
  return w;
}

const WORD_RE = /[a-z0-9]+/g;

/** Palavra reduzida + onde ela começa no texto normalizado. O offset serve ao
    `snippet`, que fatia o texto ORIGINAL — o que só funciona porque NFD seguido
    da remoção dos combinantes devolve 1 caractere por acento latino, mantendo
    o alinhamento. É a mesma premissa que o `indexOf` daqui já usava. */
type Token = { stem: string; word: string; at: number };

function tokenize(normText: string): Token[] {
  const out: Token[] = [];
  WORD_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = WORD_RE.exec(normText))) out.push({ stem: stem(m[0]), word: m[0], at: m.index });
  return out;
}

/* Tokenização preguiçosa e memoizada: são ~34 KB de corpus, e o custo só
   aparece na primeira busca — não no carregamento da página. */
type Tokenized = { title: Token[]; doc: Token[]; body: Token[]; normTitle: string; normHay: string };
const tokenCache = new WeakMap<SearchEntry, Tokenized>();

function tokensOf(e: SearchEntry): Tokenized {
  let t = tokenCache.get(e);
  if (!t) {
    const normTitle = norm(e.sectionTitle);
    const normText = norm(e.text);
    t = {
      title: tokenize(normTitle),
      doc: tokenize(norm(DOC_BLURB[e.docId] ?? '')),
      body: tokenize(normText),
      normTitle,
      normHay: `${normTitle} ${normText}`,
    };
    tokenCache.set(e, t);
  }
  return t;
}

/** Casa por PREFIXO da palavra reduzida, então "agendam" acha "agendamento".
    Devolve 2 no acerto exato e 1 no prefixo, para o exato pontuar mais. */
function hit(tokens: Token[], termStem: string, termWord: string): number {
  let best = 0;
  for (const t of tokens) {
    if (t.word === termWord) return 2;
    if (t.stem === termStem || t.stem.startsWith(termStem)) best = 1;
  }
  return best;
}

export function searchKit(query: string, limit = 12): SearchEntry[] {
  const q = norm(query.trim());
  if (q.length < 2) return [];
  const terms = q
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => ({ word: w, stem: stem(w) }));
  if (!terms.length) return [];

  const scored = SEARCH_INDEX.map((e) => {
    const { title, doc, body, normTitle, normHay } = tokensOf(e);
    let score = 0;
    for (const t of terms) {
      const inDoc = hit(doc, t.stem, t.word);
      if (inDoc) score += 3;

      /* O `includes` de reserva não é sobra do código antigo: casar por
         prefixo de palavra PERDE o que o substring achava no meio dela, e em
         português isso é comum — "agendar" deixaria de trazer "reagendar".
         Mantendo os dois, o resultado é sempre um superconjunto do que a
         busca devolvia antes; o stemming só acrescenta. */
      const inTitle = hit(title, t.stem, t.word);
      if (inTitle) score += 5 + inTitle; // título vale mais que corpo
      else if (normTitle.includes(t.word)) score += 5;

      const inBody = hit(body, t.stem, t.word);
      if (inBody) score += 2 + inBody;
      else if (normHay.includes(t.word)) score += 2;
    }
    return { e, score };
  }).filter((x) => x.score > 0);

  scored.sort((a, b) => b.score - a.score || DOC_ORDER.indexOf(a.e.docId) - DOC_ORDER.indexOf(b.e.docId));
  return scored.slice(0, limit).map((x) => x.e);
}

/** Trecho de contexto ao redor do primeiro termo encontrado. Procura pelo
    mesmo critério da busca (prefixo do radical), senão um acerto por plural
    devolveria sempre o começo da seção como se nada tivesse casado. */
export function snippet(entry: SearchEntry, query: string, len = 140): string {
  const first = norm(query.trim()).split(/\s+/).filter(Boolean)[0];
  const fallback = () => entry.text.slice(0, len) + (entry.text.length > len ? '…' : '');
  if (!first) return fallback();

  const s = stem(first);
  const tok = tokensOf(entry).body.find((t) => t.word === first || t.stem.startsWith(s));
  // Sem token, tenta o substring — o acerto pode ter vindo do meio da palavra.
  const at = tok ? tok.at : norm(entry.text).indexOf(first);
  if (at < 0) return fallback();

  const start = Math.max(0, at - 40);
  const end = Math.min(entry.text.length, at + len);
  return (start > 0 ? '…' : '') + entry.text.slice(start, end).trim() + (end < entry.text.length ? '…' : '');
}
