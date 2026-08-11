import { CtaConsultoria } from './Cta';

const GANHOS = [
  {
    t: 'Por onde a sua equipe começa',
    d: 'Definimos qual dos 4 pilares — Segurança, Cortesia, Show ou Eficiência — está mais frágil na sua clínica e o que a recepção muda já na primeira semana.',
  },
  {
    t: 'A rotina do balcão, do jeito que cabe no seu dia',
    d: 'Vemos como o cadastro, a conferência e a confirmação entram na sua operação sem travar o atendimento — encantamento que sobrevive ao dia cheio.',
  },
  {
    t: 'As faltas que doem na agenda',
    d: 'Montamos o processo de confirmação e de recuperação do paciente que não veio, para o buraco na agenda parar de virar prejuízo.',
  },
  {
    t: 'O que você vai cobrar da recepção',
    d: 'Saímos com os indicadores que você passa a acompanhar — espera, no-show, retorno e indicação — para saber se o treinamento virou experiência de verdade.',
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
          <h2>Em uma conversa, o curso vira rotina na sua recepção</h2>
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
