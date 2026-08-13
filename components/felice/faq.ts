/* ============================================================
   FAQ do Kit Gestão F4 — dados puros.

   Nasceu dentro de `sections/Faq.tsx`, que é `'use client'`. Como o
   assistente do site monta a base de conhecimento no servidor, importar
   dali arrastaria o componente inteiro (e o React) para o bundle do
   servidor sem necessidade. Aqui é só o array, do jeito que as outras
   8 landings já fazem em `content.ts`.
   ============================================================ */

export const FAQ: { q: string; a: string }[] = [
  {
    q: 'Como eu recebo o material?',
    a: 'O acesso é liberado imediatamente após a confirmação do pagamento. Você entra na plataforma online pelo navegador e já começa a usar hoje mesmo — nada para baixar ou instalar, e o acesso é vitalício.',
  },
  {
    q: 'Funciona no celular? Preciso de internet?',
    a: 'Sim, funciona no computador, tablet ou celular — basta um navegador e conexão com a internet. Você acessa de qualquer lugar: na recepção, no consultório ou em casa.',
  },
  {
    q: 'Preciso de algum sistema ou ferramenta paga?',
    a: 'Não. Está tudo dentro da plataforma, sem custo extra nem software adicional — inclusive a busca, a IA que responde sobre o material e os simuladores de treino já vêm incluídos.',
  },
  {
    q: 'Serve para qualquer clínica odontológica?',
    a: 'Sim. De consultórios individuais a clínicas com equipe, o método foi pensado para padronizar processos em qualquer estrutura.',
  },
  {
    q: 'Posso usar com toda a minha equipe?',
    a: 'Sim — esse é exatamente o objetivo. Os POPs e scripts existem para direcionar a equipe inteira e padronizar o atendimento.',
  },
  {
    q: 'E se eu não gostar?',
    a: 'Você tem 7 dias de garantia incondicional. Se não for para você, é só pedir o reembolso e devolvemos o valor integral.',
  },
];
