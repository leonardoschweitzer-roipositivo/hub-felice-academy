import type { ReactNode } from 'react';

/* ============================================================
   Mockup estático (janela de navegador) de uma tela do Kit, para
   substituir as imagens de "book" na seção "O que você recebe".

   Cada documento mostra uma FERRAMENTA DIFERENTE da que aparece no
   carrossel (PlatformCarousel.tsx), para não repetir o mesmo visual:
     POP         → matriz de responsabilidades
     atendimento → script copiável
     crc         → banco de objeções
     marketing   → calendário editorial
   100% CSS/HTML. Estilos no bloco ".kitm-*" de felice.css.
   ============================================================ */

export type KitMockupId = 'pop' | 'atendimento' | 'crc' | 'marketing';

type Screen = { url: string; tag: string; body: ReactNode };

const SCREENS: Record<KitMockupId, Screen> = {
  pop: {
    url: 'felice.academy/gestao/kit-f4/pop',
    tag: 'Matriz de responsabilidades',
    body: (
      <div className="kitm-matrix">
        <div className="kitm-row kitm-row--head">
          <span>Tarefa</span>
          <span>ASB</span>
          <span>TSB</span>
        </div>
        {[
          ['Preparo da sala', 'on', 'off'],
          ['Esterilização', 'on', 'on'],
          ['Moldagem', 'off', 'on'],
        ].map(([t, a, b], i) => (
          <div className="kitm-row" key={i}>
            <span>{t}</span>
            <span className={`kitm-cell ${a}`} />
            <span className={`kitm-cell ${b}`} />
          </div>
        ))}
      </div>
    ),
  },
  atendimento: {
    url: 'felice.academy/gestao/kit-f4/atendimento',
    tag: 'Script de acolhimento',
    body: (
      <div className="kitm-script">
        <div className="kitm-script-top">
          <span className="kitm-script-label">Recepção · boas-vindas</span>
          <span className="kitm-copy">Copiar</span>
        </div>
        <p>
          “Olá, seja muito bem-vindo(a) à <em>[clínica]</em>! Meu nome é <em>[nome]</em>. Já estava
          esperando por você — vou te acompanhar a partir de agora.”
        </p>
      </div>
    ),
  },
  crc: {
    url: 'felice.academy/gestao/kit-f4/crc',
    tag: 'Banco de objeções',
    body: (
      <div className="kitm-obj">
        <div className="kitm-obj-q">“Vou pensar e te retorno.”</div>
        <div className="kitm-obj-a">
          <span className="kitm-ai-ico">✦</span>
          <span>
            “Claro! Só pra eu te ajudar melhor: o que ainda ficou em aberto — o horário ou o
            investimento?”
          </span>
        </div>
        <div className="kitm-obj-tags">
          <span>Preço</span>
          <span>Horário</span>
          <span>+12 objeções</span>
        </div>
      </div>
    ),
  },
  marketing: {
    url: 'felice.academy/gestao/kit-f4/marketing',
    tag: 'Calendário editorial',
    body: (
      <div className="kitm-cal">
        {[
          { d: 'Seg', k: 'Conexão' },
          { d: 'Ter', k: 'Autoridade' },
          { d: 'Qua', k: '' },
          { d: 'Qui', k: 'Conversão' },
          { d: 'Sex', k: 'Conexão' },
          { d: 'Sáb', k: '' },
        ].map((c, i) => (
          <div className={`kitm-day${c.k ? ' has' : ''}`} key={i}>
            <span className="kitm-day-d">{c.d}</span>
            {c.k && <span className={`kitm-day-k k-${c.k.toLowerCase()}`}>{c.k}</span>}
          </div>
        ))}
      </div>
    ),
  },
};

export function KitMockup({ id }: { id: KitMockupId }) {
  const s = SCREENS[id];
  return (
    <div className="kitm" aria-hidden="true">
      <div className="kitm-chrome">
        <span className="kitm-dot" />
        <span className="kitm-dot" />
        <span className="kitm-dot" />
        <span className="kitm-url">{s.url}</span>
      </div>
      <div className="kitm-search">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span>Buscar no Kit…</span>
        <span className="kitm-kbd">⌘K</span>
      </div>
      <span className="kitm-tag">{s.tag}</span>
      {s.body}
    </div>
  );
}
