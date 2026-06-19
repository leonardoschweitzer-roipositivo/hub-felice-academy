'use client';

import { useEffect, useState } from 'react';

/** Estado persistido em localStorage (namespaced kitf4:). SSR-safe. */
export function usePersistentState<T>(key: string, initial: T) {
  const fullKey = `kitf4:${key}`;
  const [value, setValue] = useState<T>(initial);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(fullKey);
      if (raw != null) setValue(JSON.parse(raw) as T);
    } catch {
      /* ignora JSON inválido */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullKey]);

  useEffect(() => {
    try {
      window.localStorage.setItem(fullKey, JSON.stringify(value));
    } catch {
      /* quota cheia / indisponível */
    }
  }, [fullKey, value]);

  return [value, setValue] as const;
}
