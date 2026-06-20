import type { PilarSlug } from './pilares';
import type { IconName } from '../icons';

/* ============================================================
   Biblioteca de MATERIAIS (mock). O Kit Gestão F4 é o item-âncora
   e aponta para o sistema interativo já existente (/gestao/kit-f4).
   Os demais usam um leitor/detalhe genérico em /plataforma/materiais/[slug].
   ============================================================ */

export type Formato = 'Kit' | 'Script' | 'Planilha' | 'PDF' | 'Checklist' | 'Template' | 'Ebook';

export const FORMATO_ICON: Record<Formato, IconName> = {
  Kit: 'sparkles',
  Script: 'message-square',
  Planilha: 'table',
  PDF: 'file-text',
  Checklist: 'list-checks',
  Template: 'layout-template',
  Ebook: 'ebook',
};

export type MaterialItem = {
  slug: string;
  titulo: string;
  descricao: string;
  formato: Formato;
  pilar: PilarSlug;
  tamanho?: string;
  selo?: 'novo' | null;
  /** Destino. Kit F4 → rota interna existente. */
  href?: string;
  interno?: boolean;
  destaque?: boolean;
  /** Conteúdo do leitor genérico (bullets) quando não há href externo. */
  conteudo?: string[];
};

export const MATERIAIS: MaterialItem[] = [
  {
    slug: 'kit-gestao-f4',
    titulo: 'Kit Gestão F4',
    descricao:
      'Os 4 documentos de gestão — POP, Atendimento, CRC e Marketing — vivos e interativos, com busca, checklists e scripts copiáveis.',
    formato: 'Kit',
    pilar: 'gestao',
    tamanho: '4 documentos',
    selo: 'novo',
    href: '/gestao/kit-f4',
    interno: true,
    destaque: true,
  },
  {
    slug: 'scripts-agendamento',
    titulo: 'Scripts de agendamento',
    descricao: 'Roteiros prontos de WhatsApp e telefone para marcar, confirmar e reduzir faltas.',
    formato: 'Script',
    pilar: 'vendas',
    tamanho: '12 scripts',
    conteudo: [
      'Primeiro contato e qualificação',
      'Confirmação 24h antes (regra dos 5 minutos)',
      'Reagendamento sem perder o paciente',
      'Recuperação de falta no mesmo dia',
    ],
  },
  {
    slug: 'planilha-fluxo-caixa',
    titulo: 'Planilha de fluxo de caixa',
    descricao: 'Controle de entradas, saídas e faturamento da clínica, mês a mês.',
    formato: 'Planilha',
    pilar: 'gestao',
    tamanho: 'XLSX · 4 abas',
    conteudo: [
      'Lançamentos diários automatizados',
      'Resumo mensal e anual',
      'Indicadores de margem e ticket médio',
      'Projeção de caixa',
    ],
  },
  {
    slug: 'guia-pops',
    titulo: 'Guia de POPs da clínica',
    descricao: 'Procedimentos operacionais padrão para organizar a rotina de cada cargo.',
    formato: 'PDF',
    pilar: 'gestao',
    tamanho: 'PDF · 28 págs',
    conteudo: [
      'POP de Recepção e CRC',
      'POP de Biossegurança (ASB/TSB)',
      'POP de Abertura e Fechamento',
      'Modelo editável para personalizar',
    ],
  },
  {
    slug: 'checklist-primeira-consulta',
    titulo: 'Checklist de primeira consulta',
    descricao: 'Passo a passo para padronizar o atendimento e elevar a conversão de planos.',
    formato: 'Checklist',
    pilar: 'vendas',
    tamanho: '1 página',
    selo: 'novo',
    conteudo: [
      'Pré-atendimento e acolhimento',
      'Anamnese e escuta ativa',
      'Apresentação do diagnóstico',
      'Proposta e próximos passos',
    ],
  },
  {
    slug: 'calendario-editorial',
    titulo: 'Calendário editorial (template)',
    descricao: 'Modelo de calendário de Stories e Feed na proporção 40/40/20, pronto para preencher.',
    formato: 'Template',
    pilar: 'marketing',
    tamanho: 'Notion · Sheets',
    conteudo: [
      'Grade semanal de Stories',
      'Calendário mensal do feed (4 semanas)',
      'Banco de ganchos por especialidade',
      'Checklist de produção em lote',
    ],
  },
  {
    slug: 'ebook-instagram-clinicas',
    titulo: 'E-book: Instagram para clínicas',
    descricao: 'Guia completo de conteúdo para atrair pacientes com ética e autoridade.',
    formato: 'Ebook',
    pilar: 'marketing',
    tamanho: 'PDF · 42 págs',
    conteudo: [
      'Os 3 pilares de conteúdo',
      'Anatomia do vídeo eficaz',
      'Storytelling em 3 atos',
      'Erros que derrubam o alcance',
    ],
  },
  {
    slug: 'banco-objecoes',
    titulo: 'Banco de objeções',
    descricao: 'Respostas prontas e éticas para as objeções mais comuns no fechamento de planos.',
    formato: 'Script',
    pilar: 'vendas',
    tamanho: '20 objeções',
    conteudo: [
      '"Está caro" — ancoragem de valor',
      '"Vou pensar" — condução do próximo passo',
      '"Preciso falar com alguém"',
      '"Achei em outro lugar mais barato"',
    ],
  },
];

export const FORMATOS: ('Todos' | Formato)[] = [
  'Todos',
  'Kit',
  'Script',
  'Planilha',
  'PDF',
  'Checklist',
  'Template',
  'Ebook',
];

export const getMaterial = (slug: string) => MATERIAIS.find((m) => m.slug === slug);
