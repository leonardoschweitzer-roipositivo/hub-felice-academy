/* Depoimentos (vídeo) + "Como funciona a entrada" da Mentoria de Zigomático. */

import { DEPOIMENTOS, ENTRADA, APPLY_URL, FINAL } from './content';

export function MentoriaZigomaticoDepoimentos() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Quem já fez
          </span>
          <h2>
            Cirurgiões que saíram da insegurança para a{' '}
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

/** Substitui a garantia: 3 passos do processo de aplicação. */
export function MentoriaZigomaticoEntrada() {
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
            As turmas são pequenas porque a prática presencial pede atenção individual. A entrada
            começa com um questionário rápido.
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
