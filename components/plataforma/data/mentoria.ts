import type { PilarSlug } from './pilares';

/* ============================================================
   Módulo MENTORIA (mock): encontros ao vivo, gravações, conteúdo
   exclusivo e comunidade. As datas dos encontros são relativas a
   "agora" (offsetMin) e calculadas no client para o countdown nunca
   ficar desatualizado.
   ============================================================ */

export type Mentor = { nome: string; papel: string; iniciais: string };

export const MENTORES: Mentor[] = [
  { nome: 'Dr. Sócrates Tavares', papel: 'Mentor-chefe · Clínica e Carreira', iniciais: 'ST' },
  { nome: 'Dra. Helena Martins', papel: 'Estética e Gestão Clínica', iniciais: 'HM' },
  { nome: 'Rafael Nunes', papel: 'Marketing e Aquisição', iniciais: 'RN' },
];

export type Encontro = {
  id: string;
  titulo: string;
  descricao: string;
  mentor: string;
  tema: string;
  pilar: PilarSlug;
  /** minutos a partir de agora (negativo = já começou/passou). */
  offsetMin: number;
  duracaoMin: number;
};

export const ENCONTROS: Encontro[] = [
  {
    id: 'hotseat-junho',
    titulo: 'Hot Seat: análise de casos ao vivo',
    descricao: 'Traga seu caso clínico e receba feedback direto do Dr. Sócrates na frente do grupo.',
    mentor: 'Dr. Sócrates Tavares',
    tema: 'Casos clínicos',
    pilar: 'clinica',
    offsetMin: -15, // começou há 15min → AO VIVO AGORA
    duracaoMin: 90,
  },
  {
    id: 'call-marketing',
    titulo: 'Call de Marketing: planejamento do mês',
    descricao: 'Montamos juntos o calendário editorial e revisamos os criativos da semana.',
    mentor: 'Rafael Nunes',
    tema: 'Conteúdo e tráfego',
    pilar: 'marketing',
    offsetMin: 60 * 26, // ~daqui a pouco mais de 1 dia
    duracaoMin: 60,
  },
  {
    id: 'mentoria-gestao',
    titulo: 'Mentoria de Gestão: equipe e processos',
    descricao: 'Como contratar, treinar e reter a equipe da clínica com POPs e indicadores.',
    mentor: 'Dra. Helena Martins',
    tema: 'Gestão de pessoas',
    pilar: 'gestao',
    offsetMin: 60 * 24 * 4, // daqui a 4 dias
    duracaoMin: 75,
  },
  {
    id: 'vendas-fechamento',
    titulo: 'Clínica de Vendas: role-play de fechamento',
    descricao: 'Treino prático de apresentação de planos com simulações e correção em tempo real.',
    mentor: 'Dr. Sócrates Tavares',
    tema: 'Fechamento',
    pilar: 'vendas',
    offsetMin: 60 * 24 * 8, // daqui a 8 dias
    duracaoMin: 60,
  },
];

export type Gravacao = {
  id: string;
  titulo: string;
  mentor: string;
  data: string;
  duracao: string;
  views: number;
  pilar: PilarSlug;
};

export const GRAVACOES: Gravacao[] = [
  {
    id: 'g-reabilitacao',
    titulo: 'Reabilitação total: do plano à entrega',
    mentor: 'Dr. Sócrates Tavares',
    data: '12 jun',
    duracao: '1h 24min',
    views: 312,
    pilar: 'clinica',
  },
  {
    id: 'g-financeiro',
    titulo: 'Financeiro: precificação sem medo',
    mentor: 'Dra. Helena Martins',
    data: '05 jun',
    duracao: '58min',
    views: 268,
    pilar: 'gestao',
  },
  {
    id: 'g-reels',
    titulo: 'Reels que viram paciente',
    mentor: 'Rafael Nunes',
    data: '29 mai',
    duracao: '1h 06min',
    views: 401,
    pilar: 'marketing',
  },
  {
    id: 'g-objecoes',
    titulo: 'Quebrando as 7 objeções mais comuns',
    mentor: 'Dr. Sócrates Tavares',
    data: '22 mai',
    duracao: '49min',
    views: 357,
    pilar: 'vendas',
  },
];

export type Exclusivo = {
  id: string;
  titulo: string;
  descricao: string;
  duracao: string;
  pilar: PilarSlug;
};

export const EXCLUSIVOS: Exclusivo[] = [
  {
    id: 'masterclass-carreira',
    titulo: 'Masterclass: construindo uma carreira de autoridade',
    descricao: 'Posicionamento, especialização e reputação para se tornar referência na sua cidade.',
    duracao: '1h 12min',
    pilar: 'marketing',
  },
  {
    id: 'biblioteca-casos',
    titulo: 'Biblioteca de casos comentados',
    descricao: 'Acervo de casos reais comentados passo a passo, só para membros da mentoria.',
    duracao: 'Acervo',
    pilar: 'clinica',
  },
  {
    id: 'templates-exclusivos',
    titulo: 'Templates exclusivos de gestão',
    descricao: 'Planilhas, contratos e fluxos prontos para a clínica, atualizados todo mês.',
    duracao: 'Pacote',
    pilar: 'gestao',
  },
];

export type Post = {
  id: string;
  autor: string;
  iniciais: string;
  tempo: string;
  categoria: string;
  texto: string;
  curtidas: number;
  respostas: number;
  fixado?: boolean;
};

export const POSTS: Post[] = [
  {
    id: 'p1',
    autor: 'Dra. Camila Reis',
    iniciais: 'CR',
    tempo: 'há 2h',
    categoria: 'Clínica',
    texto:
      'Apliquei o protocolo de carga imediata da Masterclass num caso de maxila atrófica e o resultado ficou excelente! Alguém tem dica de acompanhamento pós-operatório?',
    curtidas: 28,
    respostas: 12,
    fixado: true,
  },
  {
    id: 'p2',
    autor: 'Dr. Bruno Lima',
    iniciais: 'BL',
    tempo: 'há 5h',
    categoria: 'Vendas',
    texto:
      'A "regra dos 5 minutos" do curso de CRC reduziu minhas faltas em quase 30% esse mês. Recomendo demais para quem ainda não testou.',
    curtidas: 41,
    respostas: 9,
  },
  {
    id: 'p3',
    autor: 'Dra. Paula Souza',
    iniciais: 'PS',
    tempo: 'ontem',
    categoria: 'Marketing',
    texto:
      'Montei meu primeiro calendário editorial com a proporção 40/40/20. Em uma semana já senti diferença no engajamento. Bora trocar ideias?',
    curtidas: 33,
    respostas: 15,
  },
  {
    id: 'p4',
    autor: 'Dr. André Mota',
    iniciais: 'AM',
    tempo: 'ontem',
    categoria: 'Gestão',
    texto:
      'Implantei os POPs por cargo e a equipe finalmente parou de me perguntar tudo. A clínica roda sozinha quando viajo. Valeu, Felice!',
    curtidas: 52,
    respostas: 7,
  },
];

export const CATEGORIAS_COMUNIDADE = ['Todos', 'Clínica', 'Gestão', 'Marketing', 'Vendas'] as const;

export const getEncontro = (id: string) => ENCONTROS.find((e) => e.id === id);

/** Deriva o status do encontro a partir do offset e da duração. */
export function statusEncontro(e: Encontro): 'ao-vivo' | 'agendado' | 'encerrado' {
  if (e.offsetMin <= 0 && e.offsetMin > -e.duracaoMin) return 'ao-vivo';
  if (e.offsetMin > 0) return 'agendado';
  return 'encerrado';
}
