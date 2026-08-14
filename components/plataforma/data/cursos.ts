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
  /** Gradiente do thumb (do → para). Fallback quando não há `imagem`. */
  thumb: [string, string];
  /** Foto do thumb (rota em /public). Onde o curso tem produto equivalente
   *  no hub, reusa a mesma imagem do card da home — sem duplicar arquivo.
   *  Sem imagem, o card cai no gradiente de `thumb`. */
  imagem?: string;
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
    imagem: '/images/card-masterclass-zigomatico.jpg',
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
    imagem: '/images/card-maestria-zigomatico.jpg',
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
    imagem: '/images/card-gestao-f4.jpg',
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
    // Par presencial do "CRC de Alta Performance" (pilar vendas): aquele cuida
    // do telefone/WhatsApp e do fechamento, este da experiência dentro da
    // clínica — por isso mora em Gestão, e não em Vendas.
    // Grade = seção "1. Conteúdo Programático" do plano de aula oficial.
    // ⚠️ Slugs de aula formam a rota /plataforma/cursos/[curso]/[aula]:
    // mudá-los depois zera o progresso já salvo do aluno.
    slug: 'recepcao-alta-performance',
    pilar: 'gestao',
    titulo: 'Recepção de Alta Performance',
    subtitulo: 'O atendimento Disney no balcão da clínica',
    descricao:
      'A formação da linha de frente presencial: receber, acolher e conduzir o paciente da porta até a cadeira, com rotina impecável e experiência que faz voltar.',
    nivel: 'Essencial',
    duracao: '4h 30min', // ⚠️ estimativa — confirmar com a gravação real
    instrutor: 'Dr. Sócrates Tavares',
    selo: 'novo',
    thumb: ['#3a2c0c', '#E8B447'],
    imagem: '/images/background-secretaria-vende.jpg',
    modulos: [
      {
        titulo: 'Fundamentos do atendimento Disney na recepção',
        aulas: [
          a('principios-disney', 'Princípios Disney: sorriso, contato visual e momentos mágicos', '14:20'),
          a('primeira-impressao', 'Primeira impressão e acolhimento personalizado', '12:40'),
          a('linguagem-corporal', 'Postura e linguagem corporal', '13:55'),
          a('sim-como-padrao', 'O "sim" como padrão', '11:30'),
          a('role-playing', 'Autoavaliação: role-playing para fixar as bases', '18:10'),
        ],
      },
      {
        titulo: 'Procedimentos operacionais da recepção',
        aulas: [
          a('tarefas-e-agenda', 'Tarefas da recepcionista e gestão de agenda', '16:45'),
          a('metodo-abc', 'Cadastro e atualização de dados: o método ABC', '12:15'),
          a('reduzir-no-show', 'Agendamento e queda do no-show', '15:30'),
          a('prontuarios', 'Prontuários e liberações para atendimento', '11:50'),
          a('marketing-sensorial', 'Marketing sensorial: os cinco sentidos', '14:05'),
        ],
      },
      {
        titulo: 'Comunicação e relacionamento com pacientes',
        aulas: [
          a('escuta-ativa', 'Escuta ativa e perguntas abertas: a técnica dos 3 Rs', '14:40'),
          a('sanduiche-de-valor', 'Explicar procedimentos e orçamentos: o sanduíche de valor', '16:20'),
          a('fidelizacao', 'Fidelização: follow-up pós-consulta e indicações', '13:10'),
          a('familias-e-idosos', 'Atendimento a famílias e idosos', '15:00'),
          a('whatsapp-da-clinica', 'WhatsApp e lembretes para engajamento', '13:35'),
        ],
      },
      {
        titulo: 'Excelência e melhoria contínua',
        aulas: [
          a('metodo-heard', 'Reclamações e "wow moments": o método H.E.A.R.D.', '14:15'),
          a('trabalho-em-equipe', 'Integração com dentistas e assistentes', '12:50'),
          a('indicadores', 'Indicadores de desempenho da recepção', '15:45'),
          a('simulacoes', 'Treinamento prático: simulações reais de cenários', '17:20'),
          a('plano-de-desenvolvimento', 'Plano pessoal de desenvolvimento', '11:40', 'pdf'),
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
    // Consolida os três antigos cursos do pilar (CRC, Fechamento de Planos e
    // Recuperação de Inativos) no produto que a home vende: "CRC de Alta
    // Performance" (/produtos/vendas-secretaria).
    // O slug fica como está: mudar quebraria o progresso já salvo do aluno.
    //
    // A grade abaixo é a REAL (14/08/2026): os 4 módulos × 5 aulas do
    // "Conteúdo Programático" do material oficial, os mesmos de
    // components/vendas-secretaria/content.ts. Antes eram 3 módulos e 9 aulas
    // aqui contra 5 módulos e 24 aulas na landing — o mesmo curso contado de
    // duas formas diferentes. Mexeu numa ponta, mexa na outra.
    // ⚠️ Alterou este arquivo? Suba o STORAGE_KEY do PlatformStore, senão
    // quem já visitou continua vendo o dataset velho do localStorage.
    slug: 'secretaria-que-vende',
    pilar: 'vendas',
    titulo: 'CRC de Alta Performance',
    subtitulo: 'Do primeiro "oi" ao tratamento fechado',
    descricao:
      'O treinamento comercial da recepção: sondar o lead, encher a agenda sem faltas, apresentar o orçamento e contornar a objeção até o tratamento fechado.',
    nivel: 'Essencial',
    duracao: '4h 20min',
    instrutor: 'Dr. Sócrates Tavares',
    selo: 'em-alta',
    thumb: ['#3a1f14', '#E8825A'],
    imagem: '/images/background-secretaria-vende.jpg',
    modulos: [
      {
        titulo: 'Sondagem e qualificação de leads',
        aulas: [
          a('perguntas-abertas', 'Perguntas abertas para mapear dores e desejos', '11:30'),
          a('identificar-necessidades', 'Identificação de necessidades: dor, estética e orçamento', '13:45'),
          a('paciente-ideal', 'Perfil do paciente ideal para tratamentos odontológicos', '10:20'),
          a('crm-rastreamento', 'Ferramentas de anotação e CRM para rastreamento', '12:40'),
          a('scripts-sondagem', 'Prática: scripts de sondagem com role-playing', '16:10', 'pdf'),
        ],
      },
      {
        titulo: 'Agendamento eficaz',
        aulas: [
          a('urgencia-controlada', 'Opções de horários com urgência controlada', '12:15'),
          a('agenda-erp', 'Integração com a agenda da clínica e ERP', '09:50'),
          a('ausencias-remarcacoes', 'Tratamento de ausências e remarcações preventivas', '13:20'),
          a('agendamento-multiplo', 'Agendamento múltiplo: pacotes de tratamento', '11:05'),
          a('metricas-no-show', 'Métricas de conversão: taxa de no-show reduzida', '14:30'),
        ],
      },
      {
        titulo: 'Fechamento de vendas e tratamentos',
        aulas: [
          a('tecnicas-fechamento', 'Técnicas de fechamento: assumir o sim e benefícios claros', '15:40'),
          a('orcamento-personalizado', 'Apresentação de orçamentos personalizados', '13:10'),
          a('financiamento-parcelamento', 'Financiamentos e parcelamentos como facilitadores', '11:25'),
          a('urgencia-etica', 'Criação de urgência ética: "limites de vagas"', '09:35'),
          a('role-playing-fechamento', 'Role-playing de fechamentos reais', '18:05'),
        ],
      },
      {
        titulo: 'Tratativa de objeções e follow-up',
        aulas: [
          a('objecoes-comuns', 'Objeções comuns: preço, medo e tempo', '12:50'),
          a('respostas-empaticas', 'Respostas empáticas e contra-argumentos de valor', '14:20'),
          a('follow-up-automatizado', 'Follow-up automatizado via WhatsApp e e-mail', '13:05'),
          a('kpis-fechamento', 'Análise de KPIs: taxa de fechamento e reativação', '15:30'),
          a('melhoria-continua', 'Melhoria contínua: feedback e ajustes nos scripts', '10:45'),
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
