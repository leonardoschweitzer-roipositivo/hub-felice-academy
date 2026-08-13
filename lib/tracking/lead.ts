import { buildApplicationEvent, buildLeadEvent, sendCapiEvent, type IdentityInput } from './capi';
import { funnelBySlug } from './funnels';

export type ApplicationArgs = {
  slug: string;
  leadType: 'post_purchase' | 'cold';
  eventId: string; // 'app_<uuid>' vindo do browser (mesmo event_id → dedup)
  identity: IdentityInput;
};

/** Dispara o SubmitApplication ao CAPI. Não bloqueia o fluxo do lead. */
export async function sendApplicationEvent(args: ApplicationArgs) {
  const funnel = funnelBySlug(args.slug);
  const event = buildApplicationEvent({
    eventId: args.eventId,
    slug: args.slug,
    leadType: args.leadType,
    contentName: funnel?.contentName,
    identity: args.identity,
  });
  return sendCapiEvent(event);
}

export type LeadArgs = {
  /** Produto recomendado pela IA. `null` quando a conversa não chegou a
   *  recomendar nada e a pessoa mesmo assim deixou o contato. */
  slug: string | null;
  /** Página onde a conversa aconteceu — vira o event_source_url. */
  pagePath: string;
  eventId: string; // 'lead_<uuid>' vindo do browser (mesmo event_id → dedup)
  identity: IdentityInput;
};

/** Dispara o Lead do assistente ao CAPI. Como o SubmitApplication, é
 *  adicional: falhar aqui nunca pode custar o lead. */
export async function sendLeadEvent(args: LeadArgs) {
  const funnel = args.slug ? funnelBySlug(args.slug) : undefined;
  const event = buildLeadEvent({
    eventId: args.eventId,
    slug: args.slug,
    pagePath: args.pagePath,
    contentName: funnel?.contentName,
    identity: args.identity,
  });
  return sendCapiEvent(event);
}
