import { CHECKOUT_URL } from '../config';

/* Rodapé compartilhado por todas as páginas do site.

   Os dois links do meio são OPCIONAIS de propósito. Este componente é
   renderizado em 14 lugares — landings, vitrine, páginas legais, área do
   aluno, obrigados de outros produtos — e até 11/08/2026 ele mostrava, em
   todos eles, um "Comprar" fixo apontando para o checkout do Kit Gestão F4
   e um "O método" que só existe como âncora na landing do Kit.

   Agora quem renderiza decide: `checkoutUrl` para vender o produto DAQUELA
   página, `metodoAnchor` só onde a seção existe. Sem props, o rodapé fica
   com marca + links legais, que é o que sempre faz sentido. */
export function Footer({
  checkoutUrl,
  checkoutLabel = 'Comprar',
  metodoAnchor,
}: {
  checkoutUrl?: string;
  checkoutLabel?: string;
  metodoAnchor?: string;
} = {}) {
  return (
    <footer className="felice-footer">
      <div className="wrap">
        <div className="foot-top">
          <a className="brand" href="#topo">
            <span className="badge">F</span>
            <span>
              Felice<small>Academy</small>
            </span>
          </a>
        </div>
        <div className="foot-links">
          {metodoAnchor && <a href={metodoAnchor}>O método</a>}
          {checkoutUrl && (
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              {checkoutLabel}
            </a>
          )}
          <a href="/privacidade">Política de Privacidade</a>
          <a href="/termos">Termos de Uso</a>
        </div>
        <p className="legal">
          <b>CNPJ: 25.307.550/0001-89.</b> Aviso legal: este produto não garante a obtenção de
          resultados. Qualquer referência ao desempenho de uma estratégia ou negócio não deve ser
          interpretada como uma garantia de resultados. Não compartilhamos seu endereço de e-mail
          com ninguém. Você pode cancelar sua inscrição a qualquer momento. Ao se cadastrar, você
          concorda com nossa política de privacidade.
        </p>
        <p className="copy">
          © 2026 Felice Academy — Educação, Gestão e Marketing. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

/** Checkout do Kit — reexportado para a landing do Kit continuar passando
    o próprio link sem importar de dois lugares. */
export { CHECKOUT_URL };
