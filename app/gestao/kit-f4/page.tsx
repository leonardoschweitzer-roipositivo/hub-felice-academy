import type { Metadata } from 'next';
import { KitIndex } from '@/components/kit-f4/KitIndex';

export const metadata: Metadata = {
  title: 'Kit Sistema de Gestão F4 · Felice Academy',
  description:
    'Os 4 documentos do Kit F4 em formato web interativo: POP, Atendimento, CRC e Marketing — com scripts, checklists e ferramentas.',
};

export default function KitF4IndexPage() {
  return <KitIndex />;
}
