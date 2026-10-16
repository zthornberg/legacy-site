// Single source of truth for the licensing program tiers.
// Pricing page, program page, and the home licensing band all read from here.
//
// NOTE FOR REVIEW: lead counts, royalty rates and inclusions were carried over
// from the previous Professional / Enterprise tiers and re-mapped to the new
// two-tier structure. Confirm every number before launch.

export type TierId = 'partner' | 'principal';

export type Tier = {
  id: TierId;
  name: string;
  price: number;
  priceLabel: string;
  /** One line under the price. */
  tagline: string;
  /** Who it is for, in one sentence. */
  bestFor: string;
  royalty: string;
  hotLeads: string;
  warmLeads: string;
  dataAccess: string;
  /** Differentiating inclusions shown on the card. */
  highlights: string[];
  featured?: boolean;
  featuredLabel?: string;
};

export const tiers: Tier[] = [
  {
    id: 'partner',
    name: 'Partner',
    price: 125000,
    priceLabel: '$125,000',
    tagline: 'A complete sell-side practice on the Legacy platform.',
    bestFor: 'Experienced operators, finance professionals and B2B sellers launching a full-time brokerage practice.',
    royalty: '15%',
    hotLeads: '10 per month',
    warmLeads: '30+ per month',
    dataAccess: 'Expanded',
    highlights: [
      '10 exclusive, pre-qualified seller leads per month ($1M+ revenue)',
      '30+ warm local leads per month in your preferred industries',
      'Expanded research suite and broker portal access',
      'Dedicated campaign reviews and a comp pack for every mandate',
      '15% royalty on closed commissions',
    ],
  },
  {
    id: 'principal',
    name: 'Principal',
    price: 185000,
    priceLabel: '$185,000',
    tagline: 'For building a multi-advisor firm with priority data and support.',
    bestFor: 'Leaders building a regional firm with additional advisors, who want the deepest data access and the lowest royalty.',
    royalty: '10%',
    hotLeads: '15 per month',
    warmLeads: '50+ per month',
    dataAccess: 'Advanced',
    highlights: [
      '15 exclusive, pre-qualified seller leads per month ($1M+ revenue)',
      '50+ warm local leads per month',
      'Advanced research suite and priority data requests (PE lists, buyer maps, industry briefs)',
      'Multi-advisor firm support: onboarding and coaching for additional advisors',
      '10% royalty on closed commissions',
    ],
    featured: true,
    featuredLabel: 'Most comprehensive',
  },
];

/** Inclusions common to both tiers. */
export const includedInBoth: string[] = [
  'Three-day training intensive in Scottsdale, AZ with travel and lodging covered',
  'Monthly 1:1 coaching and weekly live training webinars',
  'Complete document library, deal templates and listing-prep playbooks',
  'Custom website, branding kit and twelve months of IT support',
  'Access to the Legacy buyer network of 2,400+ registered buyers',
  'Deliverable-based assurance on program assets (see terms)',
];

/** Rows for the side-by-side comparison table. `true` renders a check, `false` a dash. */
export const comparisonRows: { label: string; partner: string | boolean; principal: string | boolean; note?: string }[] = [
  { label: 'Exclusive seller leads', partner: '10 / month', principal: '15 / month', note: 'Pre-contacted and vetted; $1M+ revenue' },
  { label: 'Warm local leads', partner: '30+ / month', principal: '50+ / month' },
  { label: 'Royalty on closed commissions', partner: '15%', principal: '10%' },
  { label: 'Research suite and portal access', partner: 'Expanded', principal: 'Advanced' },
  { label: 'Priority data requests', partner: false, principal: true, note: 'PE lists, buyer maps, industry briefs' },
  { label: 'Campaign reviews and comp pack per mandate', partner: true, principal: true },
  { label: 'Multi-advisor firm support', partner: false, principal: true },
  { label: 'Scottsdale training intensive', partner: true, principal: true },
  { label: 'Monthly 1:1 coaching and weekly webinars', partner: true, principal: true },
  { label: 'Website, branding kit and IT support', partner: true, principal: true },
  { label: 'Deliverable-based assurance', partner: true, principal: true },
];

export const financingNote =
  'For select applicants, Legacy can structure financing or a deferred payment schedule. Terms are discussed during the interview process.';

export const assuranceCopy =
  'If you complete onboarding and meet the activity requirements, Legacy guarantees delivery of the defined program assets: warm introductions to interested sellers, tailored market data packs, platform access, and hands-on deal coaching. If we fail to deliver these within the stated windows, we make it right through additional delivery or a fee credit. This is a deliverable guarantee, not an earnings guarantee.';

/** One-paragraph version of `assuranceCopy` for the FAQ; keep the two in step. */
export const assuranceSummary =
  'If you complete onboarding and meet the activity requirements, Legacy guarantees delivery of the defined program assets (seller introductions, market data packs, platform access and deal coaching) within the stated windows, or makes it right with additional delivery or a fee credit. It is a deliverable guarantee, not an earnings guarantee.';

export const disclaimers: string[] = [
  'Legacy is a licensing program, not a franchise. Licensees operate independent businesses and are solely responsible for their services.',
  'Legacy does not provide or disclose client financial statements. All examples are illustrative.',
  'Any revenue examples reflect unique circumstances and are not promises of future results. Earnings data referenced is from IBBA and M&A Source 2024 reporting.',
];
