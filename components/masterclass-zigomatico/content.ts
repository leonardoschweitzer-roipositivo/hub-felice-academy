/* ============================================================
   MASTERCLASS ZIGOMÁTICO DESCOMPLICADO · conteúdo da landing
   Produto de ticket baixo com checkout (Premium R$ 67) + acesso grátis.
   Edite SÓ aqui copy, segredos, bônus, planos, depoimentos e FAQ.

   ⚠️ TROCAR antes de publicar:
   - VIDEO_URL: embed real da VSL (Wistia/YouTube/Vimeo).
   - CHECKOUT_URL: link real de checkout (Greenn/Payfast).
   - DEADLINE_ISO: data real de saída do ar.
   - CASOS/APRENDIZADO: imagens reais (campo img).
   - DEPOIMENTOS: vídeos e thumbnails reais.
   ============================================================ */

/** Link de checkout do Premium. PLACEHOLDER — trocar pelo real. */
export const CHECKOUT_URL = '#acesso';

/** Âncora interna para a seção de planos/acesso. */
export const OFERTA_ANCHOR = '#acesso';

/** Embed da VSL no hero (16:9). PLACEHOLDER — trocar pelo real. */
export const VIDEO_URL = '';

/** Saída do ar — countdown autêntico. ⚠️ Ajustar para a data real. */
export const DEADLINE_ISO = '2026-07-15T23:59:59-03:00';

/** WhatsApp de dúvidas (botão flutuante). */
export const WHATSAPP_URL =
  'https://wa.me/5588981391199?text=' +
  encodeURIComponent(
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

/** Imagens da seção "o que você vai aprender" (placeholder até subir as reais). */
export type Aprendizado = { legenda: string; img?: string };
export const APRENDIZADO_IMGS: Aprendizado[] = [
  { legenda: 'Planejamento digital do caso' },
  { legenda: 'Cirurgia guiada na prática' },
  { legenda: 'Reabilitação concluída' },
  { legenda: 'Leitura anatômica e ancoragem' },
];

/* ---------- Faixa-CTA (turn) ---------- */
export const FAIXA_CTA = {
  pre: 'Não encaminhe mais pacientes.',
  gold: 'Não perca mais faturamento.',
  cta: 'Assistir a masterclass agora',
};

/* ---------- Casos reais (carrossel) ---------- */
export type Caso = { titulo: string; legenda: string; img?: string };
export const CASOS: Caso[] = [
  { titulo: 'Maxila atrófica severa', legenda: 'Reabilitação total com quadrizigoma' },
  { titulo: 'Híbrido sobre zigomáticos', legenda: 'Planejamento digital e cirurgia guiada' },
  { titulo: 'Carga imediata', legenda: 'Do plano à prótese no mesmo dia' },
  { titulo: 'Abordagem transsinusal', legenda: 'Trajetória e posicionamento guiado' },
  { titulo: 'Zona segura', legenda: 'Ancoragem sem intercorrências' },
  { titulo: 'Reabilitação complexa', legenda: 'Decisão clínica passo a passo' },
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
export type Depoimento = { nome: string; meta: string; texto: string; video?: string; thumb?: string };
export const DEPOIMENTOS: Depoimento[] = [
  { nome: 'Dr. Emmanuel Bezerra', meta: 'Aluno · Felice Academy', texto: 'Curso excepcional. Aprendi a tirar a equipe sob a cadeira e a indicar com critério. Mudou meu jogo.' },
  { nome: 'Dr. Thiago Vinícius', meta: 'Aluno · Felice Academy', texto: 'Professor a curva da primeira. Conteúdo, organizado, didático. Obrigado mesmo!' },
  { nome: 'Dr. Paulo Bezerra', meta: 'Aluno · Felice Academy', texto: 'Conteúdo direto ao ponto. Saí com clareza do passo a passo dos casos zigomáticos.' },
  { nome: 'Dr. Juliano Nunes', meta: 'Aluno · Felice Academy', texto: 'Os casos comentados pelo professor qualificaram muito como eu penso cada decisão. Vale demais.' },
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

/* ---------- Os dois tipos de acesso (Acesso × Premium) ----------
   As linhas são os itens; cada plano marca o que inclui. */
export type Plano = {
  nome: string;
  /** Preço em texto curto (ex.: 'Grátis', 'R$ 67'). */
  preco: string;
  precoNota?: string;
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
    nome: 'Acesso',
    preco: 'Grátis',
    precoNota: 'Apenas a masterclass',
    inclui: ['Masterclass Zigomático Descomplicado'],
    cta: 'Assistir grátis',
    href: '#topo',
  },
  {
    nome: 'Premium',
    preco: 'R$ 67',
    precoNota: 'pagamento único · acesso imediato',
    ribbon: 'Mais escolhido',
    destaque: true,
    inclui: ITENS_ACESSO, // tudo
    cta: 'Quero o Premium',
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
    a: 'É gravada e fica disponível por tempo limitado (veja o contador). No acesso Premium, você garante também todos os bônus e o material para consultar quando quiser.',
  },
  {
    q: 'Preciso já operar zigomático para aproveitar?',
    a: 'Não. A masterclass parte dos princípios e do raciocínio de indicação — serve tanto para quem quer começar com segurança quanto para quem já opera e busca um protocolo mais previsível.',
  },
  {
    q: 'Qual a diferença entre o acesso grátis e o Premium?',
    a: 'No acesso grátis você assiste à masterclass. No Premium (R$ 67) você leva, além da aula, todos os bônus aceleradores (ebooks, aula de cirurgia real, precificação, grupo de WhatsApp e o voucher de desconto na Maestria).',
  },
  {
    q: 'Como funciona a garantia?',
    a: 'Você tem 7 dias de garantia incondicional no Premium. Se não for para você, devolvemos 100% do valor, sem burocracia.',
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
