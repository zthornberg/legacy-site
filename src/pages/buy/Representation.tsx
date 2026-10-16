import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
import ProcessSection from '../../components/ProcessSection';
import SourcingTracker from '../../components/buy/SourcingTracker';
import { Field, TargetEvField } from '../../components/buy/form';

/** In-page anchor for the mandate brief form; every "Start a mandate" on this page points here. */
const BRIEF_ID = 'mandate-brief';

/** What the buyer gets. Un-numbered on purpose: the phased sequence lives in ProcessSection below. */
const DELIVERABLES = [
  {
    title: 'A written mandate',
    body: 'Your thesis, size parameters and must-have traits, turned into the screening criteria we source against.',
  },
  {
    title: 'Proprietary sourcing',
    body: 'Our network and proprietary deal flow surface high-signal opportunities, many off-market, that match your criteria.',
  },
  {
    title: 'A diligence plan',
    body: 'Diligence structured across financial, operational and strategic factors, so you know what to test before you commit.',
  },
  {
    title: 'Bid and negotiation strategy',
    body: 'Competitive positioning and a negotiation plan built to win the right deal at the right price.',
  },
  {
    title: 'Closing and a 100-day plan',
    body: 'A disciplined close, then an integration roadmap so value creation starts in the first quarter of ownership.',
  },
];

/** `name` is the value the inquiry form submits (unchanged); `label` is display copy. */
const BUYER_TYPES = [
  { name: 'Private Equity', label: 'Private equity', note: 'Platform and add-on sourcing against an investment committee thesis.' },
  { name: 'Family Office', label: 'Family office', note: 'Patient capital looking for durable, owner-operated businesses.' },
  { name: 'Search Fund', label: 'Search fund', note: 'Searchers and their investors who need qualified, proprietary deal flow.' },
  { name: 'Corporate/Strategic', label: 'Corporate / strategic', note: 'Acquirers adding capability, customers or geography.' },
  { name: 'Individual Operator', label: 'Individual operator', note: 'Experienced operators buying a business to run.' },
];

function MandateForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    buyerType: '',
    targetEV: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buyer representation inquiry:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card padding="none" className="p-6 sm:p-8 md:p-10">
        <div role="status">
          <Eyebrow>Mandate brief received</Eyebrow>
          <p className="mt-4 font-display text-display-md text-ink">Thank you. An advisor will be in touch.</p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-mute">
            We reply within one business day to schedule a 20-minute fit call about your criteria.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <TextLink to="/buy/listings">See current listings</TextLink>
            <TextLink to="/buy/registration" tone="mute">
              Register as a buyer
            </TextLink>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card padding="none" className="p-6 sm:p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
          <Field id="rep-name" label="Name">
            <input
              id="rep-name"
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="field"
            />
          </Field>
          <Field id="rep-email" label="Email">
            <input
              id="rep-email"
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="field"
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
          <Field id="rep-type" label="Buyer type">
            <select
              id="rep-type"
              required
              value={formData.buyerType}
              onChange={(e) => handleInputChange('buyerType', e.target.value)}
              className="field"
            >
              <option value="">Select buyer type</option>
              {BUYER_TYPES.map((t) => (
                <option key={t.name} value={t.name}>
                  {t.label}
                </option>
              ))}
            </select>
          </Field>
          <TargetEvField id="rep-ev" value={formData.targetEV} onChange={(v) => handleInputChange('targetEV', v)} />
        </div>

        <Field id="rep-message" label="Acquisition criteria" optional>
          <textarea
            id="rep-message"
            rows={5}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            placeholder="Preferred industries, size, geographic focus and timeline."
            className="field resize-y"
          />
        </Field>

        <div className="pt-2">
          <Button type="submit" size="lg" full arrow>
            Send mandate brief
          </Button>
          <p className="mt-3 text-center text-xs text-mute">Confidential. We reply within one business day.</p>
        </div>
      </form>
    </Card>
  );
}

export default function Representation() {
  const { hash, key } = useLocation();

  // ScrollToTop only reacts when the hash changes. Router links to the brief (the process CTA) can repeat the
  // same hash, so re-scroll on every navigation that targets it.
  useEffect(() => {
    if (hash === `#${BRIEF_ID}`) document.getElementById(BRIEF_ID)?.scrollIntoView({ block: 'start' });
  }, [hash, key]);

  return (
    <>
      <PageHero
        tone="ink"
        crumbs={[{ label: 'Buy', to: '/buy/listings' }, { label: 'Buyer representation' }]}
        eyebrow="Buy · Representation"
        title="Buy-side advisory, from mandate to close."
        lede="Legacy sources off-market, high-signal deals, then runs a professional process so you can move first and win clean."
        actions={
          <>
            <Button href={`#${BRIEF_ID}`} variant="inverse" size="lg" arrow>
              Start a mandate
            </Button>
            <Button to="/buy/listings" variant="inverse-outline" size="lg">
              See listings
            </Button>
          </>
        }
        aside={<SourcingTracker />}
      />

      {/* What a mandate includes */}
      <Section tone="paper" aria-labelledby="scope-title">
        <Container>
          <SectionHeading
            split
            id="scope-title"
            eyebrow="What a mandate includes"
            title="A professional process on your side of the table."
            lede="We work as an extension of your deal team, from a written mandate through the first 100 days of ownership."
          />
          <Reveal className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((s) => (
              <div key={s.title} className="bg-white p-7 sm:p-8">
                <span aria-hidden className="block w-6 border-t border-brass" />
                <h3 className="mt-5 font-display text-display-sm text-ink">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mute">{s.body}</p>
              </div>
            ))}
            <div className="flex flex-col justify-between gap-8 bg-paper-deep p-7 sm:p-8">
              <div>
                <Eyebrow>Next step</Eyebrow>
                <p className="mt-5 font-display text-display-sm text-ink">Start with a 20-minute fit call.</p>
                <p className="mt-3 text-[15px] leading-relaxed text-mute">
                  Bring your thesis. We will tell you plainly whether we can source to it.
                </p>
              </div>
              <TextLink href={`#${BRIEF_ID}`}>Start a mandate</TextLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Who we represent */}
      <Section tone="paper" divider aria-labelledby="who-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                id="who-title"
                eyebrow="Who we represent"
                title="Built for buyers with a thesis."
                lede="We represent sophisticated buyers across the investment spectrum, from first-time operators to institutional capital."
              />
            </div>
            <Reveal as="ul" className="border-t border-line lg:col-span-7 lg:mt-2">
              {BUYER_TYPES.map((t) => (
                <li
                  key={t.name}
                  className="grid gap-1.5 border-b border-line py-5 sm:grid-cols-[13rem_minmax(0,1fr)] sm:items-baseline sm:gap-8"
                >
                  <span className="font-display text-2xl leading-tight text-ink">{t.label}</span>
                  <span className="text-[15px] leading-relaxed text-mute">{t.note}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      <ProcessSection
        mode="buy"
        title="First screen to first 100 days."
        subtitle="Disciplined origination and underwriting in five phases. Timelines are indicative and move with deal complexity."
        ctaTo={`#${BRIEF_ID}`}
      />

      {/* Mandate brief */}
      <Section tone="deep" id={BRIEF_ID} className="scroll-mt-24" aria-labelledby="brief-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                id="brief-title"
                eyebrow="Mandate brief"
                title="Tell us what you are looking for."
                lede="Share your acquisition criteria and a Legacy advisor will reply within one business day."
              />
              <Reveal delay={0.06} className="mt-10 border-t border-line-strong pt-8">
                <p className="mb-5 text-[13px] font-medium text-ink">Helpful to include</p>
                <CheckList
                  size="sm"
                  items={[
                    'Industries and business models you will consider',
                    'Size range: revenue, EBITDA or enterprise value',
                    'Geography and timeline',
                    'How the acquisition will be financed',
                  ]}
                />
              </Reveal>
            </div>
            <Reveal delay={0.06} className="lg:col-span-7">
              <MandateForm />
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Buyer network"
        title="Registered buyers see new businesses first."
        body="Not ready for a mandate? Register once with your criteria. A Legacy advisor matches you to new listings and handles the NDA."
        actions={
          <>
            <Button to="/buy/registration" size="lg" arrow>
              Register as a buyer
            </Button>
            <Button to="/buy/listings" variant="secondary" size="lg">
              See listings
            </Button>
          </>
        }
      />
    </>
  );
}
