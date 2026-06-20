'use client';

import Link from 'next/link';
import { Icon } from '../icons';
import { getPilar } from '../data/pilares';
import { FORMATO_ICON, type MaterialItem } from '../data/materiais';
import { styleVars } from '../util';

export function MaterialCard({ mat }: { mat: MaterialItem }) {
  const pilar = getPilar(mat.pilar);
  const href = mat.href ?? `/plataforma/materiais/${mat.slug}`;
  const ctaLabel = mat.interno ? 'Abrir' : 'Acessar';

  return (
    <Link
      href={href}
      className={`mat-card reveal${mat.destaque ? ' featured' : ''}`}
      style={styleVars({ '--acc': pilar.cor })}
    >
      <div className="mat-top">
        <span className="mat-ico">
          <Icon name={FORMATO_ICON[mat.formato]} size={22} />
        </span>
        {mat.selo === 'novo' && <span className="selo selo--novo">Novo</span>}
      </div>

      <span className="pilar-badge">
        <span className="pilar-dot" />
        {pilar.nome}
      </span>

      <h3>{mat.titulo}</h3>
      <p>{mat.descricao}</p>

      <div className="mat-foot">
        <span className="mf-meta">
          {mat.formato}
          {mat.tamanho ? ` · ${mat.tamanho}` : ''}
        </span>
        <span className="mf-cta">
          {ctaLabel} <Icon name="arrow-right" size={14} />
        </span>
      </div>
    </Link>
  );
}
