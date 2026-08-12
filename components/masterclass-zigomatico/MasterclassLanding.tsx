import '@/styles/felice.css';
import '@/styles/maestria.css';
import '@/styles/masterclass.css';

// import { MasterclassHeader } from './MasterclassHeader';
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
import { ScarcityBar } from '@/components/felice/ui/ScarcityBar';
import { DEADLINE_ISO, HERO, WHATSAPP_URL } from './content';

/* ============================================================
   MASTERCLASS ZIGOMÁTICO DESCOMPLICADO — landing de vendas.
   Padrão dourado/escuro Felice (fork da Maestria). Ticket baixo com
   checkout: acesso único de R$ 67. Hero em VSL + countdown.

   Ordem (espelha a página antiga, no nosso visual):
   ScarcityBar → Header → Hero(VSL) → Faixa-frase → Quem é o Dr.Sócrates →
   O que vai aprender → Faixa-CTA → Casos → Destaque → Depoimentos →
   Bônus → Investimento → Garantia → Sobre mim → Stats →
   FAQ → CTA final → Footer.

   ⚠️ TROCAR antes de publicar (em ./content.ts): DEADLINE_ISO — a data de
      hoje é provisória.
   ============================================================ */

export function MasterclassLanding() {
  return (
    <div className="felice felice-maestria has-urgency-bar mc-sem-header">
      {/* Sem linha de vagas: a masterclass é acesso único, não tem turma. */}
      <ScarcityBar deadlineIso={DEADLINE_ISO} label={HERO.countdownLabel} viewers />
      {/* Header escondido a pedido do Leo (10/08/2026). Para trazer de volta:
          descomente o <MasterclassHeader /> e tire `mc-sem-header` do wrapper
          — é essa classe que devolve ao hero o espaço do header fixo. */}
      {/* <MasterclassHeader /> */}

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
