/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
  async redirects() {
    return [
      /* O "Curso Gestão F4" não existe — Gestão F4 é a consultoria de 4
         semanas. A landing foi removida em 11/08/2026, mas ficou meses no ar
         e indexável, então quem tiver o link (ou um anúncio antigo) cai na
         Consultoria em vez de num 404. É para onde o card apontava desde a
         fusão das duas ofertas na vitrine. */
      {
        source: '/produtos/gestao-f4',
        destination: '/produtos/consultoria',
        permanent: true,
      },
      {
        source: '/produtos/gestao-f4/:path*',
        destination: '/produtos/consultoria',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Imagens estáticas em /public/images — cache imutável de 1 ano.
        // (O /_next/static já recebe cache imutável automaticamente na Vercel.)
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
