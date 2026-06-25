import type { Metadata } from 'next';
import { Atendimento } from '@/components/plataforma/vendas/Atendimento';

export const metadata: Metadata = { title: 'Atendimento' };

export default function AtendimentoPage() {
  return <Atendimento />;
}
