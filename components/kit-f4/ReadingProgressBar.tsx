'use client';

/** Barra fina de progresso de leitura fixada no topo da página. */
export function ReadingProgressBar({ percent }: { percent: number }) {
  return (
    <div className="kit-readbar" role="progressbar" aria-label="Progresso de leitura"
      aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
      <span className="kit-readbar-fill" style={{ width: `${percent}%` }} />
    </div>
  );
}
