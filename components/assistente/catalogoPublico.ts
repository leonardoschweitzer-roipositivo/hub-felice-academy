/* ============================================================
   CATÁLOGO PÚBLICO — a fatia do catálogo que o navegador precisa.

   Por que existe uma segunda lista: `lib/assistente/catalogo.ts` importa
   os 9 content.ts das landings (~146 KB). Se o widget importasse dali para
   renderizar o card de [[produto:slug]], arrastaria tudo isso para o
   bundle do cliente — a copy inteira do site, em toda página, para
   desenhar um card com três campos.

   Aqui ficam só nome, categoria, preço e link. A divergência entre os dois
   é impossível de passar batida: o catálogo do servidor importa este
   arquivo e QUEBRA O BUILD se algum campo não bater.
   ============================================================ */

export type ProdutoPublico = {
  nome: string;
  categoria: string;
  href: string;
  /** Como aparece no card. `null` = sem preço público. */
  preco: string | null;
};

export const PRODUTOS_PUBLICOS: Record<string, ProdutoPublico> = {
  kitgestaof4: {
    nome: 'Kit Sistema de Gestão F4',
    categoria: 'Curso',
    href: '/produtos/kitgestaof4/',
    preco: 'R$ 97 à vista ou 12x de R$ 9,97',
  },
  'masterclass-zigomatico': {
    nome: 'Zigomático Descomplicado',
    categoria: 'Masterclass',
    href: '/produtos/masterclass-zigomatico/',
    preco: 'R$ 67,00 à vista ou 12x de R$ 6,89',
  },
  'maestria-zigomatica': {
    nome: 'Maestria Zigomática',
    categoria: 'Curso',
    href: '/produtos/maestria-zigomatica/',
    preco: 'R$ 997,00 à vista ou 12x de R$ 102,51',
  },
  'vendas-secretaria': {
    nome: 'CRC de Alta Performance',
    categoria: 'Curso',
    href: '/produtos/vendas-secretaria/',
    preco: 'R$ 597,00 à vista ou 12x de R$ 61,38',
  },
  'recepcao-alta-performance': {
    nome: 'Recepção de Alta Performance',
    categoria: 'Curso',
    href: '/produtos/recepcao-alta-performance/',
    preco: 'R$ 597,00 à vista ou 12x de R$ 61,38',
  },
  consultoria: {
    nome: 'Consultoria Gestão F4',
    categoria: 'Consultoria',
    href: '/produtos/consultoria/',
    preco: null,
  },
  'mentoria-gestao-f4': {
    nome: 'Mentoria de Gestão F4',
    categoria: 'Mentoria',
    href: '/produtos/mentoria-gestao-f4/',
    preco: null,
  },
  'mentoria-zigomatico': {
    nome: 'Mentoria de Zigomático',
    categoria: 'Mentoria',
    href: '/produtos/mentoria-zigomatico/',
    preco: null,
  },
  crm: {
    nome: 'Felice CRM',
    categoria: 'Software',
    href: '/crm/',
    preco: null,
  },
};

export const nomeDoSlug = (slug: string): string => PRODUTOS_PUBLICOS[slug]?.nome ?? slug;
