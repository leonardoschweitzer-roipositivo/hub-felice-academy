import { CtaConsultoria } from './Cta';
import { PRAZO_DIAS } from './config';

/* Urgência atrelada à garantia: a janela de 7 dias é o melhor momento
   para agendar e tirar o máximo do kit desde o início. */
export function PrazoGarantia() {
  return (
    <section className="sec obg-prazo-sec">
      <div className="wrap">
        <div className="obg-prazo reveal">
          <span className="obg-prazo-tag">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="13" r="8" />
              <path d="M12 9v4l2 2M9 2h6" />
            </svg>
            Sua garantia de {PRAZO_DIAS} dias começou hoje
          </span>
          <h2>
            Agende nos próximos {PRAZO_DIAS} dias e comece a aplicar o método{' '}
            <span className="gold-grad">desde o primeiro dia</span>.
          </h2>
          <p>
            Quanto antes você estruturar a implementação, mais cedo a sua clínica sente o resultado
            — e você aproveita o período de garantia com tudo já rodando. Minha agenda é limitada,
            então garanta o seu horário agora.
          </p>
          <CtaConsultoria size="lg" />
        </div>
      </div>
    </section>
  );
}
