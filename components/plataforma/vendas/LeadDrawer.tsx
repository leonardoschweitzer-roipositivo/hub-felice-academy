'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Drawer } from '../admin/ui/Drawer';
import { Field, TextInput, Textarea, Select } from '../admin/ui/fields';
import { useStore } from '../store/PlatformStore';
import { uid } from '../util';
import {
  ETAPAS,
  ORIGENS,
  TEMPERATURAS,
  type Lead,
  type OrigemLead,
  type Temperatura,
  type EtapaPipeline,
} from '../data/vendas';

const HOJE = '2026-06-25';

const branco = (): Lead => ({
  id: uid('lead'),
  nome: '',
  telefone: '',
  email: '',
  origem: 'instagram',
  interesse: '',
  etapa: 'novo',
  temperatura: 'morno',
  valorEstimado: 0,
  responsavel: 'Helena Costa',
  criadoEm: HOJE,
  ultimaInteracao: HOJE,
  tags: [],
  observacoes: '',
});

/** Drawer de criar/editar lead. `lead = null` → novo. */
export function LeadDrawer({
  open,
  lead,
  onClose,
}: {
  open: boolean;
  lead: Lead | null;
  onClose: () => void;
}) {
  const { saveLead, deleteLead } = useStore();
  const [form, setForm] = useState<Lead>(branco);
  const [tagsText, setTagsText] = useState('');

  useEffect(() => {
    if (!open) return;
    const base = lead ?? branco();
    setForm(base);
    setTagsText(base.tags.join(', '));
  }, [open, lead]);

  const set = <K extends keyof Lead>(key: K, val: Lead[K]) =>
    setForm((f) => ({ ...f, [key]: val }));

  const submit = () => {
    if (!form.nome.trim()) return;
    saveLead({
      ...form,
      tags: tagsText
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      ultimaInteracao: HOJE,
    });
    onClose();
  };

  const remover = () => {
    if (lead) deleteLead(lead.id);
    onClose();
  };

  return (
    <Drawer
      open={open}
      title={lead ? 'Editar lead' : 'Novo lead'}
      onClose={onClose}
      footer={
        <>
          {lead && (
            <button type="button" className="btn btn-ghost btn-sm vendas-del" onClick={remover}>
              Excluir
            </button>
          )}
          {lead && (
            <Link
              href="/plataforma/vendas/atendimento"
              className="btn btn-ghost btn-sm"
              onClick={onClose}
            >
              Abrir conversa
            </Link>
          )}
          <button type="button" className="btn btn-primary btn-sm" onClick={submit}>
            Salvar
          </button>
        </>
      }
    >
      <Field label="Nome">
        <TextInput
          value={form.nome}
          onChange={(e) => set('nome', e.target.value)}
          placeholder="Dra. Nome Sobrenome"
        />
      </Field>

      <div className="form-grid">
        <Field label="Telefone (WhatsApp)">
          <TextInput
            value={form.telefone}
            onChange={(e) => set('telefone', e.target.value)}
            placeholder="+55 11 90000-0000"
          />
        </Field>
        <Field label="E-mail">
          <TextInput
            type="email"
            value={form.email ?? ''}
            onChange={(e) => set('email', e.target.value)}
            placeholder="email@exemplo.com"
          />
        </Field>
      </div>

      <Field label="Interesse (produto/curso)">
        <TextInput
          value={form.interesse}
          onChange={(e) => set('interesse', e.target.value)}
          placeholder="Mentoria Felice"
        />
      </Field>

      <div className="form-grid">
        <Field label="Origem">
          <Select
            value={form.origem}
            onChange={(e) => set('origem', e.target.value as OrigemLead)}
          >
            {Object.entries(ORIGENS).map(([slug, nome]) => (
              <option key={slug} value={slug}>
                {nome}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Responsável">
          <TextInput
            value={form.responsavel}
            onChange={(e) => set('responsavel', e.target.value)}
          />
        </Field>
      </div>

      <div className="form-grid">
        <Field label="Etapa">
          <Select
            value={form.etapa}
            onChange={(e) => set('etapa', e.target.value as EtapaPipeline)}
          >
            {ETAPAS.map((etapa) => (
              <option key={etapa.slug} value={etapa.slug}>
                {etapa.nome}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Temperatura">
          <Select
            value={form.temperatura}
            onChange={(e) => set('temperatura', e.target.value as Temperatura)}
          >
            {Object.entries(TEMPERATURAS).map(([slug, t]) => (
              <option key={slug} value={slug}>
                {t.nome}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="form-grid">
        <Field label="Valor estimado (R$)">
          <TextInput
            type="number"
            min={0}
            value={form.valorEstimado}
            onChange={(e) => set('valorEstimado', Number(e.target.value))}
          />
        </Field>
        <Field label="Tags" hint="separadas por vírgula">
          <TextInput
            value={tagsText}
            onChange={(e) => setTagsText(e.target.value)}
            placeholder="mentoria, indicada"
          />
        </Field>
      </div>

      <Field label="Observações">
        <Textarea
          value={form.observacoes ?? ''}
          onChange={(e) => set('observacoes', e.target.value)}
          placeholder="Contexto, próximos passos…"
        />
      </Field>
    </Drawer>
  );
}
