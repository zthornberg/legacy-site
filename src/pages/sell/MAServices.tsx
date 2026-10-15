import { BarChart3, Briefcase, Network, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ProcessSection from '../../components/ProcessSection';
import CtaActions from '../../components/sell/CtaActions';
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
    body: 'We prepare the business before it goes to market, through financial recasting and growth adjustments, so it commands top dollar.',
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
    title: 'Lower middle-market owners',
    body: 'Owners weighing a strategic sale, a management buyout or a private equity partnership, and looking for the right partner for the company’s next stage.',
  },
  {
    title: 'Complex structures',
    body: 'Earn-outs, equity rollovers and regulatory approvals, handled by finance professionals with Series 79 licensing and structured to maximize value for every stakeholder.',
  },
  {
    title: 'Boutique attention',
    body: 'Personal attention with investment banking-level expertise, direct relationships with PE firms and strategic buyers, and rigorous due diligence support.',
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
        lede="Our M&A division pairs the analytical rigor of a top investment bank with the personal service of a boutique. We specialize in complex transactions for lower middle-market companies seeking strategic partners."
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
            lede="Wall Street-grade work for mid-sized companies, from pre-sale planning through deal execution."
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
        title="Five disciplined phases, run to an investment-bank standard."
        subtitle="The same sequence behind every Legacy sale, from recast and CIM to LOI and closing, scaled to the size and complexity of the mandate."
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
          <CtaActions>
            <Button to="/contact?intent=ma" size="lg" arrow>
              Talk to an M&amp;A advisor
            </Button>
            <Button to="/sell/case-studies" size="lg" variant="secondary">
              Closed transactions
            </Button>
          </CtaActions>
        }
      />
    </>
  );
}
