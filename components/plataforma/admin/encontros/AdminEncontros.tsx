'use client';

import { useState } from 'react';
import { Icon } from '../../icons';
import { PILARES, getPilar, type PilarSlug } from '../../data/pilares';
import { MENTORES, statusEncontro, type Encontro } from '../../data/mentoria';
import { useStore } from '../../store/PlatformStore';
import { uid, styleVars } from '../../util';
import { Drawer } from '../ui/Drawer';
import { Field, TextInput, Textarea, Select, StatusBadge } from '../ui/fields';

type Unidade = 'min' | 'h' | 'd';
const FATOR: Record<Unidade, number> = { min: 1, h: 60, d: 1440 };

type Form = {
  id?: string;
  titulo: string;
  descricao: string;
  mentor: string;
  tema: string;
  pilar: PilarSlug;
  quando: number;
  unidade: Unidade;
  duracaoMin: number;
};

const STATUS_LABEL: Record<string, string> = {
  'ao-vivo': 'ao vivo',
  agendado: 'agendado',
  encerrado: 'encerrado',
};

function offsetToWhen(offsetMin: number): { quando: number; unidade: Unidade } {
  const abs = Math.abs(offsetMin);
  if (abs >= 1440) return { quando: Math.round(offsetMin / 1440), unidade: 'd' };
  if (abs >= 60) return { quando: Math.round(offsetMin / 60), unidade: 'h' };
  return { quando: Math.round(offsetMin), unidade: 'min' };
}

const blank = (): Form => ({
  titulo: '',
  descricao: '',
  mentor: MENTORES[0].nome,
  tema: '',
  pilar: 'clinica',
  quando: 2,
  unidade: 'd',
  duracaoMin: 60,
});

export function AdminEncontros() {
  const { encontros, saveEncontro, deleteEncontro } = useStore();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Form>(blank);

  const ordenados = [...encontros].sort((a, b) => a.offsetMin - b.offsetMin);

  const novo = () => {
    setForm(blank());
    setOpen(true);
  };
  const editar = (e: Encontro) => {
    setForm({
      id: e.id,
      titulo: e.titulo,
      descricao: e.descricao,
      mentor: e.mentor,
      tema: e.tema,
      pilar: e.pilar,
      duracaoMin: e.duracaoMin,
      ...offsetToWhen(e.offsetMin),
    });
    setOpen(true);
  };
  const salvar = () => {
    const e: Encontro = {
      id: form.id ?? uid('enc'),
      titulo: form.titulo.trim() || 'Novo encontro',
      descricao: form.descricao.trim(),
      mentor: form.mentor,
      tema: form.tema.trim() || 'Mentoria',
      pilar: form.pilar,
      offsetMin: form.quando * FATOR[form.unidade],
      duracaoMin: Number(form.duracaoMin) || 60,
    };
    saveEncontro(e);
    setOpen(false);
  };

  const set = (patch: Partial<Form>) => setForm((f) => ({ ...f, ...patch }));

  return (
    <>
      <div className="admin-page-head">
        <div>
          <span className="eyebrow">Mentoria</span>
          <h1>Encontros ao vivo</h1>
          <p>Agende e gerencie os encontros, hot seats e calls da mentoria.</p>
        </div>
        <button type="button" className="btn btn-primary btn-sm" onClick={novo}>
          <Icon name="plus" size={15} /> Agendar encontro
        </button>
      </div>

      {ordenados.length === 0 ? (
        <div className="empty-admin">Nenhum encontro agendado.</div>
      ) : (
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Encontro</th>
                <th>Mentor</th>
                <th>Pilar</th>
                <th>Duração</th>
                <th>Status</th>
                <th aria-label="Ações" />
              </tr>
            </thead>
            <tbody>
              {ordenados.map((e) => {
                const p = getPilar(e.pilar);
                const st = statusEncontro(e);
                return (
                  <tr key={e.id}>
                    <td>
                      <div className="cell-title">{e.titulo}</div>
                      <div className="cell-sub">{e.tema}</div>
                    </td>
                    <td>{e.mentor}</td>
                    <td>
                      <span className="pilar-badge" style={styleVars({ '--acc': p.cor })}>
                        <span className="pilar-dot" />
                        {p.nome}
                      </span>
                    </td>
                    <td>{e.duracaoMin}min</td>
                    <td>
                      <StatusBadge status={st} label={STATUS_LABEL[st]} />
                    </td>
                    <td className="td-actions">
                      <button type="button" className="icon-btn-sm" aria-label="Editar" onClick={() => editar(e)}>
                        <Icon name="file-text" size={15} />
                      </button>
                      <button
                        type="button"
                        className="icon-btn-sm danger"
                        aria-label="Excluir"
                        onClick={() => {
                          if (window.confirm(`Excluir o encontro "${e.titulo}"?`)) deleteEncontro(e.id);
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
        title={form.id ? 'Editar encontro' : 'Agendar encontro'}
        onClose={() => setOpen(false)}
        footer={
          <>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => setOpen(false)}>
              Cancelar
            </button>
            <button type="button" className="btn btn-primary btn-sm" onClick={salvar}>
              {form.id ? 'Salvar' : 'Agendar'}
            </button>
          </>
        }
      >
        <Field label="Título">
          <TextInput value={form.titulo} onChange={(e) => set({ titulo: e.target.value })} placeholder="Ex.: Hot Seat de casos clínicos" />
        </Field>
        <Field label="Descrição">
          <Textarea value={form.descricao} onChange={(e) => set({ descricao: e.target.value })} />
        </Field>
        <div className="form-grid">
          <Field label="Mentor">
            <Select value={form.mentor} onChange={(e) => set({ mentor: e.target.value })}>
              {MENTORES.map((m) => (
                <option key={m.nome} value={m.nome}>
                  {m.nome}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Tema">
            <TextInput value={form.tema} onChange={(e) => set({ tema: e.target.value })} placeholder="Ex.: Casos clínicos" />
          </Field>
        </div>
        <Field label="Pilar">
          <Select value={form.pilar} onChange={(e) => set({ pilar: e.target.value as PilarSlug })}>
            {PILARES.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.nome}
              </option>
            ))}
          </Select>
        </Field>
        <div className="form-grid">
          <Field label="Começa em" hint="A partir de agora">
            <div style={{ display: 'flex', gap: 8 }}>
              <TextInput
                type="number"
                value={form.quando}
                onChange={(e) => set({ quando: Number(e.target.value) })}
                style={{ width: 90 }}
              />
              <Select value={form.unidade} onChange={(e) => set({ unidade: e.target.value as Unidade })}>
                <option value="min">minutos</option>
                <option value="h">horas</option>
                <option value="d">dias</option>
              </Select>
            </div>
          </Field>
          <Field label="Duração (min)">
            <TextInput
              type="number"
              value={form.duracaoMin}
              onChange={(e) => set({ duracaoMin: Number(e.target.value) })}
            />
          </Field>
        </div>
      </Drawer>
    </>
  );
}
