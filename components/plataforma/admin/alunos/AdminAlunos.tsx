'use client';

import { useState } from 'react';
import { Icon } from '../../icons';
import {
  PLANOS,
  STATUS_ALUNO,
  type AdminAluno,
  type Plano,
  type StatusAluno,
} from '../../data/alunos';
import { useStore } from '../../store/PlatformStore';
import { uid } from '../../util';
import { Drawer } from '../ui/Drawer';
import { Field, TextInput, Select, StatusBadge } from '../ui/fields';

function iniciais(nome: string): string {
  const ws = nome.split(' ').filter((w) => w.length > 2 && !/^dr/i.test(w));
  return (ws.slice(0, 2).map((w) => w[0]).join('') || nome.slice(0, 2)).toUpperCase();
}

type Form = {
  id?: string;
  nome: string;
  email: string;
  plano: Plano;
  status: StatusAluno;
  desde: string;
  ultimoAcesso: string;
  cursosConcluidos: number;
};

const blank = (): Form => ({
  nome: '',
  email: '',
  plano: 'Assinatura Cursos',
  status: 'pendente',
  desde: 'jun 2026',
  ultimoAcesso: '—',
  cursosConcluidos: 0,
});

export function AdminAlunos() {
  const { alunos, saveAluno, deleteAluno } = useStore();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Form>(blank);
  const [q, setQ] = useState('');

  const set = (patch: Partial<Form>) => setForm((f) => ({ ...f, ...patch }));
  const filtrados = alunos.filter(
    (a) =>
      a.nome.toLowerCase().includes(q.toLowerCase()) ||
      a.email.toLowerCase().includes(q.toLowerCase()),
  );

  const novo = () => {
    setForm(blank());
    setOpen(true);
  };
  const editar = (a: AdminAluno) => {
    setForm({ ...a });
    setOpen(true);
  };
  const salvar = () => {
    const aluno: AdminAluno = {
      id: form.id ?? uid('al'),
      nome: form.nome.trim() || 'Novo aluno',
      email: form.email.trim(),
      iniciais: iniciais(form.nome.trim() || 'Novo aluno'),
      plano: form.plano,
      status: form.status,
      desde: form.desde.trim() || '—',
      ultimoAcesso: form.ultimoAcesso.trim() || '—',
      cursosConcluidos: Number(form.cursosConcluidos) || 0,
    };
    saveAluno(aluno);
    setOpen(false);
  };

  return (
    <>
      <div className="admin-page-head">
        <div>
          <span className="eyebrow">Alunos</span>
          <h1>Gerenciar alunos</h1>
          <p>Acompanhe acessos, planos e status dos alunos da plataforma.</p>
        </div>
        <button type="button" className="btn btn-primary btn-sm" onClick={novo}>
          <Icon name="plus" size={15} /> Convidar aluno
        </button>
      </div>

      <div className="admin-toolbar">
        <span className="at-search">
          <Icon name="search" size={16} />
          <input
            type="search"
            placeholder="Buscar por nome ou e-mail…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </span>
        <span className="at-spacer" />
        <span style={{ fontSize: '0.85rem', color: 'var(--muted-2)' }}>
          {filtrados.length} aluno{filtrados.length === 1 ? '' : 's'}
        </span>
      </div>

      {filtrados.length === 0 ? (
        <div className="empty-admin">Nenhum aluno encontrado.</div>
      ) : (
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Aluno</th>
                <th>Plano</th>
                <th>Status</th>
                <th>Desde</th>
                <th>Último acesso</th>
                <th>Cursos</th>
                <th aria-label="Ações" />
              </tr>
            </thead>
            <tbody>
              {filtrados.map((a) => (
                <tr key={a.id}>
                  <td>
                    <div className="cell-user">
                      <span className="post-avatar">{a.iniciais}</span>
                      <div>
                        <div className="cell-title">{a.nome}</div>
                        <div className="cell-sub">{a.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{a.plano}</td>
                  <td>
                    <StatusBadge status={a.status} />
                  </td>
                  <td>{a.desde}</td>
                  <td>{a.ultimoAcesso}</td>
                  <td>{a.cursosConcluidos}</td>
                  <td className="td-actions">
                    <button type="button" className="icon-btn-sm" aria-label="Editar" onClick={() => editar(a)}>
                      <Icon name="file-text" size={15} />
                    </button>
                    <button
                      type="button"
                      className="icon-btn-sm danger"
                      aria-label="Excluir"
                      onClick={() => {
                        if (window.confirm(`Remover ${a.nome}?`)) deleteAluno(a.id);
                      }}
                    >
                      <Icon name="x" size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Drawer
        open={open}
        title={form.id ? 'Editar aluno' : 'Convidar aluno'}
        onClose={() => setOpen(false)}
        footer={
          <>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => setOpen(false)}>
              Cancelar
            </button>
            <button type="button" className="btn btn-primary btn-sm" onClick={salvar}>
              {form.id ? 'Salvar' : 'Convidar'}
            </button>
          </>
        }
      >
        <Field label="Nome">
          <TextInput value={form.nome} onChange={(e) => set({ nome: e.target.value })} placeholder="Ex.: Dra. Helena Costa" />
        </Field>
        <Field label="E-mail">
          <TextInput type="email" value={form.email} onChange={(e) => set({ email: e.target.value })} placeholder="email@exemplo.com" />
        </Field>
        <div className="form-grid">
          <Field label="Plano">
            <Select value={form.plano} onChange={(e) => set({ plano: e.target.value as Plano })}>
              {PLANOS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Status">
            <Select value={form.status} onChange={(e) => set({ status: e.target.value as StatusAluno })}>
              {STATUS_ALUNO.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
          </Field>
        </div>
        <div className="form-grid">
          <Field label="Membro desde">
            <TextInput value={form.desde} onChange={(e) => set({ desde: e.target.value })} placeholder="jun 2026" />
          </Field>
          <Field label="Cursos concluídos">
            <TextInput
              type="number"
              value={form.cursosConcluidos}
              onChange={(e) => set({ cursosConcluidos: Number(e.target.value) })}
            />
          </Field>
        </div>
      </Drawer>
    </>
  );
}
