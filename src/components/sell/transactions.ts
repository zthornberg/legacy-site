/**
 * Anonymized closed transactions. Merged from the former /sell/case-studies carousel,
 * the /case-studies "Outcomes in focus" grid and the home page case showcase.
 * Figures are as previously published on the site; nothing here is new data.
 */

export type TransactionFact = { label: string; value: string };

export type Transaction = {
  id: string;
  industry: string;
  region: string;
  title: string;
  summary: string;
  approach: string;
  image: string;
  alt: string;
  facts: TransactionFact[];
  /** Short outcome highlights, rendered as brass badges. */
  outcomes: string[];
  /** Months from listing to close, for the index. */
  months: number;
};

export const TRANSACTIONS: Transaction[] = [
  {
    id: 'home-builder-construction',
    industry: 'Construction',
    region: 'Southwest US',
    title: 'Home-builder construction company',
    summary:
      'The owners of a family-owned construction company were ready to retire. Targeted outreach surfaced three serious buyers within 90 days, and competing offers closed the sale 15% above the asking price.',
    approach:
      'We led with the asset base, scale efficiencies and project pipeline, and addressed backlog visibility and bonding capacity before buyers asked.',
    image: '/media/Home Builder Construction Case Study.webp',
    alt: 'Wood-framed homes under construction in a new residential development',
    facts: [
      { label: 'Revenue', value: '$40M' },
      { label: 'EBITDA', value: '$5.5M' },
      { label: 'Employees', value: '60+' },
      { label: 'Time to close', value: '6 mo' },
    ],
    outcomes: ['Closed 15% above ask', '3.5× EBITDA'],
    months: 6,
  },
  {
    id: 'elevator-manufacturing',
    industry: 'Manufacturing',
    region: 'Midwest US',
    title: 'Elevator manufacturing company',
    summary:
      'A founder-led elevator components manufacturer was acquired by a larger industry player. The structure rewarded decades of work, secured the founder’s retirement and kept every job in place.',
    approach:
      'Strategic buyers valued the installed base and recurring parts and service revenue. A transition plan addressed owner dependence, and the deal closed at target with earn-out protections.',
    image: '/media/Elevator Manufacturing Pic.webp',
    alt: 'Steel elevator test tower inside a manufacturing facility',
    facts: [
      { label: 'Revenue', value: '$3M+' },
      { label: 'EBITDA', value: '$700K' },
      { label: 'Employees', value: '15+' },
      { label: 'Time to close', value: '8 mo' },
    ],
    outcomes: ['Strategic acquisition', 'All jobs preserved'],
    months: 8,
  },
  {
    id: 'flooring-distributor',
    industry: 'Distribution',
    region: 'Southwest US',
    title: 'Flooring distribution company',
    summary:
      'A three-region flooring distributor was prepared for sale and acquired by a private equity group that brought growth capital. The original owners kept a minority stake for upside.',
    approach:
      'SKU rationalization, rebate hygiene and MAP discipline, with the QoE prepared early. Gross margin improved 220 bps and working capital improved by $450K before buyers saw the numbers.',
    image: '/media/Flooring Distributor Pic.webp',
    alt: 'Flooring showroom with sample racks and display tables',
    facts: [
      { label: 'Revenue', value: '$6.5M+' },
      { label: 'EBITDA', value: '$950K' },
      { label: 'Employees', value: '5+' },
      { label: 'Time to close', value: '10 mo' },
    ],
    outcomes: ['5.3× EBITDA vs ~4.7× baseline', 'Minority stake retained'],
    months: 10,
  },
  {
    id: 'oil-pressure-pumping',
    industry: 'Energy',
    region: 'Midwest US',
    title: 'Oil pressure pumping company',
    summary:
      'Amid oil market volatility, we sold an oilfield pressure pumping company to an investor group. A process tailored to commodity cycles created competition among sponsors.',
    approach:
      'Service-line margin analysis, parts inventory controls and forward coverage gave buyers a cleaner working-capital profile and a credible plan, which drew stronger IOIs.',
    image: '/media/Oil Pressure Pumping Company.webp',
    alt: 'Pressure pumping equipment at an oil field at sunset',
    facts: [
      { label: 'Revenue', value: '$15M+' },
      { label: 'EBITDA', value: '$4M' },
      { label: 'Employees', value: '20+' },
      { label: 'Time to close', value: '12 mo' },
    ],
    outcomes: ['Sold to an investor group', 'Sponsor competition'],
    months: 12,
  },
  {
    id: 'commercial-electrical',
    industry: 'Electrical contracting',
    region: 'Southeast US',
    title: 'Commercial electrical contractor',
    summary:
      'A longstanding commercial electrical contractor moved to new ownership through the Legacy buyer network. We vetted for a buyer who valued the company’s reputation, protecting continuity for employees and clients.',
    approach:
      'Backlog and safety record were front and center in the marketing materials, and cultural fit weighed as heavily as price in buyer selection.',
    image: '/media/Commercial Electrical Contractor pic.webp',
    alt: 'Electricians working from a scissor lift on a commercial construction site',
    facts: [
      { label: 'Revenue', value: '$3.5M+' },
      { label: 'EBITDA', value: '$950K' },
      { label: 'Employees', value: '10+' },
      { label: 'Time to close', value: '7 mo' },
    ],
    outcomes: ['Culture-fit buyer', 'Employee and client continuity'],
    months: 7,
  },
];

/** Engagements published without images or financials. */
export type Engagement = { industry: string; title: string; situation: string; approach: string; result: string };

export const MORE_ENGAGEMENTS: Engagement[] = [
  {
    industry: 'Technology',
    title: 'IT services, government and commercial mix',
    situation: 'Underappreciated contract assets and a diffuse equity story.',
    approach: 'Contract quality map, pipeline probability model and a repositioned narrative.',
    result: 'Multiple strategic offers and roughly a 0.6× multiple lift.',
  },
  {
    industry: 'Healthcare',
    title: 'Multi-location healthcare services',
    situation: 'Payer mix concerns and compliance gaps.',
    approach: 'Revenue cycle audit, compliance remediation and a payer diversification plan.',
    result: 'A clean audit trail and a premium valuation from a strategic buyer.',
  },
];
