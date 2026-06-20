import type { Metadata } from 'next';
import { DocLayout } from '@/components/kit-f4/DocLayout';
import { getDoc } from '@/components/kit-f4/content';

export const metadata: Metadata = {
  title: 'Manual de Atendimento — Recepção · Kit F4',
};

export default function AtendimentoPage() {
  return <DocLayout doc={getDoc('atendimento')} />;
}
