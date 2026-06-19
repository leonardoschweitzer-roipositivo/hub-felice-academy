import Link from 'next/link';
import type { Material } from './content';

/* Card de material gratuito (script, planilha, PDF…). Reusa a
   linguagem visual dos cards de produto. Estado indisponível
   desabilita o CTA ("Em breve"). */
export function MaterialCard({ material }: { material: Material }) {
  const { titulo, descricao, formato, href, interno, cta, disponivel = false } = material;
  const label = disponivel ? cta ?? 'Baixar' : 'Em breve';

  const cardClass = `hub-material${disponivel ? '' : ' hub-material--soon'}`;

  const Inner = (
    <>
      <span className="hub-tag">{formato}</span>
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
