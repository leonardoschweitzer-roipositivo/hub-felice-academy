import type { DocId, DocMeta, DocModel } from './types';
import { POP_DOC } from './pop';
import { ATENDIMENTO_DOC } from './atendimento';
import { CRC_DOC } from './crc';
import { MARKETING_DOC } from './marketing';

/* ============================================================
   Kit F4 · Índice dos documentos + ordenação + prev/next
   ⚠️ Validar com o cliente: descrições e rota base.
   ============================================================ */

/** Base da rota do Kit. next.config usa trailingSlash:true. */
export const KIT_BASE = '/gestao/kit-f4';

/** Ordem de leitura/navegação dos 4 documentos. */
export const DOC_ORDER: DocId[] = ['pop', 'atendimento', 'crc', 'marketing'];

export const DOC_META: Record<DocId, DocMeta> = {
  pop: {
    id: 'pop',
    num: '01',
    title: 'POP — Procedimento Operacional Padrão',
    categoria: 'Gestão',
    descricao:
      'O mapa estratégico e operacional da clínica: o Ecossistema de Excelência Clínica e os POPs de cada cargo.',
    href: `${KIT_BASE}/pop`,
    readingMinutes: 28,
  },
  atendimento: {
    id: 'atendimento',
    num: '02',
    title: 'Manual de Atendimento — Recepção',
    categoria: 'Atendimento',
    descricao:
      '"A Arte de Receber": atendimento ético e humanizado na recepção, com scripts, FAQs e protocolos de situações delicadas.',
    href: `${KIT_BASE}/atendimento`,
    readingMinutes: 18,
  },
  crc: {
    id: 'crc',
    num: '03',
    title: 'Manual da CRC — Agendamento',
    categoria: 'Comercial',
    descricao:
      '"A Voz da Clínica": o guião tático da CRC para a chamada perfeita, gestão de objeções e a regra dos 5 minutos.',
    href: `${KIT_BASE}/crc`,
    readingMinutes: 20,
  },
  marketing: {
    id: 'marketing',
    num: '04',
    title: 'Guia Estratégico de Marketing',
    categoria: 'Marketing',
    descricao:
      'Vídeos para Instagram em clínicas de saúde: pilares 40/40/20, calendário editorial, roteiros e o funil 5Ns.',
    href: `${KIT_BASE}/marketing`,
    readingMinutes: 16,
  },
};

export const DOCS: Record<DocId, DocModel> = {
  pop: POP_DOC,
  atendimento: ATENDIMENTO_DOC,
  crc: CRC_DOC,
  marketing: MARKETING_DOC,
};

export function getDoc(id: DocId): DocModel {
  return DOCS[id];
}

export type PrevNext = { prev: DocMeta | null; next: DocMeta | null };

/** Documento anterior/próximo na ordem de leitura. */
export function getPrevNext(id: DocId): PrevNext {
  const i = DOC_ORDER.indexOf(id);
  const prevId = i > 0 ? DOC_ORDER[i - 1] : null;
  const nextId = i >= 0 && i < DOC_ORDER.length - 1 ? DOC_ORDER[i + 1] : null;
  return {
    prev: prevId ? DOC_META[prevId] : null,
    next: nextId ? DOC_META[nextId] : null,
  };
}
