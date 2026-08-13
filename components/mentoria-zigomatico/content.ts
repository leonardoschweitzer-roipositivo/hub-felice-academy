import { whatsappUrl } from '@/lib/whatsapp/contato';

/* ============================================================
   MENTORIA DE ZIGOMÁTICO · conteúdo central da landing de vendas
   Edite SÓ aqui copy, eixos, presenciais, entregas, bônus e FAQ.
   Mentoria clínica premium do Dr. Sócrates Tavares.

   Diferencial: PRÁTICA REAL. Além da plataforma e dos encontros ao
   vivo, tem encontros PRESENCIAIS — imersão hands-on em laboratório,
   acompanhamento cirúrgico (operar junto) e encontros teóricos.

   Venda por APLICAÇÃO (sem preço): CTAs → /produtos/mentoria-zigomatico/aplicacao.

   ⚠️ TROCAR antes de publicar:
   - DEPOIMENTOS: vídeos (embed) e thumbnails reais dos alunos.
   - PRESENCIAL/ENTREGAS: confirmar datas, locais e formato dos encontros.
   - BONUS.valor: ancoragem de valor percebido — ajuste se quiser.
   ============================================================ */

/** Destino dos CTAs = questionário de aplicação da própria mentoria.
 *  (Antes apontava para /produtos/kitgestaof4/consultoria, cuja copy é do
 *  agendamento da consultoria gratuita do Kit — produto e mensagem errados.) */
export const APPLY_URL = '/produtos/mentoria-zigomatico/aplicacao';

/** Âncora interna para os CTAs de "rolar até a candidatura". */
export const OFERTA_ANCHOR = '#candidatura';

/** WhatsApp de dúvidas (botão flutuante). */
export const WHATSAPP_URL = whatsappUrl(
  'Olá! Tenho interesse na Mentoria de Zigomático e gostaria de tirar uma dúvida antes de me candidatar.',
);

/* ---------- Hero ---------- */
export const HERO = {
  eyebrow: 'Mentoria clínica · Implantes zigomáticos',
  titlePre: 'Saia do vídeo solto e domine o zigomático com',
  titleGold: 'prática real: hands-on presencial e cirurgia ao lado do mentor.',
  lead: 'Uma mentoria que vai além da tela: plataforma de aulas, encontros ao vivo e — o que muda o jogo — encontros presenciais de hands-on em laboratório e acompanhamento cirúrgico operando junto ao Dr. Sócrates. Para você parar de encaminhar o caso de maior valor e passar a operá-lo com segurança.',
  ctaPrimary: 'Quero me candidatar',
  ctaSecondary: 'Ver os presenciais',
  trust: [
    'Hands-on presencial em laboratório',
    'Acompanhamento cirúrgico (operar junto)',
    'Plataforma + encontros ao vivo',
    'Entrada por aplicação',
  ],
};

/** Card de prova "glass" no hero (coluna direita). */
export const HERO_CARD = {
  destaque: { num: 'Presencial', label: 'Hands-on + acompanhamento cirúrgico' },
  progresso: { label: 'Protocolo validado em clínica real', valor: 100 },
  mini: [
    { v: 'Lab', l: 'Hands-on' },
    { v: 'Sala', l: 'Operar junto' },
    { v: '1:1', l: 'Casos' },
  ],
  pills: { live: 'Turma aberta', premium: 'Premium' },
};

/** Faixa (marquee) de temas dominados — card glass no hero. */
export const HERO_MARQUEE = {
  titulo: 'O que você vai dominar',
  itens: [
    'Indicação com critério',
    'Planejamento digital',
    'Cirurgia guiada',
    'Quadrizigoma',
    'Carga imediata',
    'Zona segura',
    'Hands-on em laboratório',
    'Acompanhamento de casos',
  ],
};

/* ---------- Números / prova ---------- */
export const STATS: { num: string; label: string }[] = [
  { num: 'Presencial', label: 'Hands-on em laboratório + sala' },
  { num: 'Operar junto', label: 'Acompanhamento cirúrgico real' },
  { num: 'Plataforma', label: 'Curso completo + encontros ao vivo' },
  { num: 'Casos 1:1', label: 'Acompanhamento individual' },
];

/* ---------- Problema / dores ---------- */
export const DORES: { titulo: string; texto: string }[] = [
  {
    titulo: 'Você encaminha o caso de maior valor',
    texto: 'Chega a maxila atrófica severa e, sem prática e protocolo, você indica enxerto longo ou manda para outro colega — e perde a reabilitação mais lucrativa da sua agenda.',
  },
  {
    titulo: 'Aprendeu só por vídeo, nunca pôs a mão',
    texto: 'Assistir a um caso no congresso não vira segurança cirúrgica. Sem hands-on e sem operar ao lado de quem domina, cada cirurgia continua sendo um salto no escuro.',
  },
  {
    titulo: 'O medo da complicação te trava',
    texto: 'Sem dominar ancoragem e zona segura na prática, o receio de lesão de seio ou de órbita faz você recuar justamente na cirurgia que mudaria o seu patamar.',
  },
  {
    titulo: 'Falta um mentor do seu lado',
    texto: 'Estudar sozinho é lento e inseguro. Sem alguém experiente acompanhando o seu caso, do planejamento à execução, a curva de aprendizado custa caro — em tempo e em risco.',
  },
];
export const DORES_FECHAMENTO = {
  pre: 'Enquanto isso, os casos de reabilitação total mais lucrativos passam pela sua cadeira e',
  gold: 'saem pela porta.',
};

/* ---------- Eixos da mentoria (método) ---------- */
export const PILARES: { n: string; titulo: string; texto: string }[] = [
  {
    n: '01',
    titulo: 'Diagnóstico e indicação',
    texto: 'Saiba exatamente quando o zigomático é a melhor escolha — leitura anatômica, critérios éticos e clínicos para indicar com segurança, e não no achismo.',
  },
  {
    n: '02',
    titulo: 'Planejamento digital guiado',
    texto: 'Planeje híbridos e quadrizigomas com fluxo digital e cirurgia guiada, transformando o caso complexo em um procedimento previsível antes de entrar na sala.',
  },
  {
    n: '03',
    titulo: 'Hands-on presencial',
    texto: 'Treino deliberado em laboratório: acesso, ancoragem e posicionamento do implante na prática, com correção em tempo real — até a mão ficar segura.',
  },
  {
    n: '04',
    titulo: 'Acompanhamento cirúrgico',
    texto: 'Você opera ao lado do Dr. Sócrates e leva os seus próprios casos para discussão. Da bancada à sala, com um mentor acompanhando cada decisão.',
  },
];

/* ---------- Encontros presenciais (destaque) ----------
   O grande diferencial desta mentoria. ⚠️ Ajustar datas/locais reais. */
export type Presencial = { tag: string; titulo: string; texto: string };
export const PRESENCIAL: Presencial[] = [
  {
    tag: 'Laboratório',
    titulo: 'Imersão hands-on em laboratório',
    texto: 'Prática presencial em modelo e peça anatômica: acesso, trajetória e posicionamento do implante zigomático, repetindo até dominar a técnica com confiança.',
  },
  {
    tag: 'Centro cirúrgico',
    titulo: 'Acompanhamento cirúrgico (operar junto)',
    texto: 'Você acompanha e opera casos reais ao lado do Dr. Sócrates — mentoria de bancada e sala, vendo cada decisão na prática e tirando dúvidas na hora.',
  },
  {
    tag: 'Imersão',
    titulo: 'Encontros teóricos presenciais',
    texto: 'Discussão de casos, planejamento em grupo e raciocínio clínico aprofundado — networking presencial com outros cirurgiões da mentoria.',
  },
];

/* ---------- Tudo que você recebe (entregas) ---------- */
export type Entrega = { titulo: string; texto: string; tag?: string };
export const ENTREGAS: Entrega[] = [
  {
    tag: 'Presencial',
    titulo: 'Encontros presenciais (3 formatos)',
    texto: 'Imersão hands-on em laboratório, acompanhamento cirúrgico operando junto e encontros teóricos presenciais. Prática real, não só teoria.',
  },
  {
    tag: 'Plataforma',
    titulo: 'Curso de zigomático completo',
    texto: 'Toda a formação técnica na plataforma — do diagnóstico ao hands-on — organizada em módulos e aulas, no seu ritmo e para rever quando quiser.',
  },
  {
    tag: 'Ao vivo',
    titulo: 'Encontros ao vivo online',
    texto: 'Sessões recorrentes de discussão de casos e tira-dúvidas com o mentor entre os encontros presenciais.',
  },
  {
    tag: 'Casos 1:1',
    titulo: 'Acompanhamento individual de casos',
    texto: 'Leve os seus próprios casos: planejamento e decisão acompanhados de perto, do diagnóstico à execução.',
  },
  {
    tag: 'Acervo',
    titulo: 'Biblioteca de casos comentados',
    texto: 'Acervo de casos reais para estudar variações, decisões e resultados — e enxergar a trajetória ideal em cada cenário.',
  },
  {
    tag: 'Comunidade',
    titulo: 'Networking com cirurgiões',
    texto: 'Comunidade de colegas que operam (ou vão operar) zigomático: troque experiências, discuta casos e cresça em rede.',
  },
  {
    tag: 'Ferramentas',
    titulo: 'Protocolos e materiais',
    texto: 'Guias de indicação, checklists de planejamento e os protocolos que o Dr. Sócrates usa na própria clínica.',
  },
  {
    tag: 'Acervo',
    titulo: 'Gravações dos encontros',
    texto: 'Os encontros ao vivo ficam gravados na plataforma para você revisar a teoria antes e depois da prática.',
  },
  {
    tag: 'Suporte',
    titulo: 'Suporte e acompanhamento',
    texto: 'Canal de dúvidas com a equipe entre os encontros — você não fica sozinho na curva de aprendizado.',
  },
];

/* ---------- Trilhas / conteúdo na plataforma ----------
   Reaproveita os temas do curso de zigomático (base teórica).

   As 4 artes são as MESMAS da Maestria (`public/images/modulo-*.jpg`,
   1400×788, o 16:9 exato do `.mz-mod-media`) — arquivo compartilhado, não
   duplicado, como as fotos de caso. Trocar o arquivo afeta as duas páginas.
   Os `resumo` daqui são literalmente os subtítulos gravados nas artes, então
   o par arte↔trilha é o do texto, não um chute.

   ⚠️ Duas dessas artes vinham com "MÓDULO 05" e "MÓDULO 06" gravados no
   canto superior esquerdo, herança de uma numeração que não bate com lugar
   nenhum: aqui os cards dizem "Etapa 03" e "Etapa 04", e na Maestria dizem
   "Módulo 03" e "Módulo 04". O selo foi APAGADO das duas em 13/08/2026 (o
   fundo ali é preto chapado, média RGB ~0,8 e desvio ~0,65, então saiu sem
   deixar mancha), o que corrigiu de uma vez o choque que já estava no ar na
   Maestria desde 11/08. Se alguém repuser essas artes vindas do designer,
   confira o canto antes — elas nascem com o selo. */
export type Trilha = {
  n: string;
  titulo: string;
  resumo: string;
  /** Imagem que representa a trilha (opcional — sem ela, mostra placeholder). */
  img?: string;
  blocos: { sub?: string; aulas: string[] }[];
};

export const TRILHAS: Trilha[] = [
  {
    n: '01',
    titulo: 'Fundamentos e decisões críticas',
    resumo: 'A base conceitual e o raciocínio clínico que sustentam toda cirurgia zigomática segura.',
    img: '/images/modulo-fundamentos-decisoes.jpg',
    blocos: [
      {
        aulas: [
          'Introdução ao universo zigomático',
          'Quando e por que indicar — critérios éticos e clínicos',
          'Leitura anatômica e pontos de ancoragem',
          'Como posicionar os implantes com segurança',
        ],
      },
    ],
  },
  {
    n: '02',
    titulo: 'Planejamento de alto impacto',
    resumo: 'O fluxo digital que transforma o caso mais complexo em um procedimento previsível.',
    img: '/images/modulo-planejamento-alto-impacto.jpg',
    blocos: [
      {
        aulas: [
          'Planejar híbridos e quadrizigomas sem travar',
          'Fluxos digitais que tornam tudo previsível',
          'Por que a cirurgia guiada muda o jogo',
          'Variações clínicas: como lidar com cada uma',
        ],
      },
    ],
  },
  {
    n: '03',
    titulo: 'Cirurgia guiada na prática',
    resumo: 'Da bancada à sala: instrumental, sequência cirúrgica e gestão da zona segura.',
    img: '/images/modulo-cirurgia-guiada.jpg',
    blocos: [
      {
        aulas: [
          'Instrumental essencial da cirurgia guiada',
          'Implantes zigomáticos e transsinusais com guia',
          'Casos clínicos comentados: como pensar cada decisão',
          'Zona segura: como evitar complicações',
        ],
      },
    ],
  },
  {
    n: '04',
    titulo: 'Prática presencial guiada',
    resumo: 'Onde a teoria vira mão: hands-on em laboratório e acompanhamento cirúrgico.',
    /* Único par em que a arte não repete o título: ela se chama "Hands-on
       guiado" e ilustra a Parte 1. A trilha tem duas partes (o hands-on e o
       acompanhamento cirúrgico), e não existe arte da segunda. */
    img: '/images/modulo-hands-on-guiado.jpg',
    blocos: [
      {
        sub: 'Parte 1 · Hands-on em laboratório',
        aulas: [
          'Acesso e posicionamento no modelo',
          'Domínio da trajetória e da ancoragem',
          'Repetição estratégica e ganho de precisão',
        ],
      },
      {
        sub: 'Parte 2 · Acompanhamento cirúrgico',
        aulas: [
          'Operar ao lado do mentor',
          'Discussão dos seus casos reais',
          'Decisão clínica em tempo real',
        ],
      },
    ],
  },
];

/* ---------- Bônus ---------- */
export const BONUS: { titulo: string; texto: string; valor: number }[] = [
  { titulo: 'Curso Maestria Zigomática completo', texto: 'Acesso à formação técnica completa em implantes zigomáticos na plataforma — a base teórica de toda a mentoria.', valor: 1595 },
  { titulo: 'Biblioteca de casos reais', texto: 'Acervo de casos comentados para estudar decisões, variações e resultados.', valor: 497 },
  { titulo: 'Guia completo de indicações', texto: 'O mapa de decisão para indicar (ou contraindicar) o zigomático com segurança em cada cenário.', valor: 297 },
  { titulo: 'Série especial "Onde eu furo"', texto: 'Leitura anatômica comentada caso a caso, para enxergar a trajetória ideal.', valor: 297 },
  { titulo: 'Certificado de participação', texto: 'Comprovação da sua formação na mentoria, para o seu currículo e autoridade.', valor: 197 },
  { titulo: 'Networking presencial', texto: 'Rede de cirurgiões que operam zigomático para trocar e crescer junto.', valor: 297 },
];

/* ---------- Plataforma / como funciona ---------- */
export const PLATAFORMA: { n: string; titulo: string; texto: string }[] = [
  { n: '01', titulo: 'Teoria na plataforma', texto: 'O curso completo organizado em módulos e aulas — você chega aos presenciais já com a base, aproveitando a prática ao máximo.' },
  { n: '02', titulo: 'Prática nos presenciais', texto: 'Hands-on em laboratório e acompanhamento cirúrgico: é onde a técnica vira segurança de verdade, com o mentor do seu lado.' },
  { n: '03', titulo: 'Acompanhamento contínuo', texto: 'Encontros ao vivo, discussão dos seus casos e canal de dúvidas entre os presenciais — do diagnóstico à execução.' },
];

/* ---------- Autoridade / mentor ---------- */
export const MENTOR = {
  nome: 'Dr. Sócrates Tavares',
  role: 'Diretor clínico da Felice Odontologia · Professor na Felice Academy',
  quote:
    'Reabilitação total de maxila atrófica não pode depender de sorte — nem de vídeo solto. Aqui você aprende na prática: opera ao meu lado e leva o protocolo que validei na minha própria clínica.',
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

/* ---------- Casos reais (carrossel) ----------
   Mesmo acervo do curso/masterclass de zigomático: são os casos do
   Dr. Sócrates, e é este raciocínio que a mentoria destrincha nos
   presenciais. Trocar `img` se surgirem fotos novas. */
export type Caso = { etapa?: string; titulo: string; legenda: string; img?: string };
export const CASOS: Caso[] = [
  {
    etapa: 'Planejamento',
    titulo: 'Planejamento digital em 3D',
    legenda: 'Vista frontal: guia e trajetórias definidas antes de abrir',
    img: '/images/caso-planejamento-3d-frontal.jpg',
  },
  {
    etapa: 'Planejamento',
    titulo: 'Trajetória de ancoragem',
    legenda: 'Vista lateral: percurso do implante até o corpo do zigomático',
    img: '/images/caso-planejamento-3d-lateral.jpg',
  },
  {
    etapa: 'Preparo',
    titulo: 'Kit cirúrgico montado',
    legenda: 'Fresas longas e instrumental específico do protocolo',
    img: '/images/caso-kit-cirurgico.jpg',
  },
  {
    etapa: 'Cirurgia',
    titulo: 'Guia cirúrgico em posição',
    legenda: 'Anilhas e pinos de fixação conduzindo a fresagem',
    img: '/images/caso-cirurgia-guiada-guia.jpg',
  },
  {
    etapa: 'Cirurgia',
    titulo: 'Fresagem sob o guia',
    legenda: 'Broca de 2,35 mm com stop, no acesso já preparado',
    img: '/images/caso-cirurgia-guiada-fresagem.jpg',
  },
  {
    etapa: 'Resultado',
    titulo: 'Quadrizigoma',
    legenda: 'Quatro zigomáticos sustentando a barra na maxila atrófica',
    img: '/images/caso-quadrizigoma-panoramica.jpg',
  },
  {
    etapa: 'Resultado',
    titulo: 'Híbrido sobre zigomáticos',
    legenda: 'Barra na maxila e implantes convencionais na mandíbula',
    img: '/images/caso-hibrido-panoramica.jpg',
  },
];

/** Cabeçalho da seção de casos reais. */
export const CASOS_HEAD = {
  eyebrow: 'Casos reais',
  titlePre: 'Os casos que você vai',
  titleGold: 'aprender a operar ao lado do mentor',
  lead: 'Casos reais de maxila atrófica severa conduzidos pelo Dr. Sócrates — do planejamento digital à reabilitação entregue. É este raciocínio que você acompanha no hands-on e leva para os seus próprios casos.',
};

/* ---------- Depoimentos (vídeo) ----------
   ⚠️ Adicionar `video` (URL de embed) e `thumb` (imagem) reais de cada aluno. */
export type Depoimento = { nome: string; meta: string; texto: string; video?: string; thumb?: string };
export const DEPOIMENTOS: Depoimento[] = [
  {
    nome: 'Dr. João Marcel',
    meta: 'Aluno · Felice Academy',
    texto: 'O hands-on presencial mudou meu jogo: o que eu encaminhava, hoje resolvo na minha clínica com segurança.',
  },
  {
    nome: 'Dra. Juliene',
    meta: 'Aluna · Felice Academy',
    texto: 'Operar ao lado do Dr. Sócrates me deu a confiança que nenhum vídeo deu. Saí pronta para os casos complexos.',
  },
  {
    nome: 'Dr. Cristhiano Salustio',
    meta: 'Aluno · Felice Academy',
    texto: 'Da teoria na plataforma ao acompanhamento dos meus casos: é a curva de aprendizado encurtada de verdade.',
  },
];

/* ---------- Oferta (sem preço — por aplicação) ---------- */
export const OFERTA = {
  ribbon: 'Vagas limitadas · turma com encontros presenciais',
  titulo: 'Mentoria de Zigomático — candidate-se',
  itens: [
    'Encontros presenciais: hands-on em laboratório + sala',
    'Acompanhamento cirúrgico operando junto ao mentor',
    'Curso de zigomático completo na plataforma',
    'Encontros ao vivo e acompanhamento dos seus casos',
    'Biblioteca de casos, protocolos e gravações',
    'Networking com outros cirurgiões da turma',
  ],
  cta: 'Quero me candidatar',
  nota: 'As vagas são limitadas (a prática presencial exige turmas pequenas) e a entrada é por aplicação. Responda ao questionário e a nossa equipe entra em contato.',
};

/* ---------- Como funciona a entrada (processo) ---------- */
export const ENTRADA: { n: string; titulo: string; texto: string }[] = [
  { n: '01', titulo: 'Responda ao questionário', texto: 'Poucas perguntas rápidas sobre o seu momento clínico e o seu objetivo com o zigomático.' },
  { n: '02', titulo: 'Conversa de diagnóstico', texto: 'Nossa equipe conversa com você para entender o seu nível e se a mentoria é o encaixe certo.' },
  { n: '03', titulo: 'Entre para a turma', texto: 'Aprovado, você recebe o acesso à plataforma e o calendário dos encontros presenciais.' },
];

/* ---------- FAQ ---------- */
export const FAQ: { q: string; a: string }[] = [
  {
    q: 'Preciso já operar zigomático para entrar?',
    a: 'Não. A mentoria parte dos fundamentos e do raciocínio de indicação, passa pelo planejamento e chega ao hands-on presencial e ao acompanhamento cirúrgico. Atende tanto quem quer começar com segurança quanto quem já opera e busca um protocolo previsível.',
  },
  {
    q: 'Como funcionam os encontros presenciais?',
    a: 'São de três tipos: imersão hands-on em laboratório (prática em modelo/peça), acompanhamento cirúrgico (você opera ao lado do Dr. Sócrates) e encontros teóricos presenciais de discussão de casos. As datas e o local são informados na entrada da turma.',
  },
  {
    q: 'A parte teórica é presencial também?',
    a: 'A base teórica fica na plataforma (online, no seu ritmo), para você chegar aos presenciais já preparado e aproveitar a prática ao máximo. Os presenciais são focados em mão na massa e discussão de casos.',
  },
  {
    q: 'Tem acompanhamento dos meus casos?',
    a: 'Sim. Você leva os seus próprios casos para planejamento e discussão, com acompanhamento individual do diagnóstico à execução, além dos encontros ao vivo entre os presenciais.',
  },
  {
    q: 'Como faço para entrar?',
    a: 'A entrada é por aplicação. Você responde a um questionário rápido, nossa equipe conversa com você e, aprovado, recebe o acesso e o calendário. As vagas são limitadas porque a prática presencial exige turmas pequenas.',
  },
];

/* ---------- CTA final ---------- */
export const FINAL = {
  eyebrow: 'Comece agora',
  titlePre: 'Pare de encaminhar o caso da sua vida.',
  titleGold: 'Aprenda a operá-lo — com a mão na massa.',
  lead: 'Candidate-se à Mentoria de Zigomático e domine, com hands-on presencial e cirurgia ao lado do mentor, a reabilitação que coloca você entre as referências em maxila atrófica severa.',
  cta: 'Quero me candidatar',
};
