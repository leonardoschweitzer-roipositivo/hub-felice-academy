'use client';

import { useEffect, useRef } from 'react';
import { OFERTA_ANCHOR } from './content';

export function MaestriaHeader() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hdr = headerRef.current;
    if (!hdr) return;
    const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="felice-header" ref={headerRef}>
      <div className="wrap nav">
        <a className="brand" href="#topo">
          <span className="badge">F</span>
          <span>
            Felice<small>Academy</small>
          </span>
        </a>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a href="#modulos" className="btn btn-ghost">
            Módulos
          </a>
          <a href={OFERTA_ANCHOR} className="btn btn-primary">
            Garantir minha vaga
          </a>
        </div>
      </div>
    </header>
  );
}
