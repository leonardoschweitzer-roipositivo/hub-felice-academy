'use client';

import { useEffect, useState, type ReactNode } from 'react';

/* ============================================================
   Carrossel de mockups da plataforma do Kit F4.

   Cinco "telas" em HTML/CSS (sem screenshot externo): a home do
   Kit (índice dos 4 docs) + cada um dos 4 documentos com o seu
   conteúdo/ferramenta característica. Avança sozinho e tem
   setas + dots. Estilos no bloco ".plat-*" de felice.css.
   ============================================================ */

const SearchBar = () => (
  <div className="plat-search">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
    <span>Buscar no Kit…</span>
    <span className="plat-kbd">⌘K</span>
  </div>
);

type Slide = {
  /** rótulo do dot / aria */
  label: string;
  /** caminho mostrado na barra de URL */
  url: string;
  /** índice destacado na sidebar (0..3) — null = home */
  active: number | null;
  /** conteúdo da área principal */
  body: ReactNode;
};

/* Itens do índice lateral (iguais à home real do Kit). */
const SIDE_ITEMS = ['Procedimento Operacional', 'Atendimento — Recepção', 'CRC — Agendamento', 'Guia de Marketing'];

const SLIDES: Slide[] = [
  {
    label: 'Início do Kit',
    url: 'felice.academy/produtos/kitgestaof4/kit-f4',
    active: null,
    body: (
      <>
        <SearchBar />
        <span className="plat-tag">Escolha um documento</span>
        <div className="plat-cards">
          {SIDE_ITEMS.map((t, i) => (
            <div className="plat-card" key={t}>
              <span className="plat-card-num">{`0${i + 1}`}</span>
              <span className="plat-card-title">{t}</span>
              <div className="plat-progress">
                <span style={{ width: ['100%', '64%', '30%', '0%'][i] }} />
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    label: 'POP',
    url: 'felice.academy/produtos/kitgestaof4/kit-f4/pop',
    active: 0,
    body: (
      <>
        <SearchBar />
        <span className="plat-tag">Gerador de POP personalizado</span>
        <div className="plat-line w-90" />
        <div className="plat-fields">
          <span className="plat-field">Nome da clínica</span>
          <span className="plat-field">Cargo: Recepção</span>
        </div>
        <span className="plat-btn">Imprimir / Salvar POP</span>
        <div className="plat-line w-70" />
      </>
    ),
  },
  {
    label: 'Atendimento',
    url: 'felice.academy/produtos/kitgestaof4/kit-f4/atendimento',
    active: 1,
    body: (
      <>
        <SearchBar />
        <span className="plat-tag">Simulador de atendimento · IA</span>
        <div className="plat-chat">
          <div className="plat-bubble plat-bubble--user">Como recebo um paciente atrasado?</div>
          <div className="plat-bubble plat-bubble--ai">
            <span className="plat-ai-ico">✦</span>
            <span>
              Acolha sem cobrar: confirme o horário, explique o impacto na agenda e ofereça o
              próximo encaixe disponível…
            </span>
          </div>
        </div>
      </>
    ),
  },
  {
    label: 'CRC',
    url: 'felice.academy/produtos/kitgestaof4/kit-f4/crc',
    active: 2,
    body: (
      <>
        <SearchBar />
        <span className="plat-tag">A chamada perfeita · 5 etapas</span>
        <div className="plat-steps">
          {['Acolher', 'Investigar', 'Apresentar', 'Agendar', 'Confirmar'].map((s, i) => (
            <span className={`plat-step${i === 1 ? ' is-active' : ''}`} key={s}>
              <b>{i + 1}</b>
              {s}
            </span>
          ))}
        </div>
        <span className="plat-tag-soft">Regra dos 5 minutos · banco de objeções</span>
        <div className="plat-line w-70" />
      </>
    ),
  },
  {
    label: 'Marketing',
    url: 'felice.academy/produtos/kitgestaof4/kit-f4/marketing',
    active: 3,
    body: (
      <>
        <SearchBar />
        <span className="plat-tag">Calculadora de conteúdo 40/40/20</span>
        <div className="plat-bars">
          <span className="plat-bar" style={{ height: '76%' }}>
            <em>40%</em>
            Conexão
          </span>
          <span className="plat-bar" style={{ height: '76%' }}>
            <em>40%</em>
            Autoridade
          </span>
          <span className="plat-bar plat-bar--soft" style={{ height: '40%' }}>
            <em>20%</em>
            Conversão
          </span>
        </div>
        <span className="plat-tag-soft">Calendário editorial pronto para imprimir</span>
      </>
    ),
  },
];

const COUNT = SLIDES.length;

export function PlatformCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  // auto-avanço (pausa no hover/foco e respeita prefers-reduced-motion)
  useEffect(() => {
    if (paused) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const id = window.setTimeout(() => setI((p) => (p + 1) % COUNT), 4200);
    return () => window.clearTimeout(id);
  }, [i, paused]);

  const go = (n: number) => setI((n + COUNT) % COUNT);
  const current = SLIDES[i];

  return (
    <div
      className="plat-mock reveal d1"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      role="group"
      aria-roledescription="carrossel"
      aria-label="Telas da plataforma do Kit F4"
    >
      <div className="plat-win">
        {/* chrome do navegador */}
        <div className="plat-chrome">
          <span className="plat-dot" />
          <span className="plat-dot" />
          <span className="plat-dot" />
          <span className="plat-url">{current.url}</span>
        </div>

        <div className="plat-body">
          {/* sidebar / índice */}
          <aside className="plat-side" aria-hidden="true">
            <span className="plat-side-eyebrow">Kit F4 · Índice</span>
            {SIDE_ITEMS.map((t, idx) => (
              <span className={`plat-side-item${current.active === idx ? ' is-active' : ''}`} key={t}>
                {t}
              </span>
            ))}
          </aside>

          {/* conteúdo da tela atual */}
          <div className="plat-main" key={i}>
            {current.body}
          </div>
        </div>
      </div>

      {/* controles */}
      <div className="plat-controls">
        <button className="plat-arrow" onClick={() => go(i - 1)} aria-label="Tela anterior">
          ‹
        </button>
        <div className="plat-dots" role="tablist">
          {SLIDES.map((s, idx) => (
            <button
              key={s.label}
              className={`plat-pip${idx === i ? ' is-active' : ''}`}
              onClick={() => go(idx)}
              aria-label={s.label}
              aria-current={idx === i}
            />
          ))}
        </div>
        <button className="plat-arrow" onClick={() => go(i + 1)} aria-label="Próxima tela">
          ›
        </button>
      </div>
    </div>
  );
}
