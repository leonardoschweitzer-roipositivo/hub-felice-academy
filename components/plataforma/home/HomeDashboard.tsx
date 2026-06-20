'use client';

import Link from 'next/link';
import { Icon } from '../icons';
import { ALUNO } from '../data/aluno';
import { PILARES, getPilar } from '../data/pilares';
import { getAula } from '../data/cursos';
import { statusEncontro } from '../data/mentoria';
import { useProgress } from '../useProgress';
import { useStore } from '../store/PlatformStore';
import { ProgressRing } from '../ProgressRing';
import { Countdown } from '../Countdown';
import { CourseCard } from '../cursos/CourseCard';
import { MaterialCard } from '../materiais/MaterialCard';
import { styleVars } from '../util';

export function HomeDashboard() {
  const { cursos, getCurso, encontros, materiais } = useStore();
  const { cursoProgressoBySlug, cursoProgresso, pilarProgresso, isFavorito, toggleFavorito } =
    useProgress();

  // Continuar assistindo
  const cursoAtual = getCurso(ALUNO.continuar.cursoSlug);
  const aulaAtual = cursoAtual ? getAula(cursoAtual, ALUNO.continuar.aulaSlug) : undefined;
  const progAtual = cursoAtual ? cursoProgresso(cursoAtual) : { pct: 0 };
  const pilarAtual = cursoAtual ? getPilar(cursoAtual.pilar) : null;

  // Próximo ao vivo (prioriza o que está ao vivo agora)
  const aoVivo = encontros.find((e) => statusEncontro(e) === 'ao-vivo');
  const proximo =
    aoVivo ??
    encontros
      .filter((e) => statusEncontro(e) === 'agendado')
      .sort((a, b) => a.offsetMin - b.offsetMin)[0];
  const proximoPilar = proximo ? getPilar(proximo.pilar) : null;

  // Recomendados (em alta + novos)
  const recomendados = cursos.filter((c) => c.selo).slice(0, 4);
  const xpPct = Math.round((ALUNO.xp / ALUNO.xpProximoNivel) * 100);

  return (
    <>
      {/* Saudação + nível */}
      <div className="greeting reveal">
        <span className="eyebrow">{ALUNO.plano}</span>
        <h1>
          Olá, <span className="gold-grad">{ALUNO.primeiroNome}</span> 👋
        </h1>
        <p className="lead">Continue de onde parou e mantenha sua sequência de estudos.</p>

        <div className="level-strip">
          <span className="lv">
            <Icon name="trophy" size={18} style={{ color: 'var(--gold)' }} /> Nível {ALUNO.nivel}
          </span>
          <div className="xp-bar progress-bar">
            <span style={{ width: `${xpPct}%` }} />
          </div>
          <span className="xp-meta">
            {ALUNO.xp} / {ALUNO.xpProximoNivel} XP
          </span>
        </div>
      </div>

      {/* Continuar assistindo */}
      {cursoAtual && aulaAtual && pilarAtual && (
        <div className="plat-section">
          <Link
            href={`/plataforma/cursos/${cursoAtual.slug}/${aulaAtual.slug}`}
            className="continue-card reveal"
            style={styleVars({
              '--acc': pilarAtual.cor,
              '--c1': cursoAtual.thumb[0],
              '--c2': cursoAtual.thumb[1],
            })}
          >
            <div className="continue-thumb">
              <span className="play-bubble">
                <Icon name="play" size={24} />
              </span>
            </div>
            <div className="continue-body">
              <span className="eyebrow">Continuar assistindo</span>
              <h2>{cursoAtual.titulo}</h2>
              <p className="next-lesson">
                Próxima aula: <strong style={{ color: 'var(--cream)' }}>{aulaAtual.titulo}</strong> ·{' '}
                {aulaAtual.duracao}
              </p>
              <div className="continue-actions">
                <span className="btn btn-primary btn-sm">
                  Retomar <Icon name="play" size={15} />
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, minWidth: 160 }}>
                  <span className="progress-bar" style={{ flex: 1 }}>
                    <span style={{ width: `${progAtual.pct}%` }} />
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{progAtual.pct}%</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Progresso nos pilares */}
      <section className="plat-section">
        <div className="plat-section-head reveal">
          <h2>Seu progresso nos pilares</h2>
          <Link href="/plataforma/cursos" className="see-all">
            Ver cursos <Icon name="arrow-right" size={14} />
          </Link>
        </div>
        <div className="pilar-prog-grid">
          {PILARES.map((p) => {
            const prog = pilarProgresso(p.slug);
            return (
              <Link
                key={p.slug}
                href="/plataforma/cursos"
                className="pilar-prog reveal"
                style={styleVars({ '--acc': p.cor })}
              >
                <ProgressRing value={prog.pct} color={p.cor} size={54} />
                <div className="pp-info">
                  <h4>{p.nome}</h4>
                  <span>
                    {prog.done}/{prog.total} aulas
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Próximo ao vivo */}
      {proximo && proximoPilar && (
        <section className="plat-section">
          <div
            className="live-banner reveal"
            style={styleVars({ '--acc': proximoPilar.cor })}
          >
            <span className="live-icon">
              <Icon name="video" size={22} />
            </span>
            <div>
              {aoVivo ? (
                <span className="badge-live">
                  <span className="live-dot" /> Ao vivo agora
                </span>
              ) : (
                <span className="eyebrow">Próximo encontro ao vivo</span>
              )}
              <h3 style={{ marginTop: 8, fontSize: '1.15rem' }}>{proximo.titulo}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>
                com {proximo.mentor} · {proximo.tema}
              </p>
            </div>
            <div className="live-when">
              {aoVivo ? (
                <Link href={`/plataforma/mentoria/ao-vivo/${proximo.id}`} className="btn btn-primary btn-sm">
                  Entrar agora <Icon name="arrow-right" size={15} />
                </Link>
              ) : (
                <>
                  <Countdown offsetMin={proximo.offsetMin} />
                  <Link
                    href={`/plataforma/mentoria/ao-vivo/${proximo.id}`}
                    className="see-all"
                    style={{ marginTop: 10, justifyContent: 'flex-end' }}
                  >
                    Ver detalhes <Icon name="arrow-right" size={13} />
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Recomendados */}
      <section className="plat-section">
        <div className="plat-section-head reveal">
          <h2>Recomendados para você</h2>
          <Link href="/plataforma/cursos" className="see-all">
            Ver todos <Icon name="arrow-right" size={14} />
          </Link>
        </div>
        <div className="plat-row">
          {recomendados.map((c) => (
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

      {/* Materiais */}
      <section className="plat-section">
        <div className="plat-section-head reveal">
          <h2>Materiais para aplicar hoje</h2>
          <Link href="/plataforma/materiais" className="see-all">
            Ver biblioteca <Icon name="arrow-right" size={14} />
          </Link>
        </div>
        <div className="plat-row">
          {materiais.slice(0, 4).map((m) => (
            <MaterialCard key={m.slug} mat={m} />
          ))}
        </div>
      </section>
    </>
  );
}
