/* ============================================================
   Tipos das duas páginas do funil por CANDIDATURA (Consultoria,
   Mentoria de Gestão F4 e Mentoria de Zigomático).

   Por que estes dois componentes são compartilhados, e não forkados
   por produto como o resto do repo: eles não vendem nada. São páginas
   de processo — "recebemos" e "bem-vindo" —, idênticas em estrutura
   nos três produtos, e o que muda é só a copy. Fork aqui significaria
   manter a mesma correção em três lugares.
   ============================================================ */

/** Página pós-envio da candidatura (`/aplicacao/confirmado`). */
export type ConfirmacaoContent = {
  /** Nome do produto, como aparece na copy. */
  produto: string;
  /** Selo do topo. Ex.: "Recebemos a sua candidatura". */
  badge: string;
  /** Frase de apoio abaixo do título. */
  lead: string;
  /** Link do WhatsApp para quem a aba não abriu. */
  whatsappUrl: string;
  /** O que acontece depois do envio — 3 passos. */
  passos: { n: string; t: string; d: string }[];
  /** O que ter em mãos na conversa de diagnóstico. */
  preparar: string[];
  /** Volta para a landing do produto. */
  landingUrl: string;
  /** Rótulo desse link — evita concordância montada em runtime. */
  landingLabel: string;
};

/** Página de boas-vindas de quem foi aprovado e fechou (`/obrigado`).
    O link é enviado pela equipe depois do fechamento no WhatsApp. */
export type BoasVindasContent = {
  produto: string;
  /** Selo do topo. Ex.: "Tudo certo — você está dentro". */
  badge: string;
  titlePre: string;
  titleGold: string;
  lead: string;
  /** Os primeiros passos de quem acabou de entrar. */
  passos: { n: string; t: string; d: string }[];
  /** O que já está garantido — vira lista de itens com check. */
  inclui: string[];
  whatsappUrl: string;
  /** Nota de rodapé da página (prazo de acesso, contato da equipe). */
  nota: string;
};
