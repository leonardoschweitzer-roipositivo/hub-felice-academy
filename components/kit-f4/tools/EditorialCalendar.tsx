'use client';

import { usePersistentState } from '../usePersistentState';

const DIAS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
const STORIES_DEFAULT: Record<string, string> = {
  Seg: 'Começo de semana com energia: abertura da clínica, recepção pronta e equipe se preparando, com texto motivacional.',
  Ter: 'Caixa de perguntas com um tema específico; depois responda às 3–5 mais relevantes em vídeos de até 1 min.',
  Qua: 'Bastidores e equipe: apresente um profissional, mostre a rotina dele e um detalhe pessoal (hobby, livro, paixão).',
  Qui: 'Mito vs. verdade: vídeo curto (máx. 30s) desmentindo um boato comum, com o especialista no tema.',
  Sex: 'Dica de bem-estar + CTA sutil (alongamento, hidratação, pele) e reminder: "Agende sua avaliação pelo link da bio".',
  Sáb: 'Conexão leve: estilo de vida saudável — equipe praticando esporte, cozinhando algo saudável, lendo.',
  Dom: 'Conexão leve: continue o conteúdo de estilo de vida, mostrando que a equipe vive o que prega.',
};
const SEMANAS = ['Semana 1 · Atração', 'Semana 2 · Autoridade', 'Semana 3 · Conexão', 'Semana 4 · Conversão'];
const FEED_DEFAULT: Record<string, string> = {
  'Semana 1 · Atração': 'Reels dinâmico (15–30s): "3 sinais de que seu corpo está pedindo uma avaliação com [especialidade]" — texto na tela e cortes rápidos.',
  'Semana 2 · Autoridade': 'Carrossel (até 5 slides) ou vídeo de 1 min: "Como funciona o tratamento com [tecnologia X] na nossa clínica? Passo a passo e benefícios."',
  'Semana 3 · Conexão': 'Vídeo (30–45s): "Conheça o Dr. [nome]" — o que o levou a se especializar e por que ele ama o que faz.',
  'Semana 4 · Conversão': 'Vídeo tour (45–60s): "Veja como é chegar na nossa clínica: recepção acolhedora, agendamento online e conforto."',
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
