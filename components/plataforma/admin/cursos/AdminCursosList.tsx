'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '../../icons';
import { getPilar } from '../../data/pilares';
import { aulasDoCurso } from '../../data/cursos';
import { useStore } from '../../store/PlatformStore';
import { styleVars } from '../../util';

export function AdminCursosList() {
  const { cursos, deleteCurso } = useStore();
  const [q, setQ] = useState('');

  const filtrados = cursos.filter((c) => c.titulo.toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <div className="admin-page-head">
        <div>
          <span className="eyebrow">Cursos</span>
          <h1>Gerenciar cursos</h1>
          <p>Crie, edite e organize os cursos dos 4 pilares.</p>
        </div>
        <Link href="/plataforma/admin/cursos/novo" className="btn btn-primary btn-sm">
          <Icon name="plus" size={15} /> Novo curso
        </Link>
      </div>

      <div className="admin-toolbar">
        <span className="at-search">
          <Icon name="search" size={16} />
          <input
            type="search"
            placeholder="Buscar curso…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </span>
        <span className="at-spacer" />
        <span style={{ fontSize: '0.85rem', color: 'var(--muted-2)' }}>
          {filtrados.length} curso{filtrados.length === 1 ? '' : 's'}
        </span>
      </div>

      {filtrados.length === 0 ? (
        <div className="empty-admin">Nenhum curso encontrado.</div>
      ) : (
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Curso</th>
                <th>Pilar</th>
                <th>Nível</th>
                <th>Aulas</th>
                <th>Selo</th>
                <th aria-label="Ações" />
              </tr>
            </thead>
            <tbody>
              {filtrados.map((c) => {
                const p = getPilar(c.pilar);
                return (
                  <tr key={c.slug}>
                    <td>
                      <div className="cell-title">{c.titulo}</div>
                      <div className="cell-sub">{c.subtitulo}</div>
                    </td>
                    <td>
                      <span className="pilar-badge" style={styleVars({ '--acc': p.cor })}>
                        <span className="pilar-dot" />
                        {p.nome}
                      </span>
                    </td>
                    <td>{c.nivel}</td>
                    <td>{aulasDoCurso(c).length}</td>
                    <td>
                      {c.selo ? (
                        <span className={`selo selo--${c.selo === 'novo' ? 'novo' : 'alta'}`}>
                          {c.selo === 'novo' ? 'Novo' : 'Em alta'}
                        </span>
                      ) : (
                        <span style={{ color: 'var(--muted-2)' }}>—</span>
                      )}
                    </td>
                    <td className="td-actions">
                      <Link
                        href={`/plataforma/admin/cursos/${c.slug}`}
                        className="icon-btn-sm"
                        aria-label="Editar"
                      >
                        <Icon name="file-text" size={15} />
                      </Link>
                      <button
                        type="button"
                        className="icon-btn-sm danger"
                        aria-label="Excluir"
                        onClick={() => {
                          if (window.confirm(`Excluir o curso "${c.titulo}"?`)) deleteCurso(c.slug);
                        }}
                      >
                        <Icon name="x" size={15} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
