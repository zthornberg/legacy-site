import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Card, Container, Eyebrow, PageHero, Reveal, Section, TextLink } from '../components/ui';
import { Field, NextSteps } from '../components/buy/form';

const INQUIRY_TYPES = [
  { value: 'sell-business', label: 'Sell my business' },
  { value: 'buy-business', label: 'Buy a business' },
  { value: 'licensing-program', label: 'Licensing program' },
  { value: 'ma-services', label: 'M&A advisory' },
  { value: 'general', label: 'General inquiry' },
];

/** Words a plain slug → Title Case pass would get wrong. */
const SLUG_WORDS: Record<string, string> = { it: 'IT', msp: 'MSP', hvac: 'HVAC', saas: 'SaaS', and: 'and' };

/** `?industry=construction-homebuilding` → "Construction Homebuilding". Unknown or malformed slugs are ignored. */
function industryFromSlug(slug: string | null) {
  if (!slug || !/^[a-z0-9-]{2,60}$/.test(slug)) return '';
  return slug
    .split('-')
    .filter(Boolean)
    .map((w) => SLUG_WORDS[w] ?? w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/** `?intent=` values accepted from CTAs across the site. */
const INTENT_TO_TYPE: Record<string, string> = {
  sell: 'sell-business',
  buy: 'buy-business',
  licensing: 'licensing-program',
  ma: 'ma-services',
};

const PLACEHOLDERS: Record<string, string> = {
  'sell-business': 'The business, its industry and approximate revenue, and when you are thinking about a sale.',
  'buy-business': 'Your acquisition criteria: industries, size, geography and timeline.',
  'licensing-program': 'Your background and the market where you would like to build a practice.',
  'ma-services': 'The transaction you are considering and your timeline.',
  general: 'How can we help?',
};

const NEXT_STEPS = [
  { title: 'We reply within one business day', body: 'A Legacy advisor reads your note and responds directly.' },
  { title: 'A 20-minute fit call', body: 'We learn your goals, timing and non-negotiables, and answer your questions.' },
  {
    title: 'A tailored next step',
    body: 'A valuation, an introduction to the buyer process or a licensing walkthrough, depending on what you need.',
  },
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const intent = searchParams.get('intent') ?? '';
  const industry = industryFromSlug(searchParams.get('industry'));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: INTENT_TO_TYPE[intent] ?? '',
    // Arriving from an industry page: carry the sector into the note so the advisor sees it.
    message: industry ? `Industry: ${industry}\n\n` : '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Keep the preselection in sync when an in-page link changes ?intent=
  useEffect(() => {
    const mapped = INTENT_TO_TYPE[intent];
    if (mapped) setFormData((prev) => ({ ...prev, inquiryType: mapped }));
  }, [intent]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  const placeholder =
    PLACEHOLDERS[formData.inquiryType] ?? 'Your goals, timeline and any specific questions you have.';

  return (
    <>
      <PageHero
        tone="paper"
        size="sm"
        eyebrow="Contact"
        title="Start a confidential conversation."
        lede="Whether you are preparing to sell, looking to buy or exploring the licensing program, tell us where you are. Every inquiry is handled in confidence, and you will hear back within one business day."
      />

      <Section tone="paper" size="sm" className="md:pb-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            {/* Form */}
            <Reveal className="lg:col-span-7">
              {submitted ? (
                <Card padding="none" className="p-6 sm:p-8 md:p-10">
                  <div role="status">
                    <Eyebrow>Message received</Eyebrow>
                    <h2 className="mt-5 font-display text-display-lg text-ink">Thank you. Your note is with our team.</h2>
                    <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-mute">
                      We will respond within one business day. A Legacy advisor will reach out to discuss your needs and
                      suggest a time for a short fit call.
                    </p>
                    <div className="mt-9">
                      <Button variant="secondary" onClick={() => setSubmitted(false)}>
                        Send another message
                      </Button>
                    </div>
                  </div>
                </Card>
              ) : (
                <Card padding="none" className="p-6 sm:p-8 md:p-10">
                  <h2 className="font-display text-display-sm text-ink">Tell us about your situation</h2>
                  <p className="mt-2 text-sm text-mute">All fields are required unless marked optional.</p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                      <Field id="contact-name" label="Full name">
                        <input
                          id="contact-name"
                          type="text"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="field"
                        />
                      </Field>
                      <Field id="contact-email" label="Email">
                        <input
                          id="contact-email"
                          type="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="field"
                        />
                      </Field>
                      <Field id="contact-phone" label="Phone" optional>
                        <input
                          id="contact-phone"
                          type="tel"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="field"
                        />
                      </Field>
                      <Field id="contact-company" label="Company" optional>
                        <input
                          id="contact-company"
                          type="text"
                          autoComplete="organization"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="field"
                        />
                      </Field>
                    </div>

                    <Field id="contact-type" label="What can we help with?">
                      <select
                        id="contact-type"
                        required
                        value={formData.inquiryType}
                        onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                        className="field"
                      >
                        <option value="">Select an inquiry type</option>
                        {INQUIRY_TYPES.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field id="contact-message" label="Message">
                      <textarea
                        id="contact-message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder={placeholder}
                        className="field resize-y"
                      />
                    </Field>

                    <div className="pt-3">
                      <Button type="submit" size="lg" full arrow>
                        Send message
                      </Button>
                      <p className="mt-3 text-center text-xs text-mute">Confidential by default. We reply within one business day.</p>
                    </div>
                  </form>
                </Card>
              )}
            </Reveal>

            {/* What happens next */}
            <Reveal delay={0.06} className="lg:sticky lg:top-24 lg:col-span-5">
              <aside aria-labelledby="contact-next-title" className="lg:pt-2">
                <h2 id="contact-next-title" className="font-display text-display-sm text-ink">
                  What happens next
                </h2>
                <NextSteps steps={NEXT_STEPS} className="mt-7" />

                <dl className="mt-10 grid gap-6 border-t border-line-strong pt-8">
                  <div>
                    <dt className="eyebrow text-mute">Email</dt>
                    <dd className="mt-1">
                      <a
                        href="mailto:info@legacybrokers.com"
                        className="inline-block py-1.5 font-display text-[1.75rem] leading-tight text-ink underline decoration-ink/20 decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink"
                      >
                        info@legacybrokers.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-mute">Office</dt>
                    <dd className="mt-2.5 text-[15px] text-ink">Scottsdale, Arizona · Serving owners nationwide</dd>
                  </div>
                </dl>

                <nav aria-label="Other ways to start" className="mt-10 border-t border-line-strong pt-8">
                  <p className="eyebrow text-mute">Looking for something specific</p>
                  <ul className="mt-3">
                    <li>
                      <TextLink to="/buy/registration" tone="mute" className="min-h-11 py-2">
                        Register as a buyer
                      </TextLink>
                    </li>
                    <li>
                      <TextLink to="/licensing/program" tone="mute" className="min-h-11 py-2">
                        Licensing program
                      </TextLink>
                    </li>
                  </ul>
                </nav>
              </aside>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
