'use client';

import { useState } from 'react';

/** Botão que copia um valor (hex, token, snippet) e avisa por 1,2s. */
export function CopyToken({ valor, rotulo, className }: { valor: string; rotulo?: string; className?: string }) {
  const [ok, setOk] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(valor);
      setOk(true);
      setTimeout(() => setOk(false), 1200);
    } catch {
      // Clipboard bloqueado (iframe, http): o valor continua visível na tela.
    }
  }

  return (
    <button type="button" className={`ds-copy ${className ?? ''}`} onClick={copiar} title="Copiar">
      <span>{ok ? 'Copiado' : (rotulo ?? valor)}</span>
    </button>
  );
}
