import Image from 'next/image';
import { check } from '../ui/icons';

/* Entregas do kit. Para incluir/remover um item, edite este array. */
type Entrega = {
  tag: string;
  titulo: string;
  descricao: string;
  bullets: string[];
  /* posição do quadrado aceso no selo F4 (0..3) */
  marca: 0 | 1 | 2 | 3;
  /* mídia invertida (imagem à direita) */
  rev?: boolean;
  /* imagem do book (AVIF otimizado em /public/images/book-*) */
  img: string;
  valor?: string;
};

const ENTREGAS: Entrega[] = [
  {
    tag: '01 · Procedimento Operacional Padrão',
    titulo: 'Procedimento Operacional Padrão',
    descricao:
      'Estruture os processos da sua clínica com clareza e padronização. O POP ajuda sua equipe a executar cada função com eficiência e segurança.',
    bullets: [
      'Gerador de POP personalizado, pronto para imprimir e assinar',
      'Matriz de responsabilidades e checklists com progresso salvo',
      'Libera você da dependência da equipe',
    ],
    marca: 0,
    img: '/images/book-procedimento-operacional-padrao.avif',
    valor: 'R$ 97',
  },
  {
    tag: '02 · Scripts de Atendimento',
    titulo: 'Scripts de Atendimento',
    descricao:
      'Estruture um atendimento humanizado, estratégico e profissional. Com scripts bem definidos, sua equipe conduz conversas com mais segurança.',
    bullets: [
      'Scripts copiáveis para usar na hora, sem decorar',
      'Simulador de role-play com IA para treinar a recepção',
      'Padroniza a experiência e eleva a percepção de valor',
    ],
    marca: 1,
    rev: true,
    img: '/images/book-script-de-atendimento.avif',
    valor: 'R$ 97',
  },
  {
    tag: '03 · Scripts de Agendamento',
    titulo: 'Scripts de Agendamento',
    descricao:
      'Transforme contatos em consultas agendadas com mais eficiência. Os scripts conduzem a conversa de forma clara, organizada e persuasiva.',
    bullets: [
      'Roteiro de chamada passo a passo e banco de objeções',
      'Simulador de ligação com IA para treinar a CRC',
      'Aumenta a conversão da agenda e profissionaliza o contato',
    ],
    marca: 2,
    img: '/images/book-script-de-agendamento.avif',
    valor: 'R$ 97',
  },
  {
    tag: '04 · Calendário Editorial',
    titulo: 'Calendário Editorial de Marketing',
    descricao:
      'Planeje conteúdos estratégicos para atrair, engajar e fortalecer a autoridade da sua clínica nas redes sociais — com constância e intenção.',
    bullets: [
      'Calendário editorial editável e pronto para imprimir',
      'Calculadora de conteúdo 40/40/20 para equilibrar os posts',
      'Mantém presença constante e constrói autoridade',
    ],
    marca: 3,
    rev: true,
    img: '/images/book-calendario-de-marketing.avif',
    valor: 'R$ 97',
  },
];

export function Componentes() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            O que você recebe
          </span>
          <h2>
            Quatro entregas. <span className="gold-grad">Uma clínica organizada.</span>
          </h2>
        </div>

        {ENTREGAS.map((e) => (
          <div key={e.titulo} className={`comp reveal${e.rev ? ' rev' : ''}`}>
            <div className="comp-media">
              <Image
                src={e.img}
                alt={e.titulo}
                width={692}
                height={685}
                quality={72}
                sizes="(max-width: 820px) 90vw, 520px"
                className="comp-book"
              />
            </div>
            <div>
              <span className="comp-tag">{e.tag}</span>
              <h3>{e.titulo}</h3>
              <p>{e.descricao}</p>
              <ul>
                {e.bullets.map((b) => (
                  <li key={b}>
                    {check} {b}
                  </li>
                ))}
              </ul>
              {e.valor && (
                <p className="val">
                  Valor avulso: <b>{e.valor}</b>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
