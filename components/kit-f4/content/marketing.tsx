import type { DocModel } from './types';

/* ============================================================
   Guia Estratégico de Marketing (Vídeos para Instagram)
   Conteúdo extraído do PDF "Guia estratégico (MARKETING)".
   ============================================================ */

export const MARKETING_DOC: DocModel = {
  id: 'marketing',
  title: 'Guia Estratégico de Marketing',
  subtitle:
    'Vídeos para Instagram em clínicas de saúde: pilares 40/40/20, calendário editorial, fórmulas de roteiro e o funil 5Ns para tráfego pago.',
  eyebrow: 'Kit F4 · Marketing',
  readingMinutes: 16,
  updatedAt: '2026-06-19',
  sections: [
    {
      id: 'pilares',
      title: 'Os 3 pilares de conteúdo (40/40/20)',
      body: (
        <>
          <p>
            O conteúdo em vídeo se estrutura em três pilares complementares, cada um atendendo a um
            estágio da jornada do paciente:
          </p>
          <ul>
            <li>
              <strong>Conexão (40%):</strong> bastidores e humanização — mostra que por trás da
              marca existem pessoas que se importam.
            </li>
            <li>
              <strong>Autoridade (40%):</strong> educação e esclarecimento — posiciona os
              profissionais como referências (mitos e verdades, sintomas, tecnologia).
            </li>
            <li>
              <strong>Conversão (20%):</strong> experiência e facilidade — remove objeções (tour,
              jornada do paciente, facilidades).
            </li>
          </ul>
          <p>Use a calculadora para planejar quantos vídeos do mês vão para cada pilar:</p>
        </>
      ),
      inlineTools: [{ kind: 'calc404020' }],
    },
    {
      id: 'calendario',
      title: 'Calendário editorial',
      body: (
        <>
          <p>
            Stories (consistência diária) + Feed (vitrine, 1–2 posts/semana). Edite as células
            abaixo conforme a realidade da sua clínica e exporte para imprimir ou guardar.
          </p>
          <p>
            <em>
              “A consistência nos Stories é mais importante que a produção sofisticada.”
            </em>
          </p>
        </>
      ),
      inlineTools: [{ kind: 'editorialCalendar' }],
    },
    {
      id: 'anatomia',
      title: 'Anatomia do vídeo eficaz',
      body: (
        <>
          <p>Todo vídeo eficaz tem três partes:</p>
          <ul>
            <li>
              <strong>Gancho (0–5s):</strong> uma frase que para o scroll (ex.: “Você sabia que
              ranger os dentes pode causar dores de cabeça?”).
            </li>
            <li>
              <strong>Conteúdo (20–40s):</strong> a informação principal, clara e objetiva.
            </li>
            <li>
              <strong>CTA (5s):</strong> uma chamada sutil (ex.: “Compartilhe com quem precisa saber
              disso”).
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'formulas',
      title: '3 fórmulas de roteiro',
      body: (
        <>
          <ol>
            <li>
              <strong>Inimigo Comum:</strong> identifique um hábito nocivo/mito → explique o perigo
              → mostre como a clínica ajuda a vencê-lo.
            </li>
            <li>
              <strong>Descoberta:</strong> comece pelo impacto → narre a virada → entregue a lição
              para o público.
            </li>
            <li>
              <strong>Bastidor com Propósito:</strong> mostre um detalhe técnico → explique o
              benefício invisível → reforce o valor da clínica.
            </li>
          </ol>
        </>
      ),
    },
    {
      id: 'storytelling',
      title: 'Storytelling ético (3 atos)',
      body: (
        <>
          <p>
            Narrativas focadas na jornada do paciente, sempre éticas — sem prometer resultados
            idênticos para todos:
          </p>
          <ul>
            <li>
              <strong>Desafio (a dor):</strong> o sintoma ou limitação, descrito com respeito.
            </li>
            <li>
              <strong>Travessia (o cuidado):</strong> a clínica como guia técnico que acolhe e
              oferece um plano personalizado.
            </li>
            <li>
              <strong>Transformação (o bem-estar):</strong> o ganho de qualidade de vida e a
              retomada da autoestima.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'producao',
      title: 'Checklist de produção',
      body: (
        <>
          <p>
            Otimize tempo sem perder qualidade. Marque os itens conforme prepara seus vídeos — as
            marcações ficam salvas neste dispositivo.
          </p>
        </>
      ),
      inlineTools: [{ kind: 'productionChecklist' }],
    },
    {
      id: 'funil',
      title: 'O funil 5Ns para tráfego pago',
      body: (
        <>
          <p>
            Para que os anúncios tragam resultados consistentes, distribua os vídeos pelo nível de
            consciência do público (N1 → N5). Clique em cada nível para ver o objetivo e o tipo de
            vídeo:
          </p>
        </>
      ),
      inlineTools: [{ kind: 'funnel5n' }],
    },
  ],
  panelTools: [{ kind: 'ragChat' }],
};
