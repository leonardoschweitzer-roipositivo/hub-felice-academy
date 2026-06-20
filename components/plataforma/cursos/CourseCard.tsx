'use client';

import Link from 'next/link';
import { Icon } from '../icons';
import { getPilar } from '../data/pilares';
import { totalAulas, type Curso } from '../data/cursos';
import { styleVars } from '../util';

export function CourseCard({
  curso,
  pct = 0,
  isFav = false,
  onToggleFav,
}: {
  curso: Curso;
  pct?: number;
  isFav?: boolean;
  onToggleFav?: (slug: string) => void;
}) {
  const pilar = getPilar(curso.pilar);

  return (
    <Link
      href={`/plataforma/cursos/${curso.slug}`}
      className="course-card reveal"
      style={styleVars({ '--acc': pilar.cor, '--c1': curso.thumb[0], '--c2': curso.thumb[1] })}
    >
      <div className="course-thumb">
        <div className="thumb-top">
          <span className="pilar-badge">
            <span className="pilar-dot" />
            {pilar.nome}
          </span>
          {onToggleFav && (
            <button
              type="button"
              className={`fav-btn${isFav ? ' is-fav' : ''}`}
              aria-label={isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onToggleFav(curso.slug);
              }}
            >
              <Icon name="heart" size={16} />
            </button>
          )}
        </div>
        <span className="play-bubble">
          <Icon name="play" size={20} />
        </span>
        <span className="thumb-dur">{totalAulas(curso)} aulas</span>
      </div>

      <div className="course-body">
        {curso.selo && (
          <span className={`selo selo--${curso.selo === 'novo' ? 'novo' : 'alta'}`} style={{ alignSelf: 'flex-start' }}>
            {curso.selo === 'novo' ? 'Novo' : 'Em alta'}
          </span>
        )}
        <h3>{curso.titulo}</h3>
        <p className="course-sub">{curso.subtitulo}</p>

        <div className="course-meta">
          <span>
            <Icon name="clock" size={13} /> {curso.duracao}
          </span>
          <span>
            <Icon name="zap" size={13} /> {curso.nivel}
          </span>
        </div>

        {pct > 0 ? (
          <div className="course-progress-row">
            <div className="progress-bar">
              <span style={{ width: `${pct}%` }} />
            </div>
            {pct}%
          </div>
        ) : (
          <div className="course-progress-row" style={{ color: 'var(--gold-bright)' }}>
            <Icon name="play" size={12} /> Começar curso
          </div>
        )}
      </div>
    </Link>
  );
}
