# PRD — Felice Academy: Kit F4 de Gestão (Versão Web Interativa)

**Cliente:** Dr. Sócrates Tavares — Felice Odontologia / Felice Academy
**Agência:** ROI Positivo
**Uso deste documento:** contexto-base para desenvolvimento assistido por IA (Claude no VS Code / Claude Code)
**Versão:** 1.0
**Data:** 19/06/2026

> **Para o agente de código (Claude Code):** os 4 PDFs originais do Kit F4 estão anexados ao projeto e são a **fonte de verdade do conteúdo**. Este PRD define o que construir, a estrutura de cada página, o design a seguir e as ferramentas interativas. Use os PDFs para extrair o texto; use este PRD para estrutura, UX e identidade visual. **Não copie o design dos PDFs** — eles estão fora da identidade da marca (foram gerados no NotebookLM). O visual correto é o do HUB (ver Seção 6).

---

## 1. Visão Geral

O Kit Sistema de Gestão F4 é o produto "Gestão" da Felice Academy (página de vendas já aprovada). Hoje ele é entregue como **4 PDFs estáticos**, fora da identidade visual da marca e em formato pouco prático de consumir e atualizar.

Este projeto recria esses 4 documentos como **páginas web interativas** dentro do ecossistema Felice Academy, com a identidade do HUB e com ferramentas que agregam valor (busca, chat de IA sobre o conteúdo, checklists, scripts copiáveis, geradores, simuladores, etc.).

Benefícios da migração PDF → Web:
- Conteúdo **vivo** e atualizável sem reenviar arquivos.
- Identidade visual **consistente** com a marca/HUB.
- **Ferramentas interativas** que transformam um manual em uma ferramenta de trabalho.
- Base para **área de membros** (acesso de quem comprou o Kit).

---

## 2. Contexto

Os 4 entregáveis do Kit F4 e seus arquivos-fonte:

| # | Entrega | Arquivo (PDF anexado) | Tema |
|---|---|---|---|
| 1 | **POP — Procedimento Operacional Padrão** | `pop__GESTA_O_` / `POP__GESTA_O__docx` | Ecossistema de Excelência Clínica + POPs por cargo |
| 2 | **Manual de Atendimento (Recepção)** | `Manual__ATENDIMENTO_` / `Manual_de_atendimento__ATENDIMENTO_` | "A Arte de Receber" — atendimento ético e humanizado na recepção |
| 3 | **Manual da CRC — Agendamento (Comercial)** | `Manual_CRC__COMERCIAL_` / `Manual_CRC_agendamento__COMERCIAL__docx` | "A Voz da Clínica" — guião tático da CRC |
| 4 | **Guia Estratégico de Marketing** | `guia_estrate_gico__MARKETING_` / `Guia_estrate_gico__MARKETING__docx` | Guia de vídeos para Instagram (clínicas de saúde) |

> Existem versões "infográfico" (slides) e versões "texto/docx" de cada documento. Use a **versão texto** como fonte primária do conteúdo e as versões infográfico como apoio para identificar diagramas que valem virar componentes interativos.

---

## 3. Objetivos

1. Migrar os 4 documentos de PDF para páginas web na identidade da marca.
2. Padronizar 100% com o design system do HUB Felice Academy.
3. Adicionar ferramentas interativas (Seção 8) que aumentem a utilidade prática.
4. Estruturar como base para uma futura **área de membros** (login do comprador).
5. Garantir conteúdo facilmente atualizável (formato editável, ex.: MDX).

**Métricas sugeridas:** tempo médio na página, % de leitura concluída, uso do chat de IA, scripts copiados, checklists marcados, retorno de usuários.

---

## 4. Escopo

### Dentro do escopo
- 4 páginas de conteúdo (uma por documento do Kit).
- 1 página índice do Kit (hub interno do produto, ligado ao HUB principal).
- Ferramentas interativas globais e por documento (Seção 8).
- Design system compartilhado com o HUB.

### Fora do escopo (desta fase)
- E-commerce / checkout (a venda já ocorre na página Gestão F4).
- Sistema de autenticação completo de membros (mapear como fase futura — Seção 15).
- App mobile nativo.

### A confirmar
- A página será **pública** ou **restrita a compradores** (impacta SEO/auth — Seção 13).
- Stack final (Seção 9) e domínio/rota (ex.: `feliceacademy.com.br/gestao/kit-f4`).
- Disponibilidade de chave de API Anthropic para o chat de IA.

---

## 5. Conteúdo de cada documento (estrutura para os componentes)

Resumo estrutural para orientar a montagem das páginas. **O texto integral vem dos PDFs anexados.**

### 5.1 POP — Procedimento Operacional Padrão (Gestão)
Dois blocos:

**A) Ecossistema de Excelência Clínica** (visão estratégica) — clínica organizada em 3 camadas:
- **Linha de Frente** (Acolhimento e Conversão): Recepção, CRC, CRC Comercial.
- **Motor Clínico** (Precisão e Biossegurança): TSB, ASB, Enfermagem, Radiologia, Serviços Gerais.
- **Centro de Comando** (Previsibilidade e Crescimento): Gerente/Financeiro.
- Conceitos transversais: rede de comunicação/sincronia operacional, ciclo fechado de biossegurança, funil comercial, síntese "máquina de escalabilidade".

**B) POPs por cargo** (operacional) — cada cargo com rotina detalhada:
Recepcionista, TSB (Técnico em Saúde Bucal), ASB (Auxiliar em Saúde Bucal), CRC, CRC Comercial, Gerente/Financeiro, Serviços Gerais, Radiologia, Técnico/Auxiliar de Enfermagem. Cada POP segue um padrão: apresentação pessoal, preparação, biossegurança, rotinas diárias (abertura/expediente/fechamento), comunicação e relatórios.

### 5.2 Manual de Atendimento — Recepção ("A Arte de Receber")
- Princípios éticos (Confidencialidade/LGPD, Não-discriminação, Empatia, Dignidade).
- Jornada do atendimento em 5 etapas: Saudação → Identificação (LGPD) → Espera/Fila → Resolução → Despedida.
- Scripts modelo (recepcionista ↔ paciente) com notas explicativas.
- Matriz de FAQs (tradução de jargões técnicos → linguagem humanizada).
- Protocolos de situações delicadas: atraso do paciente, falta de documentos, paciente irritado (funil de desescalada).
- Código de conduta (postura, voz, telas, telefone, acessibilidade).

### 5.3 Manual da CRC — Agendamento ("A Voz da Clínica")
- Impacto do primeiro contato telefônico (Voz, Psicologia, Comportamento, Resultado).
- Pilares éticos do agendamento (Acolhimento, Privacidade/LGPD, Equidade).
- Roadmap da "Chamada Perfeita" em 5 fases: Saudação → Triagem → Dados → Confirmação → Encerramento.
- Scripts por fase.
- Protocolos: falta de vagas (matriz de resolução), paciente irritado (funil de desescalada), red flags de urgência médica.
- "Regra dos 5 minutos" (envio de confirmação pós-chamada).
- Código de conduta (matriz fazer/evitar).

### 5.4 Guia Estratégico de Marketing (Vídeos para Instagram)
- 3 pilares de conteúdo na proporção **40% Conexão / 40% Autoridade / 20% Conversão**.
- Calendário semanal de Stories (seg–dom).
- Calendário mensal coringa do feed (4 semanas: Atração / Autoridade / Conexão / Conversão).
- Anatomia do vídeo eficaz: Gancho (0–5s) → Conteúdo (20–40s) → CTA (5s).
- 3 fórmulas de roteiro: Inimigo Comum, Descoberta, Bastidor com Propósito.
- Boas práticas de produção (luz, áudio, legendas, gravação em lote, ética).
- Storytelling ético (3 atos: Desafio → Travessia → Transformação).
- Funil 5Ns para tráfego pago (N1 Inconsciente → N5 Totalmente Consciente).

---

## 6. Design System (manter o padrão do HUB)

**Regra inegociável:** estas páginas devem ser visualmente indistinguíveis do HUB Felice Academy. Reaproveitar tokens, componentes e tipografia já definidos para o HUB.

- **Tema:** escuro (preto/grafite) com **dourado/âmbar** como cor de marca.
- **Texto:** branco para títulos; cinza claro para apoio; dourado para destaques/links/CTAs.
- **Tipografia:** títulos em sans-serif condensada **bold, CAIXA ALTA**; corpo em sans-serif regular de alta legibilidade.
- **Componentes herdados do HUB:** cards estilo "janela de navegador" (três pontos), badges circulares dourados numerados, barras de stats, selos circulares (garantia), accordions, conectores tracejados.
- **CTAs:** botão dourado preenchido (primário) + variante outline.

**Nota de UX para leitura longa:** estes são documentos extensos. Manter a identidade dark+dourado no "chrome" (header, navegação, destaques), mas garantir **conforto de leitura** no corpo: superfície de conteúdo levemente mais clara que o fundo, largura de leitura controlada (~70ch), bom contraste (WCAG AA), espaçamento generoso. Opcional: toggle de "modo leitura" (claro) preservando os acentos dourados.

---

## 7. Arquitetura das páginas

Padrão de "documento/curso interativo", igual para os 4:

```
┌───────────────────────────────────────────────────────────┐
│  Header (marca Felice Academy, dark+dourado, busca global)  │
├───────────┬───────────────────────────────────┬───────────┤
│  Sidebar  │            Conteúdo                │  Painel    │
│  (índice  │  (seções do documento, em MDX,     │  de        │
│  navegável│   com componentes interativos       │  ferramentas│
│  + progres│   embutidos)                        │  / chat IA │
│  so)      │                                     │            │
├───────────┴───────────────────────────────────┴───────────┤
│  Footer (igual ao HUB) + link "voltar ao Kit F4 / HUB")     │
└───────────────────────────────────────────────────────────┘
```

- **Index do Kit F4:** página com 4 cards (um por documento), no padrão de cards do HUB, indicando progresso de leitura de cada um.
- **Navegação entre documentos:** "anterior/próximo" + breadcrumb (HUB › Kit F4 › [Documento]).
- **Responsivo:** sidebar vira menu/drawer no mobile; painel de ferramentas vira botão flutuante.

---

## 8. Ferramentas interativas (o diferencial vs. PDF)

### 8.1 Globais (em todas as páginas)
- **Busca no conteúdo** — busca client-side em todo o Kit (ex.: Pagefind ou índice próprio).
- **Chat de IA sobre o conteúdo (RAG)** — "Converse com este material": responde dúvidas usando apenas o conteúdo do Kit, em PT-BR. Ver Seção 12.
- **Índice/sumário lateral** com rolagem ativa (highlight da seção atual).
- **Barra de progresso de leitura** + estado "concluído" por documento (persistir localmente; futuramente por usuário).
- **Tempo estimado de leitura** por seção/documento.
- **Copiar / imprimir / exportar** seção (gerar PDF na marca, se desejado).
- **Anotações/realces pessoais** (fase 2; persistência local primeiro).

### 8.2 POP / Gestão
- **Seletor de cargo** — escolher (Recepcionista, TSB, ASB, CRC, CRC Comercial, Gerente/Financeiro, Serviços Gerais, Radiologia, Enfermagem) e ver o POP correspondente.
- **Diagrama interativo do Ecossistema** — 3 camadas (Linha de Frente / Motor Clínico / Centro de Comando) clicáveis, revelando papéis e métricas.
- **Checklists de rotina** marcáveis (abertura / expediente / fechamento) por cargo.
- **Matriz de responsabilidades** comparando ASB × TSB × Enfermagem (tabela interativa/filtro).
- **Gerador de POP personalizado** — preencher nome da clínica + responsável → documento pronto para imprimir/assinar.

### 8.3 Atendimento (Recepção)
- **Scripts copiáveis** com campos editáveis (`[Nome da Clínica]`, `[Nome]`) → botão "Copiar".
- **Simulador de atendimento (role-play com IA)** — IA atua como paciente em cenários (atraso, falta de documento, irritação) para treinar a recepção.
- **Matriz de FAQs pesquisável** (dúvida do paciente → resposta humanizada → jargão a evitar).
- **Fluxograma interativo de crise** — árvore de decisão (paciente atrasado / sem documento / irritado).
- **Checklist de conduta postural** (código de conduta como checklist de auto-avaliação).

### 8.4 CRC / Agendamento (Comercial)
- **Roadmap das 5 fases da chamada** — stepper interativo (Saudação → Triagem → Dados → Confirmação → Encerramento) com script de cada fase.
- **Árvores de decisão** — "sem vagas" (matriz de resolução), "paciente irritado" (desescalada), **"red flags de urgência"** (protocolo destacado, com aviso de segurança).
- **Simulador de chamada com IA** (treino de atendimento telefônico).
- **Timer da Regra dos 5 minutos** — cronômetro + checklist de encerramento/confirmação.
- **Banco de frases/objeções** copiáveis (gestão de objeções do CRC Comercial).

### 8.5 Marketing (Vídeos)
- **Calendário editorial interativo** — Stories (semanal) e Feed (mensal, 4 semanas); editável e exportável (PDF/.ics).
- **Gerador de roteiros com IA** — entrada: especialidade + pilar (Conexão/Autoridade/Conversão) → saída no formato Gancho + Conteúdo + CTA, com guardrails éticos (sem promessa de resultado, sem sensacionalismo).
- **Visualizador do Funil 5Ns** — interativo (N1→N5), com objetivo e tipo de vídeo por nível.
- **Calculadora da proporção 40/40/20** — planejar nº de vídeos do mês por pilar.
- **Checklist de produção** (luz, áudio, legendas, gravação em lote).
- **Banco de ganchos/templates** copiáveis por especialidade.

> Todas as ferramentas de IA devem reforçar os princípios éticos presentes nos próprios documentos (LGPD, não-discriminação, sem promessas de resultado em saúde).

---

## 9. Stack técnico sugerido

Duas opções, conforme o nível de interatividade/auth desejado:

**Opção A — Astro + MDX (recomendada se o foco é conteúdo + ilhas interativas):**
- Astro (ótimo para sites de documentação/conteúdo, performático).
- Conteúdo em **MDX** (Markdown + componentes React/Astro) → fácil de atualizar.
- **Tailwind CSS** com tokens da marca (cores, tipografia do HUB).
- Componentes interativos como "ilhas" (React) só onde necessário.
- Busca: **Pagefind** (client-side, integra bem com Astro).

**Opção B — Next.js (recomendada se haverá área de membros + IA pesada):**
- Next.js (App Router), MDX para conteúdo, Tailwind, shadcn/ui.
- API routes para o chat de IA (proxy seguro para a API Anthropic).
- Auth (fase futura): Auth.js / Clerk / Supabase.

**Comum às duas:**
- Chat de IA: **API da Anthropic (Claude)** com RAG (Seção 12).
- Hospedagem: Vercel ou Netlify.
- Ícones: lucide. Animações sutis: framer-motion (opcional).

> **Recomendação:** começar pela **Opção A (Astro + MDX)** pela velocidade de entrega e facilidade de atualização do conteúdo; migrar/expandir para Next.js se a área de membros e o chat de IA exigirem backend dedicado.

---

## 10. Estrutura de arquivos sugerida (Astro + MDX)

```
felice-kit-f4/
├── src/
│   ├── content/
│   │   ├── pop-gestao.mdx
│   │   ├── atendimento-recepcao.mdx
│   │   ├── crc-agendamento.mdx
│   │   └── marketing-videos.mdx
│   ├── components/
│   │   ├── brand/            # Header, Footer, Card "janela", Badge dourado (do HUB)
│   │   ├── doc/              # Sidebar, TOC, ProgressBar, ReadingTime
│   │   ├── tools/
│   │   │   ├── SearchBox.tsx
│   │   │   ├── AIChat.tsx
│   │   │   ├── ScriptBlock.tsx        # script copiável c/ campos editáveis
│   │   │   ├── Checklist.tsx
│   │   │   ├── DecisionTree.tsx
│   │   │   ├── RoleSelector.tsx       # POP por cargo
│   │   │   ├── EditorialCalendar.tsx
│   │   │   ├── Funnel5N.tsx
│   │   │   └── ScriptGenerator.tsx    # roteiros de vídeo
│   ├── layouts/
│   │   └── DocLayout.astro
│   ├── pages/
│   │   ├── index.astro               # Index do Kit F4 (4 cards)
│   │   └── [doc].astro
│   └── styles/
│       └── tokens.css                # cores/tipografia do HUB
├── public/
└── package.json
```

---

## 11. Modelo de conteúdo (frontmatter MDX)

```mdx
---
title: "Procedimento Operacional Padrão"
slug: "pop-gestao"
order: 1
category: "Gestão"
readingTime: 25
summary: "O mapa estratégico e operacional para gestores."
tools: ["roleSelector", "ecosystemDiagram", "checklist", "popGenerator"]
---

import RoleSelector from "../components/tools/RoleSelector.tsx";

## Ecossistema de Excelência Clínica
...conteúdo extraído do PDF...

<RoleSelector client:visible />
```

---

## 12. Chat de IA sobre o conteúdo (RAG)

- **Fonte:** apenas o conteúdo dos 4 documentos do Kit (não responder fora do escopo).
- **Pipeline:** indexar o conteúdo (chunking) → embeddings → recuperar trechos relevantes → responder com a API Anthropic, citando a seção/documento de origem.
- **Idioma:** PT-BR.
- **System prompt (resumo):** "Você é o assistente do Kit Sistema de Gestão F4 da Felice Academy. Responda apenas com base no conteúdo do Kit. Se a resposta não estiver no material, diga que não consta. Reforce sempre os princípios de ética, LGPD e não-discriminação presentes nos manuais. Nunca sugira práticas que prometam resultados em saúde ou violem privacidade do paciente."
- **Segurança:** a chave de API nunca no client — usar rota de servidor/edge function como proxy. Rate limiting básico.

---

## 13. Requisitos não-funcionais

- **Responsivo** (mobile-first) e acessível (WCAG AA: contraste, navegação por teclado, alt em imagens, foco visível).
- **Performance:** LCP < 2,5s mobile; ilhas interativas carregadas sob demanda (`client:visible`).
- **SEO vs. privacidade:** se **público**, otimizar SEO; se **área de membros**, `noindex` e proteger rotas.
- **LGPD:** os próprios conteúdos tratam de dados sensíveis — o site não deve coletar dados além do necessário; se houver login, política de privacidade clara.
- **Conteúdo atualizável:** edição via MDX (sem redeploy manual complexo).

---

## 14. Identidade e navegação com o ecossistema

- O Kit F4 é o produto "Gestão" no HUB Felice Academy. A página índice do Kit deve linkar de volta ao HUB e à página de vendas Gestão F4.
- Manter header/footer idênticos ao HUB (mesma marca, mesmo menu).
- Reusar os componentes de marca já criados para o HUB (não recriar do zero).

---

## 15. Fases / Roadmap

| Fase | Entrega | Observações |
|---|---|---|
| **1 — Fundação** | Design system (tokens do HUB) + layout de documento + 1 página piloto (sugestão: POP) | Validar identidade e UX de leitura |
| **2 — Conteúdo** | Migrar os 4 documentos para MDX + index do Kit | Texto vindo dos PDFs |
| **3 — Ferramentas** | Componentes interativos (scripts, checklists, calendário, funil, seletor de cargo) | Por documento |
| **4 — IA & Busca** | Busca global + chat de IA (RAG) | Requer chave de API |
| **5 — Membros (futuro)** | Autenticação + progresso por usuário | Fora do escopo atual |

---

## 16. Anexos / Referências

- **4 PDFs do Kit F4** (anexados ao projeto no VS Code) — fonte de conteúdo.
- **HUB Felice Academy** — referência de design e componentes (dark + dourado).
- **Página de vendas Gestão F4** — identidade visual de referência já aprovada.

---

*Para o agente de código: priorize a Fase 1 (fundação + página piloto) para validar o design antes de migrar todo o conteúdo. Use os PDFs como fonte de texto e este PRD como especificação de estrutura, UX e identidade.*
