import type { Metadata } from 'next';
import { AdminMateriais } from '@/components/plataforma/admin/materiais/AdminMateriais';

export const metadata: Metadata = { title: 'Materiais · Admin' };

export default function AdminMateriaisPage() {
  return <AdminMateriais />;
}
