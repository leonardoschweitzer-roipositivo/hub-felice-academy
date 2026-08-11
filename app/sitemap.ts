import type { MetadataRoute } from 'next';

/* O canônico do site é o `www`: o apex responde 308 → www (registrado em
   docs/handoffs/tracking/README.md), e `lib/tracking/config.ts` já usa o
   www no `event_source_url` dos eventos do Meta. Até 11/08/2026 este
   arquivo usava o apex, então as 13 URLs do sitemap eram redirects e os
   dois lados discordavam sobre qual é o endereço oficial. */
const BASE = 'https://www.feliceacademy.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, priority: 1 },
    { url: `${BASE}/produtos/`, priority: 0.9 },
    { url: `${BASE}/crm/`, priority: 0.9 },
    { url: `${BASE}/produtos/kitgestaof4/`, priority: 0.8 },
    { url: `${BASE}/produtos/maestria-zigomatica/`, priority: 0.8 },
    { url: `${BASE}/produtos/masterclass-zigomatico/`, priority: 0.8 },
    { url: `${BASE}/produtos/vendas-secretaria/`, priority: 0.8 },
    { url: `${BASE}/produtos/recepcao-alta-performance/`, priority: 0.8 },
    { url: `${BASE}/produtos/mentorias/`, priority: 0.8 },
    // As duas mentorias estavam de fora — só o hub de escolha entrava.
    { url: `${BASE}/produtos/mentoria-gestao-f4/`, priority: 0.8 },
    { url: `${BASE}/produtos/mentoria-zigomatico/`, priority: 0.8 },
    { url: `${BASE}/produtos/consultoria/`, priority: 0.8 },
    { url: `${BASE}/privacidade/`, priority: 0.3 },
    { url: `${BASE}/termos/`, priority: 0.3 },
  ];
  /* Fora daqui de propósito:
     - /produtos/gestao-f4 — landing órfã (nenhum link interno leva a ela) de
       um curso que, segundo os comentários do próprio repo, não existe, e com
       CHECKOUT_URL='#oferta'. Continua no ar; só parou de ser oferecida ao
       Google enquanto não houver oferta real. Reativar junto com o checkout.
     - /plataforma/** — protótipo com dados fictícios, agora noindex + disallow.
     - Páginas de obrigado, questionário e confirmação — todas noindex. */
}
