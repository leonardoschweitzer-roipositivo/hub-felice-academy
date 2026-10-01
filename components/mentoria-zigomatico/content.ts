import { whatsappUrl } from '@/lib/whatsapp/contato';
import type { Depoimento } from '@/components/maestria/content';

/* ============================================================
   MENTORIA DE ZIGOMÁTICO · conteúdo central da landing de vendas
   Edite SÓ aqui copy, eixos, presenciais, entregas e FAQ.
   Mentoria clínica premium do Dr. Sócrates Tavares.

   Diferencial: PRÁTICA REAL. Além da plataforma e dos encontros ao
   vivo, tem encontros PRESENCIAIS — prática em laboratório,
   acompanhamento cirúrgico (operar junto) e encontros teóricos.

   ⚠️ Vocabulário (revisão da equipe, 01/10/2026): o HANDS-ON é online
   (módulo gravado da Maestria); o que acontece presencialmente é PRÁTICA.
   Não volte a chamar o presencial de "hands-on".

   Venda por APLICAÇÃO (sem preço): CTAs → /produtos/mentoria-zigomatico/aplicacao.

   ⚠️ TROCAR antes de publicar:
   - PRESENCIAL/ENTREGAS: confirmar datas, locais e formato dos encontros.
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
  titleGold: 'prática real: encontro presencial e cirurgia ao lado do mentor.',
  lead: 'Uma mentoria que vai além da tela: plataforma de aulas, encontros ao vivo e — o que muda o jogo — encontros presenciais de prática em laboratório e acompanhamento cirúrgico operando junto ao Dr. Sócrates. Para você parar de encaminhar o caso de maior valor e passar a operá-lo com segurança.',
  ctaPrimary: 'Quero me candidatar',
  ctaSecondary: 'Ver os presenciais',
  trust: [
    'Prática presencial em laboratório',
    'Acompanhamento cirúrgico (operar junto)',
    'Plataforma + encontros ao vivo',
    'Entrada por aplicação',
  ],
};

/** Card de prova "glass" no hero (coluna direita). */
export const HERO_CARD = {
  destaque: { num: 'Presencial', label: 'Prática + acompanhamento cirúrgico' },
  progresso: { label: 'Protocolo validado em clínica real', valor: 100 },
  mini: [
    { v: 'Lab', l: 'Prática' },
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
    'Prática em laboratório',
    'Acompanhamento de casos',
  ],
};

/* ---------- Números / prova ---------- */
export const STATS: { num: string; label: string }[] = [
  { num: 'Presencial', label: 'Prática em laboratório + sala' },
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
    texto: 'Assistir a um caso no congresso não vira segurança cirúrgica. Sem prática e sem operar ao lado de quem domina, cada cirurgia continua sendo um salto no escuro.',
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
    titulo: 'Prática presencial',
    texto: 'Treino deliberado em laboratório: acesso, ancoragem e posicionamento do implante na prática, com correção em tempo real — até a mão ficar segura.',
  },
  {
    n: '04',
    titulo: 'Acompanhamento cirúrgico',
    texto: 'Você opera ao lado do Dr. Sócrates e leva os seus próprios casos para discussão. Da bancada à sala, com um mentor acompanhando cada decisão.',
  },
];

/* ---------- Encontros presenciais (destaque) ----------
   O grande diferencial desta mentoria. ⚠️ Ajustar datas/locais reais.

   As 3 fotos (08/09/2026) são registros REAIS de turmas do Dr. Sócrates, uma
   por card e na ordem da seção: bancada, centro cirúrgico e planejamento.
   Não são banco de imagem — são a prova visual do que o card promete, que é o
   argumento inteiro desta seção ("não é só vídeo").

   Duas das três vieram do celular em retrato (3024×4032) e o slot do card é
   4:3, então perderam 44% da altura no corte. O offset foi escolhido, não
   centralizado, porque centralizado cortava justo o assunto: na de bancada
   sobe até pegar o kit, o modelo e o motor; na de planejamento desce até as
   duas cabeças caberem inteiras com o 3D na tela ao fundo. A do centro
   cirúrgico já era 4:3 e só foi reamostrada. Todas em 1000×750 JPEG q82 — o
   card tem ~360px de largura, então sobra resolução para tela retina. */
export type Presencial = { tag: string; titulo: string; texto: string; img?: string };
export const PRESENCIAL: Presencial[] = [
  {
    tag: 'Laboratório',
    titulo: 'Prática presencial em laboratório',
    img: '/images/presencial-laboratorio.jpg',
    texto: 'Treino em modelo e peça anatômica: acesso, trajetória e posicionamento do implante zigomático, repetindo até dominar a técnica com confiança.',
  },
  {
    tag: 'Centro cirúrgico',
    titulo: 'Acompanhamento cirúrgico (operar junto)',
    img: '/images/presencial-centro-cirurgico.jpg',
    texto: 'Você acompanha e opera casos reais ao lado do Dr. Sócrates — mentoria de bancada e sala, vendo cada decisão na prática e tirando dúvidas na hora.',
  },
  {
    tag: 'Imersão',
    titulo: 'Encontros teóricos presenciais',
    img: '/images/presencial-planejamento.jpg',
    texto: 'Discussão de casos, planejamento em grupo e raciocínio clínico aprofundado — networking presencial com outros cirurgiões da mentoria.',
  },
];

/* ---------- Tudo que você recebe (entregas) ----------
   Lista conferida com a equipe em 01/10/2026: encontro presencial, curso
   online Maestria, Masterclass, materiais de estudo, ebook pré/pós-operatório,
   miniguia e as 4 aulas bônus, somados aos itens que já existiam. Número par
   de cards de propósito: o grid é de 2 colunas. */
export type Entrega = { titulo: string; texto: string; tag?: string };
export const ENTREGAS: Entrega[] = [
  {
    tag: 'Presencial',
    titulo: 'Encontro presencial para teoria e prática',
    texto: 'Prática em laboratório e encontros teóricos presenciais de discussão de casos. Prática real, não só teoria.',
  },
  {
    tag: 'Centro cirúrgico',
    titulo: 'Acompanhamento cirúrgico operando junto',
    texto: 'Você opera casos reais ao lado do Dr. Sócrates, vendo cada decisão na prática e tirando dúvidas na hora.',
  },
  {
    tag: 'Curso online',
    titulo: 'Curso online Maestria Zigomática',
    texto: 'A formação técnica completa na plataforma — do diagnóstico ao hands-on guiado — organizada em módulos e aulas, no seu ritmo e para rever quando quiser.',
  },
  {
    tag: 'Curso online',
    titulo: 'Masterclass Zigomático Descomplicado',
    texto: 'Os princípios dos implantes zigomáticos em poucas horas: a base para chegar à mentoria já com o raciocínio no lugar.',
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
    tag: 'Materiais',
    titulo: 'Materiais de estudo',
    texto: 'Guias de indicação, checklists de planejamento e os protocolos que o Dr. Sócrates usa na própria clínica.',
  },
  {
    tag: 'Ebook',
    titulo: 'Ebook pré e pós-operatório',
    texto: 'O cuidado com o paciente antes e depois da cirurgia, num material direto para consultar sempre que precisar.',
  },
  {
    tag: 'Ebook',
    titulo: 'Miniguia Implante Zigomático',
    texto: 'Do raciocínio de indicação à conduta segura, num guia curto e fácil de consultar.',
  },
  {
    tag: 'Aulas bônus',
    titulo: '4 aulas bônus',
    texto: 'Precificação de casos complexos, planejamento estratégico, primeira consulta e cirurgia real com caso comentado.',
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
    resumo: 'Onde a teoria vira mão: prática em laboratório e acompanhamento cirúrgico.',
    /* Único par em que a arte não repete o título: ela se chama "Hands-on
       guiado" e ilustra a Parte 1. A trilha tem duas partes (a prática e o
       acompanhamento cirúrgico), e não existe arte da segunda. */
    img: '/images/modulo-hands-on-guiado.jpg',
    blocos: [
      {
        sub: 'Parte 1 · Prática em laboratório',
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

/* ---------- Plataforma / como funciona ---------- */
export const PLATAFORMA: { n: string; titulo: string; texto: string }[] = [
  { n: '01', titulo: 'Teoria na plataforma', texto: 'O curso completo organizado em módulos e aulas — você chega aos presenciais já com a base, aproveitando a prática ao máximo.' },
  { n: '02', titulo: 'Prática nos presenciais', texto: 'Prática em laboratório e acompanhamento cirúrgico: é onde a técnica vira segurança de verdade, com o mentor do seu lado.' },
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
    'Especialista em Harmonização Orofacial pela FACOP',
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
  lead: 'Casos reais de maxila atrófica severa conduzidos pelo Dr. Sócrates — do planejamento digital à reabilitação entregue. É este raciocínio que você acompanha na prática presencial e leva para os seus próprios casos.',
};

/* ---------- Ambiente acadêmico e cirúrgico ----------
   Galeria da estrutura onde a mentoria acontece. Vem logo depois de "O
   diferencial", que promete laboratório, centro cirúrgico e encontros
   teóricos: esta seção é a prova de que o lugar existe e é equipado.

   Fotos do Leo (08/09/2026), tiradas na própria clínica. Vieram SEIS e
   entraram QUATRO: a IMG_4401 é o mesmo enquadramento da 4400 e a IMG_4404
   é a mesma sala da 4405 a um passo de distância. Numa fileira curta, foto
   repetida lê como enchimento e derruba a seção inteira — a estrutura passa
   a parecer menor do que é, não maior. Se quiser as duas de volta, é só
   acrescentar as linhas: os arquivos originais estão no Drive.

   A do DEA é a única que não é foto de sala, e é de propósito: numa mentoria
   em que o aluno opera caso real, desfibrilador à vista diz sobre a
   estrutura o que nenhuma sala vazia diz.

   As cinco de sala vieram do iPhone em HEIC 4032×3024 — já 4:3, a proporção
   exata do slot, então foram só convertidas e reamostradas. A do DEA veio em
   retrato e perdeu 44% da altura: o offset desce até a bolsa caber inteira
   com o "DEA" legível, que centralizado ficava cortado. Todas em 1000×750
   JPEG q82 (96–200 KB). */
export type Ambiente = { img?: string; alt?: string };
export const AMBIENTE_HEAD = {
  eyebrow: 'Onde você pratica',
  titlePre: 'Ambiente acadêmico e',
  titleGold: 'cirúrgico de verdade',
  lead: 'A mentoria não acontece numa sala emprestada. Laboratório para a prática e centro cirúrgico equipado para os casos reais — a mesma estrutura em que o Dr. Sócrates opera todos os dias.',
};
export const AMBIENTE: Ambiente[] = [
  {
    img: '/images/ambiente-sala-cirurgica.jpg',
    alt: 'Sala cirúrgica da Felice: cadeira, foco cirúrgico de teto, monitores e bancada de apoio',
  },
  {
    img: '/images/ambiente-consultorio.jpg',
    alt: 'Consultório com foco cirúrgico, monitor para imagens e bancada de instrumentais',
  },
  {
    img: '/images/ambiente-foco-cirurgico.jpg',
    alt: 'Sala cirúrgica com foco de teto, cadeira reclinável e bancada montada',
  },
  {
    img: '/images/ambiente-dea.jpg',
    alt: 'Desfibrilador externo automático (DEA) disponível na estrutura da clínica',
  },
];

/* ---------- Vídeo da seção "O diagnóstico" ----------
   Substituiu a `dentista-cansado-*.jpg` (08/09/2026), que esta landing dividia
   com outras SETE — a foto continua lá, para elas; só esta página troca.

   ⚠️ A proporção NÃO é 16:9. O snippet do Panda veio com padding-top de
   54,99334%, ou seja 1,8184:1 — mais largo. O wrapper reproduz esse número
   exato em `aspect-ratio` (ver .mzz-problem-video em mentoria-zigomatico.css);
   arredondar para 16:9 poria tarja preta em cima e embaixo do player.

   Como no resto do projeto, o <div style="padding-top"> do snippet NÃO entra
   no JSX: o wrapper já resolve a proporção e posiciona o iframe. Aqui só o
   src e o `panda-<uuid>` que o player procura para se achar na página. */
export const DIAGNOSTICO_VIDEO = {
  embed:
    'https://player-vz-90784769-874.tv.pandavideo.com.br/embed/?v=2fcc396b-ccb8-452f-8757-cb5dfa85455e',
  embedId: 'panda-2fcc396b-ccb8-452f-8757-cb5dfa85455e',
};

/* ---------- Depoimentos ----------
   Renderizados pelo <MaestriaDepoimentos /> da Maestria. Até 01/10/2026 a
   lista era a da própria Maestria; quando a Maestria trocou os vídeos, esta
   página ficou com os 4 que já mostrava. */
export const DEPOIMENTOS: Depoimento[] = [
  {
    nome: 'Dr. Emmanuel Marques',
    meta: 'Aluno · Felice Academy',
    texto: 'Curso excepcional. Agradecer a toda a equipe pelo cuidado em todos os detalhes. Agradecer ao Sócrates por passar todo o conhecimento de forma simples e didática.',
    embed:
      'https://player-vz-90784769-874.tv.pandavideo.com.br/embed/?v=ad9090d8-dcbe-46e9-b0c7-4725772f2fee',
    embedId: 'panda-ad9090d8-dcbe-46e9-b0c7-4725772f2fee',
  },
  {
    nome: 'Dr. Thiago Vinicius',
    meta: 'Aluno · Felice Academy',
    texto: 'Obrigado pelos ensinamentos, aprendi muito e estou muito mais confiante.',
    embed:
      'https://player-vz-90784769-874.tv.pandavideo.com.br/embed/?v=00ecbcee-1689-4a49-989a-ba4f0f5be1f6',
    embedId: 'panda-00ecbcee-1689-4a49-989a-ba4f0f5be1f6',
  },
  {
    nome: 'Dr. Paulo Maurício',
    meta: 'Aluno · Felice Academy',
    texto: 'Professor, o curso é de primeira. Conteúdo, organização, didática. Obrigado mesmo.',
    embed:
      'https://player-vz-90784769-874.tv.pandavideo.com.br/embed/?v=0c6ed468-d354-41c1-89ca-1c9345f5b0b0',
    embedId: 'panda-0c6ed468-d354-41c1-89ca-1c9345f5b0b0',
  },
  {
    nome: 'Dr. Julierme Ferreira',
    meta: 'Aluno · Felice Academy',
    texto: 'Parabéns Dr. Sócrates. O curso era exatamente como eu procurava, professor qualificado que ensina tudo que sabe. Valeu por tudo!',
    embed:
      'https://player-vz-90784769-874.tv.pandavideo.com.br/embed/?v=738dddd5-f486-4a4a-b502-daaea7f17220',
    embedId: 'panda-738dddd5-f486-4a4a-b502-daaea7f17220',
  },
];

/* ---------- Oferta (sem preço — por aplicação) ---------- */
export const OFERTA = {
  ribbon: 'Vagas limitadas · turma com encontros presenciais',
  titulo: 'Mentoria de Zigomático — candidate-se',
  itens: [
    'Encontro presencial para teoria e prática',
    'Acompanhamento cirúrgico operando junto com o Dr. Sócrates',
    'Curso online Maestria Zigomática + Masterclass Zigomático Descomplicado',
    'Materiais de estudo, ebook pré e pós-operatório e miniguia',
    '4 aulas bônus: precificação, planejamento, primeira consulta e cirurgia comentada',
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
    a: 'Não. A mentoria parte dos fundamentos e do raciocínio de indicação, passa pelo planejamento e chega à prática presencial e ao acompanhamento cirúrgico. Atende tanto quem quer começar com segurança quanto quem já opera e busca um protocolo previsível.',
  },
  {
    q: 'Como funcionam os encontros presenciais?',
    a: 'São de três tipos: prática em laboratório (em modelo/peça), acompanhamento cirúrgico (você opera ao lado do Dr. Sócrates) e encontros teóricos presenciais de discussão de casos. As datas e o local são informados na entrada da turma.',
  },
  {
    q: 'A parte teórica é presencial também?',
    a: 'A base teórica fica na plataforma (online, no seu ritmo), para você chegar aos presenciais já preparado e aproveitar a prática ao máximo. O encontro presencial junta teoria e prática: discussão de casos e mão na massa em laboratório.',
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
  lead: 'Candidate-se à Mentoria de Zigomático e domine, com prática presencial e cirurgia ao lado do mentor, a reabilitação que coloca você entre as referências em maxila atrófica severa.',
  cta: 'Quero me candidatar',
};
