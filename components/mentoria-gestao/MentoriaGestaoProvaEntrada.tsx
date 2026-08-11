/* Depoimentos (vídeo) + "Como funciona a entrada" da Mentoria de Gestão F4. */
'use client';

import { useRef } from 'react';
import { DEPOIMENTOS, ENTRADA, APPLY_URL, FINAL } from './content';

export function MentoriaGestaoDepoimentos() {
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
            Donos de clínica que saíram do improviso para o{' '}
            <span className="gold-grad">processo</span>
          </h2>
        </div>

        {/* Carrossel em vez do grid de 3: os depoimentos são verticais (9:16)
            e num card de 460px o vídeo sozinho passaria de 800px de altura.
            `.mz-depos` vive em maestria.css, compartilhado com Masterclass e
            Maestria — as três landings usam o mesmo card. */}
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
              // Com o player embutido o card não pode ser <a>: a âncora
              // engoliria o clique do play.
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

/** Substitui a seção de garantia: 3 passos do processo de aplicação. */
export function MentoriaGestaoEntrada() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Como funciona a entrada
          </span>
          <h2>
            Simples, rápido e <span className="gold-grad">por aplicação</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            As vagas são limitadas por turma. A entrada começa com um questionário rápido — daí a
            gente conversa e vê o seu encaixe.
          </p>
        </div>
        <div className="pillars">
          {ENTRADA.map((step, i) => (
            <div className={`pillar reveal${i ? ` d${i}` : ''}`} key={step.titulo}>
              <div className="num">{step.n}</div>
              <h3>{step.titulo}</h3>
              <p>{step.texto}</p>
            </div>
          ))}
        </div>
        <div className="center" style={{ marginTop: 32 }}>
          <a href={APPLY_URL} className="btn btn-primary btn-lg">
            {FINAL.cta} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
