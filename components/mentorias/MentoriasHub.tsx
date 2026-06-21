'use client';

import '@/styles/felice.css';
import '@/styles/hub.css';
import '@/styles/mentorias.css';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { MentoriaChoiceCard } from './MentoriaChoiceCard';
import { MENTORIAS } from './content';

/* ============================================================
   HUB DE MENTORIAS · página-pivot
   O card "Mentoria" da home leva para cá; aqui o usuário escolhe
   entre Gestão F4 (online) e Zigomático (presencial + online).
   Reusa o design system .felice (felice.css + hub.css) + mentorias.css.
   ============================================================ */

function MentoriasHeader() {
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
        <Link className="brand" href="/">
          <span className="badge">F</span>
          <span>
            Felice<small>Academy</small>
          </span>
        </Link>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/#produtos" className="btn btn-ghost">
            Produtos
          </Link>
          <Link href="/plataforma" className="btn btn-primary">
            Entrar na plataforma
          </Link>
        </div>
      </div>
    </header>
  );
}

export function MentoriasHub() {
  return (
    <div className="felice felice-hub" id="topo">
      <MentoriasHeader />

      <main>
        <section className="sec ment-hero">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                Mentorias Felice
              </span>
              <h1>
                Escolha a sua <span className="gold-grad">mentoria</span>
              </h1>
              <p className="lead" style={{ margin: '0 auto' }}>
                Acompanhamento direto do Dr. Sócrates. Selecione a trilha que faz sentido para o seu
                momento — gestão da clínica ou domínio cirúrgico do zigomático.
              </p>
            </div>

            <div className="mentorias-grid">
              {MENTORIAS.map((m, i) => (
                <div className={`reveal${i ? ` d${i}` : ''}`} key={m.titulo}>
                  <MentoriaChoiceCard opcao={m} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="felice-footer">
        <div className="wrap">
          <div className="foot-top">
            <Link className="brand" href="/">
              <span className="badge">F</span>
              <span>
                Felice<small>Academy</small>
              </span>
            </Link>
          </div>
          <div className="foot-links">
            <Link href="/#produtos">Produtos</Link>
            <Link href="/plataforma">Entrar na plataforma</Link>
            <a href="/privacidade">Política de Privacidade</a>
            <a href="/termos">Termos de Uso</a>
          </div>
          <p className="copy">
            © 2026 Felice Academy — Educação, Gestão e Marketing. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <WhatsappFloat />
      <RevealOnScroll />
    </div>
  );
}
