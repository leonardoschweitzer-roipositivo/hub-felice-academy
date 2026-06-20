import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
} from 'react';

/* Form controls compartilhados do admin. Presentacionais (sem estado). */

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="form-field">
      <span className="form-label">{label}</span>
      {children}
      {hint && <span className="form-hint">{hint}</span>}
    </label>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="form-input" {...props} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className="form-input form-textarea" {...props} />;
}

export function Select({ children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className="form-input" {...props}>
      {children}
    </select>
  );
}

/** Badge de status genérico — classe `st-<status>` define a cor (ver admin.css). */
export function StatusBadge({ status, label }: { status: string; label?: string }) {
  return <span className={`status-badge st-${status}`}>{label ?? status}</span>;
}
