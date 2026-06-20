'use client';

import { useState } from 'react';
import '@/styles/felice.css';
import '@/styles/plataforma.css';

import { PlatformSidebar } from './PlatformSidebar';
import { PlatformTopbar } from './PlatformTopbar';
import { PlatformReveal } from './PlatformReveal';
import { Footer } from '@/components/felice/sections/Footer';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';

/**
 * Casca da área do aluno: sidebar fixa + topbar + conteúdo. Layout
 * persistente (não remonta entre rotas). Reusa o design system Felice
 * (`.felice`, tokens, botões) e os componentes de marca compartilhados.
 */
export function PlatformShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="felice plataforma" id="topo">
      <PlatformSidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={`plat-overlay${menuOpen ? ' show' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div className="plat-main">
        <PlatformTopbar onMenu={() => setMenuOpen(true)} />
        <div className="plat-content">{children}</div>
        <Footer />
      </div>

      <WhatsappFloat />
      <PlatformReveal />
    </div>
  );
}
