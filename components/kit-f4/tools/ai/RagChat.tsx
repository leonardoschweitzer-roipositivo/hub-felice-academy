'use client';

import type { DocId } from '../../content/types';
import { ChatPanel } from './ChatPanel';

/** "Converse com este material": responde com base no conteúdo do Kit. */
export function RagChat({ docId }: { docId: DocId }) {
  return (
    <ChatPanel
      mode="rag"
      docId={docId}
      placeholder="Pergunte sobre o conteúdo do Kit…"
      emptyHint="Tire dúvidas sobre o material. As respostas usam apenas o conteúdo do Kit F4 e citam a seção de origem."
    />
  );
}
