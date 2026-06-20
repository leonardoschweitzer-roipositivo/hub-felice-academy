import '@/styles/felice.css';
import { Footer } from '@/components/felice/sections/Footer';

type LegalPageProps = {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
};

/**
 * Casca compartilhada das páginas legais (Privacidade / Termos).
 * Reaproveita o tema isolado `.felice` e o rodapé da landing.
 */
export function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <div className="felice legal-page">
      <header className="legal-topbar">
        <div className="wrap">
          <a className="brand" href="/produtos/kitgestaof4">
            <span className="badge">F</span>
            <span>
              Felice<small>Academy</small>
            </span>
          </a>
          <a className="legal-back" href="/produtos/kitgestaof4">
            ← Voltar
          </a>
        </div>
      </header>

      <main className="legal-doc">
        <div className="wrap">
          <div className="doc-inner">
            <h1 className="display">{title}</h1>
            <p className="doc-updated">Última atualização: {updatedAt}</p>
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
