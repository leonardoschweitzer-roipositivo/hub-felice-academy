import { ENTRADA, APLICACAO_URL, FINAL } from './content';

/* Substitui a seção de garantia das landings com checkout: aqui não há
   compra, há um processo de aplicação em 3 passos. */
export function ConsultoriaEntrada() {
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
            A consultoria é conduzida para poucas clínicas por vez. A entrada começa com um
            questionário rápido — daí a gente conversa e vê o seu encaixe.
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
        {/* `.center` sozinho não existe no felice.css (só `.sec-head.center`),
            por isso a classe própria — a mentoria-gestao tem o mesmo CTA
            encostado à esquerda por causa disso. */}
        <div className="cons-cta-center" style={{ marginTop: 32 }}>
          <a href={APLICACAO_URL} className="btn btn-primary btn-lg">
            {FINAL.cta} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
