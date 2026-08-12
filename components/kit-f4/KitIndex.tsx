'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Footer } from '@/components/felice/sections/Footer';
import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { whatsappUrl } from '@/lib/whatsapp/contato';
import { SUPORTE_KIT } from './suporte';
import { DOC_META, DOC_ORDER } from './content';
import { KitDocCard } from './KitDocCard';
import { SearchModal } from './search/SearchModal';
import { ConsultoriaCtaSection } from '@/components/felice/consultoria/ConsultoriaCtaSection';
import { ConsultoriaOferta } from '@/components/felice/consultoria/ConsultoriaOferta';
import { VIDEO_URL, VIDEO_IFRAME_ID } from '@/components/felice/config';

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

            {/* Mesmo vídeo da página de obrigado (fonte única em felice/config):
                explica como usar os documentos, então também serve quem volta
                aqui direto, sem passar pela pós-compra. */}
            {VIDEO_URL ? (
              <div className="kit-hero-video reveal d3">
                <iframe
                  id={VIDEO_IFRAME_ID}
                  src={VIDEO_URL}
                  title="Como usar os documentos do Kit Gestão F4"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : null}

            {/* Mesma âncora de preço + CTA da ConsultoriaCtaSection do rodapé,
                repetida aqui logo depois do vídeo. É o mesmo componente, para
                o "R$ 500/hora" e a promessa de vagas nunca divergirem. */}
            <ConsultoriaOferta className="kit-hero-oferta reveal d4" />
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
        <ConsultoriaCtaSection />
      </main>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      <Footer />
      <WhatsappFloat href={whatsappUrl(SUPORTE_KIT)} />
      <RevealOnScroll />
    </div>
  );
}
