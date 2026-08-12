import { Mock, type MockTipo } from './ArqMock';

/* ============================================================
   O mapa de rotas: a árvore do site com a mini-tela de cada página.

   Responde à outra metade da pergunta que as jornadas já respondem. A
   corrente do ArqJornada mostra *o caminho* que o comprador percorre; aqui
   se vê *como o site se organiza* — quem é pai de quem, que formato cada
   página tem e quais rotas existem de verdade no repositório.

   Divisão de trabalho entre os dois, para não dizer a mesma coisa duas
   vezes: a jornada inclui o que está fora do site (o anúncio, a Greenn, o
   WhatsApp) e por isso é a mesma para os cinco produtos do padrão A. O
   mapa mostra só as páginas que existem em `app/` — e mostra as nove, uma
   a uma, com o endereço de cada uma.

   Server component, zero JS: os conectores da árvore são bordas em
   `::before`/`::after` no arquitetura.css. Nada aqui anima — a onda de
   brilho é a assinatura das duas jornadas e repeti-la em nove produtos ao
   mesmo tempo viraria ruído.

   ⚠️ Ao criar ou apagar rota, atualize MAPA_PUBLICO/MAPA_PLATAFORMA daqui,
   a árvore de texto e a faixa de números do ArquiteturaPaginas.tsx e a
   tabela do inventário. Confira o total com:
     find app -name "page.tsx" | wc -l
   ============================================================ */

type Tag = { t: string; k: 'ok' | 'warn' | 'no' | 'mut' };

/** Uma página do funil de um produto, mostrada na corrente sob o nó dele. */
type Passo = {
  /** Sufixo da rota a partir do pai, ex. '/obrigado/'. */
  rota: string;
  /** Rótulo curto. */
  n: string;
  mock: MockTipo;
};

export type NoRota = {
  /** Path público, com a barra final que o `trailingSlash` do Next impõe. */
  rota: string;
  nome: string;
  /** Wireframe do cartão. Sem isto o nó vira uma linha compacta. */
  mock?: MockTipo;
  /** Anotação curta, no tom da coluna de notas da árvore de texto. */
  nota?: string;
  tag?: Tag;
  /** As páginas próprias do funil daquele produto. */
  funil?: Passo[];
  filhos?: NoRota[];
};

/* ---------------------------------------------------------------
   As páginas de cada produto. Cinco produtos seguem o padrão A e três o
   padrão B, e dentro de cada padrão os sufixos são idênticos — daí as duas
   funções, em vez de repetir a mesma lista oito vezes.
   --------------------------------------------------------------- */

/** Padrão A: quem paga cai no obrigado e segue para a consultoria gratuita. */
function funilPago(): Passo[] {
  return [
    { rota: '/obrigado/', n: 'Obrigado', mock: 'obrigado' },
    { rota: '/consultoria/', n: 'Questionário', mock: 'quiz' },
    { rota: '/consultoria/confirmado/', n: 'Confirmação', mock: 'confirmacao' },
  ];
}

/** Padrão B: candidata-se, conversa no WhatsApp e só então recebe o obrigado. */
function funilCandidatura(): Passo[] {
  return [
    { rota: '/aplicacao/', n: 'Candidatura', mock: 'quiz' },
    { rota: '/aplicacao/confirmado/', n: 'Confirmação', mock: 'confirmacao' },
    { rota: '/obrigado/', n: 'Boas-vindas', mock: 'boasvindas' },
  ];
}

export const MAPA_PUBLICO: NoRota[] = [
  {
    rota: '/',
    nome: 'HUB',
    mock: 'vitrine',
    nota: 'a home · 6 cards de produto',
    filhos: [
      {
        rota: '/produtos/',
        nome: 'Vitrine',
        mock: 'vitrine',
        nota: 'mesmo catálogo da home',
        filhos: [
          {
            rota: '/produtos/kitgestaof4/',
            nome: 'Kit Gestão F4',
            mock: 'landing',
            tag: { t: 'R$ 97', k: 'ok' },
            funil: funilPago(),
            filhos: [
              {
                rota: '/produtos/kitgestaof4/kit-f4/',
                nome: 'Entrega do Kit',
                mock: 'doc',
                nota: 'o produto pago em si',
                tag: { t: 'sem proteção', k: 'no' },
                filhos: [
                  { rota: '/produtos/kitgestaof4/kit-f4/pop/', nome: 'POP' },
                  { rota: '/produtos/kitgestaof4/kit-f4/atendimento/', nome: 'Atendimento' },
                  { rota: '/produtos/kitgestaof4/kit-f4/crc/', nome: 'CRC' },
                  { rota: '/produtos/kitgestaof4/kit-f4/marketing/', nome: 'Marketing' },
                ],
              },
            ],
          },
          {
            rota: '/produtos/maestria-zigomatica/',
            nome: 'Maestria Zigomática',
            mock: 'landing',
            tag: { t: 'R$ 997', k: 'ok' },
            funil: funilPago(),
          },
          {
            rota: '/produtos/masterclass-zigomatico/',
            nome: 'Masterclass Zigomático',
            mock: 'landing',
            nota: 'o obrigado entrega a aula',
            tag: { t: 'R$ 67', k: 'ok' },
            funil: funilPago(),
          },
          {
            rota: '/produtos/vendas-secretaria/',
            nome: 'CRC de Alta Performance',
            mock: 'landing',
            tag: { t: 'R$ 597', k: 'ok' },
            funil: funilPago(),
          },
          {
            rota: '/produtos/recepcao-alta-performance/',
            nome: 'Recepção de Alta Performance',
            mock: 'landing',
            tag: { t: 'R$ 597', k: 'ok' },
            funil: funilPago(),
          },
          {
            rota: '/produtos/consultoria/',
            nome: 'Consultoria Gestão F4',
            mock: 'landing',
            nota: 'sem preço na página',
            tag: { t: 'candidatura', k: 'mut' },
            funil: funilCandidatura(),
          },
          {
            rota: '/produtos/mentorias/',
            nome: 'Escolha da mentoria',
            mock: 'vitrine',
            nota: 'hub de 2 cards · header e footer próprios',
            filhos: [
              {
                rota: '/produtos/mentoria-gestao-f4/',
                nome: 'Mentoria de Gestão F4',
                mock: 'landing',
                tag: { t: 'sem valor', k: 'warn' },
                funil: funilCandidatura(),
              },
              {
                rota: '/produtos/mentoria-zigomatico/',
                nome: 'Mentoria de Zigomático',
                mock: 'landing',
                tag: { t: 'sem valor', k: 'warn' },
                funil: funilCandidatura(),
              },
            ],
          },
        ],
      },
      {
        rota: '/crm/',
        nome: 'Felice CRM',
        mock: 'landing',
        nota: 'fora da vitrine · botão de oferta morto',
        tag: { t: 'não converte', k: 'no' },
      },
      { rota: '/privacidade/', nome: 'Privacidade', mock: 'legal' },
      { rota: '/termos/', nome: 'Termos de uso', mock: 'legal' },
      {
        rota: '/arquitetura-de-paginas/',
        nome: 'Esta página',
        mock: 'doc',
        nota: 'noindex · sem link em lugar nenhum',
      },
    ],
  },
];

export const MAPA_PLATAFORMA: NoRota[] = [
  {
    rota: '/plataforma/',
    nome: 'Área do aluno',
    mock: 'painel',
    nota: 'dados mockados · noindex + disallow',
    tag: { t: 'protótipo', k: 'mut' },
    filhos: [
      {
        rota: '/plataforma/cursos/',
        nome: 'Cursos',
        mock: 'painel',
        filhos: [
          {
            rota: '/plataforma/cursos/[curso]/',
            nome: 'Curso',
            filhos: [{ rota: '/plataforma/cursos/[curso]/[aula]/', nome: 'Player da aula' }],
          },
        ],
      },
      {
        rota: '/plataforma/materiais/',
        nome: 'Materiais',
        mock: 'painel',
        nota: 'linka a entrega do Kit F4',
        filhos: [{ rota: '/plataforma/materiais/[material]/', nome: 'Material' }],
      },
      {
        rota: '/plataforma/mentoria/',
        nome: 'Sala de mentoria',
        mock: 'painel',
        filhos: [{ rota: '/plataforma/mentoria/ao-vivo/[id]/', nome: 'Encontro ao vivo' }],
      },
      {
        rota: '/plataforma/vendas/',
        nome: 'Vendas',
        mock: 'painel',
        nota: 'módulo com cor própria (--acc coral)',
        filhos: [
          { rota: '/plataforma/vendas/pipeline/', nome: 'Pipeline' },
          { rota: '/plataforma/vendas/leads/', nome: 'Leads' },
          { rota: '/plataforma/vendas/clientes/', nome: 'Clientes' },
          { rota: '/plataforma/vendas/atendimento/', nome: 'Atendimento' },
          { rota: '/plataforma/vendas/automacoes/', nome: 'Automações' },
        ],
      },
      {
        rota: '/plataforma/admin/',
        nome: 'Admin',
        mock: 'painel',
        nota: 'shell e sidebar próprios',
        filhos: [
          {
            rota: '/plataforma/admin/cursos/',
            nome: 'Cursos',
            filhos: [{ rota: '/plataforma/admin/cursos/[id]/', nome: 'Editor de curso' }],
          },
          { rota: '/plataforma/admin/encontros/', nome: 'Encontros' },
          { rota: '/plataforma/admin/materiais/', nome: 'Materiais' },
          { rota: '/plataforma/admin/alunos/', nome: 'Alunos' },
        ],
      },
    ],
  },
];

/* A corrente das páginas próprias do produto. Reusa o elo e a seta da
   jornada, num tamanho menor e sem a animação de onda. */
function MiniFunil({ passos, base }: { passos: Passo[]; base: string }) {
  return (
    <div className="arq-scroll">
      <div className="arq-chain arq-chain--mini">
        {passos.map((p, i) => (
          <div className="arq-elo" key={p.rota}>
            <span className="arq-arw" aria-hidden="true">
              →
            </span>
            <a
              className="arq-node"
              href={`${base.replace(/\/$/, '')}${p.rota}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mock tipo={p.mock} />
              <span className="n">{p.n}</span>
              <span className="e">{p.rota}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function Cartao({ no }: { no: NoRota }) {
  /* Rota dinâmica não tem endereço para abrir: vira texto, não link.
     Sem isto o cartão levaria a um 404 com `[curso]` cru na URL. */
  const dinamica = no.rota.includes('[');
  const conteudo = (
    <>
      {no.mock && <Mock tipo={no.mock} />}
      <span className="arq-card-in">
        <span className="arq-card-rota">{no.rota}</span>
        <span className="arq-card-nome">
          {no.nome}
          {no.tag && <span className={`arq-pill ${no.tag.k}`}>{no.tag.t}</span>}
        </span>
        {no.nota && <span className="arq-card-nota">{no.nota}</span>}
      </span>
    </>
  );

  const cls = `arq-card${no.mock ? '' : ' arq-card--row'}${dinamica ? ' is-dyn' : ''}`;

  if (dinamica) {
    return <span className={cls}>{conteudo}</span>;
  }
  return (
    <a
      className={cls}
      href={no.rota}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${no.nome} (${no.rota}) em uma nova aba`}
    >
      {conteudo}
    </a>
  );
}

function Ramo({ nos }: { nos: NoRota[] }) {
  return (
    <ul className="arq-ramo">
      {nos.map((no) => (
        <li className="arq-no" key={no.rota}>
          <Cartao no={no} />
          {no.funil && <MiniFunil passos={no.funil} base={no.rota} />}
          {no.filhos && <Ramo nos={no.filhos} />}
        </li>
      ))}
    </ul>
  );
}

export function ArqMapa({ arvore, proto }: { arvore: NoRota[]; proto?: boolean }) {
  return (
    <div className={`arq-mapa${proto ? ' arq-mapa--proto' : ''}`}>
      <Ramo nos={arvore} />
    </div>
  );
}
