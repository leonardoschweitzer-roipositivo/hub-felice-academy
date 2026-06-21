import Image from 'next/image';
import { Check } from '@/components/felice/ui/icons';

/* Variante da seção de autoridade para o contexto pós-acesso:
   posiciona o Dr. Sócrates como o mentor da consultoria. Reusa a mesma
   foto, credenciais e classes (.authority/.auth-grid) da landing. */
const CREDS = [
  'Cirurgião-dentista graduado pela UFPB (2007)',
  'Especialista em Cirurgia e Traumatologia Bucomaxilofacial pela UEPB',
  'Especialista em Periodontia pela FACOP/Bauru',
  'Mestre em Implantodontia pela SLM/SP',
  'Mestre em Periodontia pela SLM/SP',
  'Diretor-Clínico da Felice Odontologia',
  'Professor de cursos de especialização na Felice Academy',
];

export function AutoridadeMentor() {
  return (
    <section className="sec authority">
      <div className="wrap auth-grid">
        <div className="auth-photo reveal">
          <Image
            src="/images/dr-socrates-tavares.avif"
            alt="Dr. Sócrates Tavares"
            width={600}
            height={697}
            quality={70}
            sizes="(max-width: 760px) 90vw, 600px"
          />
        </div>
        <div className="reveal d1">
          <span className="eyebrow">Quem vai te guiar</span>
          <blockquote>
            &quot;Na consultoria eu olho para o seu cenário e te mostro exatamente qual é o seu
            próximo passo nos zigomáticos. O mesmo raciocínio que aplico na minha própria sala.&quot;
          </blockquote>
          <div className="auth-name">Dr. Sócrates Tavares</div>
          <p className="auth-role">
            Cirurgião-dentista, especialista e mestre — referência em implantes zigomáticos
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
    </section>
  );
}
