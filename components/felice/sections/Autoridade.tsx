import Image from 'next/image';
import { Check } from '../ui/icons';

const CREDS = [
  'Cirurgião-dentista graduado pela UFPB (2007)',
  'Especialista em Cirurgia e Traumatologia Bucomaxilofacial pela UEPB',
  'Especialista em Periodontia pela FACOP/Bauru',
  'Mestre em Implantodontia pela SLM/SP',
  'Mestre em Periodontia pela SLM/SP',
  'Diretor-Clínico da Felice Odontologia',
  'Professor de cursos de especialização na Felice Academy',
];

export function Autoridade() {
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
          <span className="eyebrow">Quem desenvolveu o método</span>
          <blockquote>
            &quot;Esse não é mais um material teórico. É o sistema que validei na prática, dentro da
            minha própria clínica.&quot;
          </blockquote>
          <div className="auth-name">Dr. Sócrates Tavares</div>
          <p className="auth-role">
            Diretor clínico da Felice Odontologia · Professor na Felice Academy
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
