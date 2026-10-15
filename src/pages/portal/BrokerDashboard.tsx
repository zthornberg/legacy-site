import React from 'react';
import { ArrowRight, BarChart3, Building2, FilePlus2, FileText, Users, type LucideIcon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button, Card, Stat } from '../../components/ui';
import PortalShell from '../../components/portal/PortalShell';
import { PanelHeading } from '../../components/portal/Form';

type Tool = { title: string; description: string; icon: LucideIcon; href: string };

const portalSections: Tool[] = [
  {
    title: 'Document library',
    description: 'Training videos, guides, legal templates and marketing materials.',
    icon: FileText,
    href: '/portal/documents',
  },
  {
    title: 'Listing submission',
    description: 'Submit a new business listing for review and approval.',
    icon: FilePlus2,
    href: '/portal/listing-submission',
  },
  {
    title: 'Buyer network search',
    description: 'Search our database of 2,400+ qualified buyers.',
    icon: Users,
    href: '/portal/buyer-search',
  },
  {
    title: 'Private equity requests',
    description: 'Request PE firm information and introductions for a deal.',
    icon: Building2,
    href: '/portal/pe-request',
  },
  {
    title: 'Market research',
    description: 'Request custom industry reports and market analysis.',
    icon: BarChart3,
    href: '/portal/market-research',
  },
];

const stats = [
  { value: '3', label: 'Active leads' },
  { value: '2', label: 'Listings under review' },
  { value: '12', label: 'Buyer matches' },
  { value: '1', label: 'Upcoming training' },
];

const recentActivity = [
  { action: 'New lead assigned', item: 'Manufacturing Company - Phoenix', time: '2 hours ago' },
  { action: 'Document downloaded', item: 'Valuation Template.pdf', time: '1 day ago' },
  { action: 'Listing submitted', item: 'HVAC Service Provider', time: '3 days ago' },
];

const BrokerDashboard: React.FC = () => {
  const { user } = useAuth();
  const firstName = user?.name?.split(' ')[0];

  return (
    <PortalShell
      eyebrow="Dashboard"
      title={firstName ? `Welcome back, ${firstName}` : 'Welcome back'}
      description="Your Legacy broker portal: listings, buyers, documents and HQ requests in one place."
      actions={
        <>
          <Button to="/portal/buyer-search" variant="secondary" size="sm">
            Search buyers
          </Button>
          <Button to="/portal/listing-submission" size="sm" arrow>
            Submit a listing
          </Button>
        </>
      }
    >
      {/* Stat tiles */}
      <section aria-labelledby="dash-overview">
        <h2 id="dash-overview" className="sr-only">
          Overview
        </h2>
        <ul className="grid grid-cols-2 gap-3 md:gap-4 xl:grid-cols-4">
          {stats.map((s) => (
            <Card as="li" key={s.label} padding="sm">
              <Stat value={s.value} label={s.label} size="sm" animate={false} />
            </Card>
          ))}
        </ul>
      </section>

      <div className="mt-12 grid gap-12 xl:grid-cols-12 xl:gap-10">
        {/* Quick actions */}
        <section aria-labelledby="dash-tools" className="xl:col-span-8">
          <PanelHeading id="dash-tools">Tools</PanelHeading>
          <ul className="grid gap-3 sm:grid-cols-2 md:gap-4">
            {portalSections.map(({ title, description, icon: Icon, href }) => (
              <li key={href} className="flex">
                <Card to={href} hover padding="sm" className="flex w-full flex-col">
                  <div className="flex items-center justify-between">
                    <Icon size={18} strokeWidth={1.75} className="text-brass-deep" aria-hidden />
                    <ArrowRight
                      size={16}
                      strokeWidth={1.75}
                      className="text-mute-soft transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:text-ink"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-4 font-sans text-[15px] font-medium text-ink sm:mt-6">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mute">{description}</p>
                </Card>
              </li>
            ))}
            <li className="flex">
              <Card tone="deep" padding="sm" className="flex w-full flex-col justify-between">
                <p className="text-sm leading-relaxed text-mute-strong">
                  Need something that is not listed here? Legacy HQ handles custom requests for licensed brokers.
                </p>
                <a
                  href="mailto:info@legacybrokers.com"
                  className="mt-4 inline-flex text-sm font-medium text-ink sm:mt-6 underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
                >
                  info@legacybrokers.com
                </a>
              </Card>
            </li>
          </ul>
        </section>

        {/* Recent activity */}
        <section aria-labelledby="dash-activity" className="xl:col-span-4">
          <PanelHeading id="dash-activity">Recent activity</PanelHeading>
          <Card padding="none">
            <ol className="divide-y divide-line">
              {recentActivity.map((a) => (
                <li key={a.action + a.item} className="flex items-start justify-between gap-4 px-5 py-4">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-ink">{a.action}</p>
                    <p className="mt-0.5 text-sm text-mute">{a.item}</p>
                  </div>
                  <p className="tabular shrink-0 pt-0.5 text-xs text-mute-soft">{a.time}</p>
                </li>
              ))}
            </ol>
          </Card>
        </section>
      </div>
    </PortalShell>
  );
};

export default BrokerDashboard;
