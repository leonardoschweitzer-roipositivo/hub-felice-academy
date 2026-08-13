'use client';

/* ============================================================
   O micro-consentimento — duas vias, ANTES de qualquer campo.

   Sem ele, um formulário aparece na cara de quem só queria tirar uma
   dúvida. Perguntar primeiro custa um toque e devolve o controle: quem
   diz "continuar conversando" segue conversando, e a Sônia não pede
   contato de novo (o marcador só é aceito uma vez por conversa).
   ============================================================ */

export function ConsentimentoLead({
  produtoNome,
  onAceitar,
  onRecusar,
}: {
  produtoNome?: string;
  onAceitar: () => void;
  onRecusar: () => void;
}) {
  return (
    <div className="fia-consent">
      <p className="fia-consent-txt">
        {produtoNome
          ? `Quer que a equipe da Felice te chame no WhatsApp sobre ${produtoNome}?`
          : 'Quer que a equipe da Felice continue essa conversa com você no WhatsApp?'}
      </p>
      <div className="fia-consent-acoes">
        <button type="button" className="fia-btn fia-btn--primario" onClick={onAceitar}>
          Sim, quero falar com a equipe
        </button>
        <button type="button" className="fia-btn" onClick={onRecusar}>
          Continuar conversando
        </button>
      </div>
    </div>
  );
}
