/* ============================================================
   Lista de ALUNOS (mock) — gerida pelo admin. Diferente de `aluno.ts`
   (que é o aluno "logado" para o dashboard). Alinhada com a comunidade
   e o ranking de mentoria.ts.
   ============================================================ */

export const PLANOS = ['Mentoria Felice', 'Assinatura Cursos', 'Curso avulso'] as const;
export type Plano = (typeof PLANOS)[number];

export const STATUS_ALUNO = ['ativo', 'pendente', 'inativo'] as const;
export type StatusAluno = (typeof STATUS_ALUNO)[number];

export type AdminAluno = {
  id: string;
  nome: string;
  email: string;
  iniciais: string;
  plano: Plano;
  status: StatusAluno;
  desde: string;
  ultimoAcesso: string;
  cursosConcluidos: number;
};

export const ALUNOS: AdminAluno[] = [
  {
    id: 'al-helena',
    nome: 'Dra. Helena Costa',
    email: 'helena.costa@email.com',
    iniciais: 'HC',
    plano: 'Mentoria Felice',
    status: 'ativo',
    desde: 'jan 2026',
    ultimoAcesso: 'hoje',
    cursosConcluidos: 3,
  },
  {
    id: 'al-camila',
    nome: 'Dra. Camila Reis',
    email: 'camila.reis@email.com',
    iniciais: 'CR',
    plano: 'Mentoria Felice',
    status: 'ativo',
    desde: 'fev 2026',
    ultimoAcesso: 'há 2h',
    cursosConcluidos: 5,
  },
  {
    id: 'al-andre',
    nome: 'Dr. André Mota',
    email: 'andre.mota@email.com',
    iniciais: 'AM',
    plano: 'Assinatura Cursos',
    status: 'ativo',
    desde: 'mar 2026',
    ultimoAcesso: 'ontem',
    cursosConcluidos: 2,
  },
  {
    id: 'al-bruno',
    nome: 'Dr. Bruno Lima',
    email: 'bruno.lima@email.com',
    iniciais: 'BL',
    plano: 'Mentoria Felice',
    status: 'ativo',
    desde: 'mar 2026',
    ultimoAcesso: 'há 5h',
    cursosConcluidos: 4,
  },
  {
    id: 'al-paula',
    nome: 'Dra. Paula Souza',
    email: 'paula.souza@email.com',
    iniciais: 'PS',
    plano: 'Assinatura Cursos',
    status: 'ativo',
    desde: 'abr 2026',
    ultimoAcesso: 'há 1 dia',
    cursosConcluidos: 1,
  },
  {
    id: 'al-rafael',
    nome: 'Dr. Rafael Dias',
    email: 'rafael.dias@email.com',
    iniciais: 'RD',
    plano: 'Curso avulso',
    status: 'pendente',
    desde: 'jun 2026',
    ultimoAcesso: '—',
    cursosConcluidos: 0,
  },
  {
    id: 'al-marina',
    nome: 'Dra. Marina Alves',
    email: 'marina.alves@email.com',
    iniciais: 'MA',
    plano: 'Assinatura Cursos',
    status: 'inativo',
    desde: 'dez 2025',
    ultimoAcesso: 'há 38 dias',
    cursosConcluidos: 6,
  },
  {
    id: 'al-tiago',
    nome: 'Dr. Tiago Nunes',
    email: 'tiago.nunes@email.com',
    iniciais: 'TN',
    plano: 'Mentoria Felice',
    status: 'ativo',
    desde: 'mai 2026',
    ultimoAcesso: 'há 3h',
    cursosConcluidos: 2,
  },
];
