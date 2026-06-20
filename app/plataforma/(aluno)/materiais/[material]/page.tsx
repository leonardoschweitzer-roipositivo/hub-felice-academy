import type { Metadata } from 'next';
import { getMaterial } from '@/components/plataforma/data/materiais';
import { MaterialPage } from '@/components/plataforma/materiais/MaterialPage';

export function generateMetadata({ params }: { params: { material: string } }): Metadata {
  const mat = getMaterial(params.material);
  return { title: mat ? mat.titulo : 'Material' };
}

export default function MaterialDetalhe({ params }: { params: { material: string } }) {
  return <MaterialPage slug={params.material} />;
}
