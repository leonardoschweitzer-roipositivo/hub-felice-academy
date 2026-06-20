'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Icon } from '../../icons';
import { PILARES, getPilar, type PilarSlug } from '../../data/pilares';
import type { Curso, Nivel, Aula } from '../../data/cursos';
import { useStore } from '../../store/PlatformStore';
import { slugify, uid, styleVars } from '../../util';
import { Field, TextInput, Textarea, Select } from '../ui/fields';

const NIVEIS: Nivel[] = ['Iniciante', 'Intermediário', 'Avançado', 'Essencial'];
const TIPOS: NonNullable<Aula['tipo']>[] = ['video', 'pdf', 'quiz'];

type EA = { _k: string; slug?: string; titulo: string; duracao: string; tipo: NonNullable<Aula['tipo']> };
type EM = { _k: string; titulo: string; aulas: EA[] };

export function CourseEditor({ id }: { id: string }) {
  const store = useStore();
  const novo = id === 'novo';

  if (!store.hydrated) {
    return <div className="empty-admin">Carregando…</div>;
  }
  const existing = novo ? undefined : store.getCurso(id);
  if (!novo && !existing) {
    return (
      <div className="empty-admin">
        Curso não encontrado.{' '}
        <Link href="/plataforma/admin/cursos" className="see-all">
          Voltar
        </Link>
      </div>
    );
  }

  return <CourseEditorForm key={id} existing={existing} novo={novo} />;
}

function CourseEditorForm({ existing, novo }: { existing?: Curso; novo: boolean }) {
  const { saveCurso, getCurso } = useStore();
  const router = useRouter();

  const [titulo, setTitulo] = useState(existing?.titulo ?? '');
  const [subtitulo, setSubtitulo] = useState(existing?.subtitulo ?? '');
  const [descricao, setDescricao] = useState(existing?.descricao ?? '');
  const [pilar, setPilar] = useState<PilarSlug>(existing?.pilar ?? 'clinica');
  const [nivel, setNivel] = useState<Nivel>(existing?.nivel ?? 'Iniciante');
  const [duracao, setDuracao] = useState(existing?.duracao ?? '1h 00min');
  const [instrutor, setInstrutor] = useState(existing?.instrutor ?? 'Equipe Felice');
  const [selo, setSelo] = useState<'' | 'novo' | 'em-alta'>(existing?.selo ?? '');
  const [c1, setC1] = useState(existing?.thumb[0] ?? '#16161b');
  const [c2, setC2] = useState(existing?.thumb[1] ?? getPilar(existing?.pilar ?? 'clinica').cor);

  const [modulos, setModulos] = useState<EM[]>(() =>
    existing
      ? existing.modulos.map((m) => ({
          _k: uid('m'),
          titulo: m.titulo,
          aulas: m.aulas.map((a) => ({
            _k: uid('a'),
            slug: a.slug,
            titulo: a.titulo,
            duracao: a.duracao,
            tipo: a.tipo ?? 'video',
          })),
        }))
      : [
          {
            _k: uid('m'),
            titulo: 'Módulo 1',
            aulas: [{ _k: uid('a'), titulo: '', duracao: '00:00', tipo: 'video' }],
          },
        ],
  );

  const patchModulo = (k: string, patch: Partial<EM>) =>
    setModulos((ms) => ms.map((m) => (m._k === k ? { ...m, ...patch } : m)));
  const addModulo = () =>
    setModulos((ms) => [...ms, { _k: uid('m'), titulo: `Módulo ${ms.length + 1}`, aulas: [] }]);
  const removeModulo = (k: string) => setModulos((ms) => ms.filter((m) => m._k !== k));
  const addAula = (mk: string) =>
    patchModulo(mk, {
      aulas: [
        ...(modulos.find((m) => m._k === mk)?.aulas ?? []),
        { _k: uid('a'), titulo: '', duracao: '00:00', tipo: 'video' },
      ],
    });
  const patchAula = (mk: string, ak: string, patch: Partial<EA>) =>
    setModulos((ms) =>
      ms.map((m) =>
        m._k === mk
          ? { ...m, aulas: m.aulas.map((a) => (a._k === ak ? { ...a, ...patch } : a)) }
          : m,
      ),
    );
  const removeAula = (mk: string, ak: string) =>
    setModulos((ms) =>
      ms.map((m) => (m._k === mk ? { ...m, aulas: m.aulas.filter((a) => a._k !== ak) } : m)),
    );

  const onSave = () => {
    // slug do curso
    let slug = existing?.slug ?? (slugify(titulo) || uid('curso'));
    if (!existing) {
      const base = slug;
      let n = 2;
      while (getCurso(slug)) slug = `${base}-${n++}`;
    }
    // aulas com slugs únicos no curso
    const used = new Set<string>();
    const builtModulos = modulos.map((m) => ({
      titulo: m.titulo.trim() || 'Módulo',
      aulas: m.aulas.map((a) => {
        let s = a.slug || slugify(a.titulo) || uid('aula');
        const base = s;
        let n = 2;
        while (used.has(s)) s = `${base}-${n++}`;
        used.add(s);
        return {
          slug: s,
          titulo: a.titulo.trim() || 'Aula sem título',
          duracao: a.duracao.trim() || '00:00',
          tipo: a.tipo,
        };
      }),
    }));

    const curso: Curso = {
      slug,
      pilar,
      titulo: titulo.trim() || 'Novo curso',
      subtitulo: subtitulo.trim(),
      descricao: descricao.trim(),
      nivel,
      duracao: duracao.trim() || '0min',
      instrutor: instrutor.trim() || 'Equipe Felice',
      selo: selo === '' ? null : selo,
      thumb: [c1, c2],
      modulos: builtModulos,
    };
    saveCurso(curso);
    router.push('/plataforma/admin/cursos');
  };

  const totalAulas = modulos.reduce((acc, m) => acc + m.aulas.length, 0);

  return (
    <>
      <Link href="/plataforma/admin/cursos" className="plat-back">
        <Icon name="chevron-left" size={16} /> Cursos
      </Link>
      <div className="admin-page-head">
        <div>
          <span className="eyebrow">{novo ? 'Novo curso' : 'Editar curso'}</span>
          <h1>{novo ? 'Criar curso' : titulo || 'Curso'}</h1>
        </div>
      </div>

      <div className="editor-grid">
        {/* Coluna principal */}
        <div>
          <Field label="Título do curso">
            <TextInput value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Ex.: Masterclass de Implantes" />
          </Field>
          <Field label="Subtítulo">
            <TextInput value={subtitulo} onChange={(e) => setSubtitulo(e.target.value)} placeholder="Uma linha de apoio" />
          </Field>
          <Field label="Descrição">
            <Textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Sobre o que é este curso…" />
          </Field>

          <div className="form-section-title">Conteúdo · {modulos.length} módulos · {totalAulas} aulas</div>

          {modulos.map((m, mi) => (
            <div className="module-edit" key={m._k}>
              <div className="module-edit-head">
                <span className="m-idx" style={{ color: 'var(--gold)' }}>{String(mi + 1).padStart(2, '0')}</span>
                <input
                  value={m.titulo}
                  onChange={(e) => patchModulo(m._k, { titulo: e.target.value })}
                  placeholder="Título do módulo"
                />
                <button
                  type="button"
                  className="icon-btn-sm danger"
                  aria-label="Remover módulo"
                  onClick={() => removeModulo(m._k)}
                >
                  <Icon name="x" size={15} />
                </button>
              </div>
              {m.aulas.map((a) => (
                <div className="aula-edit-row" key={a._k}>
                  <span className="ae-grip">
                    <Icon name="play" size={13} />
                  </span>
                  <input
                    className="ae-title"
                    value={a.titulo}
                    onChange={(e) => patchAula(m._k, a._k, { titulo: e.target.value })}
                    placeholder="Título da aula"
                  />
                  <select
                    className="form-input"
                    style={{ width: 92, padding: '8px 10px', fontSize: '0.8rem' }}
                    value={a.tipo}
                    onChange={(e) => patchAula(m._k, a._k, { tipo: e.target.value as EA['tipo'] })}
                  >
                    {TIPOS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <input
                    className="ae-dur"
                    value={a.duracao}
                    onChange={(e) => patchAula(m._k, a._k, { duracao: e.target.value })}
                    placeholder="12:00"
                  />
                  <button
                    type="button"
                    className="icon-btn-sm danger"
                    aria-label="Remover aula"
                    onClick={() => removeAula(m._k, a._k)}
                  >
                    <Icon name="x" size={14} />
                  </button>
                </div>
              ))}
              <div style={{ padding: 12 }}>
                <button type="button" className="add-row" onClick={() => addAula(m._k)}>
                  <Icon name="plus" size={14} /> Adicionar aula
                </button>
              </div>
            </div>
          ))}

          <button type="button" className="add-row" onClick={addModulo}>
            <Icon name="plus" size={15} /> Adicionar módulo
          </button>
        </div>

        {/* Aside: configurações + ações */}
        <aside className="editor-aside">
          <div className="aside-card">
            <h4>Configurações</h4>
            <Field label="Pilar">
              <Select value={pilar} onChange={(e) => setPilar(e.target.value as PilarSlug)}>
                {PILARES.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.nome}
                  </option>
                ))}
              </Select>
            </Field>
            <div className="form-grid">
              <Field label="Nível">
                <Select value={nivel} onChange={(e) => setNivel(e.target.value as Nivel)}>
                  {NIVEIS.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Selo">
                <Select value={selo} onChange={(e) => setSelo(e.target.value as typeof selo)}>
                  <option value="">Nenhum</option>
                  <option value="novo">Novo</option>
                  <option value="em-alta">Em alta</option>
                </Select>
              </Field>
            </div>
            <div className="form-grid">
              <Field label="Duração total">
                <TextInput value={duracao} onChange={(e) => setDuracao(e.target.value)} placeholder="3h 20min" />
              </Field>
              <Field label="Instrutor">
                <TextInput value={instrutor} onChange={(e) => setInstrutor(e.target.value)} />
              </Field>
            </div>
          </div>

          <div className="aside-card">
            <h4>Capa (gradiente)</h4>
            <div
              className="thumb-preview"
              style={styleVars({ background: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)` })}
            >
              <Icon name={getPilar(pilar).icone} size={30} />
            </div>
            <div className="swatch-row" style={{ marginTop: 14 }}>
              <input type="color" className="swatch" value={c1} onChange={(e) => setC1(e.target.value)} aria-label="Cor inicial" />
              <input type="color" className="swatch" value={c2} onChange={(e) => setC2(e.target.value)} aria-label="Cor final" />
              <span style={{ fontSize: '0.78rem', color: 'var(--muted-2)' }}>De → para</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <button type="button" className="btn btn-primary btn-block" onClick={onSave}>
              <Icon name="check" size={16} /> Salvar curso
            </button>
            <Link href="/plataforma/admin/cursos" className="btn btn-ghost btn-sm">
              Cancelar
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
