'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { DocMeta } from './content/types';
import { getSavedProgress } from './useReadingProgress';

/** Card de documento (estilo janela de navegador) com progresso de leitura. */
export function KitDocCard({ doc, index }: { doc: DocMeta; index: number }) {
  const [progress, setProgress] = useState<{ percent: number; done: boolean }>({ percent: 0, done: false });

  useEffect(() => {
    setProgress(getSavedProgress(doc.id));
  }, [doc.id]);

  return (
    <Link href={doc.href} className="hub-card kit-doccard">
      <div className="hub-card-bar">
        <span className="hub-dot" />
        <span className="hub-dot" />
        <span className="hub-dot" />
        <span className="hub-card-num">{doc.num}</span>
      </div>

      <div className="hub-card-body">
        <span className="hub-tag">{doc.categoria}</span>
        <h3>{doc.title}</h3>
        <p>{doc.descricao}</p>

        <div className="kit-doccard-progress">
          <div className="kit-doccard-bar">
            <span style={{ width: `${progress.percent}%` }} />
          </div>
          <span className="kit-doccard-pct">
            {progress.done ? '✓ Concluído' : progress.percent > 0 ? `${progress.percent}% lido` : `⏱ ${doc.readingMinutes} min`}
          </span>
        </div>

        <div className="hub-card-foot">
          <span className="hub-state hub-state--on">Disponível</span>
          <span className="hub-card-cta">
            {progress.percent > 0 ? 'Continuar' : 'Abrir'}
            <span className="arrow"> →</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
