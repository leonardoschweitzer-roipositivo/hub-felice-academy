/* ============================================================
   Perfil do ALUNO (mock). Sem login — um único aluno fictício para
   dar vida ao dashboard (saudação, XP, streak, "continuar assistindo").
   ============================================================ */

export type Aluno = {
  nome: string;
  primeiroNome: string;
  iniciais: string;
  plano: string;
  xp: number;
  nivel: number;
  xpProximoNivel: number;
  streakDias: number;
  /** Aponta para a última aula em andamento (curso/aula). */
  continuar: { cursoSlug: string; aulaSlug: string };
};

export const ALUNO: Aluno = {
  nome: 'Dra. Helena Costa',
  primeiroNome: 'Helena',
  iniciais: 'HC',
  plano: 'Mentoria Felice',
  xp: 2480,
  nivel: 7,
  xpProximoNivel: 3000,
  streakDias: 6,
  continuar: { cursoSlug: 'masterclass-implantes', aulaSlug: 'planejamento-digital' },
};

export type Conquista = { id: string; titulo: string; conquistada: boolean };

export const CONQUISTAS: Conquista[] = [
  { id: 'primeira-aula', titulo: 'Primeira aula concluída', conquistada: true },
  { id: 'maratona', titulo: 'Maratona: 3 aulas em um dia', conquistada: true },
  { id: 'streak-7', titulo: '7 dias seguidos', conquistada: false },
  { id: 'pilar-completo', titulo: 'Concluiu um pilar', conquistada: false },
];
