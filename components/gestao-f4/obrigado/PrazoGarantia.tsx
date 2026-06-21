import { CtaConsultoria } from './Cta';

/* Escassez: uma hora comigo valeria R$ 500; nesta semana liberei alguns
   horários gratuitos para quem acabou de entrar no Curso Gestão F4. */
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
            Vagas gratuitas só nesta semana
          </span>
          <h2>
            Normalmente, uma hora comigo custa R$ 500. Nesta semana,{' '}
            <span className="gold-grad">é por minha conta</span>.
          </h2>
          <div className="obg-prazo-price">
            <span className="old">
              R$ 500<small>/hora</small>
            </span>
            <span className="sep">→</span>
            <span className="now">Gratuito</span>
          </div>
          <p>
            Como você acabou de entrar no Curso Gestão F4, abri uma quantidade limitada de horários
            gratuitos na minha agenda esta semana para te ajudar a implementar tudo do jeito certo.
            Quando essas vagas acabarem, a consultoria volta a ser paga — então garanta a sua agora.
          </p>
          <CtaConsultoria size="lg" />
        </div>
      </div>
    </section>
  );
}
