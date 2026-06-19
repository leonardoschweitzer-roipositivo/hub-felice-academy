'use client';

import { Fragment, useMemo, useState } from 'react';
import { usePersistentState } from '../usePersistentState';

type Props = { id: string; title?: string; lines: string[] };

/* Detecta campos no formato [Nome da Clínica] e os transforma em inputs
   editáveis; o botão "Copiar" copia o texto já com os valores preenchidos. */
const TOKEN_RE = /\[([^\]]+)\]/g;

function extractTokens(lines: string[]): string[] {
  const set = new Set<string>();
  for (const line of lines) {
    let m: RegExpExecArray | null;
    const re = new RegExp(TOKEN_RE.source, 'g');
    while ((m = re.exec(line)) !== null) set.add(m[1]);
  }
  return Array.from(set);
}

export function ScriptBlock({ id, title, lines }: Props) {
  const tokens = useMemo(() => extractTokens(lines), [lines]);
  const [values, setValues] = usePersistentState<Record<string, string>>(`script:${id}`, {});
  const [copied, setCopied] = useState(false);

  const fill = (text: string) =>
    text.replace(TOKEN_RE, (_, t: string) => values[t]?.trim() || `[${t}]`);

  const copy = async () => {
    const out = lines.map(fill).join('\n');
    try {
      await navigator.clipboard.writeText(out);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard indisponível */
    }
  };

  const renderLine = (line: string, key: number) => {
    const parts: React.ReactNode[] = [];
    let last = 0;
    const re = new RegExp(TOKEN_RE.source, 'g');
    let m: RegExpExecArray | null;
    while ((m = re.exec(line)) !== null) {
      const start = m.index ?? 0;
      if (start > last) parts.push(line.slice(last, start));
      const token = m[1];
      parts.push(
        <input
          key={`${key}-${start}`}
          className="kit-script-field"
          value={values[token] ?? ''}
          placeholder={token}
          aria-label={token}
          onChange={(e) => setValues((v) => ({ ...v, [token]: e.target.value }))}
        />,
      );
      last = start + m[0].length;
    }
    if (last < line.length) parts.push(line.slice(last));
    return (
      <p key={key}>
        {parts.map((p, i) => (
          <Fragment key={i}>{p}</Fragment>
        ))}
      </p>
    );
  };

  return (
    <div className="kit-script">
      <div className="kit-script-head">
        {title && <h4>{title}</h4>}
        <button type="button" className="kit-copy-btn" onClick={copy}>
          {copied ? '✓ Copiado' : 'Copiar'}
        </button>
      </div>
      <div className="kit-script-body">{lines.map(renderLine)}</div>
      {tokens.length > 0 && (
        <p className="kit-script-hint">Preencha os campos dourados — eles entram no texto copiado.</p>
      )}
    </div>
  );
}
