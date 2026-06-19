'use client';

import { useMemo, useState } from 'react';
import { FAQS } from '../content/toolsData';

const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

/** Matriz de FAQs pesquisável: dúvida → resposta humanizada → jargão a evitar. */
export function FaqMatrix() {
  const [q, setQ] = useState('');
  const results = useMemo(() => {
    const t = norm(q.trim());
    if (!t) return FAQS;
    return FAQS.filter((f) => norm(`${f.duvida} ${f.resposta}`).includes(t));
  }, [q]);

  return (
    <div className="kit-faq">
      <input
        type="search"
        className="kit-faq-search"
        placeholder="Buscar dúvida do paciente…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Buscar FAQ"
      />
      <div className="kit-faq-list">
        {results.map((f, i) => (
          <details key={i} className="kit-faq-item">
            <summary>{f.duvida}</summary>
            <p className="kit-faq-answer">{f.resposta}</p>
            <p className="kit-faq-jargon">{f.jargao}</p>
          </details>
        ))}
        {results.length === 0 && <p className="kit-search-empty">Nenhuma dúvida encontrada.</p>}
      </div>
    </div>
  );
}
