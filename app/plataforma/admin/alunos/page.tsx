import type { Metadata } from 'next';
import { AdminAlunos } from '@/components/plataforma/admin/alunos/AdminAlunos';

export const metadata: Metadata = { title: 'Alunos · Admin' };

export default function AdminAlunosPage() {
  return <AdminAlunos />;
}
