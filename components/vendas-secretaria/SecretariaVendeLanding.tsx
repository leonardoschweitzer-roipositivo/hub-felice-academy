import '@/styles/felice.css';
import '@/styles/maestria.css';
import '@/styles/vendas-secretaria.css';

import { SecretariaVendeDeadlineBar } from './SecretariaVendeDeadlineBar';
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
import { WHATSAPP_URL } from './content';

/* ============================================================
   "A SECRETÁRIA QUE VENDE" — landing de vendas (padrão Felice / dourado).
   Curso em vídeo (Dr. Sócrates) que treina a recepção da clínica a
   vender: do primeiro contato ao fechamento do orçamento. Fork
   estrutural do Gestão F4 (ticket com checkout + escassez por deadline).

   Ordem: DeadlineBar → Header → Hero → Números → Problema →
   Método (funil da recepção) → Módulos → Bônus → Plataforma →
   Autoridade → Depoimentos → Oferta → Garantia → FAQ → CTA final → Footer.

   ⚠️ TROCAR antes de publicar (em ./content.ts): link de checkout,
      preço real, data do lote e depoimentos.
   ============================================================ */

export function SecretariaVendeLanding() {
  return (
    <div className="felice felice-maestria has-urgency-bar">
      <SecretariaVendeDeadlineBar />
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
      <RevealOnScroll />
    </div>
  );
}
