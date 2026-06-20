import type { Metadata } from 'next';
import { AdminCursosList } from '@/components/plataforma/admin/cursos/AdminCursosList';

export const metadata: Metadata = { title: 'Cursos · Admin' };

export default function AdminCursosPage() {
  return <AdminCursosList />;
}
