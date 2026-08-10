'use client';

import { useEffect, useRef, useState } from 'react';
import { FAQ } from './content';

export function RecepcaoFaq() {
  const [open, setOpen] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Dúvidas frequentes
          </span>
          <h2>Antes de garantir seu acesso</h2>
        </div>
        <div className="faq" ref={listRef}>
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            const cls = ['acc', 'reveal', revealed ? 'in' : '', isOpen ? 'open' : '']
              .filter(Boolean)
              .join(' ');
            return (
              <div key={item.q} className={cls}>
                <button className="acc-q" onClick={() => setOpen(isOpen ? null : i)}>
                  {item.q} <span className="ic">+</span>
                </button>
                {/* ⚠️ `.acc-a` tem overflow:hidden e este teto de 320px — resposta
                    muito longa é cortada sem aviso. Manter as respostas curtas. */}
                <div className="acc-a" style={{ maxHeight: isOpen ? '320px' : 0 }}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
