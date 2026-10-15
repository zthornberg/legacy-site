import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button, Card, Eyebrow } from '../../components/ui';
import PortalShell from '../../components/portal/PortalShell';
import { Field, FormCard, FormFooter, FormSection, SuccessPanel } from '../../components/portal/Form';

const steps = [
  'Submit your request with deal details.',
  'Our M&A team reviews and identifies relevant PE firms.',
  'We provide contact information and introduction support.',
  'Follow-up within 1 business day, guaranteed.',
];

const PrivateEquityRequest: React.FC = () => {
  const { user } = useAuth();
  const initial = {
    brokerName: user?.name ?? '', // Pre-filled from auth context
    dealOverview: '',
    businessIndustry: '',
    revenueRange: '',
    requestType: '',
    urgency: '',
    additionalInfo: '',
  };
  const [formData, setFormData] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('PE request submitted:', formData);
    setSubmitted(true);
  };

  const reset = () => {
    setFormData(initial);
    setSubmitted(false);
  };

  return (
    <PortalShell
      eyebrow="Requests"
      title="Private equity request"
      description="Request information or introductions to private equity groups for a specific deal."
    >
      <div className="grid gap-8 xl:grid-cols-12 xl:gap-10">
        <div className="min-w-0 xl:col-span-8">
          {submitted ? (
            <SuccessPanel
              eyebrow="Request submitted"
              title="Your request is with our M&A team"
              body="We'll respond with relevant PE firm information within 1 business day."
              resetLabel="Submit another request"
              onReset={reset}
            />
          ) : (
            <FormCard onSubmit={handleSubmit}>
              <FormSection index={1} title="Requesting broker">
                <Field id="pe-broker" label="Broker name" hint="From your portal profile." wide>
                  <input
                    id="pe-broker"
                    type="text"
                    value={formData.brokerName}
                    onChange={(e) => handleInputChange('brokerName', e.target.value)}
                    className="field cursor-default bg-paper text-mute-strong hover:border-line-strong"
                    aria-describedby="pe-broker-hint"
                    readOnly
                  />
                </Field>
              </FormSection>

              <FormSection index={2} title="Deal">
                <Field id="pe-industry" label="Business industry">
                  <select
                    id="pe-industry"
                    required
                    value={formData.businessIndustry}
                    onChange={(e) => handleInputChange('businessIndustry', e.target.value)}
                    className="field"
                  >
                    <option value="">Select industry</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="services">Services</option>
                    <option value="construction">Construction</option>
                    <option value="energy">Energy</option>
                  </select>
                </Field>
                <Field id="pe-revenue" label="Revenue range">
                  <select
                    id="pe-revenue"
                    required
                    value={formData.revenueRange}
                    onChange={(e) => handleInputChange('revenueRange', e.target.value)}
                    className="field tabular"
                  >
                    <option value="">Select range</option>
                    <option value="1m-5m">$1M–$5M</option>
                    <option value="5m-10m">$5M–$10M</option>
                    <option value="10m-25m">$10M–$25M</option>
                    <option value="25m-plus">$25M+</option>
                  </select>
                </Field>
                <Field id="pe-overview" label="Deal overview" wide>
                  <textarea
                    id="pe-overview"
                    required
                    rows={5}
                    value={formData.dealOverview}
                    onChange={(e) => handleInputChange('dealOverview', e.target.value)}
                    placeholder="Describe the business, deal size, and why you're seeking PE involvement."
                    className="field"
                  />
                </Field>
              </FormSection>

              <FormSection index={3} title="Request">
                <Field id="pe-type" label="Request type">
                  <select
                    id="pe-type"
                    required
                    value={formData.requestType}
                    onChange={(e) => handleInputChange('requestType', e.target.value)}
                    className="field"
                  >
                    <option value="">Select request type</option>
                    <option value="pe-list">PE firm contact list</option>
                    <option value="introduction">Direct introduction</option>
                    <option value="market-intel">Market intelligence</option>
                    <option value="deal-structure">Deal structure advice</option>
                  </select>
                </Field>
                <Field id="pe-urgency" label="Urgency" optional>
                  <select
                    id="pe-urgency"
                    value={formData.urgency}
                    onChange={(e) => handleInputChange('urgency', e.target.value)}
                    className="field"
                  >
                    <option value="">Select urgency</option>
                    <option value="asap">ASAP (within 24 hours)</option>
                    <option value="week">Within 1 week</option>
                    <option value="month">Within 1 month</option>
                    <option value="flexible">Flexible timing</option>
                  </select>
                </Field>
                <Field id="pe-additional" label="Additional information" optional wide>
                  <textarea
                    id="pe-additional"
                    rows={3}
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    placeholder="Any specific PE preferences, deal structure requirements, or other relevant details."
                    className="field"
                  />
                </Field>
              </FormSection>

              <FormFooter note="All fields are required unless marked optional.">
                <Button type="submit" icon={<Send size={16} strokeWidth={1.75} aria-hidden />}>
                  Submit request
                </Button>
              </FormFooter>
            </FormCard>
          )}
        </div>

        <aside className="xl:col-span-4">
          <Card tone="deep" padding="sm" className="xl:sticky xl:top-24">
            <Eyebrow as="p">How it works</Eyebrow>
            <ol className="mt-5 space-y-4">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="tabular pt-0.5 text-xs text-mute-soft">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-sm leading-relaxed text-ink/85">{step}</p>
                </li>
              ))}
            </ol>
          </Card>
        </aside>
      </div>
    </PortalShell>
  );
};

export default PrivateEquityRequest;
