import type { ReactNode } from 'react';
import { AssistenteDemo } from './AssistenteDemo';

/* Seção do Assistente F4 — entre o diagnóstico e a metodologia.
   É a virada do posicionamento: o Kit é mais que um PDF, vem com um
   mentor de IA ao lado na implementação. Para incluir/remover um
   ponto, edite este array. */
type Ponto = { titulo: string; descricao: string; icon: ReactNode };

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const PONTOS: Ponto[] = [
  {
    titulo: 'Encontra',
    descricao: 'Qualquer script, POP ou checklist em segundos — sem folhear documento.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    titulo: 'Tira dúvidas',
    descricao: 'Responde com base no próprio Kit e mostra de qual documento tirou a resposta.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M9 10h6M9 13h4" />
      </svg>
    ),
  },
  {
    titulo: 'Orienta a implementação',
    descricao: 'Diz por onde começar e o que entregar para cada pessoa da equipe.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

export function Assistente() {
  return (
    <section className="sec assist" id="assistente">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Mais que um PDF
          </span>
          <h2>
            Um mentor de IA <span className="gold-grad">ao seu lado</span> na implementação
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            O Assistente F4 foi treinado no Método F4 do Dr. Sócrates. Pergunte como perguntaria a
            um mentor: ele acha o trecho certo, explica e diz por onde começar — sempre citando o
            documento de origem.
          </p>
        </div>

        <div className="assist-grid">
          <div className="reveal d1">
            <AssistenteDemo />
          </div>

          <ul className="assist-points">
            {PONTOS.map((p, i) => (
              <li className={`assist-point reveal d${i + 1}`} key={p.titulo}>
                <span className="ico">{p.icon}</span>
                <span>
                  <b>{p.titulo}</b>
                  {p.descricao}
                </span>
              </li>
            ))}
            <li className="assist-cta reveal d4">
              <a href="#checkout" className="btn btn-primary btn-lg">
                Liberar Acesso por R$ 97 <span className="arrow">→</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
