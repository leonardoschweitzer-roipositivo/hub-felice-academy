'use client';

import { useState, useCallback } from 'react';
import { KIT_BASE } from '../../content';
import type { DocId } from '../../content/types';

export type ChatMsg = { role: 'user' | 'assistant'; content: string };
export type ChatMode = 'rag' | 'patient' | 'phone';

/** Transporte de chat com streaming para a rota /api/chat do Kit.
    Lida com 503 (chave ausente) de forma graciosa. */
export function useChatStream(mode: ChatMode, docId: DocId) {
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [pending, setPending] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || pending) return;
      setError(null);
      const next: ChatMsg[] = [...messages, { role: 'user', content: trimmed }];
      setMessages([...next, { role: 'assistant', content: '' }]);
      setPending(true);

      try {
        const res = await fetch(`${KIT_BASE}/api/chat/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: next, mode, docId }),
        });

        if (res.status === 503) {
          setUnavailable(true);
          setMessages(messages);
          return;
        }
        if (!res.ok || !res.body) {
          throw new Error(`Erro ${res.status}`);
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = '';
        // eslint-disable-next-line no-constant-condition
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          setMessages((m) => {
            const copy = [...m];
            copy[copy.length - 1] = { role: 'assistant', content: acc };
            return copy;
          });
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Falha na conexão.');
        setMessages(messages);
      } finally {
        setPending(false);
      }
    },
    [messages, mode, docId, pending],
  );

  const reset = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return { messages, pending, unavailable, error, send, reset };
}
