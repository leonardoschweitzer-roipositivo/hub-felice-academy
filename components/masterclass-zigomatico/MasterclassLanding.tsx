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
import { PandaPreconnect } from '@/components/felice/ui/PandaPreconnect';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { WHATSAPP_URL } from './content';

/* ============================================================
   MASTERCLASS ZIGOMÁTICO DESCOMPLICADO — landing de vendas.
   Padrão dourado/escuro Felice (fork da Maestria). Ticket baixo com
   checkout: acesso único de R$ 67. Hero em VSL, sem contador.

   Ordem (espelha a página antiga, no nosso visual):
   Header → Hero(VSL) → Faixa-frase → Quem é o Dr.Sócrates →
   O que vai aprender → Faixa-CTA → Casos → Destaque → Depoimentos →
   Bônus → Investimento → Garantia → Sobre mim → Stats →
   FAQ → CTA final → Footer.
   ============================================================ */

export function MasterclassLanding() {
  return (
    <div
      className="felice felice-maestria has-urgency-bar mc-sem-header"
      style={{ '--urgency-h': '0px' } as React.CSSProperties}
    >
      {/* Sem barra de urgência: `has-urgency-bar` fica só porque o padding-top do hero
          depende dela; `--urgency-h: 0px` deixa o hero como numa página sem barra. */}
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
      <PandaPreconnect />
      <RevealOnScroll />
    </div>
  );
}
