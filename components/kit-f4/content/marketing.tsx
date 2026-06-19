import type { DocModel } from './types';

/* ============================================================
   Guia Estratégico de Marketing (Vídeos para Instagram)
   Conteúdo extraído do PDF "Guia estratégico (MARKETING)".
   ============================================================ */

export const MARKETING_DOC: DocModel = {
  id: 'marketing',
  title: 'Guia Estratégico de Marketing',
  subtitle:
    'Vídeos para Instagram em clínicas de saúde: pilares 40/40/20, calendário editorial, storytelling ético, fórmulas de roteiro e o funil 5Ns para tráfego pago.',
  eyebrow: 'Kit F4 · Marketing',
  readingMinutes: 22,
  updatedAt: '2026-06-19',
  sections: [
    {
      id: 'intro',
      title: 'Por que vídeo, e por que com ética',
      body: (
        <>
          <p>
            O mercado de saúde e bem-estar está cada vez mais competitivo, e a presença digital deixou
            de ser opcional para se tornar um pilar estratégico de captação e fidelização de pacientes.
            Nesse cenário, o vídeo é o formato de maior alcance e engajamento no Instagram, permitindo
            que clínicas multidisciplinares — médicos, dentistas, fisioterapeutas, estetas,
            nutricionistas, psicólogos — se comuniquem de forma direta, humana e informativa.
          </p>
          <p>
            Diferentemente de outros setores, o marketing em saúde exige cuidado redobrado: a
            comunicação deve priorizar a <strong>educação</strong>, o <strong>acolhimento</strong> e a{' '}
            <strong>transparência</strong>, nunca a mercantilização do ato médico ou a promessa de
            resultados milagrosos. Aplicando estas técnicas, a clínica não só aumenta o alcance, mas
            constrói uma reputação sólida baseada em confiança, autoridade e cuidado genuíno.
          </p>
        </>
      ),
    },
    {
      id: 'pilares',
      title: 'Os 3 pilares de conteúdo (40/40/20)',
      body: (
        <>
          <p>
            O conteúdo em vídeo se estrutura em três pilares complementares, cada um atendendo a um
            estágio da jornada do paciente. A proporção recomendada — <strong>40% Conexão, 40%
            Autoridade, 20% Conversão</strong> — equilibra engajamento orgânico, construção de
            confiança e geração de leads.
          </p>
          <ul>
            <li>
              <strong>Conexão (40%) — bastidores e humanização:</strong> mostra que por trás da marca
              existem pessoas que se importam. Ex.: preparação diária (abertura da clínica, recepção
              sendo organizada); processos de higiene e biossegurança (esterilização, limpeza das
              salas — essencial em odontologia e estética); valores da equipe (depoimentos curtos
              sobre o que mais amam na profissão).
            </li>
            <li>
              <strong>Autoridade (40%) — educação e esclarecimento:</strong> posiciona os
              profissionais como referências, com conteúdo informativo e baseado em evidências. Ex.:
              mitos e verdades (“Colocar aparelho dói mesmo?”; “Quem tem problema na coluna não pode
              fazer musculação?”); explicação de sintomas em 30–60s (dor de cabeça frequente, manchas
              na pele, cansaço excessivo); tecnologia disponível (laser, scanner intraoral, ultrassom)
              e seus benefícios.
            </li>
            <li>
              <strong>Conversão (20%) — experiência e facilidade:</strong> remove objeções e facilita
              a decisão. Ex.: tour pela estrutura (recepção, salas de espera, consultórios,
              destacando conforto e limpeza); jornada do paciente (do agendamento online à saída);
              facilidades (estacionamento, localização, horários, convênios, app de agendamento).
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
            Combine <strong>Stories</strong> (canal ideal para um relacionamento próximo e diário) com{' '}
            <strong>Feed</strong> (a vitrine da clínica, 1–2 posts por semana, intercalando Reels e
            carrosséis). Os modelos abaixo são editáveis e exportáveis — adapte à realidade da sua
            clínica.
          </p>
          <p>
            <strong>Roteiro semanal de Stories:</strong> Segunda — começo de semana com energia
            (abertura da clínica, equipe se preparando). Terça — caixa de perguntas com um tema, depois
            responda às 3–5 mais relevantes. Quarta — bastidores e equipe (um profissional por semana,
            com um detalhe pessoal). Quinta — mito vs. verdade (vídeo de até 30s com o especialista).
            Sexta — dica de bem-estar leve + CTA sutil (“Agende sua avaliação pelo link da bio”).
            Sábado/Domingo — conexão leve (estilo de vida saudável: esporte, comida saudável, leitura).
          </p>
          <p>
            <strong>Coringa mensal de Feed (4 semanas):</strong> Semana 1 — Atração (Reels 15–30s, “3
            sinais de que seu corpo está pedindo uma avaliação com [especialidade]”). Semana 2 —
            Autoridade (carrossel ou vídeo de 1 min sobre como funciona o tratamento). Semana 3 —
            Conexão (vídeo 30–45s apresentando um profissional). Semana 4 — Conversão (vídeo tour
            45–60s). Programe os posts com ao menos <strong>7 dias de antecedência</strong> usando Meta
            Business Suite ou Later — isso garante consistência e libera a equipe para o atendimento.
          </p>
          <p>
            <em>
              “A consistência nos Stories é mais importante que a produção sofisticada. Um vídeo de
              celular com boa iluminação e áudio limpo vale mais que um vídeo profissional postado uma
              vez por mês.”
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
      id: 'storytelling',
      title: 'Storytelling ético (3 atos)',
      body: (
        <>
          <p>
            Histórias ativam áreas do cérebro ligadas à empatia e à memória — algo que dados técnicos
            sozinhos não fazem. Na saúde, o storytelling é ferramenta de humanização e educação, não de
            entretenimento superficial. Estruture as narrativas na <strong>jornada do paciente</strong>,
            sempre éticas e sem prometer resultados idênticos para todos:
          </p>
          <ul>
            <li>
              <strong>Desafio (a dor):</strong> o sintoma, a limitação funcional ou a insegurança
              estética, descritos com respeito (ex.: “a dificuldade de mastigar que impedia o convívio
              social”).
            </li>
            <li>
              <strong>Travessia (o cuidado):</strong> a clínica e o profissional como guias técnicos
              que oferecem acolhimento, tecnologia e um plano personalizado.
            </li>
            <li>
              <strong>Transformação (o bem-estar):</strong> o ganho de qualidade de vida, a retomada
              da autoestima ou o fim da dor crônica.
            </li>
          </ul>
          <p>
            <strong>Exemplos por especialidade:</strong>
          </p>
          <ul>
            <li>
              <strong>Odontologia (quebrando o medo):</strong> “Muitos pacientes adiam o sonho do
              sorriso novo por traumas antigos com o ‘barulhinho do motor’. Hoje mostramos como a
              sedação consciente e o atendimento em tempo estendido mudaram a percepção de um paciente
              que não visitava o dentista há 15 anos.”
            </li>
            <li>
              <strong>Fisioterapia (foco na superação):</strong> “A reabilitação é uma maratona, não
              um sprint. Acompanhamos os pequenos marcos de um paciente pós-cirúrgico: do primeiro
              passo sem auxílio à volta às atividades que ele mais ama.”
            </li>
            <li>
              <strong>Estética (humanização e autoestima):</strong> “Mais do que um procedimento,
              buscamos devolver a identidade. Contamos como o tratamento de melasma foi, para esta
              paciente, o início de uma nova fase de autocuidado e segurança ao se olhar no espelho.”
            </li>
          </ul>
          <p>
            O medo é alimentado pela incerteza. Use o storytelling para desmistificar o ambiente
            clínico: mostre o toque acolhedor, explique as sensações reais do procedimento e use
            depoimentos (com autorização) que foquem no alívio e no conforto pós-tratamento. Quando a
            história é pautada na verdade e na ética, ela se torna o maior diferencial competitivo da
            clínica.
          </p>
        </>
      ),
    },
    {
      id: 'formulas',
      title: '3 fórmulas de roteiro',
      body: (
        <>
          <p>
            Três estruturas validadas para gravação rápida no celular. Os exemplos abaixo são
            editáveis — preencha os campos e copie o roteiro pronto:
          </p>
        </>
      ),
      inlineTools: [
        {
          kind: 'scriptBlock',
          id: 'formula-inimigo-comum',
          title: '1. Fórmula do “Inimigo Comum”',
          lines: [
            'Gancho: identifique um hábito nocivo ou um mito (ex.: "A procrastinação da saúde").',
            'Desenvolvimento: explique por que esse inimigo é perigoso (ex.: "Deixar o check-up para depois pode transformar um problema simples em algo complexo").',
            'Solução: como a clínica ajuda a vencê-lo (ex.: "Nosso protocolo de avaliação rápida foi desenhado para quem não tem tempo a perder").',
          ],
        },
        {
          kind: 'scriptBlock',
          id: 'formula-descoberta',
          title: '2. Fórmula da “Descoberta”',
          lines: [
            'Gancho: comece pelo impacto (ex.: "Como um tratamento de 30 minutos mudou a rotina de sono da Maria").',
            'Desenvolvimento: narre o momento da virada (ex.: "Ela não sabia que a dor na mandíbula era a causa da insônia crônica até fazermos o diagnóstico").',
            'Lição: o aprendizado que o público leva (ex.: "Muitas vezes, a solução para o seu cansaço está onde você menos imagina").',
          ],
        },
        {
          kind: 'scriptBlock',
          id: 'formula-bastidor',
          title: '3. Fórmula do “Bastidor com Propósito”',
          lines: [
            'Gancho: mostre um detalhe técnico (ex.: "Por que usamos este tipo específico de luz no consultório?").',
            'Desenvolvimento: explique o benefício invisível (ex.: "Não é só estética; essa tecnologia identifica lesões que o olho humano não veria, garantindo sua segurança").',
            'Fechamento: reforce o valor da clínica (ex.: "Cada detalhe aqui tem um único objetivo: o seu melhor cuidado").',
          ],
        },
      ],
    },
    {
      id: 'producao',
      title: 'Checklist de produção',
      body: (
        <>
          <p>
            Gestores têm rotina intensa — estas práticas otimizam tempo sem comprometer a qualidade.
            Marque os itens conforme prepara seus vídeos; as marcações ficam salvas neste dispositivo.
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
            Para que o investimento em anúncios traga resultados consistentes, distribua os vídeos pelo
            nível de consciência do público (N1 → N5). Isso permite alocar a verba de forma inteligente
            para atrair, educar e converter pacientes. Clique em cada nível para ver objetivo, direção,
            abordagem e foco:
          </p>
        </>
      ),
      inlineTools: [{ kind: 'funnel5n' }],
    },
    {
      id: 'conclusao',
      title: 'Conclusão',
      body: (
        <>
          <p>
            O vídeo marketing no Instagram é uma ferramenta poderosa para clínicas que querem se
            destacar com respeito e profissionalismo. Adotando os pilares de conexão, autoridade e
            conversão e seguindo os calendários sugeridos, a clínica constrói uma presença digital que
            atrai pacientes qualificados, fortalece a reputação e gera resultados sustentáveis.
          </p>
          <p>
            <em>Lembre-se: consistência e autenticidade vencem a perfeição tardia.</em>
          </p>
        </>
      ),
    },
  ],
  panelTools: [{ kind: 'ragChat' }],
};
