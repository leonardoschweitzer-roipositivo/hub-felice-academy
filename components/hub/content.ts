/* ============================================================
   HUB Institucional · Felice Academy
   Dados dos 6 produtos da vitrine + stats. Tudo configurável aqui.
   ⚠️ Validar com o cliente: estado real de cada card (Disponível /
   Em breve) e os links externos dos produtos ainda sem página.
   ============================================================ */

export type Categoria = 'Curso' | 'Mentoria' | 'Software';
export type Estado = 'disponivel' | 'em-breve';

export type Produto = {
  /** Número do nó na arquitetura (sitemap). Vira o badge dourado. */
  num: string;
  titulo: string;
  descricao: string;
  categoria: Categoria;
  estado: Estado;
  /** Destino do CTA. Use rota interna (/produtos/kitgestaof4, /crm) ou URL externa. */
  href: string;
  /** true quando href é uma rota interna deste app (usa <Link>). */
  interno?: boolean;
  /** Texto do CTA. Default: "Ver mais" (disponível) / "Em breve". */
  cta?: string;
  /** Destaca o card (ex.: Felice CRM, produto-foco). */
  destaque?: boolean;
  /** Imagem à esquerda do card (rota em /public). Sem imagem → fallback visual. */
  imagem?: string;
  /** Destaques/detalhes do produto, exibidos como lista no card. */
  detalhes?: string[];
};

export const PRODUTOS: Produto[] = [
  {
    num: '01',
    titulo: 'Masterclass',
    descricao:
      'Aulas avançadas para elevar autoridade e domínio clínico — do diagnóstico ao plano de tratamento de alta complexidade.',
    categoria: 'Curso',
    estado: 'em-breve',
    href: '#',
    cta: 'Em breve',
    detalhes: [
      'Casos clínicos reais comentados',
      'Protocolos passo a passo',
      'Acesso à comunidade Felice',
    ],
  },
  {
    num: '02',
    titulo: 'Zigomático',
    descricao:
      'Formação técnica completa em implantes zigomáticos, do básico ao avançado, com base científica e prática cirúrgica.',
    categoria: 'Curso',
    estado: 'disponivel',
    href: '/produtos/maestria-zigomatica',
    interno: true,
    cta: 'Acessar',
    detalhes: [
      'Do planejamento à instalação do implante',
      'Anatomia, técnica e manejo de complicações',
      'Reabilitação da maxila atrófica',
    ],
  },
  {
    num: '03',
    titulo: 'Mentoria',
    descricao:
      'Acompanhamento direto para escalar carreira e clínica, com método, metas claras e suporte a cada etapa.',
    categoria: 'Mentoria',
    estado: 'disponivel',
    href: '/produtos/mentoria-gestao-f4',
    interno: true,
    cta: 'Acessar',
    detalhes: [
      'Acompanhamento individual e direto',
      'Plano de crescimento personalizado',
      'Sessões ao vivo e suporte contínuo',
    ],
  },
  {
    num: '04',
    titulo: 'Gestão F4',
    descricao:
      'O sistema de gestão para dentistas: padronize processos, equipe e marketing para crescer com previsibilidade.',
    categoria: 'Curso',
    estado: 'em-breve',
    href: '#',
    cta: 'Em breve',
    detalhes: [
      'POPs e manuais operacionais por cargo',
      'Scripts de agendamento e atendimento',
      'Calendário e estratégia de marketing',
    ],
  },
  {
    num: '05',
    titulo: 'Gengiva',
    descricao:
      'Curso técnico de cirurgia e estética gengival, para resultados harmônicos e previsíveis no sorriso.',
    categoria: 'Curso',
    estado: 'em-breve',
    href: '#',
    cta: 'Em breve',
    detalhes: [
      'Cirurgia plástica periodontal',
      'Recobrimento radicular e aumento de coroa',
      'Previsibilidade estética',
    ],
  },
  {
    num: '06',
    titulo: 'Felice CRM',
    descricao:
      'O software que organiza pacientes, agenda, vendas e faturamento — a clínica inteira em um só lugar.',
    categoria: 'Software',
    estado: 'disponivel',
    href: '/crm',
    interno: true,
    cta: 'Conhecer',
    destaque: true,
    detalhes: [
      'Agenda, pacientes e funil de vendas',
      'Faturamento e indicadores da clínica',
      'Automação de follow-up e confirmações',
    ],
  },
];

/* ============================================================
   Materiais / Conteúdos gratuitos (scripts, planilhas, PDFs…)
   ⚠️ Validar com o cliente: títulos, formatos e os links de
   download/cadastro de cada material.
   ============================================================ */

export type Formato =
  | 'Script'
  | 'Planilha'
  | 'PDF'
  | 'Checklist'
  | 'Template'
  | 'Gestão'
  | 'Atendimento'
  | 'Comercial'
  | 'Marketing';

export type Material = {
  titulo: string;
  descricao: string;
  formato: Formato;
  /** Destino do download/cadastro. Use '#' enquanto não houver link. */
  href: string;
  /** true quando href é uma rota interna deste app (usa <Link>). */
  interno?: boolean;
  /** Texto do CTA. Default: "Baixar". */
  cta?: string;
  /** Disponível para download agora, ou ainda em produção. */
  disponivel?: boolean;
};

// Os 4 materiais do Kit Gestão F4. Todos levam para a página do Kit.
export const MATERIAIS: Material[] = [
  {
    titulo: 'POP — Procedimento Operacional Padrão',
    descricao:
      'O mapa estratégico e operacional da clínica: o Ecossistema de Excelência Clínica e os POPs de cada cargo.',
    formato: 'Gestão',
    href: '/produtos/kitgestaof4',
    interno: true,
    cta: 'Acessar',
    disponivel: true,
  },
  {
    titulo: 'Manual de Atendimento — Recepção',
    descricao:
      'A Arte de Receber: atendimento ético e humanizado na recepção, com scripts, FAQs e protocolos.',
    formato: 'Atendimento',
    href: '/produtos/kitgestaof4',
    interno: true,
    cta: 'Acessar',
    disponivel: true,
  },
  {
    titulo: 'Manual da CRC — Agendamento',
    descricao:
      'A Voz da Clínica: o guião tático para a chamada perfeita, gestão de objeções e a regra dos 5 minutos.',
    formato: 'Comercial',
    href: '/produtos/kitgestaof4',
    interno: true,
    cta: 'Acessar',
    disponivel: true,
  },
  {
    titulo: 'Guia Estratégico de Marketing',
    descricao:
      'Vídeos para Instagram em clínicas: pilares 40/40/20, calendário editorial, roteiros e o funil 5Ns.',
    formato: 'Marketing',
    href: '/produtos/kitgestaof4',
    interno: true,
    cta: 'Acessar',
    disponivel: true,
  },
];

export type Stat = { num: string; label: string };

// ⚠️ Números a confirmar com o cliente.
export const STATS: Stat[] = [
  { num: '+1.200', label: 'Dentistas impactados' },
  { num: '6', label: 'Produtos no ecossistema' },
  { num: '+10 anos', label: 'De prática clínica real' },
  { num: '100%', label: 'Feito por quem é da área' },
];
