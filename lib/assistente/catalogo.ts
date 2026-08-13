/* ============================================================
   CATÁLOGO DO ASSISTENTE — as 8 ofertas vendáveis + o CRM.

   Por que não reusar `PRODUTOS_VISIVEIS` de components/hub/content.ts:
   aquele array descreve a VITRINE, não o catálogo comercial. Faltam nele
   o Kit Gestão F4 (R$ 97, a oferta de entrada mais barata do site, que só
   aparece como `MATERIAIS`) e sobra o card "Mentorias", que é um hub com
   duas trilhas dentro, não um produto que se recomenda.

   Os campos `dores`, `inclui`, `lead` e `faq` são DERIVADOS dos content.ts
   de cada landing — a copy tem uma fonte só, e mexer na landing move o
   assistente junto. Os campos `paraQuem`, `naoEhFit` e `gatilhos` são copy
   nova, escrita para o assistente: descrevem a quem o produto serve, a quem
   NÃO serve, e os termos que o visitante usa quando tem essa dor.
   ============================================================ */

import { FUNNELS } from '@/lib/tracking/funnels';

import { FAQ as kitFaq } from '@/components/felice/faq';
import { PRECO as kitPreco } from '@/components/felice/config';
import * as masterclass from '@/components/masterclass-zigomatico/content';
import * as maestria from '@/components/maestria/content';
import * as crc from '@/components/vendas-secretaria/content';
import * as recepcao from '@/components/recepcao-alta-performance/content';
import * as consultoria from '@/components/consultoria/content';
import * as mentoriaGestao from '@/components/mentoria-gestao/content';
import * as mentoriaZigo from '@/components/mentoria-zigomatico/content';

export type Entrada = 'checkout' | 'candidatura';

export type OfertaKB = {
  /** Igual à chave em lib/tracking/funnels.ts. É o que a IA emite em
   *  [[produto:slug]] e o que vai no evento de Lead. */
  slug: string;
  nome: string;
  categoria: 'Curso' | 'Masterclass' | 'Mentoria' | 'Consultoria' | 'Software';
  /** Com barra final: o next.config tem `trailingSlash: true`. */
  href: string;
  /** Preço público, com as palavras exatas que a IA pode repetir.
   *  `null` = não existe preço público (venda por candidatura). */
  preco: string | null;
  entrada: Entrada;
  /** Rota do questionário de candidatura, nos produtos de alto ticket. */
  aplicacaoHref?: string;
  /** A IA pode oferecer este produto por conta própria? O Felice CRM está
   *  `oculto` na vitrine e segue a mesma regra aqui. */
  ofertavel: boolean;

  /* --- curados à mão para o assistente --- */
  paraQuem: string;
  naoEhFit: string;
  gatilhos: string[];

  /* --- derivados do content.ts da landing --- */
  lead: string;
  dores: string[];
  inclui: string[];
  faq: { q: string; a: string }[];
};

/** Preço no formato que a IA repete: "R$ 597,00 à vista ou 12x de R$ 61,38". */
function precoDe(o: { aVista: string; parcela: { vezes: string; valor: string } }): string {
  return `${o.aVista} à vista ou ${o.parcela.vezes} de ${o.parcela.valor}`;
}

export const CATALOGO: OfertaKB[] = [
  {
    slug: 'kitgestaof4',
    nome: 'Kit Sistema de Gestão F4',
    categoria: 'Curso',
    href: '/produtos/kitgestaof4/',
    preco: precoDe(kitPreco),
    entrada: 'checkout',
    ofertavel: true,
    paraQuem:
      'dentista ou dono(a) de clínica que ainda não tem processo escrito e quer começar hoje, com investimento baixo: POP, scripts de atendimento e de agendamento e calendário de marketing prontos para entregar à equipe',
    naoEhFit:
      'quem já tem processo rodando e precisa de acompanhamento de perto — esse é o terreno da Consultoria ou da Mentoria de Gestão',
    gatilhos: [
      'pop',
      'procedimento operacional padrão',
      'processo',
      'padronizar',
      'script',
      'roteiro',
      'manual',
      'organizar a clínica',
      'documento pronto',
      'barato',
      'começar',
      'calendário de marketing',
    ],
    lead: 'Os documentos, scripts e rotinas que organizam a clínica sem depender de você — prontos para a equipe aplicar, com acesso imediato e vitalício.',
    dores: [
      'cada um da equipe atende de um jeito',
      'nada está escrito: o processo mora na cabeça do dono',
      'a clínica trava quando você não está',
      'o marketing sai quando alguém lembra',
    ],
    inclui: [
      'Procedimento Operacional Padrão (POP)',
      'Scripts de Atendimento — recepção',
      'Scripts de Agendamento — CRC',
      'Calendário Editorial de Marketing',
      'Área do Kit com busca, IA e 17 ferramentas',
      'Garantia incondicional de 7 dias',
    ],
    faq: kitFaq,
  },
  {
    slug: 'masterclass-zigomatico',
    nome: 'Zigomático Descomplicado',
    categoria: 'Masterclass',
    href: '/produtos/masterclass-zigomatico/',
    preco: precoDe(masterclass.PLANOS[0]),
    entrada: 'checkout',
    ofertavel: true,
    paraQuem:
      'cirurgião-dentista ou implantodontista que quer entender os princípios do implante zigomático em poucas horas, com investimento baixo, antes de decidir se vai fundo na técnica',
    naoEhFit:
      'quem já domina a teoria e quer prática guiada — aí o caminho é a Maestria ou a Mentoria de Zigomático',
    gatilhos: [
      'zigomático',
      'zigomatico',
      'maxila atrófica',
      'atrofia maxilar',
      'masterclass',
      'aula',
      'introdução',
      'entender',
      'começar',
      'barato',
      'primeiro contato',
    ],
    lead: masterclass.HERO.lead,
    dores: masterclass.DORES.map((d) => d.titulo),
    inclui: masterclass.ITENS_ACESSO,
    faq: masterclass.FAQ,
  },
  {
    slug: 'maestria-zigomatica',
    nome: 'Maestria Zigomática',
    categoria: 'Curso',
    href: '/produtos/maestria-zigomatica/',
    preco: precoDe(maestria.OFERTA),
    entrada: 'checkout',
    ofertavel: true,
    paraQuem:
      'cirurgião que quer a formação técnica completa em zigomático — do diagnóstico e planejamento à cirurgia guiada e ao hands-on em modelo — para parar de encaminhar o caso de maxila atrófica severa',
    naoEhFit:
      'quem precisa operar acompanhado de perto, em paciente real: isso é a Mentoria de Zigomático, que tem presencial e acompanhamento cirúrgico',
    gatilhos: [
      'zigomático',
      'zigomatico',
      'maestria',
      'curso completo',
      'cirurgia guiada',
      'hands-on',
      'planejamento',
      'maxila atrófica',
      'protocolo',
      'formação',
      'dominar',
    ],
    lead: maestria.HERO.lead,
    dores: maestria.DORES.map((d) => d.titulo),
    inclui: maestria.OFERTA.itens,
    faq: maestria.FAQ,
  },
  {
    slug: 'vendas-secretaria',
    nome: 'CRC de Alta Performance',
    categoria: 'Curso',
    href: '/produtos/vendas-secretaria/',
    preco: precoDe(crc.OFERTA),
    entrada: 'checkout',
    ofertavel: true,
    paraQuem:
      'dono(a) de clínica cuja equipe de telefone e WhatsApp perde orçamento: o curso treina quem fala com o paciente a agendar, apresentar valor, contornar objeção e fazer follow-up até o fechamento',
    naoEhFit:
      'quem quer melhorar o atendimento PRESENCIAL, da porta até a cadeira — esse é o Recepção de Alta Performance, o produto-par deste',
    gatilhos: [
      'crc',
      'secretária',
      'secretaria',
      'telefone',
      'whatsapp',
      'orçamento',
      'orcamento',
      'follow-up',
      'follow up',
      'objeção',
      'vou pensar',
      'quanto custa',
      'agendamento',
      'converter',
      'conversão',
      'vender',
      'comercial',
      'fechamento',
    ],
    lead: crc.HERO.lead,
    dores: crc.DORES.map((d) => d.titulo),
    inclui: crc.OFERTA.itens,
    faq: crc.FAQ,
  },
  {
    slug: 'recepcao-alta-performance',
    nome: 'Recepção de Alta Performance',
    categoria: 'Curso',
    href: '/produtos/recepcao-alta-performance/',
    preco: precoDe(recepcao.OFERTA),
    entrada: 'checkout',
    ofertavel: true,
    paraQuem:
      'dono(a) de clínica que quer o presencial impecável: acolhimento nos primeiros segundos, rotina de balcão padronizada e paciente que volta e indica, com os 4 pilares do método Disney aplicados à odontologia',
    naoEhFit:
      'quem perde o paciente ANTES dele chegar, no telefone e no WhatsApp — esse é o CRC de Alta Performance, o produto-par deste',
    gatilhos: [
      'recepção',
      'recepcao',
      'balcão',
      'balcao',
      'sala de espera',
      'acolhimento',
      'presencial',
      'disney',
      'encantamento',
      'experiência do paciente',
      'no-show',
      'falta',
      'espera',
      'fidelização',
      'indicação',
    ],
    lead: recepcao.HERO.lead,
    dores: recepcao.DORES.map((d) => d.titulo),
    inclui: recepcao.OFERTA.itens,
    faq: recepcao.FAQ,
  },
  {
    slug: 'consultoria',
    nome: 'Consultoria Gestão F4',
    categoria: 'Consultoria',
    href: '/produtos/consultoria/',
    preco: null, // sem preço público — venda por candidatura
    entrada: 'candidatura',
    aplicacaoHref: consultoria.APLICACAO_URL + '/',
    ofertavel: true,
    paraQuem:
      'dono(a) de clínica que quer alguém auditando a operação de perto por 4 semanas — gestão, atendimento, comercial e marketing — e sai com 16 entregáveis prontos e um planejamento de 12 meses',
    naoEhFit:
      'quem quer material para aplicar sozinho (Kit Gestão F4) ou acompanhamento contínuo de longo prazo com a equipe treinada (Mentoria de Gestão F4)',
    gatilhos: [
      'consultoria',
      'auditoria',
      'diagnóstico',
      'diagnostico',
      'gestão',
      'gestao',
      'f4',
      '4 semanas',
      'plano de ação',
      'planejamento',
      '12 meses',
      'faturamento',
      'ticket médio',
      'margem',
      'crescer',
      'previsibilidade',
    ],
    lead: consultoria.HERO.lead,
    dores: consultoria.DORES.map((d) => d.titulo),
    inclui: consultoria.OFERTA.itens,
    faq: consultoria.FAQ,
  },
  {
    slug: 'mentoria-gestao-f4',
    nome: 'Mentoria de Gestão F4',
    categoria: 'Mentoria',
    href: '/produtos/mentoria-gestao-f4/',
    preco: null,
    entrada: 'candidatura',
    aplicacaoHref: mentoriaGestao.APPLY_URL + '/',
    ofertavel: true,
    paraQuem:
      'dono(a) de clínica que quer sair de dentro da operação com acompanhamento contínuo do Dr. Sócrates, plataforma de aulas, encontros ao vivo e a equipe inteira treinada nos 4 pilares',
    naoEhFit:
      'quem precisa de um diagnóstico pontual e rápido (Consultoria, 4 semanas) ou de material pronto para aplicar sozinho (Kit Gestão F4)',
    gatilhos: [
      'mentoria',
      'gestão',
      'gestao',
      'f4',
      'acompanhamento',
      'contínuo',
      'continuo',
      'treinar a equipe',
      'ao vivo',
      'sair da operação',
      'escalar',
      'lucro',
      'processo',
      'pilares',
    ],
    lead: mentoriaGestao.HERO.lead,
    dores: mentoriaGestao.DORES.map((d) => d.titulo),
    inclui: mentoriaGestao.OFERTA.itens,
    faq: mentoriaGestao.FAQ,
  },
  {
    slug: 'mentoria-zigomatico',
    nome: 'Mentoria de Zigomático',
    categoria: 'Mentoria',
    href: '/produtos/mentoria-zigomatico/',
    preco: null,
    entrada: 'candidatura',
    aplicacaoHref: mentoriaZigo.APPLY_URL + '/',
    ofertavel: true,
    paraQuem:
      'cirurgião que quer prática real: hands-on presencial em laboratório e acompanhamento cirúrgico operando ao lado do Dr. Sócrates, além da plataforma e dos encontros ao vivo',
    naoEhFit:
      'quem ainda está entendendo a técnica (Masterclass) ou quer a formação online completa sem presencial (Maestria Zigomática)',
    gatilhos: [
      'mentoria',
      'zigomático',
      'zigomatico',
      'presencial',
      'hands-on',
      'hands on',
      'laboratório',
      'laboratorio',
      'operar junto',
      'acompanhamento cirúrgico',
      'cirurgia',
      'prática',
      'pratica',
      'caso real',
    ],
    lead: mentoriaZigo.HERO.lead,
    dores: mentoriaZigo.DORES.map((d) => d.titulo),
    inclui: mentoriaZigo.OFERTA.itens,
    faq: mentoriaZigo.FAQ,
  },
  {
    /* O CRM está `oculto: true` na vitrine (components/hub/content.ts) mas a
       rota /crm segue no ar e no sitemap. Aqui ele existe para a Sônia SABER
       responder se perguntarem — e é `ofertavel: false` para ela nunca puxar
       o assunto sozinha, espelhando a decisão da vitrine. */
    slug: 'crm',
    nome: 'Felice CRM',
    categoria: 'Software',
    href: '/crm/',
    preco: null,
    entrada: 'candidatura',
    ofertavel: false,
    paraQuem:
      'clínicas que já são acompanhadas pela Felice — hoje o CRM entra como bônus da Mentoria de Gestão F4, não como produto avulso',
    naoEhFit: 'quem procura um software de gestão para comprar sozinho',
    gatilhos: ['crm', 'software', 'sistema', 'prontuário', 'agenda', 'felice crm'],
    lead: 'O CRM da Felice, hoje disponível como bônus para quem entra na Mentoria de Gestão F4.',
    dores: [],
    inclui: [],
    faq: [],
  },
];

/** Índice por slug — usado pelo prompt, pelo retrieve e pela rota de lead. */
export const POR_SLUG: Record<string, OfertaKB> = Object.fromEntries(
  CATALOGO.map((o) => [o.slug, o]),
);

/* ---------- Guard de consistência ----------
   Roda uma vez, no import do módulo (custo zero em runtime) e quebra o
   BUILD, não a página. Existe porque este repo já viveu o problema oposto:
   as duas mentorias passaram semanas fora de lib/tracking/funnels.ts, e o
   Purchase delas ia ao Meta sem valor nenhum. Se um funil novo entrar sem
   par aqui, a Sônia venderia um produto que não sabe descrever. */
for (const slug of Object.keys(FUNNELS)) {
  if (!POR_SLUG[slug]) {
    throw new Error(
      `[assistente] o funil "${slug}" existe em lib/tracking/funnels.ts mas não tem entrada em lib/assistente/catalogo.ts. ` +
        'Adicione a oferta ao catálogo (ou remova o funil) — a Sônia recomenda a partir deste arquivo.',
    );
  }
}
