import { Badge, Button, Card, Container, CtaBand, Eyebrow, PageHero, Reveal, Section, SectionHeading } from '../ui';
import { MORE_ENGAGEMENTS, TRANSACTIONS, type Transaction } from './transactions';

const pad = (n: number) => String(n).padStart(2, '0');

// Dividers for a facts row: 2×2 on phones, one row of four from `sm`.
const factCell = [
  '',
  'border-l border-line pl-4 sm:pl-5',
  'sm:border-l sm:border-line sm:pl-5',
  'border-l border-line pl-4 sm:pl-5',
];

/* ------------------------------------------------------------------ index */

function TransactionIndex() {
  const months = TRANSACTIONS.map((t) => t.months);
  return (
    <nav
      aria-label="Transactions on this page"
      className="overflow-hidden rounded-xl border border-line-strong bg-white"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <span className="eyebrow text-mute">Transaction index</span>
        <Badge tone="mute" className="tabular">
          {TRANSACTIONS.length} closed
        </Badge>
      </div>
      <ol>
        {TRANSACTIONS.map((t, i) => (
          <li key={t.id} className="border-b border-line last:border-b-0">
            <a
              href={`#${t.id}`}
              className="group grid grid-cols-[1.75rem_1fr_auto] items-center gap-3 px-5 py-3.5 transition-colors duration-200 hover:bg-paper focus-visible:bg-paper"
            >
              <span className="text-xs text-mute-soft tabular">{pad(i + 1)}</span>
              <span className="min-w-0">
                <span className="block text-[14px] font-medium leading-snug text-ink">{t.title}</span>
                <span className="block text-xs text-mute">
                  {t.industry} · {t.region}
                </span>
              </span>
              <span className="text-[13px] text-mute-strong tabular">{t.months} mo</span>
            </a>
          </li>
        ))}
      </ol>
      <div className="flex items-center justify-between border-t border-line bg-paper px-5 py-3 text-[12px] text-mute">
        <span>Time to close</span>
        <span className="tabular">
          {Math.min(...months)}–{Math.max(...months)} months
        </span>
      </div>
    </nav>
  );
}

/* -------------------------------------------------------------------- row */

function TransactionRow({ t, index }: { t: Transaction; index: number }) {
  const flip = index % 2 === 1;
  const headingId = `${t.id}-title`;
  return (
    <article
      id={t.id}
      aria-labelledby={headingId}
      className="scroll-mt-24 border-t border-line py-16 first:border-t-0 first:pt-0 last:pb-0 md:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className={`lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
          <figure className="aspect-[4/3] overflow-hidden rounded-xl border border-line bg-paper-deep">
            <img
              src={t.image}
              alt={t.alt}
              width={1024}
              height={1024}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="h-full w-full object-cover"
            />
          </figure>
        </Reveal>

        <Reveal delay={0.06} className={`lg:col-span-7 ${flip ? 'lg:order-1' : ''}`}>
          <Eyebrow index={index + 1}>
            {t.industry} · {t.region}
          </Eyebrow>
          <h2 id={headingId} className="mt-4 font-display text-display-lg text-ink">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink/80">{t.summary}</p>

          <div className="mt-6 max-w-2xl border-l border-brass-soft pl-4">
            <p className="eyebrow text-mute">Our approach</p>
            <p className="mt-2 text-[15px] leading-relaxed text-mute">{t.approach}</p>
          </div>

          <dl className="mt-8 grid grid-cols-2 border-t border-line sm:grid-cols-4">
            {t.facts.map((f, i) => (
              <div key={f.label} className={`border-b border-line py-4 pr-3 ${factCell[i % 4]}`}>
                <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-mute-soft">{f.label}</dt>
                <dd className="mt-2 font-display text-[1.75rem] leading-none text-ink tabular">{f.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Outcome">
            {t.outcomes.map((o) => (
              <li key={o}>
                <Badge tone="brass" className="tabular">
                  {o}
                </Badge>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------- page */

export default function ClosedTransactions() {
  return (
    <>
      <PageHero
        tone="paper"
        crumbs={[{ label: 'Sell', to: '/sell/brokerage' }, { label: 'Closed transactions' }]}
        eyebrow="Sell · Closed transactions"
        title="Representative sales, closed on the owner’s terms."
        lede="Sell-side outcomes across construction, manufacturing, distribution, energy and electrical contracting. Company names and identifying details are withheld to protect client confidentiality."
        actions={
          <>
            <Button to="/contact?intent=sell" size="lg" arrow>
              Request a confidential valuation
            </Button>
            <Button to="/sell/brokerage" size="lg" variant="secondary">
              How we sell
            </Button>
          </>
        }
        aside={<TransactionIndex />}
      />

      <Section tone="white">
        <Container>
          {TRANSACTIONS.map((t, i) => (
            <TransactionRow key={t.id} t={t} index={i} />
          ))}
        </Container>
      </Section>

      <Section tone="paper" divider aria-labelledby="more-engagements">
        <Container>
          <SectionHeading
            split
            id="more-engagements"
            eyebrow="More engagements"
            title="Situation, approach, result."
            lede="Two further engagements, summarized without images or financials."
          />
          <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2">
            {MORE_ENGAGEMENTS.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.06}>
                <Card as="article" padding="lg" className="h-full">
                  <Eyebrow>{e.industry}</Eyebrow>
                  <h3 className="mt-4 font-display text-display-sm text-ink">{e.title}</h3>
                  <dl className="mt-7 border-t border-line">
                    {(
                      [
                        ['Situation', e.situation],
                        ['Approach', e.approach],
                        ['Result', e.result],
                      ] as const
                    ).map(([label, value]) => (
                      <div
                        key={label}
                        className="grid gap-1 border-b border-line py-4 last:border-b-0 last:pb-0 sm:grid-cols-[7rem_1fr] sm:gap-4"
                      >
                        <dt className="pt-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-mute-soft">
                          {label}
                        </dt>
                        <dd
                          className={
                            label === 'Result'
                              ? 'text-[15px] font-medium leading-relaxed text-ink'
                              : 'text-[15px] leading-relaxed text-mute'
                          }
                        >
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        tone="brass"
        eyebrow="Your sale"
        title="Every outcome here began with a confidential conversation."
        body="Tell us about your company and your timing. We'll show you how buyers are likely to see it, and what a sale would involve."
        actions={
          <>
            <Button to="/contact?intent=sell" size="lg" arrow>
              Request a confidential valuation
            </Button>
            <Button to="/sell/brokerage" size="lg" variant="secondary">
              How we sell
            </Button>
          </>
        }
        footnote="Transaction examples are illustrative and anonymized, and are not a promise of future results."
      />
    </>
  );
}
