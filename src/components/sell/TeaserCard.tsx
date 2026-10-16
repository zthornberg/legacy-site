import { Badge } from '../ui';

const FACTS: { label: string; value: string }[] = [
  { label: 'Revenue', value: '$6.5M' },
  { label: 'EBITDA', value: '$950K' },
  { label: 'Employees', value: '5+' },
  { label: 'Reason for sale', value: 'Retirement' },
];

/** Widths of the redacted narrative lines, two short paragraphs. */
const REDACTED: string[][] = [
  ['100%', '96%', '99%', '58%'],
  ['100%', '91%', '42%'],
];

/**
 * A blind teaser, built from DOM: the first document a qualified buyer sees.
 * Quiet and believable; numbers mirror an anonymized closed transaction.
 */
export default function TeaserCard() {
  return (
    <figure className="mx-auto w-full max-w-md lg:ml-auto lg:mr-0">
      <div className="relative">
        {/* second sheet, for a sense of a document stack */}
        <div aria-hidden className="absolute inset-x-4 -bottom-3 top-4 rounded-xl border border-line bg-paper-deep" />

        <div className="relative overflow-hidden rounded-xl border border-line-strong bg-white shadow-lift">
          <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-4">
            <span className="eyebrow text-mute">Confidential teaser</span>
            <Badge tone="brass" dot>
              NDA required
            </Badge>
          </div>

          <div className="px-6 pb-7 pt-7">
            <p className="font-display text-[2.375rem] leading-none text-ink">Project Cedar</p>
            <p className="mt-3 text-sm text-mute">Specialty distributor · Southwest US</p>

            <dl className="mt-7 grid grid-cols-2 border-y border-line">
              {FACTS.map((f, i) => (
                <div
                  key={f.label}
                  className={[
                    'py-4',
                    i % 2 === 0 ? 'pr-4' : 'border-l border-line pl-5',
                    i > 1 ? 'border-t border-line' : '',
                  ].join(' ')}
                >
                  <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-mute-soft">{f.label}</dt>
                  <dd className="mt-1.5 font-display text-[1.625rem] leading-none text-ink tabular">{f.value}</dd>
                </div>
              ))}
            </dl>

            <p className="eyebrow mt-7 text-mute">Business overview</p>
            <div aria-hidden className="mt-4 space-y-5">
              {REDACTED.map((para, p) => (
                <div key={p} className="space-y-2">
                  {para.map((w, i) => (
                    <div key={i} className="h-2 rounded-full bg-ink/[0.07]" style={{ width: w }} />
                  ))}
                </div>
              ))}
            </div>
            <p className="sr-only">Business overview redacted until a non-disclosure agreement is signed.</p>
          </div>

          <div className="flex items-center justify-between border-t border-line bg-paper px-6 py-3 text-[12px] text-mute">
            <span>Identity released under NDA</span>
            <span className="tabular">Page 1 of 2</span>
          </div>
        </div>
      </div>

      <figcaption className="mt-8 text-center text-xs text-mute-soft lg:text-right">
        Illustrative example, based on an anonymized closed deal.
      </figcaption>
    </figure>
  );
}
