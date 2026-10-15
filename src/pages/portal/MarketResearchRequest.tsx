import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button, Card, Eyebrow } from '../../components/ui';
import PortalShell from '../../components/portal/PortalShell';
import { Field, FormCard, FormFooter, FormSection, SuccessPanel } from '../../components/portal/Form';

const resources = [
  {
    title: 'Industry reports',
    items: [
      'IBISWorld industry analyses',
      'Market size and growth projections',
      'Competitive landscape overviews',
      'Regulatory impact assessments',
    ],
  },
  {
    title: 'Financial data',
    items: ['Industry valuation multiples', 'Transaction comparables', 'Profitability benchmarks', 'Economic trend analysis'],
  },
];

const MarketResearchRequest: React.FC = () => {
  const { user } = useAuth();
  const initial = {
    brokerName: user?.name ?? '',
    industry: '',
    specificTopic: '',
    researchType: '',
    urgency: '',
    intendedUse: '',
    additionalDetails: '',
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
    console.log('Research request submitted:', formData);
    setSubmitted(true);
  };

  const reset = () => {
    setFormData(initial);
    setSubmitted(false);
  };

  return (
    <PortalShell
      eyebrow="Requests"
      title="Market research request"
      description="Need data on a niche market? Submit a request and our team will provide the latest research or reports to support your deal."
    >
      <div className="grid gap-8 xl:grid-cols-12 xl:gap-10">
        <div className="min-w-0 xl:col-span-8">
          {submitted ? (
            <SuccessPanel
              eyebrow="Request submitted"
              title="Your research is being compiled"
              body="Our research team will compile the requested information and deliver it within 2–3 business days. You'll receive an email notification when it's ready."
              resetLabel="Submit another request"
              onReset={reset}
            />
          ) : (
            <FormCard onSubmit={handleSubmit}>
              <FormSection index={1} title="Requesting broker">
                <Field id="mr-broker" label="Broker name" hint="From your portal profile." wide>
                  <input
                    id="mr-broker"
                    type="text"
                    value={formData.brokerName}
                    className="field cursor-default bg-paper text-mute-strong hover:border-line-strong"
                    aria-describedby="mr-broker-hint"
                    readOnly
                  />
                </Field>
              </FormSection>

              <FormSection index={2} title="Research scope">
                <Field id="mr-industry" label="Industry">
                  <select
                    id="mr-industry"
                    required
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="field"
                  >
                    <option value="">Select industry</option>
                    <option value="manufacturing">Manufacturing & Distribution</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="home-services">Home Services</option>
                    <option value="construction">Construction</option>
                    <option value="energy">Energy & Sustainability</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="business-services">Business Services</option>
                    <option value="retail">Retail & Consumer</option>
                  </select>
                </Field>
                <Field id="mr-type" label="Research type">
                  <select
                    id="mr-type"
                    required
                    value={formData.researchType}
                    onChange={(e) => handleInputChange('researchType', e.target.value)}
                    className="field"
                  >
                    <option value="">Select type</option>
                    <option value="industry-report">Industry report</option>
                    <option value="market-trends">Market trends analysis</option>
                    <option value="competitor-analysis">Competitor analysis</option>
                    <option value="valuation-multiples">Valuation multiples</option>
                    <option value="regulatory-update">Regulatory updates</option>
                    <option value="custom">Custom research</option>
                  </select>
                </Field>
                <Field id="mr-topic" label="Specific topic or focus" wide>
                  <input
                    id="mr-topic"
                    type="text"
                    required
                    value={formData.specificTopic}
                    onChange={(e) => handleInputChange('specificTopic', e.target.value)}
                    placeholder="e.g. specialty plastics manufacturing, HVAC service consolidation trends"
                    className="field"
                  />
                </Field>
              </FormSection>

              <FormSection index={3} title="Timing and use">
                <Field id="mr-urgency" label="Urgency" optional>
                  <select
                    id="mr-urgency"
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
                <Field id="mr-use" label="Intended use" optional>
                  <select
                    id="mr-use"
                    value={formData.intendedUse}
                    onChange={(e) => handleInputChange('intendedUse', e.target.value)}
                    className="field"
                  >
                    <option value="">Select use case</option>
                    <option value="client-presentation">Client presentation</option>
                    <option value="due-diligence">Due diligence support</option>
                    <option value="pricing-strategy">Pricing strategy</option>
                    <option value="market-positioning">Market positioning</option>
                    <option value="general-knowledge">General knowledge</option>
                  </select>
                </Field>
                <Field id="mr-details" label="Additional details" optional wide>
                  <textarea
                    id="mr-details"
                    rows={4}
                    value={formData.additionalDetails}
                    onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
                    placeholder="Any additional context, specific questions, or requirements for the research."
                    className="field"
                  />
                </Field>
              </FormSection>

              <FormFooter note="Delivered within 2–3 business days. You will get an email when it is ready.">
                <Button type="submit" icon={<Send size={16} strokeWidth={1.75} aria-hidden />}>
                  Submit request
                </Button>
              </FormFooter>
            </FormCard>
          )}
        </div>

        <aside className="xl:col-span-4">
          <Card tone="deep" padding="sm" className="xl:sticky xl:top-24">
            <Eyebrow as="p">Available research resources</Eyebrow>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 xl:grid-cols-1">
              {resources.map((group) => (
                <div key={group.title}>
                  <h2 className="font-sans text-sm font-medium text-ink">{group.title}</h2>
                  <ul className="mt-3 divide-y divide-line border-y border-line">
                    {group.items.map((item) => (
                      <li key={item} className="py-2.5 text-[13px] text-mute-strong">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </aside>
      </div>
    </PortalShell>
  );
};

export default MarketResearchRequest;
