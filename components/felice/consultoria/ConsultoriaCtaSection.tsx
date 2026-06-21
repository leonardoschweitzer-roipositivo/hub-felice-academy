import Image from 'next/image';
import { Check } from '../ui/icons';
import { CtaConsultoria } from '../sections/obrigado/Cta';

/* Seção de CTA reutilizável (índice do Kit F4 + 4 documentos). Funde a
   autoridade do Dr. Sócrates (foto + credenciais + fala) com a oferta da
   consultoria, para criar coerência de narrativa: quem é ele → como ele
   te ajuda → benefícios → preço → agendar. */
const CREDS = [
  'Cirurgião-dentista graduado pela UFPB (2007)',
  'Especialista em Cirurgia e Traumatologia Bucomaxilofacial pela UEPB',
  'Especialista em Periodontia pela FACOP/Bauru',
  'Mestre em Implantodontia pela SLM/SP',
  'Mestre em Periodontia pela SLM/SP',
  'Diretor-Clínico da Felice Odontologia',
  'Professor de cursos de especialização na Felice Academy',
];

const BENEFICIOS = [
  {
    t: 'Plano sob medida',
    d: 'Defino com você as prioridades de implementação para a realidade da sua clínica.',
  },
  {
    t: 'Dúvidas resolvidas',
    d: 'Pergunte sobre POP, atendimento, agendamento e marketing e saia com respostas práticas.',
  },
  {
    t: 'Equipe alinhada',
    d: 'Te mostro como engajar o time no método para você sair da operação de vez.',
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
        <div className="cta-consult-mentor">
          <div className="cta-consult-photo reveal">
            <Image
              src="/images/dr-socrates-tavares.avif"
              alt="Dr. Sócrates Tavares"
              width={560}
              height={650}
              quality={70}
              sizes="(max-width: 760px) 80vw, 320px"
            />
          </div>
          <div className="cta-consult-intro reveal d1">
            <span className="eyebrow">Próximo passo · Consultoria gratuita</span>
            <h2>
              Deixe quem criou o método <span className="gold-grad">te ajudar a aplicá-lo</span>
            </h2>
            <p className="cta-consult-sub">
              Sou o Dr. Sócrates. Validei esse sistema na minha própria clínica e, em uma consultoria
              gratuita de 1 hora, vou montar com você o plano de implementação sob medida para a sua
              realidade.
            </p>
            <ul className="creds">
              {CREDS.map((c) => (
                <li key={c}>
                  <Check size={18} stroke="currentColor" /> {c}
                </li>
              ))}
            </ul>
          </div>
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
