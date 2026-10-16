import type { LucideIcon } from 'lucide-react';
import { Briefcase, Cpu, Factory, HardHat, Hotel, Rocket, Stethoscope, Store, Wrench, Zap } from 'lucide-react';

/**
 * The ten sectors Legacy covers. `key` matches the top-level keys in
 * src/content/industries/industries.json and the /industries/:industry route.
 * Order mirrors the header's Industries menu.
 */
export type Sector = {
  key: string;
  name: string;
  description: string;
  icon: LucideIcon;
  /** Hand-picked "Other sectors" (keys) for the industry page; falls back to the next three in order. */
  related?: string[];
};

export const SECTORS: Sector[] = [
  {
    key: 'manufacturing-distribution',
    name: 'Manufacturing & Distribution',
    description: 'Precision manufacturing, industrial components, and wholesale distribution.',
    icon: Factory,
  },
  {
    key: 'construction',
    name: 'Construction',
    description: 'General contractors, specialty trades, and building-materials suppliers.',
    icon: HardHat,
    related: ['home-services', 'manufacturing-distribution', 'energy-sustainability'],
  },
  {
    key: 'home-services',
    name: 'Home Services',
    description: 'HVAC, plumbing, landscaping, roofing, and residential service operators.',
    icon: Wrench,
  },
  {
    key: 'business-services',
    name: 'Business Services',
    description: 'Professional services, staffing, logistics, and B2B service providers.',
    icon: Briefcase,
  },
  {
    key: 'healthcare',
    name: 'Healthcare',
    description: 'Medical and dental practices, clinics, MSOs, and healthcare services.',
    icon: Stethoscope,
  },
  {
    key: 'technology',
    name: 'Technology',
    description: 'Software and SaaS, managed IT services, and tech-enabled services.',
    icon: Cpu,
    related: ['business-services', 'healthcare', 'startup-funding'],
  },
  {
    key: 'energy-sustainability',
    name: 'Energy & Sustainability',
    description: 'Oilfield and pressure-pumping services, renewables, and sustainability firms.',
    icon: Zap,
  },
  {
    key: 'retail-consumer',
    name: 'Retail & Consumer',
    description: 'Retail, e-commerce, consumer services, and franchise operations.',
    icon: Store,
  },
  {
    key: 'hospitality',
    name: 'Hospitality',
    description: 'Hotels, restaurant groups, bars, and travel and tourism operators.',
    icon: Hotel,
    related: ['retail-consumer', 'home-services', 'business-services'],
  },
  {
    key: 'startup-funding',
    name: 'Startup Funding',
    description: 'Growth capital, investor introductions, and exit strategy for early-stage companies.',
    icon: Rocket,
  },
];

/**
 * Sector (industries.json key) → sub-sector deep-dives (src/content/industries.ts slugs).
 * Each sub-sector appears under exactly one sector. Empty means overview-only for now.
 */
export const SUBSECTORS_BY_SECTOR: Record<string, string[]> = {
  construction: ['construction-homebuilding', 'electrical-contractors'],
  'manufacturing-distribution': ['industrial-manufacturing-elevator', 'distribution-flooring'],
  'energy-sustainability': ['energy-services-oilfield'],
  'home-services': ['hvac-plumbing', 'landscaping-facilities'],
  healthcare: ['healthcare-services'],
  technology: ['it-msp', 'saas-tech-enabled-services'],
  'business-services': ['staffing-industrial-services', 'logistics-trucking'],
  'retail-consumer': [],
  hospitality: [],
  'startup-funding': [],
};
