'use client';

import { useEffect, useRef } from 'react';
import { FeliceLogo } from '@/components/felice/ui/FeliceLogo';

export function Header() {
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
          <FeliceLogo />
        </a>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a href="#metodo" className="btn btn-ghost">
            O método
          </a>
          <a href="#checkout" className="btn btn-primary">
            Garantir por R$ 97
          </a>
        </div>
      </div>
    </header>
  );
}
