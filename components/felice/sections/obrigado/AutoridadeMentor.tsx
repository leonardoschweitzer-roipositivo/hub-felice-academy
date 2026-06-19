import Image from 'next/image';
import { Check } from '../../ui/icons';

/* Variante da seção de autoridade para o contexto pós-compra:
   posiciona o Dr. Sócrates como o mentor da consultoria. Reusa a mesma
   foto, credenciais e classes (.authority/.auth-grid) da landing, sem
   alterar o componente compartilhado Autoridade.tsx. */
const CREDS = [
  'Especialista em Cirurgia e Traumatologia Bucomaxilofacial — UEPB',
  'Especialista em Periodontia — FACOP/Bauru',
  'Mestre em Implantodontia — SLM/SP',
  'Mestre em Periodontia — SLM/SP',
  'Diretor clínico da Felice Odontologia · Professor na Felice Academy',
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
            &quot;Na consultoria eu olho para a sua clínica e te mostro exatamente por onde começar.
            O mesmo sistema que validei na minha própria operação.&quot;
          </blockquote>
          <div className="auth-name">Dr. Sócrates Tavares</div>
          <p className="auth-role">
            Cirurgião-dentista, especialista e mestre — criador do método Felice
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
