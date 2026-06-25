'use client';

import { useEffect, useState } from 'react';
import { Drawer } from '../admin/ui/Drawer';
import { Field, TextInput, Textarea, Select } from '../admin/ui/fields';
import { useStore } from '../store/PlatformStore';
import { uid } from '../util';
import { GATILHOS, type Automacao, type GatilhoAutomacao } from '../data/vendas';

const branco = (): Automacao => ({
  id: uid('auto'),
  nome: '',
  gatilho: 'novo-lead',
  canal: 'whatsapp',
  templateNome: '',
  corpo: '',
  atrasoMin: 0,
  status: 'ativa',
  condicoes: [],
  stats: { enviadas: 0, entregues: 0, lidas: 0, respondidas: 0 },
});

export function AutomacaoDrawer({
  open,
  automacao,
  onClose,
}: {
  open: boolean;
  automacao: Automacao | null;
  onClose: () => void;
}) {
  const { saveAutomacao } = useStore();
  const [form, setForm] = useState<Automacao>(branco);
  const [condText, setCondText] = useState('');

  useEffect(() => {
    if (!open) return;
    const base = automacao ?? branco();
    setForm(base);
    setCondText((base.condicoes ?? []).join(', '));
  }, [open, automacao]);

  const set = <K extends keyof Automacao>(key: K, val: Automacao[K]) =>
    setForm((f) => ({ ...f, [key]: val }));

  const submit = () => {
    if (!form.nome.trim()) return;
    saveAutomacao({
      ...form,
      condicoes: condText
        .split(',')
        .map((c) => c.trim())
        .filter(Boolean),
    });
    onClose();
  };

  return (
    <Drawer
      open={open}
      title={automacao ? 'Editar automação' : 'Nova automação'}
      onClose={onClose}
      footer={
        <button type="button" className="btn btn-primary btn-sm" onClick={submit}>
          Salvar
        </button>
      }
    >
      <Field label="Nome">
        <TextInput
          value={form.nome}
          onChange={(e) => set('nome', e.target.value)}
          placeholder="Boas-vindas ao novo lead"
        />
      </Field>

      <Field label="Gatilho" hint={GATILHOS[form.gatilho].descricao}>
        <Select
          value={form.gatilho}
          onChange={(e) => set('gatilho', e.target.value as GatilhoAutomacao)}
        >
          {Object.entries(GATILHOS).map(([slug, g]) => (
            <option key={slug} value={slug}>
              {g.nome}
            </option>
          ))}
        </Select>
      </Field>

      <div className="form-grid">
        <Field label="Template (HSM)" hint="nome aprovado na Meta">
          <TextInput
            value={form.templateNome}
            onChange={(e) => set('templateNome', e.target.value)}
            placeholder="boas_vindas_lead"
          />
        </Field>
        <Field label="Atraso (min)" hint="0 = imediato">
          <TextInput
            type="number"
            min={0}
            value={form.atrasoMin}
            onChange={(e) => set('atrasoMin', Number(e.target.value))}
          />
        </Field>
      </div>

      <Field label="Mensagem" hint="use {{1}}, {{2}}… para variáveis (nome, produto)">
        <Textarea
          value={form.corpo}
          onChange={(e) => set('corpo', e.target.value)}
          placeholder="Olá, {{1}}! Recebemos seu interesse em {{2}}…"
        />
      </Field>

      <Field label="Condições" hint="opcional, separadas por vírgula">
        <TextInput
          value={condText}
          onChange={(e) => setCondText(e.target.value)}
          placeholder="Origem ≠ WhatsApp"
        />
      </Field>

      <Field label="Status">
        <Select
          value={form.status}
          onChange={(e) => set('status', e.target.value as Automacao['status'])}
        >
          <option value="ativa">Ativa</option>
          <option value="pausada">Pausada</option>
        </Select>
      </Field>
    </Drawer>
  );
}
