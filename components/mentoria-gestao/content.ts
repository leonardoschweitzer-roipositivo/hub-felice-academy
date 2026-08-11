/* ============================================================
   MENTORIA DE GESTÃO F4 · conteúdo central da landing de vendas
   Edite SÓ aqui copy, pilares, entregas, bônus, FAQ e depoimentos.
   Mentoria premium do Dr. Sócrates Tavares (gestão de clínicas).

   Estrutura sobre os 4 PILARES do método F4:
   Atendimento · Comercial · Marketing · Gestão.

   Venda por APLICAÇÃO (sem preço): os CTAs levam ao questionário
   próprio em /produtos/mentoria-gestao-f4/aplicacao, que abre o
   WhatsApp com as respostas prontas.

   ⚠️ TROCAR antes de publicar:
   - DEPOIMENTOS: vídeos (embed) e thumbnails reais dos alunos.
   - STATS / ENTREGAS: confirmar qualquer número antes (não inventar).
   - BONUS.valor: ancoragem de valor percebido — ajuste se quiser.
   ============================================================ */

/** Destino dos CTAs de matrícula = questionário de aplicação da própria
 *  mentoria. (Antes apontava para /produtos/kitgestaof4/consultoria, cuja
 *  mensagem diz que a pessoa comprou o Kit e quer a consultoria gratuita —
 *  produto errado, e o lead entrava como pós-compra do Kit.) */
export const APPLY_URL = '/produtos/mentoria-gestao-f4/aplicacao';

/** Âncora interna para os CTAs de "rolar até a candidatura". */
export const OFERTA_ANCHOR = '#candidatura';

/** WhatsApp de dúvidas (botão flutuante). */
export const WHATSAPP_URL =
  'https://wa.me/5588981391199?text=' +
  encodeURIComponent(
    'Olá! Tenho interesse na Mentoria de Gestão F4 e gostaria de tirar uma dúvida antes de me candidatar.',
  );

/* ---------- Hero ---------- */
export const HERO = {
  eyebrow: 'Mentoria de gestão · Método F4',
  titlePre: 'Tire a sua clínica das suas costas e transforme-a em uma',
  titleGold: 'empresa que atende, agenda e vende no automático.',
  lead: 'Uma mentoria guiada pelos 4 pilares — Atendimento, Comercial, Marketing e Gestão — com plataforma de aulas, encontros ao vivo, treinamento da sua equipe e acompanhamento de perto do Dr. Sócrates. Para você sair do improviso e operar com processo, previsibilidade e lucro.',
  ctaPrimary: 'Quero me candidatar',
  ctaSecondary: 'Ver o que você recebe',
  trust: [
    'Plataforma + encontros ao vivo',
    'Treinamento da sua equipe inteira',
    'Acompanhamento do Dr. Sócrates',
    'Entrada por aplicação',
  ],
};

/** Card de prova "glass" no hero (coluna direita). */
export const HERO_CARD = {
  destaque: { num: '4 pilares', label: 'Atendimento · Comercial · Marketing · Gestão' },
  progresso: { label: 'Método validado em clínica real', valor: 100 },
  mini: [
    { v: '+12', l: 'Cursos' },
    { v: 'Ao vivo', l: 'Encontros' },
    { v: 'Equipe', l: 'Treinada' },
  ],
  pills: { live: 'Turma aberta', premium: 'Premium' },
};

/** Faixa (marquee) de temas dominados — card glass no hero. */
export const HERO_MARQUEE = {
  titulo: 'O que você e a sua equipe dominam',
  itens: [
    'POPs por cargo',
    'Recepção que converte',
    'CRC e agendamento',
    'Redução de faltas',
    'Tráfego e conteúdo',
    'Fechamento de planos',
    'Financeiro previsível',
    'Networking',
  ],
};

/* ---------- Números / prova ----------
   Apenas fatos verdadeiros da estrutura da mentoria/plataforma. */
export const STATS: { num: string; label: string }[] = [
  { num: '4 pilares', label: 'Atendimento, Comercial, Marketing e Gestão' },
  { num: '+12 cursos', label: 'Trilhas por pilar, na plataforma' },
  { num: 'Encontros ao vivo', label: 'Hot seats e calls com mentores' },
  { num: 'Equipe junto', label: 'Treinamento de toda a sua clínica' },
];

/* ---------- Problema / dores ---------- */
export const DORES: { titulo: string; texto: string }[] = [
  {
    titulo: 'A clínica depende de você para tudo',
    texto: 'Sem processo, cada decisão passa pela sua cabeça. Você vira o gargalo da própria clínica — e não consegue sair de dentro da operação para crescer.',
  },
  {
    titulo: 'Agenda furada e pacientes que somem',
    texto: 'Faltas, horários ociosos e orçamentos sem follow-up. Sem CRC e agendamento estruturados, você perde faturamento que já estava na porta.',
  },
  {
    titulo: 'Equipe sem padrão e sem treino',
    texto: 'Recepção que não acolhe, ligação que não converte, cada um faz de um jeito. Sem POPs e treinamento, o atendimento vira sorte — não método.',
  },
  {
    titulo: 'Marketing no achismo',
    texto: 'Post sem estratégia, anúncio que não traz o paciente certo, agenda vazia. Sem um plano de conteúdo e tráfego, o marketing só queima tempo e dinheiro.',
  },
];
export const DORES_FECHAMENTO = {
  pre: 'Enquanto isso, você trabalha mais do que deveria e a clínica',
  gold: 'não anda sem você.',
};

/* ---------- Os 4 pilares (método) ---------- */
export const PILARES: { n: string; titulo: string; texto: string }[] = [
  {
    n: '01',
    titulo: 'Atendimento',
    texto: 'A arte de receber: recepção que acolhe, converte e segue os princípios certos. Sua equipe treinada com scripts, protocolos e jornada do paciente padronizada.',
  },
  {
    n: '02',
    // Renomeado de "Agendamento" em 11/08/2026: a arte deste pilar diz
    // "Comercial de alta performance", e o arquivo veio nomeado
    // "CORRIGIR AGENDAMENTOS PARA COMERCIAL". O conteúdo (CRC, ligação,
    // objeções, fechamento) já era comercial.
    titulo: 'Comercial',
    texto: 'A CRC como a voz da clínica: roteiro de ligação, confirmação que reduz faltas e banco de objeções. Mais cadeiras ocupadas, menos buraco na agenda.',
  },
  {
    n: '03',
    titulo: 'Marketing',
    texto: 'Conteúdo e tráfego com método: pilares 40/40/20, calendário editorial e anúncios que respeitam as regras da saúde — para encher a agenda com o paciente certo.',
  },
  {
    n: '04',
    titulo: 'Gestão',
    texto: 'POPs por cargo, financeiro previsível, indicadores e equipe organizada. O sistema que tira a clínica das suas costas e te devolve o controle (e o tempo).',
  },
];

/* ---------- Tudo que você recebe (entregas) ----------
   O coração da oferta: a mentoria não é um curso, é um ecossistema.
   `icon` mapeia para um ícone inline na seção (ver Sections). */
export type Entrega = { titulo: string; texto: string; tag?: string };
export const ENTREGAS: Entrega[] = [
  {
    tag: 'Plataforma',
    titulo: 'Plataforma de aulas completa',
    texto: '+12 cursos organizados pelos 4 pilares, em módulos e aulas, com progresso salvo. Acesse no computador ou celular, no seu ritmo.',
  },
  {
    tag: 'Conteúdo',
    titulo: 'Artigos e biblioteca de conteúdo',
    texto: 'Materiais de aprofundamento, casos comentados e referências para embasar cada decisão de gestão da sua clínica.',
  },
  {
    tag: 'Ao vivo',
    titulo: 'Encontros individuais (1:1)',
    texto: 'Sessões de diagnóstico e mentoria direto com o mentor, olhando os números e os gargalos da SUA clínica — não teoria genérica.',
  },
  {
    tag: 'Ao vivo',
    titulo: 'Encontros em grupo',
    texto: 'Hot seats e calls ao vivo de Gestão, Marketing e Vendas com os mentores: você leva o seu caso e sai com o próximo passo.',
  },
  {
    tag: 'Acervo',
    titulo: 'Gravações de todos os encontros',
    texto: 'Perdeu ao vivo? Tudo fica gravado na plataforma. Reveja quantas vezes precisar e mande para a sua equipe.',
  },
  {
    tag: 'Comunidade',
    titulo: 'Networking com outros dentistas',
    texto: 'Comunidade Felice: troque com donos de clínica que vivem os mesmos desafios, compartilhe o que funciona e cresça em rede.',
  },
  {
    tag: 'Equipe',
    titulo: 'Treinamento da sua equipe inteira',
    texto: 'Recepção, CRC, marketing e gestão: sua equipe treina nos 4 pilares com material próprio — a clínica toda no mesmo padrão.',
  },
  {
    tag: 'Kit F4',
    titulo: 'Kit Gestão F4 interativo',
    texto: 'POP, Atendimento, CRC e Marketing num só lugar, com busca instantânea, IA que responde suas dúvidas e simuladores de role-play para treinar a equipe.',
  },
  {
    tag: 'Ferramentas',
    titulo: 'Materiais prontos para aplicar hoje',
    texto: 'Planilha de fluxo de caixa, scripts de agendamento, checklists, banco de objeções, calendário editorial e e-books — é só usar.',
  },
  {
    tag: 'Atualizações',
    titulo: 'Templates exclusivos, atualizados todo mês',
    texto: 'Contratos, fluxos e planilhas exclusivos de membros, com novos materiais somados mensalmente ao seu acesso.',
  },
  {
    tag: 'Suporte',
    titulo: 'Canal de dúvidas com a equipe',
    texto: 'Travou na aplicação? Você tem suporte e acompanhamento próximo para não parar — do primeiro POP ao primeiro mês no azul.',
  },
  {
    tag: 'Acesso',
    titulo: 'Acesso à plataforma e atualizações',
    texto: 'Tudo num só lugar, sempre à mão, com novos conteúdos e melhorias liberados ao longo da sua jornada na mentoria.',
  },
];

/* ---------- Trilhas por pilar (conteúdo) ----------
   Reaproveita a estrutura de "módulos": cada card é um pilar e lista
   os temas que você e a sua equipe dominam nele. */
export type Trilha = {
  n: string;
  titulo: string;
  resumo: string;
  /** Imagem que representa o pilar (opcional — sem ela, mostra placeholder). */
  img?: string;
  blocos: { sub?: string; aulas: string[] }[];
};

export const TRILHAS: Trilha[] = [
  {
    n: '01',
    titulo: 'Atendimento',
    resumo: 'A arte de receber: a linha de frente que acolhe e converte cada paciente.',
    img: '/images/pilar-atendimento.jpg',
    blocos: [
      {
        aulas: [
          'Princípios éticos do atendimento (LGPD, empatia, dignidade)',
          'A jornada do paciente em 5 etapas',
          'Scripts de saudação, confirmação e FAQs',
          'Protocolos para situações delicadas',
          'Simulador de role-play da recepção com IA',
        ],
      },
    ],
  },
  {
    n: '02',
    // Renomeado de "Agendamento" em 11/08/2026: a arte deste pilar diz
    // "Comercial de alta performance", e o arquivo veio nomeado
    // "CORRIGIR AGENDAMENTOS PARA COMERCIAL". O conteúdo (CRC, ligação,
    // objeções, fechamento) já era comercial.
    titulo: 'Comercial',
    resumo: 'A CRC como a voz da clínica: mais agenda cheia, menos faltas.',
    img: '/images/pilar-comercial.jpg',
    blocos: [
      {
        aulas: [
          'Guião tático de ligação em 5 fases',
          'Roteiro de confirmação e a "regra dos 5 minutos"',
          'Banco de objeções com respostas prontas',
          'Scripts para telefone e WhatsApp',
          'Simulador de ligação com IA para treinar a CRC',
        ],
      },
    ],
  },
  {
    n: '03',
    titulo: 'Marketing',
    resumo: 'Conteúdo e tráfego com método para encher a agenda com o paciente certo.',
    img: '/images/pilar-marketing.jpg',
    blocos: [
      {
        aulas: [
          'Estratégia de conteúdo para clínicas (pilares 40/40/20)',
          'Calendário editorial editável',
          'Roteiros de vídeos que prendem',
          'Funil de anúncios respeitando as regras da saúde',
          'Autoridade e posicionamento no Instagram',
        ],
      },
    ],
  },
  {
    n: '04',
    titulo: 'Gestão',
    resumo: 'O sistema que organiza processos, equipe e finanças — e tira a clínica das suas costas.',
    img: '/images/pilar-gestao.jpg',
    blocos: [
      {
        sub: 'Parte 1 · Processos e equipe',
        aulas: [
          'O ecossistema de excelência clínica',
          'POPs por cargo na prática',
          'Matriz de responsabilidades e checklists',
        ],
      },
      {
        sub: 'Parte 2 · Financeiro e indicadores',
        aulas: [
          'Fluxo de caixa e precificação',
          'Indicadores que importam',
          'Previsibilidade e tomada de decisão',
        ],
      },
    ],
  },
];

/* ---------- Bônus ----------
   `valor` é a ancoragem de valor percebido (em R$). O total é somado
   automaticamente na seção. ⚠️ Ajuste os valores se quiser. */
export const BONUS: { titulo: string; texto: string; valor: number }[] = [
  { titulo: 'Acesso ao Felice CRM', texto: 'O software de gestão da clínica: pacientes, agenda, funil de vendas e faturamento em tempo real — para tirar a clínica da sua cabeça e colocar no processo.', valor: 1997 },
  { titulo: 'Consultoria 1:1 com o Dr. Sócrates', texto: 'Uma sessão individual de diagnóstico da sua clínica para definir o seu plano de ação dos 4 pilares.', valor: 997 },
  { titulo: 'Kit Gestão F4 completo', texto: 'POP, Atendimento, CRC e Marketing interativos, com IA e simuladores — o material que sua equipe usa todo dia.', valor: 388 },
  { titulo: 'Pacote de templates de gestão', texto: 'Contratos, planilhas e fluxos exclusivos de membros, atualizados mensalmente.', valor: 497 },
  { titulo: 'Scripts e banco de objeções', texto: 'Roteiros prontos de atendimento e agendamento e respostas para as objeções mais comuns.', valor: 297 },
  { titulo: 'Comunidade e networking Felice', texto: 'Rede de donos de clínica para trocar, se inspirar e crescer junto.', valor: 297 },
];

/* ---------- Plataforma / como funciona ---------- */
export const PLATAFORMA: { n: string; titulo: string; texto: string }[] = [
  { n: '01', titulo: 'Não é um curso solto', texto: 'Toda a mentoria organizada na plataforma Felice — trilhas por pilar, encontros ao vivo e materiais, com ordem de estudo e progresso.' },
  { n: '02', titulo: 'Você e a sua equipe juntos', texto: 'Acesse pelo computador ou celular e leve a sua equipe para dentro: cada cargo treina no seu pilar, no mesmo padrão.' },
  { n: '03', titulo: 'Ao vivo, atualizado e com suporte', texto: 'Encontros ao vivo recorrentes, novos materiais todo mês e canal de dúvidas com a equipe para você nunca travar.' },
];

/* ---------- Autoridade / mentor ---------- */
export const MENTOR = {
  nome: 'Dr. Sócrates Tavares',
  role: 'Diretor clínico da Felice Odontologia · Professor na Felice Academy',
  quote:
    'Esse não é mais um material teórico. É o sistema de gestão que eu validei na prática, dentro da minha própria clínica — e que ensino aqui, pilar por pilar, com a sua equipe junto.',
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

/* ---------- Depoimentos (vídeo vertical) ----------
   Os mesmos 4 da Masterclass e da Maestria (ver masterclass-zigomatico/
   content.ts): são alunos da Felice falando do professor e do método, e o
   `meta` fica genérico de propósito — não afirma de qual curso cada um veio.

   `embed`/`embedId`: player do Panda, 9:16, tocado dentro do card.
   `video`/`thumb`: card antigo que abre o vídeo em outra aba — sem uso hoje,
   mantido porque o componente ainda o renderiza. */
export type Depoimento = {
  nome: string;
  meta: string;
  texto: string;
  embed?: string;
  embedId?: string;
  video?: string;
  thumb?: string;
};
export const DEPOIMENTOS: Depoimento[] = [
  {
    nome: 'Dr. Emmanuel Bezerra',
    meta: 'Aluno · Felice Academy',
    texto: 'Curso excepcional. Aprendi a tirar a equipe sob a cadeira e a indicar com critério. Mudou meu jogo.',
    embed:
      'https://player-vz-90784769-874.tv.pandavideo.com.br/embed/?v=ad9090d8-dcbe-46e9-b0c7-4725772f2fee',
    embedId: 'panda-ad9090d8-dcbe-46e9-b0c7-4725772f2fee',
  },
  {
    nome: 'Dr. Thiago Vinícius',
    meta: 'Aluno · Felice Academy',
    texto: 'Professor a curva da primeira. Conteúdo, organizado, didático. Obrigado mesmo!',
    embed:
      'https://player-vz-90784769-874.tv.pandavideo.com.br/embed/?v=00ecbcee-1689-4a49-989a-ba4f0f5be1f6',
    embedId: 'panda-00ecbcee-1689-4a49-989a-ba4f0f5be1f6',
  },
  {
    nome: 'Dr. Paulo Bezerra',
    meta: 'Aluno · Felice Academy',
    texto: 'Conteúdo direto ao ponto. Saí com clareza do passo a passo dos casos zigomáticos.',
    embed:
      'https://player-vz-90784769-874.tv.pandavideo.com.br/embed/?v=0c6ed468-d354-41c1-89ca-1c9345f5b0b0',
    embedId: 'panda-0c6ed468-d354-41c1-89ca-1c9345f5b0b0',
  },
  {
    nome: 'Dr. Juliano Nunes',
    meta: 'Aluno · Felice Academy',
    texto: 'Os casos comentados pelo professor qualificaram muito como eu penso cada decisão. Vale demais.',
    embed:
      'https://player-vz-90784769-874.tv.pandavideo.com.br/embed/?v=738dddd5-f486-4a4a-b502-daaea7f17220',
    embedId: 'panda-738dddd5-f486-4a4a-b502-daaea7f17220',
  },
];

/* ---------- Oferta (sem preço — por aplicação) ---------- */
export const OFERTA = {
  ribbon: 'Vagas limitadas · entrada por aplicação',
  titulo: 'Mentoria de Gestão F4 — candidate-se',
  itens: [
    'Plataforma de aulas completa (4 pilares · +12 cursos)',
    'Encontros ao vivo individuais e em grupo',
    'Treinamento da sua equipe nos 4 pilares',
    'Kit Gestão F4 interativo (com IA e simuladores)',
    'Materiais, templates e gravações sempre à mão',
    'Bônus: acesso ao Felice CRM + consultoria 1:1',
  ],
  cta: 'Quero me candidatar',
  nota: 'As vagas são limitadas e a entrada é por aplicação. Responda ao questionário e a nossa equipe entra em contato.',
};

/* ---------- Como funciona a entrada (processo) ---------- */
export const ENTRADA: { n: string; titulo: string; texto: string }[] = [
  { n: '01', titulo: 'Responda ao questionário', texto: 'Poucas perguntas rápidas sobre a sua clínica e o seu momento — leva menos de 3 minutos.' },
  { n: '02', titulo: 'Conversa de diagnóstico', texto: 'Nossa equipe analisa o seu cenário e conversa com você para entender se a mentoria é o encaixe certo.' },
  { n: '03', titulo: 'Entre para a turma', texto: 'Aprovado, você recebe o acesso à plataforma e já entra no ritmo dos 4 pilares — com a sua equipe junto.' },
];

/* ---------- FAQ ---------- */
export const FAQ: { q: string; a: string }[] = [
  {
    q: 'Como funciona a mentoria de gestão?',
    a: 'É um ecossistema, não um curso solto: plataforma de aulas organizada pelos 4 pilares (Atendimento, Comercial, Marketing e Gestão), encontros ao vivo individuais e em grupo, materiais prontos e treinamento da sua equipe — com acompanhamento do Dr. Sócrates e da equipe Felice.',
  },
  {
    q: 'A mentoria é só para mim ou para a minha equipe também?',
    a: 'Para os dois. Boa parte do método é treinar a sua equipe nos 4 pilares: recepção no atendimento, CRC no agendamento, e os processos de marketing e gestão. A clínica inteira entra no mesmo padrão.',
  },
  {
    q: 'Preciso ter uma clínica grande para entrar?',
    a: 'Não. O método organiza desde a clínica que ainda depende totalmente de você até a que já quer escalar com processo. A conversa de diagnóstico existe justamente para ver o seu encaixe.',
  },
  {
    q: 'Tem encontros ao vivo ou é tudo gravado?',
    a: 'Os dois. Há encontros ao vivo recorrentes (hot seats e calls com os mentores) e tudo fica gravado na plataforma para você e a sua equipe reverem quando quiserem.',
  },
  {
    q: 'O acesso ao Felice CRM está incluso?',
    a: 'Sim, como bônus da mentoria. O CRM ajuda a tirar a clínica da sua cabeça e colocar no processo: pacientes, agenda, funil de vendas e faturamento num só lugar.',
  },
  {
    q: 'Como faço para entrar?',
    a: 'A entrada é por aplicação. Você responde a um questionário rápido sobre a sua clínica, nossa equipe conversa com você e, aprovado, você recebe o acesso. As vagas são limitadas por turma.',
  },
];

/* ---------- CTA final ---------- */
export const FINAL = {
  eyebrow: 'Comece agora',
  titlePre: 'Pare de carregar a clínica nas costas.',
  titleGold: 'Construa um sistema que anda sem você.',
  lead: 'Candidate-se à Mentoria de Gestão F4 e organize Atendimento, Comercial, Marketing e Gestão — com a sua equipe treinada e o acompanhamento de quem já fez na própria clínica.',
  cta: 'Quero me candidatar',
};
