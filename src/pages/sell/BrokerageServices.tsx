import { FileText, Handshake, Radar, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ProcessSection from '../../components/ProcessSection';
import ProofStrip from '../../components/sell/ProofStrip';
import TeaserCard from '../../components/sell/TeaserCard';
import CtaActions from '../../components/sell/CtaActions';
import {
  Button,
  Card,
  CheckList,
  Container,
  CtaBand,
  Eyebrow,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
  TextLink,
} from '../../components/ui';

const SERVICES: { label: string; title: string; body: string; icon: LucideIcon }[] = [
  {
    label: 'Prepare',
    title: 'Valuation & packaging',
    body: 'A thorough valuation, recast financials and a professional marketing package (blind teaser and CIM) built to attract qualified buyers.',
    icon: FileText,
  },
  {
    label: 'Market',
    title: 'Marketing & buyer reach',
    body: 'Your company is marketed confidentially to a network of 2,400+ registered buyers, maximizing exposure while protecting your identity.',
    icon: Radar,
  },
  {
    label: 'Negotiate',
    title: 'Negotiation & closing',
    body: 'Experienced advisors negotiate terms, guide due diligence and work alongside your attorneys through to closing.',
    icon: Handshake,
  },
  {
    label: 'Support',
    title: 'White-glove support',
    body: 'Your Legacy broker is with you at every step, from initial strategy to closing documents, focused on the best outcome.',
    icon: ShieldCheck,
  },
];

const BENEFITS = [
  'Comprehensive business valuation',
  'Professional marketing materials',
  'Access to 2,400+ qualified buyers',
  'Confidential marketing process',
  'Expert negotiation support',
  'Due diligence guidance',
  'Transaction coordination',
  'Post-closing support',
];

// Column dividers for the 1 → 2 → 4 column services grid.
const serviceCell = ['', 'sm:border-l sm:pl-8', 'lg:border-l lg:pl-8', 'sm:border-l sm:pl-8'];

export default function BrokerageServices() {
  return (
    <>
      <PageHero
        tone="paper"
        crumbs={[{ label: 'Sell', to: '/sell/brokerage' }, { label: 'Brokerage services' }]}
        eyebrow="Sell · Brokerage services"
        title="A confidential, competitive sale for your company."
        lede={
          <>
            Selling your company is one of the biggest decisions of your life, and we treat it that way. For owners of{' '}
            <span className="whitespace-nowrap">$1M–$25M</span> businesses, we handle valuation, packaging, buyer
            outreach, negotiation and closing.
          </>
        }
        actions={
          <>
            <Button to="/contact?intent=sell" size="lg" arrow>
              Request a confidential valuation
            </Button>
            <Button to="/sell/case-studies" size="lg" variant="secondary">
              See closed transactions
            </Button>
          </>
        }
        aside={<TeaserCard />}
      >
        <ProofStrip className="mt-16 md:mt-24" />
      </PageHero>

      {/* What we do */}
      <Section tone="white" aria-labelledby="bk-services">
        <Container>
          <SectionHeading
            split
            id="bk-services"
            eyebrow="What we do"
            title="One advisor, every part of the sale."
            lede="From valuation to closing, we handle each step of your sale with expertise and care, and keep the process confidential throughout."
          />
          <div className="mt-14 grid sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 0.06}
                className={`border-t border-line pb-10 pt-7 sm:pr-8 lg:pb-2 ${serviceCell[i]}`}
              >
                <div className="flex items-center justify-between">
                  <Eyebrow index={i + 1} tone="mute">
                    {s.label}
                  </Eyebrow>
                  <s.icon className="h-[18px] w-[18px] text-ink/70" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-6 font-display text-display-sm text-ink lg:mt-10">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mute">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Legacy */}
      <Section tone="paper" divider aria-labelledby="bk-why">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <SectionHeading
                id="bk-why"
                eyebrow="Why Legacy"
                title="Why owners choose Legacy"
                lede="Traditional brokerage discipline, modern tools and a client-first standard of service, from the first call to the last signature."
              />
              <Reveal delay={0.08} className="mt-10 border-t border-line pt-10">
                <CheckList items={BENEFITS} columns={2} />
              </Reveal>
            </div>

            <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9 lg:pt-2">
              <Card tone="brass" padding="lg">
                <Eyebrow>Complimentary</Eyebrow>
                <h3 className="mt-4 font-display text-display-md text-ink">Start with a valuation</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-mute-strong">
                  A complimentary business valuation and consultation with one of our experienced advisors. Confidential
                  from the first conversation.
                </p>
                <div className="mt-8 space-y-5">
                  <Button to="/contact?intent=sell" arrow full>
                    Request a valuation
                  </Button>
                  <div className="text-center">
                    <TextLink to="/sell/case-studies" tone="mute">
                      See closed transactions
                    </TextLink>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <ProcessSection mode="sell" tone="white" />

      <CtaBand
        tone="brass"
        eyebrow="Confidential valuation"
        title="Start with a confidential conversation."
        body="Tell us about your company and your timing. One of our advisors will walk you through value, buyer demand and what a sale would involve."
        actions={
          <CtaActions>
            <Button to="/contact?intent=sell" size="lg" arrow>
              Request a confidential valuation
            </Button>
            <Button to="/sell/ma-services" size="lg" variant="secondary">
              M&amp;A advisory
            </Button>
          </CtaActions>
        }
      />
    </>
  );
}
