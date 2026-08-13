'use client';

/* ============================================================
   O card que o marcador [[produto:slug]] vira.

   É um link de verdade (<a href>), não um onClick: preserva "abrir em nova
   aba", funciona com teclado e o leitor de tela anuncia como link.
   ============================================================ */

import { PRODUTOS_PUBLICOS } from './catalogoPublico';

export function CardProduto({ slug, onIr }: { slug: string; onIr?: (slug: string) => void }) {
  const p = PRODUTOS_PUBLICOS[slug];
  // Slug que a IA inventou não pode virar link quebrado: some da tela.
  if (!p) return null;

  return (
    <a className="fia-produto" href={p.href} onClick={() => onIr?.(slug)}>
      <span className="fia-produto-cat">{p.categoria}</span>
      <span className="fia-produto-nome">{p.nome}</span>
      <span className="fia-produto-preco">
        {p.preco ?? 'Entrada por candidatura'}
      </span>
      <span className="fia-produto-ir" aria-hidden="true">
        Ver a página →
      </span>
    </a>
  );
}
