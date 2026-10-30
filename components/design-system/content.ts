/* ============================================================
   Conteúdo do /design-system.

   Dados puros, sem JSX. Os valores de cor, tipografia e raio refletem o
   `styles/felice.css` (levantamento de 30/10/2026). Ao mudar um token
   lá, mude aqui. Itens marcados `validar: true` são propostas deste guia
   (ainda não aprovadas pela marca) e aparecem com o selo "A validar".
   ============================================================ */

/* ---------- Índice ---------- */
export const SECOES = [
  { id: 'marca', n: '01', t: 'Marca' },
  { id: 'logo', n: '02', t: 'Logo' },
  { id: 'cor', n: '03', t: 'Cor' },
  { id: 'tipografia', n: '04', t: 'Tipografia' },
  { id: 'forma', n: '05', t: 'Forma e movimento' },
  { id: 'componentes', n: '06', t: 'Componentes web' },
  { id: 'nova-pagina', n: '07', t: 'Página nova' },
  { id: 'voz', n: '08', t: 'Voz e texto' },
  { id: 'provas', n: '09', t: 'Provas e limites' },
  { id: 'instagram', n: '10', t: 'Instagram' },
  { id: 'pendencias', n: '11', t: 'Pendências' },
] as const;

/* ---------- 01 Marca ---------- */
export const PRODUTOS = [
  { nome: 'Kit Sistema de Gestão F4', rota: '/produtos/kitgestaof4', tipo: 'Materiais', preco: 'R$ 97 ou 12x R$ 9,97', frente: 'NEGÓCIO' },
  { nome: 'CRC de Alta Performance', rota: '/produtos/vendas-secretaria', tipo: 'Curso', preco: 'R$ 597 ou 12x R$ 61,38', frente: 'NEGÓCIO' },
  { nome: 'Recepção de Alta Performance', rota: '/produtos/recepcao-alta-performance', tipo: 'Curso', preco: 'R$ 597 ou 12x R$ 61,38', frente: 'NEGÓCIO' },
  { nome: 'Consultoria Gestão F4', rota: '/produtos/consultoria', tipo: 'Consultoria', preco: 'Nunca publicar', frente: 'NEGÓCIO' },
  { nome: 'Mentoria de Gestão F4', rota: '/produtos/mentoria-gestao-f4', tipo: 'Mentoria', preco: 'Nunca publicar', frente: 'NEGÓCIO' },
  { nome: 'Zigomático Descomplicado', rota: '/produtos/masterclass-zigomatico', tipo: 'Masterclass', preco: 'R$ 67 ou 12x R$ 6,89', frente: 'CLÍNICA' },
  { nome: 'Maestria Zigomática', rota: '/produtos/maestria-zigomatica', tipo: 'Curso', preco: 'R$ 1.599 ou 12x R$ 164,40', frente: 'CLÍNICA' },
  { nome: 'Mentoria de Zigomático', rota: '/produtos/mentoria-zigomatico', tipo: 'Mentoria', preco: 'Nunca publicar', frente: 'CLÍNICA' },
] as const;

export const ESCADAS = [
  { frente: 'NEGÓCIO', passos: ['Kit Gestão F4', 'CRC ou Recepção', 'Consultoria ou Mentoria de Gestão'] },
  { frente: 'CLÍNICA', passos: ['Zigomático Descomplicado', 'Maestria Zigomática', 'Mentoria de Zigomático'] },
] as const;

/* ---------- 03 Cor ---------- */
export type Cor = { token: string; nome: string; hex: string; uso: string };

export const CORES_BASE: Cor[] = [
  { token: '--ink', nome: 'Ink', hex: '#0b0b0d', uso: 'Fundo principal de toda tela e de toda arte.' },
  { token: '--ink-2', nome: 'Ink 2', hex: '#101013', uso: 'Fundo alternado entre seções.' },
  { token: '--card', nome: 'Card', hex: '#141417', uso: 'Superfície de cartão.' },
  { token: '--card-2', nome: 'Card 2', hex: '#191920', uso: 'Cartão em destaque, início do gradiente.' },
];

export const CORES_OURO: Cor[] = [
  { token: '--gold', nome: 'Ouro', hex: '#e8b447', uso: 'Cor da marca: destaques, rótulos, bordas, ícones.' },
  { token: '--gold-bright', nome: 'Ouro claro', hex: '#f5cd47', uso: 'Hover e realce sobre fundo escuro.' },
  { token: '--gold-deep', nome: 'Ouro fundo', hex: '#b8821e', uso: 'Fim do gradiente. Não use como cor de texto.' },
];

export const CORES_TEXTO: Cor[] = [
  { token: '--cream', nome: 'Creme', hex: '#f4efe4', uso: 'Títulos e texto de destaque.' },
  { token: '--text', nome: 'Texto', hex: '#edeae2', uso: 'Texto corrido.' },
  { token: '--muted', nome: 'Apagado', hex: '#9c9aa0', uso: 'Texto secundário e legendas.' },
  { token: '--muted-2', nome: 'Apagado 2', hex: '#76747b', uso: 'Metadados. Só texto grande ou decorativo.' },
];

export const GRADIENTE_OURO = 'linear-gradient(135deg,#f8da74 0%,#e8b447 45%,#b8821e 100%)';

export const CORES_SEM_TOKEN: { hex: string; nome: string; uso: string }[] = [
  { hex: '#231701', nome: 'Texto sobre ouro', uso: 'Única cor de texto sobre fundo dourado (botão, faixa, selo).' },
  { hex: '#57c97f', nome: 'Sucesso', uso: 'Só em interface (confirmações). Nunca em arte de Instagram.' },
  { hex: '#e0584f', nome: 'Erro', uso: 'Só em interface (validação).' },
  { hex: '#f0b45a', nome: 'Alerta', uso: 'Só em interface (avisos).' },
  { hex: '#25d366', nome: 'WhatsApp', uso: 'Só no botão flutuante do WhatsApp.' },
];

export const CORES_NAO_USAR = [
  '#1a1205', '#2a1a00', '#2a1c00', '#1a1206', '#14110a', '#1a1200', '#1a1102',
];

export const PROPORCAO = [
  { cor: '#0b0b0d', pct: 70, t: 'Preto', borda: true },
  { cor: '#f4efe4', pct: 20, t: 'Creme e branco', borda: false },
  { cor: '#e8b447', pct: 10, t: 'Ouro', borda: false },
] as const;

/* Pares de contraste mostrados na seção Cor. A razão é calculada em
   `contraste()` abaixo, nunca digitada à mão. */
export const PARES_CONTRASTE: { fg: string; bg: string; t: string }[] = [
  { fg: '#f4efe4', bg: '#0b0b0d', t: 'Creme sobre Ink' },
  { fg: '#edeae2', bg: '#0b0b0d', t: 'Texto sobre Ink' },
  { fg: '#9c9aa0', bg: '#0b0b0d', t: 'Apagado sobre Ink' },
  { fg: '#76747b', bg: '#0b0b0d', t: 'Apagado 2 sobre Ink' },
  { fg: '#9c9aa0', bg: '#141417', t: 'Apagado sobre Card' },
  { fg: '#e8b447', bg: '#0b0b0d', t: 'Ouro sobre Ink' },
  { fg: '#b8821e', bg: '#0b0b0d', t: 'Ouro fundo sobre Ink' },
  { fg: '#231701', bg: '#e8b447', t: 'Texto sobre Ouro' },
  { fg: '#231701', bg: '#f5cd47', t: 'Texto sobre Ouro claro' },
];

function lum(hex: string): number {
  const n = parseInt(hex.slice(1), 16);
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}

/** Razão de contraste WCAG entre duas cores `#rrggbb`. */
export function contraste(fg: string, bg: string): number {
  const a = lum(fg);
  const b = lum(bg);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

/* ---------- 04 Tipografia ---------- */
export const ESCALA_TIPO = [
  { papel: 'H1', amostra: 'Pare de encaminhar o caso da sua vida.', cls: 'ds-t-h1', css: 'clamp(2.1rem,5.2vw,4rem)', peso: 700, lh: '1.03', ls: '-.02em' },
  { papel: 'H1 hero', amostra: 'Sua clínica fora do improviso.', cls: 'ds-t-h1hero', css: 'clamp(1.8rem,4.4vw,3.3rem)', peso: 700, lh: '1.03', ls: '-.02em' },
  { papel: 'H2', amostra: 'O que você vai aprender', cls: 'ds-t-h2', css: 'clamp(1.8rem,3.8vw,2.9rem)', peso: 700, lh: '1.08', ls: '-.015em' },
  { papel: 'H3', amostra: 'Do diagnóstico ao hands-on', cls: 'ds-t-h3', css: 'clamp(1.25rem,2.2vw,1.7rem)', peso: 700, lh: '1.15', ls: '—' },
  { papel: 'Lead', amostra: 'O ecossistema para sua clínica sair do improviso e escalar de verdade.', cls: 'ds-t-lead', css: 'clamp(1.02rem,1.5vw,1.2rem)', peso: 300, lh: '1.6', ls: '—' },
  { papel: 'Texto', amostra: 'Texto corrido em Lato 300, 16px, para parágrafos e descrições.', cls: 'ds-t-body', css: '16px', peso: 300, lh: '1.6', ls: '—' },
] as const;

export const TEXTO_PEQUENO = [
  { rem: '.92rem', uso: 'Descrição de card' },
  { rem: '.82rem', uso: 'Rótulo, faixa' },
  { rem: '.78rem', uso: 'Metadado' },
  { rem: '.72rem', uso: 'Eyebrow, tag' },
] as const;

export const NIVEIS_ESPACAMENTO = [
  { ls: '.22em', uso: 'Eyebrow', ex: 'Comece agora' },
  { ls: '.15em', uso: 'Tag e faixa', ex: 'Oferta especial' },
  { ls: '.08em', uso: 'Pill e selo', ex: 'Novo' },
] as const;

/* ---------- 05 Forma ---------- */
export const RAIOS = [
  { px: '5px', t: 'Pequeno', uso: 'Ícone, miniatura, tag' },
  { px: '10px', t: '--r', uso: 'Cartão, campo, FAQ' },
  { px: '13px', t: '--r-lg', uso: 'Cartão grande, oferta' },
  { px: '999px', t: 'Pill', uso: 'Botão, badge, selo' },
] as const;

export const ESPACOS = [8, 12, 16, 24, 32, 48] as const;

export const SOMBRAS = [
  { t: '--shadow', css: '0 30px 80px -30px rgba(0,0,0,.8)', uso: 'Cartão elevado' },
  { t: '--glow', css: '0 0 0 1px rgba(232,180,71,.25), 0 18px 50px -18px rgba(232,180,71,.4)', uso: 'Oferta e destaque' },
  { t: 'CTA', css: '0 14px 34px -12px rgba(232,180,71,.65)', uso: 'Botão primário (sobe para .8 no hover)' },
] as const;

export const BREAKPOINTS = [
  { px: 980, uso: 'Tablet: grades de 3 e 4 colunas caem para 2.' },
  { px: 760, uso: 'Celular grande: grades de 2 colunas viram 1; menu vira botão.' },
  { px: 560, uso: 'Celular: ajustes finos de padding e tipo.' },
] as const;

export const MOVIMENTO = [
  { t: 'Transição', v: '.18 a .35s, ease' },
  { t: 'Reveal de seção', v: '.7s, sobe 26px' },
  { t: 'Elevação no hover', v: 'sobe de 2 a 6px' },
  { t: 'Brilho do CTA', v: '7s, uma passada e pausa longa' },
  { t: 'Acessibilidade', v: 'sempre respeitar prefers-reduced-motion' },
] as const;

/* ---------- 06 Componentes ---------- */
export const COMPONENTES_UI = [
  { nome: 'FeliceLogo', arq: 'components/felice/ui/FeliceLogo.tsx', quando: 'Todo header, footer e sidebar. Só sobre fundo escuro.' },
  { nome: 'RevealOnScroll', arq: 'components/felice/ui/RevealOnScroll.tsx', quando: 'Obrigatório para as classes .reveal aparecerem. Sem ele, ficam invisíveis.' },
  { nome: 'UrgencyBar', arq: 'components/felice/ui/UrgencyBar.tsx', quando: 'Barra de urgência. Atenção: o contador reinicia a cada visita, não representa prazo real.' },
  { nome: 'ScarcityBar', arq: 'components/felice/ui/ScarcityBar.tsx', quando: 'Escassez com prazo real. Some sozinha quando o prazo vence.' },
  { nome: 'WhatsappFloat', arq: 'components/felice/ui/WhatsappFloat.tsx', quando: 'Botão flutuante de contato.' },
  { nome: 'BookCover', arq: 'components/felice/ui/BookCover.tsx', quando: 'Capa de livro/material com sombra.' },
  { nome: 'Footer', arq: 'components/felice/sections/Footer.tsx', quando: 'Rodapé padrão com aviso legal.' },
] as const;

export const ATENCOES_COMPONENTES = [
  '.reveal fica em opacity 0 sem <RevealOnScroll/>. Os exemplos desta página não usam essa classe.',
  'Header, barra de urgência, WhatsApp e toasts são position:fixed e fogem de qualquer moldura.',
  'Classes hub-* só funcionam dentro de .felice-hub; mz-* dentro de .felice-maestria; .btn-sm, .chip e .form-input dentro de .plataforma.',
  'Os textos dos exemplos são neutros. Depoimentos.tsx não é fonte: o próprio arquivo o marca como fictício.',
] as const;

/* ---------- 07 Página nova ---------- */
export const ANATOMIA_LANDING = [
  'Hero', 'Números', 'Problema', 'Solução', 'Autoridade', 'Oferta', 'Garantia', 'Depoimentos', 'FAQ', 'Chamada final',
] as const;

export const PILHA_CSS = [
  { tipo: 'Landing de Kit ou página legal', css: 'felice' },
  { tipo: 'Home e vitrine', css: 'felice, hub' },
  { tipo: 'Landing de curso', css: 'felice, maestria, depois o CSS do curso' },
  { tipo: 'Obrigado', css: 'felice, obrigado' },
  { tipo: 'Questionário', css: 'felice, obrigado, consultoria' },
  { tipo: 'Documento interno', css: 'felice, depois o CSS próprio (arquitetura, projecao, design-system)' },
] as const;

export const CHECKLIST_ROTA = [
  'page.tsx fino, com <div className={fontVars}> importado de app/fonts.ts',
  'Wrapper com a classe felice + classe de escopo própria e prefixo nas classes novas',
  'metadata com título e descrição; interna leva robots noindex',
  'Pública: entra em app/sitemap.ts. Interna: não entra',
  'Interna: adicionar o prefixo em BLOQUEADAS (lib/assistente/paginas.ts)',
  'Registrar a rota no inventário de /arquitetura-de-paginas e refazer a contagem',
  'Nenhuma cor nova, nenhum breakpoint novo, nenhum raio novo',
  'Eventos de tracking conforme lib/tracking',
] as const;

/* ---------- 08 Voz ---------- */
export const FORMULAS_TITULO = [
  { nome: 'Parar e fazer', ex: 'Pare de encaminhar o caso da sua vida. Aprenda a operá-lo.', arq: 'maestria' },
  { nome: 'Custo de não agir', ex: 'Enquanto a recepção não sabe vender, o seu marketing traz paciente que escorre pelo ralo.', arq: 'vendas-secretaria' },
  { nome: 'Contraste de tempo', ex: 'O que você vai aprender em horas, outros levam anos para compreender.', arq: 'masterclass-zigomatico' },
  { nome: 'Transformação', ex: 'Transforme o balcão da sua clínica no melhor momento da visita do paciente.', arq: 'recepcao-alta-performance' },
  { nome: 'Contra a alternativa', ex: 'Saia do vídeo solto e domine o zigomático com prática real.', arq: 'mentoria-zigomatico' },
  { nome: 'Dupla negação', ex: 'Não encaminhe mais pacientes. Não perca mais faturamento.', arq: 'masterclass-zigomatico' },
] as const;

export const CTAS = [
  { ticket: 'Entrada', ex: ['Liberar Acesso por R$ 97', 'Assistir a masterclass agora'] },
  { ticket: 'Curso', ex: ['Quero dominar os zigomáticos', 'Quero treinar minha equipe', 'Garantir minha vaga'] },
  { ticket: 'Alto ticket', ex: ['Quero me candidatar'] },
  { ticket: 'Secundário', ex: ['Ver os módulos', 'Falar com a equipe'] },
] as const;

export const VOCABULARIO = [
  'método', 'sair do improviso', 'previsibilidade', 'referência', 'parar de encaminhar',
  'agenda cheia', 'orçamento fechado', 'do diagnóstico ao hands-on', 'ao lado do Dr. Sócrates', 'garantia de 7 dias',
] as const;

export const EVITAR_TEXTO = [
  'Promessa de resultado ("bater recordes de vendas", "faturamento real")',
  '"No automático"',
  'Exclamações em série e emoji em texto institucional',
  '"Como IA, eu...", "Ótima pergunta!", "Entendo perfeitamente"',
  'Gíria de vendedor ("imperdível", "corre que acaba")',
] as const;

/* ---------- 09 Provas ---------- */
export const NUMERO_LIBERADO = {
  fonte: 'Clínica Felice, janeiro de 2026',
  linhas: [
    { n: '203', l: 'orçamentos apresentados' },
    { n: '155', l: 'aprovados' },
    { n: '76,35%', l: 'de conversão' },
    { n: 'R$ 502.760,25', l: 'em orçamentos aprovados' },
  ],
} as const;

export const METAS_NAO_RESULTADO = [
  'NPS acima de 85%', 'No-show abaixo de 8%', 'Recall acima de 70%', 'Espera abaixo de 15 minutos',
] as const;

export const LIMITES = [
  { t: 'Depoimentos', v: 'Só com nome real, cidade e autorização por escrito. Os vídeos de Maestria e Masterclass têm nomes identificados.' },
  { t: 'Preços', v: 'Consultoria e Mentorias nunca são publicadas. Produtos de preço público podem aparecer com o valor do site.' },
  { t: 'Urgência', v: 'Só com prazo ou vaga real. Sem contador, sem "pessoas vendo agora", sem compradores simulados.' },
  { t: 'Imagens clínicas', v: 'Só com consentimento do paciente. Regra de antes e depois: validar com o jurídico.' },
  { t: 'Fotos', v: 'O Dr. Sócrates aparece só em foto real. Imagem gerada por IA não pode ser apresentada como ele.' },
  { t: 'Resultados', v: 'Nenhum percentual de aumento de faturamento, retorno do investimento ou casos por aluno sem medição.' },
] as const;

/* ---------- 10 Instagram ---------- */
export const FORMATOS_IG = [
  { t: 'Feed e carrossel', tam: '1080 × 1350', prop: '4:5', seg: 'Margem de 80px. A grade do perfil corta para 3:4, então nada essencial nas laterais.' },
  { t: 'Stories', tam: '1080 × 1920', prop: '9:16', seg: '250px livres no topo e 340px na base.' },
  { t: 'Capa de Reels', tam: '1080 × 1920', prop: '9:16', seg: 'Conteúdo no centro. A miniatura do perfil corta para 3:4.' },
] as const;

export const TIPO_IG = [
  { t: 'Título', v: 'Poppins 700 · 72 a 96px · caixa mista' },
  { t: 'Eyebrow', v: 'Poppins 600 · 26 a 28px · maiúsculas · espaçamento .22em' },
  { t: 'Texto', v: 'Lato 400 · mínimo 34px (Lato 300 some no celular)' },
  { t: 'CTA', v: 'Poppins 700 · 40px' },
] as const;

export const COMPOSICAO_IG = [
  'Fundo preto, com grade de pontos ou brilho dourado.',
  'Uma ideia por arte.',
  'No máximo um destaque dourado por título.',
  'No Canva, o destaque é ouro sólido #e8b447. O gradiente do site não existe em texto no Canva.',
  'Logo em posição fixa no rodapé.',
  'O eyebrow indica a frente: CLÍNICA ou NEGÓCIO.',
] as const;

export const MIX_CONTEUDO = [
  { t: 'Conexão', pct: 40 },
  { t: 'Autoridade', pct: 40 },
  { t: 'Conversão', pct: 20 },
] as const;

export const ROTEIRO_REELS = [
  { t: 'Gancho', s: '0 a 5s' },
  { t: 'Conteúdo', s: '20 a 40s' },
  { t: 'CTA', s: '5s' },
] as const;

export const PASSOS_CANVA = [
  'No Canva, abra Brand Kit e crie um kit "Felice Academy".',
  'Cores: cadastre as 7 do guia (#0b0b0d, #101013, #141417, #e8b447, #f5cd47, #f4efe4, #9c9aa0).',
  'Fontes: Poppins e Lato. Confira se estão na biblioteca do Canva; se não, envie os .woff2 de app/fonts (ou baixe do Google Fonts).',
  'Logo: envie logo-felice-academy.png (botão na seção Logo). Ela só funciona sobre fundo escuro.',
  'Crie o design com o tamanho personalizado do formato (1080 × 1350 ou 1080 × 1920).',
  'Baixe nesta página o PNG "só fundo" do modelo e envie como fundo do design.',
  'Digite o texto por cima, com as fontes e medidas deste guia, e mantenha a área segura.',
  'Salve como modelo no Canva para o time reutilizar.',
] as const;

export const CHECKLIST_IG = [
  'Formato e tamanho corretos',
  'Nada essencial fora da área segura',
  'Fontes Poppins e Lato',
  'Só as cores do guia',
  'Logo no rodapé, sobre fundo escuro',
  'No máximo um destaque dourado',
  'Número usado está na lista liberada',
  'Imagem de paciente com autorização',
  'Um único CTA',
  'Nome do produto na grafia oficial',
] as const;

/* ---------- 11 Pendências ---------- */
export const PENDENCIAS = [
  { t: '@ oficial do Instagram', d: 'Não existe no repositório. Necessário no rodapé das artes e no CTA.' },
  { t: 'CRO do Dr. Sócrates', d: 'Não aparece em lugar nenhum. Exigência de publicidade odontológica.' },
  { t: 'Regras de publicidade do CFO', d: 'Validar com o jurídico, incluindo antes e depois e uso de imagem de paciente.' },
  { t: 'Nomes dos 4 pilares', d: 'Há três versões: Atendimento, Agendamento, Marketing e Gestão; com Comercial no lugar de Agendamento; e Gestão, Atendimento, Comercial e Marketing.' },
  { t: 'Número de alunos', d: '"+1.200 dentistas" (a confirmar), "+1 mil formados" e "+1000 especialistas" convivem no site.' },
  { t: 'Grafia', d: '"seu CRC" ou "sua CRC"; "Clínica Felice" ou "Felice Odontologia"; "A Secretária que Vende" ainda existe no tracking.' },
  { t: 'Logo vetorial', d: 'Só existe um PNG branco. Faltam SVG, versão para fundo claro e símbolo isolado.' },
  { t: 'Fotos aprovadas', d: 'Curadoria de fotos reais, com formatos verticais. Hoje há 3 retratos e só 1 em 9:16. Várias imagens do site parecem geradas por IA.' },
  { t: 'Selo "F" antigo', d: 'Ainda no favicon e na imagem de compartilhamento (OG).' },
  { t: 'Valores propostos por este guia', d: 'Altura mínima e área de respiro do logo, proporção 70/20/10, espaçamentos e breakpoints canônicos.' },
] as const;
