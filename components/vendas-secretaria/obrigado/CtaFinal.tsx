import { CtaConsultoria } from './Cta';

/* Fechamento: último empurrão para o agendamento. Sem sublink de acesso
   às aulas — a página tem um caminho só. */
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
            Em uma conversa, eu te entrego um plano claro para a sua recepção começar a agendar e
            fechar mais — com a orientação de quem roda esse processo na própria clínica. Te espero
            lá.
          </p>
          <CtaConsultoria size="lg" />
        </div>
      </div>
    </section>
  );
}
