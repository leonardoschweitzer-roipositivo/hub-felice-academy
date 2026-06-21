import { CtaConsultoria } from './Cta';
import { CURSO_URL } from './config';

/* Fechamento: último empurrão para o agendamento, com o acesso às aulas
   ainda disponível como caminho secundário. */
export function CtaFinal() {
  return (
    <section className="sec obg-final">
      <div className="wrap">
        <div className="obg-final-card reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            O próximo passo
          </span>
          <h2>
            Não deixe o curso parado. <br />
            <span className="gold-grad">Vamos marcar a sua consultoria gratuita de 1 hora?</span>
          </h2>
          <p>
            Em uma conversa, eu te entrego um plano claro de como aplicar os 4 pilares na sua clínica
            — com a orientação de quem validou esse método na própria operação. Te espero lá.
          </p>
          <CtaConsultoria size="lg" />
          <a className="obg-sublink" href={CURSO_URL}>
            Acessar minhas aulas do Gestão F4 →
          </a>
        </div>
      </div>
    </section>
  );
}
