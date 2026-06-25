import type { Metadata } from 'next';
import { VendasOverview } from '@/components/plataforma/vendas/VendasOverview';

export const metadata: Metadata = { title: 'Vendas' };

export default function VendasPage() {
  return <VendasOverview />;
}
