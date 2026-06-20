/* ============================================================
   MAESTRIA ZIGOMÁTICA · conteúdo central da landing de vendas
   Edite SÓ aqui copy, módulos, bônus, preço, FAQ e depoimentos.
   Curso premium do Dr. Sócrates Tavares (implantes zigomáticos).

   ⚠️ TROCAR antes de publicar:
   - CHECKOUT_URL: link real de checkout (padrão Felice = Payfast/Greenn).
   - DEPOIMENTOS: URLs de vídeo (embed) e thumbnails dos alunos.
   - DEADLINE_ISO: data real de fechamento da turma/lote.
   - STATS: confirmar qualquer número de prova social (não inventar).
   ============================================================ */

/** Link de checkout (pagamento). PLACEHOLDER — trocar pelo link real. */
export const CHECKOUT_URL = '#oferta';

/** Âncora interna para os CTAs de "rolar até a oferta". */
export const OFERTA_ANCHOR = '#oferta';

/** WhatsApp de dúvidas (botão flutuante). */
export const WHATSAPP_URL =
  'https://wa.me/5588981391199?text=' +
  encodeURIComponent(
    'Olá! Tenho interesse na Maestria Zigomática e gostaria de tirar uma dúvida antes de me inscrever.',
  );

/** Fechamento da turma — countdown autêntico. ⚠️ Ajustar para a data real. */
export const DEADLINE_ISO = '2026-07-15T23:59:59-03:00';

/* ---------- Hero ---------- */
export const HERO = {
  eyebrow: 'Curso online · Implantes zigomáticos',
  titlePre: 'Domine a cirurgia zigomática e seja a',
  titleGold: 'referência em maxila atrófica severa da sua região.',
  lead: 'Um método guiado, do diagnóstico ao hands-on, para você operar os casos mais complexos de atrofia maxilar com segurança, previsibilidade e protocolo — em vez de encaminhar (e perder) o caso para outro profissional.',
  ctaPrimary: 'Quero dominar os zigomáticos',
  ctaSecondary: 'Ver os módulos',
  trust: [
    '100% online, no seu ritmo',
    'Cirurgia guiada passo a passo',
    'Hands-on em modelo',
    'Garantia de 7 dias',
  ],
};

/** Card de prova "glass" no hero (coluna direita). */
export const HERO_CARD = {
  destaque: { num: '+20', label: 'Aulas — do diagnóstico ao hands-on' },
  progresso: { label: 'Conteúdo gravado e liberado', valor: 100 },
  mini: [
    { v: '4', l: 'Módulos' },
    { v: 'Hands-on', l: 'em modelo' },
    { v: '7 dias', l: 'Garantia' },
  ],
  pills: { live: 'Turma aberta', premium: 'Premium' },
};

/** Faixa (marquee) de temas dominados — card glass no hero. */
export const HERO_MARQUEE = {
  titulo: 'O que você vai dominar',
  itens: [
    'Quadrizigoma',
    'Carga imediata',
    'Cirurgia guiada',
    'Fluxo digital',
    'Hands-on',
    'Zona segura',
    'Transsinusal',
  ],
};

/* ---------- Números / prova ----------
   Apenas fatos verdadeiros da estrutura do curso. Para incluir um número
   de prova social (ex.: alunos formados), confirme o dado real antes. */
export const STATS: { num: string; label: string }[] = [
  { num: '4 módulos', label: 'Do diagnóstico ao hands-on' },
  { num: '+20 aulas', label: 'Gravadas, passo a passo' },
  { num: 'Fluxo guiado', label: 'Planejamento digital completo' },
  { num: '7 dias', label: 'Garantia incondicional' },
];

/* ---------- Problema / dores ---------- */
export const DORES: { titulo: string; texto: string }[] = [
  {
    titulo: 'Você encaminha o caso complexo',
    texto: 'Chega a maxila atrófica severa e, sem um protocolo seguro, você indica enxerto longo ou manda o paciente para outro colega — e perde o caso de maior valor da sua agenda.',
  },
  {
    titulo: 'O medo da complicação te trava',
    texto: 'Sem dominar a ancoragem e a zona segura, o receio de lesão de seio, de órbita ou de falha do implante faz você recuar justamente na cirurgia que mudaria o seu patamar.',
  },
  {
    titulo: 'Enxerto longo quando dava em 1 tempo',
    texto: 'Meses de espera, morbidade e custo para o paciente — quando o zigomático resolveria a reabilitação de carga imediata num único tempo cirúrgico.',
  },
  {
    titulo: 'Você aprendeu por vídeo solto',
    texto: 'Assistir a um caso isolado no congresso não vira protocolo. Sem um método replicável, cada cirurgia continua sendo um salto no escuro.',
  },
];
export const DORES_FECHAMENTO = {
  pre: 'Enquanto isso, os casos de reabilitação total mais lucrativos passam pela sua cadeira e',
  gold: 'saem pela porta.',
};

/* ---------- Método / transformação (benefícios) ---------- */
export const METODO: { n: string; titulo: string; texto: string }[] = [
  {
    n: '01',
    titulo: 'Identificar e indicar com critério',
    texto: 'Saiba exatamente quando o zigomático é a melhor escolha — com critérios éticos e clínicos claros para indicar com segurança, e não no achismo.',
  },
  {
    n: '02',
    titulo: 'Planejar no fluxo digital guiado',
    texto: 'Planeje híbridos e quadrizigomas com cirurgia guiada e fluxo digital, transformando o caso complexo em um procedimento previsível antes de entrar na sala.',
  },
  {
    n: '03',
    titulo: 'Executar de alto valor',
    texto: 'Domine ancoragem, zona segura e o passo a passo da cirurgia guiada para entregar reabilitação de carga imediata com confiança — e elevar o seu ticket.',
  },
];

/* ---------- Casos reais (carrossel) ----------
   ⚠️ As imagens entram depois: preencha `img` com o caminho em /images
   (ex.: '/images/caso-quadrizigoma.jpg'). Sem `img`, mostra um placeholder. */
export type Caso = { titulo: string; legenda: string; img?: string };
export const CASOS: Caso[] = [
  { titulo: 'Maxila atrófica severa', legenda: 'Reabilitação total com quadrizigoma' },
  { titulo: 'Híbrido sobre zigomáticos', legenda: 'Planejamento digital e cirurgia guiada' },
  { titulo: 'Carga imediata', legenda: 'Do plano à prótese provisória no mesmo dia' },
  { titulo: 'Abordagem transsinusal', legenda: 'Trajetória e posicionamento guiado' },
  { titulo: 'Zona segura', legenda: 'Ancoragem sem intercorrências' },
  { titulo: 'Reabilitação complexa', legenda: 'Decisão clínica passo a passo' },
];

/* ---------- Módulos (conteúdo) ---------- */
export type Modulo = {
  n: string;
  titulo: string;
  resumo: string;
  /** Imagem que representa o módulo (opcional — sem ela, mostra placeholder). */
  img?: string;
  blocos: { sub?: string; aulas: string[] }[];
};

export const MODULOS: Modulo[] = [
  {
    n: '01',
    titulo: 'Fundamentos e decisões críticas',
    resumo: 'A base conceitual e o raciocínio clínico que sustentam toda cirurgia zigomática segura.',
    blocos: [
      {
        aulas: [
          'Introdução ao universo zigomático',
          'Quando e por que indicar — critérios éticos e clínicos',
          'De onde viemos: história e classificações essenciais',
          '“Onde eu furo?” — leitura anatômica e pontos de ancoragem',
          'Como posicionar seus implantes com segurança, do início ao fim',
        ],
      },
    ],
  },
  {
    n: '02',
    titulo: 'Planejamento de alto impacto',
    resumo: 'O fluxo digital que transforma o caso mais complexo em um procedimento previsível.',
    blocos: [
      {
        aulas: [
          'Como planejar híbridos e quadrizigomas sem travar',
          'Fluxos digitais que tornam tudo mais previsível',
          'Por que a cirurgia guiada muda o jogo',
          'Casos clínicos com guia: do planejamento à execução',
          'Variações clínicas: como lidar com cada uma com critério',
        ],
      },
    ],
  },
  {
    n: '03',
    titulo: 'Cirurgia guiada na prática',
    resumo: 'Da bancada à sala: instrumental, sequência cirúrgica e gestão da zona segura.',
    blocos: [
      {
        aulas: [
          'Instrumental essencial para a cirurgia guiada zigomática',
          'Cirurgia guiada: da teoria à bancada',
          'Implantes zigomáticos e transsinusais com guia',
          'Casos clínicos comentados: como pensar cada decisão',
          'Zona segura: como evitar complicações e operar com confiança',
        ],
      },
    ],
  },
  {
    n: '04',
    titulo: 'Hands-on guiado',
    resumo: 'Prática deliberada em modelo, do acesso ao posicionamento, até o ganho de precisão.',
    blocos: [
      {
        sub: 'Parte 1 · Base prática',
        aulas: [
          'Passos iniciais no modelo',
          'Domínio do acesso e do posicionamento',
          'Repetição estratégica e ganho de precisão',
        ],
      },
      {
        sub: 'Parte 2 · Guided surgery aplicada',
        aulas: [
          'Hands-on Guided Surgery — teórico e prático (I)',
          'Hands-on Guided Surgery — teórico e prático (II)',
          'Hands-on Guided Surgery — teórico e prático (III)',
        ],
      },
    ],
  },
];

/* ---------- Bônus ----------
   `valor` é a ancoragem de valor percebido de cada bônus (em R$). O total
   é somado automaticamente na seção. ⚠️ Ajuste os valores se quiser. */
export const BONUS: { titulo: string; texto: string; valor: number }[] = [
  { titulo: 'Guia completo de indicações', texto: 'O mapa de decisão para indicar (ou contraindicar) o zigomático com segurança em cada cenário.', valor: 197 },
  { titulo: 'Escolha técnica: o que considerar', texto: 'Critérios práticos para definir abordagem, número de implantes e estratégia de ancoragem.', valor: 147 },
  { titulo: 'Série especial “Onde eu furo”', texto: 'Leitura anatômica comentada caso a caso, para você enxergar a trajetória ideal.', valor: 297 },
  { titulo: 'O fluxo ideal na prática', texto: 'O passo a passo do planejamento à entrega, do jeito que rodamos na clínica.', valor: 247 },
  { titulo: 'Planejamento estratégico com software', texto: 'Demonstração do planejamento digital guiado de ponta a ponta.', valor: 397 },
  { titulo: 'Anexos de casos reais', texto: 'Biblioteca de casos para estudar decisões, variações e resultados.', valor: 197 },
];

/* ---------- Plataforma / como funciona ---------- */
export const PLATAFORMA: { n: string; titulo: string; texto: string }[] = [
  { n: '01', titulo: 'Não é um vídeo solto', texto: 'Todo o conteúdo organizado na plataforma Felice — em módulos e aulas, com ordem de estudo e progresso.' },
  { n: '02', titulo: 'No seu ritmo, de qualquer lugar', texto: 'Acesse pelo computador ou celular, quando e quantas vezes quiser, no seu tempo.' },
  { n: '03', titulo: 'Atualizado e com suporte', texto: 'Novos casos e materiais somados ao curso, com canal de dúvidas com a equipe.' },
];

/* ---------- Autoridade / mentor ---------- */
export const MENTOR = {
  nome: 'Dr. Sócrates Tavares',
  role: 'Diretor clínico da Felice Odontologia · Professor na Felice Academy',
  quote:
    'Reabilitação total de maxila atrófica não pode depender de sorte. Esse é o protocolo guiado que eu validei na minha própria clínica — e que ensino aqui, do diagnóstico ao hands-on.',
  creds: [
    'Cirurgião-dentista — UFPB',
    'Especialista em Cirurgia e Traumatologia Bucomaxilofacial — UEPB',
    'Especialista em Periodontia — FACOP/Bauru',
    'Mestre em Implantodontia — SLM/SP',
    'Professor de cursos de especialização na Felice Academy',
  ],
};

/* ---------- Depoimentos (vídeo) ----------
   ⚠️ Adicionar `video` (URL de embed) e `thumb` (imagem) reais de cada aluno.
   Enquanto não houver, o card mostra um placeholder com o play. */
export type Depoimento = { nome: string; meta: string; texto: string; video?: string; thumb?: string };
export const DEPOIMENTOS: Depoimento[] = [
  {
    nome: 'Dr. Juliene',
    meta: 'Aluna · Felice Academy',
    texto: 'Saí insegura para indicar e hoje planejo e opero meus próprios casos zigomáticos com método.',
  },
  {
    nome: 'Dr. João Marcel',
    meta: 'Aluno · Felice Academy',
    texto: 'O fluxo guiado mudou meu jogo: o que eu encaminhava, agora resolvo na minha clínica.',
  },
  {
    nome: 'Dr. Cristhiano Salustio',
    meta: 'Aluno · Felice Academy',
    texto: 'Conteúdo direto ao ponto, do diagnóstico ao hands-on. Ganhei confiança para os casos complexos.',
  },
];

/* ---------- Oferta ---------- */
export const OFERTA = {
  ribbon: 'Turma com vagas limitadas',
  titulo: 'Maestria Zigomática — curso completo',
  itens: [
    'Módulo 1 · Fundamentos e decisões críticas',
    'Módulo 2 · Planejamento de alto impacto',
    'Módulo 3 · Cirurgia guiada na prática',
    'Módulo 4 · Hands-on guiado (Partes 1 e 2)',
    'Bônus especiais (guias, série “Onde eu furo” e casos reais)',
  ],
  parcela: { vezes: '12x', valor: 'R$ 164,40' },
  aVista: 'R$ 1.595,00',
  cta: 'Garantir minha vaga',
};

/* ---------- FAQ ---------- */
export const FAQ: { q: string; a: string }[] = [
  {
    q: 'Preciso já operar zigomático para fazer o curso?',
    a: 'Não. O método parte dos fundamentos e do raciocínio de indicação até o hands-on guiado, então atende tanto quem quer começar com segurança quanto quem já opera e busca um protocolo previsível.',
  },
  {
    q: 'O curso é teórico ou tem prática?',
    a: 'Os dois. Além das aulas de fundamentos, planejamento e cirurgia guiada, há um módulo de hands-on guiado em modelo, com acesso, posicionamento e repetição para ganho de precisão.',
  },
  {
    q: 'Como e por quanto tempo eu acesso?',
    a: '100% online, pela plataforma Felice, no computador ou celular. Você assiste no seu ritmo e revê as aulas quantas vezes precisar.',
  },
  {
    q: 'Em quanto tempo eu consigo aplicar?',
    a: 'O conteúdo é organizado para você evoluir do diagnóstico ao planejamento e à execução guiada — para levar o protocolo para a sua clínica o quanto antes, com critério.',
  },
  {
    q: 'Como funciona a garantia?',
    a: 'Você tem 7 dias de garantia incondicional. Se não for para você, é só pedir o reembolso dentro do prazo — sem burocracia.',
  },
  {
    q: 'Quais as formas de pagamento?',
    a: 'Você pode parcelar em até 12x no cartão ou pagar à vista. O acesso é liberado de forma imediata após a confirmação.',
  },
];

/* ---------- CTA final ---------- */
export const FINAL = {
  eyebrow: 'Comece hoje',
  titlePre: 'Pare de encaminhar o caso da sua vida.',
  titleGold: 'Aprenda a operá-lo.',
  lead: 'Entre para a Maestria Zigomática e domine, com método guiado e hands-on, a cirurgia que coloca você entre as referências em maxila atrófica severa.',
  cta: 'Garantir minha vaga',
};
