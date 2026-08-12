import { whatsappUrl } from '@/lib/whatsapp/contato';

/* ============================================================
   CURSO "RECEPÇÃO DE ALTA PERFORMANCE" · conteúdo central da landing
   Edite SÓ aqui copy, módulos, bônus, preço, FAQ e depoimentos.
   Nome formal no material: "Formação de Recepcionistas de Alta
   Performance em Clínicas Odontológicas" (Felice Academy, 2026).

   Curso em vídeo que treina a recepção PRESENCIAL da clínica —
   receber, acolher e conduzir o paciente da porta até a cadeira —
   com o método de atendimento Disney adaptado à odontologia.

   Posicionamento: CURSO B2B — quem compra é o DONO da clínica para
   TREINAR a equipe de recepção. NÃO confundir com:
   - CRC de Alta Performance (/produtos/vendas-secretaria): o par
     COMERCIAL, que cuida do telefone/WhatsApp e do fechamento do
     orçamento. Este aqui cuida do PRESENCIAL e da experiência.
   - Consultoria Gestão F4 (/produtos/consultoria): o Dr. Sócrates
     monta o sistema dos 4 pilares COM o dono, em 4 semanas de
     auditoria (nível estratégico). NÃO é curso — a landing que
     anunciava um "Curso Gestão F4" foi removida em 11/08/2026 e a
     rota redireciona para a consultoria.
   As duas diferenças estão explicadas no FAQ para não canibalizar.

   A grade abaixo é a seção "1. Conteúdo Programático" do plano de
   aula oficial (4 módulos × 5 aulas). O plano também traz um "Guia
   do Professor" mais longo (com Imagem Visual e Inteligência
   Emocional) — decisão do Leo em 10/08/2026: vale o Conteúdo
   Programático; o Guia entra só como matéria-prima da copy.

   ✅ Checkout e preço já são os reais (Payfast/Greenn, 11/08/2026):
   12x de R$ 61,38 ou R$ 597,00 à vista — o mesmo do CRC, o produto-par.

   ⚠️ TROCAR antes de publicar:
   - DEADLINE_ISO: data real do lote/fechamento.
   - DEPOIMENTOS: URLs de vídeo (embed) e thumbnails reais.
   - BONUS: confirmar o que é realmente entregue (e os valores de
     ancoragem) — a lista foi derivada do material do próprio curso.
   ============================================================ */

/** Link de checkout (pagamento) — Payfast/Greenn, oferta oficial do curso. */
export const CHECKOUT_URL =
  'https://payfast.greenn.com.br/43u7fdg/offer/iEtbZU?ch_id=140311';

/** Âncora interna para os CTAs de "rolar até a oferta". */
export const OFERTA_ANCHOR = '#oferta';

/** WhatsApp de dúvidas (botão flutuante). */
export const WHATSAPP_URL = whatsappUrl(
  'Olá! Tenho interesse no curso "Recepção de Alta Performance" e gostaria de tirar uma dúvida antes de matricular minha equipe.',
);

/** Fechamento do lote — countdown autêntico. ⚠️ Ajustar para a data real. */
export const DEADLINE_ISO = '2026-08-31T23:59:59-03:00';

/* ---------- Hero ---------- */
export const HERO = {
  eyebrow: 'Curso online · Treinamento da recepção presencial',
  titlePre: 'Transforme o balcão da sua clínica no',
  titleGold: 'melhor momento da visita do paciente.',
  lead: 'O paciente decide se confia na sua clínica antes de sentar na cadeira — nos primeiros sete segundos de recepção. O "Recepção de Alta Performance" é o curso pronto que você entrega à sua equipe para aplicar o método de encantamento da Disney na realidade de um consultório odontológico: acolhimento, rotina impecável e paciente que volta e indica.',
  ctaPrimary: 'Quero treinar minha recepção',
  ctaSecondary: 'Ver os módulos',
  trust: [
    '100% online, no ritmo da equipe',
    'Checklists e roteiros prontos',
    'Método Disney aplicado à odontologia',
    'Garantia de 7 dias',
  ],
};

/** Card de prova "glass" no hero (coluna direita). */
export const HERO_CARD = {
  destaque: { num: '4 módulos', label: 'Da chegada do paciente à melhoria contínua da equipe' },
  progresso: { label: 'Material pronto para a equipe aplicar', valor: 100 },
  mini: [
    { v: '4', l: 'Módulos' },
    { v: '20', l: 'Aulas' },
    { v: '7 dias', l: 'Garantia' },
  ],
  pills: { live: 'Acesso imediato', premium: 'Método Disney' },
};

/** Faixa (marquee) de temas — card glass no hero. */
export const HERO_MARQUEE = {
  titulo: 'O que a sua equipe vai dominar',
  itens: [
    'Momentos mágicos',
    'Os 7 segundos da primeira impressão',
    'Linguagem corporal',
    'A cultura do "sim"',
    'Gestão de agenda',
    'Cadastro em 3 minutos',
    'Queda do no-show',
    'Marketing sensorial',
    'Escuta ativa',
    'Explicar orçamento',
    'Famílias e idosos',
    'WhatsApp da clínica',
    'Recuperar o paciente irritado',
    'Indicadores da recepção',
  ],
};

/* ---------- Números / prova ----------
   Apenas fatos da estrutura do curso. ⚠️ Não inserir prova social
   (nº de alunos etc.) sem confirmar o dado real. Os KPIs do material
   (NPS > 85%, no-show < 8%, recall > 70%, espera < 15 min) são METAS
   que o curso ensina a perseguir — não são resultados medidos da
   Felice, então ficam no conteúdo do Módulo 4 e no FAQ, nunca aqui. */
export const STATS: { num: string; label: string }[] = [
  { num: '4 módulos', label: 'Da chegada do paciente à melhoria contínua' },
  { num: '20 aulas', label: 'Curtas, práticas e com atividade em cada uma' },
  { num: '100% online', label: 'A equipe assiste no ritmo dela, quantas vezes precisar' },
  { num: '7 dias', label: 'Garantia incondicional' },
];

/* ---------- Problema / dores ---------- */
export const DORES: { titulo: string; texto: string }[] = [
  {
    titulo: 'A recepção ainda é um balcão',
    texto: 'O paciente é despachado com um "senta ali que já chamam". Ninguém olha nos olhos, ninguém oferece nada — e a experiência começa fria justo em quem chega com medo.',
  },
  {
    titulo: 'A agenda fura e ninguém sabe por quê',
    texto: 'Faltas sem aviso, horários ociosos e remarcação no mesmo dia. Sem confirmação ativa e sem fila de espera, cada buraco na agenda é dinheiro que não volta.',
  },
  {
    titulo: 'Cada uma atende de um jeito',
    texto: 'Sem checklist, sem roteiro e sem padrão de cadastro, a experiência do paciente depende de quem está no balcão naquele dia — e da noite de sono que essa pessoa teve.',
  },
  {
    titulo: 'Paciente irritado desestabiliza o dia',
    texto: 'Atraso do dentista, orçamento acima do esperado, criança chorando. Sem método para acolher a emoção, a recepção trava, se defende — e o paciente não volta.',
  },
];
export const DORES_FECHAMENTO = {
  pre: 'O paciente até esquece o que foi dito na sua clínica. Ele nunca esquece',
  gold: 'como foi tratado na chegada.',
};

/* ---------- Método / os 4 pilares Disney na recepção ----------
   Os quatro pilares vêm literalmente da abertura do Módulo 1 do
   plano de aula: segurança, cortesia, show e eficiência — nessa
   ordem de prioridade, que é como a Disney os aplica. */
export const METODO: { n: string; titulo: string; texto: string }[] = [
  {
    n: '01',
    titulo: 'Segurança',
    texto: 'Antes de encantar, é preciso proteger. Prontuário completo, anamnese assinada, convênio válido e liberação conferida antes de o paciente entrar — a base que sustenta tudo o que vem depois.',
  },
  {
    n: '02',
    titulo: 'Cortesia',
    texto: 'Sorriso, contato visual e o "sim" como padrão. Acolhimento personalizado por perfil — a criança, o idoso, o apressado, o apavorado — para que cada paciente se sinta esperado.',
  },
  {
    n: '03',
    titulo: 'Show',
    texto: 'A recepção é o palco da clínica: aparência, ambiente, aroma, som e os momentos mágicos que ninguém pediu e todo mundo lembra. É o que vira comentário, avaliação e indicação.',
  },
  {
    n: '04',
    titulo: 'Eficiência',
    texto: 'Rotina que não trava o show: cadastro em três minutos, agenda sem buraco, confirmação em dois tempos e status atualizado — a operação invisível que faz o encantamento caber no dia.',
  },
];

/* ---------- Módulos (conteúdo) ----------
   Grade oficial do plano de aula, seção "1. Conteúdo Programático":
   4 módulos × 5 aulas. Os `resumo` foram escritos a partir dos
   "Objetivos Gerais" do Guia do Professor.

   ⚠️ M3 aula 3 (Fidelização) — o Conteúdo Programático promete
   "5 aulas cada" mas lista só 4 aulas no Módulo 3. A aula que falta
   existe no Guia do Professor exatamente nessa posição, então ela
   entra aqui para a promessa de 20 aulas fechar. */
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
    titulo: 'Fundamentos do atendimento Disney na recepção',
    resumo: 'A virada de mentalidade: de atendente para anfitriã. Os princípios do encantamento Disney traduzidos para o balcão de uma clínica odontológica, onde o paciente chega com medo.',
    blocos: [
      {
        aulas: [
          'Princípios Disney: sorriso, contato visual e "momentos mágicos" na chegada',
          'Primeira impressão e acolhimento personalizado no ambiente odontológico',
          'Postura e linguagem corporal: transmitindo confiança e empatia',
          'O "sim" como padrão: soluções criativas para as dúvidas iniciais',
          'Autoavaliação: role-playing para fixar as bases',
        ],
      },
    ],
  },
  {
    n: '02',
    titulo: 'Procedimentos operacionais da recepção',
    resumo: 'A rotina que sustenta o encantamento: tarefas de abertura, expediente e fechamento, agenda sem buraco, cadastro em três minutos e prontuário conferido antes de liberar o paciente.',
    blocos: [
      {
        aulas: [
          'Tarefas da recepcionista e gestão de agenda',
          'Cadastro e atualização de dados com agilidade e precisão (método ABC)',
          'Agendamento de consultas: ferramentas digitais e queda do no-show',
          'Gerenciamento de prontuários e liberações para atendimento',
          'Marketing sensorial: os cinco sentidos a favor da sua clínica',
        ],
      },
    ],
  },
  {
    n: '03',
    titulo: 'Comunicação e relacionamento com pacientes',
    resumo: 'Ouvir além das palavras, traduzir o "dentinês" em benefício e sustentar o relacionamento depois que o paciente vai embora — inclusive no WhatsApp.',
    blocos: [
      {
        aulas: [
          'Escuta ativa e perguntas abertas para entender necessidades (técnica dos 3 Rs)',
          'Explicação clara de procedimentos e orçamentos (sanduíche de valor)',
          'Fidelização: follow-up pós-consulta e programas de indicação',
          'Atendimento a famílias e idosos: cuidados especiais e acessibilidade',
          'Uso de tecnologia: WhatsApp e lembretes para engajamento',
        ],
      },
    ],
  },
  {
    n: '04',
    titulo: 'Excelência e melhoria contínua',
    resumo: 'O que separa a recepção boa da recepção de alta performance: recuperar o paciente insatisfeito, andar junto com a equipe clínica, medir o próprio trabalho e ter um plano de evolução.',
    blocos: [
      {
        aulas: [
          'Identificação de reclamações e criação de "wow moments" (método H.E.A.R.D.)',
          'Trabalho em equipe: integração com dentistas e assistentes',
          'Indicadores de desempenho: taxa de retenção e satisfação',
          'Treinamento prático: simulações reais de cenários',
          'Plano pessoal de desenvolvimento: metas e feedback contínuo',
        ],
      },
    ],
  },
];

/* ---------- Bônus ----------
   Derivados do material que o próprio plano de aula descreve — nada
   inventado. `valor` é a ancoragem de valor percebido (em R$); o
   total é somado automaticamente na seção.

   São SEIS de propósito: `.mz-bonus` (maestria.css:554) é um grid de
   2 colunas, então número par fecha as linhas sem card órfão.

   ⚠️ Validar com o cliente o que é de fato entregue como arquivo. */
export const BONUS: { titulo: string; texto: string; valor: number }[] = [
  { titulo: 'Checklist visual diário da recepção', texto: 'A lista de conferência do balcão, da sala de espera e do ambiente — abertura, entre pacientes e fechamento — para o padrão não depender da memória de ninguém.', valor: 147 },
  { titulo: 'Roteiro de confirmação em dois tempos', texto: 'As mensagens de 48h e de 24h antes da consulta, com reforço de valor, mais o script da fila de espera para preencher o horário que abriu hoje.', valor: 197 },
  { titulo: 'Banco de respostas do "sim criativo"', texto: 'O que dizer quando a agenda está cheia, quando o paciente acha caro e quando a resposta óbvia seria "não" — com alternativa pronta em cada caso.', valor: 147 },
  { titulo: 'Modelos de WhatsApp: follow-up e recall', texto: 'Templates de acompanhamento no dia seguinte ao procedimento e de resgate do paciente sumido há seis meses, prontos para personalizar e enviar.', valor: 97 },
  { titulo: 'Painel dos 4 indicadores da recepção', texto: 'NPS, taxa de no-show, taxa de recall e tempo médio de espera: como calcular cada um, que meta perseguir e qual ação da recepção move o ponteiro.', valor: 197 },
  { titulo: 'Certificado de conclusão', texto: 'Certificado da Felice Academy ao final do curso, que valoriza a profissional e a recepção da sua clínica.', valor: 47 },
];

/* ---------- Plataforma / como funciona ---------- */
export const PLATAFORMA: { n: string; titulo: string; texto: string }[] = [
  { n: '01', titulo: 'Feito para a equipe', texto: 'Você compra uma vez e treina quem está na recepção hoje e quem entrar amanhã — o padrão de atendimento da sua clínica deixa de ir embora junto com quem pede demissão.' },
  { n: '02', titulo: 'No ritmo dela, de qualquer lugar', texto: 'Aulas curtas e diretas, no computador ou no celular, para assistir entre um paciente e outro e rever sempre que a dúvida aparecer na prática.' },
  { n: '03', titulo: 'Da aula direto para o balcão', texto: 'Cada módulo termina em atividade prática e material pronto: a equipe sai da aula com o checklist, o roteiro ou a planilha na mão para usar no mesmo dia.' },
];

/* ---------- Autoridade / mentor ---------- */
export const MENTOR = {
  nome: 'Dr. Sócrates Tavares',
  role: 'Diretor clínico da Felice Odontologia · Professor na Felice Academy',
  quote:
    'A recepção não é a antessala do atendimento — ela é o atendimento começando. É ali que o paciente decide se confia na clínica, muito antes de eu encostar nele. Estruturei a linha de frente da Felice com esse método e é exatamente isso que eu ensino aqui, aula por aula.',
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
    texto: 'Mudou o clima da sala de espera. O paciente chega tenso e senta na cadeira já relaxado — o meu trabalho começa mais fácil.',
  },
  {
    nome: 'Dra. Marina',
    meta: 'Dona de clínica · Aluna Felice Academy',
    texto: 'A confirmação em dois tempos derrubou minhas faltas. Hoje a agenda do dia seguinte chega fechada, e não como uma surpresa.',
  },
  {
    nome: 'Dr. Bruno',
    meta: 'Dono de clínica · Aluno Felice Academy',
    texto: 'Padronizei a recepção inteira com os checklists. Não importa quem está no balcão: o paciente é recebido sempre do mesmo jeito.',
  },
];

/* ---------- Oferta ---------- */
export const OFERTA = {
  ribbon: 'Acesso imediato',
  titulo: 'Recepção de Alta Performance — completo',
  itens: [
    'Módulo 1 · Fundamentos do atendimento Disney na recepção',
    'Módulo 2 · Procedimentos operacionais da recepção',
    'Módulo 3 · Comunicação e relacionamento com pacientes',
    'Módulo 4 · Excelência e melhoria contínua',
    'Bônus: checklists, roteiros de confirmação e modelos de WhatsApp',
    'Bônus: painel dos 4 indicadores da recepção',
    'Certificado de conclusão da Felice Academy',
    'Garantia incondicional de 7 dias',
  ],
  parcela: { vezes: '12x', valor: 'R$ 61,38' },
  aVista: 'R$ 597,00',
  cta: 'Quero treinar minha recepção',
};

/* ---------- FAQ ---------- */
export const FAQ: { q: string; a: string }[] = [
  {
    q: 'Esse curso é para mim ou para a minha recepcionista?',
    a: 'Para os dois. Você, dono(a), compra o acesso e entrega o treinamento a quem está na linha de frente. É o padrão de atendimento da sua clínica na mão de quem recebe o paciente — sem que você precise treinar pessoalmente, aula por aula.',
  },
  {
    q: 'Qual a diferença para o CRC de Alta Performance?',
    a: 'São produtos-par e se completam. O CRC de Alta Performance treina o comercial à distância: WhatsApp, telefone, apresentação de orçamento e fechamento. O Recepção de Alta Performance treina o presencial: receber, acolher, conduzir o paciente da porta até a cadeira e cuidar da experiência dentro da clínica. Quem faz os dois cobre a jornada inteira do paciente.',
  },
  {
    q: 'O que o "método Disney" tem a ver com odontologia?',
    a: 'A Disney é a referência mundial em experiência do cliente, e o curso adapta os princípios dela — os quatro pilares de segurança, cortesia, show e eficiência e a criação de "momentos mágicos" — para o contexto de uma clínica, onde o paciente chega ansioso e muitas vezes com dor. Nada de teoria solta: cada aula termina numa atividade prática de recepção odontológica.',
  },
  {
    q: 'Minha recepcionista é nova na função. Serve?',
    a: 'Serve, e é exatamente para isso. O curso parte do zero — postura, saudação, cadastro, agenda — e vai até indicadores e plano de desenvolvimento. Também funciona para quem já tem anos de balcão e nunca recebeu um método estruturado.',
  },
  {
    q: 'Dá para treinar mais de uma pessoa da equipe?',
    a: 'Sim, é feito para a equipe: você treina quem está na recepção hoje e padroniza quem entrar amanhã, sem que a experiência do paciente dependa de quem está no balcão naquele dia.',
  },
  {
    q: 'Como eu sei se funcionou?',
    a: 'O Módulo 4 ensina a equipe a medir o próprio trabalho com quatro indicadores: NPS pós-consulta, taxa de falta sem aviso, taxa de retorno no recall e tempo médio de espera. O curso apresenta as metas de referência para cada um e a ação da recepção que move cada ponteiro — então você acompanha por número, não por impressão.',
  },
  {
    q: 'Como funciona a garantia e o pagamento?',
    a: 'Você tem 7 dias de garantia incondicional — se não for para a sua clínica, devolvemos 100%, sem burocracia. O pagamento pode ser parcelado no cartão ou à vista, com acesso liberado na hora.',
  },
];

/* ---------- CTA final ---------- */
export const FINAL = {
  eyebrow: 'Comece hoje',
  titlePre: 'A experiência do paciente começa no balcão.',
  titleGold: 'Treine quem recebe para encantar.',
  lead: 'Dê à sua equipe o método que transforma a chegada do paciente no melhor momento da visita. Acesso imediato, no ritmo da equipe, com garantia de 7 dias.',
  cta: 'Quero treinar minha recepção',
};
