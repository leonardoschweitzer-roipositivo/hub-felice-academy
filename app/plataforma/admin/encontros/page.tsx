import type { Metadata } from 'next';
import { AdminEncontros } from '@/components/plataforma/admin/encontros/AdminEncontros';

export const metadata: Metadata = { title: 'Encontros · Admin' };

export default function AdminEncontrosPage() {
  return <AdminEncontros />;
}
