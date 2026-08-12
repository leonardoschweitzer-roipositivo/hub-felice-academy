'use client';

import { useRef } from 'react';
import { useUrgencyHeight } from '@/components/felice/ui/useUrgencyHeight';

/**
 * Barra superior de escassez AUTÊNTICA, sem countdown: a entrada da mentoria é
 * por aplicação e as vagas são limitadas por turma. Reusa o visual dourado
 * `.urgency-bar` do felice.css e mede a própria altura para expor `--urgency-h`
 * (o header e o hero descem o necessário).
 */
export function MentoriaGestaoTopBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useUrgencyHeight(barRef);

  return (
    <div className="urgency-bar" ref={barRef}>
      <div className="wrap urgency-bar-inner">
        <span className="mz-vagas">
          <span className="mz-vagas-dot" /> Poucas vagas por turma
        </span>
        <span className="urgency-sep" />
        <span className="mz-vagas" style={{ fontWeight: 600 }}>
          Entrada por aplicação · resposta rápida
        </span>
      </div>
    </div>
  );
}
