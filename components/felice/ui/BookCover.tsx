/* ============================================================
   Capa de "livro/e-book" em SVG para os 4 produtos do Kit F4.
   Estilo: capa escura com lombada e detalhes dourados, no mesmo
   visual da página. Usado no Hero (pequeno) e na seção de entregas.

   Cada produto tem um `kind` que define número, título e ícone.
   ============================================================ */

export type BookKind = 'pop' | 'atendimento' | 'agendamento' | 'marketing';

type BookData = {
  num: string;
  eyebrow: string;
  title: string[]; // linhas do título na capa
  icon: 'pop' | 'chat' | 'calendar' | 'megaphone';
};

const BOOKS: Record<BookKind, BookData> = {
  pop: {
    num: '01',
    eyebrow: 'OPERAÇÃO',
    title: ['Procedimento', 'Operacional', 'Padrão'],
    icon: 'pop',
  },
  atendimento: {
    num: '02',
    eyebrow: 'ATENDIMENTO',
    title: ['Scripts de', 'Atendimento'],
    icon: 'chat',
  },
  agendamento: {
    num: '03',
    eyebrow: 'AGENDA',
    title: ['Scripts de', 'Agendamento'],
    icon: 'calendar',
  },
  marketing: {
    num: '04',
    eyebrow: 'MARKETING',
    title: ['Calendário', 'Editorial'],
    icon: 'megaphone',
  },
};

function Glyph({ icon, gold }: { icon: BookData['icon']; gold: string }) {
  const stroke = `url(#${gold})`;
  switch (icon) {
    case 'pop':
      return (
        <g fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12l2.4 2.4L17 9" />
          <rect x="3.5" y="3.5" width="19" height="19" rx="3.5" />
        </g>
      );
    case 'chat':
      return (
        <g fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 14a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z" />
        </g>
      );
    case 'calendar':
      return (
        <g fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3.5" y="5" width="18" height="16.5" rx="2.5" />
          <path d="M16 3v4M8 3v4M3.5 10.5h18" />
        </g>
      );
    case 'megaphone':
      return (
        <g fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11l16-5v12L3 14z" />
          <path d="M11 17.5a3 3 0 0 1-5.6-1.4" />
        </g>
      );
  }
}

/** Capa do livro em SVG (mesma arte no Hero e na seção de entregas). */
export function BookCover({ kind, className }: { kind: BookKind; className?: string }) {
  const b = BOOKS[kind];
  const uid = `bc-${kind}`;
  const gold = `${uid}-gold`;

  return (
    <svg
      className={className}
      viewBox="0 0 200 260"
      role="img"
      aria-label={`Material: ${b.title.join(' ')}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* dourado para textos/ícones (id único por instância) */}
        <linearGradient id={gold} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F8DA74" />
          <stop offset="0.5" stopColor="#E8B447" />
          <stop offset="1" stopColor="#B8821E" />
        </linearGradient>
        {/* capa (frente) */}
        <linearGradient id={`${uid}-cover`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1c1810" />
          <stop offset="1" stopColor="#0e0e11" />
        </linearGradient>
        {/* lombada */}
        <linearGradient id={`${uid}-spine`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2a2417" />
          <stop offset="1" stopColor="#15130d" />
        </linearGradient>
        {/* brilho diagonal sutil */}
        <linearGradient id={`${uid}-sheen`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.10" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* sombra projetada */}
      <ellipse cx="108" cy="246" rx="78" ry="9" fill="#000" opacity="0.45" />

      {/* corpo do livro (capa + lombada) */}
      <g>
        {/* lombada esquerda */}
        <path d="M28 18 L40 14 L40 232 L28 238 Z" fill={`url(#${uid}-spine)`} stroke="rgba(232,180,71,0.25)" strokeWidth="1" />
        {/* capa frontal */}
        <rect x="40" y="14" width="132" height="222" rx="6" fill={`url(#${uid}-cover)`} stroke="rgba(232,180,71,0.35)" strokeWidth="1.4" />
        {/* sheen */}
        <rect x="40" y="14" width="132" height="222" rx="6" fill={`url(#${uid}-sheen)`} />
        {/* filete dourado interno */}
        <rect x="49" y="23" width="114" height="204" rx="3" fill="none" stroke="rgba(232,180,71,0.30)" strokeWidth="1" />
      </g>

      {/* topo: número + eyebrow */}
      <text x="62" y="50" fontFamily="Inter, sans-serif" fontSize="10" letterSpacing="2" fill={`url(#${gold})`} fontWeight="700">
        {b.num} · {b.eyebrow}
      </text>
      <line x1="62" y1="58" x2="150" y2="58" stroke="rgba(232,180,71,0.4)" strokeWidth="1" />

      {/* ícone (centralizado no eixo da capa) */}
      <g transform="translate(86, 80) scale(1.7)">
        <Glyph icon={b.icon} gold={gold} />
      </g>

      {/* título (multi-linha, fonte display) */}
      <text
        x="62"
        y="172"
        fontFamily="var(--font-felice-display), 'Poppins', sans-serif"
        fontSize="19"
        fontWeight="700"
        fill="#F4EFE4"
      >
        {b.title.map((line, i) => (
          <tspan key={line} x="62" dy={i === 0 ? 0 : 23}>
            {line}
          </tspan>
        ))}
      </text>

      {/* selo "Felice Academy" no rodapé da capa */}
      <text x="62" y="216" fontFamily="Inter, sans-serif" fontSize="7.5" letterSpacing="2.5" fill="rgba(156,154,160,0.9)" fontWeight="600">
        FELICE ACADEMY
      </text>
    </svg>
  );
}
