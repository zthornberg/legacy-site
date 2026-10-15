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
  Stat,
  TextLink,
} from '../../components/ui';
import { assuranceCopy, financingNote, includedInBoth, tiers } from '../../content/licensing';
import TierCard from '../../components/licensing/TierCard';
import ComparisonTable from '../../components/licensing/ComparisonTable';
import EconomicsLedger from '../../components/licensing/EconomicsLedger';
import Faq from '../../components/licensing/Faq';
import Disclaimers from '../../components/licensing/Disclaimers';
import { APPLY_PATH, earningsFootnote, earningsStat, pricingFaq } from '../../components/licensing/content';

export default function Pricing() {
  return (
    <>
      <PageHero
        tone="paper"
        crumbs={[{ label: 'Licensing', to: '/licensing/program' }, { label: 'Pricing' }]}
        eyebrow="Licensing program"
        title="Two licenses. One standard of support."
        lede="Both licenses include the full Legacy platform, the Scottsdale training intensive and ongoing coaching; they differ in lead volume, data depth and royalty."
      >
        <div className="mt-14 grid gap-5 md:mt-16 lg:grid-cols-2 lg:gap-6">
          {tiers.map((tier, i) => (
            <TierCard key={tier.id} tier={tier} delay={i * 0.06} />
          ))}
        </div>
        <Reveal delay={0.12}>
          <p className="mt-6 text-xs leading-relaxed text-mute-soft">
            Prices are one-time license fees. The royalty applies to closed commissions only. Financing is available for
            select applicants.
          </p>
        </Reveal>
      </PageHero>

      {/* Included in both */}
      <Section tone="white" id="included">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Included in both"
                title="The platform is the same. The license sets the scale."
                lede="Training, coaching, tooling and the buyer network come with every license. What changes is how much lead flow and data you start with, and what you pay on closed commissions."
              />
            </div>
            <Reveal delay={0.06} className="lg:col-span-7 lg:pt-3">
              <CheckList items={includedInBoth} columns={2} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Compare */}
      <Section tone="paper" id="compare">
        <Container>
          <SectionHeading
            eyebrow="Compare"
            title="Every difference, side by side."
            lede="Lead volume, data depth, firm support and royalty are the lines that change. Everything else is identical."
            split
            action={<TextLink to={APPLY_PATH}>Apply for a license</TextLink>}
          />
          <Reveal className="mt-12 md:mt-14">
            <ComparisonTable />
          </Reveal>
        </Container>
      </Section>

      {/* Financing + assurance */}
      <Section tone="white" id="financing">
        <Container>
          <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
            <Reveal className="lg:col-span-7">
              <Card tone="deep" padding="lg" className="h-full">
                <Eyebrow>Financing</Eyebrow>
                <h2 className="mt-4 font-display text-display-md text-ink">Financing for select applicants*</h2>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-mute">{financingNote}</p>
                <p className="mt-8 text-xs leading-relaxed text-mute-soft">
                  *For qualified candidates. Financing and deferred schedules are discussed during the interview process
                  and are not available to every applicant.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.06} className="lg:col-span-5">
              <Card tone="brass" padding="lg" className="h-full">
                <Eyebrow>Assurance</Eyebrow>
                <h2 className="mt-4 font-display text-display-md text-ink">Deliverable-based, by design.</h2>
                <p className="mt-5 text-[15px] leading-relaxed text-mute-strong">{assuranceCopy}</p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* The economics */}
      <Section tone="deep" id="economics">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="The economics"
                title="What one closed mandate looks like."
                lede="A worked example using the program's published rates: a 10% success fee on the sale, then the royalty for each license. Nothing else is modeled."
              />
              <Reveal delay={0.06} className="mt-12 border-t border-line pt-8">
                <Stat value={earningsStat.value} label={earningsStat.label} />
                <p className="mt-5 max-w-sm text-xs leading-relaxed text-mute-soft">{earningsFootnote}</p>
              </Reveal>
            </div>
            <Reveal delay={0.06} className="lg:col-span-7">
              <EconomicsLedger />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="white" id="faq">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Questions"
                title="Before you apply."
                lede="The questions we hear most on the first call. Anything else, ask the team."
              />
              <Reveal delay={0.06} className="mt-8">
                <Button to="/contact" variant="secondary" arrow>
                  Talk to the team
                </Button>
              </Reveal>
            </div>
            <Reveal delay={0.06} className="lg:col-span-8">
              <Faq items={pricingFaq} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Disclaimers />

      <CtaBand
        tone="ink"
        eyebrow="Apply"
        title="Apply for a Legacy license."
        body="Legacy accepts a handful of new brokers each quarter. Start an application, or talk to the team first."
        actions={
          <>
            <Button to={APPLY_PATH} variant="inverse" size="lg" arrow>
              Start an application
            </Button>
            <Button to="/contact" variant="inverse-outline" size="lg">
              Talk to the team
            </Button>
          </>
        }
        className="border-b border-line-inverse"
      />
    </>
  );
}
