import '@/styles/felice.css';
import '@/styles/maestria.css';
import '@/styles/masterclass.css';

import { MasterclassDeadlineBar } from './MasterclassDeadlineBar';
import { MasterclassHeader } from './MasterclassHeader';
import {
  MasterclassHero,
  MasterclassFaixaFrase,
  MasterclassProblema,
  MasterclassAprendizado,
  MasterclassFaixaCta,
  MasterclassDestaque,
  MasterclassBonus,
  MasterclassComparativo,
  MasterclassAutoridade,
  MasterclassStats,
  MasterclassFinal,
} from './MasterclassSections';
import { MasterclassCasos } from './MasterclassCasos';
import { MasterclassDepoimentos, MasterclassGarantia } from './MasterclassProvaGarantia';
import { MasterclassFaq } from './MasterclassFaq';
import { MasterclassFooter } from './MasterclassFooter';

import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { PurchaseToasts } from '@/components/felice/ui/PurchaseToasts';
import { WHATSAPP_URL } from './content';

/* ============================================================
   MASTERCLASS ZIGOMÁTICO DESCOMPLICADO — landing de vendas.
   Padrão dourado/escuro Felice (fork da Maestria). Ticket baixo com
   checkout: acesso único de R$ 67. Hero em VSL + countdown.

   Ordem (espelha a página antiga, no nosso visual):
   DeadlineBar → Header → Hero(VSL) → Faixa-frase → Quem é o Dr.Sócrates →
   O que vai aprender → Faixa-CTA → Casos → Destaque → Depoimentos →
   Bônus → Investimento → Garantia → Sobre mim → Stats →
   FAQ → CTA final → Footer.

   ⚠️ TROCAR antes de publicar (em ./content.ts): DEADLINE_ISO — a data de
      hoje é provisória.
   ============================================================ */

export function MasterclassLanding() {
  return (
    <div className="felice felice-maestria has-urgency-bar">
      <MasterclassDeadlineBar />
      <MasterclassHeader />

      <main>
        <MasterclassHero />
        <MasterclassFaixaFrase />
        <MasterclassProblema />
        <MasterclassAprendizado />
        <MasterclassFaixaCta />
        <MasterclassCasos />
        <MasterclassDestaque />
        <MasterclassDepoimentos />
        <MasterclassBonus />
        <MasterclassComparativo />
        <MasterclassGarantia />
        <MasterclassAutoridade />
        <MasterclassStats />
        <MasterclassFaq />
        <MasterclassFinal />
      </main>

      <MasterclassFooter />

      <WhatsappFloat href={WHATSAPP_URL} />
      <PurchaseToasts produto="a Masterclass" />
      <RevealOnScroll />
    </div>
  );
}
