'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Icon } from '../icons';
import { useStore } from '../store/PlatformStore';
import { styleVars, uid } from '../util';
import { whatsapp } from '@/lib/whatsapp/client';
import {
  RESPOSTAS_RAPIDAS,
  formatHora,
  janelaAberta,
  type Conversa,
  type Mensagem,
  type StatusMensagem,
} from '../data/vendas';

const iniciais = (nome: string) =>
  nome
    .replace(/^(Dra?\.?)\s+/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('');

const STATUS_ICON: Record<StatusMensagem, { icon: 'check' | 'check-circle' | 'x'; cor: string }> = {
  enviada: { icon: 'check', cor: 'var(--muted-2)' },
  entregue: { icon: 'check-circle', cor: 'var(--muted)' },
  lida: { icon: 'check-circle', cor: '#5BC6B8' },
  falha: { icon: 'x', cor: '#ff6b6b' },
};

export function Atendimento() {
  const { conversas, getConversa, enviarMensagem, marcarLido } = useStore();
  const [selId, setSelId] = useState<string | null>(conversas[0]?.id ?? null);
  const [texto, setTexto] = useState('');
  const [busca, setBusca] = useState('');
  const [agora, setAgora] = useState(''); // client-only p/ evitar mismatch de hidratação
  const threadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAgora(new Date().toISOString());
  }, [conversas]);

  // marca como lida ao abrir
  useEffect(() => {
    if (selId) marcarLido(selId);
  }, [selId, marcarLido]);

  const sel = selId ? getConversa(selId) : undefined;

  // rola para o fim da thread quando muda de conversa ou chega mensagem
  useEffect(() => {
    const el = threadRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [selId, sel?.mensagens.length]);

  const lista = useMemo(() => {
    const q = busca.trim().toLowerCase();
    return conversas
      .filter((c) => (q ? c.nome.toLowerCase().includes(q) || c.telefone.includes(q) : true))
      .slice()
      .sort((a, b) => {
        const la = a.mensagens[a.mensagens.length - 1]?.hora ?? '';
        const lb = b.mensagens[b.mensagens.length - 1]?.hora ?? '';
        return la < lb ? 1 : -1;
      });
  }, [conversas, busca]);

  const aberta = sel ? janelaAberta(sel, agora || sel.janelaAbertaAte || '') : false;

  const push = async (txt: string, tipo: Mensagem['tipo']) => {
    if (!sel || !txt.trim()) return;
    const res =
      tipo === 'template'
        ? await whatsapp.sendTemplate({ to: sel.telefone, template: 'reengajamento_lead', vars: [sel.nome] })
        : await whatsapp.sendText({ to: sel.telefone, text: txt });
    const msg: Mensagem = {
      id: uid('m'),
      autor: 'atendente',
      texto: txt,
      hora: new Date().toISOString(),
      status: res.status,
      tipo,
    };
    enviarMensagem(sel.id, msg);
    setTexto('');
  };

  return (
    <>
      <div className="plat-page-head vendas-head-row reveal">
        <div>
          <span className="eyebrow">Vendas · Atendimento</span>
          <h1>
            Atendimento no <span className="gold-grad">WhatsApp</span>
          </h1>
          <p className="lead">Converse com leads e clientes em um só lugar.</p>
        </div>
        <span className="wa-demo-badge">
          <Icon name="whatsapp" size={14} /> API Oficial (Meta) · demonstração
        </span>
      </div>

      <div className="wa-inbox reveal d1">
        {/* lista de conversas */}
        <aside className="wa-list">
          <div className="wa-list-search">
            <Icon name="search" size={15} />
            <input
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar conversa…"
            />
          </div>
          <div className="wa-list-body">
            {lista.map((c) => {
              const last = c.mensagens[c.mensagens.length - 1];
              return (
                <button
                  key={c.id}
                  type="button"
                  className={`wa-conv${c.id === selId ? ' is-active' : ''}`}
                  onClick={() => setSelId(c.id)}
                >
                  <span className="wa-avatar">{iniciais(c.nome)}</span>
                  <span className="wa-conv-main">
                    <span className="wa-conv-top">
                      <b>{c.nome}</b>
                      {last && <span className="wa-conv-hora">{formatHora(last.hora)}</span>}
                    </span>
                    <span className="wa-conv-prev">
                      {last
                        ? `${last.autor !== 'cliente' ? 'Você: ' : ''}${last.texto}`
                        : 'Sem mensagens'}
                    </span>
                  </span>
                  {c.naoLidas > 0 && <span className="wa-unread">{c.naoLidas}</span>}
                </button>
              );
            })}
            {!lista.length && <div className="empty-admin">Nenhuma conversa.</div>}
          </div>
        </aside>

        {/* thread */}
        <section className="wa-thread-wrap">
          {sel ? (
            <>
              <header className="wa-thread-head">
                <span className="wa-avatar">{iniciais(sel.nome)}</span>
                <div className="wa-thread-id">
                  <b>{sel.nome}</b>
                  <span>{sel.telefone}</span>
                </div>
                <span className={`status-badge st-${statusClass(sel)}`}>{statusLabel(sel)}</span>
              </header>

              <div className="wa-thread" ref={threadRef}>
                {sel.mensagens.map((m) => (
                  <div
                    key={m.id}
                    className={`wa-bubble wa-from-${m.autor === 'cliente' ? 'cliente' : 'nos'}`}
                  >
                    {m.autor === 'automacao' && (
                      <span className="wa-auto-tag">
                        <Icon name="workflow" size={11} /> automação
                      </span>
                    )}
                    {m.tipo === 'template' && m.autor !== 'automacao' && (
                      <span className="wa-auto-tag">
                        <Icon name="file-text" size={11} /> template
                      </span>
                    )}
                    <span className="wa-bubble-txt">{m.texto}</span>
                    <span className="wa-bubble-meta">
                      {formatHora(m.hora)}
                      {m.status && (
                        <Icon
                          name={STATUS_ICON[m.status].icon}
                          size={13}
                          style={styleVars({ color: STATUS_ICON[m.status].cor })}
                        />
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {aberta ? (
                <div className="wa-composer">
                  <div className="wa-quick">
                    {RESPOSTAS_RAPIDAS.map((r) => (
                      <button
                        key={r.titulo}
                        type="button"
                        className="wa-quick-chip"
                        onClick={() => setTexto(r.texto)}
                        title={r.texto}
                      >
                        {r.titulo}
                      </button>
                    ))}
                  </div>
                  <div className="wa-input-row">
                    <textarea
                      className="wa-input"
                      value={texto}
                      onChange={(e) => setTexto(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          void push(texto, 'texto');
                        }
                      }}
                      placeholder="Escreva uma mensagem…"
                      rows={1}
                    />
                    <button
                      type="button"
                      className="wa-send"
                      aria-label="Enviar"
                      disabled={!texto.trim()}
                      onClick={() => void push(texto, 'texto')}
                    >
                      <Icon name="send" size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="wa-closed">
                  <div className="wa-closed-msg">
                    <Icon name="clock" size={16} />
                    <span>
                      Janela de 24h encerrada. Fora dela, só <strong>templates aprovados (HSM)</strong> podem
                      reabrir a conversa.
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => void push('Oi! Ainda posso te ajudar por aqui? 😊', 'template')}
                  >
                    <Icon name="send" size={15} /> Enviar template de reengajamento
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="wa-empty">
              <Icon name="message-square" size={28} />
              <p>Selecione uma conversa para começar.</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

function statusClass(c: Conversa): string {
  if (c.status === 'resolvido') return 'inativo';
  if (c.status === 'pendente') return 'pendente';
  return 'ativo';
}
function statusLabel(c: Conversa): string {
  return c.status === 'resolvido' ? 'Resolvido' : c.status === 'pendente' ? 'Pendente' : 'Aberto';
}
