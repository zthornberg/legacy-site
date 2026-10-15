import { Badge, Button, Card, CheckList, Container, CtaBand, Eyebrow, PageHero, Reveal, Section, SectionHeading, Stat, TextLink } from '../../components/ui';
import { assuranceCopy, tiers } from '../../content/licensing';
import FirstNinetyDays from '../../components/licensing/FirstNinetyDays';
import TierCard from '../../components/licensing/TierCard';
import Disclaimers from '../../components/licensing/Disclaimers';
import {
  APPLY_PATH,
  assuranceDeliverables,
  cultureCopy,
  earningsFootnote,
  opportunityCopy,
  programFeatures,
  timelineSteps,
} from '../../components/licensing/content';

export default function ProgramSummary() {
  return (
    <>
      <PageHero
        tone="ink"
        size="lg"
        eyebrow="Licensing program"
        title="Build an M&A practice on the Legacy platform."
        lede="The tools, data and senior mentorship to build a real M&A practice without going it alone: serve owners well, and earn like a top-5% advisor."
        actions={
          <>
            <Button to="/licensing/pricing" variant="inverse" size="lg" arrow>
              See pricing
            </Button>
            <Button to="/licensing/testimonials" variant="inverse-outline" size="lg">
              Read broker stories
            </Button>
          </>
        }
        aside={<FirstNinetyDays />}
      />

      {/* The opportunity */}
      <Section tone="paper" id="opportunity">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="The opportunity"
                title="An under-served market, and a platform built for it."
              />
              <Reveal delay={0.06} className="mt-8 max-w-2xl space-y-5 text-[17px] leading-relaxed text-mute-strong">
                {opportunityCopy.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
              <dl className="divide-y divide-line border-y border-line">
                {opportunityCopy.stats.map((s) => (
                  <div key={s.value} className="py-7 first:pt-0 last:pb-0 lg:first:pt-7 lg:last:pb-7">
                    <Stat value={s.value} label={s.label} />
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-xs leading-relaxed text-mute-soft">{earningsFootnote}</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* What you get */}
      <Section tone="white" id="what-you-get">
        <Container>
          <SectionHeading
            eyebrow="What you get"
            title="Six things every licensee receives."
            lede="The same platform under both licenses. Lead volume and data depth scale with the tier you choose."
            split
            action={<TextLink to="/licensing/pricing">Compare the licenses</TextLink>}
          />
          <Reveal className="mt-12 md:mt-14">
            <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {programFeatures.map((f, i) => (
                <li key={f.title} className="bg-white p-7 md:p-8">
                  <Eyebrow tone="mute" index={i + 1}>
                    {f.kicker}
                  </Eyebrow>
                  <h3 className="mt-5 font-display text-display-sm text-ink">{f.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-mute">{f.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </Section>

      {/* How it starts */}
      <Section tone="deep" id="how-it-starts">
        <Container>
          <SectionHeading
            eyebrow="How it starts"
            title="From application to first mandate."
            lede="Four steps, in order. Most of the work in the first 90 days is ours."
            split
          />
          <ol className="mt-12 grid gap-10 md:mt-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {timelineSteps.map((s, i) => (
              <Reveal key={s.kicker} as="li" delay={i * 0.06} className="relative border-t border-line-strong pt-6">
                <span aria-hidden className="absolute -top-px left-0 h-px w-10 bg-brass" />
                <Eyebrow tone="mute" index={i + 1}>
                  {s.kicker}
                </Eyebrow>
                <h3 className="mt-4 font-display text-display-sm text-ink">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mute">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Who we look for */}
      <Section tone="white" id="who-we-look-for">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Who we look for"
                title="A partnership, not a shortcut."
              />
            </div>
            <Reveal delay={0.06} className="lg:col-span-7 lg:pt-3">
              <div className="max-w-2xl space-y-5 text-[17px] leading-relaxed text-mute-strong">
                {cultureCopy.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-8 border-t border-line pt-6">
                <Eyebrow tone="mute">Backgrounds that succeed here</Eyebrow>
                <CheckList items={cultureCopy.backgrounds} columns={2} size="sm" className="mt-4" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Assurance */}
      <Section tone="paper" id="assurance">
        <Container>
          <Reveal>
            <Card tone="brass" padding="lg">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <Eyebrow>Our assurance</Eyebrow>
                    <Badge tone="outline">Not an earnings guarantee</Badge>
                  </div>
                  <h2 className="mt-4 font-display text-display-md text-ink">A deliverable-based assurance.</h2>
                  <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-mute-strong">{assuranceCopy}</p>
                </div>
                <div className="lg:col-span-5 lg:border-l lg:border-brass-soft lg:pl-10">
                  <Eyebrow tone="mute">What we commit to deliver</Eyebrow>
                  <CheckList items={assuranceDeliverables} size="sm" className="mt-4" />
                </div>
              </div>
            </Card>
          </Reveal>
        </Container>
      </Section>

      {/* Pricing teaser */}
      <Section tone="white" id="pricing">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Two licenses. One standard of support."
            lede="Both include the full platform, training and coaching. They differ in lead volume, data depth and royalty."
            split
            action={<TextLink to="/licensing/pricing">See full pricing</TextLink>}
          />
          <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 lg:gap-6">
            {tiers.map((tier, i) => (
              <TierCard key={tier.id} tier={tier} compact delay={i * 0.06} />
            ))}
          </div>
        </Container>
      </Section>

      <Disclaimers />

      <CtaBand
        eyebrow="Apply"
        title="Apply for a Legacy license."
        body="Legacy accepts a handful of new brokers each quarter. Start an application, or see the full pricing first."
        actions={
          <>
            <Button to={APPLY_PATH} size="lg" arrow>
              Start an application
            </Button>
            <Button to="/licensing/pricing" variant="secondary" size="lg">
              See pricing
            </Button>
          </>
        }
      />
    </>
  );
}
