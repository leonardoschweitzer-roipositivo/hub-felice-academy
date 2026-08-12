/* A mensagem do botão de WhatsApp da área de entrega do Kit.

   Quem está aqui já pagou os R$ 97 — a mensagem é de suporte, não de
   venda, diferente do "gostaria de mais informações" que serve às páginas
   públicas. Mora num arquivo só para o índice e os 4 documentos usarem a
   mesma, e num arquivo PRÓPRIO em vez de `content/index.ts`, que importa
   os 4 documentos (~33 KB de JSX) junto do DOC_META e arrastaria tudo
   para o bundle do KitIndex, que é client component. */
export const SUPORTE_KIT =
  'Olá! Tudo bem? Sou aluno do Kit Gestão F4 e preciso de ajuda, por favor.';
