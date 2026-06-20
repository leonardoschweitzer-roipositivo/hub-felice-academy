'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Icon } from '../icons';
import { getPilar } from '../data/pilares';
import { aulasDoCurso, getAula, getCurso } from '../data/cursos';
import { MATERIAIS } from '../data/materiais';
import { useProgress } from '../useProgress';
import { usePersistentState } from '../usePersistentState';
import { styleVars } from '../util';

type Tab = 'conteudo' | 'materiais' | 'notas' | 'comentarios';

const COMENTARIOS = [
  { autor: 'Dr. Bruno Lima', iniciais: 'BL', tempo: 'há 1 dia', texto: 'Aula excelente! A parte do planejamento clareou muita coisa pra mim.' },
  { autor: 'Dra. Paula Souza', iniciais: 'PS', tempo: 'há 3 dias', texto: 'Já apliquei na clínica essa semana. Resultado na veia 🙌' },
];

export function LessonPlayer({ cursoSlug, aulaSlug }: { cursoSlug: string; aulaSlug: string }) {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('conteudo');
  const { isConcluida, toggleConcluida } = useProgress();

  const curso = getCurso(cursoSlug);
  const aula = curso ? getAula(curso, aulaSlug) : undefined;
  const [notas, setNotas] = usePersistentState<string>(`notas:${cursoSlug}/${aulaSlug}`, '');

  if (!curso || !aula) {
    return (
      <div className="empty">
        <p>Aula não encontrada.</p>
        <Link href="/plataforma/cursos" className="see-all">
          Voltar aos cursos
        </Link>
      </div>
    );
  }

  const pilar = getPilar(curso.pilar);
  const aulas = aulasDoCurso(curso);
  const idx = aulas.findIndex((a) => a.slug === aula.slug);
  const prev = idx > 0 ? aulas[idx - 1] : null;
  const next = idx < aulas.length - 1 ? aulas[idx + 1] : null;
  const done = isConcluida(curso.slug, aula.slug);
  const materiais = MATERIAIS.filter((m) => m.pilar === curso.pilar).slice(0, 3);

  const concluirEAvancar = () => {
    toggleConcluida(curso.slug, aula.slug, true);
    if (next) router.push(`/plataforma/cursos/${curso.slug}/${next.slug}`);
  };

  let counter = 0;

  return (
    <div style={styleVars({ '--acc': pilar.cor })}>
      <Link href={`/plataforma/cursos/${curso.slug}`} className="plat-back">
        <Icon name="chevron-left" size={16} /> {curso.titulo}
      </Link>

      <div className="player-layout">
        <div>
          {/* Palco do vídeo (placeholder) */}
          <div
            className="player-stage"
            style={styleVars({ '--c1': curso.thumb[0], '--c2': curso.thumb[1] })}
          >
            <button type="button" className="player-play" aria-label="Reproduzir aula">
              <Icon name="play" size={32} />
            </button>
            <div className="stage-caption">
              <div className="sc-eyebrow">
                {pilar.nome} · Aula {idx + 1} de {aulas.length}
              </div>
              <h2>{aula.titulo}</h2>
            </div>
          </div>

          {/* Barra de ações */}
          <div className="player-bar">
            <button
              type="button"
              className="pb-nav"
              disabled={!prev}
              onClick={() => prev && router.push(`/plataforma/cursos/${curso.slug}/${prev.slug}`)}
            >
              <Icon name="chevron-left" size={16} /> Anterior
            </button>
            <button
              type="button"
              className="pb-nav"
              disabled={!next}
              onClick={() => next && router.push(`/plataforma/cursos/${curso.slug}/${next.slug}`)}
            >
              Próxima <Icon name="chevron-right" size={16} />
            </button>

            <div className="pb-spacer" />

            {next ? (
              <button type="button" className={`mark-done${done ? ' is-done' : ''}`} onClick={concluirEAvancar}>
                <Icon name="check-circle" size={17} /> Concluir e avançar
              </button>
            ) : (
              <button
                type="button"
                className={`mark-done${done ? ' is-done' : ''}`}
                onClick={() => toggleConcluida(curso.slug, aula.slug)}
              >
                <Icon name="check-circle" size={17} /> {done ? 'Concluída' : 'Marcar como concluída'}
              </button>
            )}
          </div>

          {/* Abas */}
          <div className="player-tabs">
            {(
              [
                ['conteudo', 'Conteúdo'],
                ['materiais', 'Materiais'],
                ['notas', 'Anotações'],
                ['comentarios', 'Comentários'],
              ] as [Tab, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={`player-tab${tab === key ? ' is-active' : ''}`}
                onClick={() => setTab(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="player-panel">
            {tab === 'conteudo' && (
              <>
                <p>
                  Nesta aula, <strong style={{ color: 'var(--cream)' }}>{aula.titulo}</strong>, você
                  avança no curso <em>{curso.titulo}</em> com uma abordagem prática e direta ao ponto.
                </p>
                <p>
                  Acompanhe o passo a passo, anote os pontos-chave na aba <strong>Anotações</strong> e,
                  ao terminar, marque a aula como concluída para liberar a próxima e somar XP.
                </p>
                <p style={{ color: 'var(--muted-2)', fontStyle: 'italic' }}>
                  (Player de demonstração — conteúdo de vídeo mockado.)
                </p>
              </>
            )}

            {tab === 'materiais' && (
              <ul className="aside-list" style={{ gap: 12 }}>
                {materiais.map((m) => (
                  <li key={m.slug}>
                    <Link href={m.href ?? `/plataforma/materiais/${m.slug}`}>
                      <Icon name="download" size={16} /> {m.titulo}{' '}
                      <span style={{ color: 'var(--muted-2)' }}>· {m.formato}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {tab === 'notas' && (
              <>
                <p style={{ marginBottom: 10 }}>Suas anotações ficam salvas neste dispositivo.</p>
                <textarea
                  className="notes-area"
                  placeholder="Escreva suas anotações sobre esta aula…"
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                />
              </>
            )}

            {tab === 'comentarios' && (
              <>
                <div className="composer">
                  <span className="post-avatar">HC</span>
                  <textarea placeholder="Tire uma dúvida ou compartilhe um insight…" />
                  <button type="button" className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-end' }}>
                    Enviar
                  </button>
                </div>
                {COMENTARIOS.map((c) => (
                  <div className="comment" key={c.autor}>
                    <span className="post-avatar">{c.iniciais}</span>
                    <div>
                      <div className="ph-name">
                        <b>{c.autor}</b> <span style={{ color: 'var(--muted-2)', fontSize: '0.78rem' }}>· {c.tempo}</span>
                      </div>
                      <p className="post-text" style={{ marginTop: 4 }}>
                        {c.texto}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Lista de aulas */}
        <aside className="player-aside">
          <div className="player-aside-head">
            <h4>{curso.titulo}</h4>
            <span>
              {aulas.length} aulas · {curso.duracao}
            </span>
          </div>
          <div className="player-aside-list">
            {curso.modulos.map((mod, mi) => (
              <div key={mod.titulo}>
                <div className="plat-nav-label" style={{ padding: '12px 18px 4px' }}>
                  Módulo {mi + 1} · {mod.titulo}
                </div>
                {mod.aulas.map((a) => {
                  counter += 1;
                  const aDone = isConcluida(curso.slug, a.slug);
                  const isCurrent = a.slug === aula.slug;
                  return (
                    <Link
                      key={a.slug}
                      href={`/plataforma/cursos/${curso.slug}/${a.slug}`}
                      className={`lesson-row${aDone ? ' is-done' : ''}${isCurrent ? ' is-current' : ''}`}
                    >
                      <span className="l-status">
                        <Icon name={aDone ? 'check' : isCurrent ? 'play' : 'dot'} size={13} />
                      </span>
                      <span className="l-title" style={{ fontSize: '0.86rem' }}>
                        {a.titulo}
                      </span>
                      <span className="l-meta" style={{ fontSize: '0.74rem' }}>
                        {a.duracao}
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
