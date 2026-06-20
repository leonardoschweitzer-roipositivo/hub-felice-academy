'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Footer } from '@/components/felice/sections/Footer';
import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { DOC_META, DOC_ORDER } from './content';
import { KitDocCard } from './KitDocCard';
import { SearchModal } from './search/SearchModal';
import { AutoridadeMentor } from '@/components/felice/sections/obrigado/AutoridadeMentor';
import { ConsultoriaCtaSection } from '@/components/felice/consultoria/ConsultoriaCtaSection';

/** Página índice do Kit F4: 4 cards (um por documento) com progresso. */
export function KitIndex() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="felice felice-hub felice-kit kit-index" id="topo">
      <header className="kit-topbar">
        <div className="wrap kit-topbar-inner">
          <Link className="brand" href="/">
            <span className="badge">F</span>
            <span>
              Felice<small>Academy</small>
            </span>
          </Link>
          <div className="kit-topbar-actions">
            <button type="button" className="kit-search-trigger" onClick={() => setSearchOpen(true)}>
              <span aria-hidden="true">⌕</span> Buscar no Kit
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hub-hero kit-index-hero">
          <div className="hub-hero-bg" aria-hidden="true" />
          <div className="wrap hub-hero-inner">
            <nav className="kit-breadcrumb" aria-label="Trilha">
              <Link href="/">HUB</Link>
              <span className="sep" aria-hidden="true">›</span>
              <span aria-current="page">Kit F4</span>
            </nav>
            <span className="eyebrow reveal">Felice Academy · Gestão</span>
            <h1 className="reveal d1">
              Kit Sistema<br />de <span className="gold-grad">Gestão F4</span>
            </h1>
            <p className="lead reveal d2">
              Os 4 documentos do Kit, agora vivos e interativos: leia, marque o progresso, copie
              scripts, use checklists e converse com o material. Tudo na identidade da Felice
              Academy.
            </p>
          </div>
        </section>

        <section className="hub-products sec">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow">O conteúdo</span>
              <h2>Escolha um documento</h2>
              <p className="lead">Seu progresso de leitura fica salvo automaticamente neste dispositivo.</p>
            </div>

            <div className="hub-grid hub-grid--docs">
              {DOC_ORDER.map((id, i) => (
                <div key={id} className={`reveal d${(i % 4) + 1}`}>
                  <KitDocCard doc={DOC_META[id]} index={i} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <AutoridadeMentor />
        <ConsultoriaCtaSection />
      </main>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      <Footer />
      <WhatsappFloat />
      <RevealOnScroll />
    </div>
  );
}
