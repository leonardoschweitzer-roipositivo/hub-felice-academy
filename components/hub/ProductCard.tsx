import Link from 'next/link';
import type { Produto } from './content';

/* Card largura-total (um por linha): imagem/visual à esquerda, conteúdo
   com detalhes à direita. Estado "em-breve" desabilita o CTA e o link.
   Sem imagem, mostra um fallback com o número do produto. */
export function ProductCard({ produto }: { produto: Produto }) {
  const { num, titulo, descricao, categoria, estado, href, interno, cta, destaque, imagem, detalhes } =
    produto;
  const disponivel = estado === 'disponivel';
  const label = cta ?? (disponivel ? 'Ver mais' : 'Em breve');

  const cardClass = `hub-row${destaque ? ' hub-row--featured' : ''}${
    disponivel ? '' : ' hub-row--soon'
  }`;

  const Inner = (
    <>
      <div className="hub-row-media">
        {imagem ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imagem} alt={titulo} loading="lazy" />
        ) : (
          <span className="hub-row-media-fallback" aria-hidden="true">
            {num}
          </span>
        )}
        <span className="hub-row-num">{num}</span>
      </div>

      <div className="hub-row-body">
        <div className="hub-row-head">
          <span className="hub-tag">{categoria}</span>
          <span className={`hub-state hub-state--${disponivel ? 'on' : 'soon'}`}>
            {disponivel ? 'Disponível' : 'Em breve'}
          </span>
        </div>

        <h3>{titulo}</h3>
        <p>{descricao}</p>

        {detalhes && detalhes.length > 0 && (
          <ul className="hub-row-list">
            {detalhes.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}

        <div className="hub-row-foot">
          <span className="hub-card-cta">
            {label}
            {disponivel && <span className="arrow"> →</span>}
          </span>
        </div>
      </div>
    </>
  );

  if (!disponivel) {
    return (
      <div className={cardClass} aria-disabled="true">
        {Inner}
      </div>
    );
  }

  if (interno) {
    return (
      <Link href={href} className={cardClass}>
        {Inner}
      </Link>
    );
  }

  return (
    <a href={href} className={cardClass} target="_blank" rel="noopener noreferrer">
      {Inner}
    </a>
  );
}
