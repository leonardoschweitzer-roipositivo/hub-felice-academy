import Link from 'next/link';
import { QUESTIONARIO_URL } from './config';

/* Botão primário reutilizável: leva ao questionário de qualificação.
   Mantém o objetivo único da página em todos os pontos de conversão. */
export function CtaConsultoria({
  label = 'Agendar minha consultoria gratuita',
  size,
  block,
}: {
  label?: string;
  size?: 'lg';
  block?: boolean;
}) {
  const cls = ['btn', 'btn-primary', size === 'lg' ? 'btn-lg' : '', block ? 'btn-block' : '']
    .filter(Boolean)
    .join(' ');
  return (
    <Link href={QUESTIONARIO_URL} className={cls}>
      {label} <span className="arrow">→</span>
    </Link>
  );
}
