import type { Metadata } from 'next';

/* ============================================================
   Metadata das páginas públicas.

   O `app/layout.tsx` define o padrão do site, mas o Next NÃO faz merge
   profundo de metadata: se a página declara `openGraph`, o objeto do
   layout é SUBSTITUÍDO por inteiro — some `images`, `url`, `type`,
   `siteName`. E se a página declara `twitter`, o `card` volta para
   `summary` (preview pequeno, sem imagem).

   Por isso este helper repete os campos compartilhados. Cada landing
   chama `paginaMeta` e ganha title, description, canonical, Open Graph e
   Twitter completos e coerentes.

   Antes de 11/08/2026 o site não tinha nenhuma tag de compartilhamento:
   todo link colado no WhatsApp — que é onde a Felice fecha — aparecia
   como URL crua.
   ============================================================ */

/** Arte de compartilhamento padrão (1200×630), usada por quem não tem a sua. */
export const OG_PADRAO = '/images/og-felice-academy.jpg';

export function paginaMeta({
  title,
  description,
  /** Arte 1200×630 própria da página. Sem ela, usa a do site. */
  image = OG_PADRAO,
  imageAlt,
}: {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  return {
    title,
    description,
    // './' resolve para a URL da própria página, a partir do metadataBase.
    alternates: { canonical: './' },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      siteName: 'Felice Academy',
      url: './',
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt ?? title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
