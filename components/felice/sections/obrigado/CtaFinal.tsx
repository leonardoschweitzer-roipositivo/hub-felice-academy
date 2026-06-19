import { CtaConsultoria } from './Cta';
import { DOCS_URL } from './config';

/* Fechamento: último empurrão para o agendamento, com o acesso aos
   documentos ainda disponível como caminho secundário. */
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
            <span className="gold-grad">Agende sua consultoria gratuita de 1 hora.</span>
          </h2>
          <p>
            Em uma conversa você sai com um plano claro de como aplicar tudo na sua clínica — com a
            orientação de quem validou o método na própria operação.
          </p>
          <CtaConsultoria size="lg" />
          <a className="obg-sublink" href={DOCS_URL}>
            Acessar meus documentos do Kit F4 →
          </a>
        </div>
      </div>
    </section>
  );
}
