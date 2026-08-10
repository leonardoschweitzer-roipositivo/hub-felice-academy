/* ============================================================
   HUB Institucional · Felice Academy
   Dados dos 6 produtos da vitrine + stats. Tudo configurável aqui.
   ⚠️ Validar com o cliente: estado real de cada card (Disponível /
   Em breve) e os links externos dos produtos ainda sem página.
   ============================================================ */

export type Categoria = 'Curso' | 'Masterclass' | 'Mentoria' | 'Consultoria' | 'Software';
export type Estado = 'disponivel' | 'em-breve';

export type Produto = {
  /** Número do nó na arquitetura (sitemap). Vira o badge dourado. */
  num: string;
  titulo: string;
  descricao: string;
  categoria: Categoria;
  estado: Estado;
  /** Destino do CTA. Use rota interna (/produtos/kitgestaof4, /crm) ou URL externa. */
  href: string;
  /** true quando href é uma rota interna deste app (usa <Link>). */
  interno?: boolean;
  /** Texto do CTA. Default: "Ver mais" (disponível) / "Em breve". */
  cta?: string;
  /** Destaca o card (ex.: Felice CRM, produto-foco). */
  destaque?: boolean;
  /** Imagem à esquerda do card (rota em /public). Sem imagem → fallback visual. */
  imagem?: string;
  /** `object-position` da imagem. O box do card é quase quadrado e a imagem é
   *  `cover`, então uma foto panorâmica perde bastante das laterais — use isto
   *  para manter o assunto no enquadramento. Default: `50% 50%` (centro). */
  imagemPos?: string;
  /** Destaques/detalhes do produto, exibidos como lista no card. */
  detalhes?: string[];
  /** Tira o card das vitrines (home e /produtos) sem apagar o dado.
   *  Para voltar a exibir, basta remover a flag. */
  oculto?: boolean;
};

export const PRODUTOS: Produto[] = [
  {
    num: '01',
    // "Masterclass" saiu do título e virou a categoria — era a informação
    // que o badge dava errado (dizia "Curso").
    titulo: 'Zigomático Descomplicado',
    descricao:
      'Domine os princípios dos implantes zigomáticos em poucas horas e transforme casos impossíveis em faturamento real — sem encaminhar o paciente.',
    categoria: 'Masterclass',
    estado: 'disponivel',
    href: '/produtos/masterclass-zigomatico',
    interno: true,
    cta: 'Assistir',
    imagem: '/images/card-masterclass-zigomatico.jpg',
    detalhes: [
      'Planejamento e protocolos passo a passo',
      'Casos reais comentados pelo Dr. Sócrates',
      'Bônus aceleradores + garantia de 7 dias',
    ],
  },
  {
    num: '02',
    titulo: 'Maestria Zigomática',
    descricao:
      'Formação técnica completa em implantes zigomáticos, do básico ao avançado, com base científica e prática cirúrgica.',
    categoria: 'Curso',
    estado: 'disponivel',
    href: '/produtos/maestria-zigomatica',
    interno: true,
    cta: 'Acessar',
    // ⚠️ Arquivo veio de uma captura de tela: só 483x409. O card pede
    // ~720px de largura em telas 2x, então fica levemente macio no
    // Retina. Trocar pelo original em resolução maior quando houver.
    imagem: '/images/card-maestria-zigomatico.jpg',
    detalhes: [
      'Do planejamento à instalação do implante',
      'Anatomia, técnica e manejo de complicações',
      'Reabilitação da maxila atrófica',
    ],
  },
  {
    num: '03',
    // Plural: são duas trilhas, e o card leva para o hub /produtos/mentorias.
    titulo: 'Mentorias',
    descricao:
      'Acompanhamento direto do Dr. Sócrates para escalar clínica e carreira. Escolha sua trilha: Gestão F4 ou Zigomático (com encontros presenciais).',
    categoria: 'Mentoria',
    estado: 'disponivel',
    imagem: '/images/card-mentoria.jpg',
    href: '/produtos/mentorias',
    interno: true,
    cta: 'Ver as mentorias',
    detalhes: [
      'Duas trilhas: Gestão F4 e Zigomático',
      'Plataforma, encontros ao vivo e suporte',
      'Acompanhamento individual e em grupo',
    ],
  },
  {
    num: '04',
    titulo: 'Gestão F4',
    descricao:
      'O curso em vídeo dos 4 pilares da gestão para dentistas: aprenda, no seu ritmo, a fazer a clínica atender, agendar e vender no automático.',
    categoria: 'Curso',
    estado: 'disponivel',
    imagem: '/images/card-gestao-f4.jpg',
    href: '/produtos/gestao-f4',
    interno: true,
    cta: 'Acessar',
    detalhes: [
      'Atendimento, Agendamento, Marketing e Gestão',
      '4 módulos passo a passo, 100% online',
      'POPs, scripts e calendário inclusos',
    ],
  },
  {
    num: '05',
    // Renomeado de "A Secretária que Vende" em 10/08/2026. A rota segue
    // /produtos/vendas-secretaria de propósito: mudar o slug quebraria os
    // links e anúncios que já apontam para lá.
    titulo: 'CRC de Alta Performance',
    descricao:
      'O treinamento comercial que você entrega à sua CRC: transforme atendimento em agenda cheia e orçamento fechado, do primeiro "oi" ao follow-up.',
    categoria: 'Curso',
    estado: 'disponivel',
    href: '/produtos/vendas-secretaria',
    interno: true,
    cta: 'Acessar',
    // Mesma foto do hero da landing. Puxa o enquadramento para a direita:
    // a atendente fica nesse lado da foto e o centro pegaria só a bancada.
    imagem: '/images/background-secretaria-vende.jpg',
    imagemPos: '78% 50%',
    detalhes: [
      'Do primeiro contato no WhatsApp ao fechamento',
      '5 módulos, 100% online, no ritmo da equipe',
      'Scripts, planilhas e bônus ao vivo inclusos',
    ],
  },
  {
    num: '06',
    // Par do CRC de Alta Performance (05): a CRC cuida do telefone/WhatsApp
    // e do fechamento do orçamento, este cuida do presencial na clínica.
    titulo: 'Recepção de Alta Performance',
    descricao:
      'O treinamento da linha de frente presencial: receber, acolher e conduzir o paciente da porta da clínica até a cadeira, com o método de atendimento Disney.',
    categoria: 'Curso',
    estado: 'disponivel',
    href: '/produtos/recepcao-alta-performance',
    interno: true,
    cta: 'Acessar',
    // Mesma foto do CRC (é uma recepção de clínica), mas com o enquadramento
    // do lado OPOSTO: o card 05 corta em 78% (a atendente) e este em 22% (a
    // área de espera). Os dois ficam lado a lado na vitrine — sem cortes
    // diferentes, pareceriam o mesmo card.
    imagem: '/images/background-secretaria-vende.jpg',
    imagemPos: '22% 50%',
    detalhes: [
      'Método Disney aplicado à recepção odontológica',
      '4 módulos, 20 aulas, 100% online',
      'Treinamento pronto para entregar à equipe',
    ],
  },
  {
    // Era o nó 06; virou 07 quando a Recepção de Alta Performance entrou.
    num: '07',
    titulo: 'Consultoria',
    descricao:
      'Diagnóstico e plano de ação sob medida para a sua clínica, conduzidos pelo Dr. Sócrates: 4 semanas auditando gestão, atendimento, comercial e marketing.',
    categoria: 'Consultoria',
    estado: 'disponivel',
    href: '/produtos/consultoria',
    interno: true,
    cta: 'Ver a consultoria',
    // ⚠️ Falta /images/card-consultoria.jpg. Sem o campo `imagem`, o card
    // cai no fundo padrão — pôr o arquivo e a linha quando a arte chegar.
    detalhes: [
      '4 semanas de auditoria nos 4 setups da clínica',
      '16 entregáveis prontos para a equipe aplicar',
      'Planejamento estratégico de 12 meses',
    ],
  },
  {
    // Era o nó 06; foi para 08 quando Recepção e Consultoria entraram.
    num: '08',
    titulo: 'Felice CRM',
    descricao:
      'O software que organiza pacientes, agenda, vendas e faturamento — a clínica inteira em um só lugar.',
    categoria: 'Software',
    estado: 'disponivel',
    href: '/crm',
    interno: true,
    cta: 'Conhecer',
    destaque: true,
    oculto: true, // fora das vitrines por ora — remover a flag para voltar
    detalhes: [
      'Agenda, pacientes e funil de vendas',
      'Faturamento e indicadores da clínica',
      'Automação de follow-up e confirmações',
    ],
  },
];

/** Lista que as vitrines (home e /produtos) devem renderizar. Usar esta e
 *  não `PRODUTOS` direto, senão os cards marcados com `oculto` reaparecem. */
export const PRODUTOS_VISIVEIS: Produto[] = PRODUTOS.filter((p) => !p.oculto);

/* ============================================================
   Materiais / Conteúdos gratuitos (scripts, planilhas, PDFs…)
   ⚠️ Validar com o cliente: títulos, formatos e os links de
   download/cadastro de cada material.
   ============================================================ */

export type Formato =
  | 'Script'
  | 'Planilha'
  | 'PDF'
  | 'Checklist'
  | 'Template'
  | 'Gestão'
  | 'Atendimento'
  | 'Comercial'
  | 'Marketing';

export type Material = {
  titulo: string;
  descricao: string;
  formato: Formato;
  /** Destino do download/cadastro. Use '#' enquanto não houver link. */
  href: string;
  /** true quando href é uma rota interna deste app (usa <Link>). */
  interno?: boolean;
  /** Texto do CTA. Default: "Baixar". */
  cta?: string;
  /** Disponível para download agora, ou ainda em produção. */
  disponivel?: boolean;
};

// Os 4 materiais do Kit Gestão F4. Todos levam para a página do Kit.
export const MATERIAIS: Material[] = [
  {
    titulo: 'POP — Procedimento Operacional Padrão',
    descricao:
      'O mapa estratégico e operacional da clínica: o Ecossistema de Excelência Clínica e os POPs de cada cargo.',
    formato: 'Gestão',
    href: '/produtos/kitgestaof4',
    interno: true,
    cta: 'Acessar',
    disponivel: true,
  },
  {
    titulo: 'Manual de Atendimento — Recepção',
    descricao:
      'A Arte de Receber: atendimento ético e humanizado na recepção, com scripts, FAQs e protocolos.',
    formato: 'Atendimento',
    href: '/produtos/kitgestaof4',
    interno: true,
    cta: 'Acessar',
    disponivel: true,
  },
  {
    titulo: 'Manual da CRC — Agendamento',
    descricao:
      'A Voz da Clínica: o guião tático para a chamada perfeita, gestão de objeções e a regra dos 5 minutos.',
    formato: 'Comercial',
    href: '/produtos/kitgestaof4',
    interno: true,
    cta: 'Acessar',
    disponivel: true,
  },
  {
    titulo: 'Guia Estratégico de Marketing',
    descricao:
      'Vídeos para Instagram em clínicas: pilares 40/40/20, calendário editorial, roteiros e o funil 5Ns.',
    formato: 'Marketing',
    href: '/produtos/kitgestaof4',
    interno: true,
    cta: 'Acessar',
    disponivel: true,
  },
];

export type Stat = { num: string; label: string };

// ⚠️ Números a confirmar com o cliente.
export const STATS: Stat[] = [
  { num: '+1.200', label: 'Dentistas impactados' },
  { num: '7', label: 'Produtos no ecossistema' },
  { num: '+10 anos', label: 'De prática clínica real' },
  { num: '100%', label: 'Feito por quem é da área' },
];
