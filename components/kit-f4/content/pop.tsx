import type { DocModel } from './types';

/* ============================================================
   POP — Procedimento Operacional Padrão (Gestão)
   Conteúdo extraído do PDF "pop (GESTÃO)" + estrutura do PRD §5.1.
   ============================================================ */

export const POP_DOC: DocModel = {
  id: 'pop',
  title: 'POP — Procedimento Operacional Padrão',
  subtitle:
    'O mapa estratégico e operacional da clínica: como cada cargo opera com excelência dentro do Ecossistema de Excelência Clínica.',
  eyebrow: 'Kit F4 · Gestão',
  readingMinutes: 28,
  sections: [
    {
      id: 'introducao',
      title: 'Por que padronizar',
      body: (
        <>
          <p>
            Uma clínica que cresce sem processos vira refém do improviso. O Procedimento Operacional
            Padrão (POP) transforma o conhecimento que vive na cabeça de cada pessoa em um sistema
            que qualquer membro da equipe pode seguir — garantindo a mesma experiência ao paciente,
            independentemente de quem está no plantão.
          </p>
          <p>
            Este documento tem dois blocos: primeiro a <strong>visão estratégica</strong> (o
            Ecossistema de Excelência Clínica), depois os <strong>POPs operacionais</strong> de cada
            cargo. Use o seletor de cargo para ir direto à rotina que você precisa.
          </p>
        </>
      ),
    },
    {
      id: 'ecossistema',
      title: 'Ecossistema de Excelência Clínica',
      body: (
        <>
          <p>
            A clínica é organizada em três camadas que funcionam como um sistema sincronizado. Cada
            camada tem um foco e uma métrica própria, mas todas se comunicam — é essa rede de
            sincronia operacional que transforma a clínica em uma máquina de escalabilidade.
          </p>
          <ul>
            <li>
              <strong>Linha de Frente</strong> (Acolhimento e Conversão): Recepção, CRC e CRC
              Comercial. É a porta de entrada e o funil comercial.
            </li>
            <li>
              <strong>Motor Clínico</strong> (Precisão e Biossegurança): TSB, ASB, Enfermagem,
              Radiologia e Serviços Gerais. Sustenta o ciclo fechado de biossegurança.
            </li>
            <li>
              <strong>Centro de Comando</strong> (Previsibilidade e Crescimento):
              Gerente/Financeiro. Garante dados, metas e escalabilidade.
            </li>
          </ul>
          <p>Clique em cada camada abaixo para ver os papéis e a métrica-chave.</p>
        </>
      ),
      inlineTools: [{ kind: 'ecosystem' }],
    },
    {
      id: 'pops-por-cargo',
      title: 'POPs por cargo',
      body: (
        <>
          <p>
            Cada cargo tem uma rotina detalhada, com o mesmo padrão: apresentação pessoal,
            preparação, biossegurança, rotinas diárias (abertura, expediente e fechamento),
            comunicação e relatórios. Selecione o cargo para ver o POP correspondente.
          </p>
        </>
      ),
      inlineTools: [{ kind: 'roleSelector' }],
    },
    {
      id: 'matriz-responsabilidades',
      title: 'Quem faz o quê: ASB × TSB × Enfermagem',
      body: (
        <>
          <p>
            As funções de apoio clínico se sobrepõem em alguns pontos e se diferenciam em outros.
            Esta matriz ajuda a evitar tanto a duplicidade quanto as lacunas de responsabilidade.
            Filtre por cargo para ver apenas as atividades de cada um.
          </p>
        </>
      ),
      inlineTools: [{ kind: 'responsibilityMatrix' }],
    },
    {
      id: 'checklist-abertura',
      title: 'Checklists de rotina',
      body: (
        <>
          <p>
            A consistência nasce da repetição estruturada. Use estes checklists para garantir que
            nada seja esquecido na abertura, durante o expediente e no fechamento. As marcações
            ficam salvas neste dispositivo.
          </p>
        </>
      ),
      inlineTools: [
        {
          kind: 'checklist',
          id: 'rotina-abertura',
          title: 'Abertura da clínica',
          items: [
            'Verificar limpeza geral dos ambientes',
            'Ligar computadores e checar e-mails antes das 09h',
            'Telefone da clínica ligado e com bateria',
            'Conferir agenda do dia e alinhar com a CRC',
            'Verificar funcionamento dos equipamentos clínicos',
            'Conferir EPIs e itens de biossegurança',
          ],
        },
        {
          kind: 'checklist',
          id: 'rotina-expediente',
          title: 'Durante o expediente',
          items: [
            'Registrar check-in e informar a equipe clínica',
            'Manter limpeza contínua entre atendimentos',
            'Repor materiais conforme necessidade',
            'Acompanhar o fluxo e comunicar atrasos com educação',
          ],
        },
        {
          kind: 'checklist',
          id: 'rotina-fechamento',
          title: 'Fechamento da clínica',
          items: [
            'Realizar limpeza completa dos ambientes',
            'Encaminhar materiais para esterilização',
            'Desligar equipamentos corretamente',
            'Registrar o fluxo diário e ocorrências',
            'Organizar tudo para o dia seguinte',
          ],
        },
      ],
    },
    {
      id: 'gerador',
      title: 'Gerador de POP personalizado',
      body: (
        <>
          <p>
            Preencha o nome da clínica e o responsável para gerar um POP pronto para imprimir e
            assinar. Escolha o cargo e use o botão de impressão para salvar em PDF.
          </p>
        </>
      ),
      inlineTools: [{ kind: 'popGenerator' }],
    },
  ],
  panelTools: [{ kind: 'ragChat' }],
};
