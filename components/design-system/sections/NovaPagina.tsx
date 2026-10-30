import { Secao, Sub } from '../ui/Secao';
import { ANATOMIA_LANDING, CHECKLIST_ROTA, PILHA_CSS } from '../content';

export function NovaPagina() {
  return (
    <Secao
      id="nova-pagina"
      n="07"
      titulo="Como criar uma página nova"
      lead="A página de referência aprovada é a do Kit Gestão F4. Comece copiando a estrutura dela e só então personalize."
    >
      <Sub>Anatomia de uma landing</Sub>
      <ol className="ds-anatomia">
        {ANATOMIA_LANDING.map((s, i) => (
          <li key={s}><span>{String(i + 1).padStart(2, '0')}</span>{s}</li>
        ))}
      </ol>

      <Sub>CSS por tipo de página</Sub>
      <div className="ds-table-wrap">
        <table className="ds-table">
          <thead><tr><th>Tipo</th><th>Folhas (em ordem)</th></tr></thead>
          <tbody>
            {PILHA_CSS.map((p) => <tr key={p.tipo}><td><b>{p.tipo}</b></td><td><code>{p.css}</code></td></tr>)}
          </tbody>
        </table>
      </div>
      <p className="ds-mut">
        Cada folha prefixa os próprios seletores (<code>arq-</code>, <code>pj-</code>, <code>mz-</code>, <code>ds-</code>), porque o wrapper <code>.felice</code> é compartilhado por todas as landings. Regra sem prefixo vaza para o site inteiro.
      </p>

      <Sub>Esqueleto de rota</Sub>
      <pre className="ds-pre">{`import type { Metadata } from 'next';
import { fontVars } from '@/app/fonts';
import { MinhaPagina } from '@/components/minha-pagina/MinhaPagina';

export const metadata: Metadata = {
  title: 'Título — Felice Academy',
  description: 'Descrição de até 160 caracteres.',
};

export default function Page() {
  return (
    <div className={fontVars}>
      <MinhaPagina />
    </div>
  );
}`}</pre>

      <Sub>Checklist de rota nova</Sub>
      <ul className="ds-check">
        {CHECKLIST_ROTA.map((c) => <li key={c}>{c}</li>)}
      </ul>
    </Secao>
  );
}
