'use client';

import { Icon } from './icons';
import { ALUNO } from './data/aluno';

export function PlatformTopbar({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="plat-topbar">
      <button type="button" className="plat-menu-btn" onClick={onMenu} aria-label="Abrir menu">
        <Icon name="menu" size={20} />
      </button>

      <label className="plat-search">
        <Icon name="search" size={17} />
        <input type="search" placeholder="Buscar cursos, materiais, aulas…" aria-label="Buscar" />
        <span className="search-hint" style={{ fontSize: '0.72rem' }}>
          ⌘K
        </span>
      </label>

      <div className="plat-topbar-actions">
        <span className="plat-streak" title="Sequência de dias estudando">
          <Icon name="flame" size={15} />
          {ALUNO.streakDias}
          <span className="lbl"> dias</span>
        </span>
        <button type="button" className="plat-icon-btn" aria-label="Notificações">
          <Icon name="bell" size={18} />
          <span className="ping" />
        </button>
        <span className="plat-avatar" title={ALUNO.nome}>
          {ALUNO.iniciais}
        </span>
      </div>
    </header>
  );
}
