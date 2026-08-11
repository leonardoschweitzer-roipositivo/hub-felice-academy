import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      /* Áreas que não são conteúdo público:
         - /plataforma: protótipo da área do aluno, com dados fictícios.
         - /produtos/kitgestaof4/kit-f4: entrega paga (já noindex nas metas).
         O disallow soma ao noindex das páginas — quem só lê o robots.txt
         também para na porta. */
      disallow: ['/plataforma', '/produtos/kitgestaof4/kit-f4'],
    },
    // Canônico do site é o www (o apex responde 308 → www).
    sitemap: 'https://www.feliceacademy.com.br/sitemap.xml',
  };
}
