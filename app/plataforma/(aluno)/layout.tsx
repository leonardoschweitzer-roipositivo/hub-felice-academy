import { PlatformShell } from '@/components/plataforma/PlatformShell';

/** Shell visual da área do aluno (sidebar + topbar). Grupo de rota `(aluno)`
    — transparente na URL: as rotas continuam /plataforma, /plataforma/cursos, … */
export default function AlunoLayout({ children }: { children: React.ReactNode }) {
  return <PlatformShell>{children}</PlatformShell>;
}
