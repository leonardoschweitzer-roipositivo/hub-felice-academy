'use client';

import { useEffect, useState, type ReactNode } from 'react';

/* ============================================================
   Carrossel do HERO (somente desktop — vive dentro de .hero-visual,
   que é display:none no mobile, onde a imagem de fundo continua).

   4 telas verticais (formato retangular portrait) da plataforma do
   Kit, com mais detalhe que os outros mockups por ser o herói:
   chrome do navegador + sidebar com os 4 docs + área de conteúdo
   rica. Auto-avança, pausa no hover/foco, respeita reduced-motion.
   Estilos no bloco ".heroc-*" de felice.css.
   ============================================================ */

const DOCS = ['POP — Gestão', 'Atendimento', 'CRC — Agendamento', 'Marketing'];

type Slide = { label: string; url: string; active: number; body: ReactNode };

const SLIDES: Slide[] = [
  {
    label: 'POP',
    url: 'kit-f4/pop',
    active: 0,
    body: (
      <>
        <span className="heroc-eyebrow">Procedimento Operacional Padrão</span>
        <h4 className="heroc-h">Ecossistema de Excelência</h4>
        <div className="heroc-eco">
          {[
            ['Linha de Frente', 'Recepção · CRC'],
            ['Clínica', 'Dentistas · ASB · TSB'],
            ['Gestão', 'Financeiro · Gerência'],
          ].map(([t, sub], i) => (
            <div className={`heroc-eco-layer l${i}`} key={t}>
              <span className="heroc-eco-dot" />
              <span className="heroc-eco-txt">
                <b>{t}</b>
                <i>{sub}</i>
              </span>
            </div>
          ))}
        </div>
        <div className="heroc-roles">
          {['Recepção', 'CRC', 'ASB', 'TSB', '+5 cargos'].map((r) => (
            <span className={`heroc-chip${r === 'Recepção' ? ' on' : ''}`} key={r}>
              {r}
            </span>
          ))}
        </div>
        <div className="heroc-tool">
          <div className="heroc-tool-top">
            <span>Gerador de POP personalizado</span>
            <span className="heroc-pill">Imprimir</span>
          </div>
          <div className="heroc-field" />
          <div className="heroc-field short" />
        </div>
      </>
    ),
  },
  {
    label: 'Atendimento',
    url: 'kit-f4/atendimento',
    active: 1,
    body: (
      <>
        <span className="heroc-eyebrow">Simulador de atendimento · IA</span>
        <h4 className="heroc-h">Treine a recepção</h4>
        <div className="heroc-journey">
          {['Acolher', 'Identificar', 'Conduzir', 'Encerrar'].map((s, i) => (
            <span className={`heroc-jstep${i <= 1 ? ' done' : ''}`} key={s}>
              {s}
            </span>
          ))}
        </div>
        <div className="heroc-chat">
          <div className="heroc-bubble user">Bom dia! Tenho consulta às 10h.</div>
          <div className="heroc-bubble ai">
            <span className="heroc-ai">✦</span>
            <span>Que bom te receber! Já confirmo seu horário e te explico os próximos passos.</span>
          </div>
          <div className="heroc-bubble user">E sobre o convênio?</div>
          <div className="heroc-typing">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="heroc-replies">
          <span>Paciente atrasado</span>
          <span>Sem documento</span>
        </div>
      </>
    ),
  },
  {
    label: 'CRC',
    url: 'kit-f4/crc',
    active: 2,
    body: (
      <>
        <span className="heroc-eyebrow">A chamada perfeita</span>
        <h4 className="heroc-h">Roteiro em 5 etapas</h4>
        <div className="heroc-steps">
          {[
            ['Acolher', '“Clínica Felice, bom dia! Aqui é a Ana…”'],
            ['Investigar', '“Me conta: é a sua primeira vez com a gente?”'],
            ['Apresentar', ''],
            ['Agendar', ''],
            ['Confirmar', ''],
          ].map(([s, line], i) => (
            <div className={`heroc-step${i <= 1 ? ' done' : ''}${i === 1 ? ' now' : ''}`} key={s}>
              <b>{i + 1}</b>
              <span className="heroc-step-txt">
                {s}
                {line && <i>{line}</i>}
              </span>
            </div>
          ))}
        </div>
        <div className="heroc-tool">
          <div className="heroc-tool-top">
            <span>Regra dos 5 minutos</span>
            <span className="heroc-timer">04:38</span>
          </div>
          <div className="heroc-bar-mini">
            <span style={{ width: '72%' }} />
          </div>
        </div>
        <div className="heroc-replies">
          <span>“Vou pensar”</span>
          <span>“Está caro”</span>
          <span>+12 objeções</span>
        </div>
      </>
    ),
  },
  {
    label: 'Marketing',
    url: 'kit-f4/marketing',
    active: 3,
    body: (
      <>
        <span className="heroc-eyebrow">Calculadora de conteúdo</span>
        <h4 className="heroc-h">Equilíbrio 40/40/20</h4>
        <div className="heroc-bars">
          <span className="heroc-bar" style={{ height: '82%' }}>
            <em>40%</em>
          </span>
          <span className="heroc-bar" style={{ height: '82%' }}>
            <em>40%</em>
          </span>
          <span className="heroc-bar soft" style={{ height: '46%' }}>
            <em>20%</em>
          </span>
        </div>
        <div className="heroc-legend">
          <span>Conexão</span>
          <span>Autoridade</span>
          <span className="soft">Conversão</span>
        </div>
        <div className="heroc-replies">
          <span>Reels</span>
          <span>Carrossel</span>
          <span>Stories</span>
        </div>
        <div className="heroc-tool">
          <div className="heroc-tool-top">
            <span>Calendário editorial</span>
            <span className="heroc-pill">Semana</span>
          </div>
          <div className="heroc-cal-grid">
            {['Bastidor', 'Caso real', '', 'Oferta', 'Dica', '', 'Depoimento'].map((t, i) => (
              <span className={`heroc-cal-cell${t ? ' has' : ''}`} key={i}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </>
    ),
  },
];

const COUNT = SLIDES.length;

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const id = window.setTimeout(() => setI((p) => (p + 1) % COUNT), 4600);
    return () => window.clearTimeout(id);
  }, [i, paused]);

  const go = (n: number) => setI((n + COUNT) % COUNT);
  const cur = SLIDES[i];

  return (
    <div
      className="heroc"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      role="group"
      aria-roledescription="carrossel"
      aria-label="Telas da plataforma do Kit F4"
    >
      <div className="heroc-win">
        <div className="heroc-chrome">
          <span className="heroc-cdot" />
          <span className="heroc-cdot" />
          <span className="heroc-cdot" />
          <span className="heroc-url">felice.academy/gestao/{cur.url}</span>
        </div>

        <div className="heroc-body">
          <aside className="heroc-side" aria-hidden="true">
            <span className="heroc-side-eyebrow">Kit F4</span>
            {DOCS.map((d, idx) => (
              <span className={`heroc-side-item${cur.active === idx ? ' is-active' : ''}`} key={d}>
                <i>{`0${idx + 1}`}</i>
                {d}
              </span>
            ))}
            <div className="heroc-side-prog">
              <span style={{ width: `${(cur.active + 1) * 22}%` }} />
            </div>
          </aside>

          <div className="heroc-main" key={i}>
            <div className="heroc-search">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span>Buscar no Kit…</span>
              <span className="heroc-kbd">⌘K</span>
            </div>
            {cur.body}
          </div>
        </div>
      </div>

      <div className="heroc-dots" role="tablist">
        {SLIDES.map((s, idx) => (
          <button
            key={s.label}
            className={`heroc-pip${idx === i ? ' is-active' : ''}`}
            onClick={() => go(idx)}
            aria-label={s.label}
            aria-current={idx === i}
          />
        ))}
      </div>
    </div>
  );
}
