import React, { useState } from 'react';
import { Mail, Search } from 'lucide-react';
import { Badge, Button, Card, Eyebrow } from '../../components/ui';
import PortalShell from '../../components/portal/PortalShell';

interface Buyer {
  id: string;
  type: string;
  investmentRange: string;
  preferredIndustries: string[];
  location: string;
  lastActive: string;
}

const mockBuyers: Buyer[] = [
  {
    id: 'B001',
    type: 'Individual Investor',
    investmentRange: '$1M - $2M',
    preferredIndustries: ['Manufacturing', 'Construction'],
    location: 'Phoenix, AZ',
    lastActive: '2 days ago',
  },
  {
    id: 'B002',
    type: 'Private Equity',
    investmentRange: '$5M - $20M',
    preferredIndustries: ['Technology', 'Healthcare'],
    location: 'Dallas, TX',
    lastActive: '1 week ago',
  },
  {
    id: 'B003',
    type: 'Strategic Buyer',
    investmentRange: '$500K - $5M',
    preferredIndustries: ['Home Services', 'Business Services'],
    location: 'Denver, CO',
    lastActive: '3 days ago',
  },
];

/** "$1M - $2M" → "$1M–$2M" for display. */
const range = (r: string) => r.replace(/\s*-\s*/, '–');

const filterFields = [
  {
    key: 'industry',
    label: 'Industry',
    options: [
      ['', 'All industries'],
      ['manufacturing', 'Manufacturing'],
      ['technology', 'Technology'],
      ['healthcare', 'Healthcare'],
      ['services', 'Services'],
    ],
  },
  {
    key: 'location',
    label: 'Location',
    options: [
      ['', 'All locations'],
      ['arizona', 'Arizona'],
      ['texas', 'Texas'],
      ['california', 'California'],
      ['colorado', 'Colorado'],
    ],
  },
  {
    key: 'investmentRange',
    label: 'Investment range',
    options: [
      ['', 'All ranges'],
      ['under-1m', 'Under $1M'],
      ['1m-5m', '$1M–$5M'],
      ['5m-plus', '$5M+'],
    ],
  },
  {
    key: 'buyerType',
    label: 'Buyer type',
    options: [
      ['', 'All buyer types'],
      ['individual', 'Individual Investor'],
      ['private-equity', 'Private Equity'],
      ['strategic', 'Strategic Buyer'],
    ],
  },
] as const;

type Filters = Record<(typeof filterFields)[number]['key'], string>;

const BuyerNetworkSearch: React.FC = () => {
  const [searchFilters, setSearchFilters] = useState<Filters>({
    industry: '',
    location: '',
    investmentRange: '',
    buyerType: '',
  });

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    // Implement search logic
    console.log('Searching with filters:', searchFilters);
  };

  return (
    <PortalShell
      eyebrow="Buyers"
      title="Buyer network"
      description="Search our database of 2,400+ qualified buyers to find matches for your listings."
    >
      {/* Filters */}
      <Card padding="sm">
        <form onSubmit={handleSearch} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[repeat(4,minmax(0,1fr))_auto] xl:items-end">
          {filterFields.map((f) => (
            <div key={f.key} className="min-w-0">
              <label htmlFor={`bn-${f.key}`} className="label">
                {f.label}
              </label>
              <select
                id={`bn-${f.key}`}
                value={searchFilters[f.key]}
                onChange={(e) => setSearchFilters((prev) => ({ ...prev, [f.key]: e.target.value }))}
                className="field"
              >
                {f.options.map(([value, text]) => (
                  <option key={value} value={value}>
                    {text}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <Button
            type="submit"
            className="w-full sm:col-span-2 xl:col-span-1 xl:w-auto"
            icon={<Search size={16} strokeWidth={1.75} aria-hidden />}
          >
            Search buyers
          </Button>
        </form>
      </Card>

      {/* Results */}
      <div className="mt-8 flex items-baseline justify-between gap-4">
        <h2 className="font-sans text-[15px] font-medium text-ink">Matching buyers</h2>
        <p className="tabular text-[13px] text-mute">{mockBuyers.length} results</p>
      </div>

      <Card padding="none" className="mt-3 overflow-hidden">
        {/* Desktop: hairline table */}
        <div className="hidden lg:block">
          <table className="w-full text-left">
            <thead>
              <tr className="whitespace-nowrap border-b border-line bg-paper text-[11px] uppercase tracking-[0.14em] text-mute">
                <th scope="col" className="px-5 py-3 font-medium">
                  Buyer
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Range
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Preferred industries
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Location
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Last active
                </th>
                <th scope="col" className="px-5 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {mockBuyers.map((buyer) => (
                <tr key={buyer.id} className="align-middle transition-colors duration-150 hover:bg-paper/70">
                  <td className="px-5 py-4">
                    <p className="whitespace-nowrap text-sm font-medium text-ink">{buyer.type}</p>
                    <p className="tabular mt-0.5 text-xs text-mute-soft">{buyer.id}</p>
                  </td>
                  <td className="tabular whitespace-nowrap px-5 py-4 text-sm text-ink">{range(buyer.investmentRange)}</td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-1.5">
                      {buyer.preferredIndustries.map((ind) => (
                        <Badge key={ind}>{ind}</Badge>
                      ))}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-mute-strong">{buyer.location}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-mute">{buyer.lastActive}</td>
                  <td className="px-5 py-4 text-right">
                    <Button
                      variant="secondary"
                      size="sm"
                      icon={<Mail size={14} strokeWidth={1.75} aria-hidden />}
                      aria-label={`Request introduction to buyer ${buyer.id}`}
                    >
                      Request introduction
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / tablet: stacked rows */}
        <ul className="divide-y divide-line lg:hidden">
          {mockBuyers.map((buyer) => (
            <li key={buyer.id} className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-sm font-medium text-ink">{buyer.type}</p>
                <span className="tabular text-xs text-mute-soft">{buyer.id}</span>
              </div>
              <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <div>
                  <dt className="text-xs text-mute">Range</dt>
                  <dd className="tabular mt-0.5 text-ink">{range(buyer.investmentRange)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-mute">Location</dt>
                  <dd className="mt-0.5 text-ink">{buyer.location}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-xs text-mute">Preferred industries</dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1.5">
                    {buyer.preferredIndustries.map((ind) => (
                      <Badge key={ind}>{ind}</Badge>
                    ))}
                  </dd>
                </div>
              </dl>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-mute">Last active {buyer.lastActive}</p>
                <Button
                  variant="secondary"
                  size="sm"
                  icon={<Mail size={14} strokeWidth={1.75} aria-hidden />}
                  aria-label={`Request introduction to buyer ${buyer.id}`}
                >
                  Request introduction
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      {/* Note */}
      <Card tone="brass" padding="sm" className="mt-6">
        <Eyebrow as="p">Confidentiality</Eyebrow>
        <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-mute-strong">
          All buyer introductions are coordinated through Legacy HQ to maintain confidentiality and ensure proper vetting.
          Contact information is shared only after mutual interest is established.
        </p>
      </Card>
    </PortalShell>
  );
};

export default BuyerNetworkSearch;
