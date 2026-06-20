'use client';

import Link from 'next/link';
import { Icon } from '../icons';
import { getPilar } from '../data/pilares';
import { aulasDoCurso, getCurso, totalAulas } from '../data/cursos';
import { MATERIAIS } from '../data/materiais';
import { useProgress } from '../useProgress';
import { ProgressRing } from '../ProgressRing';
import { styleVars } from '../util';

export function CoursePage({ cursoSlug }: { cursoSlug: string }) {
  const curso = getCurso(cursoSlug);
  const { isConcluida, cursoProgresso } = useProgress();

  if (!curso) {
    return (
      <div className="empty">
        <p>Curso não encontrado.</p>
        <Link href="/plataforma/cursos" className="see-all">
          Voltar aos cursos
        </Link>
      </div>
    );
  }

  const pilar = getPilar(curso.pilar);
  const aulas = aulasDoCurso(curso);
  const prog = cursoProgresso(curso);
  const proxima = aulas.find((a) => !isConcluida(curso.slug, a.slug)) ?? aulas[0];
  const concluido = prog.pct === 100;
  const materiaisDoCurso = MATERIAIS.filter((m) => m.pilar === curso.pilar).slice(0, 2);

  let aulaCounter = 0;

  return (
    <div style={styleVars({ '--acc': pilar.cor })}>
      <Link href="/plataforma/cursos" className="plat-back">
        <Icon name="chevron-left" size={16} /> Cursos
      </Link>

      {/* Hero */}
      <div className="course-hero">
        <div className="course-hero-info reveal">
          <span className="pilar-badge">
            <span className="pilar-dot" />
            {pilar.nome}
          </span>
          <h1>{curso.titulo}</h1>
          <p className="lead">{curso.descricao}</p>
          <div className="course-hero-meta">
            <span>
              <Icon name="cursos" size={15} /> {totalAulas(curso)} aulas
            </span>
            <span>
              <Icon name="clock" size={15} /> {curso.duracao}
            </span>
            <span>
              <Icon name="zap" size={15} /> {curso.nivel}
            </span>
            <span>
              <Icon name="mentoria" size={15} /> {curso.instrutor}
            </span>
          </div>
          <div className="continue-actions">
            <Link
              href={`/plataforma/cursos/${curso.slug}/${proxima.slug}`}
              className="btn btn-primary"
            >
              {prog.pct > 0 ? 'Continuar curso' : 'Começar curso'} <Icon name="play" size={16} />
            </Link>
          </div>
        </div>
        <div
          className="course-hero-art reveal d1"
          style={styleVars({ '--c1': curso.thumb[0], '--c2': curso.thumb[1] })}
        >
          <Link href={`/plataforma/cursos/${curso.slug}/${proxima.slug}`} className="play-bubble">
            <Icon name="play" size={26} />
          </Link>
        </div>
      </div>

      {/* Trilha + aside */}
      <div className="course-detail-grid">
        <div>
          <h2 style={{ marginBottom: 18 }}>Conteúdo do curso</h2>
          {curso.modulos.map((mod, mi) => (
            <div className="module reveal" key={mod.titulo}>
              <div className="module-head">
                <span className="m-idx">{String(mi + 1).padStart(2, '0')}</span>
                <h3>{mod.titulo}</h3>
                <span className="m-count">{mod.aulas.length} aulas</span>
              </div>
              {mod.aulas.map((aula) => {
                aulaCounter += 1;
                const done = isConcluida(curso.slug, aula.slug);
                const current = aula.slug === proxima.slug && !done;
                return (
                  <Link
                    key={aula.slug}
                    href={`/plataforma/cursos/${curso.slug}/${aula.slug}`}
                    className={`lesson-row${done ? ' is-done' : ''}${current ? ' is-current' : ''}`}
                  >
                    <span className="l-status">
                      <Icon name={done ? 'check' : 'play'} size={14} />
                    </span>
                    <span>
                      <span className="l-title">{aula.titulo}</span>
                      <span className="l-sub"> · Aula {aulaCounter}</span>
                    </span>
                    <span className="l-meta">
                      {aula.tipo && aula.tipo !== 'video' && (
                        <span className="l-type">{aula.tipo}</span>
                      )}
                      {aula.duracao}
                    </span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <aside className="course-aside">
          <div className="aside-card">
            <h4>Seu progresso</h4>
            <div className="aside-progress">
              <ProgressRing value={prog.pct} color={pilar.cor} size={64} />
              <div className="ap-info">
                <b>{prog.pct}% concluído</b>
                <span>
                  {prog.done} de {prog.total} aulas
                </span>
              </div>
            </div>
            <Link
              href={`/plataforma/cursos/${curso.slug}/${proxima.slug}`}
              className="btn btn-primary btn-sm btn-block"
              style={{ marginTop: 16 }}
            >
              {prog.pct > 0 ? 'Continuar' : 'Começar'}
            </Link>
          </div>

          {materiaisDoCurso.length > 0 && (
            <div className="aside-card">
              <h4>Materiais do curso</h4>
              <ul className="aside-list">
                {materiaisDoCurso.map((m) => (
                  <li key={m.slug}>
                    <Link href={m.href ?? `/plataforma/materiais/${m.slug}`}>
                      <Icon name="download" size={16} /> {m.titulo}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={`cert-card${concluido ? '' : ' locked'}`}>
            <div className="cert-ico">
              <Icon name={concluido ? 'award' : 'lock'} size={28} />
            </div>
            <h4 style={{ marginBottom: 6 }}>Certificado</h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--muted)', marginBottom: concluido ? 14 : 0 }}>
              {concluido
                ? 'Parabéns! Você concluiu este curso.'
                : 'Conclua 100% das aulas para liberar seu certificado.'}
            </p>
            {concluido && (
              <button type="button" className="btn btn-primary btn-sm">
                Emitir certificado
              </button>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
