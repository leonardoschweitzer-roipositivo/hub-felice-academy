'use client';

import { useRef } from 'react';
import { useUrgencyHeight } from '@/components/felice/ui/useUrgencyHeight';

/**
 * Barra superior de escassez autêntica, sem countdown: entrada por aplicação e
 * vagas limitadas (a prática presencial exige turmas pequenas). Reusa o visual
 * `.urgency-bar` e mede a própria altura para expor `--urgency-h`.
 */
export function MentoriaZigomaticoTopBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useUrgencyHeight(barRef);

  return (
    <div className="urgency-bar" ref={barRef}>
      <div className="wrap urgency-bar-inner">
        <span className="mz-vagas">
          <span className="mz-vagas-dot" /> Turmas pequenas · poucas vagas
        </span>
        <span className="urgency-sep" />
        <span className="mz-vagas" style={{ fontWeight: 600 }}>
          Encontros presenciais · entrada por aplicação
        </span>
      </div>
    </div>
  );
}
