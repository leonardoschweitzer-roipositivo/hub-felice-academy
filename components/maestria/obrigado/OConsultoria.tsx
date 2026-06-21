import { CtaConsultoria } from './Cta';

const GANHOS = [
  {
    t: 'Por onde você começa',
    d: 'Eu te ajudo a identificar, entre os seus pacientes, o caso ideal para a sua primeira cirurgia zigomática — com critério clínico e segurança.',
  },
  {
    t: 'O planejamento do seu primeiro caso',
    d: 'Vemos juntos como indicar, planejar no fluxo digital e montar o passo a passo de um caso real seu — em vez de ficar só na teoria.',
  },
  {
    t: 'Suas dúvidas de protocolo, resolvidas',
    d: 'Você traz suas perguntas sobre indicação, ancoragem, zona segura e carga imediata, e eu respondo na prática.',
  },
  {
    t: 'Sua estrutura pronta para operar',
    d: 'Eu te oriento sobre instrumental, fluxo e equipe para você entrar na sala com confiança — e parar de encaminhar o caso de maior valor.',
  },
];

/* O que o comprador resolve na reunião de 1h. Responde diretamente ao
   "fiz o curso, e agora?". */
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
