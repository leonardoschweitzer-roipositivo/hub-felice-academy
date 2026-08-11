import type { Metadata } from 'next';
import { fontVars } from '@/app/fonts';
import '@/styles/felice.css';
import '@/styles/obrigado.css';
import { BoasVindas } from '@/components/felice/candidatura/BoasVindas';
import { BOAS_VINDAS } from '@/components/mentoria-gestao/aplicacao/paginas';
import { PurchasePixel } from '@/components/tracking/PurchasePixel';

export const metadata: Metadata = {
  title: 'Bem-vindo à Mentoria de Gestão F4',
  description:
    'Sua entrada na Mentoria de Gestão F4 está confirmada. Veja o que acontece nos próximos dias e o que já está garantido.',
  robots: { index: false, follow: false },
};

/* Boas-vindas de quem foi aprovado e entrou na turma. O link é enviado
   pela equipe depois do fechamento no WhatsApp.

   ⚠️ O <PurchasePixel /> resolve value/content_name por `funnelBySlug`, e
   `mentoria-gestao-f4` ainda NÃO existe em lib/tracking/funnels.ts — falta
   definir o valor da mentoria. Enquanto isso, o evento (que só dispara com
   `?transaction_id=` na URL) vai sem valor. Preencher o funil antes de
   otimizar campanha por receita. */
export default function ObrigadoPage() {
  return (
    <div className={fontVars}>
      <PurchasePixel slug="mentoria-gestao-f4" />
      <BoasVindas c={BOAS_VINDAS} />
    </div>
  );
}
