import { BarChart3, Briefcase, Network, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ProcessSection from '../../components/ProcessSection';
import {
  Badge,
  Button,
  CheckList,
  Container,
  CtaBand,
  Eyebrow,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from '../../components/ui';

const SERVICES: { label: string; title: string; body: string; icon: LucideIcon }[] = [
  {
    label: 'Planning',
    title: 'Strategic sale planning',
    body: 'We prepare the business before it goes to market, through financial recasting and growth adjustments, so it goes to market with clean numbers and a defensible multiple.',
    icon: BarChart3,
  },
  {
    label: 'Reach',
    title: 'Buyer network & PE relationships',
    body: 'Relationships with private equity groups and corporate buyers give your transaction nationwide and international reach.',
    icon: Network,
  },
  {
    label: 'Process',
    title: 'Confidential auction process',
    body: 'Targeted auctions or broad outreach, run under strict confidentiality, to generate competing offers for your company.',
    icon: ShieldCheck,
  },
  {
    label: 'Structure',
    title: 'Deal expertise',
    body: 'Our finance professionals navigate earn-outs, equity rollovers and regulatory approvals, backed by Series 79 licensing.',
    icon: Briefcase,
  },
];

const DEAL_TYPES = [
  'Management buyouts',
  'Private equity recapitalizations',
  'Strategic acquisitions',
  'Corporate divestitures',
  'International transactions',
  'Complex deal structures',
];

const AUDIENCE: { title: string; body: string }[] = [
  {
    title: 'Owners weighing a recapitalization',
    body: 'You want liquidity now and a stake in the next stage of growth. We run the process with private equity groups and negotiate the rollover terms.',
  },
  {
    title: 'Founders planning a management buyout',
    body: 'Your leadership team wants to own the company. We structure the financing, any seller note and the transition so the deal holds up for both sides.',
  },
  {
    title: 'Companies with cross-border or regulatory complexity',
    body: 'International buyers, licensed operations or approvals that gate the closing. We map those conditions early and sequence the process around them.',
  },
];

function MandateLedger() {
  return (
    <div className="overflow-hidden rounded-xl border border-line-inverse bg-ink-800/80">
      <div className="flex items-center justify-between gap-4 border-b border-line-inverse px-6 py-4">
        <span className="eyebrow text-paper/60">Mandate types</span>
        <Badge tone="inverse" dot>
          Confidential
        </Badge>
      </div>
      <div className="px-6 py-7">
        <CheckList items={DEAL_TYPES} tone="inverse" />
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-line-inverse px-6 py-3.5 text-[12px] text-paper/50">
        <span>Nationwide and international reach</span>
        <span>Series 79</span>
      </div>
    </div>
  );
}

// Hairline dividers for the 1 → 2 column services grid.
const serviceCell = [
  'md:pr-10',
  'md:border-l md:border-line md:pl-10',
  'md:pr-10',
  'md:border-l md:border-line md:pl-10',
];

export default function MAServices() {
  return (
    <>
      <PageHero
        tone="ink"
        crumbs={[{ label: 'Sell', to: '/sell/brokerage' }, { label: 'M&A advisory' }]}
        eyebrow="Sell · M&A advisory"
        title="Investment-bank rigor, boutique attention."
        lede={
          <>
            Our M&amp;A division pairs the analytical rigor of a top investment bank with the personal service of a
            boutique. We take on larger and more complex lower-middle-market mandates, typically above the{' '}
            <span className="whitespace-nowrap">$25M brokerage</span> range.
          </>
        }
        actions={
          <>
            <Button to="/contact?intent=ma" variant="inverse" size="lg" arrow>
              Talk to an M&amp;A advisor
            </Button>
            <Button to="/sell/brokerage" variant="inverse-outline" size="lg">
              Brokerage services
            </Button>
          </>
        }
        aside={<MandateLedger />}
      />

      {/* Services */}
      <Section tone="paper" aria-labelledby="ma-services">
        <Container>
          <SectionHeading
            split
            id="ma-services"
            eyebrow="M&A services"
            title="From sale planning to a signed agreement."
            lede="Sell-side work to an investment-bank standard, for lower-middle-market companies, from pre-sale planning through signing."
          />
          <div className="mt-14 grid md:mt-20 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 0.06}
                className={`border-t border-line py-9 md:py-12 ${serviceCell[i]} ${i > 1 ? 'md:border-b-0' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <Eyebrow index={i + 1} tone="mute">
                    {s.label}
                  </Eyebrow>
                  <s.icon className="h-[18px] w-[18px] text-ink/70" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-6 font-display text-display-md text-ink md:mt-8">{s.title}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-mute">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ProcessSection
        mode="sell"
        compact
        tone="white"
        eyebrow="How we run a process"
        title="Five disciplined phases, scaled to the mandate."
        subtitle="The same sequence behind every Legacy sale, from recast and CIM to LOI and closing. Depth and timing move with the size and complexity of the deal."
        ctaTo="/contact?intent=ma"
      />

      {/* Who this is for */}
      <Section tone="deep" aria-labelledby="ma-audience">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Who this is for</Eyebrow>
              <h2 id="ma-audience" className="mt-4 font-display text-display-lg text-ink">
                Complex mandates in the lower middle market.
              </h2>
              <p className="mt-5 max-w-md text-lede text-mute">
                From management buyouts to private equity recapitalizations, our team has the connections to find the
                right partner for your company’s next stage.
              </p>
            </Reveal>
            <dl className="lg:col-span-6 lg:col-start-7">
              {AUDIENCE.map((a, i) => (
                <Reveal
                  key={a.title}
                  delay={i * 0.06}
                  className="border-t border-line-strong py-7 first:pt-7 last:pb-0"
                >
                  <dt className="font-display text-display-sm text-ink">{a.title}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-mute">{a.body}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <CtaBand
        tone="brass"
        eyebrow="M&A advisory"
        title="Weigh a strategic exit, confidentially."
        body="Whether you’re considering a strategic sale, a management buyout or a private equity partnership, our M&A advisors can help you explore the options."
        actions={
          <>
            <Button to="/contact?intent=ma" size="lg" arrow>
              Talk to an M&amp;A advisor
            </Button>
            <Button to="/sell/case-studies" size="lg" variant="secondary">
              Closed transactions
            </Button>
          </>
        }
      />
    </>
  );
}
