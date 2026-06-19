# Plano — Felice Academy: novo app (HUB + Gestão F4 + Felice CRM)

> ## ✅ STATUS (atualizado) — scaffold + 3 páginas já construídos e buildando
>
> O app já está de pé em `DEV IA/felice/hub-paginas-felice/`. `npm install` + `npm run build`
> passam (TypeScript strict OK). Rotas geradas: **`/` (HUB)**, **`/gestao` (clone F4)**, **`/crm`**,
> além de `robots.txt` e `sitemap.xml`.
>
> **Para rodar:** `cd "DEV IA/felice/hub-paginas-felice" && npm run dev` → http://localhost:3000
>
> **O que já existe:**
> - **Scaffold**: `package.json` (Next 14.2.35, react 18, ts 5 — deps mínimas), `next.config.mjs`
>   (cópia do roipositivo), `tsconfig.json` (alias `@/*`), `app/layout.tsx` (pt-BR, theme #0b0b0d),
>   `app/globals.css` (reset mínimo).
> - **Clone EXATO da Gestão F4** → `/gestao`: `styles/felice.css` (idêntico, 1795 linhas),
>   `components/felice/sections/*` (13), `components/felice/ui/*` (9), `components/felice/FeliceLanding.tsx`.
>   Único ajuste vs. a fonte: caminhos de import (`../components/icons` → `../ui/icons`;
>   `./felice.css` → `@/styles/felice.css`). **Conteúdo/markup/animações idênticos.**
> - **HUB** → `/`: `components/hub/*` (HubHeader, HubLanding, ProductCard, content.ts) + `styles/hub.css`.
>   Vitrine de 6 cards-janela; card Gestão→`/gestao`, card Felice CRM→`/crm`; demais "Em breve".
> - **Felice CRM** → `/crm`: `components/crm/*` (CrmHeader, CrmLanding, CrmSections, CrmProvaGarantia,
>   CrmFaq) + `styles/crm.css`. Clone estrutural da F4 com copy de SaaS. **Produto = NEXUS ROI white-label.**
> - **Assets**: todos os `.avif/.png` (books, hero bg, dr-socrates) em `public/images/`.
>
> **⚠️ O que falta (handoff):**
> 1. **Verificar paridade visual** do `/gestao` lado a lado com a fonte (`roipositivo` → `/paginas/felice`).
> 2. **CRM — substituir placeholders**: mockups reais do dashboard (`.crm-mock` em `CrmSections.tsx`),
>    números de prova social, **modelo comercial/preço** e **link de checkout** (`#`/`#checkout`),
>    depoimentos reais (`CrmProvaGarantia.tsx`).
> 3. **HUB — confirmar** estado real de cada card (Disponível/Em breve), links externos e stats (`content.ts`).
> 4. **Elementos de urgência no CRM**: hoje o CRM NÃO inclui `UrgencyBar`/`CountdownTimer`/`PurchaseToasts`/
>    `LiveViewers` (a F4 inclui). Adicionar se a estratégia de conversão pedir (componentes já disponíveis em
>    `components/felice/ui/`).
> 5. **Analytics/pixels** (GA4, Meta, GTM) — adicionar em `app/layout.tsx` (IDs a confirmar).
> 6. **OG images** por página + favicons (`/favicon.png`, `/apple-icon.png` ainda não criados).
> 7. **Domínio/URLs** finais (HUB raiz, CRM em `/crm` ou subdomínio).
>
> O restante deste documento é o plano original (referência de design e decisões).

---

## Context

A **Felice Academy** (Dr. Sócrates Tavares) não tem presença digital própria. O PRD (`PRD_Felice_Academy_HUB_e_Felice_CRM.md`) pede duas frentes: um **HUB institucional** (vitrine + roteador de tráfego) e uma **página de vendas do Felice CRM**.

A página de vendas **Kit Gestão F4** já foi prototipada e aprovada dentro do projeto ROI POSITIVO em `app/paginas/felice/`. Ela é a **referência oficial de design** do PRD (paleta dourada/grafite, Poppins+Lato, componentes).

**Escopo deste projeto = somente páginas (marketing).** O **Felice CRM como software** é um **white-label do NEXUS ROI** (que já suporta white-label) — produto pronto, **fora de escopo**, não será construído aqui. O que este projeto entrega é apenas a **página de vendas do Felice CRM**, que faz parte do **HUB de páginas**. O template-fonte "NEXUS ROI" não está acessível, então — decidido com o usuário — a estrutura/design da Gestão F4 será a base visual/estrutural dessa página de vendas.

**Objetivo:** criar um **novo app Next.js 14 standalone** em `DEV IA/felice/hub-paginas-felice/` que:
1. **Recria a página Gestão F4 EXATAMENTE igual** à aprovada (rota `/gestao`).
2. Cria o **HUB institucional** novo (rota `/`), reusando o design system da F4.
3. Cria a **página de vendas do Felice CRM** (rota `/crm`), clonando a estrutura da F4 e adaptando copy/oferta — esta página é um nó do HUB e direciona o lead para a aquisição do Felice CRM (white-label NEXUS ROI).

Não tocar no app `felice-crm/` existente nem no NEXUS ROI — são o software real, fora de escopo. A pasta-alvo `hub-paginas-felice/` está **vazia** hoje. Este é um repositório só de páginas de venda/institucional.

---

## Fonte de verdade (página aprovada — copiar exatamente)

Caminho-fonte (referência direta, conforme pedido do usuário):
`/Users/leonardoschweitzer/DEV IA/roipositivo/app/paginas/felice/`

Características que tornam a clonagem limpa:
- **Auto-contida**: usa próprias fontes (Poppins/Lato via `next/font/google`), próprio CSS isolado (`felice.css`, 1795 linhas) e **dados hardcoded** nos componentes — **zero dependência** do design system do ROI.
- Estrutura:
  ```
  felice/
  ├── page.tsx              (metadata + fontes Poppins/Lato + <FeliceLanding/>)
  ├── FeliceLanding.tsx     (importa felice.css + compõe as seções)
  ├── felice.css            (1795 linhas — TODO o estilo, isolado)
  ├── sections/  (13)  Header, Hero, Numeros, Problema, Metodo, Componentes,
  │                    Autoridade, Depoimentos, Oferta, Garantia, Faq,
  │                    FinalCta, Footer
  └── components/ (9)  BookCover, CountdownTimer, LiveViewers, PurchaseToasts,
                       RevealOnScroll, UrgencyBar, WhatsappFloat, icons (+ index implícito)
  ```
- Ordem das seções (de `FeliceLanding.tsx`): UrgencyBar → Header → Hero → Numeros → Problema → Metodo → divider → Componentes → Autoridade → Depoimentos → Oferta → Garantia → Faq → FinalCta → Footer → WhatsappFloat → PurchaseToasts → RevealOnScroll.
- Assets em `/Users/leonardoschweitzer/DEV IA/roipositivo/public/images/`:
  `background-hero-box-4-books.{avif,png}`, `box-4-books.png`,
  `book-procedimento-operacional-padrao.{avif,png}`,
  `book-script-de-atendimento.{avif,png}`,
  `book-script-de-agendamento.{avif,png}`,
  `book-calendario-de-marketing.{avif,png}`,
  `dr-socrates-tavares.{avif,png}`.

---

## Arquitetura do novo app

```
DEV IA/felice/hub-paginas-felice/
├── package.json            ← Next 14.2.x, react 18, typescript 5 (mínimo; SEM supabase/three)
├── next.config.mjs         ← copiar de roipositivo (avif/webp + trailingSlash + cache headers)
├── tsconfig.json           ← strict + alias "@/*": ["./*"]
├── next-env.d.ts
├── .gitignore
├── app/
│   ├── layout.tsx          ← <html lang="pt-BR">, metadataBase, theme #0b0b0d, favicons
│   ├── globals.css         ← reset mínimo global (o estilo das páginas vem dos CSS isolados)
│   ├── page.tsx            ← HUB institucional (rota /)
│   ├── gestao/page.tsx     ← Gestão F4 (clone EXATO)
│   └── crm/page.tsx        ← Felice CRM (clone estrutural da F4 + copy nova)
├── styles/
│   ├── felice.css          ← copiado IDÊNTICO da fonte (base de design compartilhada)
│   ├── hub.css             ← novo: estilos específicos do HUB (cards-janela, grade)
│   └── crm.css             ← novo: overrides/extra do CRM (se necessário)
├── components/
│   ├── felice/             ← TODO o conteúdo de sections/ + components/ da fonte (clone)
│   │   ├── sections/  (13 componentes idênticos)
│   │   └── ui/        (9 componentes idênticos: BookCover, CountdownTimer, ...)
│   └── hub/                ← novos componentes do HUB (HubHeader, ProductCard, HubHero, ...)
└── public/images/          ← copiar os assets da fonte (books, hero bg, dr-socrates)
```

Decisões:
- **Standalone, sem `output: 'export'`** — espelha o `next.config.mjs` do roipositivo (que NÃO usa export; usa `trailingSlash` + headers de cache). Isso preserva o comportamento de imagem/otimização da fonte.
- **Dependências mínimas**: `next`, `react`, `react-dom`, `typescript`, `@types/*`. A página F4 não usa Supabase, Three.js, Resend nem Zod — não incluir.
- **`felice.css` é a base de design compartilhada** das 3 páginas. HUB e CRM importam `felice.css` (tokens/botões/tipografia dourada) + seu CSS próprio para o que for novo.

---

## Ordem de execução (recomendada)

A ordem certa é **estrutura → clone exato da aprovada → derivar HUB e CRM**. Isso garante que a referência visual exista e esteja validada antes de criar o novo.

### Fase 1 — Scaffold do app
1. Criar `package.json` (Next 14.2.x, react 18, ts 5; scripts `dev/build/start/lint`).
2. Copiar `next.config.mjs` da fonte (idêntico).
3. Criar `tsconfig.json` (strict, alias `@/*`), `next-env.d.ts`, `.gitignore`.
4. `app/layout.tsx` mínimo: `<html lang="pt-BR">`, `metadataBase`, viewport theme `#0b0b0d`, favicons. **Sem** fontes globais aqui (cada página define as suas, como na fonte).
5. `app/globals.css`: reset mínimo (box-sizing, margin 0, scroll-behavior). NÃO importar os 4 arquivos do ROI — eles não são usados.
6. `npm install` e confirmar `npm run dev` sobe vazio.

### Fase 2 — Clone EXATO da Gestão F4 (rota `/gestao`)
**Recriar byte-a-byte** a partir da fonte. Para cada arquivo, copiar o conteúdo literal e ajustar **apenas os caminhos de import**:
1. Copiar `app/paginas/felice/felice.css` → `styles/felice.css` (idêntico).
2. Copiar as 13 seções → `components/felice/sections/` e os 9 componentes → `components/felice/ui/` (conteúdo idêntico; ajustar imports relativos internos, ex. `../components/icons` → `../ui/icons`).
3. Recriar `FeliceLanding.tsx` como `components/felice/FeliceLanding.tsx` — mesma composição/ordem; trocar `import './felice.css'` por `import '@/styles/felice.css'` e os imports de seção/component para os novos caminhos.
4. `app/gestao/page.tsx` = cópia de `page.tsx` da fonte (fontes Poppins/Lato idênticas, mesmos pesos 600/700/800 e 300/400/700, mesmas `variable`, mesma metadata) renderizando `<FeliceLanding/>`.
5. Copiar todos os assets de `public/images/` (books, hero bg, dr-socrates — avif+png).
6. **Verificação visual**: rodar `/gestao` lado a lado com a fonte (`/paginas/felice` no roipositivo) e confirmar pixel-paridade (hero, marquee, countdown, toasts, oferta, garantia SVG, FAQ, footer/CNPJ).

> ⚠️ Requisito do usuário: a página aprovada deve ficar **EXATAMENTE igual**. Nenhuma seção, animação, texto-placeholder ou elemento de urgência pode ser omitido. Conferir contra a fonte arquivo por arquivo.

### Fase 3 — HUB institucional (rota `/`)
Construir novo, reusando o design system da F4 (`styles/felice.css` + `styles/hub.css`). Seções (PRD §7.2):
1. **Header** dourado (reusar/adaptar o `.felice-header`).
2. **Hero** da Academy (proposta de valor educação+ferramentas; mockup com luz dourada).
3. **Prova de autoridade** (Dr. Sócrates — reusar bloco da Autoridade da F4).
4. **Vitrine de produtos** — grade de 6 **cards estilo "janela de navegador"** (3 pontos no topo): Masterclass, Zigomático, Mentoria, Gestão (F4), Gengiva, Felice CRM. Cada card: badge numerado dourado, título, descrição curta, tag de categoria (Curso/Mentoria/Software), estado (`Disponível`/`Em breve`) e CTA.
   - **Card "Gestão"** → link para `/gestao` (página clonada).
   - **Card "Felice CRM"** → link para `/crm`.
   - Demais cards → estado `Em breve` (CTA desabilitado) ou link externo, conforme `content` configurável.
   - Grade responsiva 3/2/1 colunas.
5. **Faixa de stats** (padrão `.numeros` da F4).
6. **Depoimentos** (opcional; reusar `.testi`/`.quote`).
7. **CTA final** + **Footer** (reusar Footer da F4).

Componentizar: `components/hub/HubHeader.tsx`, `HubHero.tsx`, `ProductCard.tsx` (com prop `estado: 'disponivel' | 'em-breve'`), `ProductGrid.tsx`. Dados dos 6 produtos em um `content.ts` tipado (array `Produto[]`).

### Fase 4 — Página de vendas Felice CRM (rota `/crm`)
**Apenas a landing page de vendas** — o software é o NEXUS ROI white-label (não se constrói nada de produto aqui). Clone **estrutural** da F4 (mesma sequência/lógica de conversão), com copy/oferta de SaaS (PRD §8.2). Reusar os componentes de `components/felice/*` como base, criando variantes onde a copy muda:
1. UrgencyBar → Header → Hero (headline "pare de gerenciar no improviso", mockup do dashboard) → Numeros (clínicas usando, teste 7 dias) → Problema (perda de paciente, agenda furada, faturamento sem controle) → Solução/Pilares (cadastro, histórico, agenda, pagamentos, funil) → Funcionalidades detalhadas (img↔texto) → Como funciona (1.cadastra 2.organiza 3.acompanha) → Autoridade (Dr. Sócrates) → Depoimentos → Oferta/planos → Garantia → FAQ → FinalCta → Footer.
2. Manter elementos de urgência (countdown, toasts, live viewers, whatsapp) iguais aos da F4.
3. Dados em `content.ts` próprio do CRM. Mockups do dashboard são **placeholder** (prints do NEXUS ROI white-label) até o cliente fornecer os reais (marcar com `⚠️ TROCAR`).
4. CTA da oferta → fluxo de aquisição do Felice CRM (checkout / teste grátis / WhatsApp — a confirmar com o cliente). Não há integração de software a fazer; só o link/fluxo de conversão.

### Fase 5 — SEO, analytics e QA
- Metadata por página (OG, title/description). Sitemap/robots básicos.
- Slots para GA4 / Meta Pixel / GTM (PRD §10) — adicionar via `app/layout.tsx` (placeholders comentados; IDs a confirmar).
- QA responsivo (mobile/tablet/desktop), LCP < 2,5s mobile (hero preload já presente na F4), acessibilidade (alt, contraste, teclado).

---

## Arquivos-chave a criar/modificar (resumo)

| Arquivo | Ação |
|---|---|
| `hub-paginas-felice/package.json`, `next.config.mjs`, `tsconfig.json` | scaffold (next.config = cópia da fonte) |
| `app/layout.tsx`, `app/globals.css` | shell mínimo pt-BR + reset |
| `styles/felice.css` | **cópia idêntica** da fonte |
| `components/felice/**` (13 sections + 9 ui + FeliceLanding) | **clone exato** (só ajustar imports) |
| `app/gestao/page.tsx` | clone do `page.tsx` aprovado |
| `public/images/*` | copiar assets da fonte |
| `app/page.tsx`, `components/hub/**`, `styles/hub.css` | HUB novo |
| `app/crm/page.tsx`, `content.ts` do CRM, `styles/crm.css` | CRM (clone estrutural F4 + copy nova) |

---

## Verificação (end-to-end)

1. `cd "DEV IA/felice/hub-paginas-felice" && npm install && npm run dev`.
2. **Paridade F4**: abrir `localhost:3000/gestao` e comparar com a fonte rodando no roipositivo (`localhost:5173`/`3000` `/paginas/felice`). Conferir: hero+marquee, barra de números, problema (cards dourados), método F4, componentes (livros AVIF + selo F4), autoridade (SVG ring), depoimentos (scroll), oferta (preço R$97/388, ribbon), garantia (selo SVG rotativo), FAQ (accordion), urgência (countdown 8min, toasts 8–18s, live viewers, whatsapp), footer (CNPJ). **Devem ser idênticos.**
3. `localhost:3000/` (HUB): 6 cards-janela, grade 3/2/1, card Gestão→/gestao, card CRM→/crm, estados Disponível/Em breve.
4. `localhost:3000/crm`: sequência de seções espelha a F4; copy adaptada a CRM.
5. `npm run build` sem erros (TypeScript strict).
6. Lighthouse mobile: LCP < 2,5s, sem erros de acessibilidade graves.

## Notas / pendências do cliente (PRD §4.4, §14)
- Domínio/subdomínios (`feliceacademy.com.br`, `/crm`).
- Modelo comercial do CRM (preço, planos, teste grátis) → seção Oferta.
- Prints/mockups reais do Felice CRM.
- Copy final e credenciais do Dr. Sócrates.
- Status real de cada card do HUB (Disponível vs Em breve) + links externos.
- IDs de GA4 / Meta Pixel / GTM.
