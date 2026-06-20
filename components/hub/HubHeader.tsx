'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export function HubHeader() {
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
          <a href="#produtos" className="btn btn-ghost">
            Produtos
          </a>
          <a href="#conteudos" className="btn btn-ghost">
            Conteúdos
          </a>
          <Link href="/plataforma" className="btn btn-primary">
            Entrar na plataforma
          </Link>
        </div>
      </div>
    </header>
  );
}
