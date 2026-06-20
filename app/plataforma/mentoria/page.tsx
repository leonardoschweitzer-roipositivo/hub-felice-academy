import type { Metadata } from 'next';
import { MentoriaRoom } from '@/components/plataforma/mentoria/MentoriaRoom';

export const metadata: Metadata = { title: 'Mentoria' };

export default function MentoriaPage() {
  return <MentoriaRoom />;
}
