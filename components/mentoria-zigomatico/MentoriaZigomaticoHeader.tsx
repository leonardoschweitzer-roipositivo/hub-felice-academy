'use client';

import { useEffect, useRef } from 'react';
import { OFERTA_ANCHOR } from './content';

export function MentoriaZigomaticoHeader() {
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
          <a href="#presencial" className="btn btn-ghost">
            Os presenciais
          </a>
          <a href={OFERTA_ANCHOR} className="btn btn-primary">
            Quero me candidatar
          </a>
        </div>
      </div>
    </header>
  );
}
