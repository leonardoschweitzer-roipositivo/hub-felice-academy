import { ConfirmacaoAplicacao } from '@/components/felice/candidatura/ConfirmacaoAplicacao';
import { CONFIRMACAO } from './paginas';

/* Confirmação da candidatura à Consultoria Gestão F4.
   A estrutura é compartilhada com as duas mentorias — aqui fica só a copy
   (em ./paginas.ts). O nome do arquivo continua o mesmo para não mexer na
   rota que já importa este componente. */
export function ConfirmacaoHero() {
  return <ConfirmacaoAplicacao c={CONFIRMACAO} />;
}
