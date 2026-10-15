import React, { useRef, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Button, Card, CheckList, Container, Eyebrow, PageHero, Section, TextLink } from '../../components/ui';
import { Field, Fieldset, InlineCheck, NextSteps, OptionTile } from '../../components/buy/form';

const industries = [
  'Manufacturing & Distribution',
  'Technology',
  'Healthcare',
  'Home Services',
  'Construction',
  'Retail & Consumer',
  'Business Services',
  'Energy & Sustainability',
  'Hospitality',
];

const timeframes = [
  { value: 'immediate', label: '1–3 months', note: 'Immediate' },
  { value: 'short-term', label: '3–6 months', note: 'Short-term' },
  { value: 'medium-term', label: '6–12 months', note: 'Medium-term' },
  { value: 'long-term', label: '12+ months', note: 'Long-term' },
];

const NEXT_STEPS = [
  {
    title: 'An advisor reviews your criteria',
    body: 'A Legacy M&A advisor contacts you to complete onboarding and confirm what you are looking for.',
  },
  {
    title: 'NDA, countersigned',
    body: 'We countersign an NDA before any confidential materials are shared, so you can request details on any listing.',
  },
  {
    title: 'Matched opportunities, early',
    body: 'New listings that fit your criteria, including confidential off-market opportunities, reach you before they go wide.',
  },
];

export default function BuyerRegistration() {
  const [formData, setFormData] = useState({
    // About you
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',

    // Acquisition criteria
    investmentRange: '',
    preferredIndustries: [] as string[],
    preferredLocations: [] as string[],
    timeframe: '',

    // Experience & financing
    experience: '',
    financingNeeds: '',
    additionalNotes: '',
  });
  const [locationsText, setLocationsText] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleIndustryToggle = (industry: string) => {
    const current = formData.preferredIndustries;
    const updated = current.includes(industry) ? current.filter((i) => i !== industry) : [...current, industry];
    handleInputChange('preferredIndustries', updated);
  };

  const handleLocationsChange = (text: string) => {
    setLocationsText(text);
    handleInputChange(
      'preferredLocations',
      text
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <PageHero
        tone="paper"
        size="sm"
        crumbs={[{ label: 'Buy', to: '/buy/listings' }, { label: 'Register as a buyer' }]}
        eyebrow="Buy · Registration"
        title="Register as a buyer."
        lede="Get early access to new listings, including confidential off-market opportunities. Tell us what you are looking for and a Legacy advisor will match you with the right deals and handle the NDA for each one."
      />

      <Section tone="paper" size="sm" className="md:pb-28">
        <Container>
          <div ref={topRef} className="grid scroll-mt-24 gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <Card padding="none" className="min-h-[24rem] p-6 sm:p-8 md:p-10">
                  <div role="status">
                    <Eyebrow>Registration received</Eyebrow>
                    <h2 className="mt-5 font-display text-display-lg text-ink">
                      Thank you, {formData.firstName || 'and welcome'}.
                    </h2>
                    <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-mute">
                      A Legacy M&amp;A advisor will contact you to complete onboarding and countersign an NDA before
                      sharing confidential materials. Until then, the representative listings show the kind of businesses
                      we bring to market.
                    </p>
                    <div className="mt-9">
                      <TextLink to="/buy/listings">Back to listings</TextLink>
                    </div>
                  </div>
                </Card>
              ) : (
                <Card padding="none" className="overflow-hidden">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-12 p-6 sm:p-8 md:p-10">
                      <Fieldset index={1} title="About you" description="How we reach you about matching opportunities.">
                        <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                          <Field id="reg-first" label="First name">
                            <input
                              id="reg-first"
                              type="text"
                              required
                              autoComplete="given-name"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              className="field"
                            />
                          </Field>
                          <Field id="reg-last" label="Last name">
                            <input
                              id="reg-last"
                              type="text"
                              required
                              autoComplete="family-name"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              className="field"
                            />
                          </Field>
                          <Field id="reg-email" label="Email" className="sm:col-span-2">
                            <input
                              id="reg-email"
                              type="email"
                              required
                              autoComplete="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="field"
                            />
                          </Field>
                          <Field id="reg-phone" label="Phone">
                            <input
                              id="reg-phone"
                              type="tel"
                              required
                              autoComplete="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              className="field"
                            />
                          </Field>
                          <Field id="reg-location" label="Location">
                            <input
                              id="reg-location"
                              type="text"
                              required
                              placeholder="City, State"
                              autoComplete="address-level2"
                              value={formData.location}
                              onChange={(e) => handleInputChange('location', e.target.value)}
                              className="field"
                            />
                          </Field>
                        </div>
                      </Fieldset>

                      <div className="h-px bg-line" aria-hidden />

                      <Fieldset
                        index={2}
                        title="Acquisition criteria"
                        description="The more specific you are, the better the matches."
                      >
                        <div className="space-y-7">
                          <fieldset>
                            <legend className="label">
                              Preferred industries <span className="font-normal text-mute">· select all that apply</span>
                            </legend>
                            <div className="mt-1 grid gap-2 sm:grid-cols-2">
                              {industries.map((industry) => (
                                <OptionTile
                                  key={industry}
                                  type="checkbox"
                                  name="preferredIndustries"
                                  value={industry}
                                  checked={formData.preferredIndustries.includes(industry)}
                                  onChange={() => handleIndustryToggle(industry)}
                                >
                                  {industry}
                                </OptionTile>
                              ))}
                            </div>
                          </fieldset>

                          <Field
                            id="reg-geo"
                            label="Target geographies"
                            optional
                            hint="Separate with commas, e.g. Arizona, Texas, Mountain West."
                          >
                            <input
                              id="reg-geo"
                              type="text"
                              value={locationsText}
                              onChange={(e) => handleLocationsChange(e.target.value)}
                              aria-describedby="reg-geo-hint"
                              className="field"
                            />
                          </Field>

                          <fieldset>
                            <legend className="label">
                              Timeline for purchase <span className="font-normal text-mute-soft">· optional</span>
                            </legend>
                            <div className="mt-1 grid grid-cols-2 gap-2">
                              {timeframes.map((t) => (
                                <OptionTile
                                  key={t.value}
                                  type="radio"
                                  name="timeframe"
                                  value={t.value}
                                  checked={formData.timeframe === t.value}
                                  onChange={() => handleInputChange('timeframe', t.value)}
                                  className="items-start [&>input]:mt-[3px]"
                                >
                                  <span className="tabular block font-medium">{t.label}</span>
                                  <span className="mt-0.5 block text-xs text-mute">{t.note}</span>
                                </OptionTile>
                              ))}
                            </div>
                          </fieldset>
                        </div>
                      </Fieldset>

                      <div className="h-px bg-line" aria-hidden />

                      <Fieldset
                        index={3}
                        title="Financial capacity"
                        description="Helps us match you with businesses you are positioned to close."
                      >
                        <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                          <Field id="reg-range" label="Investment budget" className="sm:col-span-2">
                            <select
                              id="reg-range"
                              required
                              value={formData.investmentRange}
                              onChange={(e) => handleInputChange('investmentRange', e.target.value)}
                              className="field"
                            >
                              <option value="">Select investment range</option>
                              <option value="under-500k">Under $500K</option>
                              <option value="500k-1m">$500K – $1M</option>
                              <option value="1m-2m">$1M – $2M</option>
                              <option value="2m-5m">$2M – $5M</option>
                              <option value="5m-plus">$5M+</option>
                            </select>
                          </Field>
                          <Field id="reg-financing" label="Financing" optional>
                            <select
                              id="reg-financing"
                              value={formData.financingNeeds}
                              onChange={(e) => handleInputChange('financingNeeds', e.target.value)}
                              className="field"
                            >
                              <option value="">Select financing needs</option>
                              <option value="cash">All-cash purchase</option>
                              <option value="partial-financing">Need partial financing</option>
                              <option value="sba-loan">SBA loan assistance needed</option>
                              <option value="seller-financing">Interested in seller financing</option>
                            </select>
                          </Field>
                          <Field id="reg-experience" label="Acquisition experience" optional>
                            <select
                              id="reg-experience"
                              value={formData.experience}
                              onChange={(e) => handleInputChange('experience', e.target.value)}
                              className="field"
                            >
                              <option value="">Select experience level</option>
                              <option value="first-time">First-time buyer</option>
                              <option value="some-experience">Some experience (1–2 acquisitions)</option>
                              <option value="experienced">Experienced (3+ acquisitions)</option>
                              <option value="serial-acquirer">Serial acquirer (5+ acquisitions)</option>
                            </select>
                          </Field>
                          <Field id="reg-notes" label="Additional notes" optional className="sm:col-span-2">
                            <textarea
                              id="reg-notes"
                              rows={4}
                              value={formData.additionalNotes}
                              onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                              placeholder="Your ideal acquisition, specific requirements, or questions for the team."
                              className="field resize-y"
                            />
                          </Field>
                        </div>
                      </Fieldset>

                      <div className="h-px bg-line" aria-hidden />

                      <Fieldset index={4} title="Agreement">
                        <div className="rounded-lg border border-line bg-paper p-5">
                          <InlineCheck id="reg-agree" checked={agreed} onChange={setAgreed} required>
                            I agree to keep confidential any business information shared with me by Legacy Business
                            Brokers and its clients.
                          </InlineCheck>
                          <p className="mt-3 pl-7 text-xs leading-relaxed text-mute">
                            A Legacy M&amp;A advisor will contact you to complete onboarding and countersign an NDA before
                            sharing confidential materials.
                          </p>
                        </div>
                      </Fieldset>
                    </div>

                    <div className="border-t border-line bg-paper/60 px-6 py-6 sm:px-8 md:px-10">
                      <Button type="submit" size="lg" full arrow>
                        Submit registration
                      </Button>
                    </div>
                  </form>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:col-span-5" aria-labelledby="reg-next-title">
              <Card tone="deep" padding="none" className="p-6 sm:p-8">
                <h2 id="reg-next-title" className="font-display text-display-sm text-ink">
                  What happens next
                </h2>
                <NextSteps steps={NEXT_STEPS} className="mt-7" />

                <div className="mt-8 border-t border-line-strong pt-7">
                  <p className="mb-4 text-[13px] font-medium text-ink">Registration includes</p>
                  <CheckList
                    size="sm"
                    items={[
                      'Early access to new listings and off-market opportunities',
                      'Personal guidance from an experienced advisor',
                      'Businesses pre-qualified and vetted for financial accuracy',
                    ]}
                  />
                </div>

                <div className="mt-8 flex gap-3 border-t border-line-strong pt-7">
                  <ShieldCheck className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brass-deep" strokeWidth={1.75} aria-hidden />
                  <p className="text-[13px] leading-relaxed text-mute">
                    Confidentiality runs both ways. Seller identities and full financials are released only under a
                    countersigned NDA.
                  </p>
                </div>
              </Card>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
