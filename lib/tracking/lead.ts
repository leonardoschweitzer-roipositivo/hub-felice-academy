import { buildApplicationEvent, sendCapiEvent, type IdentityInput } from './capi';
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
