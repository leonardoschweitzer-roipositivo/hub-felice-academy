'use client';

import { useEffect, useRef, useState } from 'react';
import { LiveViewers } from './LiveViewers';
import { useUrgencyHeight } from './useUrgencyHeight';

/**
 * Barra de escassez fixa no topo, com contagem regressiva até um prazo real
 * (`deadlineIso`) e, opcionalmente, a linha de vagas e o "X pessoas vendo
 * esta página agora".
 *
 * Substitui os 4 `*DeadlineBar.tsx` que eram forks quase byte a byte
 * (maestria, vendas-secretaria, recepcao-alta-performance, masterclass).
 * Usa o visual dourado `.urgency-bar` do felice.css e o relógio de 4
 * segmentos `.mz-clock` do maestria.css — as landings que a chamam carregam
 * os dois arquivos.
 *
 * ⚠️ Com `deadlineIso` no passado a barra sai do DOM em vez de congelar em
 * 00:00:00:00: a página some inteira a urgência. Mantenha a data à frente de
 * hoje — hoje são quatro landings vencendo em 31/08/2026.
 *
 * ⚠️ Barra sem contador (a entrada por aplicação da Consultoria e das
 * mentorias) NÃO é isto: são os `*TopBar.tsx` de cada landing.
 */
function useCountdown(targetIso: string) {
  const [left, setLeft] = useState({ d: 0, h: 0, m: 0, s: 0, done: false });

  useEffect(() => {
    const target = new Date(targetIso).getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setLeft({ d: 0, h: 0, m: 0, s: 0, done: true });
        return;
      }
      const s = Math.floor(diff / 1000);
      setLeft({
        d: Math.floor(s / 86400),
        h: Math.floor((s % 86400) / 3600),
        m: Math.floor((s % 3600) / 60),
        s: s % 60,
        done: false,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetIso]);

  return left;
}

const pad = (n: number) => String(n).padStart(2, '0');

export type ScarcityBarProps = {
  /** Prazo real da oferta/turma, em ISO com fuso. Vencido → a barra some. */
  deadlineIso: string;
  /** Rótulo antes do relógio, ex.: "As matrículas encerram em". */
  label: string;
  /** Linha de vagas ao lado, ex.: "Vagas limitadas por turma". Some no mobile. */
  vagas?: string;
  /** Liga o "X pessoas vendo esta página agora". */
  viewers?: boolean;
  /** Faixa do contador de viewers (default 17–42, o do Kit F4). */
  viewersMin?: number;
  viewersMax?: number;
};

export function ScarcityBar({
  deadlineIso,
  label,
  vagas,
  viewers = false,
  viewersMin,
  viewersMax,
}: ScarcityBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const { d, h, m, s, done } = useCountdown(deadlineIso);

  useUrgencyHeight(barRef, done);

  // Prazo vencido → a barra sai do ar em vez de congelar em 00:00:00:00.
  // O estado inicial é `done: false` de propósito: estas páginas são estáticas
  // e o HTML vem do build, então decidir o vencimento no render quebraria a
  // hidratação. O hook acima roda no mesmo tick da montagem.
  // O `return null` vem DEPOIS do hook — nunca antes, ou a ordem quebra.
  if (done) return null;

  return (
    <div className="urgency-bar" ref={barRef}>
      <div className="wrap urgency-bar-inner">
        <div className="countdown" role="timer" aria-live="off">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2 2M9 2h6" />
          </svg>
          <span className="countdown-label">{label}</span>
          <span className="countdown-clock mz-clock">
            <span className="mz-seg">
              <b>{pad(d)}</b>
              <em>dias</em>
            </span>
            <i>:</i>
            <span className="mz-seg">
              <b>{pad(h)}</b>
              <em>hrs</em>
            </span>
            <i>:</i>
            <span className="mz-seg">
              <b>{pad(m)}</b>
              <em>min</em>
            </span>
            <i>:</i>
            <span className="mz-seg">
              <b>{pad(s)}</b>
              <em>seg</em>
            </span>
          </span>
        </div>

        {/* `urgency-vagas` e `urgency-sep--vagas` existem só para o media query
            do maestria.css: abaixo de 820px a barra é nowrap e três itens não
            cabem ao lado do relógio de 4 segmentos, então este par some e
            ficam contador + viewers. As classes precisam ser próprias daqui —
            as TopBar da Consultoria e das mentorias são feitas de `.mz-vagas`
            dentro de uma `.urgency-bar` e sumiriam junto. */}
        {vagas && (
          <>
            <span className="urgency-sep urgency-sep--vagas" />
            <span className="mz-vagas urgency-vagas">
              <span className="mz-vagas-dot" /> {vagas}
            </span>
          </>
        )}

        {viewers && (
          <>
            <span className="urgency-sep" />
            <LiveViewers min={viewersMin} max={viewersMax} />
          </>
        )}
      </div>
    </div>
  );
}
