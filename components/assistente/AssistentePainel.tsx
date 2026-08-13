'use client';

/* ============================================================
   O painel da conversa.

   role="dialog" + aria-modal + foco preso dentro dele: o widget da ROI
   POSITIVO não tem nenhum dos três, e sem eles o leitor de tela sai
   passeando pela página atrás do painel aberto.
   ============================================================ */

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ASSISTENTE_NOME } from '@/lib/assistente/config';
import { Balao, Digitando } from './Balao';
import type { EstadoAssistente } from './useAssistente';

const FOCAVEIS =
  'a[href],button:not([disabled]),textarea:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';

export function AssistentePainel({
  estado,
  sugestoes,
  onFechar,
  onIrProduto,
}: {
  estado: EstadoAssistente;
  sugestoes: string[];
  onFechar: () => void;
  onIrProduto?: (slug: string) => void;
}) {
  const [texto, setTexto] = useState('');
  const painelRef = useRef<HTMLDivElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  /* Foco entra no campo ao abrir. */
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  /* Rola para a última mensagem. */
  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [estado.baloes, estado.enviando]);

  /* Escape fecha; Tab circula dentro do painel. */
  useEffect(() => {
    const el = painelRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onFechar();
        return;
      }
      if (e.key !== 'Tab') return;
      const focaveis = Array.from(el.querySelectorAll<HTMLElement>(FOCAVEIS)).filter(
        (n) => n.offsetParent !== null,
      );
      if (focaveis.length === 0) return;
      const primeiro = focaveis[0];
      const ultimo = focaveis[focaveis.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [onFechar]);

  const submeter = (e: FormEvent) => {
    e.preventDefault();
    const t = texto.trim();
    if (!t || estado.enviando) return;
    setTexto('');
    void estado.enviar(t);
  };

  const ultimo = estado.baloes[estado.baloes.length - 1];
  const esperando =
    estado.enviando && (!ultimo || ultimo.autor === 'voce' || !ultimo.partes[0]?.texto);

  return (
    <div
      className="fia-painel"
      id="fia-painel"
      role="dialog"
      aria-modal="true"
      aria-labelledby="fia-titulo"
      ref={painelRef}
    >
      <header className="fia-head">
        <span className="fia-avatar" aria-hidden="true">
          {ASSISTENTE_NOME.charAt(0)}
        </span>
        <span className="fia-head-txt">
          <strong id="fia-titulo">{ASSISTENTE_NOME}</strong>
          <small>Assistente virtual (IA)</small>
        </span>
        <button type="button" className="fia-fechar" onClick={onFechar} aria-label="Fechar o assistente">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      </header>

      <div
        className="fia-log"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
        aria-busy={estado.enviando}
        ref={logRef}
      >
        {estado.baloes.map((b) => (
          <Balao balao={b} key={b.id} onIrProduto={onIrProduto} />
        ))}
        {esperando && <Digitando />}
        {estado.erro && <p className="fia-erro">{estado.erro}</p>}
      </div>

      {!estado.comecou && sugestoes.length > 0 && (
        <div className="fia-chips">
          {sugestoes.map((s) => (
            <button type="button" className="fia-chip" key={s} onClick={() => void estado.enviar(s)}>
              {s}
            </button>
          ))}
        </div>
      )}

      <form className="fia-composer" onSubmit={submeter}>
        <textarea
          ref={inputRef}
          className="fia-input"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => {
            // Enter envia, Shift+Enter quebra linha — o que todo mundo
            // espera de um chat.
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              submeter(e);
            }
          }}
          placeholder="Escreva sua dúvida…"
          rows={1}
          maxLength={500}
          aria-label="Sua mensagem"
        />
        <button
          type="submit"
          className="fia-enviar"
          disabled={estado.enviando || !texto.trim()}
          aria-label="Enviar mensagem"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M3 20l18-8L3 4v6l12 2-12 2z" fill="currentColor" />
          </svg>
        </button>
      </form>

      <p className="fia-aviso">
        Assistente com IA — pode errar. O que for decisivo, confirme com a equipe.
      </p>
    </div>
  );
}
