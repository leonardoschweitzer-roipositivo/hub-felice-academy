/* Host do player do Panda Video, de onde vêm a VSL e os depoimentos em vídeo.
   O preconnect abre a conexão (DNS + TLS) cedo, então o iframe começa a
   carregar mais rápido quando chega a vez dele — no toque, na VSL da
   Masterclass, ou ao rolar até os depoimentos (loading="lazy").
   O React joga o <link> para o <head>. */
export const PANDA_PLAYER_ORIGIN = 'https://player-vz-90784769-874.tv.pandavideo.com.br';

export function PandaPreconnect() {
  return <link rel="preconnect" href={PANDA_PLAYER_ORIGIN} />;
}
