'use client';

import { useState } from 'react';
import type { DocId } from '../../content/types';
import { useChatStream, type ChatMode } from './useChatStream';

type Props = {
  mode: ChatMode;
  docId: DocId;
  placeholder: string;
  emptyHint: string;
};

/** UI base de chat reutilizada pelo RagChat e pelo RolePlaySimulator. */
export function ChatPanel({ mode, docId, placeholder, emptyHint }: Props) {
  const { messages, pending, unavailable, error, send, reset } = useChatStream(mode, docId);
  const [input, setInput] = useState('');

  if (unavailable) {
    return (
      <div className="kit-chat kit-chat--off">
        <p>🔒 Recurso de IA indisponível: a chave de API ainda não foi configurada.</p>
        <p className="kit-chat-hint">Configure <code>ANTHROPIC_API_KEY</code> para ativar este assistente.</p>
      </div>
    );
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
    setInput('');
  };

  return (
    <div className="kit-chat">
      <div className="kit-chat-log">
        {messages.length === 0 && <p className="kit-chat-empty">{emptyHint}</p>}
        {messages.map((m, i) => (
          <div key={i} className={`kit-chat-msg kit-chat-msg--${m.role}`}>
            {m.content || (pending && i === messages.length - 1 ? <span className="kit-chat-typing">…</span> : '')}
          </div>
        ))}
        {error && <p className="kit-chat-error">{error}</p>}
      </div>

      <form className="kit-chat-form" onSubmit={submit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          disabled={pending}
        />
        <button type="submit" className="btn btn-primary" disabled={pending || !input.trim()}>
          {pending ? '…' : 'Enviar'}
        </button>
      </form>
      {messages.length > 0 && (
        <button type="button" className="kit-link-btn" onClick={reset}>
          Limpar conversa
        </button>
      )}
    </div>
  );
}
