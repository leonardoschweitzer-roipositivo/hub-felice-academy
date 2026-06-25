import type { IconName } from '../icons';

/* ============================================================
   FELICE ACADEMY · MÓDULO VENDAS (mini-CRM)
   Pipeline (Kanban) · Leads · Clientes · Atendimento (WhatsApp) ·
   Automação. Tudo MOCK por enquanto — alimenta o PlatformStore e
   é persistido em localStorage. O modelo de Atendimento/Automação
   espelha a WhatsApp Cloud API (Meta): templates HSM, janela de 24h
   e status de mensagem — para a troca futura pela API Oficial ser
   indolor (trocar só a camada lib/whatsapp, sem mexer nas telas).
   ⚠️ Datas/horas são strings ISO fixas (sem Date.now no seed) para
   build determinístico; "agora" de referência ≈ 2026-06-25.
   ============================================================ */

/* ---------------- Pipeline / etapas ---------------- */

export type EtapaPipeline =
  | 'novo'
  | 'contato'
  | 'qualificado'
  | 'proposta'
  | 'negociacao'
  | 'ganho'
  | 'perdido';

export type Etapa = {
  slug: EtapaPipeline;
  nome: string;
  /** Acento de cor da coluna. */
  cor: string;
  /** Etapa de fechamento (não conta como "em aberto" no pipeline). */
  terminal?: boolean;
};

export const ETAPAS: Etapa[] = [
  { slug: 'novo', nome: 'Novo', cor: '#7C9CF0' },
  { slug: 'contato', nome: 'Em contato', cor: '#5BC6B8' },
  { slug: 'qualificado', nome: 'Qualificado', cor: '#E8B447' },
  { slug: 'proposta', nome: 'Proposta enviada', cor: '#E8825A' },
  { slug: 'negociacao', nome: 'Negociação', cor: '#D9737C' },
  { slug: 'ganho', nome: 'Ganho', cor: '#57C97F', terminal: true },
  { slug: 'perdido', nome: 'Perdido', cor: '#76747B', terminal: true },
];

export const ETAPA_MAP: Record<EtapaPipeline, Etapa> = ETAPAS.reduce(
  (acc, e) => ({ ...acc, [e.slug]: e }),
  {} as Record<EtapaPipeline, Etapa>,
);

/* ---------------- Leads ---------------- */

export type Temperatura = 'frio' | 'morno' | 'quente';

export type OrigemLead =
  | 'instagram'
  | 'meta-ads'
  | 'google'
  | 'indicacao'
  | 'organico'
  | 'whatsapp'
  | 'evento';

export const ORIGENS: Record<OrigemLead, string> = {
  instagram: 'Instagram',
  'meta-ads': 'Meta Ads',
  google: 'Google',
  indicacao: 'Indicação',
  organico: 'Orgânico',
  whatsapp: 'WhatsApp',
  evento: 'Evento',
};

export const TEMPERATURAS: Record<Temperatura, { nome: string; cor: string }> = {
  frio: { nome: 'Frio', cor: '#7C9CF0' },
  morno: { nome: 'Morno', cor: '#E8B447' },
  quente: { nome: 'Quente', cor: '#E8825A' },
};

export type Lead = {
  id: string;
  nome: string;
  telefone: string;
  email?: string;
  origem: OrigemLead;
  /** Produto/curso de interesse. */
  interesse: string;
  etapa: EtapaPipeline;
  temperatura: Temperatura;
  /** Valor estimado da oportunidade (R$). */
  valorEstimado: number;
  responsavel: string;
  /** ISO date. */
  criadoEm: string;
  /** ISO date — última interação registrada. */
  ultimaInteracao: string;
  tags: string[];
  observacoes?: string;
};

export const LEADS: Lead[] = [
  {
    id: 'lead-001',
    nome: 'Dra. Marina Albuquerque',
    telefone: '+55 11 98123-4567',
    email: 'marina.albuquerque@gmail.com',
    origem: 'meta-ads',
    interesse: 'Mentoria Felice',
    etapa: 'novo',
    temperatura: 'quente',
    valorEstimado: 4800,
    responsavel: 'Helena Costa',
    criadoEm: '2026-06-24',
    ultimaInteracao: '2026-06-24',
    tags: ['mentoria', 'alta-prioridade'],
    observacoes: 'Veio do anúncio da masterclass. Pediu valores da mentoria.',
  },
  {
    id: 'lead-002',
    nome: 'Dr. Rafael Tavares',
    telefone: '+55 21 99654-1230',
    email: 'rafael.tavares@clinicaortodontia.com',
    origem: 'instagram',
    interesse: 'Masterclass Zigomático',
    etapa: 'novo',
    temperatura: 'morno',
    valorEstimado: 1597,
    responsavel: 'Helena Costa',
    criadoEm: '2026-06-23',
    ultimaInteracao: '2026-06-24',
    tags: ['masterclass'],
  },
  {
    id: 'lead-003',
    nome: 'Dra. Camila Nogueira',
    telefone: '+55 31 98777-2200',
    email: 'camila.nog@outlook.com',
    origem: 'indicacao',
    interesse: 'Maestria Zigomática',
    etapa: 'contato',
    temperatura: 'quente',
    valorEstimado: 1595,
    responsavel: 'Bruno Lima',
    criadoEm: '2026-06-20',
    ultimaInteracao: '2026-06-24',
    tags: ['curso', 'indicada-aluno'],
    observacoes: 'Indicada pela Dra. Juliene. Já assistiu 2 aulas gratuitas.',
  },
  {
    id: 'lead-004',
    nome: 'Dr. Eduardo Pacheco',
    telefone: '+55 41 99888-0101',
    origem: 'whatsapp',
    interesse: 'Kit Gestão F4',
    etapa: 'contato',
    temperatura: 'morno',
    valorEstimado: 997,
    responsavel: 'Helena Costa',
    criadoEm: '2026-06-19',
    ultimaInteracao: '2026-06-23',
    tags: ['gestao'],
  },
  {
    id: 'lead-005',
    nome: 'Dra. Patrícia Fontes',
    telefone: '+55 11 97456-8899',
    email: 'patricia.fontes@implante.com.br',
    origem: 'meta-ads',
    interesse: 'Mentoria Felice',
    etapa: 'qualificado',
    temperatura: 'quente',
    valorEstimado: 4800,
    responsavel: 'Bruno Lima',
    criadoEm: '2026-06-15',
    ultimaInteracao: '2026-06-22',
    tags: ['mentoria', 'decisor'],
    observacoes: 'Tem clínica com 4 cadeiras. Quer estruturar comercial.',
  },
  {
    id: 'lead-006',
    nome: 'Dr. Henrique Salles',
    telefone: '+55 51 98321-4567',
    email: 'henrique.salles@gmail.com',
    origem: 'google',
    interesse: 'Maestria Zigomática',
    etapa: 'qualificado',
    temperatura: 'morno',
    valorEstimado: 1595,
    responsavel: 'Helena Costa',
    criadoEm: '2026-06-14',
    ultimaInteracao: '2026-06-21',
    tags: ['curso'],
  },
  {
    id: 'lead-007',
    nome: 'Dra. Letícia Barros',
    telefone: '+55 62 99234-7788',
    email: 'leticia.barros@odontocenter.com',
    origem: 'evento',
    interesse: 'Mentoria Felice',
    etapa: 'proposta',
    temperatura: 'quente',
    valorEstimado: 4800,
    responsavel: 'Bruno Lima',
    criadoEm: '2026-06-10',
    ultimaInteracao: '2026-06-23',
    tags: ['mentoria', 'evento-sp'],
    observacoes: 'Conheceu no congresso. Proposta de 12x enviada dia 23.',
  },
  {
    id: 'lead-008',
    nome: 'Dr. Marcelo Reis',
    telefone: '+55 11 98555-3322',
    email: 'marcelo.reis@institutoreis.com',
    origem: 'indicacao',
    interesse: 'Maestria Zigomática',
    etapa: 'proposta',
    temperatura: 'morno',
    valorEstimado: 1595,
    responsavel: 'Helena Costa',
    criadoEm: '2026-06-09',
    ultimaInteracao: '2026-06-20',
    tags: ['curso'],
  },
  {
    id: 'lead-009',
    nome: 'Dra. Fernanda Quintela',
    telefone: '+55 85 99111-4545',
    email: 'fernanda.q@sorrisoreal.com.br',
    origem: 'meta-ads',
    interesse: 'Mentoria Felice',
    etapa: 'negociacao',
    temperatura: 'quente',
    valorEstimado: 4800,
    responsavel: 'Bruno Lima',
    criadoEm: '2026-06-05',
    ultimaInteracao: '2026-06-24',
    tags: ['mentoria', 'fechamento'],
    observacoes: 'Negociando parcelamento em 15x. Decisão até sexta.',
  },
  {
    id: 'lead-010',
    nome: 'Dr. Thiago Moraes',
    telefone: '+55 47 98888-1212',
    email: 'thiago.moraes@gmail.com',
    origem: 'organico',
    interesse: 'Kit Gestão F4',
    etapa: 'negociacao',
    temperatura: 'morno',
    valorEstimado: 997,
    responsavel: 'Helena Costa',
    criadoEm: '2026-06-08',
    ultimaInteracao: '2026-06-22',
    tags: ['gestao'],
  },
  {
    id: 'lead-011',
    nome: 'Dra. Juliana Castro',
    telefone: '+55 11 97333-9090',
    email: 'juliana.castro@odonto.com',
    origem: 'instagram',
    interesse: 'Masterclass Zigomático',
    etapa: 'ganho',
    temperatura: 'quente',
    valorEstimado: 1597,
    responsavel: 'Bruno Lima',
    criadoEm: '2026-05-28',
    ultimaInteracao: '2026-06-18',
    tags: ['masterclass', 'convertido'],
    observacoes: 'Comprou a masterclass. Migrar para nurturing de mentoria.',
  },
  {
    id: 'lead-012',
    nome: 'Dr. André Vasconcelos',
    telefone: '+55 19 99777-6543',
    email: 'andre.vasc@implantesp.com',
    origem: 'indicacao',
    interesse: 'Maestria Zigomática',
    etapa: 'ganho',
    temperatura: 'quente',
    valorEstimado: 1595,
    responsavel: 'Helena Costa',
    criadoEm: '2026-05-25',
    ultimaInteracao: '2026-06-12',
    tags: ['curso', 'convertido'],
  },
  {
    id: 'lead-013',
    nome: 'Dra. Sônia Medeiros',
    telefone: '+55 71 98444-3210',
    email: 'sonia.medeiros@gmail.com',
    origem: 'meta-ads',
    interesse: 'Mentoria Felice',
    etapa: 'perdido',
    temperatura: 'frio',
    valorEstimado: 4800,
    responsavel: 'Bruno Lima',
    criadoEm: '2026-05-20',
    ultimaInteracao: '2026-06-02',
    tags: ['mentoria', 'sem-budget'],
    observacoes: 'Achou caro no momento. Recontatar em 90 dias.',
  },
  {
    id: 'lead-014',
    nome: 'Dr. Gustavo Pinheiro',
    telefone: '+55 11 96222-1188',
    origem: 'google',
    interesse: 'Kit Gestão F4',
    etapa: 'novo',
    temperatura: 'frio',
    valorEstimado: 997,
    responsavel: 'Helena Costa',
    criadoEm: '2026-06-25',
    ultimaInteracao: '2026-06-25',
    tags: ['gestao'],
  },
  {
    id: 'lead-015',
    nome: 'Dra. Beatriz Lemos',
    telefone: '+55 31 99555-7676',
    email: 'beatriz.lemos@odontolemos.com',
    origem: 'organico',
    interesse: 'Maestria Zigomática',
    etapa: 'contato',
    temperatura: 'morno',
    valorEstimado: 1595,
    responsavel: 'Bruno Lima',
    criadoEm: '2026-06-22',
    ultimaInteracao: '2026-06-24',
    tags: ['curso'],
  },
  {
    id: 'lead-016',
    nome: 'Dr. Vinícius Andrade',
    telefone: '+55 11 98000-5555',
    email: 'vinicius.andrade@gmail.com',
    origem: 'evento',
    interesse: 'Mentoria Felice',
    etapa: 'qualificado',
    temperatura: 'quente',
    valorEstimado: 4800,
    responsavel: 'Helena Costa',
    criadoEm: '2026-06-12',
    ultimaInteracao: '2026-06-23',
    tags: ['mentoria', 'evento-sp'],
  },
  {
    id: 'lead-017',
    nome: 'Dra. Renata Sampaio',
    telefone: '+55 81 99876-3434',
    email: 'renata.sampaio@clinica.com',
    origem: 'instagram',
    interesse: 'Masterclass Zigomático',
    etapa: 'proposta',
    temperatura: 'morno',
    valorEstimado: 1597,
    responsavel: 'Bruno Lima',
    criadoEm: '2026-06-11',
    ultimaInteracao: '2026-06-21',
    tags: ['masterclass'],
  },
  {
    id: 'lead-018',
    nome: 'Dr. Otávio Brandão',
    telefone: '+55 11 97123-8080',
    email: 'otavio.brandao@implantebrandao.com',
    origem: 'indicacao',
    interesse: 'Mentoria Felice',
    etapa: 'negociacao',
    temperatura: 'quente',
    valorEstimado: 4800,
    responsavel: 'Helena Costa',
    criadoEm: '2026-06-06',
    ultimaInteracao: '2026-06-25',
    tags: ['mentoria', 'fechamento'],
    observacoes: 'Quer começar na próxima turma. Falta aprovar com a sócia.',
  },
];

/* ---------------- Clientes ---------------- */

export type Cliente = {
  id: string;
  nome: string;
  telefone: string;
  email?: string;
  /** Produtos/cursos adquiridos. */
  produtos: string[];
  /** LTV — total já comprado (R$). */
  valorTotal: number;
  status: 'ativo' | 'inativo';
  /** ISO date — cliente desde. */
  desde: string;
  /** ISO date — última compra. */
  ultimaCompra: string;
  plano?: string;
  /** Lead de origem, se houver. */
  leadId?: string;
};

export const CLIENTES: Cliente[] = [
  {
    id: 'cli-001',
    nome: 'Dra. Juliana Castro',
    telefone: '+55 11 97333-9090',
    email: 'juliana.castro@odonto.com',
    produtos: ['Masterclass Zigomático'],
    valorTotal: 1597,
    status: 'ativo',
    desde: '2026-06-18',
    ultimaCompra: '2026-06-18',
    plano: 'Curso avulso',
    leadId: 'lead-011',
  },
  {
    id: 'cli-002',
    nome: 'Dr. André Vasconcelos',
    telefone: '+55 19 99777-6543',
    email: 'andre.vasc@implantesp.com',
    produtos: ['Maestria Zigomática', 'Kit Gestão F4'],
    valorTotal: 2592,
    status: 'ativo',
    desde: '2026-06-12',
    ultimaCompra: '2026-06-12',
    plano: 'Curso avulso',
    leadId: 'lead-012',
  },
  {
    id: 'cli-003',
    nome: 'Dra. Juliene Ferreira',
    telefone: '+55 11 98765-1111',
    email: 'juliene.ferreira@gmail.com',
    produtos: ['Mentoria Felice', 'Maestria Zigomática'],
    valorTotal: 6395,
    status: 'ativo',
    desde: '2026-02-10',
    ultimaCompra: '2026-05-30',
    plano: 'Mentoria Felice',
  },
  {
    id: 'cli-004',
    nome: 'Dr. Paulo Menezes',
    telefone: '+55 21 99432-7788',
    email: 'paulo.menezes@odontomenezes.com',
    produtos: ['Mentoria Felice'],
    valorTotal: 4800,
    status: 'ativo',
    desde: '2026-03-05',
    ultimaCompra: '2026-03-05',
    plano: 'Mentoria Felice',
  },
  {
    id: 'cli-005',
    nome: 'Dra. Cristina Vidal',
    telefone: '+55 31 98123-9999',
    email: 'cristina.vidal@sorrir.com.br',
    produtos: ['Kit Gestão F4'],
    valorTotal: 997,
    status: 'ativo',
    desde: '2026-04-22',
    ultimaCompra: '2026-04-22',
    plano: 'Curso avulso',
  },
  {
    id: 'cli-006',
    nome: 'Dr. Sérgio Aragão',
    telefone: '+55 85 99888-1010',
    email: 'sergio.aragao@gmail.com',
    produtos: ['Masterclass Zigomático', 'Maestria Zigomática'],
    valorTotal: 3192,
    status: 'ativo',
    desde: '2026-01-30',
    ultimaCompra: '2026-05-15',
    plano: 'Assinatura Cursos',
  },
  {
    id: 'cli-007',
    nome: 'Dra. Larissa Coutinho',
    telefone: '+55 11 97000-2323',
    email: 'larissa.coutinho@odonto.com',
    produtos: ['Mentoria Felice'],
    valorTotal: 4800,
    status: 'ativo',
    desde: '2026-02-28',
    ultimaCompra: '2026-02-28',
    plano: 'Mentoria Felice',
  },
  {
    id: 'cli-008',
    nome: 'Dr. Roberto Falcão',
    telefone: '+55 41 98456-7878',
    email: 'roberto.falcao@implantefalcao.com',
    produtos: ['Maestria Zigomática'],
    valorTotal: 1595,
    status: 'inativo',
    desde: '2025-11-12',
    ultimaCompra: '2025-11-12',
    plano: 'Curso avulso',
  },
  {
    id: 'cli-009',
    nome: 'Dra. Mônica Teixeira',
    telefone: '+55 51 99321-4646',
    email: 'monica.teixeira@gmail.com',
    produtos: ['Kit Gestão F4', 'Masterclass Zigomático'],
    valorTotal: 2594,
    status: 'ativo',
    desde: '2026-03-18',
    ultimaCompra: '2026-06-01',
    plano: 'Assinatura Cursos',
  },
  {
    id: 'cli-010',
    nome: 'Dr. Felipe Nunes',
    telefone: '+55 62 98777-5454',
    email: 'felipe.nunes@odontonunes.com',
    produtos: ['Mentoria Felice'],
    valorTotal: 4800,
    status: 'ativo',
    desde: '2026-04-02',
    ultimaCompra: '2026-04-02',
    plano: 'Mentoria Felice',
  },
  {
    id: 'cli-011',
    nome: 'Dra. Vanessa Lira',
    telefone: '+55 71 99654-3232',
    email: 'vanessa.lira@gmail.com',
    produtos: ['Masterclass Zigomático'],
    valorTotal: 1597,
    status: 'inativo',
    desde: '2025-12-20',
    ultimaCompra: '2025-12-20',
    plano: 'Curso avulso',
  },
  {
    id: 'cli-012',
    nome: 'Dr. Leandro Prado',
    telefone: '+55 11 98222-7171',
    email: 'leandro.prado@institutoprado.com',
    produtos: ['Mentoria Felice', 'Kit Gestão F4', 'Maestria Zigomática'],
    valorTotal: 7392,
    status: 'ativo',
    desde: '2025-10-15',
    ultimaCompra: '2026-06-10',
    plano: 'Mentoria Felice',
  },
  {
    id: 'cli-013',
    nome: 'Dra. Aline Bittencourt',
    telefone: '+55 47 99111-8585',
    email: 'aline.bittencourt@sorrisoatual.com',
    produtos: ['Maestria Zigomática'],
    valorTotal: 1595,
    status: 'ativo',
    desde: '2026-05-08',
    ultimaCompra: '2026-05-08',
    plano: 'Curso avulso',
  },
  {
    id: 'cli-014',
    nome: 'Dr. Carlos Eduardo Maia',
    telefone: '+55 81 98765-9292',
    email: 'carlos.maia@maiaodonto.com',
    produtos: ['Kit Gestão F4'],
    valorTotal: 997,
    status: 'ativo',
    desde: '2026-05-29',
    ultimaCompra: '2026-05-29',
    plano: 'Curso avulso',
  },
];

/* ---------------- Atendimento (WhatsApp) ---------------- */

/** Status de entrega — espelha a Cloud API (sent/delivered/read/failed). */
export type StatusMensagem = 'enviada' | 'entregue' | 'lida' | 'falha';

export type Mensagem = {
  id: string;
  autor: 'cliente' | 'atendente' | 'automacao';
  texto: string;
  /** ISO datetime. */
  hora: string;
  /** Status só para mensagens enviadas por nós. */
  status?: StatusMensagem;
  tipo: 'texto' | 'template' | 'imagem';
};

export type Conversa = {
  id: string;
  nome: string;
  telefone: string;
  leadId?: string;
  clienteId?: string;
  mensagens: Mensagem[];
  naoLidas: number;
  status: 'aberto' | 'pendente' | 'resolvido';
  responsavel?: string;
  /** ISO datetime — fim da janela de atendimento de 24h (Meta). Vazio = fechada. */
  janelaAbertaAte?: string;
};

export const CONVERSAS: Conversa[] = [
  {
    id: 'conv-001',
    nome: 'Dra. Marina Albuquerque',
    telefone: '+55 11 98123-4567',
    leadId: 'lead-001',
    naoLidas: 2,
    status: 'aberto',
    responsavel: 'Helena Costa',
    janelaAbertaAte: '2026-06-25T22:40:00-03:00',
    mensagens: [
      {
        id: 'm-001',
        autor: 'cliente',
        texto: 'Oi! Vi o anúncio da masterclass e queria saber sobre a mentoria 🙂',
        hora: '2026-06-24T22:40:00-03:00',
        tipo: 'texto',
      },
      {
        id: 'm-002',
        autor: 'atendente',
        texto:
          'Oi, Dra. Marina! Que bom seu interesse 💛 A Mentoria Felice é um acompanhamento de 12 meses com o Dr. Sócrates: encontros ao vivo, hot seats e comunidade. Posso te enviar os detalhes?',
        hora: '2026-06-24T22:52:00-03:00',
        status: 'lida',
        tipo: 'texto',
      },
      {
        id: 'm-003',
        autor: 'cliente',
        texto: 'Pode sim! E qual o investimento?',
        hora: '2026-06-25T09:15:00-03:00',
        tipo: 'texto',
      },
      {
        id: 'm-004',
        autor: 'cliente',
        texto: 'Tem parcelamento?',
        hora: '2026-06-25T09:16:00-03:00',
        tipo: 'texto',
      },
    ],
  },
  {
    id: 'conv-002',
    nome: 'Dra. Camila Nogueira',
    telefone: '+55 31 98777-2200',
    leadId: 'lead-003',
    naoLidas: 0,
    status: 'aberto',
    responsavel: 'Bruno Lima',
    janelaAbertaAte: '2026-06-25T18:00:00-03:00',
    mensagens: [
      {
        id: 'm-010',
        autor: 'automacao',
        texto:
          'Olá, Dra. Camila! Aqui é da Felice Academy 💛 Vimos que você começou as aulas gratuitas da Maestria Zigomática. Posso te ajudar com alguma dúvida?',
        hora: '2026-06-23T10:00:00-03:00',
        status: 'lida',
        tipo: 'template',
      },
      {
        id: 'm-011',
        autor: 'cliente',
        texto: 'Oi! Adorei as aulas. Queria entender como funciona o curso completo.',
        hora: '2026-06-24T14:30:00-03:00',
        tipo: 'texto',
      },
      {
        id: 'm-012',
        autor: 'atendente',
        texto:
          'Que ótimo, Dra.! O curso completo tem 4 módulos + 6 bônus, acesso por 12 meses e certificado. À vista sai R$ 1.595 ou em 12x. Quer que eu reserve uma condição especial pra você?',
        hora: '2026-06-24T15:05:00-03:00',
        status: 'lida',
        tipo: 'texto',
      },
    ],
  },
  {
    id: 'conv-003',
    nome: 'Dra. Fernanda Quintela',
    telefone: '+55 85 99111-4545',
    leadId: 'lead-009',
    naoLidas: 1,
    status: 'pendente',
    responsavel: 'Bruno Lima',
    janelaAbertaAte: '2026-06-25T20:10:00-03:00',
    mensagens: [
      {
        id: 'm-020',
        autor: 'atendente',
        texto: 'Dra. Fernanda, consegui aprovar o parcelamento em 15x sem juros 🎉',
        hora: '2026-06-24T19:50:00-03:00',
        status: 'lida',
        tipo: 'texto',
      },
      {
        id: 'm-021',
        autor: 'cliente',
        texto: 'Perfeito! Me manda o link que eu fecho hoje 🙏',
        hora: '2026-06-25T08:10:00-03:00',
        tipo: 'texto',
      },
    ],
  },
  {
    id: 'conv-004',
    nome: 'Dr. Eduardo Pacheco',
    telefone: '+55 41 99888-0101',
    leadId: 'lead-004',
    naoLidas: 0,
    status: 'aberto',
    responsavel: 'Helena Costa',
    janelaAbertaAte: '2026-06-25T16:30:00-03:00',
    mensagens: [
      {
        id: 'm-030',
        autor: 'cliente',
        texto: 'Bom dia! O Kit Gestão F4 inclui as planilhas financeiras?',
        hora: '2026-06-23T09:00:00-03:00',
        tipo: 'texto',
      },
      {
        id: 'm-031',
        autor: 'atendente',
        texto:
          'Bom dia, Dr. Eduardo! Inclui sim: planilha de DRE, fluxo de caixa, precificação de procedimentos e mais 8 ferramentas. Tudo editável.',
        hora: '2026-06-23T09:20:00-03:00',
        status: 'entregue',
        tipo: 'texto',
      },
    ],
  },
  {
    id: 'conv-005',
    nome: 'Dr. Otávio Brandão',
    telefone: '+55 11 97123-8080',
    leadId: 'lead-018',
    naoLidas: 0,
    status: 'aberto',
    responsavel: 'Helena Costa',
    janelaAbertaAte: '2026-06-25T23:00:00-03:00',
    mensagens: [
      {
        id: 'm-040',
        autor: 'cliente',
        texto: 'Conversei com minha sócia, vamos seguir com a mentoria!',
        hora: '2026-06-25T11:30:00-03:00',
        tipo: 'texto',
      },
      {
        id: 'm-041',
        autor: 'atendente',
        texto: 'Maravilha, Dr. Otávio! Bem-vindos 💛 Já vou preparar o acesso de vocês.',
        hora: '2026-06-25T11:45:00-03:00',
        status: 'entregue',
        tipo: 'texto',
      },
    ],
  },
  {
    id: 'conv-006',
    nome: 'Dra. Sônia Medeiros',
    telefone: '+55 71 98444-3210',
    leadId: 'lead-013',
    naoLidas: 0,
    status: 'resolvido',
    responsavel: 'Bruno Lima',
    // janela fechada (>24h sem resposta do cliente) → só template (HSM) reabre
    mensagens: [
      {
        id: 'm-050',
        autor: 'cliente',
        texto: 'Por enquanto não vou conseguir, obrigada!',
        hora: '2026-06-02T16:00:00-03:00',
        tipo: 'texto',
      },
      {
        id: 'm-051',
        autor: 'atendente',
        texto:
          'Sem problemas, Dra. Sônia! Fico à disposição. Quando fizer sentido, é só me chamar 💛',
        hora: '2026-06-02T16:10:00-03:00',
        status: 'lida',
        tipo: 'texto',
      },
    ],
  },
  {
    id: 'conv-007',
    nome: 'Dr. Rafael Tavares',
    telefone: '+55 21 99654-1230',
    leadId: 'lead-002',
    naoLidas: 1,
    status: 'aberto',
    responsavel: 'Helena Costa',
    janelaAbertaAte: '2026-06-25T21:00:00-03:00',
    mensagens: [
      {
        id: 'm-060',
        autor: 'cliente',
        texto: 'A masterclass tem certificado?',
        hora: '2026-06-25T07:30:00-03:00',
        tipo: 'texto',
      },
    ],
  },
  {
    id: 'conv-008',
    nome: 'Dr. Leandro Prado',
    telefone: '+55 11 98222-7171',
    clienteId: 'cli-012',
    naoLidas: 0,
    status: 'resolvido',
    responsavel: 'Bruno Lima',
    janelaAbertaAte: '2026-06-25T14:00:00-03:00',
    mensagens: [
      {
        id: 'm-070',
        autor: 'automacao',
        texto:
          'Olá, Dr. Leandro! Sua nova turma da mentoria começa segunda 💛 Já deixamos tudo pronto na plataforma. Bons estudos!',
        hora: '2026-06-24T13:00:00-03:00',
        status: 'lida',
        tipo: 'template',
      },
      {
        id: 'm-071',
        autor: 'cliente',
        texto: 'Obrigado! Já estou ansioso 🚀',
        hora: '2026-06-24T13:40:00-03:00',
        tipo: 'texto',
      },
    ],
  },
];

/* ---------------- Automação ---------------- */

export type GatilhoAutomacao =
  | 'novo-lead'
  | 'lead-inativo-3d'
  | 'pos-compra'
  | 'carrinho-abandonado'
  | 'aniversario'
  | 'lembrete-aula'
  | 'reativacao-30d';

export const GATILHOS: Record<GatilhoAutomacao, { nome: string; descricao: string; icone: IconName }> = {
  'novo-lead': {
    nome: 'Novo lead',
    descricao: 'Dispara assim que um lead entra no funil.',
    icone: 'target',
  },
  'lead-inativo-3d': {
    nome: 'Lead inativo (3 dias)',
    descricao: 'Lead sem interação há 3 dias.',
    icone: 'clock',
  },
  'pos-compra': {
    nome: 'Pós-compra',
    descricao: 'Logo após a confirmação de uma compra.',
    icone: 'check-circle',
  },
  'carrinho-abandonado': {
    nome: 'Carrinho abandonado',
    descricao: 'Iniciou o checkout mas não concluiu.',
    icone: 'dollar',
  },
  aniversario: {
    nome: 'Aniversário',
    descricao: 'No aniversário do lead/cliente.',
    icone: 'star',
  },
  'lembrete-aula': {
    nome: 'Lembrete de aula ao vivo',
    descricao: 'Antes de um encontro da mentoria.',
    icone: 'calendar',
  },
  'reativacao-30d': {
    nome: 'Reativação (30 dias)',
    descricao: 'Cliente inativo há 30 dias.',
    icone: 'flame',
  },
};

export type Automacao = {
  id: string;
  nome: string;
  gatilho: GatilhoAutomacao;
  canal: 'whatsapp';
  /** Nome do template HSM aprovado na Meta. */
  templateNome: string;
  /** Corpo do template (com variáveis {{1}}). */
  corpo: string;
  /** Atraso após o gatilho, em minutos (0 = imediato). */
  atrasoMin: number;
  status: 'ativa' | 'pausada';
  condicoes?: string[];
  stats: { enviadas: number; entregues: number; lidas: number; respondidas: number };
};

export const AUTOMACOES: Automacao[] = [
  {
    id: 'auto-001',
    nome: 'Boas-vindas ao novo lead',
    gatilho: 'novo-lead',
    canal: 'whatsapp',
    templateNome: 'boas_vindas_lead',
    corpo:
      'Olá, {{1}}! Aqui é da Felice Academy 💛 Recebemos seu interesse em {{2}}. Posso te ajudar com alguma dúvida?',
    atrasoMin: 2,
    status: 'ativa',
    condicoes: ['Origem ≠ WhatsApp'],
    stats: { enviadas: 312, entregues: 305, lidas: 271, respondidas: 138 },
  },
  {
    id: 'auto-002',
    nome: 'Reengajamento de lead parado',
    gatilho: 'lead-inativo-3d',
    canal: 'whatsapp',
    templateNome: 'reengajamento_lead',
    corpo:
      'Oi, {{1}}! Vi que ficamos sem falar por aqui. Ainda posso te ajudar a evoluir com {{2}}? 😊',
    atrasoMin: 0,
    status: 'ativa',
    condicoes: ['Etapa em: Em contato, Qualificado'],
    stats: { enviadas: 184, entregues: 180, lidas: 142, respondidas: 61 },
  },
  {
    id: 'auto-003',
    nome: 'Onboarding pós-compra',
    gatilho: 'pos-compra',
    canal: 'whatsapp',
    templateNome: 'onboarding_compra',
    corpo:
      'Parabéns pela decisão, {{1}}! 🎉 Seu acesso a {{2}} já está liberado na plataforma. Qualquer dúvida, é só responder aqui.',
    atrasoMin: 5,
    status: 'ativa',
    stats: { enviadas: 96, entregues: 95, lidas: 90, respondidas: 44 },
  },
  {
    id: 'auto-004',
    nome: 'Recuperação de checkout',
    gatilho: 'carrinho-abandonado',
    canal: 'whatsapp',
    templateNome: 'checkout_abandonado',
    corpo:
      'Oi, {{1}}! Vi que você quase garantiu sua vaga em {{2}}. Ficou alguma dúvida? Posso reservar sua condição por mais 24h. ⏳',
    atrasoMin: 30,
    status: 'ativa',
    stats: { enviadas: 73, entregues: 71, lidas: 58, respondidas: 22 },
  },
  {
    id: 'auto-005',
    nome: 'Lembrete de encontro ao vivo',
    gatilho: 'lembrete-aula',
    canal: 'whatsapp',
    templateNome: 'lembrete_encontro',
    corpo:
      '{{1}}, seu encontro da Mentoria Felice começa em 1h! 🚀 Acesse pela plataforma: {{2}}',
    atrasoMin: 0,
    status: 'pausada',
    condicoes: ['Plano: Mentoria Felice'],
    stats: { enviadas: 540, entregues: 532, lidas: 498, respondidas: 73 },
  },
  {
    id: 'auto-006',
    nome: 'Reativação de cliente',
    gatilho: 'reativacao-30d',
    canal: 'whatsapp',
    templateNome: 'reativacao_cliente',
    corpo:
      'Oi, {{1}}! Faz um tempinho que você não aparece por aqui 💛 Temos novidades na trilha de {{2}}. Quer dar uma olhada?',
    atrasoMin: 0,
    status: 'ativa',
    stats: { enviadas: 128, entregues: 124, lidas: 95, respondidas: 31 },
  },
  {
    id: 'auto-007',
    nome: 'Feliz aniversário',
    gatilho: 'aniversario',
    canal: 'whatsapp',
    templateNome: 'aniversario_lead',
    corpo: 'Feliz aniversário, {{1}}! 🎂 A Felice Academy deseja um ano de muitos sorrisos. 💛',
    atrasoMin: 0,
    status: 'pausada',
    stats: { enviadas: 41, entregues: 41, lidas: 38, respondidas: 19 },
  },
];

/* ---------------- Respostas rápidas (atendimento) ---------------- */

export const RESPOSTAS_RAPIDAS: { titulo: string; texto: string }[] = [
  {
    titulo: 'Valores da mentoria',
    texto:
      'A Mentoria Felice é um acompanhamento de 12 meses com o Dr. Sócrates: encontros ao vivo, hot seats e comunidade. O investimento é R$ 4.800 à vista ou em até 12x.',
  },
  {
    titulo: 'Link de pagamento',
    texto: 'Perfeito! Segue o link para garantir sua vaga: https://felice.academy/checkout',
  },
  {
    titulo: 'Certificado',
    texto: 'Sim! Todos os cursos da Felice Academy emitem certificado de conclusão. 🎓',
  },
  {
    titulo: 'Suporte / dúvidas',
    texto: 'Claro! Pode me contar sua dúvida que eu te ajudo agora mesmo. 😊',
  },
];

/* ---------------- Helpers ---------------- */

export const leadsByEtapa = (leads: Lead[], etapa: EtapaPipeline): Lead[] =>
  leads.filter((l) => l.etapa === etapa);

/** Valor total das oportunidades em aberto (exclui etapas terminais). */
export const valorEmPipeline = (leads: Lead[]): number =>
  leads
    .filter((l) => !ETAPA_MAP[l.etapa].terminal)
    .reduce((sum, l) => sum + l.valorEstimado, 0);

export type VendasKpis = {
  leadsAbertos: number;
  valorPipeline: number;
  taxaConversao: number;
  vendasGanhas: number;
  receitaGanha: number;
  ticketMedio: number;
  conversasAbertas: number;
  naoLidas: number;
};

export function calcKpis(
  leads: Lead[],
  conversas: Conversa[],
): VendasKpis {
  const ganhos = leads.filter((l) => l.etapa === 'ganho');
  const perdidos = leads.filter((l) => l.etapa === 'perdido');
  const fechados = ganhos.length + perdidos.length;
  const receitaGanha = ganhos.reduce((s, l) => s + l.valorEstimado, 0);
  const abertos = leads.filter((l) => !ETAPA_MAP[l.etapa].terminal);
  return {
    leadsAbertos: abertos.length,
    valorPipeline: valorEmPipeline(leads),
    taxaConversao: fechados ? Math.round((ganhos.length / fechados) * 100) : 0,
    vendasGanhas: ganhos.length,
    receitaGanha,
    ticketMedio: ganhos.length ? Math.round(receitaGanha / ganhos.length) : 0,
    conversasAbertas: conversas.filter((c) => c.status !== 'resolvido').length,
    naoLidas: conversas.reduce((s, c) => s + c.naoLidas, 0),
  };
}

/** Formata um número como moeda BRL (sem centavos para valores cheios). */
export const formatBRL = (v: number): string =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

/** Formata uma data ISO (yyyy-mm-dd ou datetime) como dd/mm. */
export const formatData = (iso: string): string => {
  const d = iso.slice(0, 10).split('-');
  return d.length === 3 ? `${d[2]}/${d[1]}` : iso;
};

/** Formata a hora (HH:mm) de um datetime ISO. */
export const formatHora = (iso: string): string => {
  const m = iso.match(/T(\d{2}):(\d{2})/);
  return m ? `${m[1]}:${m[2]}` : '';
};

/** Janela de 24h da Meta ainda aberta? (compara com um "agora" passado por fora). */
export const janelaAberta = (conversa: Conversa, agoraIso: string): boolean =>
  !!conversa.janelaAbertaAte && conversa.janelaAbertaAte > agoraIso;
