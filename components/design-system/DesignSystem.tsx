import '@/styles/felice.css';
import '@/styles/design-system.css';

import { FeliceLogo } from '@/components/felice/ui/FeliceLogo';
import { SECOES } from './content';
import { Indice } from './ui/Indice';
import { Marca } from './sections/Marca';
import { Logo } from './sections/Logo';
import { Cor } from './sections/Cor';
import { Tipografia } from './sections/Tipografia';
import { Forma } from './sections/Forma';
import { Componentes } from './sections/Componentes';
import { NovaPagina } from './sections/NovaPagina';
import { Voz } from './sections/Voz';
import { Provas } from './sections/Provas';
import { Instagram } from './sections/Instagram';
import { Pendencias } from './sections/Pendencias';

/* ============================================================
   /design-system — guia interno da marca.

   Duas portas: quem cria páginas (seções 03 a 07) e quem publica no
   Instagram (03, 04, 08, 09 e 10). Documento de trabalho: noindex, fora do
   sitemap, sem link no site e bloqueado para o assistente (BLOQUEADAS).

   Os valores refletem o styles/felice.css em 30/10/2026. O CSS não foi
   alterado: a página define o valor oficial (canon) e lista os duplicados.
   Tudo escopado em `.felice-ds` com classes `ds-` (e `ig-` nos modelos).
   ============================================================ */
export function DesignSystem() {
  return (
    <div className="felice felice-ds">
      <header className="ds-hero">
        <div className="wrap">
          <FeliceLogo height={44} />
          <span className="eyebrow">Documento interno · v1 · 30/10/2026</span>
          <h1>Design System <span className="gold-grad">Felice Academy</span></h1>
          <p className="lead">
            O padrão visual e de voz da marca, para quem constrói páginas e para quem publica no Instagram.
          </p>
          <div className="ds-portas">
            <a className="ds-porta" href="#componentes">
              <span className="eyebrow">Vou criar</span>
              <b>Uma página ou elemento web</b>
              <small>Cor, tipografia, componentes e checklist de rota</small>
            </a>
            <a className="ds-porta" href="#instagram">
              <span className="eyebrow">Vou postar</span>
              <b>No Instagram</b>
              <small>Formatos, modelos para baixar e passo a passo no Canva</small>
            </a>
          </div>
        </div>
      </header>

      <div className="wrap ds-layout">
        <aside className="ds-aside">
          <Indice />
        </aside>
        <main className="ds-main" data-secoes={SECOES.length}>
          <Marca />
          <Logo />
          <Cor />
          <Tipografia />
          <Forma />
          <Componentes />
          <NovaPagina />
          <Voz />
          <Provas />
          <Instagram />
          <Pendencias />
        </main>
      </div>
    </div>
  );
}
