'use client';

import { useRef } from 'react';
import { CountdownTimer } from './CountdownTimer';
import { LiveViewers } from './LiveViewers';
import { useUrgencyHeight } from './useUrgencyHeight';

/**
 * Barra de urgência fixa no topo da página: contador regressivo da oferta +
 * prova social ("X pessoas vendo agora"). Fica visível o tempo todo.
 *
 * Esta é a barra do Kit F4: o contador é rolante (8 min, reinicia a cada
 * visita) e nunca vence, então ela não sai do DOM. Barra presa a um prazo
 * real de lote ou turma é a <ScarcityBar />.
 */
export function UrgencyBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useUrgencyHeight(barRef);

  return (
    <div className="urgency-bar" ref={barRef}>
      <div className="wrap urgency-bar-inner">
        <CountdownTimer minutes={8} />
        <span className="urgency-sep" />
        <LiveViewers />
      </div>
    </div>
  );
}
