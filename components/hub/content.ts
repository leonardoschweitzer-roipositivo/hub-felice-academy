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
  /** Destino do CTA. Use rota interna (/gestao, /crm) ou URL externa. */
  href: string;
  /** true quando href é uma rota interna deste app (usa <Link>). */
  interno?: boolean;
  /** Texto do CTA. Default: "Ver mais" (disponível) / "Em breve". */
  cta?: string;
  /** Destaca o card (ex.: Felice CRM, produto-foco). */
  destaque?: boolean;
};

export const PRODUTOS: Produto[] = [
  {
    num: '01',
    titulo: 'Masterclass',
    descricao: 'Aulas avançadas para elevar autoridade e domínio clínico.',
    categoria: 'Curso',
    estado: 'em-breve',
    href: '#',
    cta: 'Em breve',
  },
  {
    num: '02',
    titulo: 'Zigomático',
    descricao: 'Formação técnica em implantes zigomáticos do básico ao avançado.',
    categoria: 'Curso',
    estado: 'em-breve',
    href: '#',
    cta: 'Em breve',
  },
  {
    num: '03',
    titulo: 'Mentoria',
    descricao: 'Acompanhamento direto para escalar carreira e clínica.',
    categoria: 'Mentoria',
    estado: 'em-breve',
    href: '#',
    cta: 'Em breve',
  },
  {
    num: '04',
    titulo: 'Gestão F4',
    descricao: 'O sistema de gestão para dentistas: POPs, scripts e calendário de marketing.',
    categoria: 'Curso',
    estado: 'disponivel',
    href: '/gestao',
    interno: true,
    cta: 'Acessar',
  },
  {
    num: '05',
    titulo: 'Gengiva',
    descricao: 'Curso técnico de cirurgia e estética gengival.',
    categoria: 'Curso',
    estado: 'em-breve',
    href: '#',
    cta: 'Em breve',
  },
  {
    num: '06',
    titulo: 'Felice CRM',
    descricao: 'O software que organiza pacientes, agenda, vendas e faturamento da clínica.',
    categoria: 'Software',
    estado: 'disponivel',
    href: '/crm',
    interno: true,
    cta: 'Conhecer',
    destaque: true,
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
