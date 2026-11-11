import '@/styles/felice.css';
import '@/styles/maestria.css';
import '@/styles/vendas-secretaria.css';

// import { SecretariaVendeHeader } from './SecretariaVendeHeader';
import {
  SecretariaVendeHero,
  SecretariaVendeNumeros,
  SecretariaVendeProblema,
  SecretariaVendeMetodo,
  SecretariaVendeModulos,
  SecretariaVendePlataforma,
  SecretariaVendeAutoridade,
  SecretariaVendeOferta,
  SecretariaVendeFinal,
} from './SecretariaVendeSections';
import { SecretariaVendeDepoimentos, SecretariaVendeGarantia } from './SecretariaVendeProvaGarantia';
import { SecretariaVendeFaq } from './SecretariaVendeFaq';
import { SecretariaVendeFooter } from './SecretariaVendeFooter';

import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { PandaPreconnect } from '@/components/felice/ui/PandaPreconnect';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { WHATSAPP_URL } from './content';

/* ============================================================
   "A SECRETÁRIA QUE VENDE" — landing de vendas (padrão Felice / dourado).
   Curso em vídeo (Dr. Sócrates) que treina a recepção da clínica a
   vender: do primeiro contato ao fechamento do orçamento. Fork
   estrutural do Gestão F4 (ticket com checkout, sem escassez por prazo).

   Ordem: Header → Hero → Números → Problema →
   Método (funil da recepção) → Módulos → Plataforma →
   Autoridade → Depoimentos → Oferta → Garantia → FAQ → CTA final → Footer.

   ⚠️ O produto se chama "CRC de Alta Performance" na tela desde o rename de
      10/08/2026, mas a rota e os componentes seguem com o nome antigo — é o
      nome novo que vai no toast de compra.

   ⚠️ TROCAR antes de publicar (em ./content.ts): depoimentos.
      Checkout e preço já são os reais.
   ============================================================ */

export function SecretariaVendeLanding() {
  return (
    <div
      className="felice felice-maestria has-urgency-bar sv-sem-header"
      style={{ '--urgency-h': '0px' } as React.CSSProperties}
    >
      {/* Sem barra de urgência: `has-urgency-bar` fica só porque o padding-top do hero
          depende dela; `--urgency-h: 0px` deixa o hero como numa página sem barra. */}
      {/* Header escondido a pedido do Leo (16/09/2026), mesmo padrão da
          Masterclass/Maestria. Para trazer de volta: descomente o
          <SecretariaVendeHeader /> e tire `sv-sem-header` do wrapper —
          é essa classe que devolve ao hero o espaço do header fixo. */}
      {/* <SecretariaVendeHeader /> */}

      <main>
        <SecretariaVendeHero />
        <SecretariaVendeNumeros />
        <SecretariaVendeProblema />
        <SecretariaVendeMetodo />

        <div className="wrap">
          <div className="divider" />
        </div>

        <SecretariaVendeModulos />
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
      <PandaPreconnect />
      <RevealOnScroll />
    </div>
  );
}
