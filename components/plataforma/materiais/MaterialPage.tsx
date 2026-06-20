'use client';

import Link from 'next/link';
import { Icon } from '../icons';
import { getPilar } from '../data/pilares';
import { FORMATO_ICON, getMaterial } from '../data/materiais';
import { styleVars } from '../util';

export function MaterialPage({ slug }: { slug: string }) {
  const mat = getMaterial(slug);

  if (!mat) {
    return (
      <div className="empty">
        <p>Material não encontrado.</p>
        <Link href="/plataforma/materiais" className="see-all">
          Voltar à biblioteca
        </Link>
      </div>
    );
  }

  const pilar = getPilar(mat.pilar);

  return (
    <div className="reader" style={styleVars({ '--acc': pilar.cor })}>
      <Link href="/plataforma/materiais" className="plat-back">
        <Icon name="chevron-left" size={16} /> Materiais
      </Link>

      <div className="reader-art reveal">
        <Icon name={FORMATO_ICON[mat.formato]} size={44} />
      </div>

      <div className="reveal d1">
        <span className="pilar-badge">
          <span className="pilar-dot" />
          {pilar.nome}
        </span>
        <h1 style={{ margin: '14px 0 10px' }}>{mat.titulo}</h1>
        <p className="lead">{mat.descricao}</p>

        <div className="course-hero-meta" style={{ margin: '18px 0' }}>
          <span>
            <Icon name="file-text" size={15} /> {mat.formato}
          </span>
          {mat.tamanho && (
            <span>
              <Icon name="download" size={15} /> {mat.tamanho}
            </span>
          )}
        </div>

        {mat.conteudo && mat.conteudo.length > 0 && (
          <>
            <h2 style={{ fontSize: '1.2rem', margin: '24px 0 6px' }}>O que está incluído</h2>
            <ul className="checklist">
              {mat.conteudo.map((c) => (
                <li key={c}>
                  <Icon name="check-circle" size={18} /> {c}
                </li>
              ))}
            </ul>
          </>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 22 }}>
          <button type="button" className="btn btn-primary">
            <Icon name="download" size={16} /> Baixar material
          </button>
          <button type="button" className="btn btn-ghost">
            <Icon name="bookmark" size={16} /> Salvar
          </button>
        </div>
        <p style={{ color: 'var(--muted-2)', fontSize: '0.82rem', marginTop: 14, fontStyle: 'italic' }}>
          (Protótipo — download mockado.)
        </p>
      </div>
    </div>
  );
}
