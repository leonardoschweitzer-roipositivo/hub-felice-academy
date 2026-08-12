'use client';

import { useRef } from 'react';
import { useUrgencyHeight } from '@/components/felice/ui/useUrgencyHeight';

/**
 * Barra superior de escassez AUTÊNTICA, sem countdown: a consultoria é
 * conduzida para poucas clínicas por vez e a entrada é por aplicação.
 * Reusa o visual dourado `.urgency-bar` do felice.css e mede a própria
 * altura para expor `--urgency-h` (o header e o hero descem o necessário).
 */
export function ConsultoriaTopBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useUrgencyHeight(barRef);

  return (
    <div className="urgency-bar" ref={barRef}>
      <div className="wrap urgency-bar-inner">
        <span className="mz-vagas">
          <span className="mz-vagas-dot" /> Poucas clínicas por vez
        </span>
        <span className="urgency-sep" />
        <span className="mz-vagas" style={{ fontWeight: 600 }}>
          Entrada por aplicação · resposta rápida
        </span>
      </div>
    </div>
  );
}
