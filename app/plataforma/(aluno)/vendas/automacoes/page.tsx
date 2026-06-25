import type { Metadata } from 'next';
import { Automacoes } from '@/components/plataforma/vendas/Automacoes';

export const metadata: Metadata = { title: 'Automação' };

export default function AutomacoesPage() {
  return <Automacoes />;
}
