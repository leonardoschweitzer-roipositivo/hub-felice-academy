import type { Metadata } from 'next';
import { fontVars } from '@/app/fonts';
import '@/styles/felice.css';
import '@/styles/obrigado.css';
import { BoasVindas } from '@/components/felice/candidatura/BoasVindas';
import { BOAS_VINDAS } from '@/components/mentoria-zigomatico/aplicacao/paginas';
import { PurchasePixel } from '@/components/tracking/PurchasePixel';

export const metadata: Metadata = {
  title: 'Bem-vindo à Mentoria de Zigomático',
  description:
    'Sua entrada na Mentoria de Zigomático está confirmada. Veja o que acontece nos próximos dias e o que já está garantido.',
  robots: { index: false, follow: false },
};

/* Boas-vindas de quem foi aprovado e entrou na turma. O link é enviado
   pela equipe depois do fechamento no WhatsApp.

   ⚠️ Mesma pendência da outra mentoria: `mentoria-zigomatico` ainda não
   existe em lib/tracking/funnels.ts, então o Purchase (que só dispara com
   `?transaction_id=` na URL) vai sem valor até o preço ser definido. */
export default function ObrigadoPage() {
  return (
    <div className={fontVars}>
      <PurchasePixel slug="mentoria-zigomatico" />
      <BoasVindas c={BOAS_VINDAS} />
    </div>
  );
}
