import { CtaConsultoria } from '../sections/obrigado/Cta';

/* Seção de CTA reutilizável: estimula o usuário (que já está dentro do
   Kit) a agendar a consultoria gratuita. Usada na índice do Kit F4 e nas
   4 páginas de documento, sempre antes do footer. */
const BENEFICIOS = [
  {
    t: 'Plano sob medida',
    d: 'O Dr. Sócrates define com você as prioridades de implementação para a realidade da sua clínica.',
  },
  {
    t: 'Dúvidas resolvidas',
    d: 'Pergunte sobre POP, atendimento, agendamento e marketing e saia com respostas práticas.',
  },
  {
    t: 'Equipe alinhada',
    d: 'Descubra como engajar o time no método para sair da operação de vez.',
  },
];

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export function ConsultoriaCtaSection() {
  return (
    <section className="cta-consult">
      <div className="wrap cta-consult-inner">
        <div className="cta-consult-head reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Próximo passo · Consultoria gratuita
          </span>
          <h2>
            Você já tem o método. <span className="gold-grad">Falta colocá-lo para rodar.</span>
          </h2>
          <p className="cta-consult-sub">
            Agende uma consultoria gratuita de 1 hora com o Dr. Sócrates e saia com um plano de
            implementação sob medida para a sua clínica.
          </p>
        </div>

        <div className="cta-consult-cards">
          {BENEFICIOS.map((b, i) => (
            <div className={`cta-consult-card reveal d${i + 1}`} key={b.t}>
              <span className="cta-consult-ic">
                <CheckIcon />
              </span>
              <h3>{b.t}</h3>
              <p>{b.d}</p>
            </div>
          ))}
        </div>

        <div className="cta-consult-foot reveal d2">
          <div className="cta-consult-price">
            <span className="old">
              R$ 500<small>/hora</small>
            </span>
            <span className="sep">→</span>
            <span className="now">Gratuito nesta semana</span>
          </div>
          <CtaConsultoria size="lg" />
          <p className="cta-consult-note">
            Vagas limitadas liberadas pelo Dr. Sócrates só nesta semana.
          </p>
        </div>
      </div>
    </section>
  );
}
