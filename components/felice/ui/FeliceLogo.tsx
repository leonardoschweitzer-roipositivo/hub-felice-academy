/* Logo oficial da Felice Academy ("Felice" branco + "ACADEMY" dourado),
   usado em todos os headers, footers e sidebars no lugar do antigo selo
   "F" + texto. Arte branca: só funciona sobre fundo escuro — todas as
   telas do site hoje são escuras. Proporção do arquivo: 480 × 221. */
export function FeliceLogo({ height = 40 }: { height?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo-felice-academy.png"
      alt="Felice Academy"
      width={Math.round((height * 480) / 221)}
      height={height}
      style={{ display: 'block', height, width: 'auto' }}
    />
  );
}
