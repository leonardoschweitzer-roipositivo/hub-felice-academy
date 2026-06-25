import type { Metadata } from 'next';
import { ClientesList } from '@/components/plataforma/vendas/ClientesList';

export const metadata: Metadata = { title: 'Clientes' };

export default function ClientesPage() {
  return <ClientesList />;
}
