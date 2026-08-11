import type { Metadata } from 'next';
import { fontVars } from '@/app/fonts';
import '@/styles/felice.css';
import '@/styles/obrigado.css';
import { BoasVindas } from '@/components/felice/candidatura/BoasVindas';
import { BOAS_VINDAS } from '@/components/consultoria/aplicacao/paginas';
import { PurchasePixel } from '@/components/tracking/PurchasePixel';

export const metadata: Metadata = {
  title: 'Bem-vindo à Consultoria Gestão F4',
  description:
    'Sua entrada na Consultoria Gestão F4 está confirmada. Veja o que acontece nos próximos dias e o que já está garantido.',
  robots: { index: false, follow: false },
};

/* Boas-vindas de quem foi aprovado e fechou. O link é enviado pela equipe
   depois do fechamento no WhatsApp — não há checkout que redirecione até
   aqui, então é a própria equipe que o distribui.

   O <PurchasePixel /> só dispara se a URL trouxer o id da transação
   (`?transaction_id=...`), então mandar o link com esse parâmetro é o que
   faz o Meta finalmente ver a receita deste produto. Sem o parâmetro, a
   página abre normalmente e nenhum evento é disparado. */
export default function ObrigadoPage() {
  return (
    <div className={fontVars}>
      <PurchasePixel slug="consultoria" />
      <BoasVindas c={BOAS_VINDAS} />
    </div>
  );
}
