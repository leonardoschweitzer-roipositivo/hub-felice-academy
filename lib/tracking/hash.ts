import { createHash } from 'crypto';

/** SHA-256 hex — formato que o Meta espera nos campos de user_data. */
export function sha256hex(value: string): string {
  return createHash('sha256').update(value).digest('hex');
}

/** email: trim → lowercase → sha256. Vazio → undefined (omitir a chave). */
export function hashEmail(email?: string | null): string | undefined {
  const v = email?.trim().toLowerCase();
  return v ? sha256hex(v) : undefined;
}

/** telefone: só dígitos, com DDI Brasil (55) → sha256. */
export function hashPhone(phone?: string | null): string | undefined {
  let digits = (phone || '').replace(/\D/g, '');
  digits = digits.replace(/^0+/, ''); // remove zeros de tronco (ex.: "0 51 9...")
  if (!digits) return undefined;
  // Número BR nacional tem 10-11 dígitos (DDD + número); acrescenta o DDI 55.
  // 12-13 dígitos → assume que já vem com DDI.
  if (digits.length <= 11) digits = '55' + digits;
  return sha256hex(digits);
}

/** Genérico (cpf, visitor_id…): trim → sha256. */
export function hashPlain(value?: string | null): string | undefined {
  const v = value?.trim();
  return v ? sha256hex(v) : undefined;
}
