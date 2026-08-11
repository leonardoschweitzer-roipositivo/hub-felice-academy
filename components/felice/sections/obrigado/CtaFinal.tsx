import { CtaConsultoria } from './Cta';
import { DOCS_URL } from './config';

/* Fechamento: último empurrão para o agendamento. O sublink aqui leva à ÁREA
   do Kit (topbar, busca, prev/next entre documentos) — e não à âncora da
   grade, que jogaria o leitor de volta ao topo depois do CTA final. */
export function CtaFinal() {
  return (
    <section className="sec obg-final">
      <div className="wrap">
        <div className="obg-final-card reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            O próximo passo
          </span>
          <h2>
            Não deixe o Kit parado. <br />
            <span className="gold-grad">Vamos marcar a sua consultoria gratuita de 1 hora?</span>
          </h2>
          <p>
            Em uma conversa, eu te entrego um plano claro de como aplicar tudo na sua clínica — com a
            orientação de quem validou esse método na própria operação. Te espero lá.
          </p>
          <CtaConsultoria size="lg" />
          <a className="obg-sublink" href={DOCS_URL}>
            Ir para a área completa do Kit F4 →
          </a>
        </div>
      </div>
    </section>
  );
}
