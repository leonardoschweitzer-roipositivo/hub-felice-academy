import { whatsappUrl } from '@/lib/whatsapp/contato';

/* ============================================================
   CURSO "CRC DE ALTA PERFORMANCE" · conteúdo central da landing
   Edite SÓ aqui copy, módulos, bônus, preço, FAQ e depoimentos.

   O produto se chama "CRC de Alta Performance" desde 10/08/2026 (PR #19),
   mas a copy continuou falando com a persona "secretária" até 13/08/2026 —
   H1, os três CTAs, o Módulo 1 e o FAQ. Corrigido aqui. Seguem com o nome
   antigo DE PROPÓSITO, e não são erro: a rota (/produtos/vendas-secretaria),
   o `contentName` do funnels.ts, o slug do catálogo da plataforma e os nomes
   dos arquivos/componentes — mexer neles quebraria anúncio no ar, histórico
   de eventos do Meta e progresso salvo de aluno.
   Curso em vídeo (Dr. Sócrates / Felice Academy) que treina a
   recepção da clínica a VENDER: do primeiro contato ao fechamento
   do orçamento e ao follow-up.

   Posicionamento: CURSO B2B — quem compra é o DONO da clínica para
   TREINAR a equipe de recepção. Formato: aulas gravadas + bônus ao
   vivo (encontro de dúvidas). NÃO confundir com:
   - Consultoria Gestão F4 (/produtos/consultoria): o Dr. Sócrates
     monta o sistema dos 4 pilares COM o dono, em 4 semanas de
     auditoria (nível estratégico). NÃO é curso — a landing que
     anunciava um "Curso Gestão F4" foi removida em 11/08/2026 e a
     rota redireciona para a consultoria.
   Diferença explicada no FAQ para não canibalizar o Gestão F4.

   ✅ Checkout e preço já são os reais (Payfast/Greenn, 11/08/2026):
   12x de R$ 61,38 ou R$ 597,00 à vista.

   ✅ A grade (MODULOS) é a REAL desde 14/08/2026 — 4 módulos × 5 aulas do
   "Conteúdo Programático" do material oficial (Curso de CRC Agendamento /
   CRC Comercial). Até então era um rascunho de 5 módulos que não batia com
   nada: nenhum título coincidia, o Módulo 1 do material (sondagem) não
   existia na página e o Módulo 3 do rascunho vendia acolhimento presencial,
   que é o produto-par (/produtos/recepcao-alta-performance). Ver MODULOS.

   ⚠️ TROCAR antes de publicar:
   - DEADLINE_ISO: data real do lote/fechamento.
   - DEPOIMENTOS: URLs de vídeo (embed) e thumbnails reais.
   - BONUS: lista sugerida — validar com o cliente o que é entregue de fato.
   ============================================================ */

/** Link de checkout (pagamento) — Payfast/Greenn, oferta oficial do curso. */
export const CHECKOUT_URL =
  'https://payfast.greenn.com.br/tgzs73v/offer/PpTfLq?ch_id=140311';

/** Âncora interna para os CTAs de "rolar até a oferta". */
export const OFERTA_ANCHOR = '#oferta';

/** WhatsApp de dúvidas (botão flutuante). */
export const WHATSAPP_URL = whatsappUrl(
  'Olá! Tenho interesse no curso "CRC de Alta Performance" e gostaria de tirar uma dúvida antes de matricular minha equipe.',
);

/**
 * Fechamento do lote — alimenta o countdown da <ScarcityBar />.
 * ⚠️ Vencida, a barra INTEIRA sai do ar (contador, vagas e "pessoas vendo
 * agora"), e a página perde toda a urgência sem avisar ninguém. Estava em
 * 31/07/2026, no passado, desde antes de 11/08/2026.
 * ⚠️ Ajustar para a data real. Kit F4 à parte, as quatro landings com
 * countdown vencem juntas em 31/08/2026 — renove todas de uma vez.
 */
export const DEADLINE_ISO = '2026-08-31T23:59:59-03:00';

/* ---------- Hero ---------- */
export const HERO = {
  eyebrow: 'Curso online · Treinamento comercial da recepção',
  // ⚠️ `titlePre` tem 45 caracteres, praticamente o mesmo da versão anterior
  // (46): a quebra do H1 não muda. Ao reescrever, meça no navegador — chutar
  // largura em `ch` nesta Poppins não funciona.
  titlePre: 'Transforme sua recepção num time comercial que',
  titleGold: 'agenda, apresenta e fecha tratamento.',
  lead: 'Sua equipe atende com carinho — mas quantos orçamentos saem pela porta sem resposta? O "CRC de Alta Performance" é o curso pronto que você entrega a quem fala com o paciente para transformar a recepção numa máquina de conversão: do primeiro "oi" no WhatsApp ao tratamento fechado. Aulas gravadas + encontro ao vivo de dúvidas.',
  ctaPrimary: 'Quero treinar minha equipe',
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
  destaque: { num: '4 módulos', label: 'Da sondagem do lead ao follow-up do orçamento' },
  progresso: { label: 'Material pronto para a equipe aplicar', valor: 100 },
  mini: [
    { v: '4', l: 'Módulos' },
    { v: '20', l: 'Aulas' },
    { v: '7 dias', l: 'Garantia' },
  ],
  pills: { live: 'Acesso imediato', premium: 'Bônus ao vivo' },
};

/** Faixa (marquee) de temas — card glass no hero. */
export const HERO_MARQUEE = {
  titulo: 'O que a sua equipe vai dominar',
  itens: [
    'Sondagem profunda',
    'Perguntas abertas',
    'Qualificação de leads',
    'CRM e rastreamento',
    'Urgência controlada',
    'Queda do no-show',
    'Orçamento personalizado',
    'Técnicas de fechamento',
    'Parcelamento como facilitador',
    'Role-playing',
    'Objeções: preço, medo e tempo',
    'Follow-up por WhatsApp',
    'KPIs de fechamento',
  ],
};

/* ---------- Números / prova ----------
   Apenas fatos da estrutura do curso. ⚠️ Não inserir prova social
   (nº de alunos etc.) sem confirmar o dado real. */
export const STATS: { num: string; label: string }[] = [
  { num: '4 módulos', label: 'Sondagem, agendamento, fechamento e objeções' },
  { num: '20 aulas', label: 'Curtas e práticas, com role-playing em duas delas' },
  { num: '100% online', label: 'A equipe assiste no ritmo dela, quantas vezes precisar' },
  { num: '7 dias', label: 'Garantia incondicional' },
];

/* ---------- Problema / dores ---------- */
export const DORES: { titulo: string; texto: string }[] = [
  {
    titulo: 'Orçamento apresentado, paciente sumiu',
    texto: 'A recepção passa o valor, o paciente diz "vou pensar"… e ninguém dá follow-up. O tratamento — e o dinheiro — evaporam.',
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

/* ---------- Método / o funil comercial da recepção ----------
   Os quatro verbos são os quatro módulos do material, na mesma ordem: o
   visitante lê o método aqui e reencontra a mesma sequência na seção "O
   conteúdo". Mexeu em MODULOS, olhe aqui. */
export const METODO: { n: string; titulo: string; texto: string }[] = [
  {
    n: '01',
    titulo: 'Sondar',
    texto: 'Antes de oferecer horário, entender: perguntas abertas que revelam a dor, a estética e o orçamento do paciente — e o registro no CRM para nenhum lead se perder.',
  },
  {
    n: '02',
    titulo: 'Agendar',
    texto: 'Ofereça horário com urgência controlada, previna a ausência antes que ela aconteça e derrube o no-show — com a métrica na mão, não no achismo.',
  },
  {
    n: '03',
    titulo: 'Fechar',
    texto: 'Apresente o orçamento personalizado, use o parcelamento como facilitador e conduza a decisão com técnica de fechamento, não com descontão.',
  },
  {
    n: '04',
    titulo: 'Contornar',
    texto: 'Responda a preço, medo e tempo com empatia e argumento de valor, e faça o follow-up que recupera o orçamento que ficou na mesa.',
  },
];

/* ---------- Módulos (conteúdo) ----------
   GRADE REAL: seção "1. Conteúdo Programático" do material oficial (Curso de
   CRC Agendamento / CRC Comercial), 4 módulos × 5 aulas = 20. Os títulos de
   módulo e de aula são os do material, com só o ajuste de caixa depois dos
   dois-pontos ("Dor, estética" → "dor, estética"); os `resumo` são nossos.

   ⚠️ NÃO reintroduza acolhimento presencial aqui (a arte de receber, POP de
   recepção, paciente irritado no balcão): é o "Recepção de Alta Performance"
   (/produtos/recepcao-alta-performance), o produto-par do card 04. O rascunho
   anterior tinha um módulo inteiro disso e os dois cursos se canibalizavam.
   Este curso é telefone/WhatsApp, agendamento e fechamento do orçamento.

   ⚠️ Mudou a contagem? São SEIS lugares além daqui: HERO_CARD e STATS acima,
   OFERTA.itens abaixo, a headline "4 módulos." escrita à mão em
   SecretariaVendeSections.tsx, o STATS de obrigado/Prova.tsx, o card 03 de
   components/hub/content.ts e o catálogo em plataforma/data/cursos.ts (este
   último exige bump do STORAGE_KEY do PlatformStore).

   As 4 artes `crc-modulo-*.jpg` (14/08/2026) são EXCLUSIVAS desta landing —
   ao contrário das `modulo-*.jpg`, que a Maestria e a mentoria de zigomático
   compartilham. Entregues pelo Leo em 1672×941 e 1536×1024; as duas de 3:2
   foram cortadas para 16:9 (a proporção do .mz-mod-media), com o offset
   escolhido para não perder o assunto: a agenda na tela e o tablet com o
   plano de tratamento. Todas viraram 1400×788 JPEG q82, como as da Maestria.
   O <img> é decorativo (alt="" dentro de um wrapper aria-hidden) e NÃO leva
   width/height: o slot conta com aspect-ratio + object-fit e o atributo
   height desliga o aspect-ratio, esticando a foto. */
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
    titulo: 'Sondagem e Qualificação de Leads',
    resumo: 'Antes de oferecer horário, entender. As perguntas que revelam o que o paciente realmente quer — e o registro que faz nenhum lead se perder pelo caminho.',
    img: '/images/crc-modulo-sondagem.jpg',
    blocos: [
      {
        aulas: [
          'Perguntas abertas para mapear dores e desejos do paciente',
          'Identificação de necessidades: dor, estética e orçamento',
          'Perfil do paciente ideal para tratamentos odontológicos',
          'Ferramentas de anotação e CRM para rastreamento',
          'Prática: scripts de sondagem com role-playing',
        ],
      },
    ],
  },
  {
    n: '02',
    titulo: 'Agendamento Eficaz',
    resumo: 'A agenda cheia e sem buraco: oferecer horário com urgência controlada, prevenir a ausência antes que ela aconteça e medir o que está acontecendo.',
    img: '/images/crc-modulo-agendamento.jpg',
    blocos: [
      {
        aulas: [
          'Apresentação de opções de horários com urgência controlada',
          'Integração com a agenda da clínica e ERP',
          'Tratamento de ausências e remarcações preventivas',
          'Agendamento múltiplo: pacotes de tratamento',
          'Métricas de conversão: taxa de no-show reduzida',
        ],
      },
    ],
  },
  {
    n: '03',
    titulo: 'Fechamento de Vendas e Tratamentos',
    resumo: 'O momento do dinheiro: apresentar o orçamento personalizado, facilitar o pagamento e conduzir o paciente até o sim — com técnica, não com descontão.',
    img: '/images/crc-modulo-fechamento.jpg',
    blocos: [
      {
        aulas: [
          'Técnicas de fechamento: assumir o sim e benefícios claros',
          'Apresentação de orçamentos personalizados',
          'Financiamentos e parcelamentos como facilitadores',
          'Criação de urgência ética: "limites de vagas"',
          'Role-playing de fechamentos reais',
        ],
      },
    ],
  },
  {
    n: '04',
    titulo: 'Tratativa de Objeções e Follow-up',
    resumo: 'O que dizer quando vem o "tá caro", o medo e o "não tenho tempo" — e o follow-up que recupera o orçamento que ficou na mesa.',
    img: '/images/crc-modulo-follow-up.jpg',
    blocos: [
      {
        aulas: [
          'Objeções comuns: preço, medo e tempo',
          'Respostas empáticas e contra-argumentos baseados em valor',
          'Follow-up automatizado via WhatsApp e e-mail',
          'Análise de KPIs: taxa de fechamento e reativação',
          'Melhoria contínua: feedback e ajustes nos scripts',
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
  { titulo: 'Planilha de controle de orçamentos e follow-up', texto: 'O funil comercial da recepção numa planilha: cada orçamento aberto, o próximo contato e nada mais caindo no esquecimento.', valor: 147 },
  { titulo: 'Modelos de mensagem (WhatsApp)', texto: 'Templates de confirmação de consulta e de reativação de pacientes, prontos para copiar, personalizar e enviar.', valor: 97 },
  { titulo: 'Encontro ao vivo de dúvidas', texto: 'Um encontro ao vivo com o time Felice para destravar a aplicação do método na realidade da sua clínica.', valor: 297 },
  // O Módulo 1 já ensina "ferramentas de anotação e CRM para rastreamento"
  // de forma genérica; este bônus é a aplicação daquilo dentro do Felice CRM.
  { titulo: 'Aula bônus: o Módulo 1 dentro do Felice CRM', texto: 'O rastreamento que a aula 4 ensina, aplicado passo a passo no Felice CRM: cada orçamento registrado e o follow-up no automático.', valor: 197 },
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
    'Recepção não é custo, é o seu time comercial. Quem atende o paciente, treinado com método, é quem transforma o seu marketing em agenda cheia e orçamento fechado. Foi assim que estruturei a linha de frente da Felice — e é isso que eu ensino aqui, passo a passo.',
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
   Enquanto não houver, o card mostra um placeholder com o play.

   O texto da Dra. Marina diz "minha secretária" e ficou como estava na
   varredura de persona de 13/08/2026: é fala atribuída a uma pessoa, não
   copy nossa, e reescrever depoimento é pôr palavra na boca de alguém. Como
   fala de dona de clínica, soa natural e não contradiz o nome do produto.
   ⚠️ Se estes três textos forem placeholder (os nomes não têm sobrenome nem
   clínica, e nenhum tem vídeo), aí a regra não vale — troque pelos reais. */
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
   Preço oficial do checkout (Payfast/Greenn): 12x de R$ 61,38 ou
   R$ 597,00 à vista. Mudou o preço lá? Mude aqui também. */
export const OFERTA = {
  ribbon: 'Acesso imediato',
  titulo: 'CRC de Alta Performance — completo',
  itens: [
    'Módulo 1 · Sondagem e qualificação de leads',
    'Módulo 2 · Agendamento eficaz',
    'Módulo 3 · Fechamento de vendas e tratamentos',
    'Módulo 4 · Tratativa de objeções e follow-up',
    'Bônus: scripts, banco de objeções e planilhas prontos',
    'Bônus ao vivo: encontro de dúvidas com o time Felice',
    'Garantia incondicional de 7 dias',
  ],
  parcela: { vezes: '12x', valor: 'R$ 61,38' },
  aVista: 'R$ 597,00',
  cta: 'Quero treinar minha equipe',
};

/* ---------- FAQ ---------- */
export const FAQ: { q: string; a: string }[] = [
  {
    q: 'Esse curso é para mim ou para a minha equipe?',
    a: 'Para os dois. Você, dono(a), compra o acesso e entrega o treinamento à sua equipe de recepção. É o padrão comercial da sua clínica na mão de quem fala com o paciente — sem você precisar treinar pessoalmente, aula por aula.',
  },
  {
    /* A menção a "secretária" aqui é deliberada: é o nome que muita clínica
       ainda usa para o cargo, então quem chegou procurando por ele reconhece
       o produto sem que o resto da copy contradiga o rename de 10/08/2026.
       A outra que sobrou na página está num DEPOIMENTO, e por outro motivo
       (ver o comentário de DEPOIMENTOS). */
    q: 'Quem vai fazer o curso não tem experiência com vendas. Serve?',
    a: 'Serve — e é exatamente para isso. O curso parte do zero, com script e passo a passo, para quem está na linha de frente (o cargo que muita clínica ainda chama de secretária) virar alguém que acolhe e também conduz o paciente à decisão, sem parecer que está "empurrando".',
  },
  {
    q: 'Dá para treinar mais de uma pessoa da equipe?',
    a: 'Sim, é feito para a equipe: você treina quem está na recepção hoje e padroniza quem entrar amanhã, sem que o resultado dependa de quem está no balcão naquele dia.',
  },
  {
    /* Dizia "o curso Gestão F4", que não existe — a landing foi removida no
       PR #63 (11/08/2026) e a rota redireciona para a consultoria. O
       comentário no topo deste arquivo já registrava isso; o FAQ é que não
       tinha acompanhado, e a página vendia comparação com produto fantasma. */
    q: 'Qual a diferença para a Consultoria Gestão F4?',
    a: 'A Consultoria Gestão F4 é para você, dono(a): o Dr. Sócrates monta o sistema dos 4 pilares da clínica com você, em 4 semanas (nível estratégico). O "CRC de Alta Performance" é o treinamento prático que você entrega à recepção — foco total em atender, agendar, apresentar orçamento e fechar. Uma monta a estrutura; o outro treina a linha de frente.',
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
  cta: 'Quero treinar minha equipe',
};
