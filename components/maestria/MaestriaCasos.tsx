'use client';

import { useRef } from 'react';
import { CASOS } from './content';

export function MaestriaCasos() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.mz-caso') as HTMLElement | null;
    const amount = card ? card.offsetWidth + 18 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="sec" id="casos">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Casos reais
          </span>
          <h2>
            Casos que você vai <span className="gold-grad">aprender a resolver</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            Uma seleção de casos reais de maxila atrófica abordados no curso — do diagnóstico à
            reabilitação.
          </p>
        </div>

        <div className="mz-casos reveal">
          <button
            type="button"
            className="mz-casos-nav mz-casos-prev"
            onClick={() => scroll(-1)}
            aria-label="Casos anteriores"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="mz-casos-track" ref={trackRef}>
            {CASOS.map((c, i) => (
              <figure className="mz-caso" key={c.titulo}>
                <div className="mz-caso-img">
                  {c.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={c.img} alt={c.titulo} loading="lazy" />
                  ) : (
                    <span className="mz-caso-ph" aria-hidden="true">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-5-5L5 21" />
                      </svg>
                      Imagem em breve
                    </span>
                  )}
                  <span className="mz-caso-tag">Caso {String(i + 1).padStart(2, '0')}</span>
                </div>
                <figcaption>
                  <b>{c.titulo}</b>
                  <span>{c.legenda}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            type="button"
            className="mz-casos-nav mz-casos-next"
            onClick={() => scroll(1)}
            aria-label="Próximos casos"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
