import type { ReactNode } from 'react';

/* Recursos da plataforma interativa. É o coração do reposicionamento:
   comunica que o Kit não é um PDF, é uma plataforma viva. Reutiliza o
   padrão visual de cards .pillars/.pillar/.ico (já estilizado em felice.css),
   sem CSS novo. Para incluir/remover um recurso, edite este array. */
type Recurso = {
  titulo: string;
  descricao: string;
  icon: ReactNode;
};

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const RECURSOS: Recurso[] = [
  {
    titulo: 'Busca instantânea',
    descricao: 'Encontre qualquer script, processo ou checklist em segundos — sem folhear PDF.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    titulo: 'IA que conhece o Kit',
    descricao: 'Pergunte em linguagem natural e receba a resposta tirada do próprio material.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M9 10h6M9 13h4" />
      </svg>
    ),
  },
  {
    titulo: 'Simulador de treino',
    descricao: 'Sua equipe pratica atendimento e ligações com um paciente simulado por IA.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 11h-4M20 9v4" />
      </svg>
    ),
  },
  {
    titulo: 'Ferramentas prontas',
    descricao: 'Gerador de POP, calendário editorial, calculadora de conteúdo e checklists interativos.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <path d="M14.7 6.3a4 4 0 0 0-5.7 5.7l-6 6 2.7 2.7 6-6a4 4 0 0 0 5.7-5.7l-2.5 2.5-2.7-2.7z" />
      </svg>
    ),
  },
  {
    titulo: 'Progresso salvo',
    descricao: 'Cada pessoa retoma a leitura de onde parou, no próprio ritmo.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <path d="M12 22a10 10 0 1 1 10-10" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    titulo: 'Acesso vitalício',
    descricao: 'Abre em qualquer dispositivo, pelo navegador, sem instalar nada — e sempre atualizado.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
];

export function Plataforma() {
  return (
    <section className="sec" id="plataforma">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Não é um PDF
          </span>
          <h2>
            Seu Kit vive numa <span className="gold-grad">plataforma interativa</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            Os mesmos quatro conteúdos, agora vivos: busque, pergunte para a IA, treine a equipe e
            use as ferramentas — direto do navegador, no consultório ou no celular.
          </p>
        </div>

        <div className="pillars">
          {RECURSOS.map((r, i) => (
            <div className={`pillar reveal${i % 2 ? ' d1' : ''}`} key={r.titulo}>
              <div className="ico">{r.icon}</div>
              <h3>{r.titulo}</h3>
              <p>{r.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
