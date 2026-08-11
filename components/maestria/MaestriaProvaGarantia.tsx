/* Depoimentos (vídeo) + Garantia da Maestria Zigomática. */
'use client';

import { useRef } from 'react';
import { DEPOIMENTOS } from './content';

export function MaestriaDepoimentos() {
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
            Quem já fez
          </span>
          <h2>
            Dentistas que saíram da insegurança para a{' '}
            <span className="gold-grad">sala de cirurgia</span>
          </h2>
        </div>

        {/* Carrossel em vez do grid de 3: os depoimentos são verticais (9:16)
            e num card de 460px o vídeo sozinho passaria de 800px de altura. */}
        <div className="mz-casos mz-depos reveal">
          <button type="button" className="mz-casos-nav mz-casos-prev" onClick={() => scroll(-1)} aria-label="Depoimentos anteriores">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="mz-casos-track" ref={trackRef}>
            {DEPOIMENTOS.map((d) => {
              const inner = (
                <>
                  <div className="mz-depo-video">
                    {d.embed ? (
                      <iframe
                        id={d.embedId}
                        src={d.embed}
                        title={`Depoimento de ${d.nome}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    ) : d.thumb ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={d.thumb} alt={`Depoimento de ${d.nome}`} loading="lazy" />
                    ) : (
                      <span className="mz-depo-ph">Depoimento em vídeo em breve</span>
                    )}
                  </div>
                  <p>&quot;{d.texto}&quot;</p>
                  <div className="who">
                    <b>{d.nome}</b>
                    <small>{d.meta}</small>
                  </div>
                </>
              );
              // Com o player embutido o card não pode ser <a>: o link engoliria
              // o clique do play. Só o card antigo (externo) vira âncora.
              return d.video && !d.embed ? (
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

export function MaestriaGarantia() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="guarantee reveal">
          <div className="seal">
            <svg className="seal-svg" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="seal-arc-mz" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <circle className="seal-ring" cx="100" cy="100" r="92" />
              <circle className="seal-ring seal-ring--inner" cx="100" cy="100" r="64" />
              <g className="seal-rotor">
                <text className="seal-text">
                  <textPath href="#seal-arc-mz" startOffset="0%">
                    GARANTIA INCONDICIONAL · 7 DIAS · GARANTIA INCONDICIONAL ·
                  </textPath>
                </text>
              </g>
            </svg>
            <div className="seal-core">
              <svg
                className="seal-shield"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2 4 5v6c0 5 3.4 8.3 8 11 4.6-2.7 8-6 8-11V5l-8-3Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <b>7 DIAS</b>
            </div>
          </div>
          <div>
            <h3>Risco zero para você</h3>
            <p>
              Assista às primeiras aulas com calma. Se a Maestria Zigomática não for para você,
              peça o reembolso em até 7 dias — devolvemos 100% do valor, sem perguntas e sem
              burocracia. A decisão de continuar é totalmente sua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
