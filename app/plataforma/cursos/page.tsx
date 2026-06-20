import type { Metadata } from 'next';
import { CoursesIndex } from '@/components/plataforma/cursos/CoursesIndex';

export const metadata: Metadata = { title: 'Cursos' };

export default function CursosPage() {
  return <CoursesIndex />;
}
