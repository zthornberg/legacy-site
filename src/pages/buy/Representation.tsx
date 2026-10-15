import React, { useState } from 'react';
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
import { Field } from '../../components/buy/form';

const SERVICES = [
  {
    title: 'Mandate & criteria',
    body: 'Define the investment thesis, size parameters and must-have characteristics of the right acquisition, then turn them into screening criteria.',
  },
  {
    title: 'Sourcing & first pass',
    body: 'Our network and proprietary deal flow surface high-signal opportunities, many off-market, that match your criteria.',
  },
  {
    title: 'Diligence prep',
    body: 'Structure diligence across financial, operational and strategic factors, so you know what to test before you commit.',
  },
  {
    title: 'Bid strategy',
    body: 'Competitive positioning and a negotiation strategy built to win the right deal at the right price.',
  },
  {
    title: 'Close & 90-day plan',
    body: 'A disciplined closing process, then an integration roadmap so value creation starts in the first quarter of ownership.',
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
      <Card padding="none" className="p-6 sm:p-8 md:p-10 lg:min-h-[32rem]">
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
          <Field id="rep-ev" label="Target enterprise value" optional>
            <select
              id="rep-ev"
              value={formData.targetEV}
              onChange={(e) => handleInputChange('targetEV', e.target.value)}
              className="field"
            >
              <option value="">Select range</option>
              <option value="1m-5m">$1M – $5M</option>
              <option value="5m-10m">$5M – $10M</option>
              <option value="10m-25m">$10M – $25M</option>
              <option value="25m-plus">$25M+</option>
            </select>
          </Field>
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
            <Button to="/contact?intent=buy" variant="inverse" size="lg" arrow>
              Start a mandate
            </Button>
            <Button to="/buy/listings" variant="inverse-outline" size="lg">
              See listings
            </Button>
          </>
        }
        aside={<SourcingTracker />}
      />

      {/* Scope of work */}
      <Section tone="paper" aria-labelledby="scope-title">
        <Container>
          <SectionHeading
            split
            id="scope-title"
            eyebrow="Scope of work"
            title="A professional process on your side of the table."
            lede="We work as an extension of your deal team, from a written mandate through the first 90 days of ownership."
          />
          <Reveal className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="bg-white p-7 sm:p-8">
                <Eyebrow tone="mute" index={i + 1}>
                  Stage
                </Eyebrow>
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
              <TextLink to="/contact?intent=buy">Start a mandate</TextLink>
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

      <ProcessSection mode="buy" />

      {/* Mandate brief */}
      <Section tone="deep" aria-labelledby="brief-title">
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
        title="Not ready for a mandate? Start with the listings."
        body="Registered buyers see new businesses first, with the NDA handled by a Legacy advisor."
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
