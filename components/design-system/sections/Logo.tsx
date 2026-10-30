import { FeliceLogo } from '@/components/felice/ui/FeliceLogo';
import { Secao, Sub } from '../ui/Secao';
import { Validar } from '../ui/Selo';

export function Logo() {
  return (
    <Secao
      id="logo"
      n="02"
      titulo="Logo"
      lead="Um único arquivo: &quot;Felice&quot; em branco e &quot;ACADEMY&quot; em dourado. Por ser branco, só funciona sobre fundo escuro."
    >
      <div className="ds-grid ds-grid--2">
        <div className="ds-logo-stage">
          <FeliceLogo height={96} />
        </div>
        <div className="ds-card">
          <span className="eyebrow">Arquivo</span>
          <p><code>public/images/logo-felice-academy.png</code></p>
          <p className="ds-mut">480 × 221 px, com transparência.</p>
          <a className="btn btn-primary" href="/images/logo-felice-academy.png" download>
            Baixar PNG <span className="arrow">→</span>
          </a>
          <p className="ds-mut">Na web, use sempre o componente <code>FeliceLogo</code>.</p>
        </div>
      </div>

      <div className="ds-grid ds-grid--2">
        <div className="ds-card">
          <span className="eyebrow">Regras</span>
          <ul className="ds-list">
            <li>Só sobre fundo escuro (Ink ou foto escurecida).</li>
            <li>Altura mínima: 28px na web e 64px em arte de 1080px <Validar /></li>
            <li>Área de respiro: a altura do &quot;A&quot; de ACADEMY, em todos os lados <Validar /></li>
            <li>No Instagram, posição fixa no rodapé.</li>
          </ul>
        </div>
        <div className="ds-card ds-card--no">
          <span className="eyebrow">Proibido</span>
          <ul className="ds-list">
            <li>Recolorir ou aplicar sombra.</li>
            <li>Esticar ou girar.</li>
            <li>Usar sobre foto clara ou fundo dourado.</li>
            <li>Usar o selo &quot;F&quot; antigo (ainda no favicon e no OG).</li>
          </ul>
        </div>
      </div>
      <Sub>Tamanhos</Sub>
      <div className="ds-logo-sizes">
        {[28, 40, 64].map((h) => (
          <div key={h}><FeliceLogo height={h} /><small>{h}px</small></div>
        ))}
      </div>
    </Secao>
  );
}
