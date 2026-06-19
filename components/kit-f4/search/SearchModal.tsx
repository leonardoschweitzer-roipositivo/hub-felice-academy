'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { searchKit, snippet } from './searchIndex';

/** Busca global client-side em todo o Kit (estilo cmd-K). */
export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const results = useMemo(() => (open ? searchKit(query) : []), [query, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  if (!open) return null;

  return (
    <div className="kit-search-overlay" role="dialog" aria-modal="true" aria-label="Buscar no Kit F4">
      <div className="kit-search-scrim" onClick={onClose} aria-hidden="true" />
      <div className="kit-search-box">
        <div className="kit-search-input">
          <span aria-hidden="true">⌕</span>
          {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
          <input
            autoFocus
            type="search"
            placeholder="Buscar em todo o Kit F4…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Termo de busca"
          />
          <button type="button" onClick={onClose} aria-label="Fechar busca">
            Esc
          </button>
        </div>

        <div className="kit-search-results">
          {query.trim().length >= 2 && results.length === 0 && (
            <p className="kit-search-empty">Nenhum resultado para “{query}”.</p>
          )}
          {results.map((r) => (
            <Link key={r.href} href={r.href} className="kit-search-result" onClick={onClose}>
              <span className="kit-search-result-doc">{r.docTitle}</span>
              <span className="kit-search-result-title">{r.sectionTitle}</span>
              <span className="kit-search-result-snippet">{snippet(r, query)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
