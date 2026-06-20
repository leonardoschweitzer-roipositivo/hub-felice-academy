/* Depoimentos (vídeo) + Garantia da Maestria Zigomática. */

import { DEPOIMENTOS } from './content';

export function MaestriaDepoimentos() {
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

        <div className="mz-videos">
          {DEPOIMENTOS.map((d, i) => {
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
            const cls = `mz-video reveal${i > 0 ? ` d${i}` : ''}`;
            // ⚠️ Sem URL de vídeo ainda → card estático com play (placeholder).
            return d.video ? (
              <a key={d.nome} className={cls} href={d.video} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <div key={d.nome} className={cls}>
                {inner}
              </div>
            );
          })}
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
