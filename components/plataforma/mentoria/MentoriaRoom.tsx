'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '../icons';
import { getPilar } from '../data/pilares';
import {
  ENCONTROS,
  EXCLUSIVOS,
  GRAVACOES,
  MENTORES,
  POSTS,
  CATEGORIAS_COMUNIDADE,
  statusEncontro,
} from '../data/mentoria';
import { Countdown } from '../Countdown';
import { styleVars } from '../util';

function quando(offsetMin: number): { big: string; lbl: string } {
  if (offsetMin < 60) return { big: `${Math.max(1, Math.round(offsetMin))}`, lbl: 'min' };
  if (offsetMin < 1440) return { big: `${Math.round(offsetMin / 60)}`, lbl: 'horas' };
  return { big: `${Math.round(offsetMin / 1440)}`, lbl: 'dias' };
}

const RANKING = [
  { nome: 'Dra. Camila Reis', xp: '4.8k' },
  { nome: 'Dr. André Mota', xp: '4.1k' },
  { nome: 'Dr. Bruno Lima', xp: '3.7k' },
  { nome: 'Você', xp: '2.4k' },
];

export function MentoriaRoom() {
  const [cat, setCat] = useState<(typeof CATEGORIAS_COMUNIDADE)[number]>('Todos');

  const aoVivo = ENCONTROS.find((e) => statusEncontro(e) === 'ao-vivo');
  const agendados = ENCONTROS.filter((e) => statusEncontro(e) === 'agendado').sort(
    (a, b) => a.offsetMin - b.offsetMin,
  );
  const destaque = aoVivo ?? agendados[0];
  const destaquePilar = destaque ? getPilar(destaque.pilar) : null;
  const outros = ENCONTROS.filter((e) => e.id !== destaque?.id && statusEncontro(e) !== 'encerrado');

  const postsFiltrados = cat === 'Todos' ? POSTS : POSTS.filter((p) => p.categoria === cat);

  return (
    <>
      <div className="plat-page-head reveal">
        <span className="eyebrow">Mentoria Felice</span>
        <h1>
          Sua <span className="gold-grad">mentoria ao vivo</span>
        </h1>
        <p className="lead">
          Encontros ao vivo, conteúdo exclusivo, gravações e uma comunidade de dentistas para
          crescer junto.
        </p>
      </div>

      {/* Hero: destaque ao vivo + agenda */}
      {destaque && destaquePilar && (
        <div className="mentoria-hero">
          <div className="live-feature reveal" style={styleVars({ '--acc': destaquePilar.cor })}>
            {aoVivo ? (
              <span className="badge-live">
                <span className="live-dot" /> Ao vivo agora
              </span>
            ) : (
              <span className="eyebrow">Próximo encontro</span>
            )}
            <h2>{destaque.titulo}</h2>
            <p className="lf-desc">{destaque.descricao}</p>
            <div className="mentor-chip">
              <span className="m-av">
                {destaque.mentor
                  .split(' ')
                  .filter((w) => w.length > 2)
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join('')}
              </span>
              <span className="m-name">
                <b>{destaque.mentor}</b>
                <span>{destaque.tema}</span>
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
              {!aoVivo && <Countdown offsetMin={destaque.offsetMin} />}
              <Link href={`/plataforma/mentoria/ao-vivo/${destaque.id}`} className="btn btn-primary btn-sm">
                {aoVivo ? 'Entrar na sala' : 'Ver detalhes'} <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </div>

          <div className="mentoria-side">
            <div className="plat-nav-label" style={{ padding: '0 0 4px' }}>
              Próximos encontros
            </div>
            {outros.map((e) => {
              const p = getPilar(e.pilar);
              const q = quando(e.offsetMin);
              return (
                <Link
                  key={e.id}
                  href={`/plataforma/mentoria/ao-vivo/${e.id}`}
                  className="session-card reveal"
                  style={styleVars({ '--acc': p.cor })}
                >
                  <div className="sc-date">
                    <b>{q.big}</b>
                    <span>{q.lbl}</span>
                  </div>
                  <div className="sc-body">
                    <h4>{e.titulo}</h4>
                    <span>
                      {e.mentor} · {e.duracaoMin}min
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Conteúdo exclusivo */}
      <section className="plat-section">
        <div className="plat-section-head reveal">
          <h2>Conteúdo exclusivo de membros</h2>
        </div>
        <div className="plat-grid">
          {EXCLUSIVOS.map((ex) => {
            const p = getPilar(ex.pilar);
            return (
              <div className="exclusive-card reveal" key={ex.id} style={styleVars({ '--acc': p.cor })}>
                <span className="ex-ico">
                  <Icon name="sparkles" size={22} />
                </span>
                <div>
                  <h4>{ex.titulo}</h4>
                  <p>{ex.descricao}</p>
                  <span style={{ fontSize: '0.76rem', color: 'var(--muted-2)' }}>{ex.duracao}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gravações */}
      <section className="plat-section">
        <div className="plat-section-head reveal">
          <h2>Gravações dos encontros</h2>
          <span className="see-all" style={{ color: 'var(--muted-2)' }}>
            {GRAVACOES.length} disponíveis
          </span>
        </div>
        <div className="plat-grid">
          {GRAVACOES.map((g) => {
            const p = getPilar(g.pilar);
            return (
              <div className="recording-card reveal" key={g.id} style={styleVars({ '--acc': p.cor })}>
                <div className="recording-thumb">
                  <Icon name="play" size={30} />
                </div>
                <div className="recording-body">
                  <h4>{g.titulo}</h4>
                  <div className="rb-meta">
                    <span>{g.data}</span>
                    <span>{g.duracao}</span>
                    <span>{g.views} views</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comunidade */}
      <section className="plat-section" id="comunidade">
        <div className="plat-section-head reveal">
          <h2>Comunidade</h2>
          <span className="see-all" style={{ color: 'var(--muted-2)' }}>
            <Icon name="comunidade" size={14} /> +1.200 membros
          </span>
        </div>

        <div className="community-layout">
          <div>
            <div className="composer reveal">
              <span className="post-avatar">HC</span>
              <textarea placeholder="Compartilhe um caso, tire uma dúvida ou celebre um resultado…" />
              <button type="button" className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-end' }}>
                Publicar
              </button>
            </div>

            <div className="feed-filters">
              {CATEGORIAS_COMUNIDADE.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`chip${cat === c ? ' is-active' : ''}`}
                  onClick={() => setCat(c)}
                >
                  {c}
                </button>
              ))}
            </div>

            {postsFiltrados.map((post) => (
              <article className={`post reveal${post.fixado ? ' fixado' : ''}`} key={post.id}>
                {post.fixado && (
                  <span className="pin-tag">
                    <Icon name="bookmark" size={12} /> Fixado
                  </span>
                )}
                <div className="post-head">
                  <span className="post-avatar">{post.iniciais}</span>
                  <div className="ph-name">
                    <b>{post.autor}</b>
                    <span> · {post.tempo}</span>
                  </div>
                  <span className="post-cat">{post.categoria}</span>
                </div>
                <p className="post-text">{post.texto}</p>
                <div className="post-actions">
                  <button type="button">
                    <Icon name="heart" size={16} /> {post.curtidas}
                  </button>
                  <button type="button">
                    <Icon name="message-square" size={16} /> {post.respostas} respostas
                  </button>
                  <button type="button">
                    <Icon name="arrow-right" size={16} /> Compartilhar
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="community-aside">
            <div className="aside-card">
              <h4>Mentores</h4>
              <ul className="aside-list" style={{ gap: 14 }}>
                {MENTORES.map((m) => (
                  <li key={m.nome} className="ai">
                    <span className="m-av" style={{ width: 36, height: 36 }}>
                      {m.iniciais}
                    </span>
                    <span>
                      <b style={{ color: 'var(--cream)', fontSize: '0.86rem' }}>{m.nome}</b>
                      <br />
                      <span style={{ fontSize: '0.74rem', color: 'var(--muted-2)' }}>{m.papel}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="aside-card">
              <h4>Ranking da semana</h4>
              <ul className="aside-list" style={{ gap: 12 }}>
                {RANKING.map((r, i) => (
                  <li key={r.nome} className="rank-row">
                    <span className="rk">{i + 1}</span>
                    <span style={{ flex: 1, color: r.nome === 'Você' ? 'var(--gold-bright)' : 'var(--text)' }}>
                      {r.nome}
                    </span>
                    <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{r.xp} XP</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
