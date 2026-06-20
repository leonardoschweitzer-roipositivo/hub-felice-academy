import type { Metadata } from 'next';
import { getAula, getCurso } from '@/components/plataforma/data/cursos';
import { LessonPlayer } from '@/components/plataforma/cursos/LessonPlayer';

export function generateMetadata({
  params,
}: {
  params: { curso: string; aula: string };
}): Metadata {
  const curso = getCurso(params.curso);
  const aula = curso ? getAula(curso, params.aula) : undefined;
  return { title: aula ? aula.titulo : 'Aula' };
}

export default function AulaPage({ params }: { params: { curso: string; aula: string } }) {
  return <LessonPlayer cursoSlug={params.curso} aulaSlug={params.aula} />;
}
