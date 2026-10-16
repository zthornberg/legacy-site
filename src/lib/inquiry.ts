import { SITE_EMAIL } from './site';

/**
 * Delivers a form submission.
 *
 * - When `VITE_INQUIRY_ENDPOINT` is set (Formspree, HubSpot, a Zapier/Make webhook, an /api function…),
 *   the fields are POSTed there as JSON and the form only confirms on a 2xx response.
 * - Otherwise the visitor's email app opens with the inquiry pre-addressed to SITE_EMAIL, so nothing is
 *   silently dropped while no backend is configured.
 */

export type InquiryKind = 'contact' | 'buyer-registration' | 'buyer-mandate' | 'listing-request';

export type InquiryResult = { ok: true; via: 'endpoint' | 'email' } | { ok: false };

type Fields = Record<string, string | number | boolean | string[] | undefined | null>;

const ENDPOINT = (import.meta.env.VITE_INQUIRY_ENDPOINT as string | undefined)?.trim() || '';

const SUBJECTS: Record<InquiryKind, string> = {
  contact: 'Website inquiry',
  'buyer-registration': 'Buyer registration',
  'buyer-mandate': 'Buy-side mandate brief',
  'listing-request': 'Listing details request',
};

/** "targetEV" → "Target EV", "firstName" → "First name". */
function label(key: string) {
  const spaced = key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[-_]/g, ' ');
  return spaced.charAt(0).toUpperCase() + spaced.slice(1).toLowerCase().replace(/\bev\b/, 'EV');
}

function lines(fields: Fields) {
  return Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== null && v !== '' && !(Array.isArray(v) && v.length === 0))
    .map(([k, v]) => `${label(k)}: ${Array.isArray(v) ? v.join(', ') : String(v)}`);
}

/** A mailto: link carrying the inquiry, for the no-endpoint path and for error fallbacks. */
export function inquiryMailto(kind: InquiryKind, fields: Fields, subjectSuffix?: string) {
  const subject = subjectSuffix ? `${SUBJECTS[kind]}: ${subjectSuffix}` : SUBJECTS[kind];
  const body = [...lines(fields), '', `Sent from ${window.location.href}`].join('\n');
  return `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const hasInquiryEndpoint = Boolean(ENDPOINT);

export async function submitInquiry(kind: InquiryKind, fields: Fields, subjectSuffix?: string): Promise<InquiryResult> {
  if (ENDPOINT) {
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ kind, subject: SUBJECTS[kind], fields, page: window.location.pathname }),
      });
      return res.ok ? { ok: true, via: 'endpoint' } : { ok: false };
    } catch {
      return { ok: false };
    }
  }
  window.location.href = inquiryMailto(kind, fields, subjectSuffix);
  return { ok: true, via: 'email' };
}
