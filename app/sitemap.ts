import type { MetadataRoute } from 'next';

const BASE = 'https://feliceacademy.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, priority: 1 },
    { url: `${BASE}/crm/`, priority: 0.9 },
    { url: `${BASE}/produtos/kitgestaof4/`, priority: 0.8 },
    { url: `${BASE}/produtos/maestria-zigomatica/`, priority: 0.8 },
    { url: `${BASE}/privacidade/`, priority: 0.3 },
    { url: `${BASE}/termos/`, priority: 0.3 },
  ];
}
