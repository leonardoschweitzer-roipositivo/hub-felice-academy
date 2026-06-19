'use client';

import type { DocId } from '../../content/types';
import { ChatPanel } from './ChatPanel';

/** Simulador de treino: a IA atua como paciente (recepção) ou na linha (CRC). */
export function RolePlaySimulator({ mode, docId }: { mode: 'patient' | 'phone'; docId: DocId }) {
  const isPhone = mode === 'phone';
  return (
    <ChatPanel
      mode={mode}
      docId={docId}
      placeholder={isPhone ? 'Responda como CRC ao telefone…' : 'Responda como recepção…'}
      emptyHint={
        isPhone
          ? 'Treine o atendimento telefônico: a IA simula um paciente ligando. Conduza a chamada pelas 5 fases.'
          : 'Treine o atendimento da recepção: a IA simula um paciente em um cenário (atraso, falta de documento, irritação).'
      }
    />
  );
}
