/* ============================================================
   Kit F4 · Dados das ferramentas interativas (não-IA)
   Extraídos dos manuais de Atendimento, CRC e Marketing.
   ============================================================ */

/* ---------- Árvores de decisão (Atendimento + CRC) ---------- */
export type TreeNode = {
  id: string;
  pergunta: string;
  opcoes: { rotulo: string; proximo?: string; resultado?: string; alerta?: boolean }[];
};
export type DecisionTreeData = { titulo: string; intro: string; nodes: Record<string, TreeNode>; start: string };

export const DECISION_TREES: Record<string, DecisionTreeData> = {
  'atraso-paciente': {
    titulo: 'Paciente atrasado',
    intro: 'Como conduzir quando o paciente chega após o horário agendado.',
    start: 'q1',
    nodes: {
      q1: {
        id: 'q1',
        pergunta: 'Qual o tempo de atraso?',
        opcoes: [
          { rotulo: 'Até a tolerância da clínica', proximo: 'ok' },
          { rotulo: 'Acima da tolerância', proximo: 'agenda' },
        ],
      },
      ok: {
        id: 'ok',
        pergunta: 'Dentro da tolerância',
        opcoes: [
          {
            rotulo: 'Encaminhar normalmente',
            resultado:
              'Acolha sem constranger, registre a chegada e informe a equipe. Reforce com gentileza o horário para o próximo retorno.',
          },
        ],
      },
      agenda: {
        id: 'agenda',
        pergunta: 'Há possibilidade de encaixe sem prejudicar os próximos pacientes?',
        opcoes: [
          {
            rotulo: 'Sim, há janela',
            resultado:
              'Explique que houve atraso, ofereça previsão realista e confirme se o paciente pode aguardar. Mantenha tom acolhedor.',
          },
          {
            rotulo: 'Não, comprometeria a agenda',
            resultado:
              'Com empatia, explique que para preservar a qualidade do atendimento será necessário reagendar. Ofereça a próxima data disponível.',
          },
        ],
      },
    },
  },
  'sem-documento': {
    titulo: 'Falta de documentos',
    intro: 'Quando o paciente chega sem os documentos necessários.',
    start: 'q1',
    nodes: {
      q1: {
        id: 'q1',
        pergunta: 'O documento é indispensável para o procedimento de hoje?',
        opcoes: [
          { rotulo: 'Não é indispensável', proximo: 'segue' },
          { rotulo: 'É indispensável', proximo: 'critico' },
        ],
      },
      segue: {
        id: 'segue',
        pergunta: 'Não indispensável',
        opcoes: [
          {
            rotulo: 'Prosseguir e registrar',
            resultado:
              'Prossiga com o atendimento e registre a pendência. Oriente, sem constranger, a trazer o documento na próxima visita.',
          },
        ],
      },
      critico: {
        id: 'critico',
        pergunta: 'O paciente consegue enviar/apresentar digitalmente agora?',
        opcoes: [
          {
            rotulo: 'Sim (foto/app)',
            resultado: 'Aceite o documento digital conforme a política da clínica e prossiga normalmente.',
          },
          {
            rotulo: 'Não consegue',
            resultado:
              'Explique com clareza por que o documento é necessário e ofereça reagendamento ou solução alternativa. Mantenha o acolhimento.',
          },
        ],
      },
    },
  },
  'paciente-irritado': {
    titulo: 'Paciente irritado (funil de desescalada)',
    intro: 'Roteiro de desescalada para situações de tensão.',
    start: 'q1',
    nodes: {
      q1: {
        id: 'q1',
        pergunta: '1. Escute e valide. O paciente se sentiu ouvido?',
        opcoes: [
          { rotulo: 'Sim, acalmou', proximo: 'resolve' },
          { rotulo: 'Continua alterado', proximo: 'q2' },
        ],
      },
      q2: {
        id: 'q2',
        pergunta: '2. Demonstre empatia e assuma a condução. A situação é resolvível na recepção?',
        opcoes: [
          { rotulo: 'Sim', proximo: 'resolve' },
          { rotulo: 'Não / agressividade persistente', proximo: 'escala' },
        ],
      },
      resolve: {
        id: 'resolve',
        pergunta: 'Resolução',
        opcoes: [
          {
            rotulo: 'Apresentar solução',
            resultado:
              'Ofereça uma solução concreta com prazo claro, agradeça a paciência e registre a ocorrência para acompanhamento.',
          },
        ],
      },
      escala: {
        id: 'escala',
        pergunta: 'Encaminhamento',
        opcoes: [
          {
            rotulo: 'Acionar liderança',
            resultado:
              'Conduza o paciente a um ambiente reservado e acione o gestor/responsável. Nunca discuta; preserve a dignidade de todos.',
            alerta: true,
          },
        ],
      },
    },
  },
  'sem-vagas': {
    titulo: 'Sem vagas (matriz de resolução)',
    intro: 'Quando não há horário disponível na data desejada pelo paciente.',
    start: 'q1',
    nodes: {
      q1: {
        id: 'q1',
        pergunta: 'O caso tem caráter de urgência?',
        opcoes: [
          { rotulo: 'Sim, urgência', proximo: 'urg' },
          { rotulo: 'Não, eletivo', proximo: 'eletivo' },
        ],
      },
      urg: {
        id: 'urg',
        pergunta: 'Urgência',
        opcoes: [
          {
            rotulo: 'Aplicar protocolo de encaixe',
            resultado:
              'Acione o protocolo de urgência: busque encaixe no mesmo dia e comunique a equipe clínica imediatamente.',
            alerta: true,
          },
        ],
      },
      eletivo: {
        id: 'eletivo',
        pergunta: 'O paciente aceita entrar na lista de espera?',
        opcoes: [
          {
            rotulo: 'Sim',
            resultado:
              'Registre na lista de espera e ofereça a próxima data disponível. Comprometa-se a avisar se surgir vaga antes.',
          },
          {
            rotulo: 'Quer a data específica',
            resultado:
              'Ofereça alternativas próximas (turno/profissional diferente). Se não houver acordo, reforce o compromisso de retorno proativo.',
          },
        ],
      },
    },
  },
  'red-flags': {
    titulo: 'Red flags de urgência médica',
    intro: '⚠️ Sinais que exigem priorização imediata e orientação de segurança.',
    start: 'q1',
    nodes: {
      q1: {
        id: 'q1',
        pergunta: 'O paciente relata algum destes sinais?',
        opcoes: [
          { rotulo: 'Inchaço com dificuldade de respirar/engolir', proximo: 'emerg', alerta: true },
          { rotulo: 'Trauma com sangramento intenso', proximo: 'emerg', alerta: true },
          { rotulo: 'Dor intensa súbita / febre alta', proximo: 'prioriza' },
          { rotulo: 'Desconforto leve', proximo: 'rotina' },
        ],
      },
      emerg: {
        id: 'emerg',
        pergunta: 'Emergência',
        opcoes: [
          {
            rotulo: 'Orientar serviço de emergência',
            resultado:
              '⚠️ Oriente o paciente a procurar pronto-socorro/serviço de emergência imediatamente. Não tente resolver pelo telefone. Acione a liderança.',
            alerta: true,
          },
        ],
      },
      prioriza: {
        id: 'prioriza',
        pergunta: 'Priorização',
        opcoes: [
          {
            rotulo: 'Encaixe prioritário',
            resultado: 'Busque encaixe prioritário no mesmo dia e comunique a equipe clínica sobre o quadro relatado.',
          },
        ],
      },
      rotina: {
        id: 'rotina',
        pergunta: 'Rotina',
        opcoes: [{ rotulo: 'Agendar normalmente', resultado: 'Agende conforme a disponibilidade, registrando a queixa relatada.' }],
      },
    },
  },
};

/* ---------- FAQs do paciente (Atendimento) ---------- */
export type FaqItem = { duvida: string; resposta: string; jargao: string };
export const FAQS: FaqItem[] = [
  {
    duvida: 'Vou precisar fazer canal?',
    resposta: 'O dentista vai avaliar se o tratamento da parte interna do dente é necessário e te explicar tudo antes.',
    jargao: 'Evite: "tratamento endodôntico" sem explicação.',
  },
  {
    duvida: 'O que é uma profilaxia?',
    resposta: 'É a limpeza profissional que remove o tártaro e a placa, deixando os dentes saudáveis.',
    jargao: 'Evite: usar só "profilaxia" sem traduzir.',
  },
  {
    duvida: 'Por que preciso de uma radiografia?',
    resposta: 'É uma imagem que ajuda o dentista a enxergar o que não aparece a olho nu e planejar o melhor tratamento.',
    jargao: 'Evite: "exame de imagem radiológico" técnico demais.',
  },
  {
    duvida: 'O que é um implante?',
    resposta: 'É um pino que substitui a raiz de um dente perdido, servindo de base para um dente novo fixo.',
    jargao: 'Evite: "osseointegração" sem contexto.',
  },
  {
    duvida: 'Esse procedimento dói?',
    resposta: 'O conforto é prioridade; usamos anestesia e o dentista acompanha você em cada etapa.',
    jargao: 'Nunca prometa "não vai doer nada" — alinhe expectativas com honestidade.',
  },
];

/* ---------- Banco de objeções (CRC Comercial) ---------- */
export type Objection = { objecao: string; resposta: string };
export const OBJECTIONS: Objection[] = [
  {
    objecao: 'Está caro / não tenho como pagar agora',
    resposta:
      'Entendo perfeitamente. Temos opções de parcelamento e condições para pagamento à vista. Posso te mostrar a que melhor cabe no seu momento?',
  },
  {
    objecao: 'Vou pensar / preciso conversar em casa',
    resposta:
      'Claro, é uma decisão importante. Posso te enviar o plano por escrito para ajudar nessa conversa e marcar um retorno para tirar dúvidas?',
  },
  {
    objecao: 'Tenho medo do procedimento',
    resposta:
      'É natural. O dentista acompanha cada etapa e prioriza o seu conforto. Quer que eu explique como funciona para você se sentir mais segura(o)?',
  },
  {
    objecao: 'Vou ver com outro profissional',
    resposta:
      'Faz todo sentido buscar segurança. Estou à disposição para esclarecer qualquer ponto do nosso plano sempre que precisar.',
  },
  {
    objecao: 'Não é urgente, deixo para depois',
    resposta:
      'Posso entender. Vale lembrar que iniciar no tempo certo costuma evitar tratamentos mais longos. Que tal reservarmos uma data sem compromisso?',
  },
];

/* ---------- Roadmap das 5 fases da chamada (CRC) ---------- */
export type CallPhase = { nome: string; objetivo: string; script: string[] };
export const CALL_PHASES: CallPhase[] = [
  {
    nome: 'Saudação',
    objetivo: 'Transmitir acolhimento e profissionalismo na primeira impressão (a voz é o sorriso ao telefone).',
    script: ['[Clínica], bom dia! Aqui é a [Nome], em que posso ajudar você hoje?'],
  },
  {
    nome: 'Triagem',
    objetivo: 'Entender a necessidade sem julgamento e identificar urgência.',
    script: [
      'Para te ajudar da melhor forma, pode me contar um pouquinho o que você está sentindo ou procurando?',
    ],
  },
  {
    nome: 'Dados',
    objetivo: 'Coletar as informações essenciais respeitando a LGPD.',
    script: [
      'Vou anotar alguns dados para o seu cadastro, tudo bem? Pode me confirmar seu nome completo e um telefone para contato?',
    ],
  },
  {
    nome: 'Confirmação',
    objetivo: 'Reconfirmar data, horário e orientações, alinhando expectativas.',
    script: [
      'Então fica confirmado para [data] às [hora] com [profissional]. Vou te enviar a confirmação por WhatsApp, combinado?',
    ],
  },
  {
    nome: 'Encerramento',
    objetivo: 'Despedida cordial e reforço do compromisso (gatilho para a Regra dos 5 minutos).',
    script: ['Perfeito! Qualquer dúvida estou à disposição. Tenha um ótimo dia e até [data]!'],
  },
];

/* ---------- Funil 5Ns (Marketing) ---------- */
export type FunnelLevel = { nivel: string; nome: string; objetivo: string; tipoVideo: string };
export const FUNNEL_5N: FunnelLevel[] = [
  { nivel: 'N1', nome: 'Inconsciente', objetivo: 'Chamar atenção de quem nem sabe que tem o problema.', tipoVideo: 'Conteúdo de conexão e curiosidade (dores do dia a dia).' },
  { nivel: 'N2', nome: 'Consciente do problema', objetivo: 'Mostrar que o problema tem nome e solução.', tipoVideo: 'Educativo: "você sabia que…", mitos e verdades.' },
  { nivel: 'N3', nome: 'Consciente da solução', objetivo: 'Apresentar o tipo de tratamento como caminho.', tipoVideo: 'Autoridade: como funciona o tratamento, bastidores.' },
  { nivel: 'N4', nome: 'Consciente do produto', objetivo: 'Mostrar por que a sua clínica é a escolha certa.', tipoVideo: 'Prova: casos, depoimentos, diferenciais (com ética).' },
  { nivel: 'N5', nome: 'Totalmente consciente', objetivo: 'Levar à ação agora.', tipoVideo: 'Conversão: convite claro para agendar, CTA direto.' },
];

/* ---------- Checklist de produção (Marketing) ---------- */
export const PRODUCTION_ITEMS = [
  'Luz: filme de frente para a janela ou use luz suave; evite contraluz.',
  'Áudio: ambiente silencioso; teste o som antes de gravar tudo.',
  'Legendas: adicione sempre — a maioria assiste sem som.',
  'Gravação em lote: separe um dia e grave vários vídeos de uma vez.',
  'Gancho nos primeiros 5 segundos: comece pela parte mais forte.',
  'Ética: sem promessa de resultado, sem antes/depois sensacionalista, respeite a LGPD do paciente.',
];
