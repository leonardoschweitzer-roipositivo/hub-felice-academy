import Link from 'next/link';
import { Check } from '@/components/felice/ui/icons';
import type { MentoriaOpcao } from './content';

/* Card grande de escolha de mentoria (2 por linha no desktop). O card
   inteiro é clicável (Link), com badge de formato, bullets e CTA. */
export function MentoriaChoiceCard({ opcao }: { opcao: MentoriaOpcao }) {
  const { formato, titulo, subtitulo, bullets, href, cta, destaque } = opcao;

  return (
    <Link href={href} className={`ment-card${destaque ? ' ment-card--featured' : ''}`}>
      <span className="ment-card-tag">{formato}</span>
      <h3>{titulo}</h3>
      <p className="ment-card-sub">{subtitulo}</p>

      <ul className="ment-card-list">
        {bullets.map((b) => (
          <li key={b}>
            <Check size={18} stroke="currentColor" /> {b}
          </li>
        ))}
      </ul>

      <span className="ment-card-cta">
        {cta} <span className="arrow">→</span>
      </span>
    </Link>
  );
}
