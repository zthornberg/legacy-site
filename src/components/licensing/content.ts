// Page copy for the licensing cluster (pricing, program overview, broker stories).
// Tier data, comparison rows, financing, assurance and disclaimers live in
// src/content/licensing.ts, the single source of truth. Everything here is
// derived from copy the site already carried; no new statistics.
import { assuranceCopy, financingNote, tiers } from '../../content/licensing';

export const APPLY_PATH = '/contact?intent=licensing';

const partner = tiers.find((t) => t.id === 'partner');
const principal = tiers.find((t) => t.id === 'principal');

/* ------------------------------------------------------------------ pricing */

export type FaqItem = { q: string; a: string };

export const pricingFaq: FaqItem[] = [
  {
    q: 'Is this a franchise?',
    a: 'No. Legacy is a licensing program, not a franchise. Licensees operate independent businesses and are solely responsible for their services. You pay a one-time license fee and a royalty on the commissions you close.',
  },
  {
    q: 'What is the deliverable-based assurance?',
    a: assuranceCopy,
  },
  {
    q: 'Is financing available?',
    a: `${financingNote} It is offered to qualified candidates and is not available to every applicant.`,
  },
  {
    q: 'Who qualifies?',
    a: 'Applicants with a demonstrated track record of excellence, whether in business ownership, finance, corporate leadership or B2B sales. Every applicant interviews with the team, and Legacy accepts a handful of new brokers each quarter.',
  },
  {
    q: 'What does the first 90 days look like?',
    a: 'Your application is reviewed and you interview with the team. Accepted brokers attend the three-day training intensive in Scottsdale, with travel and lodging covered. While your custom website and branding kit are built, your first exclusive seller leads begin to arrive. From there the cadence is monthly 1:1 coaching and weekly live training webinars, with a senior team on call for deal structuring.',
  },
  {
    q: 'What is the royalty on?',
    a: `Closed commissions only: ${partner?.royalty ?? '15%'} under the Partner license and ${principal?.royalty ?? '10%'} under the Principal license. It is not charged on the license fee, on leads or on platform access.`,
  },
];

/** Worked example on the pricing page. Rates are the program's published rates. */
export const economicsExample = {
  salePrice: 2_500_000,
  successFeeRate: 0.1,
  footnote: 'Illustrative only. Not a promise of results.',
};

export const earningsStat = { value: '$500K+', label: 'Annual earning potential*' };
export const earningsFootnote = '*From IBBA and M&A Source 2024 reported data. Industry figures, not a Legacy average, and not a promise of results.';

/* ------------------------------------------------------------------ program */

export type ProgramFeature = { kicker: string; title: string; body: string };

export const programFeatures: ProgramFeature[] = [
  {
    kicker: 'Leads',
    title: 'Exclusive lead flow',
    body: '6+ exclusive seller leads every month in your first year. Each is a $1M+ revenue company, pre-contacted and vetted by our marketing team.',
  },
  {
    kicker: 'Training',
    title: 'Scottsdale training intensive',
    body: 'A three-day intensive at our Scottsdale, AZ office. Legacy covers travel and lodging.',
  },
  {
    kicker: 'Coaching',
    title: 'Ongoing coaching and webinars',
    body: 'Monthly 1:1 coaching and weekly live training webinars, backed by a recorded training library.',
  },
  {
    kicker: 'Toolkit',
    title: 'The complete toolkit',
    body: 'Document library, tech suite, custom website, branding kit and twelve months of IT support.',
  },
  {
    kicker: 'Support',
    title: 'A senior support team',
    body: 'Industry veterans on call for complex questions and deal structuring.',
  },
  {
    kicker: 'Assurance',
    title: 'Deliverable-based assurance',
    body: 'If you complete onboarding and meet the activity requirements, Legacy guarantees delivery of the defined program assets. A deliverable guarantee, not an earnings guarantee.',
  },
];

export type TimelineStep = { kicker: string; title: string; body: string; short: string };

export const timelineSteps: TimelineStep[] = [
  {
    kicker: 'Interview',
    title: 'Apply and interview',
    body: 'Applications are reviewed by the team and every applicant interviews. Legacy accepts a handful of new brokers each quarter.',
    short: 'Application review and a conversation with the team.',
  },
  {
    kicker: 'Intensive',
    title: 'Train in Scottsdale',
    body: 'Three days at our Scottsdale, AZ office, with travel and lodging covered.',
    short: 'Three-day intensive. Travel and lodging covered.',
  },
  {
    kicker: 'Launch',
    title: 'Go live, with leads',
    body: 'Your custom website and branding kit go live, and your first exclusive seller leads arrive.',
    short: 'Custom site and branding live. First exclusive seller leads.',
  },
  {
    kicker: 'Cadence',
    title: 'Coaching every month',
    body: 'Monthly 1:1 coaching and weekly live webinars, with a senior team on call for deal structuring.',
    short: 'Monthly 1:1 coaching and weekly live webinars.',
  },
];

export const opportunityCopy = {
  paragraphs: [
    'Business brokerage is lucrative and largely untapped. Unlike residential real estate, the sale of private businesses remains an under-served market, which creates real opportunity for professional, disciplined operators.',
    'Legacy was founded to help capable people break into this networked industry with the tools, data and mentorship to do it well. The license is the most comprehensive launch package available.',
  ],
  stats: [
    { value: '$500K+', label: 'Annual earning potential*' },
    { value: '6+', label: 'Exclusive seller leads a month in your first year' },
    { value: '3-day', label: 'Training intensive in Scottsdale, travel and lodging covered' },
  ],
};

export const cultureCopy = {
  paragraphs: [
    'At Legacy, success is a byproduct of putting others first. Our brokers are trained to serve clients with empathy and professionalism, inside a collaborative network where every broker keeps learning.',
    'This is not a get-rich-quick scheme. It is a partnership built on integrity, hard work and client results. We look for applicants with a demonstrated track record of excellence.',
  ],
  backgrounds: ['Business ownership', 'Finance', 'Corporate leadership', 'B2B sales'],
};

/** The four deliverables named in the assurance copy. */
export const assuranceDeliverables = [
  'Warm introductions to interested sellers',
  'Tailored market data packs',
  'Platform access',
  'Hands-on deal coaching',
];

/* ------------------------------------------------------------- testimonials */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  outcome: string;
  image: string;
  alt: string;
  /** Source photo orientation; landscape photos get a 4:3 frame so no face is cropped. */
  frame: 'portrait' | 'landscape';
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Starting a new career is always nerve-wracking, but having the team at Legacy to lean on has really made all the difference. Someone is always available to answer our questions and guide us.',
    name: 'Tana and Seth B.',
    role: 'Legacy brokers',
    outcome: 'Closed their first business sale within their first year, with year two on track.',
    image: '/media/seth-tana-blackburn.webp',
    alt: 'Tana and Seth B., Legacy brokers',
    frame: 'landscape',
  },
  {
    quote:
      'There are unlimited opportunities for those who can put deals together. Your income potential is limitless. Legacy really invests in their brokers; they continuously add training programs to ensure we are competitive in the marketplace.',
    name: 'Binh T.',
    role: 'Legacy broker',
    outcome: 'Consistently closes multiple deals a year and mentors new brokers in the network.',
    image: '/media/binh-tran.webp',
    alt: 'Binh T., Legacy broker',
    frame: 'portrait',
  },
  {
    quote:
      'I have been with Legacy for nine months and they have under-promised and over-delivered on my expectations. The biggest advantage is the high-quality leads they provide every week. I have already had multiple closings. A great investment for someone who wants to manage their own schedule and earn a great income.',
    name: 'Mitchell Y.',
    role: 'Former Legacy broker, now Strategic Relations Manager',
    outcome: 'Moved from broker to the corporate team on the strength of his performance.',
    image: '/media/mitchell-yinger.webp',
    alt: 'Mitchell Y., Strategic Relations Manager at Legacy',
    frame: 'portrait',
  },
  {
    quote:
      'Legacy’s commitment to excellence is rooted in making every broker successful. With an excellent training program and ongoing support, Legacy brokers continue to improve their skills as new opportunities come month after month.',
    name: 'Gene W.',
    role: 'Northstar Advisory Group',
    outcome: 'Built a regional brokerage practice on Legacy’s system and support.',
    image: '/media/gene-wright.webp',
    alt: 'Gene W., Northstar Advisory Group',
    frame: 'portrait',
  },
];

export const brokerStats = [
  { value: '97%', label: 'Broker satisfaction' },
  { value: '$500K+', label: 'Annual earning potential*' },
  { value: '12', label: 'Months to ROI' },
  { value: '6+', label: 'Exclusive leads a month' },
];
