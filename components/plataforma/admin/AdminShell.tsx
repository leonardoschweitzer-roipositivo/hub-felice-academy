'use client';

import { useState } from 'react';
import Link from 'next/link';
import '@/styles/felice.css';
import '@/styles/plataforma.css';
import '@/styles/admin.css';

import { AdminSidebar } from './AdminSidebar';
import { Icon } from '../icons';

/** Casca do console admin: reusa o layout `.plataforma` (sidebar/topbar) com
    a variação `.admin`. Vive sob /plataforma, mas fora do shell do aluno. */
export function AdminShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="felice plataforma admin" id="topo">
      <AdminSidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={`plat-overlay${menuOpen ? ' show' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div className="plat-main">
        <header className="plat-topbar">
          <button
            type="button"
            className="plat-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Icon name="menu" size={20} />
          </button>
          <span className="admin-topbar-title">Administração</span>
          <div className="plat-topbar-actions">
            <Link href="/plataforma" className="btn btn-ghost btn-sm">
              <Icon name="cursos" size={15} /> Ver como aluno
            </Link>
            <span className="plat-avatar" title="Administrador">
              AD
            </span>
          </div>
        </header>

        <div className="plat-content">{children}</div>
      </div>
    </div>
  );
}
