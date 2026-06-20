import type { Metadata } from 'next';
import { DocLayout } from '@/components/kit-f4/DocLayout';
import { getDoc } from '@/components/kit-f4/content';

export const metadata: Metadata = {
  title: 'POP — Procedimento Operacional Padrão · Kit F4',
};

export default function PopPage() {
  return <DocLayout doc={getDoc('pop')} />;
}
