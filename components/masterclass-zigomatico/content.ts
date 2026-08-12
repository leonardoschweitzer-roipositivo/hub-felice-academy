import { whatsappUrl } from '@/lib/whatsapp/contato';

/* ============================================================
   MASTERCLASS ZIGOMÁTICO DESCOMPLICADO · conteúdo da landing
   Produto de ticket baixo, acesso único de R$ 67 com checkout.
   Edite SÓ aqui copy, segredos, bônus, planos, depoimentos e FAQ.

   ⚠️ TROCAR antes de publicar:
   - DEADLINE_ISO: data real de saída do ar (a de hoje é provisória).
   - DEPOIMENTOS: conferir se o nome de cada item bate com quem aparece
     no vídeo — os embeds entraram na ordem em que foram enviados.
   ============================================================ */

/** Checkout do acesso (R$ 67) na Greenn/Payfast. O código da oferta
 *  (`eKgG4W`) também vive em lib/tracking/funnels.ts — trocar nos dois. */
export const CHECKOUT_URL =
  'https://payfast.greenn.com.br/144108/offer/eKgG4W?ch_id=142077';

/** Âncora interna para a seção de planos/acesso. */
export const OFERTA_ANCHOR = '#acesso';

/** Embed da VSL no hero. O wrapper `.mc-video` já é 16:9 e posiciona o
 *  iframe, então o <div style="padding-top:56.25%"> do snippet do Panda
 *  não entra aqui — só o src. */
export const VIDEO_URL =
  'https://player-vz-90784769-874.tv.pandavideo.com.br/embed/?v=f84f70aa-165f-40aa-b882-b5bd37076855';

/** id que o player do Panda usa para se achar na página (`panda-<uuid>`). */
export const VIDEO_IFRAME_ID = 'panda-f84f70aa-165f-40aa-b882-b5bd37076855';

/** Saída do ar — countdown autêntico. ⚠️ PROVISÓRIA (escolhida em 10/08/2026
 *  para a barra voltar ao ar; a anterior, 15/07, já tinha vencido). Vencida,
 *  a barra inteira sai do DOM — contador E "pessoas vendo agora" somem junto. */
export const DEADLINE_ISO = '2026-08-31T23:59:59-03:00';

/** WhatsApp de dúvidas (botão flutuante). */
export const WHATSAPP_URL = whatsappUrl(
  'Olá! Tenho interesse na Masterclass Zigomático Descomplicado e gostaria de tirar uma dúvida.',
);

/* ---------- Hero (VSL) ---------- */
export const HERO = {
  eyebrow: 'Masterclass',
  titlePre: 'Zigomático',
  titleGold: 'Descomplicado.',
  lead: 'Domine os princípios dos implantes zigomáticos em poucas horas e descubra como transformar casos impossíveis em faturamento real — sem precisar encaminhar o paciente para outro profissional.',
  ctaPrimary: 'Assistir a masterclass e baixar os bônus',
  videoTitle: 'Masterclass Zigomático Descomplicado',
  /** Texto ao redor do vídeo (abaixo). */
  abaixoVideo:
    'Uma Masterclass exclusiva com o Dr. Sócrates Tavares, referência nacional em implantodontia, que vai te mostrar o caminho simples, seguro e direto para essa jornada rumo à elite dos zigomáticos.',
  countdownLabel: 'Essa aula sairá do ar em',
};

/* ---------- Faixa-frase (após o hero) ---------- */
export const FAIXA_FRASE = {
  pre: 'O que você vai aprender em',
  gold: 'horas,',
  pos: 'outros levam anos para compreender.',
};

/* ---------- Problema / dores ---------- */
export const PROBLEMA = {
  eyebrow: 'O diagnóstico',
  tituloPre: 'O caso de maior valor passa pela sua cadeira — e você',
  tituloGold: 'não opera por insegurança?',
  lead: 'A maxila atrófica severa é a reabilitação mais lucrativa da odontologia. Sem um método claro, ela vira receio — e oportunidade que sai pela porta.',
};
export const DORES: { titulo: string; texto: string }[] = [
  {
    titulo: 'Falta de previsibilidade',
    texto: 'Você até estuda, mas sem um protocolo replicável cada cirurgia vira um salto no escuro.',
  },
  {
    titulo: 'Você só aprende observando',
    texto: 'Assistir a um caso isolado não é operar — sem método, a insegurança na hora da cirurgia continua.',
  },
  {
    titulo: 'Falta de critério na indicação',
    texto: 'Sem saber quando indicar com segurança, o caso de maior valor da sua agenda sai pela porta.',
  },
  {
    titulo: 'O medo da complicação te trava',
    texto: 'O receio de lesão de seio ou de órbita faz você recuar justamente na cirurgia que mudaria o seu patamar.',
  },
];

/* ---------- O que você vai aprender (segredos) ---------- */
export const SEGREDOS: { n: string; titulo: string; texto: string }[] = [
  {
    n: '1',
    titulo: 'Planejamento passo a passo dos implantes zigomáticos',
    texto: 'Você vai enxergar o caso antes de entrar na sala: leitura da tomografia, escolha da trajetória, número e posicionamento dos implantes e a sequência exata do planejamento digital. O que hoje parece complexo vira um roteiro claro, replicável em cada paciente.',
  },
  {
    n: '2',
    titulo: 'Protocolos cirúrgicos objetivos e fundamentais',
    texto: 'Nada de teoria solta: os passos cirúrgicos que realmente importam, da incisão à ancoragem, com os cuidados de zona segura para evitar as complicações que mais assustam (seio e órbita). Um protocolo direto que te dá segurança para conduzir a cirurgia com confiança.',
  },
  {
    n: '3',
    titulo: 'Casos reais comentados pelo Dr. Sócrates',
    texto: 'Acompanhe decisões reais, comentadas passo a passo: por que indicar (ou não), como o caso foi planejado e o que mudaria em cada variação. É o raciocínio clínico de quem já operou centenas de casos — destrinchado para você aplicar.',
  },
  {
    n: '4',
    titulo: 'Precificação inteligente de casos complexos',
    texto: 'A reabilitação de maxila atrófica é o caso de maior valor da sua agenda — e cobrar errado deixa dinheiro na mesa. Você vai entender como precificar com critério, comunicar o valor ao paciente e fechar casos de alto ticket sem insegurança.',
  },
  {
    n: '5',
    titulo: 'O caminho para se tornar referência em zigomáticos',
    texto: 'Mais do que uma técnica: a visão de carreira para deixar de encaminhar e passar a receber os casos que os outros não resolvem. O posicionamento que transforma você na referência da sua região em maxila atrófica severa.',
  },
];

/** Imagens da seção "o que você vai aprender" — na ordem da jornada do caso. */
export type Aprendizado = { legenda: string; img?: string };
export const APRENDIZADO_IMGS: Aprendizado[] = [
  { legenda: 'Leitura anatômica e ancoragem', img: '/images/aprender-leitura-anatomica.jpg' },
  { legenda: 'Planejamento digital do caso', img: '/images/aprender-planejamento-digital.jpg' },
  { legenda: 'Cirurgia guiada na prática', img: '/images/aprender-cirurgia-guiada.jpg' },
  { legenda: 'Reabilitação concluída', img: '/images/aprender-reabilitacao-concluida.jpg' },
];

/* ---------- Faixa-CTA (turn) ---------- */
export const FAIXA_CTA = {
  pre: 'Não encaminhe mais pacientes.',
  gold: 'Não perca mais faturamento.',
  cta: 'Assistir a masterclass agora',
};

/* ---------- Casos reais (carrossel) ---------- */
export type Caso = { titulo: string; legenda: string; img?: string; etapa?: string };
/* Registros reais do Dr. Sócrates, na ordem da jornada do caso. A tag mostra a
   ETAPA, não "Caso 01/02/..." — são estágios de poucos casos, não sete casos. */
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

/* ---------- Faixa-destaque (com foto) ---------- */
export const DESTAQUE = {
  eyebrow: 'Masterclass · Zigomático Descomplicado',
  titulo: 'A chave para transformar casos impossíveis em oportunidades lucrativas.',
  texto:
    'É só apertar o play, e você vai entender com clareza os princípios, os protocolos e o raciocínio clínico que separam o dentista que encaminha do dentista que opera os casos de maior valor da sua agenda.',
  cta: 'Assistir a masterclass e baixar os bônus',
};

/* ---------- Depoimentos ----------
   ⚠️ Adicionar `video` (embed) e `thumb` reais de cada aluno. */
/** `embed`/`embedId`: player do Panda, vertical (9:16), tocado dentro do card.
 *  `video`/`thumb`: card antigo que abre o vídeo em outra aba — sem uso hoje,
 *  mantido porque `MasterclassDepoimentos` ainda o renderiza. */
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
    // O snippet deste veio como iframe fixo de 720x360, sem o div de proporção.
    // É só a variante de tamanho fixo do Panda: o vídeo é 612x1080, vertical
    // igual aos outros, e cai no mesmo slot 9:16.
    embed:
      'https://player-vz-90784769-874.tv.pandavideo.com.br/embed/?v=738dddd5-f486-4a4a-b502-daaea7f17220',
    embedId: 'panda-738dddd5-f486-4a4a-b502-daaea7f17220',
  },
];

/* ---------- Bônus aceleradores ----------
   `valor` é a ancoragem de valor percebido (R$). Somado automaticamente. */
export const BONUS: { tag: string; titulo: string; texto: string; valor: number }[] = [
  { tag: 'Ebook', titulo: 'Mini guia de implantes zigomáticos avançados', texto: 'Este guia foi pensado para simplificar e acelerar a curva: do raciocínio de indicação à conduta segura, num material direto e fácil de consultar.', valor: 97 },
  { tag: 'Aula bônus', titulo: 'Cirurgia real com caso clínico comentado', texto: 'Acompanhe uma cirurgia real, comentada passo a passo pelo Dr. Sócrates — da decisão à execução guiada.', valor: 197 },
  { tag: 'Aula bônus', titulo: 'Como precificar casos complexos', texto: 'Saia do achismo: critérios práticos para precificar reabilitações de alto valor com segurança e margem.', valor: 297 },
  { tag: 'Ebook · Check-list', titulo: 'Pré e pós-operatório', texto: 'Um check-list direto e objetivo de tudo que você precisa antes, durante e depois da cirurgia, para reduzir intercorrências.', valor: 197 },
  { tag: 'Acesso exclusivo', titulo: 'Grupo do WhatsApp', texto: 'Durante 9 meses, você terá acesso a um grupo fechado e exclusivo para tirar dúvidas e trocar com colegas e com a equipe.', valor: 307 },
  { tag: 'Voucher', titulo: 'R$ 500 de desconto no Guia da Maestria', texto: 'Um voucher de desconto exclusivo para você dar o próximo passo e entrar na Maestria Zigomática (o curso completo).', valor: 1500 },
];

/* ---------- Acesso único (R$ 67) ----------
   Era Acesso grátis × Premium; o gratuito saiu em 10/08/2026. `PLANOS`
   continua sendo lista para o dia em que voltar a ter mais de um.
   `parcela` + `aVista` seguem o mesmo formato das outras landings
   (ver OFERTA em recepcao-alta-performance/content.ts). */
export type Plano = {
  nome: string;
  /** Preço parcelado em destaque no card. */
  parcela: { vezes: string; valor: string };
  /** Preço à vista, na linha de apoio. */
  aVista: string;
  ribbon?: string;
  destaque?: boolean;
  /** Itens inclusos neste plano (subset de ITENS_ACESSO). */
  inclui: string[];
  cta: string;
  /** Destino do CTA. */
  href: string;
};

/** Linhas da tabela comparativa (na ordem). */
export const ITENS_ACESSO: string[] = [
  'Masterclass Zigomático Descomplicado',
  'Ebook · Mini guia de implantes zigomáticos',
  'Aula bônus · Cirurgia real comentada',
  'Aula bônus · Como precificar casos complexos',
  'Ebook · Check-list pré e pós-operatório',
  'Acesso ao grupo do WhatsApp (9 meses)',
  'Voucher de R$ 500 no Guia da Maestria',
];

export const PLANOS: Plano[] = [
  {
    nome: 'Acesso completo',
    parcela: { vezes: '12x', valor: 'R$ 6,89' },
    aVista: 'R$ 67,00',
    // Sem `ribbon`: "Mais escolhido" só faz sentido comparando com algo.
    destaque: true,
    inclui: ITENS_ACESSO, // tudo
    cta: 'Quero meu acesso',
    href: CHECKOUT_URL,
  },
];

/* ---------- Garantia ---------- */
export const GARANTIA = {
  titulo: 'Garantia Masterclass',
  texto:
    'Assista à masterclass com calma e veja os bônus na prática. Se nos primeiros 7 dias não for para você, é só pedir o reembolso — devolvemos 100% do valor, sem burocracia.',
  cta: 'Assistir a masterclass agora',
};

/* ---------- Autoridade / Sobre mim ---------- */
export const MENTOR = {
  nome: 'Dr. Sócrates Tavares',
  role: 'Diretor clínico da Felice Odontologia · Professor na Felice Academy',
  quote:
    'Eu transformei anos de prática clínica real em um método direto. Aqui você aprende, descomplicado, o que separa quem encaminha de quem opera os casos de maior valor.',
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

/* ---------- Stats ---------- */
export const STATS: { num: string; label: string }[] = [
  { num: '+3 mil', label: 'Pacientes atendidos' },
  { num: '+1 mil', label: 'Dentistas formados' },
];

/* ---------- FAQ ---------- */
export const FAQ: { q: string; a: string }[] = [
  {
    q: 'A masterclass é gravada ou ao vivo?',
    a: 'É gravada e fica disponível por tempo limitado (veja o contador). Com o acesso você garante também todos os bônus e o material para consultar quando quiser.',
  },
  {
    q: 'Preciso já operar zigomático para aproveitar?',
    a: 'Não. A masterclass parte dos princípios e do raciocínio de indicação — serve tanto para quem quer começar com segurança quanto para quem já opera e busca um protocolo mais previsível.',
  },
  {
    q: 'O que exatamente eu levo por R$ 67?',
    a: 'A masterclass completa mais todos os bônus aceleradores: os ebooks, a aula de cirurgia real comentada, a aula de precificação, o grupo de WhatsApp por 9 meses e o voucher de R$ 500 no Guia da Maestria. É pagamento único, sem mensalidade — e dá para parcelar em até 12x de R$ 6,89.',
  },
  {
    q: 'Como funciona a garantia?',
    a: 'Você tem 7 dias de garantia incondicional. Se não for para você, devolvemos 100% do valor, sem burocracia.',
  },
];

/* ---------- CTA final ---------- */
export const FINAL = {
  eyebrow: 'Última chamada',
  titlePre: 'Pare de encaminhar o caso da sua vida.',
  titleGold: 'Aprenda a operá-lo — descomplicado.',
  lead: 'Assista à Masterclass Zigomático Descomplicado e dê o primeiro passo para se tornar referência em maxila atrófica severa na sua região.',
  cta: 'Assistir a masterclass e baixar os bônus',
};
