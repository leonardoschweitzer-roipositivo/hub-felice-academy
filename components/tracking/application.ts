// Helper client-side compartilhado pelos questionários de consultoria.
// Gera o event_id, dispara o SubmitApplication no browser e devolve os dados
// p/ ecoar ao servidor (mesmo event_id → dedup browser × CAPI).

import { getCookie, randomId } from '@/lib/tracking/cookies';

export type BrowserIdentity = {
  fbp?: string;
  fbc?: string;
  visitor_id?: string;
};

export type ApplicationTracking = {
  eventId: string;
} & BrowserIdentity;

/** Dispara o SubmitApplication do browser e retorna o tracking p/ o POST. */
export function fireApplication(
  slug: string,
  leadType: 'post_purchase' | 'cold'
): ApplicationTracking {
  const eventId = `app_${randomId()}`;
  const identity: BrowserIdentity = {
    fbp: getCookie('_fbp'),
    fbc: getCookie('_fbc'),
    visitor_id: getCookie('visitor_id'),
  };
  if (typeof window !== 'undefined') {
    window.fbq?.(
      'track',
      'SubmitApplication',
      { source: slug, lead_type: leadType },
      { eventID: eventId }
    );
  }
  return { eventId, ...identity };
}
