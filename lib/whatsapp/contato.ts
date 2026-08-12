/* ============================================================
   O WhatsApp de atendimento da Felice Academy — fonte ÚNICA do número.

   ⚠️ Nada a ver com o `client.ts` desta mesma pasta, que é a camada de
   ENVIO pela Cloud API (protótipo da plataforma, mockado). Aqui é o
   número que o visitante procura: o botão flutuante de toda página e a
   mensagem que os 7 questionários montam ao enviar o lead.

   O número morava em 9 constantes `WHATSAPP_NUMERO` e em 8 URLs escritas
   à mão espalhadas pelos `content.ts` — todas com o mesmo valor, o que
   funcionava até alguém precisar trocar e esquecer uma. Agora todas
   apontam para cá.
   ============================================================ */

/** (88) 98139-1199 — só dígitos, com o 55 do país, que é o que o wa.me espera. */
export const WHATSAPP_NUMERO = '5588981391199';

/** Monta o link do wa.me já com a mensagem escrita para o visitante. */
export function whatsappUrl(mensagem: string): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}
