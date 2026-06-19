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

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

export function searchKit(query: string, limit = 12): SearchEntry[] {
  const q = norm(query.trim());
  if (q.length < 2) return [];
  const terms = q.split(/\s+/).filter(Boolean);

  const scored = SEARCH_INDEX.map((e) => {
    const hay = norm(`${e.sectionTitle} ${e.text}`);
    let score = 0;
    for (const t of terms) {
      if (norm(e.sectionTitle).includes(t)) score += 5;
      const idx = hay.indexOf(t);
      if (idx >= 0) score += 2;
    }
    return { e, score };
  }).filter((x) => x.score > 0);

  scored.sort((a, b) => b.score - a.score || DOC_ORDER.indexOf(a.e.docId) - DOC_ORDER.indexOf(b.e.docId));
  return scored.slice(0, limit).map((x) => x.e);
}

/** Trecho de contexto ao redor do primeiro termo encontrado. */
export function snippet(entry: SearchEntry, query: string, len = 140): string {
  const t = norm(query.trim().split(/\s+/)[0] ?? '');
  const hay = norm(entry.text);
  const idx = hay.indexOf(t);
  if (idx < 0) return entry.text.slice(0, len) + (entry.text.length > len ? '…' : '');
  const start = Math.max(0, idx - 40);
  const end = Math.min(entry.text.length, idx + len);
  return (start > 0 ? '…' : '') + entry.text.slice(start, end).trim() + (end < entry.text.length ? '…' : '');
}
