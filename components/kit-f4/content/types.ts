import type { ReactNode } from 'react';

/* ============================================================
   Kit F4 · Modelo de conteúdo dos documentos interativos
   Cada documento é uma lista de seções (TSX) + ferramentas.
   ============================================================ */

export type DocId = 'pop' | 'atendimento' | 'crc' | 'marketing';

/** Referência declarativa a uma ferramenta interativa.
    O ToolRenderer faz switch(kind) e monta o componente certo. */
export type ToolRef =
  | { kind: 'roleSelector' }
  | { kind: 'ecosystem' }
  | { kind: 'responsibilityMatrix' }
  | { kind: 'checklist'; id: string; title: string; items: string[] }
  | { kind: 'popGenerator' }
  | { kind: 'scriptBlock'; id: string; title?: string; lines: string[] }
  | { kind: 'decisionTree'; treeId: string }
  | { kind: 'faqMatrix' }
  | { kind: 'callStepper' }
  | { kind: 'fiveMinTimer' }
  | { kind: 'objectionBank' }
  | { kind: 'editorialCalendar' }
  | { kind: 'funnel5n' }
  | { kind: 'calc404020' }
  | { kind: 'productionChecklist' }
  | { kind: 'ragChat' }
  | { kind: 'rolePlay'; mode: 'patient' | 'phone' };

export type DocSection = {
  /** slug → vira o id da âncora + alvo do scroll-spy + item do TOC */
  id: string;
  /** rótulo do TOC + <h2> da seção */
  title: string;
  /** prosa em TSX; pode embutir ferramentas via inlineTools */
  body: ReactNode;
  /** ferramentas renderizadas dentro da coluna de conteúdo desta seção */
  inlineTools?: ToolRef[];
};

export type DocModel = {
  id: DocId;
  /** título completo (ex.: "POP — Procedimento Operacional Padrão") */
  title: string;
  subtitle: string;
  /** rótulo do eyebrow (ex.: "Kit F4 · Gestão") */
  eyebrow: string;
  sections: DocSection[];
  /** ferramentas sempre visíveis no painel direito do documento */
  panelTools: ToolRef[];
  /** minutos estimados de leitura */
  readingMinutes: number;
};

/** Metadados leves para os cards do índice + navegação anterior/próximo. */
export type DocMeta = {
  id: DocId;
  num: string;
  title: string;
  categoria: string;
  descricao: string;
  href: string;
  readingMinutes: number;
};
