import { whatsappUrl } from '@/lib/whatsapp/contato';

/* ============================================================
   CONSULTORIA GESTÃO F4 · conteúdo central da landing de vendas
   Edite SÓ aqui copy, ciclo, entregáveis, FAQ e números.

   Fonte de TODO o conteúdo: o deck "Gestão de clínica" (Canva, 18
   páginas) apresentado pelo Dr. Sócrates. Nada aqui é inventado —
   dores, setups, entregáveis e números saíram de lá.

   Venda por APLICAÇÃO, SEM PREÇO (decisão do Leo em 10/08/2026):
   o deck ancora R$ 22 mil → R$ 6 mil, mas nada disso vai para a
   página. O valor aparece só na conversa de diagnóstico.

   ⚠️ TROCAR antes de publicar:
   - VAGAS: quantas vagas por mês (o deck não diz — confirmar).
   - Foto do hero e /images/card-consultoria.jpg.
   - Depoimentos: NÃO existem ainda. Enquanto não houver depoimento
     real de cliente de consultoria, a seção fica fora da página.
   ============================================================ */

/** Destino dos CTAs = questionário de aplicação desta landing. */
export const APLICACAO_URL = '/produtos/consultoria/aplicacao';

/** Âncora interna para os CTAs de "rolar até a candidatura". */
export const OFERTA_ANCHOR = '#candidatura';

/** WhatsApp de dúvidas (botão flutuante). */
export const WHATSAPP_URL = whatsappUrl(
  'Olá! Tenho interesse na Consultoria Gestão F4 e gostaria de tirar uma dúvida antes de me candidatar.',
);

/* ---------- Hero ---------- */
export const HERO = {
  eyebrow: 'Consultoria · Método Gestão F4',
  titlePre: 'Sua clínica estruturada em 4 semanas para',
  titleGold: 'bater recordes de vendas.',
  lead: 'Uma consultoria conduzida dentro da sua clínica: auditamos gestão, atendimento, comercial e marketing, entregamos um pacote de implementações que resolve as lacunas no curto prazo e um planejamento estratégico de 12 meses para você crescer com previsibilidade.',
  ctaPrimary: 'Quero me candidatar',
  ctaSecondary: 'Ver o ciclo da consultoria',
  trust: [
    '4 semanas de auditoria',
    'Plano de ação personalizado',
    'Planejamento de 12 meses',
    'Entrada por aplicação',
  ],
};

/** Card de prova "glass" no hero (coluna direita). */
export const HERO_CARD = {
  destaque: { num: '4 setups', label: 'Gestão · Atendimento · Comercial · Marketing' },
  progresso: { label: 'Método validado na Clínica Felice', valor: 100 },
  mini: [
    { v: '4 sem.', l: 'Duração' },
    { v: '16', l: 'Entregáveis' },
    { v: '12 meses', l: 'Plano' },
  ],
  pills: { live: 'Vagas abertas', premium: 'Premium' },
};

/** Faixa (marquee) de temas auditados — card glass no hero. */
export const HERO_MARQUEE = {
  titulo: 'O que a auditoria coloca na mesa',
  itens: [
    'Faturamento real x potencial',
    'Ticket médio',
    'Margem por procedimento',
    'Taxa de conversão',
    'Jornada do paciente',
    'Método comercial',
    'Diagnóstico de mídia',
    'Plano de 12 meses',
  ],
};

/* ---------- Números / prova (pág. 6, 10 e 16 do deck) ---------- */
export const STATS: { num: string; label: string }[] = [
  { num: '4 semanas', label: 'De auditoria e análises estratégicas' },
  { num: '4 setups', label: 'Gestão, Atendimento, Comercial e Marketing' },
  { num: '16 entregáveis', label: 'Documentos e protocolos prontos para usar' },
  { num: '12 meses', label: 'De planejamento estratégico de crescimento' },
];

/* ---------- Problema / dores (pág. 4 do deck, textos originais) ---------- */
export const DORES: { titulo: string; texto: string }[] = [
  {
    titulo: 'Falta de clareza financeira',
    texto:
      'Você trabalha muito, mas não tem previsibilidade. Sem indicadores claros, ticket médio definido e controle real de conversão, a clínica vive no "achismo". Sem números, não existe estratégia — apenas tentativa e erro.',
  },
  {
    titulo: 'Processos desorganizados',
    texto:
      'Sua equipe trabalha, mas não opera dentro de um método. Sem roteiro de atendimento, padrão comercial e protocolo claro de jornada do paciente, cada colaborador age de um jeito — e inconsistência gera perda invisível de faturamento.',
  },
  {
    titulo: 'Marketing sem estratégia',
    texto:
      'Gerar lead não é o mesmo que gerar paciente. Muitas clínicas investem em redes sociais e tráfego, mas não têm um funil estruturado. Sem integração entre marketing e comercial, o dinheiro investido não volta com previsibilidade.',
  },
];
export const DORES_FECHAMENTO = {
  pre: 'Grandes clínicas não dependem de pessoas boas.',
  gold: 'Dependem de processos bem definidos.',
};

/* ---------- Solução (pág. 5 do deck) ---------- */
export const SOLUCOES: { n: string; titulo: string; texto: string }[] = [
  {
    n: '01',
    titulo: 'Previsibilidade real',
    texto:
      'Começamos pelo que sustenta qualquer crescimento: os números. Raio-x completo da clínica, faturamento real, ticket médio e taxa de conversão — para achar exatamente onde o dinheiro está sendo perdido e estruturar indicadores e metas objetivas.',
  },
  {
    n: '02',
    titulo: 'Estrutura operacional',
    texto:
      'Grandes números não vêm de esforço individual, vêm de processo. Organizamos o atendimento da recepção ao fechamento: roteiro de primeira consulta, padrão de acolhimento, método de apresentação de plano e processo comercial.',
  },
  {
    n: '03',
    titulo: 'Funil previsível',
    texto:
      'Marketing não pode ser movimento aleatório. Ajustamos o posicionamento, definimos o público ideal, organizamos o funil e alinhamos marketing com o comercial — para cada lead gerado ter um caminho claro até virar paciente.',
  },
];

/* ---------- Como funciona na prática (pág. 6 a 9 do deck) ---------- */
export const METODO_HEAD = {
  eyebrow: 'Como vamos fazer na prática',
  titlePre: '4 encontros, 4 pilares,',
  titleGold: '1 transformação.',
};

export const METODO: { n: string; titulo: string; texto: string }[] = [
  {
    n: '01',
    titulo: 'Auditorias e análises estratégicas',
    texto:
      'Em 4 semanas, nossos especialistas em gestão de clínicas e marketing de performance analisam os principais pilares da sua clínica para encontrar as restrições e apontar as soluções mais eficazes.',
  },
  {
    n: '02',
    titulo: 'Pacote de implementações Gestão F4',
    texto:
      'No final da auditoria, entregamos um pacote de implementações do Gestão F4 — as soluções de gestão e marketing que resolvem já no curto prazo as lacunas encontradas pelas nossas análises.',
  },
  {
    n: '03',
    titulo: 'Planejamento estratégico de 12 meses',
    texto:
      'Resolvidos os problemas de curto prazo, entregamos um plano de crescimento para os próximos 12 meses. Depois você decide se vai executá-lo com o seu time ou com um time de especialistas da Felice Academy.',
  },
];

/* ---------- O Ciclo da Consultoria (pág. 10 do deck) ---------- */
export const CICLO_INTRO =
  'Transformar clínicas odontológicas em estruturas organizadas, previsíveis e rentáveis, por meio de um método prático de gestão que alinha atendimento, comercial e marketing para gerar crescimento sustentável.';

/** Total de semanas do ciclo — é o eixo do gráfico. */
export const CICLO_SEMANAS = 4;

/** `semana` posiciona a barra no gráfico. Vem do FAQ: "São 4 semanas, com 4
 *  encontros — um por setup". Se um setup passar a ocupar duas semanas, é só
 *  mudar aqui; o componente não assume que semana = índice. */
export const CICLO: { setup: string; titulo: string; objetivo: string; semana: number }[] = [
  {
    setup: 'Setup 1',
    titulo: 'Auditoria e Gestão',
    objetivo: 'Descobrir onde a clínica está perdendo dinheiro, energia e oportunidade.',
    semana: 1,
  },
  {
    setup: 'Setup 2',
    titulo: 'Atendimento e Jornada do Paciente',
    objetivo:
      'Fazer da recepção e do atendimento uma ferramenta estratégica de conversão, e não um custo.',
    semana: 2,
  },
  {
    setup: 'Setup 3',
    titulo: 'Setor Comercial',
    objetivo: 'Analisar a taxa de conversão e saber como aumentar o número de pacientes.',
    semana: 3,
  },
  {
    setup: 'Setup 4',
    titulo: 'Marketing Estratégico',
    objetivo:
      'Criar previsibilidade de novos pacientes e um setor de marketing que gera resultado.',
    semana: 4,
  },
];

/** Faixas contínuas do gráfico: o que corre POR BAIXO dos encontros. As duas
 *  saem do FAQ ("entre eles, os especialistas analisam os seus números") e da
 *  oferta (16 entregáveis + planejamento de 12 meses). */
export const CICLO_FAIXAS: { titulo: string; de: number; ate: number; tipo?: 'entrega' }[] = [
  {
    titulo: 'Análise dos seus números entre os encontros',
    de: 1,
    ate: CICLO_SEMANAS,
  },
  {
    titulo: '16 entregáveis + planejamento de 12 meses',
    de: CICLO_SEMANAS,
    ate: CICLO_SEMANAS,
    tipo: 'entrega',
  },
];

/* ---------- Detalhamento por pilar (pág. 11 e 12 do deck) ----------
   Cada card é um setup e lista, bloco a bloco, o que é feito na
   reunião. Reusa a estrutura de "módulos" da Maestria (.mz-mod). */
export type Pilar = {
  n: string;
  titulo: string;
  resumo: string;
  blocos: { sub?: string; itens: string[] }[];
};

export const PILARES: Pilar[] = [
  {
    n: '01',
    titulo: 'Gestão',
    resumo: 'Criar clareza estratégica e estrutural da clínica.',
    blocos: [
      {
        sub: 'Raio-X Estratégico',
        itens: [
          'Faturamento real x potencial',
          'Ticket médio',
          'Margem por procedimento',
          'Custo fixo e variável',
          'Capacidade instalada',
        ],
      },
      {
        sub: 'Mapa Estratégico do Negócio',
        itens: [
          'Posicionamento',
          'Público ideal (ICP)',
          'Procedimentos foco',
          'Metas de crescimento de 12 meses',
        ],
      },
      {
        sub: 'Diagnóstico de Estrutura',
        itens: ['Organograma', 'Funções mal definidas', 'Gargalos operacionais'],
      },
    ],
  },
  {
    n: '02',
    titulo: 'Atendimento',
    resumo: 'Estruturar jornada e previsibilidade.',
    blocos: [
      {
        sub: 'Jornada Completa do Paciente',
        itens: [
          'Primeiro contato',
          'Agendamento',
          'Confirmação',
          'Recepção',
          'Pós-consulta',
          'Pós-procedimento',
        ],
      },
      {
        sub: 'Análise de Conversão no Atendimento',
        itens: [
          'Tempo de resposta',
          'Taxa de comparecimento',
          'Taxa de reagendamento',
          'Taxa de perda',
        ],
      },
      {
        sub: 'Construção de Protocolos',
        itens: [
          'Script de WhatsApp',
          'Script de ligação',
          'Script de confirmação',
          'Fluxo de follow-up',
        ],
      },
    ],
  },
  {
    n: '03',
    titulo: 'Comercial',
    resumo: 'Transformar avaliação em fechamento.',
    blocos: [
      {
        sub: 'Diagnóstico Comercial',
        itens: ['Taxa de perda por preço', 'Ticket médio real', 'Prazo médio de fechamento'],
      },
      {
        sub: 'Estruturação do Método Comercial',
        itens: [
          'Protocolo de apresentação de plano',
          'Argumentação de valor',
          'Estratégia de ancoragem',
          'Estratégia de parcelamento',
          'Follow-up inteligente',
        ],
      },
      {
        sub: 'Estruturação de Ofertas',
        itens: [
          'Oferta principal',
          'Oferta de entrada',
          'Oferta de continuidade',
          'Estratégia de aumento de ticket',
        ],
      },
    ],
  },
  {
    n: '04',
    titulo: 'Marketing',
    resumo: 'Criar plano de crescimento estruturado.',
    blocos: [
      {
        sub: 'Estruturação Estratégica',
        itens: ['Oferta', 'Engajamento', 'Retenção'],
      },
      {
        sub: 'Diagnóstico de Mídia',
        itens: ['Meta Ads', 'Canais orgânicos', 'Performance atual'],
      },
      {
        sub: 'Plano de Crescimento de 12 Meses',
        itens: [
          'Metas trimestrais',
          'Orçamento recomendado',
          'Estratégia de campanhas',
          'Estratégia de conteúdo',
          'Estratégia de remarketing',
          'Estratégia de autoridade',
        ],
      },
    ],
  },
];

/* ---------- Entregáveis (pág. 16 e 17 do deck) ----------
   São os 16 itens da tabela do deck. ⚠️ Os VALORES da tabela
   (R$ 22 mil somados) ficam FORA da página por decisão do Leo —
   aqui vai só a lista, agrupada pelos 4 setups. */
export const ENTREGAS: { pilar: string; itens: string[] }[] = [
  {
    pilar: 'Gestão',
    itens: [
      'Análise de números de dashboard',
      'Análise de ticket médio',
      'Mapa da sua estratégia de marketing e vendas',
      'Posicionamento estratégico',
      'Análise competitiva',
    ],
  },
  {
    pilar: 'Atendimento',
    itens: ['Jornada completa do paciente', 'Manual de comunicação', 'Padrão de encantamento'],
  },
  {
    pilar: 'Comercial',
    itens: [
      'Auditoria do setor comercial',
      'Script estratégico de conversão',
      'Estrutura de comissão e incentivo',
    ],
  },
  {
    pilar: 'Marketing',
    itens: [
      'Auditoria de mídia paga',
      'Auditoria de criativos',
      'Réguas de CRM',
      'Campanhas sazonais',
      'Definição clara de persona estratégica',
    ],
  },
];

/* ---------- Resultados (pág. 14 do deck) ----------
   Números REAIS do dashboard da Clínica Felice em janeiro de 2026,
   recriados em HTML/CSS na seção (nada de print de tela).
   ⚠️ NÃO alterar sem um novo print — é dado factual de cliente. */
export const RESULTADOS = {
  periodo: '01/01/2026 a 31/01/2026',
  legenda: 'A performance da Clínica Felice em um dos meses mais desafiadores do ano.',
  kpis: [
    { label: 'Faturamento por orçamento aprovado e manutenções', valor: 'R$ 502.760,25' },
    { label: 'Faturamento por data de recebimento', valor: 'R$ 295.303,62' },
    { label: 'Orçamentos realizados / aprovados', valor: '203 / 155' },
  ],
  conversao: { label: 'Taxa de conversão', valor: '76,35%' },
  /* Série do gráfico "orçamentos realizados x aprovados" do dashboard,
     em milhares de reais (o eixo original vai de 0 a ~700 mil). */
  serie: {
    realizados: [0, 415, 635, 630, 220],
    aprovados: [0, 92, 168, 78, 167],
  },
};

/* ---------- Autoridade: a clínica (pág. 13 do deck) ---------- */
export const CLINICA = {
  eyebrow: 'A clínica mais tecnológica do Cariri',
  titulo: 'Somos o nosso maior case de sucesso',
  texto:
    'A Clínica Felice é referência em odontologia moderna, oferecendo tratamentos completos com tecnologia de ponta, equipe altamente especializada e atendimento humanizado. O método que aplicamos na sua clínica é o mesmo que roda na nossa, todo dia.',
  numeros: [
    { num: '18', label: 'Colaboradores' },
    { num: '4', label: 'Salas' },
    { num: '5', label: 'Cirurgiões-dentistas' },
  ],
};

/* ---------- Autoridade: a escola (pág. 15 do deck) ---------- */
export const ACADEMY = {
  texto:
    'A Felice Academy é um centro de ensino voltado para a formação e o aperfeiçoamento de profissionais da odontologia, com a missão de compartilhar conhecimento de forma prática, atualizada e transformadora.',
  numeros: [
    { num: '+100', label: 'Cursos realizados' },
    { num: '+1000', label: 'Especialistas formados' },
  ],
};

/* ---------- Autoridade / mentor ---------- */
export const MENTOR = {
  nome: 'Dr. Sócrates Tavares',
  role: 'Diretor clínico da Felice Odontologia · Professor na Felice Academy',
  quote:
    'A consultoria não entrega teoria: entrega o raio-x da sua clínica, o que corrigir agora e o plano dos próximos 12 meses. É o mesmo método que eu construí e validei dentro da minha própria clínica.',
  creds: [
    'Cirurgião-dentista graduado pela UFPB (2007)',
    'Especialista em Cirurgia e Traumatologia Bucomaxilofacial pela UEPB',
    'Especialista em Periodontia pela FACOP/Bauru',
    'Mestre em Implantodontia pela SLM/SP',
    'Mestre em Periodontia pela SLM/SP',
    'Diretor-Clínico da Felice Odontologia',
    'Professor de cursos de especialização na Felice Academy',
  ],
};

/* ---------- Oferta (sem preço — por aplicação) ---------- */
export const OFERTA = {
  ribbon: 'Vagas limitadas · entrada por aplicação',
  titulo: 'Consultoria Gestão F4 — candidate-se',
  itens: [
    '4 semanas de auditoria nos 4 setups da clínica',
    'Raio-x financeiro: faturamento, ticket médio e margem',
    'Jornada do paciente e protocolos de atendimento',
    'Método comercial e estrutura de ofertas',
    'Diagnóstico de mídia e plano de crescimento',
    '16 entregáveis prontos para a sua equipe aplicar',
    'Planejamento estratégico dos próximos 12 meses',
  ],
  cta: 'Quero me candidatar',
  nota: 'A consultoria é conduzida para poucas clínicas por vez e a entrada é por aplicação. Responda ao questionário e a nossa equipe entra em contato para a conversa de diagnóstico.',
};

/* ---------- Como funciona a entrada (processo) ---------- */
export const ENTRADA: { n: string; titulo: string; texto: string }[] = [
  {
    n: '01',
    titulo: 'Responda ao questionário',
    texto:
      'Poucas perguntas sobre a estrutura, os números e o momento da sua clínica — leva menos de 3 minutos.',
  },
  {
    n: '02',
    titulo: 'Conversa de diagnóstico',
    texto:
      'Nossa equipe analisa o seu cenário e conversa com você para entender se a consultoria é o encaixe certo agora — e é aí que o investimento é apresentado.',
  },
  {
    n: '03',
    titulo: 'Começam as 4 semanas',
    texto:
      'Aprovado, entramos nos 4 setups: auditoria, implementações e o planejamento estratégico de 12 meses, com a sua equipe junto.',
  },
];

/* ---------- FAQ ---------- */
export const FAQ: { q: string; a: string }[] = [
  {
    q: 'O que exatamente é a Consultoria Gestão F4?',
    a: 'É uma consultoria de 4 semanas conduzida em 4 setups — Gestão, Atendimento, Comercial e Marketing. Auditamos cada pilar da sua clínica, entregamos um pacote de implementações que resolve as lacunas no curto prazo e um planejamento estratégico para os próximos 12 meses.',
  },
  {
    q: 'Quanto custa?',
    a: 'O investimento é apresentado na conversa de diagnóstico. Cada clínica tem uma estrutura e um momento diferentes, e a consultoria só faz sentido se o encaixe for real — por isso a entrada é por aplicação, e não por checkout.',
  },
  {
    q: 'Quanto tempo dura e como são os encontros?',
    a: 'São 4 semanas, com 4 encontros — um por setup. Entre eles, nossos especialistas em gestão de clínicas e marketing de performance analisam os seus números e a sua operação para chegar com as soluções mapeadas.',
  },
  {
    q: 'Quem executa o plano depois?',
    a: 'Você decide. Ao final entregamos o planejamento estratégico de 12 meses, e ele pode ser executado pelo seu próprio time ou por um time de especialistas em gestão e marketing de crescimento da Felice Academy.',
  },
  {
    q: 'Preciso ter uma clínica grande para entrar?',
    a: 'Não. O que importa é ter operação rodando para auditar: pacientes, equipe e faturamento. A conversa de diagnóstico existe justamente para avaliar o seu encaixe antes de qualquer compromisso.',
  },
  {
    q: 'A minha equipe participa?',
    a: 'Sim. Boa parte do valor está em estruturar a jornada do paciente, os protocolos de atendimento e o método comercial — e isso passa pela recepção, pela CRC e por quem apresenta os planos de tratamento.',
  },
  {
    q: 'Como faço para entrar?',
    a: 'A entrada é por aplicação. Você responde ao questionário, nossa equipe conversa com você e, havendo encaixe, começam as 4 semanas. As vagas são limitadas porque a consultoria é conduzida para poucas clínicas por vez.',
  },
];

/* ---------- CTA final (pág. 18 do deck) ---------- */
export const FINAL = {
  eyebrow: 'Comece agora',
  titlePre: 'Está pronto para elevar o nível',
  titleGold: 'da sua clínica?',
  lead: 'Candidate-se à Consultoria Gestão F4 e transforme a sua clínica em uma estrutura organizada, previsível e rentável — com clareza, segurança e um plano para os próximos 12 meses.',
  cta: 'Quero me candidatar',
};
