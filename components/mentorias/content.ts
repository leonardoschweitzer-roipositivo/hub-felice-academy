/* ============================================================
   HUB DE MENTORIAS · Felice Academy
   Página-pivot: o usuário escolhe entre as mentorias disponíveis.
   Adicione novas mentorias aqui conforme forem lançadas.
   ============================================================ */

export type MentoriaOpcao = {
  /** Badge de formato exibido no topo do card. */
  formato: string;
  titulo: string;
  subtitulo: string;
  /** Destaques exibidos como lista (com check). */
  bullets: string[];
  /** Rota interna da landing da mentoria. */
  href: string;
  cta: string;
  /** Destaca visualmente o card (ex.: novidade). */
  destaque?: boolean;
};

export const MENTORIAS: MentoriaOpcao[] = [
  {
    formato: 'Gestão · Online ao vivo',
    titulo: 'Mentoria de Gestão F4',
    subtitulo:
      'Tire a clínica das suas costas com os 4 pilares: Atendimento, Agendamento, Marketing e Gestão.',
    bullets: [
      'Plataforma de aulas + encontros ao vivo',
      'Treinamento da sua equipe nos 4 pilares',
      'Bônus: acesso ao Felice CRM',
    ],
    href: '/produtos/mentoria-gestao-f4',
    cta: 'Conhecer a mentoria',
  },
  {
    formato: 'Clínica · Presencial + online',
    titulo: 'Mentoria de Zigomático',
    subtitulo:
      'Domine a cirurgia zigomática com prática real: hands-on em laboratório e acompanhamento cirúrgico ao lado do Dr. Sócrates.',
    bullets: [
      'Imersão hands-on presencial em laboratório',
      'Acompanhamento cirúrgico — operando junto',
      'Plataforma, encontros e acompanhamento de casos',
    ],
    href: '/produtos/mentoria-zigomatico',
    cta: 'Conhecer a mentoria',
    destaque: true,
  },
];
