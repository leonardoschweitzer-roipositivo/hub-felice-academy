/* ============================================================
   CURSO GESTÃO F4 · conteúdo central da landing de vendas
   Edite SÓ aqui copy, módulos, bônus, preço, FAQ e depoimentos.
   Curso em vídeo do Dr. Sócrates Tavares sobre os 4 pilares da gestão
   de clínicas (Atendimento, Agendamento, Marketing e Gestão).

   Posicionamento: CURSO self-service (aulas gravadas, você implementa no
   seu ritmo). NÃO confundir com:
   - Kit Sistema de Gestão F4 (/produtos/kitgestaof4): plataforma de
     ferramentas prontas (R$97).
   - Mentoria de Gestão F4 (/produtos/mentoria-gestao-f4): acompanhamento
     ao vivo do Dr. Sócrates, por aplicação.

   ⚠️ TROCAR antes de publicar:
   - CHECKOUT_URL: link real de checkout (padrão Felice = Payfast/Greenn).
   - OFERTA.parcela / OFERTA.aVista: preço real.
   - DEADLINE_ISO: data real do lote/fechamento.
   - DEPOIMENTOS: URLs de vídeo (embed) e thumbnails reais dos alunos.
   - STATS / contagem de aulas: confirmar (não inventar prova social).
   ============================================================ */

/** Link de checkout (pagamento). PLACEHOLDER — trocar pelo link real. */
export const CHECKOUT_URL = '#oferta';

/** Âncora interna para os CTAs de "rolar até a oferta". */
export const OFERTA_ANCHOR = '#oferta';

/** WhatsApp de dúvidas (botão flutuante). */
export const WHATSAPP_URL =
  'https://wa.me/5588981391199?text=' +
  encodeURIComponent(
    'Olá! Tenho interesse no curso Gestão F4 e gostaria de tirar uma dúvida antes de me inscrever.',
  );

/** Fechamento do lote — countdown autêntico. ⚠️ Ajustar para a data real. */
export const DEADLINE_ISO = '2026-07-15T23:59:59-03:00';

/* ---------- Hero ---------- */
export const HERO = {
  eyebrow: 'Curso online · Método Gestão F4',
  titlePre: 'O curso que ensina, do zero, a fazer sua clínica',
  titleGold: 'atender, agendar e vender no automático.',
  lead: 'Uma formação online e direta ao ponto sobre os 4 pilares da gestão — Atendimento, Agendamento, Marketing e Gestão. Aulas gravadas, passo a passo, para você implementar o método na sua clínica no seu ritmo, sem depender de ninguém.',
  ctaPrimary: 'Quero o curso Gestão F4',
  ctaSecondary: 'Ver os módulos',
  trust: [
    '100% online, no seu ritmo',
    'Os 4 pilares passo a passo',
    'Modelos e templates inclusos',
    'Garantia de 7 dias',
  ],
};

/** Card de prova "glass" no hero (coluna direita). */
export const HERO_CARD = {
  destaque: { num: '4 pilares', label: 'Atendimento · Agendamento · Marketing · Gestão' },
  progresso: { label: 'Conteúdo gravado e liberado', valor: 100 },
  mini: [
    { v: '4', l: 'Módulos' },
    { v: 'Templates', l: 'inclusos' },
    { v: '7 dias', l: 'Garantia' },
  ],
  pills: { live: 'Acesso imediato', premium: 'Curso completo' },
};

/** Faixa (marquee) de temas — card glass no hero. */
export const HERO_MARQUEE = {
  titulo: 'O que você vai implementar',
  itens: [
    'POPs por cargo',
    'Scripts de atendimento',
    'Scripts de agendamento',
    'Calendário de marketing',
    'Indicadores da clínica',
    'Rotina da equipe',
    'Funil de vendas',
    'Padronização',
  ],
};

/* ---------- Números / prova ----------
   Apenas fatos da estrutura do curso. ⚠️ Não inserir prova social
   (nº de alunos etc.) sem confirmar o dado real. */
export const STATS: { num: string; label: string }[] = [
  { num: '4 pilares', label: 'Atendimento, Agendamento, Marketing e Gestão' },
  { num: '4 módulos', label: 'Um para cada pilar, passo a passo' },
  { num: '100% online', label: 'No seu ritmo, no computador ou celular' },
  { num: '7 dias', label: 'Garantia incondicional' },
];

/* ---------- Problema / dores ---------- */
export const DORES: { titulo: string; texto: string }[] = [
  {
    titulo: 'Você é o gargalo da clínica',
    texto: 'Sem processo, tudo passa por você — a clínica não anda sem você presente e o seu dia vira apagar incêndio.',
  },
  {
    titulo: 'A equipe faz cada um do seu jeito',
    texto: 'Sem POPs e scripts, o atendimento muda conforme quem está na recepção — e o paciente sente a falta de padrão.',
  },
  {
    titulo: 'A agenda tem buracos e faltas',
    texto: 'Sem um processo de agendamento e confirmação, cadeira vazia e no-show viram prejuízo todo mês.',
  },
  {
    titulo: 'O marketing é no improviso',
    texto: 'Você posta quando lembra, sem calendário nem estratégia — e a captação de pacientes fica refém da sorte.',
  },
];
export const DORES_FECHAMENTO = {
  pre: 'Enquanto a clínica depende de você para tudo, o crescimento',
  gold: 'fica travado.',
};

/* ---------- Método / os 4 pilares ---------- */
export const METODO: { n: string; titulo: string; texto: string }[] = [
  {
    n: '01',
    titulo: 'Atendimento',
    texto: 'Padronize a recepção e o atendimento com POPs e scripts, para uma experiência impecável em qualquer dia, com qualquer pessoa na equipe.',
  },
  {
    n: '02',
    titulo: 'Agendamento',
    texto: 'Estruture o processo de agendamento, confirmação e remarcação para encher a agenda e derrubar as faltas.',
  },
  {
    n: '03',
    titulo: 'Marketing',
    texto: 'Monte um calendário e uma estratégia de conteúdo que atrai pacientes com previsibilidade — sem depender de inspiração.',
  },
  {
    n: '04',
    titulo: 'Gestão',
    texto: 'Implemente indicadores, rotina e gestão da equipe para tirar a clínica das suas costas e decidir com base em números.',
  },
];

/* ---------- Módulos (conteúdo) ----------
   1 módulo por pilar. ⚠️ Títulos de aula são um rascunho coerente —
   ajuste para a grade real do curso. `img` opcional (placeholder se vazio). */
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
    titulo: 'Atendimento',
    resumo: 'Padronize a experiência do paciente, da recepção à cadeira, com processos que qualquer pessoa da equipe consegue seguir.',
    blocos: [
      {
        aulas: [
          'Como mapear a jornada do paciente na sua clínica',
          'Construindo o POP de recepção e atendimento',
          'Scripts de atendimento humanizado',
          'Padronizando a experiência em toda a equipe',
          'Treinando o time para seguir o padrão',
        ],
      },
    ],
  },
  {
    n: '02',
    titulo: 'Agendamento',
    resumo: 'O processo que enche a agenda e derruba as faltas, da primeira ligação à confirmação.',
    blocos: [
      {
        aulas: [
          'O processo de agendamento que enche a agenda',
          'Scripts de agendamento e remarcação',
          'Confirmação ativa: como derrubar as faltas',
          'Gestão da agenda e encaixes',
          'Recuperando pacientes inativos',
        ],
      },
    ],
  },
  {
    n: '03',
    titulo: 'Marketing',
    resumo: 'Atraia pacientes com previsibilidade através de um calendário e uma estratégia de conteúdo simples de executar.',
    blocos: [
      {
        aulas: [
          'Os fundamentos do marketing para clínicas',
          'Montando seu calendário de conteúdo',
          'Estratégia de captação e nutrição',
          'Transformando seguidores em pacientes',
          'Mensurando o que dá resultado',
        ],
      },
    ],
  },
  {
    n: '04',
    titulo: 'Gestão',
    resumo: 'Saia da operação: indicadores, rotina de gestão e liderança de equipe para a clínica rodar sem você.',
    blocos: [
      {
        aulas: [
          'Os indicadores que toda clínica precisa acompanhar',
          'Rotina de gestão semanal e mensal',
          'Gestão e liderança da equipe',
          'Organização financeira básica da clínica',
          'Saindo da operação: o seu plano de saída',
        ],
      },
    ],
  },
];

/* ---------- Bônus ----------
   `valor` é a ancoragem de valor percebido (em R$). O total é somado
   automaticamente na seção. ⚠️ Ajuste os valores se quiser. */
export const BONUS: { titulo: string; texto: string; valor: number }[] = [
  { titulo: 'Pacote de POPs prontos', texto: 'Modelos editáveis de procedimentos operacionais por cargo para adaptar à sua clínica e implementar hoje.', valor: 197 },
  { titulo: 'Scripts de atendimento e agendamento', texto: 'Roteiros prontos de recepção, atendimento, agendamento e confirmação para a sua equipe seguir.', valor: 147 },
  { titulo: 'Calendário de marketing de 12 meses', texto: 'Um calendário editorial pronto, mês a mês, para nunca mais ficar sem ideia do que postar.', valor: 197 },
  { titulo: 'Planilha de indicadores da clínica', texto: 'Modelo para acompanhar faturamento, agenda, faltas e conversão — e enxergar a clínica por números.', valor: 147 },
  { titulo: 'Grupo de alunos no WhatsApp', texto: 'Acesso a um grupo para tirar dúvidas da implementação e trocar com outros donos de clínica.', valor: 297 },
];

/* ---------- Plataforma / como funciona ---------- */
export const PLATAFORMA: { n: string; titulo: string; texto: string }[] = [
  { n: '01', titulo: 'Não é um vídeo solto', texto: 'Todo o conteúdo organizado na plataforma Felice — 4 módulos e aulas, com ordem de estudo e progresso.' },
  { n: '02', titulo: 'No seu ritmo, de qualquer lugar', texto: 'Acesse pelo computador ou celular, quando e quantas vezes quiser, no seu tempo.' },
  { n: '03', titulo: 'Com modelos prontos para aplicar', texto: 'Cada pilar vem com templates e materiais para você sair da aula direto para a prática.' },
];

/* ---------- Autoridade / mentor ---------- */
export const MENTOR = {
  nome: 'Dr. Sócrates Tavares',
  role: 'Diretor clínico da Felice Odontologia · Professor na Felice Academy',
  quote:
    'Tirar a clínica das suas costas não é sorte nem talento — é método. Esse é o sistema de gestão dos 4 pilares que eu construí na minha própria clínica e ensino aqui, passo a passo.',
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
   ⚠️ Adicionar `video` (URL de embed) e `thumb` (imagem) reais de cada aluno.
   Enquanto não houver, o card mostra um placeholder com o play. */
export type Depoimento = { nome: string; meta: string; texto: string; video?: string; thumb?: string };
export const DEPOIMENTOS: Depoimento[] = [
  {
    nome: 'Dra. Marina',
    meta: 'Aluna · Felice Academy',
    texto: 'Implementei os POPs e os scripts e a clínica finalmente roda sem eu estar em cima de tudo.',
  },
  {
    nome: 'Dr. Rafael',
    meta: 'Aluno · Felice Academy',
    texto: 'As faltas despencaram depois que estruturei o agendamento e a confirmação como o curso ensina.',
  },
  {
    nome: 'Dra. Camila',
    meta: 'Aluna · Felice Academy',
    texto: 'O calendário de marketing me tirou do improviso. Hoje sei o que postar e a agenda sente o resultado.',
  },
];

/* ---------- Oferta ----------
   ⚠️ parcela/aVista são PLACEHOLDER — trocar pelo preço real. */
export const OFERTA = {
  ribbon: 'Acesso imediato',
  titulo: 'Curso Gestão F4 — completo',
  itens: [
    'Módulo 1 · Atendimento',
    'Módulo 2 · Agendamento',
    'Módulo 3 · Marketing',
    'Módulo 4 · Gestão',
    'Bônus: POPs, scripts, calendário e planilha de indicadores',
    'Garantia incondicional de 7 dias',
  ],
  parcela: { vezes: '12x', valor: 'R$ 49,70' },
  aVista: 'R$ 497,00',
  cta: 'Quero o curso Gestão F4',
};

/* ---------- FAQ ---------- */
export const FAQ: { q: string; a: string }[] = [
  {
    q: 'Preciso ter experiência com gestão para fazer o curso?',
    a: 'Não. O curso parte do zero, pilar por pilar, com aulas práticas e modelos prontos — serve tanto para quem está começando quanto para quem quer organizar uma clínica que já roda.',
  },
  {
    q: 'Serve para clínicas pequenas ou em começo?',
    a: 'Sim. O método é o mesmo, você só aplica na escala da sua realidade. Quanto antes estruturar os 4 pilares, mais fácil cresce sem virar refém da operação.',
  },
  {
    q: 'Qual a diferença para a Mentoria de Gestão F4?',
    a: 'O curso é self-service: aulas gravadas que você assiste e aplica no seu ritmo. A Mentoria é um acompanhamento ao vivo do Dr. Sócrates, com encontros, treinamento da equipe e suporte próximo — entrada por aplicação.',
  },
  {
    q: 'Os modelos e templates estão inclusos?',
    a: 'Sim. POPs, scripts, calendário de marketing e planilha de indicadores entram como bônus, prontos para editar e usar na sua clínica.',
  },
  {
    q: 'Como e por quanto tempo eu acesso?',
    a: '100% online, pela plataforma Felice, no computador ou celular. Você assiste no seu ritmo e revê as aulas quantas vezes precisar.',
  },
  {
    q: 'Como funciona a garantia e o pagamento?',
    a: 'Você tem 7 dias de garantia incondicional — se não for para você, devolvemos 100%, sem burocracia. O pagamento pode ser parcelado no cartão ou à vista, com acesso liberado na hora.',
  },
];

/* ---------- CTA final ---------- */
export const FINAL = {
  eyebrow: 'Comece hoje',
  titlePre: 'Pare de carregar a clínica nas costas.',
  titleGold: 'Construa o sistema que roda sem você.',
  lead: 'Entre para o Curso Gestão F4 e implemente, no seu ritmo, os 4 pilares que transformam a sua clínica numa empresa que atende, agenda e vende no automático.',
  cta: 'Quero o curso Gestão F4',
};
