'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Icon, type IconName } from './icons';

type NavItem = {
  href: string;
  label: string;
  icon: IconName;
  badge?: string;
  hash?: boolean;
  children?: NavItem[];
};

const NAV: NavItem[] = [
  { href: '/plataforma', label: 'Início', icon: 'home' },
  { href: '/plataforma/cursos', label: 'Cursos', icon: 'cursos' },
  { href: '/plataforma/mentoria', label: 'Mentoria', icon: 'mentoria', badge: 'AO VIVO' },
  { href: '/plataforma/materiais', label: 'Materiais', icon: 'materiais' },
  {
    href: '/plataforma/vendas',
    label: 'Vendas',
    icon: 'vendas',
    children: [
      { href: '/plataforma/vendas/pipeline', label: 'Pipeline', icon: 'kanban' },
      { href: '/plataforma/vendas/leads', label: 'Leads', icon: 'target' },
      { href: '/plataforma/vendas/clientes', label: 'Clientes', icon: 'user-check' },
      { href: '/plataforma/vendas/atendimento', label: 'Atendimento', icon: 'whatsapp' },
      { href: '/plataforma/vendas/automacoes', label: 'Automação', icon: 'workflow' },
    ],
  },
];

const NAV_SEC: NavItem[] = [
  { href: '/plataforma/mentoria#comunidade', label: 'Comunidade', icon: 'comunidade', hash: true },
];

export function PlatformSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  // Grupos abertos manualmente; grupos cuja rota está ativa abrem automaticamente.
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const isActive = (item: NavItem) => {
    if (item.hash) return false;
    if (item.href === '/plataforma') return pathname === '/plataforma';
    return pathname.startsWith(item.href);
  };

  const renderLeaf = (item: NavItem, sub = false) => (
    <li key={item.href}>
      <Link
        href={item.href}
        className={`plat-nav-item${sub ? ' plat-nav-sub' : ''}${
          (sub ? pathname === item.href : isActive(item)) ? ' is-active' : ''
        }`}
        onClick={onClose}
      >
        <Icon name={item.icon} size={sub ? 17 : 19} />
        <span>{item.label}</span>
        {item.badge && <span className="nav-badge">{item.badge}</span>}
      </Link>
    </li>
  );

  const renderGroup = (item: NavItem) => {
    const children = item.children!;
    const groupActive = isActive(item);
    const expanded = openGroups[item.href] ?? groupActive;
    return (
      <li key={item.href}>
        <div className="plat-nav-group">
          <Link
            href={item.href}
            className={`plat-nav-item plat-nav-parent${groupActive ? ' is-active' : ''}`}
            onClick={onClose}
          >
            <Icon name={item.icon} size={19} />
            <span>{item.label}</span>
          </Link>
          <button
            type="button"
            className={`plat-nav-toggle${expanded ? ' is-open' : ''}`}
            aria-label={expanded ? `Recolher ${item.label}` : `Expandir ${item.label}`}
            aria-expanded={expanded}
            onClick={() => setOpenGroups((g) => ({ ...g, [item.href]: !expanded }))}
          >
            <Icon name="chevron-down" size={16} />
          </button>
        </div>
        {expanded && <ul className="plat-subnav">{children.map((c) => renderLeaf(c, true))}</ul>}
      </li>
    );
  };

  const renderItem = (item: NavItem) =>
    item.children ? renderGroup(item) : renderLeaf(item);

  return (
    <aside className={`plat-sidebar${open ? ' open' : ''}`} aria-label="Navegação da plataforma">
      <Link href="/plataforma" className="brand" onClick={onClose}>
        <span className="badge">F</span>
        <span>
          Felice<small>Academy</small>
        </span>
      </Link>

      <nav>
        <ul className="plat-nav">{NAV.map(renderItem)}</ul>
        <div className="plat-nav-label">Conexão</div>
        <ul className="plat-nav">{NAV_SEC.map(renderItem)}</ul>
      </nav>

      <div className="plat-upgrade">
        <h4>Mentoria Felice</h4>
        <p>Encontros ao vivo, hot seats e comunidade com o Dr. Sócrates.</p>
        <Link href="/plataforma/mentoria" className="btn btn-primary btn-sm btn-block" onClick={onClose}>
          Acessar mentoria
        </Link>
      </div>

      <Link
        href="/plataforma/admin"
        className="plat-nav-item"
        onClick={onClose}
        style={{ marginTop: 8, fontSize: '0.85rem' }}
      >
        <Icon name="gestao" size={18} />
        <span>Administração</span>
      </Link>
      <Link
        href="/"
        className="plat-nav-item"
        onClick={onClose}
        style={{ fontSize: '0.85rem' }}
      >
        <Icon name="chevron-left" size={18} />
        <span>Voltar ao site</span>
      </Link>
    </aside>
  );
}
