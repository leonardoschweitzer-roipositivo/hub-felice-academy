import { CtaConsultoria } from './Cta';

const GANHOS = [
  {
    t: 'Por onde você começa',
    d: 'Eu faço um diagnóstico rápido da sua clínica e definimos juntos as 2 ou 3 prioridades que dão resultado mais rápido.',
  },
  {
    t: 'Seu plano de implementação sob medida',
    d: 'Eu te mostro como aplicar os 4 pilares na sua realidade — equipe, agenda e estrutura — sem travar a operação.',
  },
  {
    t: 'Suas dúvidas dos 4 pilares, resolvidas',
    d: 'Você traz suas perguntas sobre Atendimento, Agendamento, Marketing e Gestão, e eu respondo na prática.',
  },
  {
    t: 'Sua equipe engajada',
    d: 'Eu te ensino a apresentar o método para o time, para que todos sigam o mesmo padrão — e você saia da operação.',
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
          <h2>Em uma conversa, eu te poupo semanas de tentativa e erro</h2>
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
