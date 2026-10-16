import React, { useState } from 'react';
import { FileText, Upload } from 'lucide-react';
import { Button, Card, Eyebrow } from '../../components/ui';
import PortalShell from '../../components/portal/PortalShell';
import { Field, FormCard, FormFooter, FormSection, SuccessPanel } from '../../components/portal/Form';
import { cn } from '../../lib/utils';

const emptyForm = {
  businessName: '',
  industry: '',
  location: '',
  revenue: '',
  ebitda: '',
  askingPrice: '',
  description: '',
  reasonForSelling: '',
  files: [] as File[],
};

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

const formatBytes = (bytes: number) =>
  bytes >= 1024 * 1024 ? `${(bytes / (1024 * 1024)).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;

const ListingSubmission: React.FC = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [dragging, setDragging] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const setFiles = (list: FileList | null) => {
    if (list) {
      setFormData((prev) => ({
        ...prev,
        files: Array.from(list),
      }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => setFiles(e.target.files);

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(false);
    const accepted = /\.(pdf|docx?|xlsx?)$/i;
    const dt = new DataTransfer();
    Array.from(e.dataTransfer.files).filter((f) => accepted.test(f.name)).forEach((f) => dt.items.add(f));
    setFiles(dt.files);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
  };

  const reset = () => {
    setFormData(emptyForm);
    setSubmitted(false);
  };

  return (
    <PortalShell
      eyebrow="Listings"
      title="Submit a listing"
      description="Send a business to the Legacy team for review and approval before it goes to market."
    >
      <div className="grid gap-8 xl:grid-cols-12 xl:gap-10">
        <div className="min-w-0 xl:col-span-8">
          {submitted ? (
            <SuccessPanel
              eyebrow="Submitted for review"
              title="Your listing is with the Legacy team"
              body="Thank you for submitting your listing. Our team will review it within 24 hours and contact you with next steps."
              resetLabel="Submit another listing"
              onReset={reset}
            />
          ) : (
            <FormCard onSubmit={handleSubmit}>
              <FormSection index={1} title="Business information">
                <Field id="ls-name" label="Business name">
                  <input
                    id="ls-name"
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    className="field"
                  />
                </Field>
                <Field id="ls-industry" label="Industry">
                  <select
                    id="ls-industry"
                    required
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="field"
                  >
                    <option value="">Select industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="ls-location" label="Location" wide>
                  <input
                    id="ls-location"
                    type="text"
                    required
                    placeholder="City, State"
                    autoComplete="address-level2"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="field"
                  />
                </Field>
              </FormSection>

              <FormSection index={2} title="Financial information" description="Enter figures in US dollars." columns={3}>
                <Field id="ls-revenue" label="Annual revenue">
                  <input
                    id="ls-revenue"
                    type="text"
                    required
                    placeholder="$1,200,000"
                    value={formData.revenue}
                    onChange={(e) => handleInputChange('revenue', e.target.value)}
                    className="field tabular"
                  />
                </Field>
                <Field id="ls-ebitda" label="EBITDA / SDE">
                  <input
                    id="ls-ebitda"
                    type="text"
                    required
                    placeholder="$400,000"
                    value={formData.ebitda}
                    onChange={(e) => handleInputChange('ebitda', e.target.value)}
                    className="field tabular"
                  />
                </Field>
                <Field id="ls-asking" label="Asking price" optional>
                  <input
                    id="ls-asking"
                    type="text"
                    placeholder="$1,600,000"
                    value={formData.askingPrice}
                    onChange={(e) => handleInputChange('askingPrice', e.target.value)}
                    className="field tabular"
                  />
                </Field>
              </FormSection>

              <FormSection index={3} title="Business details">
                <Field id="ls-description" label="Business description" wide>
                  <textarea
                    id="ls-description"
                    required
                    rows={5}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe the business, its operations, competitive advantages and key highlights."
                    className="field"
                  />
                </Field>
                <Field id="ls-reason" label="Reason for selling" optional>
                  <select
                    id="ls-reason"
                    value={formData.reasonForSelling}
                    onChange={(e) => handleInputChange('reasonForSelling', e.target.value)}
                    className="field"
                  >
                    <option value="">Select reason</option>
                    <option value="retirement">Retirement</option>
                    <option value="health">Health reasons</option>
                    <option value="relocation">Relocation</option>
                    <option value="new-opportunity">New business opportunity</option>
                    <option value="partnership-dissolution">Partnership dissolution</option>
                    <option value="other">Other</option>
                  </select>
                </Field>
              </FormSection>

              <FormSection
                index={4}
                title="Supporting documents"
                description="Optional. Financial statements, offering memo, or other relevant documents."
              >
                <div className="sm:col-span-full">
                  <label
                    htmlFor="ls-files"
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragging(true);
                    }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={handleDrop}
                    className={cn(
                      'flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed px-6 py-10 text-center transition-colors duration-200 focus-within:border-ink focus-within:ring-2 focus-within:ring-ink/10',
                      dragging ? 'border-brass bg-brass-tint' : 'border-line-strong bg-paper hover:border-ink/30'
                    )}
                  >
                    <Upload size={20} strokeWidth={1.75} className="pointer-events-none text-mute" aria-hidden />
                    <span className="pointer-events-none mt-3 text-sm">
                      <span className="font-medium text-ink underline decoration-ink/30 underline-offset-4">Choose files</span>
                      <span className="text-mute"> or drag and drop</span>
                    </span>
                    <span className="pointer-events-none mt-1.5 text-xs text-mute-soft">PDF, Word or Excel</span>
                    <input
                      id="ls-files"
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="sr-only"
                      accept=".pdf,.doc,.docx,.xls,.xlsx"
                    />
                  </label>

                  {formData.files.length > 0 && (
                    <div className="mt-4">
                      <p className="label">Selected files</p>
                      <ul className="divide-y divide-line rounded-lg border border-line">
                        {formData.files.map((file, index) => (
                          <li key={index} className="flex items-center gap-3 px-4 py-3 text-sm">
                            <FileText size={16} strokeWidth={1.75} className="shrink-0 text-mute" aria-hidden />
                            <span className="min-w-0 flex-1 truncate text-ink">{file.name}</span>
                            <span className="tabular shrink-0 text-xs text-mute">{formatBytes(file.size)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </FormSection>

              <FormFooter note="All fields are required unless marked optional.">
                <Button type="submit" arrow>
                  Submit for review
                </Button>
              </FormFooter>
            </FormCard>
          )}
        </div>

        <aside className="xl:col-span-4">
          <Card tone="deep" padding="sm" className="xl:sticky xl:top-24">
            <Eyebrow as="p">What happens next</Eyebrow>
            <ol className="mt-5 space-y-4">
              {[
                ['Submit', 'Send the business details and any supporting documents.'],
                ['Review', 'The Legacy team reviews every submission within 24 hours.'],
                ['Next steps', 'We contact you directly with next steps for the listing.'],
              ].map(([title, body], i) => (
                <li key={title} className="flex gap-4">
                  <span className="tabular pt-0.5 text-xs text-mute-soft">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="text-sm font-medium text-ink">{title}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-mute">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        </aside>
      </div>
    </PortalShell>
  );
};

export default ListingSubmission;
