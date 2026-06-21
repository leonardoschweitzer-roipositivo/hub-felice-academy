import { CtaConsultoria } from './Cta';
import { ACESSO_URL } from './config';

/* Fechamento: último empurrão para o agendamento, com o acesso à
   masterclass ainda disponível como caminho secundário. */
export function CtaFinal() {
  return (
    <section className="sec obg-final">
      <div className="wrap">
        <div className="obg-final-card reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            O próximo passo
          </span>
          <h2>
            Não deixe a masterclass parar no play. <br />
            <span className="gold-grad">Vamos marcar a sua consultoria gratuita de 1 hora?</span>
          </h2>
          <p>
            Em uma conversa, eu te entrego um caminho claro para o seu próximo passo nos zigomáticos —
            com a orientação de quem faz essas cirurgias na própria rotina. Te espero lá.
          </p>
          <CtaConsultoria size="lg" />
          <a className="obg-sublink" href={ACESSO_URL}>
            Assistir à masterclass →
          </a>
        </div>
      </div>
    </section>
  );
}
