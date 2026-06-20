'use client';

import { useState } from 'react';
import { Icon } from '../../icons';
import { PILARES, getPilar, type PilarSlug } from '../../data/pilares';
import {
  FORMATOS,
  FORMATO_ICON,
  type Formato,
  type MaterialItem,
} from '../../data/materiais';
import { useStore } from '../../store/PlatformStore';
import { slugify, uid, styleVars } from '../../util';
import { Drawer } from '../ui/Drawer';
import { Field, TextInput, Textarea, Select } from '../ui/fields';

const FORMATO_OPCOES = FORMATOS.filter((f): f is Formato => f !== 'Todos');

type Form = {
  titulo: string;
  formato: Formato;
  pilar: PilarSlug;
  descricao: string;
  tamanho: string;
  selo: '' | 'novo';
  conteudo: string;
};

const blank = (): Form => ({
  titulo: '',
  formato: 'PDF',
  pilar: 'gestao',
  descricao: '',
  tamanho: '',
  selo: '',
  conteudo: '',
});

export function AdminMateriais() {
  const { materiais, saveMaterial, deleteMaterial, getMaterial } = useStore();
  const [open, setOpen] = useState(false);
  const [orig, setOrig] = useState<MaterialItem | null>(null);
  const [form, setForm] = useState<Form>(blank);

  const set = (patch: Partial<Form>) => setForm((f) => ({ ...f, ...patch }));

  const novo = () => {
    setOrig(null);
    setForm(blank());
    setOpen(true);
  };
  const editar = (m: MaterialItem) => {
    setOrig(m);
    setForm({
      titulo: m.titulo,
      formato: m.formato,
      pilar: m.pilar,
      descricao: m.descricao,
      tamanho: m.tamanho ?? '',
      selo: m.selo === 'novo' ? 'novo' : '',
      conteudo: (m.conteudo ?? []).join('\n'),
    });
    setOpen(true);
  };
  const salvar = () => {
    let slug = orig?.slug ?? (slugify(form.titulo) || uid('mat'));
    if (!orig) {
      const base = slug;
      let n = 2;
      while (getMaterial(slug)) slug = `${base}-${n++}`;
    }
    const conteudo = form.conteudo
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    const mat: MaterialItem = {
      ...(orig ?? {}),
      slug,
      titulo: form.titulo.trim() || 'Novo material',
      descricao: form.descricao.trim(),
      formato: form.formato,
      pilar: form.pilar,
      tamanho: form.tamanho.trim() || undefined,
      selo: form.selo === 'novo' ? 'novo' : null,
      conteudo: conteudo.length ? conteudo : undefined,
    };
    saveMaterial(mat);
    setOpen(false);
  };

  return (
    <>
      <div className="admin-page-head">
        <div>
          <span className="eyebrow">Materiais</span>
          <h1>Biblioteca de materiais</h1>
          <p>Scripts, planilhas, PDFs, checklists e kits disponíveis para os alunos.</p>
        </div>
        <button type="button" className="btn btn-primary btn-sm" onClick={novo}>
          <Icon name="plus" size={15} /> Novo material
        </button>
      </div>

      {materiais.length === 0 ? (
        <div className="empty-admin">Nenhum material na biblioteca.</div>
      ) : (
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Material</th>
                <th>Formato</th>
                <th>Pilar</th>
                <th>Tamanho</th>
                <th aria-label="Ações" />
              </tr>
            </thead>
            <tbody>
              {materiais.map((m) => {
                const p = getPilar(m.pilar);
                return (
                  <tr key={m.slug}>
                    <td>
                      <div className="cell-user">
                        <span className="mr-ico" style={styleVars({ '--acc': p.cor, width: 34, height: 34 })}>
                          <Icon name={FORMATO_ICON[m.formato]} size={16} />
                        </span>
                        <div>
                          <div className="cell-title">
                            {m.titulo}
                            {m.interno && (
                              <span className="selo selo--novo" style={{ marginLeft: 8 }}>
                                Kit
                              </span>
                            )}
                          </div>
                          <div className="cell-sub">{m.descricao.slice(0, 54)}…</div>
                        </div>
                      </div>
                    </td>
                    <td>{m.formato}</td>
                    <td>
                      <span className="pilar-badge" style={styleVars({ '--acc': p.cor })}>
                        <span className="pilar-dot" />
                        {p.nome}
                      </span>
                    </td>
                    <td>{m.tamanho ?? '—'}</td>
                    <td className="td-actions">
                      <button type="button" className="icon-btn-sm" aria-label="Editar" onClick={() => editar(m)}>
                        <Icon name="file-text" size={15} />
                      </button>
                      <button
                        type="button"
                        className="icon-btn-sm danger"
                        aria-label="Excluir"
                        onClick={() => {
                          if (window.confirm(`Excluir "${m.titulo}"?`)) deleteMaterial(m.slug);
                        }}
                      >
                        <Icon name="x" size={15} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <Drawer
        open={open}
        title={orig ? 'Editar material' : 'Novo material'}
        onClose={() => setOpen(false)}
        footer={
          <>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => setOpen(false)}>
              Cancelar
            </button>
            <button type="button" className="btn btn-primary btn-sm" onClick={salvar}>
              {orig ? 'Salvar' : 'Criar'}
            </button>
          </>
        }
      >
        <Field label="Título">
          <TextInput value={form.titulo} onChange={(e) => set({ titulo: e.target.value })} placeholder="Ex.: Scripts de agendamento" />
        </Field>
        <Field label="Descrição">
          <Textarea value={form.descricao} onChange={(e) => set({ descricao: e.target.value })} />
        </Field>
        <div className="form-grid">
          <Field label="Formato">
            <Select value={form.formato} onChange={(e) => set({ formato: e.target.value as Formato })}>
              {FORMATO_OPCOES.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Pilar">
            <Select value={form.pilar} onChange={(e) => set({ pilar: e.target.value as PilarSlug })}>
              {PILARES.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.nome}
                </option>
              ))}
            </Select>
          </Field>
        </div>
        <div className="form-grid">
          <Field label="Tamanho / formato" hint="Ex.: PDF · 28 págs">
            <TextInput value={form.tamanho} onChange={(e) => set({ tamanho: e.target.value })} />
          </Field>
          <Field label="Selo">
            <Select value={form.selo} onChange={(e) => set({ selo: e.target.value as Form['selo'] })}>
              <option value="">Nenhum</option>
              <option value="novo">Novo</option>
            </Select>
          </Field>
        </div>
        <Field label="O que está incluído" hint="Um item por linha">
          <Textarea
            value={form.conteudo}
            onChange={(e) => set({ conteudo: e.target.value })}
            placeholder={'Item 1\nItem 2\nItem 3'}
            style={{ minHeight: 120 }}
          />
        </Field>
      </Drawer>
    </>
  );
}
