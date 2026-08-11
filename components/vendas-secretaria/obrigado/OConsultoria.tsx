import { CtaConsultoria } from './Cta';

const GANHOS = [
  {
    t: 'Por onde a sua equipe começa',
    d: 'Definimos juntos qual módulo a sua recepção assiste primeiro e o que ela precisa mudar já na segunda-feira — em vez de assistir a tudo e não aplicar nada.',
  },
  {
    t: 'Os scripts adaptados à sua clínica',
    d: 'Vemos como o primeiro contato, a resposta ao “quanto custa?” e a apresentação de orçamento funcionam no seu ticket, no seu público e no seu WhatsApp.',
  },
  {
    t: 'O follow-up que ninguém faz',
    d: 'Montamos a rotina de acompanhamento dos orçamentos em aberto: quem cobra, quando cobra e onde isso fica registrado para não cair no esquecimento.',
  },
  {
    t: 'O que você vai cobrar da recepção',
    d: 'Saímos com os números que você passa a acompanhar — orçamentos apresentados, fechados e reativados — para saber se o treinamento virou faturamento.',
  },
];

/* O que o comprador resolve na reunião de 1h. Responde diretamente ao
   "comprei o curso para a minha equipe, e agora?". */
export function OConsultoria() {
  return (
    <section className="sec obg-consult">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            O que eu resolvo com você em 1 hora
          </span>
          <h2>Em uma conversa, o curso vira processo na sua recepção</h2>
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
