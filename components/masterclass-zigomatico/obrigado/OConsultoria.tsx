import { CtaConsultoria } from './Cta';

const GANHOS = [
  {
    t: 'Por onde você começa',
    d: 'Eu te ajudo a entender o seu próximo passo concreto depois da masterclass — sem pular etapas e sem insegurança.',
  },
  {
    t: 'O olhar sobre os seus casos',
    d: 'A gente analisa o seu cenário e os casos de maxila atrófica que passam pela sua agenda, para você enxergar onde já dá para avançar.',
  },
  {
    t: 'Suas dúvidas da masterclass, resolvidas',
    d: 'Você traz suas perguntas sobre indicação, planejamento, zona segura e precificação, e eu respondo na prática.',
  },
  {
    t: 'Seu caminho até operar com segurança',
    d: 'Eu te mostro o caminho — da masterclass à prática — para você deixar de encaminhar o caso de maior valor da sua agenda.',
  },
];

/* O que o aluno resolve na reunião de 1h. Responde diretamente ao
   "assisti, e agora?". */
export function OConsultoria() {
  return (
    <section className="sec obg-consult">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            O que eu resolvo com você em 1 hora
          </span>
          <h2>Em uma conversa, eu te poupo meses de insegurança</h2>
        </div>

        <div className="obg-benefits">
          {GANHOS.map((g, i) => (
            <div className={`obg-benefit reveal d${i}`} key={g.t}>
              <span className="obg-benefit-ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <div>
                <h3>{g.t}</h3>
                <p>{g.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="obg-center-cta reveal d2">
          <CtaConsultoria size="lg" />
        </div>
      </div>
    </section>
  );
}
