import type { DocModel } from './types';

/* ============================================================
   Manual de Atendimento — Recepção ("A Arte de Receber")
   Conteúdo extraído do PDF "Manual (ATENDIMENTO)".
   ============================================================ */

export const ATENDIMENTO_DOC: DocModel = {
  id: 'atendimento',
  title: 'Manual de Atendimento — Recepção',
  subtitle:
    'A Arte de Receber: atendimento ético e humanizado na recepção, com scripts prontos, FAQs traduzidas e protocolos para situações delicadas.',
  eyebrow: 'Kit F4 · Atendimento',
  readingMinutes: 18,
  sections: [
    {
      id: 'principios',
      title: 'Princípios éticos do atendimento',
      body: (
        <>
          <p>
            A recepção é a porta de entrada da experiência do paciente. Nesse primeiro contato se
            estabelece a relação de confiança que influencia todo o tratamento. O atendimento ético
            e humanizado se apoia em quatro pilares indissociáveis:
          </p>
          <ul>
            <li>
              <strong>Confidencialidade (LGPD):</strong> dados de saúde são sensíveis. Evite expor
              diagnósticos, históricos ou dados pessoais ao alcance de outros pacientes.
            </li>
            <li>
              <strong>Não-discriminação:</strong> todo paciente é acolhido com o mesmo respeito,
              independentemente de qualquer característica pessoal.
            </li>
            <li>
              <strong>Empatia:</strong> quem chega pode estar ansioso, com dor ou medo. A escuta
              ativa reduz o estresse e aumenta a adesão.
            </li>
            <li>
              <strong>Dignidade:</strong> preserve a autonomia e a privacidade — no tom de voz, no
              respeito ao tempo de espera e em cada interação.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'jornada',
      title: 'A jornada do atendimento em 5 etapas',
      body: (
        <>
          <p>O atendimento na recepção segue um fluxo de cinco momentos:</p>
          <ol>
            <li>
              <strong>Saudação e acolhimento</strong> — contato visual, sorriso e tom calmo.
            </li>
            <li>
              <strong>Identificação e confirmação segura de dados</strong> — em tom discreto,
              respeitando a LGPD.
            </li>
            <li>
              <strong>Cadastro, senha e espera</strong> — explicar o painel e reduzir a ansiedade.
            </li>
            <li>
              <strong>Resolução de dúvidas</strong> — linguagem simples, sem jargões.
            </li>
            <li>
              <strong>Encerramento</strong> — tão acolhedor quanto a abertura, confirmando próximos
              passos.
            </li>
          </ol>
        </>
      ),
    },
    {
      id: 'scripts',
      title: 'Scripts modelo (copiáveis)',
      body: (
        <>
          <p>
            Use os scripts abaixo como base. Os campos dourados são editáveis — preencha o nome da
            clínica e do recepcionista e copie o texto pronto para usar no balcão ou no treinamento.
          </p>
        </>
      ),
      inlineTools: [
        {
          kind: 'scriptBlock',
          id: 'saudacao',
          title: 'Saudação e acolhimento',
          lines: [
            'Bom dia! Seja bem-vindo(a) à [Nome da Clínica]. Meu nome é [Nome do Recepcionista]. Como posso ajudá-lo(a) hoje?',
            'Por favor, sinta-se à vontade para se acomodar na sala de espera. Oferecemos água e café à disposição.',
          ],
        },
        {
          kind: 'scriptBlock',
          id: 'identificacao',
          title: 'Confirmação segura de dados (LGPD)',
          lines: [
            'Para darmos continuidade, você poderia me mostrar um documento oficial com foto, por favor? Obrigado(a).',
            'Vou apenas confirmar seus dados para sua segurança. Esse número que aparece na tela está correto?',
            'Perfeito, obrigado(a). Seus dados estão atualizados em nosso sistema.',
          ],
        },
        {
          kind: 'scriptBlock',
          id: 'encerramento',
          title: 'Encerramento',
          lines: [
            'Prontinho, Sr(a). [Sobrenome]. Sua consulta foi finalizada com sucesso.',
            'Lembramos que o prazo para reagendar sem custos é de 24 horas antes da consulta.',
            'Se precisar de qualquer ajuda futura, estamos à disposição. Tenha um bom dia!',
          ],
        },
      ],
    },
    {
      id: 'faqs',
      title: 'Matriz de FAQs (jargão → linguagem humana)',
      body: (
        <>
          <p>
            Traduzir o jargão técnico em linguagem acolhedora é parte do cuidado. Pesquise a dúvida
            do paciente e veja a resposta humanizada — e o que evitar.
          </p>
        </>
      ),
      inlineTools: [{ kind: 'faqMatrix' }],
    },
    {
      id: 'situacoes-delicadas',
      title: 'Protocolos de situações delicadas',
      body: (
        <>
          <p>
            Três situações exigem condução cuidadosa. Use os fluxogramas interativos para decidir o
            próximo passo com empatia e segurança:
          </p>
          <ul>
            <li>
              <strong>Atraso do paciente</strong> — equilíbrio entre a agenda do médico e o
              acolhimento.
            </li>
            <li>
              <strong>Falta de documentos</strong> — oferecer alternativas sem constranger.
            </li>
            <li>
              <strong>Paciente irritado</strong> — funil de desescalada pela escuta ativa.
            </li>
          </ul>
        </>
      ),
      inlineTools: [
        { kind: 'decisionTree', treeId: 'atraso-paciente' },
        { kind: 'decisionTree', treeId: 'sem-documento' },
        { kind: 'decisionTree', treeId: 'paciente-irritado' },
      ],
    },
    {
      id: 'codigo-conduta',
      title: 'Código de conduta (auto-avaliação)',
      body: (
        <>
          <p>
            Este resumo operacional deve estar visível em cada posto de trabalho. Use como checklist
            de auto-avaliação da postura no atendimento.
          </p>
        </>
      ),
      inlineTools: [
        {
          kind: 'checklist',
          id: 'conduta-recepcao',
          title: 'Conduta na recepção',
          items: [
            'Postura ereta, mãos visíveis, contato visual durante a interação',
            'Tom de voz calmo e em volume moderado (sem gritar para chamar pacientes)',
            'Monitor posicionado fora da visão de terceiros; bloquear a tela ao se ausentar (Win+L)',
            'Fichas e guias guardadas — nada com dados pessoais exposto no balcão',
            'Atender o telefone até o terceiro toque, sem deixar o presencial sem explicação',
            'Sem celular pessoal ou redes sociais durante o expediente',
            'Falar diretamente com a pessoa com deficiência, oferecendo ajuda sem impor',
          ],
        },
      ],
    },
    {
      id: 'treino',
      title: 'Treine com o simulador',
      body: (
        <>
          <p>
            Pratique o atendimento em cenários reais. O simulador (no painel de ferramentas) faz a
            IA atuar como paciente — treine acolhimento, desescalada e os scripts em situações como
            atraso, falta de documento ou irritação.
          </p>
        </>
      ),
    },
  ],
  panelTools: [{ kind: 'ragChat' }, { kind: 'rolePlay', mode: 'patient' }],
};
