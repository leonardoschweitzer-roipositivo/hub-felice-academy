import type { Metadata } from 'next';
import { getCurso } from '@/components/plataforma/data/cursos';
import { CoursePage } from '@/components/plataforma/cursos/CoursePage';

export function generateMetadata({ params }: { params: { curso: string } }): Metadata {
  const curso = getCurso(params.curso);
  return { title: curso ? curso.titulo : 'Curso' };
}

export default function CursoDetalhe({ params }: { params: { curso: string } }) {
  return <CoursePage cursoSlug={params.curso} />;
}
