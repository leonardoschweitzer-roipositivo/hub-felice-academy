/* Depoimentos de alunos + Garantia da Masterclass Zigomático Descomplicado. */
'use client';

import { useRef } from 'react';
import { DEPOIMENTOS, GARANTIA, OFERTA_ANCHOR } from './content';

export function MasterclassDepoimentos() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.mz-video') as HTMLElement | null;
    const amount = card ? card.offsetWidth + 18 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Depoimentos de alunos
          </span>
          <h2>
            Dentistas que saíram da insegurança para a{' '}
            <span className="gold-grad">sala de cirurgia</span>
          </h2>
        </div>

        <div className="mz-casos mc-depos reveal">
          <button type="button" className="mz-casos-nav mz-casos-prev" onClick={() => scroll(-1)} aria-label="Depoimentos anteriores">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="mz-casos-track" ref={trackRef}>
            {DEPOIMENTOS.map((d) => {
              const inner = (
                <>
                  <div className="mz-video-thumb">
                    {d.thumb && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={d.thumb} alt={`Depoimento de ${d.nome}`} loading="lazy" />
                    )}
                    <span className="mz-video-play" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                  <p>&quot;{d.texto}&quot;</p>
                  <div className="who">
                    <b>{d.nome}</b>
                    <small>{d.meta}</small>
                  </div>
                </>
              );
              return d.video ? (
                <a key={d.nome} className="mz-video" href={d.video} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={d.nome} className="mz-video">
                  {inner}
                </div>
              );
            })}
          </div>

          <button type="button" className="mz-casos-nav mz-casos-next" onClick={() => scroll(1)} aria-label="Próximos depoimentos">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export function MasterclassGarantia() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="guarantee reveal">
          <div className="seal">
            <svg className="seal-svg" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="seal-arc-mc" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <circle className="seal-ring" cx="100" cy="100" r="92" />
              <circle className="seal-ring seal-ring--inner" cx="100" cy="100" r="64" />
              <g className="seal-rotor">
                <text className="seal-text">
                  <textPath href="#seal-arc-mc" startOffset="0%">
                    GARANTIA INCONDICIONAL · 7 DIAS · GARANTIA INCONDICIONAL ·
                  </textPath>
                </text>
              </g>
            </svg>
            <div className="seal-core">
              <svg className="seal-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2 4 5v6c0 5 3.4 8.3 8 11 4.6-2.7 8-6 8-11V5l-8-3Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <b>7 DIAS</b>
            </div>
          </div>
          <div>
            <h3>{GARANTIA.titulo}</h3>
            <p>{GARANTIA.texto}</p>
            <a href={OFERTA_ANCHOR} className="btn btn-primary btn-lg" style={{ marginTop: 18 }}>
              {GARANTIA.cta} <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
