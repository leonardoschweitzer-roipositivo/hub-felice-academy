'use client';

import Link from 'next/link';
import { Icon } from '../icons';
import { getPilar } from '../data/pilares';
import { aulasDoCurso } from '../data/cursos';
import { statusEncontro } from '../data/mentoria';
import { useStore } from '../store/PlatformStore';
import { styleVars } from '../util';

function quandoLabel(offsetMin: number): string {
  if (offsetMin <= 0) return 'agora';
  if (offsetMin < 60) return `em ${Math.round(offsetMin)}min`;
  if (offsetMin < 1440) return `em ${Math.round(offsetMin / 60)}h`;
  return `em ${Math.round(offsetMin / 1440)} dias`;
}

export function AdminDashboard() {
  const { cursos, encontros, materiais, alunos, resetData } = useStore();

  const totalAulas = cursos.reduce((acc, c) => acc + aulasDoCurso(c).length, 0);
  const ativos = alunos.filter((a) => a.status === 'ativo').length;
  const proximos = encontros
    .filter((e) => statusEncontro(e) !== 'encerrado')
    .sort((a, b) => a.offsetMin - b.offsetMin);

  const metrics = [
    { icon: 'cursos' as const, num: cursos.length, label: 'Cursos publicados' },
    { icon: 'play' as const, num: totalAulas, label: 'Aulas no total' },
    { icon: 'mentoria' as const, num: ativos, label: 'Alunos ativos' },
    { icon: 'video' as const, num: proximos.length, label: 'Encontros agendados' },
  ];

  return (
    <>
      <div className="admin-page-head">
        <div>
          <span className="eyebrow">Dashboard</span>
          <h1>Visão geral</h1>
          <p>Gerencie cursos, encontros, materiais e alunos da Felice Academy.</p>
        </div>
        <div className="quick-actions">
          <Link href="/plataforma/admin/cursos/novo" className="btn btn-primary btn-sm">
            <Icon name="plus" size={15} /> Novo curso
          </Link>
          <Link href="/plataforma/admin/encontros" className="btn btn-ghost btn-sm">
            <Icon name="calendar" size={15} /> Agendar encontro
          </Link>
        </div>
      </div>

      <div className="metric-grid">
        {metrics.map((m) => (
          <div className="metric-card" key={m.label}>
            <span className="mc-ico">
              <Icon name={m.icon} size={20} />
            </span>
            <div className="mc-num">{m.num}</div>
            <div className="mc-label">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="admin-cols">
        <div className="panel">
          <div className="panel-head">
            <h3>Próximos encontros ao vivo</h3>
            <Link href="/plataforma/admin/encontros" className="see-all">
              Gerenciar <Icon name="arrow-right" size={13} />
            </Link>
          </div>
          <div className="panel-body">
            {proximos.length === 0 ? (
              <div className="empty-admin" style={{ margin: 16 }}>
                Nenhum encontro agendado.
              </div>
            ) : (
              proximos.map((e) => {
                const p = getPilar(e.pilar);
                const live = statusEncontro(e) === 'ao-vivo';
                return (
                  <div className="mini-row" key={e.id} style={styleVars({ '--acc': p.cor })}>
                    <span className="mr-ico">
                      <Icon name="video" size={17} />
                    </span>
                    <div className="mr-body">
                      <b>{e.titulo}</b>
                      <span>
                        {e.mentor} · {p.nome}
                      </span>
                    </div>
                    <span className={`status-badge st-${live ? 'ao-vivo' : 'agendado'}`}>
                      {live ? 'ao vivo' : quandoLabel(e.offsetMin)}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h3>Cursos recentes</h3>
            <Link href="/plataforma/admin/cursos" className="see-all">
              Gerenciar <Icon name="arrow-right" size={13} />
            </Link>
          </div>
          <div className="panel-body">
            {cursos.slice(0, 5).map((c) => {
              const p = getPilar(c.pilar);
              return (
                <Link
                  href={`/plataforma/admin/cursos/${c.slug}`}
                  className="mini-row"
                  key={c.slug}
                  style={styleVars({ '--acc': p.cor })}
                >
                  <span className="mr-ico">
                    <Icon name={p.icone} size={17} />
                  </span>
                  <div className="mr-body">
                    <b>{c.titulo}</b>
                    <span>
                      {p.nome} · {aulasDoCurso(c).length} aulas
                    </span>
                  </div>
                  <Icon name="chevron-right" size={16} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={() => {
            if (window.confirm('Restaurar os dados de exemplo? Suas edições mockadas serão descartadas.'))
              resetData();
          }}
        >
          <Icon name="zap" size={15} /> Restaurar dados de exemplo
        </button>
        <span style={{ fontSize: '0.82rem', color: 'var(--muted-2)' }}>
          Protótipo — dados salvos apenas neste navegador (localStorage).
        </span>
      </div>
    </>
  );
}
