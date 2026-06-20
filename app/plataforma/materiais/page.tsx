import type { Metadata } from 'next';
import { MaterialLibrary } from '@/components/plataforma/materiais/MaterialLibrary';

export const metadata: Metadata = { title: 'Materiais' };

export default function MateriaisPage() {
  return <MaterialLibrary />;
}
