'use client';

import { useEffect, useState } from 'react';

/**
 * Estado persistido em localStorage (namespaced `feliceplat:`). SSR-safe:
 * inicia com `initial` no servidor e hidrata do storage após montar — evita
 * mismatch de hidratação. Mesmo padrão do Kit F4 (`usePersistentState`).
 */
export function usePersistentState<T>(key: string, initial: T) {
  const fullKey = `feliceplat:${key}`;
  const [value, setValue] = useState<T>(initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(fullKey);
      if (raw != null) setValue(JSON.parse(raw) as T);
    } catch {
      /* ignora JSON inválido */
    }
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullKey]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(fullKey, JSON.stringify(value));
    } catch {
      /* quota cheia / indisponível */
    }
  }, [fullKey, value, hydrated]);

  return [value, setValue, hydrated] as const;
}
