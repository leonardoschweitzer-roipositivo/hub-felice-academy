/* ============================================================
   CURSO "A SECRETÁRIA QUE VENDE" · conteúdo central da landing
   Edite SÓ aqui copy, módulos, bônus, preço, FAQ e depoimentos.
   Curso em vídeo (Dr. Sócrates / Felice Academy) que treina a
   recepção da clínica a VENDER: do primeiro contato ao fechamento
   do orçamento e ao follow-up.

   Posicionamento: CURSO B2B — quem compra é o DONO da clínica para
   TREINAR a equipe de recepção. Formato: aulas gravadas + bônus ao
   vivo (encontro de dúvidas). NÃO confundir com:
   - Gestão F4 (/produtos/gestao-f4): curso para o DONO montar o
     sistema dos 4 pilares da gestão (nível estratégico).
   Diferença explicada no FAQ para não canibalizar o Gestão F4.

   ⚠️ TROCAR antes de publicar:
   - CHECKOUT_URL: link real de checkout (padrão Felice = Green).
   - OFERTA.parcela / OFERTA.aVista: preço real.
   - DEADLINE_ISO: data real do lote/fechamento.
   - DEPOIMENTOS: URLs de vídeo (embed) e thumbnails reais.
   - STATS / contagem de módulos/aulas: confirmar (não inventar prova social).
   - Grade e bônus: RASCUNHO sugerido — validar com o cliente.
   ============================================================ */

/** Link de checkout (pagamento). PLACEHOLDER — trocar pelo link real. */
export const CHECKOUT_URL = '#oferta';

/** Âncora interna para os CTAs de "rolar até a oferta". */
export const OFERTA_ANCHOR = '#oferta';

/** WhatsApp de dúvidas (botão flutuante). */
export const WHATSAPP_URL =
  'https://wa.me/5588981391199?text=' +
  encodeURIComponent(
    'Olá! Tenho interesse no curso "A Secretária que Vende" e gostaria de tirar uma dúvida antes de matricular minha equipe.',
  );

/** Fechamento do lote — countdown autêntico. ⚠️ Ajustar para a data real. */
export const DEADLINE_ISO = '2026-07-31T23:59:59-03:00';

/* ---------- Hero ---------- */
export const HERO = {
  eyebrow: 'Curso online · Treinamento comercial da recepção',
  titlePre: 'O treinamento que transforma a sua secretária na profissional que',
  titleGold: 'agenda, apresenta e fecha tratamento.',
  lead: 'Sua secretária atende com carinho — mas quantos orçamentos saem pela porta sem resposta? "A Secretária que Vende" é o curso pronto que você entrega à sua equipe para transformar a recepção numa máquina de conversão: do primeiro "oi" no WhatsApp ao tratamento fechado. Aulas gravadas + encontro ao vivo de dúvidas.',
  ctaPrimary: 'Quero treinar minha secretária',
  ctaSecondary: 'Ver os módulos',
  trust: [
    '100% online, no ritmo da equipe',
    'Scripts e planilhas prontos',
    'Bônus: encontro ao vivo de dúvidas',
    'Garantia de 7 dias',
  ],
};

/** Card de prova "glass" no hero (coluna direita). */
export const HERO_CARD = {
  destaque: { num: '5 módulos', label: 'Do primeiro contato ao follow-up do orçamento' },
  progresso: { label: 'Material pronto para a equipe aplicar', valor: 100 },
  mini: [
    { v: '5', l: 'Módulos' },
    { v: 'Scripts', l: 'prontos' },
    { v: '7 dias', l: 'Garantia' },
  ],
  pills: { live: 'Acesso imediato', premium: 'Bônus ao vivo' },
};

/** Faixa (marquee) de temas — card glass no hero. */
export const HERO_MARQUEE = {
  titulo: 'O que a sua equipe vai dominar',
  itens: [
    'Atendimento ao lead',
    'Script de WhatsApp',
    'Responder "quanto custa?"',
    'Apresentar orçamento',
    'Contornar objeções',
    'Fechar tratamento',
    'Follow-up do orçamento',
    'Confirmação e no-show',
    'Reativar inativos',
  ],
};

/* ---------- Números / prova ----------
   Apenas fatos da estrutura do curso. ⚠️ Não inserir prova social
   (nº de alunos etc.) sem confirmar o dado real. */
export const STATS: { num: string; label: string }[] = [
  { num: '5 módulos', label: 'Do primeiro contato ao fechamento e follow-up' },
  { num: 'Scripts prontos', label: 'WhatsApp, orçamento, follow-up e confirmação' },
  { num: '100% online', label: 'A equipe assiste no ritmo dela, quantas vezes precisar' },
  { num: '7 dias', label: 'Garantia incondicional' },
];

/* ---------- Problema / dores ---------- */
export const DORES: { titulo: string; texto: string }[] = [
  {
    titulo: 'Orçamento apresentado, paciente sumiu',
    texto: 'A secretária passa o valor, o paciente diz "vou pensar"… e ninguém dá follow-up. O tratamento — e o dinheiro — evaporam.',
  },
  {
    titulo: 'Trava no "quanto custa?"',
    texto: 'No WhatsApp e no telefone, a resposta ao preço espanta o paciente antes mesmo de ele marcar a avaliação.',
  },
  {
    titulo: 'Atende bem, mas não conduz à decisão',
    texto: 'Sua equipe é simpática e acolhedora — só que acolhimento sem técnica de fechamento não vira tratamento fechado.',
  },
  {
    titulo: 'Cada uma faz de um jeito',
    texto: 'Sem script e sem processo, a conversão depende de quem está na recepção naquele dia. O resultado é imprevisível.',
  },
];
export const DORES_FECHAMENTO = {
  pre: 'Enquanto a recepção não sabe vender, o seu marketing traz paciente que',
  gold: 'escorre pelo ralo.',
};

/* ---------- Método / o funil comercial da recepção ---------- */
export const METODO: { n: string; titulo: string; texto: string }[] = [
  {
    n: '01',
    titulo: 'Atender',
    texto: 'Transforme cada primeiro contato — WhatsApp, telefone, balcão — em confiança e em avaliação marcada, com a voz, a escrita e o script certos.',
  },
  {
    n: '02',
    titulo: 'Agendar',
    texto: 'Encha a agenda de avaliações e derrube o no-show com um processo de agendamento e confirmação que a equipe segue sempre igual.',
  },
  {
    n: '03',
    titulo: 'Fechar',
    texto: 'Apresente o orçamento com ancoragem de valor, conduza a decisão e contorne "tá caro" e "vou pensar" sem dar descontão.',
  },
  {
    n: '04',
    titulo: 'Reativar',
    texto: 'Faça o follow-up dos orçamentos em aberto, recupere pacientes inativos e transforme quem fechou em indicação — o dinheiro que já está na casa.',
  },
];

/* ---------- Módulos (conteúdo) ----------
   ⚠️ Grade RASCUNHO coerente com o material Felice (CRC Comercial +
   Atendimento) — ajuste para a grade real do curso. `img` opcional. */
export type Modulo = {
  n: string;
  titulo: string;
  resumo: string;
  img?: string;
  blocos: { sub?: string; aulas: string[] }[];
};

export const MODULOS: Modulo[] = [
  {
    n: '01',
    titulo: 'A secretária que vende',
    resumo: 'A virada de mentalidade: a recepção é o time comercial da clínica. Onde o paciente entra, onde o dinheiro se ganha ou se perde.',
    blocos: [
      {
        aulas: [
          'Por que a secretária é a peça-chave do faturamento',
          'Vender é servir: a venda ética e humanizada na odontologia',
          'A jornada do paciente: do primeiro "oi" ao tratamento fechado',
          'O funil comercial: lead → agendamento → comparecimento → fechamento',
          'Os números que a recepção precisa acompanhar',
        ],
      },
    ],
  },
  {
    n: '02',
    titulo: 'Primeiro contato que agenda',
    resumo: 'O atendimento ao lead que vira avaliação marcada — no WhatsApp e no telefone, com script fase a fase.',
    blocos: [
      {
        aulas: [
          'A voz e a escrita que geram confiança no primeiro contato',
          'Script de atendimento ao lead que agenda (WhatsApp/telefone)',
          'Como responder "quanto custa?" sem perder o paciente',
          'A regra dos 5 minutos: velocidade de resposta e resgate do lead frio',
          'Derrubando o "vou ver e depois te falo"',
        ],
      },
    ],
  },
  {
    n: '03',
    titulo: 'Recepção que encanta e prepara a venda',
    resumo: 'O acolhimento presencial que constrói confiança e prepara o terreno para o paciente dizer sim.',
    blocos: [
      {
        aulas: [
          'A arte de receber: acolhimento que constrói confiança',
          'Padronizando a experiência presencial (POP de recepção)',
          'Situações delicadas: atraso, falta de documento, paciente irritado',
          'Criando o clima para o paciente decidir',
        ],
      },
    ],
  },
  {
    n: '04',
    titulo: 'Orçamento e fechamento',
    resumo: 'O momento do dinheiro: apresentar o plano de tratamento, ancorar valor e conduzir o paciente à decisão.',
    blocos: [
      {
        aulas: [
          'Como apresentar o plano de tratamento e o orçamento',
          'Ancoragem de valor: vender saúde e transformação, não preço',
          'Formas de pagamento e negociação sem "descontão"',
          'Conduzindo o fechamento: o paciente diz sim',
          'Banco de objeções: "tá caro", "vou pensar", "preciso falar em casa"',
        ],
      },
    ],
  },
  {
    n: '05',
    titulo: 'Follow-up e reativação',
    resumo: 'O dinheiro esquecido: recuperar orçamentos em aberto, derrubar o no-show e trazer o paciente inativo de volta.',
    blocos: [
      {
        aulas: [
          'Follow-up de orçamentos em aberto: o que ficou na mesa',
          'Confirmação ativa e queda do no-show',
          'Reativação de pacientes inativos',
          'Pedindo indicações e avaliações no Google',
          'A rotina comercial semanal da secretária',
        ],
      },
    ],
  },
];

/* ---------- Bônus ----------
   `valor` é a ancoragem de valor percebido (em R$). O total é somado
   automaticamente na seção. ⚠️ Ajuste os valores se quiser. */
export const BONUS: { titulo: string; texto: string; valor: number }[] = [
  { titulo: 'Pacote de scripts prontos', texto: 'Roteiros editáveis de primeiro contato, apresentação de orçamento, follow-up, confirmação e reativação — prontos para a equipe usar hoje.', valor: 197 },
  { titulo: 'Banco de respostas para objeções', texto: 'O "o que dizer quando…" para "tá caro", "vou pensar", "preciso falar em casa" e as objeções mais comuns da recepção.', valor: 147 },
  { titulo: 'Planilha de controle de orçamentos e follow-up', texto: 'O funil comercial da secretária numa planilha: cada orçamento aberto, o próximo contato e nada mais caindo no esquecimento.', valor: 147 },
  { titulo: 'Modelos de mensagem (WhatsApp)', texto: 'Templates de confirmação de consulta e de reativação de pacientes, prontos para copiar, personalizar e enviar.', valor: 97 },
  { titulo: 'Encontro ao vivo de dúvidas', texto: 'Um encontro ao vivo com o time Felice para destravar a aplicação do método na realidade da sua clínica.', valor: 297 },
  { titulo: 'Aula bônus: Felice CRM para não perder orçamento', texto: 'Como usar o Felice CRM para registrar cada orçamento e automatizar o follow-up — para o dinheiro nunca mais escapar.', valor: 197 },
  { titulo: 'Certificado de conclusão', texto: 'Certificado da Felice Academy ao final do curso, que valoriza a profissional e a sua recepção.', valor: 47 },
];

/* ---------- Plataforma / como funciona ---------- */
export const PLATAFORMA: { n: string; titulo: string; texto: string }[] = [
  { n: '01', titulo: 'Feito para a equipe', texto: 'Você compra uma vez e treina quem está na recepção hoje e quem entrar amanhã — o padrão da sua clínica não depende mais da rotatividade.' },
  { n: '02', titulo: 'No ritmo dela, de qualquer lugar', texto: 'Aulas curtas e diretas, no computador ou no celular, para assistir entre um paciente e outro e rever quantas vezes precisar.' },
  { n: '03', titulo: 'Da aula direto para a prática', texto: 'Cada módulo vem com scripts e planilhas prontos: a equipe sai da aula com a ferramenta na mão para usar no mesmo dia.' },
];

/* ---------- Autoridade / mentor ---------- */
export const MENTOR = {
  nome: 'Dr. Sócrates Tavares',
  role: 'Diretor clínico da Felice Odontologia · Professor na Felice Academy',
  quote:
    'Recepção não é custo, é o seu time comercial. A secretária certa, treinada com método, é quem transforma o seu marketing em agenda cheia e orçamento fechado. Foi assim que estruturei a linha de frente da Felice — e é isso que eu ensino aqui, passo a passo.',
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

/* ---------- Depoimentos (vídeo) ----------
   ⚠️ Adicionar `video` (URL de embed) e `thumb` (imagem) reais.
   Enquanto não houver, o card mostra um placeholder com o play. */
export type Depoimento = { nome: string; meta: string; texto: string; video?: string; thumb?: string };
export const DEPOIMENTOS: Depoimento[] = [
  {
    nome: 'Dr. Rafael',
    meta: 'Dono de clínica · Aluno Felice Academy',
    texto: 'Depois que minha recepção começou a dar follow-up nos orçamentos, recuperei tratamento que eu já dava por perdido.',
  },
  {
    nome: 'Dra. Marina',
    meta: 'Dona de clínica · Aluna Felice Academy',
    texto: 'Minha secretária travava no "quanto custa". Hoje ela agenda a avaliação e o paciente chega decidido.',
  },
  {
    nome: 'Dr. Bruno',
    meta: 'Dono de clínica · Aluno Felice Academy',
    texto: 'Padronizei o atendimento da equipe inteira. Não importa quem atende: o paciente tem sempre a mesma experiência.',
  },
];

/* ---------- Oferta ----------
   ⚠️ parcela/aVista são PLACEHOLDER — trocar pelo preço real. */
export const OFERTA = {
  ribbon: 'Acesso imediato',
  titulo: 'A Secretária que Vende — completo',
  itens: [
    'Módulo 1 · A secretária que vende',
    'Módulo 2 · Primeiro contato que agenda',
    'Módulo 3 · Recepção que encanta',
    'Módulo 4 · Orçamento e fechamento',
    'Módulo 5 · Follow-up e reativação',
    'Bônus: scripts, banco de objeções e planilhas prontos',
    'Bônus ao vivo: encontro de dúvidas com o time Felice',
    'Garantia incondicional de 7 dias',
  ],
  parcela: { vezes: '12x', valor: 'R$ 29,70' },
  aVista: 'R$ 297,00',
  cta: 'Quero treinar minha secretária',
};

/* ---------- FAQ ---------- */
export const FAQ: { q: string; a: string }[] = [
  {
    q: 'Esse curso é para mim ou para a minha secretária?',
    a: 'Para os dois. Você, dono(a), compra o acesso e entrega o treinamento à sua equipe de recepção. É o padrão comercial da sua clínica na mão de quem fala com o paciente — sem você precisar treinar pessoalmente, aula por aula.',
  },
  {
    q: 'Minha secretária não tem experiência com vendas. Serve?',
    a: 'Serve — e é exatamente para isso. O curso parte do zero, com script e passo a passo, para transformar uma pessoa acolhedora numa profissional que também conduz o paciente à decisão, sem parecer que está "empurrando".',
  },
  {
    q: 'Dá para treinar mais de uma pessoa da equipe?',
    a: 'Sim, é feito para a equipe: você treina quem está na recepção hoje e padroniza quem entrar amanhã, sem que o resultado dependa de quem está no balcão naquele dia.',
  },
  {
    q: 'Qual a diferença para o curso Gestão F4?',
    a: 'O Gestão F4 é para você, dono(a), montar o sistema dos 4 pilares da clínica (nível estratégico). "A Secretária que Vende" é o treinamento prático que você entrega à recepção — foco total em atender, agendar, apresentar orçamento e fechar. Um monta a estrutura; o outro treina a linha de frente.',
  },
  {
    q: 'Como funciona o bônus ao vivo?',
    a: 'Além das aulas gravadas, a matrícula dá acesso a um encontro ao vivo de dúvidas com o time Felice, para destravar a aplicação do método na realidade da sua clínica. A data e o formato são informados na área do aluno.',
  },
  {
    q: 'Como funciona a garantia e o pagamento?',
    a: 'Você tem 7 dias de garantia incondicional — se não for para a sua clínica, devolvemos 100%, sem burocracia. O pagamento pode ser parcelado no cartão ou à vista, com acesso liberado na hora.',
  },
];

/* ---------- CTA final ---------- */
export const FINAL = {
  eyebrow: 'Comece hoje',
  titlePre: 'Pare de perder tratamento na recepção.',
  titleGold: 'Treine quem fala com o paciente para vender.',
  lead: 'Dê à sua equipe o método que transforma atendimento em agenda cheia e orçamento fechado. Acesso imediato, no ritmo da equipe, com garantia de 7 dias.',
  cta: 'Quero treinar minha secretária',
};
