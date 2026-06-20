import type { PilarSlug } from './pilares';

/* ============================================================
   Catálogo de CURSOS (mock). Cada curso pertence a um pilar e
   tem módulos → aulas. O player usa `videoUrl` como placeholder.
   Os ids de aula (`slug`) formam a rota /plataforma/cursos/[curso]/[aula].
   ============================================================ */

export type Nivel = 'Iniciante' | 'Intermediário' | 'Avançado' | 'Essencial';

export type Aula = {
  slug: string;
  titulo: string;
  duracao: string; // ex: "12:40"
  tipo?: 'video' | 'pdf' | 'quiz';
  descricao?: string;
};

export type Modulo = {
  titulo: string;
  aulas: Aula[];
};

export type Curso = {
  slug: string;
  pilar: PilarSlug;
  titulo: string;
  subtitulo: string;
  descricao: string;
  nivel: Nivel;
  duracao: string; // total, ex: "3h 20min"
  instrutor: string;
  selo?: 'novo' | 'em-alta' | null;
  /** Gradiente do thumb (do → para). */
  thumb: [string, string];
  modulos: Modulo[];
};

/* helpers de aula reutilizáveis para encurtar o mock */
const a = (slug: string, titulo: string, duracao: string, tipo: Aula['tipo'] = 'video'): Aula => ({
  slug,
  titulo,
  duracao,
  tipo,
});

export const CURSOS: Curso[] = [
  /* ---------------- CLÍNICA ---------------- */
  {
    slug: 'masterclass-implantes',
    pilar: 'clinica',
    titulo: 'Masterclass de Implantes',
    subtitulo: 'Do planejamento à reabilitação total',
    descricao:
      'Protocolo completo de implantodontia: diagnóstico, planejamento digital, técnica cirúrgica e prótese sobre implante com previsibilidade.',
    nivel: 'Avançado',
    duracao: '4h 10min',
    instrutor: 'Dr. Sócrates Tavares',
    selo: 'em-alta',
    thumb: ['#0f3b35', '#5BC6B8'],
    modulos: [
      {
        titulo: 'Fundamentos e planejamento',
        aulas: [
          a('boas-vindas', 'Boas-vindas e visão geral', '06:12'),
          a('diagnostico', 'Diagnóstico e seleção do caso', '18:30'),
          a('planejamento-digital', 'Planejamento digital guiado', '22:05'),
        ],
      },
      {
        titulo: 'Técnica cirúrgica',
        aulas: [
          a('tempo-cirurgico', 'Tempo cirúrgico passo a passo', '27:48'),
          a('enxertos', 'Enxertos e manejo do tecido', '19:14'),
          a('complicacoes', 'Prevenção de complicações', '15:02'),
          a('avaliacao-final', 'Avaliação do módulo', '08:00', 'quiz'),
        ],
      },
    ],
  },
  {
    slug: 'zigomatico-do-zero',
    pilar: 'clinica',
    titulo: 'Zigomático do Zero ao Avançado',
    subtitulo: 'Reabilitação da maxila atrófica',
    descricao:
      'Formação técnica em implantes zigomáticos: anatomia, indicações, técnica e carga imediata para os casos mais desafiadores.',
    nivel: 'Avançado',
    duracao: '3h 35min',
    instrutor: 'Dr. Sócrates Tavares',
    selo: 'novo',
    thumb: ['#12302c', '#3ea597'],
    modulos: [
      {
        titulo: 'Bases anatômicas',
        aulas: [
          a('anatomia', 'Anatomia aplicada do zigoma', '16:20'),
          a('indicacoes', 'Indicações e contraindicações', '13:55'),
        ],
      },
      {
        titulo: 'Execução',
        aulas: [
          a('tecnica', 'Técnica cirúrgica zigomática', '29:10'),
          a('carga-imediata', 'Carga imediata e prótese', '21:40'),
        ],
      },
    ],
  },
  {
    slug: 'estetica-gengival',
    pilar: 'clinica',
    titulo: 'Estética Gengival',
    subtitulo: 'Cirurgia e harmonização do sorriso',
    descricao: 'Técnicas de cirurgia e estética gengival para desenhar sorrisos previsíveis e naturais.',
    nivel: 'Intermediário',
    duracao: '2h 50min',
    instrutor: 'Dra. Helena Martins',
    thumb: ['#143a34', '#67d3c4'],
    modulos: [
      {
        titulo: 'Princípios',
        aulas: [
          a('estetica-rosa', 'A estética rosa do sorriso', '14:10'),
          a('planejamento-gengival', 'Planejamento do desenho gengival', '17:25'),
          a('tecnicas', 'Técnicas cirúrgicas essenciais', '20:30'),
        ],
      },
    ],
  },

  /* ---------------- GESTÃO ---------------- */
  {
    slug: 'sistema-gestao-f4',
    pilar: 'gestao',
    titulo: 'Sistema de Gestão F4',
    subtitulo: 'POPs, scripts e calendário de marketing',
    descricao:
      'O método de gestão completo para clínicas: padronize a operação, organize a equipe e crie previsibilidade. Acompanha o Kit Gestão F4.',
    nivel: 'Essencial',
    duracao: '3h 05min',
    instrutor: 'Dr. Sócrates Tavares',
    selo: 'em-alta',
    thumb: ['#3a2c0c', '#E8B447'],
    modulos: [
      {
        titulo: 'A máquina de escalabilidade',
        aulas: [
          a('ecossistema', 'O ecossistema de excelência clínica', '15:40'),
          a('linha-de-frente', 'Linha de frente: acolhimento e conversão', '18:12'),
          a('motor-clinico', 'Motor clínico: precisão e biossegurança', '16:55'),
        ],
      },
      {
        titulo: 'Implementação',
        aulas: [
          a('pops-por-cargo', 'POPs por cargo na prática', '21:30'),
          a('kit-f4', 'Aplicando o Kit Gestão F4', '12:00', 'pdf'),
        ],
      },
    ],
  },
  {
    slug: 'pops-clinica',
    pilar: 'gestao',
    titulo: 'POPs: Padronize sua Clínica',
    subtitulo: 'Procedimentos que organizam a rotina',
    descricao: 'Crie procedimentos operacionais padrão para cada cargo e elimine a dependência de pessoas.',
    nivel: 'Iniciante',
    duracao: '1h 55min',
    instrutor: 'Equipe Felice',
    thumb: ['#2f2710', '#d6a93f'],
    modulos: [
      {
        titulo: 'Construindo POPs',
        aulas: [
          a('o-que-e-pop', 'O que é (e o que não é) um POP', '09:50'),
          a('mapeando-rotinas', 'Mapeando as rotinas da clínica', '14:20'),
          a('modelos', 'Modelos prontos para adaptar', '11:05', 'pdf'),
        ],
      },
    ],
  },
  {
    slug: 'financeiro-descomplicado',
    pilar: 'gestao',
    titulo: 'Financeiro Descomplicado',
    subtitulo: 'Fluxo de caixa e precificação',
    descricao: 'Controle entradas e saídas, precifique procedimentos e tome decisões com base em números.',
    nivel: 'Intermediário',
    duracao: '2h 20min',
    instrutor: 'Equipe Felice',
    selo: 'novo',
    thumb: ['#33290f', '#f0c969'],
    modulos: [
      {
        titulo: 'Caixa sob controle',
        aulas: [
          a('fluxo-de-caixa', 'Montando o fluxo de caixa', '16:40'),
          a('precificacao', 'Como precificar tratamentos', '19:15'),
          a('indicadores', 'Indicadores que importam', '13:30'),
        ],
      },
    ],
  },

  /* ---------------- MARKETING ---------------- */
  {
    slug: 'instagram-para-clinicas',
    pilar: 'marketing',
    titulo: 'Instagram para Clínicas',
    subtitulo: 'Conteúdo que atrai paciente',
    descricao:
      'A estratégia 40/40/20 de conexão, autoridade e conversão para crescer no Instagram com ética.',
    nivel: 'Iniciante',
    duracao: '2h 35min',
    instrutor: 'Equipe Felice',
    selo: 'em-alta',
    thumb: ['#2a1c3a', '#B98AE6'],
    modulos: [
      {
        titulo: 'Estratégia de conteúdo',
        aulas: [
          a('proporcao', 'A proporção 40/40/20', '12:45'),
          a('calendario', 'Calendário editorial na prática', '17:20'),
          a('anatomia-video', 'Anatomia do vídeo eficaz', '14:50'),
        ],
      },
      {
        titulo: 'Produção',
        aulas: [
          a('roteiros', 'Fórmulas de roteiro que prendem', '18:05'),
          a('gravacao-em-lote', 'Gravação em lote sem estresse', '10:30'),
        ],
      },
    ],
  },
  {
    slug: 'conteudo-autoridade',
    pilar: 'marketing',
    titulo: 'Conteúdo que Constrói Autoridade',
    subtitulo: 'Storytelling ético para a saúde',
    descricao: 'Use storytelling e prova para se tornar referência sem prometer resultados.',
    nivel: 'Intermediário',
    duracao: '1h 40min',
    instrutor: 'Equipe Felice',
    thumb: ['#291a37', '#c79ae8'],
    modulos: [
      {
        titulo: 'Narrativa',
        aulas: [
          a('tres-atos', 'A jornada em 3 atos', '13:10'),
          a('prova', 'Construindo prova e confiança', '15:25'),
        ],
      },
    ],
  },
  {
    slug: 'trafego-pago-saude',
    pilar: 'marketing',
    titulo: 'Tráfego Pago na Saúde',
    subtitulo: 'Funil 5Ns e anúncios que convertem',
    descricao: 'Estruture campanhas pelo funil 5Ns respeitando as regras de publicidade da área da saúde.',
    nivel: 'Avançado',
    duracao: '2h 15min',
    instrutor: 'Equipe Felice',
    selo: 'novo',
    thumb: ['#221530', '#a87ad9'],
    modulos: [
      {
        titulo: 'Funil e campanhas',
        aulas: [
          a('funil-5n', 'O funil 5Ns explicado', '16:00'),
          a('estrutura-campanha', 'Estrutura de campanha', '18:40'),
          a('metricas', 'Métricas e otimização', '14:15'),
        ],
      },
    ],
  },

  /* ---------------- VENDAS ---------------- */
  {
    slug: 'crc-a-voz-da-clinica',
    pilar: 'vendas',
    titulo: 'CRC: A Voz da Clínica',
    subtitulo: 'Agendamento que reduz faltas',
    descricao:
      'O guião tático da Central de Relacionamento: a chamada perfeita em 5 fases para agendar e confirmar.',
    nivel: 'Iniciante',
    duracao: '2h 00min',
    instrutor: 'Equipe Felice',
    selo: 'em-alta',
    thumb: ['#3a1f14', '#E8825A'],
    modulos: [
      {
        titulo: 'A chamada perfeita',
        aulas: [
          a('primeiro-contato', 'O peso do primeiro contato', '11:30'),
          a('cinco-fases', 'As 5 fases da chamada', '19:50'),
          a('regra-5-min', 'A regra dos 5 minutos', '09:40'),
          a('objecoes', 'Gestão de objeções', '15:20'),
        ],
      },
    ],
  },
  {
    slug: 'fechamento-de-planos',
    pilar: 'vendas',
    titulo: 'Fechamento de Planos de Tratamento',
    subtitulo: 'Apresentação que converte',
    descricao: 'Conduza a apresentação do plano com clareza e ética para aumentar a aceitação.',
    nivel: 'Intermediário',
    duracao: '1h 50min',
    instrutor: 'Dr. Sócrates Tavares',
    thumb: ['#341c12', '#ef9170'],
    modulos: [
      {
        titulo: 'A apresentação',
        aulas: [
          a('diagnostico-vendas', 'Do diagnóstico à proposta', '14:05'),
          a('ancoragem', 'Ancoragem e valor percebido', '16:35'),
          a('conducao', 'Condução do fechamento', '13:20'),
        ],
      },
    ],
  },
  {
    slug: 'recuperacao-de-pacientes',
    pilar: 'vendas',
    titulo: 'Recuperação de Pacientes Inativos',
    subtitulo: 'Reative a base e fature mais',
    descricao: 'Campanhas e scripts para trazer de volta pacientes que sumiram da agenda.',
    nivel: 'Intermediário',
    duracao: '1h 25min',
    instrutor: 'Equipe Felice',
    selo: 'novo',
    thumb: ['#2f1810', '#e07a55'],
    modulos: [
      {
        titulo: 'Reativação',
        aulas: [
          a('segmentando', 'Segmentando a base inativa', '12:15'),
          a('scripts-reativacao', 'Scripts de reativação', '13:40', 'pdf'),
        ],
      },
    ],
  },
];

/* ---------------- derivados / helpers ---------------- */

export const getCurso = (slug: string) => CURSOS.find((c) => c.slug === slug);

export const cursosByPilar = (pilar: PilarSlug) => CURSOS.filter((c) => c.pilar === pilar);

export const aulasDoCurso = (curso: Curso): Aula[] => curso.modulos.flatMap((m) => m.aulas);

export const totalAulas = (curso: Curso) => aulasDoCurso(curso).length;

export const getAula = (curso: Curso, aulaSlug: string) =>
  aulasDoCurso(curso).find((au) => au.slug === aulaSlug);

/** id global de uma aula, usado como chave de progresso no localStorage. */
export const aulaKey = (cursoSlug: string, aulaSlug: string) => `${cursoSlug}/${aulaSlug}`;
