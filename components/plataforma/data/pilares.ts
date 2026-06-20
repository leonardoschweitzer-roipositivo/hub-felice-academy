import type { IconName } from '../icons';

/* ============================================================
   Os 4 PILARES do módulo Cursos da Felice Academy.
   Clínica · Gestão · Marketing · Vendas.
   Cada pilar tem um acento de cor próprio (sobre o dourado da marca),
   usado em badges, barras de progresso e thumbs de curso.
   ⚠️ Mock — ajustar nomes/descrições com o cliente.
   ============================================================ */

export type PilarSlug = 'clinica' | 'gestao' | 'marketing' | 'vendas';

export type Pilar = {
  slug: PilarSlug;
  nome: string;
  tagline: string;
  descricao: string;
  icone: IconName;
  /** Acento do pilar (hex) para badges, barras e thumbs. */
  cor: string;
};

export const PILARES: Pilar[] = [
  {
    slug: 'clinica',
    nome: 'Clínica',
    tagline: 'Domínio técnico',
    descricao: 'Da cirurgia à estética: técnica avançada para elevar a excelência clínica.',
    icone: 'clinica',
    cor: '#5BC6B8',
  },
  {
    slug: 'gestao',
    nome: 'Gestão',
    tagline: 'Clínica organizada',
    descricao: 'POPs, processos, equipe e financeiro para sair do improviso e ganhar previsibilidade.',
    icone: 'gestao',
    cor: '#E8B447',
  },
  {
    slug: 'marketing',
    nome: 'Marketing',
    tagline: 'Atração e autoridade',
    descricao: 'Conteúdo, posicionamento e tráfego para encher a agenda com os pacientes certos.',
    icone: 'marketing',
    cor: '#B98AE6',
  },
  {
    slug: 'vendas',
    nome: 'Vendas',
    tagline: 'Conversão de planos',
    descricao: 'Atendimento, agendamento e fechamento para transformar contatos em tratamentos.',
    icone: 'vendas',
    cor: '#E8825A',
  },
];

export const PILAR_MAP: Record<PilarSlug, Pilar> = PILARES.reduce(
  (acc, p) => ({ ...acc, [p.slug]: p }),
  {} as Record<PilarSlug, Pilar>,
);

export const getPilar = (slug: PilarSlug) => PILAR_MAP[slug];
