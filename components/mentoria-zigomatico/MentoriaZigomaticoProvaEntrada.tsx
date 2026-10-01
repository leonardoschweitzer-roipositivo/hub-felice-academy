/* "Como funciona a entrada" da Mentoria de Zigomático.
   Os depoimentos são os mesmos vídeos da Maestria Zigomática — a landing usa
   direto o <MaestriaDepoimentos /> (dados em maestria/content.ts). */

import { ENTRADA, APPLY_URL, FINAL } from './content';

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
