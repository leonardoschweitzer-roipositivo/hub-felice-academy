/* ============================================================
   Kit F4 · POP por cargo — dados extraídos do PDF "pop (GESTÃO)".
   Fonte de verdade do conteúdo. Editável para atualizar os POPs.
   ============================================================ */

export type PopBlock = { titulo: string; itens: string[] };

export type PopRole = {
  id: string;
  cargo: string;
  /** camada do ecossistema a que o cargo pertence */
  camada: 'frente' | 'motor' | 'comando';
  resumo: string;
  blocos: PopBlock[];
};

export const POP_ROLES: PopRole[] = [
  {
    id: 'recepcionista',
    cargo: 'Recepcionista',
    camada: 'frente',
    resumo: 'O cartão de visitas da clínica: acolhe, organiza a agenda e conecta o paciente à equipe clínica.',
    blocos: [
      {
        titulo: 'Apresentação pessoal e ambiente',
        itens: [
          'Estar sempre uniformizado(a), com crachá visível e aparência impecável; manter postura acolhedora e profissional.',
          'Garantir recepção limpa, organizada e com materiais necessários; cuidar do conforto do ambiente (temperatura, música).',
          'Ligar o computador e verificar e-mails antes das 09h; telefone da clínica ligado e com bateria.',
        ],
      },
      {
        titulo: 'Recepção e cadastro de pacientes',
        itens: [
          'Cumprimentar com cordialidade e empatia, identificando-se pelo nome; confirmar o horário e solicitar documentos (RG, CPF, comprovante).',
          'Verificar se o paciente já está cadastrado; para novos, realizar cadastro completo no sistema.',
        ],
      },
      {
        titulo: 'Controle de agendamento',
        itens: [
          'Registrar o check-in no sistema e informar a equipe clínica; acompanhar o fluxo para que todos sejam atendidos no horário.',
          'Informar atrasos com educação e oferecer previsão de atendimento; registrar ausências e reagendar quando possível.',
        ],
      },
      {
        titulo: 'Atendimento telefônico e digital',
        itens: [
          'Atender chamadas com cordialidade, identificando-se com o nome da clínica; registrar recados e repassar à equipe.',
          'Responder WhatsApp/e-mail com rapidez; encaminhar dúvidas complexas ao setor responsável (comercial/financeiro).',
        ],
      },
      {
        titulo: 'Organização, pagamentos e relatórios',
        itens: [
          'Conferir e organizar a agenda no início e no fim do expediente, alinhando com a CRC para evitar conflitos.',
          'Acompanhar pendências financeiras e sinalizar ao financeiro; emitir relatório semanal do fluxo financeiro.',
          'Registrar o fluxo diário de pacientes e ocorrências relevantes; atualizar sistemas e organizar documentos.',
        ],
      },
    ],
  },
  {
    id: 'tsb',
    cargo: 'TSB — Técnico em Saúde Bucal',
    camada: 'motor',
    resumo: 'Garante eficiência, segurança e qualidade no consultório, dando suporte técnico direto ao dentista.',
    blocos: [
      {
        titulo: 'Apresentação e preparação do ambiente',
        itens: [
          'Uniforme limpo, touca, máscara e EPIs adequados; asseio pessoal impecável.',
          'Antes do atendimento: organizar o consultório com os materiais de cada procedimento e verificar equipamentos (cadeira, sugador, fotopolimerizador).',
          'Durante: auxiliar o dentista entregando instrumentos, operar o sugador e manter o campo limpo, antecipando-se às necessidades.',
        ],
      },
      {
        titulo: 'Esterilização e biossegurança',
        itens: [
          'Lavar, secar e embalar instrumentos em autoclave conforme os protocolos; registrar data de esterilização e validade do lote.',
          'Limpar e desinfetar superfícies após cada atendimento; descartar materiais de uso único corretamente.',
          'Executar protocolo pós-cirúrgico quando aplicável (laserterapia, gelo, sorvete).',
        ],
      },
      {
        titulo: 'Estoque, equipamentos e relatórios',
        itens: [
          'Controlar o estoque de materiais odontológicos e solicitar reposições com antecedência; emitir relatório semanal de consumo.',
          'Checar diariamente autoclave, compressor e sugador; relatar qualquer problema imediatamente.',
          'Registrar procedimentos realizados, materiais usados e ocorrências.',
        ],
      },
    ],
  },
  {
    id: 'asb',
    cargo: 'ASB — Auxiliar em Saúde Bucal',
    camada: 'motor',
    resumo: 'Apoia a rotina clínica: prepara salas, auxilia o dentista e mantém a biossegurança do ambiente.',
    blocos: [
      {
        titulo: 'Apresentação e preparação',
        itens: [
          'Uniforme limpo, touca, máscara, luvas e demais EPIs; postura profissional e comportamento discreto.',
          'Antes do atendimento: organizar o consultório com materiais básicos conforme orientação do dentista/TSB (luvas, gaze, roletes, pontas).',
          'Durante: auxiliar o dentista, operar o sugador e manter o campo de trabalho limpo, com agilidade e conforto ao paciente.',
        ],
      },
      {
        titulo: 'Esterilização e desinfecção',
        itens: [
          'Lavar, secar e organizar os instrumentos seguindo os protocolos internos; encaminhar para esterilização.',
          'Desinfetar cadeira, bancadas, refletor, mocho e cuspideira após cada atendimento, deixando a sala pronta para o próximo paciente.',
        ],
      },
      {
        titulo: 'Apoio, estoque e registros',
        itens: [
          'Observar o consumo de materiais e comunicar baixas ao responsável; manter gavetas e bandejas organizadas e identificadas.',
          'Auxiliar na montagem de bandejas e na preparação das salas; apoiar o fluxo de pacientes.',
          'Acolher o paciente com cuidado, transmitindo tranquilidade — sem passar informações clínicas sem autorização profissional.',
        ],
      },
    ],
  },
  {
    id: 'crc',
    cargo: 'CRC — Consultor de Relacionamento (Agendamento)',
    camada: 'frente',
    resumo: 'A primeira voz da clínica: agenda, confirma e organiza a entrada do paciente com acolhimento.',
    blocos: [
      {
        titulo: 'Atendimento e coleta de informações',
        itens: [
          'Atender ligações, mensagens e contatos com cordialidade, empatia e profissionalismo, identificando-se ao cliente.',
          'Registrar dados do paciente (nome, telefone, e-mail, motivo) e verificar se é novo ou já atendido.',
        ],
      },
      {
        titulo: 'Processo de agendamento',
        itens: [
          'Pacientes novos: explicar o funcionamento da clínica, coletar cadastro (CPF, nascimento, endereço), verificar disponibilidade e confirmar horário.',
          'Pacientes cadastrados: consultar histórico, confirmar o motivo do retorno, oferecer horários e reconfirmar.',
          'Confirmar consultas com 48h de antecedência (ligação ou WhatsApp/SMS).',
        ],
      },
      {
        titulo: 'Agenda, cancelamentos e comunicação',
        itens: [
          'Registrar cancelamentos com motivo e oferecer reagendamento; manter a agenda organizada e atualizada em tempo real.',
          'Priorizar o preenchimento de horários vagos com a lista de espera; comunicar alterações à equipe.',
          'Enviar boas-vindas/lembrete após o agendamento e solicitar feedback após a consulta.',
        ],
      },
    ],
  },
  {
    id: 'crc-comercial',
    cargo: 'CRC Comercial',
    camada: 'frente',
    resumo: 'Faz a ponte entre o paciente e o tratamento: apresenta planos, gere objeções e conduz o fechamento.',
    blocos: [
      {
        titulo: 'Contato e apresentação do plano',
        itens: [
          'Contato em até 24h após a primeira consulta para esclarecer dúvidas e reforçar os próximos passos, com abordagem empática.',
          'Detalhar cada etapa do tratamento em linguagem clara; reforçar benefícios para saúde, estética e qualidade de vida.',
          'Apresentar opções de pagamento de forma transparente (parcelamento, desconto à vista, financiamento).',
        ],
      },
      {
        titulo: 'Fechamento e follow-up',
        itens: [
          'Confirmar o aceite e registrar formalmente a aprovação; enviar contrato com valores, prazos e termos de cancelamento.',
          'Acompanhar semanalmente pacientes que ainda não fecharam, reforçando benefícios e tratando objeções (financeiras, dúvidas).',
          'Agendar o início do tratamento logo após o fechamento e enviar lembrete.',
        ],
      },
      {
        titulo: 'Relatórios e pós-venda',
        itens: [
          'Atualizar o sistema com tratamentos fechados e valores; compartilhar relatórios semanais com a gestão.',
          'Analisar padrões de fechamento e objeções para ajustar estratégias e melhorar a conversão.',
          'Realizar contato periódico pós-início para garantir satisfação e adesão ao plano.',
        ],
      },
    ],
  },
  {
    id: 'gerente',
    cargo: 'Gerente / Financeiro',
    camada: 'comando',
    resumo: 'O coração estratégico: garante previsibilidade, controle financeiro e crescimento escalável da clínica.',
    blocos: [
      {
        titulo: 'Gestão financeira',
        itens: [
          'Acompanhar diariamente entradas e saídas; manter projeção de fluxo de caixa (curto, médio e longo prazo).',
          'Conciliar pagamentos (Pix, cartão, boleto) e monitorar despesas fixas e variáveis, reduzindo desperdícios.',
          'Garantir sigilo absoluto sobre informações financeiras e estratégicas.',
        ],
      },
      {
        titulo: 'Faturamento, metas e indicadores',
        itens: [
          'Acompanhar faturamento diário/semanal/mensal; estruturar cobranças junto ao comercial e controlar inadimplência.',
          'Acompanhar KPIs: faturamento, ticket médio, taxa de conversão, inadimplência e lucratividade.',
          'Definir metas com a direção e propor melhorias estratégicas com base em dados reais.',
        ],
      },
      {
        titulo: 'Gestão de equipe, processos e relatórios',
        itens: [
          'Orientar recepção, comercial e clínico, garantindo alinhamento com os objetivos; promover treinamentos.',
          'Padronizar processos financeiros, realizar auditoria interna e garantir o uso correto dos sistemas.',
          'Apresentar relatórios gerenciais e fechamento mensal, comparando resultados com metas.',
        ],
      },
    ],
  },
  {
    id: 'servicos-gerais',
    cargo: 'Serviços Gerais',
    camada: 'motor',
    resumo: 'Sustenta a percepção de cuidado: uma clínica limpa e organizada transmite segurança antes da consulta.',
    blocos: [
      {
        titulo: 'Limpeza e organização',
        itens: [
          'Limpar com frequência recepção, banheiros, corredores e áreas administrativas; auxiliar na organização dos consultórios.',
          'Seguir cronograma diário, semanal e mensal de higienização, mantendo padrão de qualidade.',
          'Monitorar e repor materiais de limpeza (papel, sabonete, álcool); solicitar compras com antecedência.',
        ],
      },
      {
        titulo: 'Resíduos e experiência do paciente',
        itens: [
          'Descartar corretamente lixo comum e resíduos clínicos, usando EPIs e respeitando a biossegurança.',
          'Garantir ambiente limpo, cheiroso e agradável; agir de forma preventiva e discreta, sem interferir no atendimento.',
        ],
      },
      {
        titulo: 'Rotinas diárias',
        itens: [
          'Abertura: verificar limpeza geral, organizar recepção e áreas comuns, conferir materiais básicos.',
          'Expediente: manter limpeza contínua, repor materiais e apoiar a equipe.',
          'Fechamento: limpeza completa, organização para o dia seguinte e recolhimento do lixo.',
        ],
      },
    ],
  },
  {
    id: 'radiologia',
    cargo: 'Radiologia',
    camada: 'motor',
    resumo: 'Guia decisões clínicas: imagens nítidas reduzem dúvidas, evitam retrabalho e transmitem segurança.',
    blocos: [
      {
        titulo: 'Execução dos exames',
        itens: [
          'Orientar o paciente sobre o exame, posicionamento e cuidados; garantir posicionamento correto para a qualidade da imagem.',
          'Executar exames com precisão técnica e agilidade, gerando imagens nítidas e úteis para diagnóstico.',
        ],
      },
      {
        titulo: 'Biossegurança e proteção radiológica',
        itens: [
          'Usar avental de chumbo e protetor de tireoide quando necessário; seguir normas de radioproteção e usar EPIs (incluindo dosímetro).',
          'Cumprir normas da vigilância sanitária; evitar repetições desnecessárias de exames.',
        ],
      },
      {
        titulo: 'Imagens, organização e rotinas',
        itens: [
          'Salvar corretamente os exames no sistema, identificados pelo nome do paciente, e encaminhar ao dentista com rapidez.',
          'Manter a sala limpa e os equipamentos funcionando; organizar a sequência de exames para evitar atrasos.',
          'Abertura/fechamento: verificar equipamentos e EPIs, salvar imagens e deixar a sala pronta para o próximo dia.',
        ],
      },
    ],
  },
  {
    id: 'enfermagem',
    cargo: 'Técnico / Auxiliar de Enfermagem',
    camada: 'motor',
    resumo: 'Peça-chave do funcionamento seguro: prepara o ambiente, apoia procedimentos e zela pela biossegurança.',
    blocos: [
      {
        titulo: 'Preparação e apoio aos procedimentos',
        itens: [
          'Organizar sala, materiais e instrumentais antes dos atendimentos; conferir disponibilidade de materiais esterilizados.',
          'Auxiliar dentistas e equipe durante procedimentos clínicos e cirúrgicos, mantendo fluxo eficiente.',
        ],
      },
      {
        titulo: 'Biossegurança e controle de infecção',
        itens: [
          'Usar corretamente luvas, máscara, gorro, óculos e avental; desinfetar superfícies e equipamentos após cada atendimento.',
          'Auxiliar na lavagem, embalagem e esterilização de materiais; cumprir normas de biossegurança e vigilância sanitária.',
        ],
      },
      {
        titulo: 'Materiais, paciente e rotinas',
        itens: [
          'Controlar materiais clínicos e descartáveis, conferir validades e informar reposições antecipadamente.',
          'Acolher pacientes de forma humanizada, orientar cuidados pré/pós-procedimento e preservar o sigilo das informações.',
          'Abertura/fechamento: organizar salas, conferir instrumentais e EPIs, encaminhar materiais para esterilização.',
        ],
      },
    ],
  },
];

/** Matriz de responsabilidades comparada (ASB × TSB × Enfermagem). */
export type MatrixRow = { atividade: string; asb: boolean; tsb: boolean; enfermagem: boolean };

export const RESPONSIBILITY_MATRIX: MatrixRow[] = [
  { atividade: 'Preparar a sala e montar bandejas', asb: true, tsb: true, enfermagem: true },
  { atividade: 'Operar o sugador / aspiração contínua', asb: true, tsb: true, enfermagem: false },
  { atividade: 'Lavar e embalar instrumentos', asb: true, tsb: true, enfermagem: true },
  { atividade: 'Registrar lote e validade da esterilização', asb: false, tsb: true, enfermagem: false },
  { atividade: 'Controle de estoque e relatório semanal de consumo', asb: false, tsb: true, enfermagem: true },
  { atividade: 'Protocolo pós-cirúrgico (laserterapia, gelo)', asb: false, tsb: true, enfermagem: true },
  { atividade: 'Apoio em procedimentos cirúrgicos', asb: false, tsb: true, enfermagem: true },
  { atividade: 'Conferir validade de medicamentos', asb: false, tsb: false, enfermagem: true },
  { atividade: 'Orientar cuidados pré e pós-procedimento', asb: true, tsb: true, enfermagem: true },
];
