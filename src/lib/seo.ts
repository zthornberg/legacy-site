import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_NAME } from './site';

const SITE = SITE_NAME;
const DEFAULT_DESCRIPTION =
  'Legacy pairs senior M&A advisors with AI-assisted research to run confidential, competitive sale processes for $1M–$50M companies, and licenses its platform to a select network of brokers.';

type Meta = { title: string; description?: string };

/** Static route metadata. Dynamic pages (team member, industry, post) call usePageMeta directly. */
const ROUTES: Record<string, Meta> = {
  '/': {
    title: 'M&A Advisory for Owners of Lower-Middle-Market Companies',
    description: DEFAULT_DESCRIPTION,
  },
  '/sell/brokerage': {
    title: 'Brokerage Services',
    description: 'A confidential, competitive sale process for $1M–$25M companies: valuation, packaging, buyer outreach, negotiation and closing.',
  },
  '/sell/ma-services': {
    title: 'M&A Advisory',
    description: 'Sell-side M&A advisory for larger, more complex lower-middle-market mandates, typically above $25M: recapitalizations, strategic sales and management buyouts.',
  },
  '/sell/case-studies': {
    title: 'Closed Transactions',
    description: 'Representative sell-side outcomes across construction, manufacturing, distribution, energy and electrical contracting.',
  },
  '/case-studies': {
    title: 'Closed Transactions',
    description: 'Representative sell-side outcomes across construction, manufacturing, distribution, energy and electrical contracting.',
  },
  '/buy/listings': {
    title: 'Businesses for Sale',
    description: 'Confidential listings currently on the market with Legacy. Summary financials shown; full details under NDA.',
  },
  '/buy/representation': {
    title: 'Buyer Representation',
    description: 'Buy-side advisory from mandate to close: sourcing, underwriting and negotiation for sponsors and operators.',
  },
  '/buy/registration': {
    title: 'Register as a Buyer',
    description: 'Join the Legacy buyer network to see new listings first, with NDAs handled by a Legacy advisor.',
  },
  '/licensing/program': {
    title: 'Broker Licensing Program',
    description: 'Build an M&A practice on the Legacy platform: exclusive seller leads, research, training and coaching.',
  },
  '/licensing/pricing': {
    title: 'Licensing Pricing',
    description: 'Two license tiers, Partner at $125,000 and Principal at $185,000, with the full platform, training and coaching in both.',
  },
  '/licensing/testimonials': {
    title: 'Broker Stories',
    description: 'What licensed brokers say about the leads, the training and their first year on the Legacy platform.',
  },
  '/company/team': { title: 'Our Team', description: 'The advisors and operators behind every Legacy mandate.' },
  '/company/blog': { title: 'Insights', description: 'Practical M&A playbooks, valuation notes and market commentary from the Legacy team.' },
  '/blog': { title: 'Insights', description: 'Practical M&A playbooks, valuation notes and market commentary from the Legacy team.' },
  '/industries': { title: 'Industries', description: 'Sector fluency across manufacturing, construction, home services, healthcare, technology and more.' },
  '/contact': { title: 'Contact', description: 'Start a confidential conversation with a Legacy advisor. We reply within one business day.' },
  '/portal/login': { title: 'Broker Portal Sign In' },
  '/portal': { title: 'Broker Portal' },
  '/404': { title: 'Page not found', description: 'That address does not exist on the Legacy site.' },
};

const SECTION_FALLBACKS: Record<string, string> = {
  '/company/team/': 'Team',
  '/company/blog/': 'Insights',
  '/industries/': 'Industries',
  '/portal/': 'Broker Portal',
};

export function metaForPath(rawPath: string): Meta {
  const pathname = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : rawPath;
  const exact = ROUTES[pathname];
  if (exact) return exact;
  const prefix = Object.keys(SECTION_FALLBACKS).find((p) => pathname.startsWith(p));
  if (prefix) return { title: SECTION_FALLBACKS[prefix] };
  return { title: SITE };
}

function apply(meta: Meta) {
  document.title = meta.title === SITE ? SITE : `${meta.title} | ${SITE}`;
  const description = meta.description ?? DEFAULT_DESCRIPTION;
  let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.name = 'description';
    document.head.appendChild(tag);
  }
  tag.content = description;
}

/**
 * Set the document title and meta description for the current page.
 * Pass nothing to use the static route table; pass a title (and optional description)
 * from dynamic pages such as a team member, an industry, or a post.
 */
export function usePageMeta(title?: string, description?: string) {
  // Depend on the location so a page that stays mounted across navigations (two 404s, two
  // unknown sectors) reapplies its metadata after PageMeta's route default runs.
  const { pathname } = useLocation();
  useEffect(() => {
    if (title) {
      apply({ title, description });
      return;
    }
    apply(metaForPath(pathname));
  }, [title, description, pathname]);
}
