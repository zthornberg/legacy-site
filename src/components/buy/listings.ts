/**
 * Representative, anonymized listings for /buy/listings.
 * The first three carry over from the original page (title, industry, location, cash flow, asking price);
 * revenue figures and rows 4–6 were added for the ledger and are placeholders for the client to confirm.
 */
export type ListingStatus = 'Available' | 'Under LOI';

export type Listing = {
  id: string;
  ref: string;
  title: string;
  industry: string;
  location: string;
  revenue: string;
  cashFlow: string;
  askingPrice: string;
  status: ListingStatus;
};

export const LISTINGS: Listing[] = [
  {
    id: '1',
    ref: 'L-2041',
    title: 'Established manufacturing company',
    industry: 'Manufacturing',
    location: 'Phoenix, AZ',
    revenue: '$4.6M',
    cashFlow: '$850K',
    askingPrice: '$2.4M',
    status: 'Available',
  },
  {
    id: '2',
    ref: 'L-2037',
    title: 'Regional HVAC service provider',
    industry: 'Home Services',
    location: 'Dallas, TX',
    revenue: '$2.3M',
    cashFlow: '$420K',
    askingPrice: '$1.2M',
    status: 'Under LOI',
  },
  {
    id: '3',
    ref: 'L-2044',
    title: 'Tech consulting firm',
    industry: 'Technology',
    location: 'Austin, TX',
    revenue: '$3.1M',
    cashFlow: '$650K',
    askingPrice: '$1.8M',
    status: 'Available',
  },
  {
    id: '4',
    ref: 'L-2046',
    title: 'Commercial electrical contractor',
    industry: 'Construction',
    location: 'Denver, CO',
    revenue: '$6.8M',
    cashFlow: '$1.1M',
    askingPrice: '$3.9M',
    status: 'Available',
  },
  {
    id: '5',
    ref: 'L-2039',
    title: 'Multi-site physical therapy practice',
    industry: 'Healthcare',
    location: 'Tampa, FL',
    revenue: '$3.4M',
    cashFlow: '$720K',
    askingPrice: '$2.6M',
    status: 'Under LOI',
  },
  {
    id: '6',
    ref: 'L-2048',
    title: 'B2B fulfillment and logistics services',
    industry: 'Business Services',
    location: 'Salt Lake City, UT',
    revenue: '$5.2M',
    cashFlow: '$940K',
    askingPrice: '$3.2M',
    status: 'Available',
  },
];
