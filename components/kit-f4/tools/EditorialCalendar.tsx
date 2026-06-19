'use client';

import { usePersistentState } from '../usePersistentState';

const DIAS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
const STORIES_DEFAULT: Record<string, string> = {
  Seg: 'Bastidor / rotina da clínica',
  Ter: 'Dica rápida (autoridade)',
  Qua: 'Enquete / interação',
  Qui: 'Mito x verdade',
  Sex: 'Depoimento ou case (com ética)',
  Sáb: 'Conexão / leveza',
  Dom: 'Convite para agendar (CTA)',
};
const SEMANAS = ['Semana 1 · Atração', 'Semana 2 · Autoridade', 'Semana 3 · Conexão', 'Semana 4 · Conversão'];
const FEED_DEFAULT: Record<string, string> = {
  'Semana 1 · Atração': 'Vídeo de gancho forte para alcançar novos perfis',
  'Semana 2 · Autoridade': 'Conteúdo educativo que demonstra expertise',
  'Semana 3 · Conexão': 'História/bastidor que aproxima do público',
  'Semana 4 · Conversão': 'Convite claro para agendar / oferta ética',
};

/** Calendário editorial: Stories (semanal) + Feed (mensal), editável e exportável. */
export function EditorialCalendar() {
  const [stories, setStories] = usePersistentState('calendar:stories', STORIES_DEFAULT);
  const [feed, setFeed] = usePersistentState('calendar:feed', FEED_DEFAULT);

  const exportJson = () => {
    const blob = new Blob([JSON.stringify({ stories, feed }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'calendario-editorial-felice.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="kit-calendar">
      <h4>Stories — semana</h4>
      <div className="kit-calendar-stories">
        {DIAS.map((d) => (
          <div className="kit-calendar-day" key={d}>
            <span className="kit-calendar-daylabel">{d}</span>
            <textarea
              value={stories[d] ?? ''}
              onChange={(e) => setStories((s) => ({ ...s, [d]: e.target.value }))}
              aria-label={`Stories de ${d}`}
            />
          </div>
        ))}
      </div>

      <h4>Feed — mês (4 semanas)</h4>
      <div className="kit-calendar-feed">
        {SEMANAS.map((s) => (
          <div className="kit-calendar-week" key={s}>
            <span className="kit-calendar-weeklabel">{s}</span>
            <textarea
              value={feed[s] ?? ''}
              onChange={(e) => setFeed((f) => ({ ...f, [s]: e.target.value }))}
              aria-label={s}
            />
          </div>
        ))}
      </div>

      <div className="kit-calendar-actions no-print">
        <button type="button" className="btn btn-ghost" onClick={() => window.print()}>
          Imprimir / PDF
        </button>
        <button type="button" className="btn btn-ghost" onClick={exportJson}>
          Exportar (JSON)
        </button>
      </div>
    </div>
  );
}
