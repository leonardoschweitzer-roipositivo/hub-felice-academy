import { CourseEditor } from '@/components/plataforma/admin/cursos/CourseEditor';

export default function CourseEditorPage({ params }: { params: { id: string } }) {
  return <CourseEditor id={params.id} />;
}
