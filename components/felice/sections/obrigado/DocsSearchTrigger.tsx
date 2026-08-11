'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

/* Carrega o modal só no clique: `search/searchIndex.ts` monta o índice a
   partir do ragCorpus (~34 KB de texto puro) na avaliação do módulo, e numa
   página pós-compra a maioria nunca abre a busca. */
const SearchModal = dynamic(
  () => import('@/components/kit-f4/search/SearchModal').then((m) => m.SearchModal),
  { ssr: false },
);

/**
 * Botão "buscar no Kit" + o modal, para a seção de documentos da obrigado.
 *
 * O `reveal` fica NO BOTÃO, e o modal é irmão dele — nunca descendente.
 * `.felice .reveal` aplica `transform: translateY(26px)`, e um ancestral com
 * transform vira containing block, quebrando o `position: fixed` do
 * `.kit-search-overlay`: o overlay ficaria preso à caixa da seção. Como o
 * transform some quando o reveal ganha `.in`, o bug seria intermitente.
 */
export function DocsSearchTrigger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="kit-search-trigger obg-docs-search reveal d1"
        onClick={() => setOpen(true)}
      >
        <span aria-hidden="true">⌕</span> Buscar em todo o Kit
      </button>
      <SearchModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
