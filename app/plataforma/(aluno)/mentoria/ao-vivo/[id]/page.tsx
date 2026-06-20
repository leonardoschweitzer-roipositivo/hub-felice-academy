import type { Metadata } from 'next';
import { getEncontro } from '@/components/plataforma/data/mentoria';
import { LiveSessionPage } from '@/components/plataforma/mentoria/LiveSessionPage';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const encontro = getEncontro(params.id);
  return { title: encontro ? encontro.titulo : 'Encontro ao vivo' };
}

export default function AoVivoPage({ params }: { params: { id: string } }) {
  return <LiveSessionPage id={params.id} />;
}
