import type { Metadata } from 'next';
import { DocLayout } from '@/components/kit-f4/DocLayout';
import { getDoc } from '@/components/kit-f4/content';

export const metadata: Metadata = {
  title: 'Guia Estratégico de Marketing · Kit F4',
};

export default function MarketingPage() {
  return <DocLayout doc={getDoc('marketing')} />;
}
