/* Depoimentos + "Como funciona a entrada" da Mentoria de Zigomático. */

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

        {/* Só texto, sem vídeo: nada de .mz-video-thumb com botão de play,
            que é o que este bloco desenhava antes em TODO card, tivesse ou
            não vídeo por trás. Play que não toca engana o visitante.
            São quatro depoimentos, e a grade base é de 3 colunas — daí o
            --quotes, que põe 2x2 e evita o órfão sozinho na segunda linha. */}
        <div className="mz-videos mz-videos--quotes">
          {DEPOIMENTOS.map((d, i) => (
            <blockquote className={`mz-video reveal${i > 0 ? ` d${i % 4}` : ''}`} key={d.nome}>
              <p>&quot;{d.texto}&quot;</p>
              <div className="who">
                <b>{d.nome}</b>
                <small>{d.meta}</small>
              </div>
            </blockquote>
          ))}
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
