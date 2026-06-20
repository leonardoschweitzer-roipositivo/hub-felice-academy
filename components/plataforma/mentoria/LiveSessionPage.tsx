'use client';

import Link from 'next/link';
import { Icon } from '../icons';
import { getPilar } from '../data/pilares';
import { statusEncontro } from '../data/mentoria';
import { useStore } from '../store/PlatformStore';
import { Countdown } from '../Countdown';
import { styleVars } from '../util';

const CHAT = [
  { autor: 'Camila R.', iniciais: 'CR', texto: 'Boa noite a todos! Ansiosa por essa 🙌' },
  { autor: 'Bruno L.', iniciais: 'BL', texto: 'Dr., dá pra rever o caso da maxila atrófica?' },
  { autor: 'Mentor', iniciais: 'ST', texto: 'Claro! Já já chego nesse caso, Bruno.', mentor: true },
  { autor: 'Paula S.', iniciais: 'PS', texto: 'Aplicando tudo na clínica essa semana 🔥' },
];

export function LiveSessionPage({ id }: { id: string }) {
  const { getEncontro, materiais } = useStore();
  const encontro = getEncontro(id);

  if (!encontro) {
    return (
      <div className="empty">
        <p>Encontro não encontrado.</p>
        <Link href="/plataforma/mentoria" className="see-all">
          Voltar à mentoria
        </Link>
      </div>
    );
  }

  const pilar = getPilar(encontro.pilar);
  const status = statusEncontro(encontro);
  const aoVivo = status === 'ao-vivo';
  const materiaisDoEncontro = materiais.filter((m) => m.pilar === encontro.pilar).slice(0, 2);

  return (
    <div style={styleVars({ '--acc': pilar.cor })}>
      <Link href="/plataforma/mentoria" className="plat-back">
        <Icon name="chevron-left" size={16} /> Mentoria
      </Link>

      <div className="player-layout">
        <div>
          <div
            className="player-stage"
            style={styleVars({ '--c1': '#15110d', '--c2': '#0c0c0e' })}
          >
            {aoVivo ? (
              <button type="button" className="player-play" aria-label="Assistir ao vivo">
                <Icon name="play" size={32} />
              </button>
            ) : (
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <span className="eyebrow" style={{ justifyContent: 'center' }}>
                  Começa em
                </span>
                <div style={{ marginTop: 12 }}>
                  <Countdown offsetMin={encontro.offsetMin} />
                </div>
              </div>
            )}
            <div className="stage-caption">
              {aoVivo ? (
                <span className="badge-live">
                  <span className="live-dot" /> Ao vivo
                </span>
              ) : (
                <span className="sc-eyebrow">{pilar.nome} · Encontro agendado</span>
              )}
              <h2>{encontro.titulo}</h2>
            </div>
          </div>

          <div className="player-bar">
            <span className="mentor-chip">
              <span className="m-av">
                {encontro.mentor
                  .split(' ')
                  .filter((w) => w.length > 2)
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join('')}
              </span>
              <span className="m-name">
                <b>{encontro.mentor}</b>
                <span>
                  {encontro.tema} · {encontro.duracaoMin}min
                </span>
              </span>
            </span>
            <div className="pb-spacer" />
            {!aoVivo && (
              <button type="button" className="btn btn-ghost btn-sm">
                <Icon name="plus" size={15} /> Adicionar ao calendário
              </button>
            )}
          </div>

          <div className="player-tabs" style={{ pointerEvents: 'none' }}>
            <button type="button" className="player-tab is-active">
              Sobre o encontro
            </button>
          </div>
          <div className="player-panel">
            <p>{encontro.descricao}</p>
            {materiaisDoEncontro.length > 0 && (
              <>
                <h4 style={{ color: 'var(--cream)', margin: '18px 0 10px' }}>Materiais de apoio</h4>
                <ul className="aside-list" style={{ gap: 12 }}>
                  {materiaisDoEncontro.map((m) => (
                    <li key={m.slug}>
                      <Link href={m.href ?? `/plataforma/materiais/${m.slug}`}>
                        <Icon name="download" size={16} /> {m.titulo}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Chat */}
        <aside className="player-aside">
          <div className="player-aside-head">
            <h4>{aoVivo ? 'Chat ao vivo' : 'Chat do encontro'}</h4>
            <span>{aoVivo ? '34 pessoas online' : 'Abre quando começar'}</span>
          </div>
          <div className="player-aside-list" style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {CHAT.map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 10 }}>
                <span className="post-avatar" style={{ width: 32, height: 32, fontSize: '0.7rem', flexShrink: 0 }}>
                  {c.iniciais}
                </span>
                <div>
                  <b
                    style={{
                      fontSize: '0.78rem',
                      color: c.mentor ? 'var(--gold-bright)' : 'var(--cream)',
                    }}
                  >
                    {c.autor}
                  </b>
                  <p style={{ fontSize: '0.86rem', color: 'var(--muted)', marginTop: 2 }}>{c.texto}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="composer" style={{ margin: 14, borderRadius: 12 }}>
            <textarea placeholder={aoVivo ? 'Enviar mensagem…' : 'Chat indisponível'} disabled={!aoVivo} />
          </div>
        </aside>
      </div>
    </div>
  );
}
