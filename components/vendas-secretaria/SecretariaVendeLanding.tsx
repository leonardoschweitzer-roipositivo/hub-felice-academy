import '@/styles/felice.css';
import '@/styles/maestria.css';
import '@/styles/vendas-secretaria.css';

import { SecretariaVendeHeader } from './SecretariaVendeHeader';
import {
  SecretariaVendeHero,
  SecretariaVendeNumeros,
  SecretariaVendeProblema,
  SecretariaVendeMetodo,
  SecretariaVendeModulos,
  SecretariaVendeBonus,
  SecretariaVendePlataforma,
  SecretariaVendeAutoridade,
  SecretariaVendeOferta,
  SecretariaVendeFinal,
} from './SecretariaVendeSections';
import { SecretariaVendeDepoimentos, SecretariaVendeGarantia } from './SecretariaVendeProvaGarantia';
import { SecretariaVendeFaq } from './SecretariaVendeFaq';
import { SecretariaVendeFooter } from './SecretariaVendeFooter';

import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { ScarcityBar } from '@/components/felice/ui/ScarcityBar';
import { PurchaseToasts } from '@/components/felice/ui/PurchaseToasts';
import { DEADLINE_ISO, WHATSAPP_URL } from './content';

/* ============================================================
   "A SECRETÁRIA QUE VENDE" — landing de vendas (padrão Felice / dourado).
   Curso em vídeo (Dr. Sócrates) que treina a recepção da clínica a
   vender: do primeiro contato ao fechamento do orçamento. Fork
   estrutural do Gestão F4 (ticket com checkout + escassez por deadline).

   Ordem: ScarcityBar → Header → Hero → Números → Problema →
   Método (funil da recepção) → Módulos → Bônus → Plataforma →
   Autoridade → Depoimentos → Oferta → Garantia → FAQ → CTA final → Footer.

   ⚠️ O produto se chama "CRC de Alta Performance" na tela desde o rename de
      10/08/2026, mas a rota e os componentes seguem com o nome antigo — é o
      nome novo que vai no toast de compra.

   ⚠️ TROCAR antes de publicar (em ./content.ts): data do lote e
      depoimentos. Checkout e preço já são os reais.
   ============================================================ */

export function SecretariaVendeLanding() {
  return (
    <div className="felice felice-maestria has-urgency-bar">
      <ScarcityBar
        deadlineIso={DEADLINE_ISO}
        label="A oferta deste lote encerra em"
        vagas="Condição do lote atual"
        viewers
      />
      <SecretariaVendeHeader />

      <main>
        <SecretariaVendeHero />
        <SecretariaVendeNumeros />
        <SecretariaVendeProblema />
        <SecretariaVendeMetodo />

        <div className="wrap">
          <div className="divider" />
        </div>

        <SecretariaVendeModulos />
        <SecretariaVendeBonus />
        <SecretariaVendePlataforma />
        <SecretariaVendeAutoridade />
        <SecretariaVendeDepoimentos />
        <SecretariaVendeOferta />
        <SecretariaVendeGarantia />
        <SecretariaVendeFaq />
        <SecretariaVendeFinal />
      </main>

      <SecretariaVendeFooter />

      <WhatsappFloat href={WHATSAPP_URL} />
      <PurchaseToasts produto="o CRC de Alta Performance" />
      <RevealOnScroll />
    </div>
  );
}
