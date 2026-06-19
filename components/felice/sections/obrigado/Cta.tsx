import { CONSULTORIA_URL } from './config';

/* Botão primário reutilizável: leva sempre ao agendamento da consultoria.
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
    <a href={CONSULTORIA_URL} target="_blank" rel="noopener noreferrer" className={cls}>
      {label} <span className="arrow">→</span>
    </a>
  );
}
