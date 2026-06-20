'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon, type IconName } from './icons';

type NavItem = { href: string; label: string; icon: IconName; badge?: string; hash?: boolean };

const NAV: NavItem[] = [
  { href: '/plataforma', label: 'Início', icon: 'home' },
  { href: '/plataforma/cursos', label: 'Cursos', icon: 'cursos' },
  { href: '/plataforma/mentoria', label: 'Mentoria', icon: 'mentoria', badge: 'AO VIVO' },
  { href: '/plataforma/materiais', label: 'Materiais', icon: 'materiais' },
];

const NAV_SEC: NavItem[] = [
  { href: '/plataforma/mentoria#comunidade', label: 'Comunidade', icon: 'comunidade', hash: true },
];

export function PlatformSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  const isActive = (item: NavItem) => {
    if (item.hash) return false;
    if (item.href === '/plataforma') return pathname === '/plataforma';
    return pathname.startsWith(item.href);
  };

  const renderItem = (item: NavItem) => (
    <li key={item.href}>
      <Link
        href={item.href}
        className={`plat-nav-item${isActive(item) ? ' is-active' : ''}`}
        onClick={onClose}
      >
        <Icon name={item.icon} size={19} />
        <span>{item.label}</span>
        {item.badge && <span className="nav-badge">{item.badge}</span>}
      </Link>
    </li>
  );

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
