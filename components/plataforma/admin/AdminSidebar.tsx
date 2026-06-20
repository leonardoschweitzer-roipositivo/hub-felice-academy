'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon, type IconName } from '../icons';

type Item = { href: string; label: string; icon: IconName };

const NAV: Item[] = [
  { href: '/plataforma/admin', label: 'Dashboard', icon: 'home' },
  { href: '/plataforma/admin/cursos', label: 'Cursos', icon: 'cursos' },
  { href: '/plataforma/admin/encontros', label: 'Encontros ao vivo', icon: 'video' },
  { href: '/plataforma/admin/materiais', label: 'Materiais', icon: 'materiais' },
  { href: '/plataforma/admin/alunos', label: 'Alunos', icon: 'mentoria' },
];

export function AdminSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/plataforma/admin' ? pathname === href : pathname.startsWith(href);

  return (
    <aside className={`plat-sidebar${open ? ' open' : ''}`} aria-label="Navegação do admin">
      <Link href="/plataforma/admin" className="brand" onClick={onClose}>
        <span className="badge">F</span>
        <span>
          Felice<small>Academy</small>
        </span>
        <span className="admin-tag">ADMIN</span>
      </Link>

      <nav>
        <div className="plat-nav-label">Gestão</div>
        <ul className="plat-nav">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`plat-nav-item${isActive(item.href) ? ' is-active' : ''}`}
                onClick={onClose}
              >
                <Icon name={item.icon} size={19} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="plat-upgrade" style={{ marginTop: 'auto' }}>
        <h4>Visão do aluno</h4>
        <p>Veja a plataforma exatamente como o aluno vê.</p>
        <Link href="/plataforma" className="btn btn-ghost btn-sm btn-block" onClick={onClose}>
          Ver como aluno
        </Link>
      </div>

      <Link
        href="/"
        className="plat-nav-item"
        onClick={onClose}
        style={{ marginTop: 8, fontSize: '0.85rem' }}
      >
        <Icon name="chevron-left" size={18} />
        <span>Voltar ao site</span>
      </Link>
    </aside>
  );
}
