import type { Metadata } from 'next';
import { PipelineBoard } from '@/components/plataforma/vendas/PipelineBoard';

export const metadata: Metadata = { title: 'Pipeline de Vendas' };

export default function PipelinePage() {
  return <PipelineBoard />;
}
