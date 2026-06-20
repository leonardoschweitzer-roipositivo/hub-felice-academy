'use client';

import { useState } from 'react';
import { Icon } from '../icons';
import { PILARES, type PilarSlug } from '../data/pilares';
import { useProgress } from '../useProgress';
import { useStore } from '../store/PlatformStore';
import { styleVars } from '../util';
import { CourseCard } from './CourseCard';

type Filtro = 'todos' | PilarSlug;

export function CoursesIndex() {
  const [filtro, setFiltro] = useState<Filtro>('todos');
  const { cursosByPilar } = useStore();
  const { cursoProgressoBySlug, isFavorito, toggleFavorito } = useProgress();

  const pilaresVisiveis = filtro === 'todos' ? PILARES : PILARES.filter((p) => p.slug === filtro);

  return (
    <>
      <div className="plat-page-head reveal">
        <span className="eyebrow">Cursos</span>
        <h1>
          Aprenda pelos <span className="gold-grad">4 pilares</span>
        </h1>
        <p className="lead">
          Clínica, Gestão, Marketing e Vendas — uma trilha completa para evoluir a técnica e o
          negócio. Escolha um pilar ou explore tudo.
        </p>
      </div>

      <div className="pillar-tabs reveal d1">
        <button
          type="button"
          className={`pillar-tab${filtro === 'todos' ? ' is-active' : ''}`}
          onClick={() => setFiltro('todos')}
        >
          <Icon name="sparkles" size={17} />
          Todos
        </button>
        {PILARES.map((p) => (
          <button
            key={p.slug}
            type="button"
            className={`pillar-tab${filtro === p.slug ? ' is-active' : ''}`}
            style={styleVars({ '--acc': p.cor })}
            onClick={() => setFiltro(p.slug)}
          >
            <Icon name={p.icone} size={17} />
            {p.nome}
          </button>
        ))}
      </div>

      {pilaresVisiveis.map((pilar) => {
        const cursos = cursosByPilar(pilar.slug);
        return (
          <section key={pilar.slug} style={styleVars({ '--acc': pilar.cor })}>
            <div className="pilar-head reveal">
              <span className="pilar-ico">
                <Icon name={pilar.icone} size={22} />
              </span>
              <div>
                <h2>{pilar.nome}</h2>
                <p>{pilar.descricao}</p>
              </div>
            </div>
            <div className="plat-grid">
              {cursos.map((c) => (
                <CourseCard
                  key={c.slug}
                  curso={c}
                  pct={cursoProgressoBySlug(c.slug).pct}
                  isFav={isFavorito(c.slug)}
                  onToggleFav={toggleFavorito}
                />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
