import Link from 'next/link';
import type { Produto } from './content';

/* Card estilo "janela de navegador" (três pontos no topo), conforme o
   sitemap aprovado. Estado "em-breve" desabilita o CTA. */
export function ProductCard({ produto }: { produto: Produto }) {
  const { num, titulo, descricao, categoria, estado, href, interno, cta, destaque } = produto;
  const disponivel = estado === 'disponivel';
  const label = cta ?? (disponivel ? 'Ver mais' : 'Em breve');

  const cardClass = `hub-card${destaque ? ' hub-card--featured' : ''}${
    disponivel ? '' : ' hub-card--soon'
  }`;

  const Inner = (
    <>
      {/* Barra estilo janela de navegador */}
      <div className="hub-card-bar">
        <span className="hub-dot" />
        <span className="hub-dot" />
        <span className="hub-dot" />
        <span className="hub-card-num">{num}</span>
      </div>

      <div className="hub-card-body">
        <span className="hub-tag">{categoria}</span>
        <h3>{titulo}</h3>
        <p>{descricao}</p>

        <div className="hub-card-foot">
          <span className={`hub-state hub-state--${disponivel ? 'on' : 'soon'}`}>
            {disponivel ? 'Disponível' : 'Em breve'}
          </span>
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
