'use client';

import { Checklist } from './Checklist';
import { PRODUCTION_ITEMS } from '../content/toolsData';

/** Checklist de produção de vídeos (luz, áudio, legendas, lote, ética). */
export function ProductionChecklist() {
  return <Checklist id="producao-video" title="Checklist de produção" items={PRODUCTION_ITEMS} />;
}
