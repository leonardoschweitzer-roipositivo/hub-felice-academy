// Tabela-fonte-da-verdade dos funis (SPEC seção 0).
// Ao criar o link Green de um produto, preencher o `offer` aqui — o webhook
// roteia value/contentName por oferta e o browser por slug.

export type Funnel = {
  /** pasta em /produtos/{slug} */
  slug: string;
  /** código da oferta no Green (payfast.greenn.com.br/.../offer/<offer>). null = link ainda não criado. */
  offer: string | null;
  /** valor da venda em BRL */
  value: number;
  /** content_name do evento Meta */
  contentName: string;
};

/** Funis pagos (Green). Chave = slug do produto. */
export const FUNNELS: Record<string, Funnel> = {
  kitgestaof4: {
    slug: 'kitgestaof4',
    offer: '4iIlqU',
    value: 97.0,
    contentName: 'Kit Sistema de Gestão F4',
  },
  'maestria-zigomatica': {
    slug: 'maestria-zigomatica',
    offer: null, // ⏳ preencher quando o link Green existir
    value: 1595.0,
    contentName: 'Maestria Zigomática',
  },
  'masterclass-zigomatico': {
    slug: 'masterclass-zigomatico',
    offer: 'VXcVJD',
    value: 19.9,
    contentName: 'Masterclass Zigomático',
  },
  'gestao-f4': {
    slug: 'gestao-f4',
    offer: null, // ⏳
    value: 497.0,
    contentName: 'Gestão F4',
  },
  'vendas-secretaria': {
    slug: 'vendas-secretaria',
    offer: null, // ⏳ preencher quando o link Green existir
    value: 297.0, // ⚠️ placeholder — trocar pelo preço real
    contentName: 'A Secretária que Vende',
  },
  consultoria: {
    slug: 'consultoria',
    offer: null, // não há checkout: a entrada é por aplicação, não por link Green
    // O deck ancora R$ 22 mil em entregáveis e fecha em R$ 6 mil. O preço
    // NÃO aparece na landing (só na conversa de diagnóstico), mas o valor
    // alimenta o ViewContent/SubmitApplication do Meta.
    value: 6000.0,
    contentName: 'Consultoria Gestão F4',
  },
  'recepcao-alta-performance': {
    slug: 'recepcao-alta-performance',
    offer: null, // ⏳ preencher quando o link Green existir
    value: 297.0, // ⚠️ placeholder — espelha o CRC (produto-par), confirmar
    contentName: 'Recepção de Alta Performance',
  },
};

/** Busca por slug do produto (ViewContent / Purchase do browser). */
export function funnelBySlug(slug: string): Funnel | undefined {
  return FUNNELS[slug];
}

/** Busca por código da oferta Green (webhook). */
export function funnelByOffer(offer: string | null | undefined): Funnel | undefined {
  if (!offer) return undefined;
  return Object.values(FUNNELS).find((f) => f.offer === offer);
}
