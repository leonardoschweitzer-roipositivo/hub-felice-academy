import { CHECKOUT_URL } from './content';

/* Rodapé da Maestria — mesmas classes/legal do Felice, com links próprios. */
export function MaestriaFooter() {
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
          <a href="#modulos">Módulos</a>
          <a href={CHECKOUT_URL}>Inscrever-se</a>
          <a href="/privacidade">Política de Privacidade</a>
          <a href="/termos">Termos de Uso</a>
        </div>
        <p className="legal">
          <b>CNPJ: 25.307.550/0001-89.</b> Aviso legal: este produto não garante a obtenção de
          resultados. Qualquer referência ao desempenho de uma estratégia, técnica ou procedimento
          não deve ser interpretada como uma garantia de resultados. O conteúdo é educacional e não
          substitui formação, julgamento clínico e responsabilidade profissional do cirurgião-dentista.
          Não compartilhamos seu e-mail com ninguém e você pode cancelar sua inscrição a qualquer
          momento. Ao se cadastrar, você concorda com nossa política de privacidade.
        </p>
        <p className="copy">
          © 2026 Felice Academy — Educação, Gestão e Marketing. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
