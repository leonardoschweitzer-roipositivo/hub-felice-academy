import '@/styles/felice.css';
import '@/styles/crm.css';

import { CrmHeader } from './CrmHeader';
import {
  CrmHero,
  CrmNumeros,
  CrmProblema,
  CrmSolucao,
  CrmComoFunciona,
  CrmAutoridade,
  CrmOferta,
  CrmFinal,
} from './CrmSections';
import { CrmDepoimentos, CrmGarantia } from './CrmProvaGarantia';
import { CrmFaq } from './CrmFaq';

import { Footer } from '@/components/felice/sections/Footer';
import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';

/* ============================================================
   FELICE CRM — landing de vendas (clone estrutural da Gestão F4)
   Produto = NEXUS ROI white-label (software fora de escopo).
   Esta página é apenas a vitrine de conversão dentro do HUB.

   Ordem espelha a F4: Header → Hero → Números → Problema →
   Solução → Como funciona → Autoridade → Depoimentos → Oferta →
   Garantia → FAQ → CTA final → Footer.

   ⚠️ TROCAR antes de publicar: mockups do dashboard, números de
      prova social, modelo comercial/preço, link de checkout,
      depoimentos reais.
   ============================================================ */

export function CrmLanding() {
  return (
    <div className="felice felice-crm">
      <CrmHeader />

      <main>
        <CrmHero />
        <CrmNumeros />
        <CrmProblema />
        <CrmSolucao />
        <CrmComoFunciona />

        <div className="wrap">
          <div className="divider" />
        </div>

        <CrmAutoridade />
        <CrmDepoimentos />
        <CrmOferta />
        <CrmGarantia />
        <CrmFaq />
        <CrmFinal />
      </main>

      <Footer />

      <WhatsappFloat />
      <RevealOnScroll />
    </div>
  );
}
