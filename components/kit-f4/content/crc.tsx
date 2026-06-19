import type { DocModel } from './types';

/* ============================================================
   Manual da CRC — Agendamento ("A Voz da Clínica")
   Conteúdo extraído do PDF "Manual CRC (COMERCIAL)".
   ============================================================ */

export const CRC_DOC: DocModel = {
  id: 'crc',
  title: 'Manual da CRC — Agendamento',
  subtitle:
    'A Voz da Clínica: o guião tático da Central de Relacionamento para a chamada perfeita, gestão de objeções e a regra dos 5 minutos.',
  eyebrow: 'Kit F4 · Comercial',
  readingMinutes: 20,
  updatedAt: '2026-06-19',
  sections: [
    {
      id: 'voz',
      title: 'A voz como primeiro contato',
      body: (
        <>
          <p>
            No telefone, a voz assume sozinha o papel de transmitir segurança, empatia e
            profissionalismo. Cada saudação, pausa e entonação pode reduzir a ansiedade do paciente
            — ou acentuá-la.
          </p>
          <p>
            A percepção de acolhimento na primeira ligação está diretamente ligada à adesão ao
            tratamento e à redução do absenteísmo. Comunicação empática na CRC não é só ética: é
            estratégica para a sustentabilidade do negócio.
          </p>
        </>
      ),
    },
    {
      id: 'pilares',
      title: 'Pilares éticos do agendamento',
      body: (
        <>
          <ul>
            <li>
              <strong>Acolhimento:</strong> presença plena na chamada, sem ruídos ou pressa que
              denotem desatenção.
            </li>
            <li>
              <strong>Privacidade (LGPD):</strong> coletar apenas o necessário; confirmar dados em
              tom discreto, sem repetir CPF ou endereço em voz alta.
            </li>
            <li>
              <strong>Equidade:</strong> mesmo padrão de cortesia a todos os pacientes,
              independentemente do convênio. Atenção aos vieses inconscientes na entonação.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'chamada-perfeita',
      title: 'O roadmap da chamada perfeita',
      body: (
        <>
          <p>
            A chamada ideal percorre cinco fases. Use o stepper para ver o objetivo e o script de
            cada uma — os scripts têm campos editáveis com o nome da clínica e do operador.
          </p>
        </>
      ),
      inlineTools: [{ kind: 'callStepper' }],
    },
    {
      id: 'protocolos',
      title: 'Protocolos para situações complexas',
      body: (
        <>
          <p>Três árvores de decisão para os momentos mais sensíveis da CRC:</p>
          <ul>
            <li>
              <strong>Falta de vagas</strong> — matriz de resolução com alternativas reais (fila,
              outro profissional, outra unidade, telemedicina).
            </li>
            <li>
              <strong>Paciente irritado</strong> — funil de desescalada pela validação e escuta
              ativa.
            </li>
            <li>
              <strong>Red flags de urgência</strong> — protocolo de direcionamento seguro ao
              pronto-atendimento.
            </li>
          </ul>
        </>
      ),
      inlineTools: [
        { kind: 'decisionTree', treeId: 'sem-vagas' },
        { kind: 'decisionTree', treeId: 'paciente-irritado' },
        { kind: 'decisionTree', treeId: 'red-flags' },
      ],
    },
    {
      id: 'regra-5-minutos',
      title: 'A Regra dos 5 minutos',
      body: (
        <>
          <p>
            O envio da confirmação por SMS/WhatsApp deve ocorrer em até 5 minutos após a chamada,
            com a informação ainda fresca na memória do paciente. Isso reduz drasticamente o
            absenteísmo. Use o cronômetro + checklist de encerramento:
          </p>
        </>
      ),
      inlineTools: [{ kind: 'fiveMinTimer' }],
    },
    {
      id: 'objecoes',
      title: 'Banco de objeções',
      body: (
        <>
          <p>
            Respostas prontas (e éticas) para as objeções mais comuns. Copie e adapte ao seu tom —
            sempre sem pressionar a decisão do paciente.
          </p>
        </>
      ),
      inlineTools: [{ kind: 'objectionBank' }],
    },
    {
      id: 'conduta',
      title: 'Código de conduta do operador',
      body: (
        <>
          <p>Checklist de auto-avaliação da postura ao telefone:</p>
        </>
      ),
      inlineTools: [
        {
          kind: 'checklist',
          id: 'conduta-crc',
          title: 'Conduta da CRC',
          items: [
            'Tom de voz médio, pausado, com entonação variada (sorria antes de falar)',
            'Não interromper; usar frases confirmatórias e repetir informações-chave',
            'Registrar exatamente o combinado, com linguagem objetiva e neutra',
            'Confirmar identidade antes de fornecer qualquer informação',
            'Bloquear o sistema ao levantar; não compartilhar dados sem autorização',
            'Tratar todos com o mesmo padrão de cortesia, sem revidar grosseria',
          ],
        },
      ],
    },
    {
      id: 'treino-crc',
      title: 'Treine a chamada com o simulador',
      body: (
        <>
          <p>
            No painel de ferramentas, o simulador de chamada faz a IA atuar como paciente ligando
            para a clínica. Conduza a chamada pelas 5 fases e pratique a gestão de objeções.
          </p>
        </>
      ),
    },
  ],
  panelTools: [{ kind: 'ragChat' }, { kind: 'rolePlay', mode: 'phone' }],
};
