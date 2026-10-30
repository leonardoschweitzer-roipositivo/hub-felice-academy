'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/* Moldura de um modelo de arte. O modelo é um componente de tamanho FIXO em
   px (1080 de largura), reduzido na tela com `transform: scale()`. O PNG sai
   do elemento em tamanho real: o `transform` é zerado no clone durante a
   captura. A área segura é um overlay IRMÃO do modelo, fora do nó capturado,
   então nunca entra no PNG. */
export function ModeloFrame({
  titulo, altura, arquivo, seguro, children,
}: {
  titulo: string;
  altura: 1350 | 1920;
  arquivo: string;
  seguro: 'feed' | 'vertical';
  children: ReactNode;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const art = useRef<HTMLDivElement>(null);
  const [escala, setEscala] = useState(0.3);
  const [mostrar, setMostrar] = useState(false);
  const [busy, setBusy] = useState(false);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const medir = () => setEscala(el.clientWidth / 1080);
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  async function baixar(semTexto: boolean) {
    const node = art.current;
    if (!node || busy) return;
    setBusy(true);
    setErro('');
    node.classList.toggle('is-sem-texto', semTexto);
    try {
      // import dinâmico: a biblioteca só carrega no clique
      const { toPng } = await import('html-to-image');
      await document.fonts.ready;
      const url = await toPng(node, {
        width: 1080,
        height: altura,
        pixelRatio: 1,
        cacheBust: true,
        style: { transform: 'none', transformOrigin: 'top left' },
      });
      const a = document.createElement('a');
      a.href = url;
      a.download = `felice-${arquivo}${semTexto ? '-fundo' : ''}-1080x${altura}.png`;
      a.click();
    } catch {
      setErro('Não foi possível gerar o PNG neste navegador.');
    } finally {
      node.classList.remove('is-sem-texto');
      setBusy(false);
    }
  }

  const caixa = { width: 1080, height: altura, transform: `scale(${escala})` };

  return (
    <figure className="ds-ig-modelo">
      <div ref={wrap} className="ds-ig-wrap" style={{ aspectRatio: `1080 / ${altura}` }}>
        <div ref={art} className="ds-ig-art" style={caixa}>{children}</div>
        {mostrar ? (
          <div className={`ds-ig-seguro is-${seguro}`} style={caixa} aria-hidden="true">
            <i />
          </div>
        ) : null}
      </div>
      <figcaption>
        <b>{titulo}</b>
        <small>1080 × {altura}</small>
        <label className="ds-ig-check">
          <input type="checkbox" checked={mostrar} onChange={(e) => setMostrar(e.target.checked)} /> Área segura
        </label>
        <div className="ds-row">
          <button type="button" className="ds-btn-sm" onClick={() => baixar(false)} disabled={busy}>
            {busy ? 'Gerando…' : 'PNG com texto'}
          </button>
          <button type="button" className="ds-btn-sm ds-btn-sm--ghost" onClick={() => baixar(true)} disabled={busy}>
            PNG só fundo
          </button>
        </div>
        {erro ? <small className="ds-erro">{erro}</small> : null}
      </figcaption>
    </figure>
  );
}
