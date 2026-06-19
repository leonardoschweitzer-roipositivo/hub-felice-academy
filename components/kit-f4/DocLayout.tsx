'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Footer } from '@/components/felice/sections/Footer';
import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import type { DocModel } from './content/types';
import { KIT_BASE } from './content';
import { useScrollSpy } from './useScrollSpy';
import { useReadingProgress } from './useReadingProgress';
import { ReadingProgressBar } from './ReadingProgressBar';
import { DocBreadcrumb } from './DocBreadcrumb';
import { DocTabs } from './DocTabs';
import { DocSidebar } from './DocSidebar';
import { DocSection } from './DocSection';
import { DocPrevNext } from './DocPrevNext';
import { DocToolsPanel } from './DocToolsPanel';
import { SearchModal } from './search/SearchModal';

/** Formata a data ISO (AAAA-MM-DD) em dd/mm/aaaa, sem depender de timezone. */
function formatUpdatedAt(iso: string): string {
  const [y, m, d] = iso.split('-');
  return d && m && y ? `${d}/${m}/${y}` : iso;
}

/** Casca de documento interativo do Kit F4: header + 3 colunas + footer. */
export function DocLayout({ doc }: { doc: DocModel }) {
  const sectionIds = useMemo(() => doc.sections.map((s) => s.id), [doc.sections]);
  const activeId = useScrollSpy(sectionIds);
  const { percent, done, toggleDone } = useReadingProgress(doc.id);

  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const sidebar = (
    <DocSidebar
      sections={doc.sections}
      activeId={activeId}
      percent={percent}
      done={done}
      onToggleDone={toggleDone}
      onNavigate={() => setNavOpen(false)}
    />
  );

  return (
    <div className="felice felice-kit kit-doc" id="topo">
      <ReadingProgressBar percent={percent} />

      <header className="kit-topbar">
        <div className="wrap kit-topbar-inner">
          <Link className="brand" href={KIT_BASE}>
            <span className="badge">F</span>
            <span>
              Felice<small>Academy</small>
            </span>
          </Link>

          <DocTabs current={doc.id} />

          <div className="kit-topbar-actions">
            <button type="button" className="kit-search-trigger" onClick={() => setSearchOpen(true)}>
              <span aria-hidden="true">⌕</span> Buscar no Kit
            </button>
          </div>
        </div>
      </header>

      <DocBreadcrumb docTitle={doc.title} />

      <main className="kit-doc-main wrap">
        <div className="kit-doc-head">
          <span className="eyebrow">{doc.eyebrow}</span>
          <h1 className="display">{doc.title}</h1>
          <p className="lead">{doc.subtitle}</p>
          <p className="kit-doc-meta">
            ⏱ {doc.readingMinutes} min de leitura · {doc.sections.length} seções
            {doc.updatedAt && (
              <>
                {' · '}
                <span className="kit-doc-updated">Atualizado em {formatUpdatedAt(doc.updatedAt)}</span>
              </>
            )}
          </p>
        </div>

        <div className="kit-doc-grid">
          {/* Sidebar desktop */}
          <div className="kit-doc-aside-left">{sidebar}</div>

          {/* Botão de índice no mobile */}
          <button type="button" className="kit-toc-toggle" onClick={() => setNavOpen(true)}>
            ☰ Índice do documento
          </button>

          <article className="kit-prose">
            {doc.sections.map((section) => (
              <DocSection key={section.id} section={section} docId={doc.id} />
            ))}
            <DocPrevNext docId={doc.id} />
          </article>

          <DocToolsPanel tools={doc.panelTools} docId={doc.id} />
        </div>
      </main>

      {/* Drawer da sidebar no mobile */}
      <div className={`kit-toc-drawer${navOpen ? ' is-open' : ''}`} role="dialog" aria-label="Índice" aria-hidden={!navOpen}>
        <div className="kit-toc-drawer-head">
          <span className="eyebrow">Índice</span>
          <button type="button" className="kit-panel-drawer-close" onClick={() => setNavOpen(false)} aria-label="Fechar">
            ✕
          </button>
        </div>
        {sidebar}
      </div>
      {navOpen && <div className="kit-panel-scrim" onClick={() => setNavOpen(false)} aria-hidden="true" />}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      <Footer />
      <WhatsappFloat />
      <RevealOnScroll />
    </div>
  );
}
