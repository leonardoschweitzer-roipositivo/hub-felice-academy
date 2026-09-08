'use client';

import { useRef } from 'react';
import { AMBIENTE, AMBIENTE_HEAD } from './content';

/* Galeria do ambiente acadêmico e cirúrgico. Reusa o carrossel dos casos
   (.mz-casos / .mz-casos-track / .mz-caso, em maestria.css) porque é o mesmo
   problema: fileira de fotos que rola no toque e tem seta no desktop.

   Diferença: aqui o card é SÓ a foto. Sem figcaption e sem a tag dourada de
   etapa — a mensagem está no cabeçalho da seção, e legenda embaixo de cada
   sala vira ruído repetido ("sala cirúrgica", "sala cirúrgica"...). */
export function MentoriaZigomaticoAmbiente() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.mz-caso') as HTMLElement | null;
    const amount = card ? card.offsetWidth + 18 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="sec" id="ambiente">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            {AMBIENTE_HEAD.eyebrow}
          </span>
          <h2>
            {AMBIENTE_HEAD.titlePre} <span className="gold-grad">{AMBIENTE_HEAD.titleGold}</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            {AMBIENTE_HEAD.lead}
          </p>
        </div>

        <div className="mz-casos reveal">
          <button
            type="button"
            className="mz-casos-nav mz-casos-prev"
            onClick={() => scroll(-1)}
            aria-label="Fotos anteriores do ambiente"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="mz-casos-track" ref={trackRef}>
            {AMBIENTE.map((a, i) => (
              <div className="mz-caso" key={a.img ?? `slot-${i}`}>
                <div className="mz-caso-img">
                  {a.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={a.img} alt={a.alt ?? ''} loading="lazy" />
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
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mz-casos-nav mz-casos-next"
            onClick={() => scroll(1)}
            aria-label="Próximas fotos do ambiente"
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
