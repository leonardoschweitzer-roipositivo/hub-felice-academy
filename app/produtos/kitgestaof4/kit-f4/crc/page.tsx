import type { Metadata } from 'next';
import { DocLayout } from '@/components/kit-f4/DocLayout';
import { getDoc } from '@/components/kit-f4/content';

export const metadata: Metadata = {
  title: 'Manual da CRC — Agendamento · Kit F4',
};

export default function CrcPage() {
  return <DocLayout doc={getDoc('crc')} />;
}
