/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
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
