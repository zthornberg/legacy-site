import { useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import industryContent from '../../content/industries/industries.json';
import { industries as subsectors } from '../../content/industries';
import IndustrySection from '../../components/IndustrySection';
import { SECTORS, SUBSECTORS_BY_SECTOR } from '../../components/industries/sectors';
import { Button, Card, CheckList, Container, CtaBand, Eyebrow, PageHero, Reveal, Section, TextLink } from '../../components/ui';

interface IndustryData {
  name: string;
  overview: string;
  whyActive: string;
  legacyInsight: string;
  keyDrivers: string[];
  seoTerms: string[];
}

const content = industryContent as Record<string, IndustryData>;

type TocItem = { id: string; index: string; label: string };

function BriefContents({ items }: { items: TocItem[] }) {
  return (
    <Card padding="md" className="lg:ml-auto lg:max-w-sm">
      <Eyebrow tone="mute" as="p">
        In this brief
      </Eyebrow>
      <ol className="mt-5 divide-y divide-line border-t border-line">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group flex items-baseline gap-4 py-3 text-[14px] text-mute-strong transition-colors hover:text-ink"
            >
              <span className="tabular w-7 shrink-0 text-[12px] text-mute-soft">{item.index}</span>
              <span className="flex-1">{item.label}</span>
              <ArrowRight
                className="h-3.5 w-3.5 shrink-0 self-center text-mute-soft opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                aria-hidden
              />
            </a>
          </li>
        ))}
      </ol>
    </Card>
  );
}

export default function IndustryPage() {
  const { industry = '' } = useParams<{ industry: string }>();
  const data = content[industry];

  if (!data) {
    return (
      <>
        <PageHero
          tone="paper"
          crumbs={[{ label: 'Industries', to: '/industries' }, { label: 'Not found' }]}
          eyebrow="Industry"
          title="We couldn't find that sector."
          lede="The link may be out of date. Every sector we cover is listed on the industries page."
          actions={
            <Button to="/industries" arrow>
              View all industries
            </Button>
          }
        />
      </>
    );
  }

  const briefs = (SUBSECTORS_BY_SECTOR[industry] ?? []).filter((slug) => subsectors.some((s) => s.slug === slug));
  const sectorIndex = SECTORS.findIndex((s) => s.key === industry);
  const related = [1, 2, 3].map((n) => SECTORS[(Math.max(sectorIndex, 0) + n) % SECTORS.length]);
  const isFunding = industry === 'startup-funding';

  const toc: TocItem[] = [
    { id: 'market', index: '01', label: 'Market activity' },
    { id: 'expertise', index: '02', label: "Legacy's expertise" },
    { id: 'drivers', index: '03', label: 'Key value drivers' },
    ...briefs.map((slug, i) => ({
      id: slug,
      index: `4.${i + 1}`,
      label: subsectors.find((s) => s.slug === slug)?.title ?? slug,
    })),
  ];

  return (
    <>
      <PageHero
        tone="paper"
        crumbs={[{ label: 'Industries', to: '/industries' }, { label: data.name }]}
        eyebrow="Industry"
        title={data.name}
        lede={data.overview}
        actions={
          <>
            <Button to={`/contact?intent=sell&industry=${industry}`} size="lg" arrow>
              {isFunding ? 'Talk to an advisor' : 'Request a confidential valuation'}
            </Button>
            <Button to="/buy/listings" size="lg" variant="secondary">
              View current listings
            </Button>
          </>
        }
        aside={<BriefContents items={toc} />}
      />

      {/* Market activity + Legacy's expertise */}
      <Section tone="white">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            <Reveal as="section" className="border-t border-line-strong pt-6">
              <div id="market" className="scroll-mt-28" />
              <Eyebrow index={1}>Market activity</Eyebrow>
              <h2 className="mt-6 font-display text-display-md text-ink">Why buyers are active.</h2>
              <p className="mt-4 text-[17px] leading-relaxed text-ink/80">{data.whyActive}</p>
            </Reveal>
            <Reveal as="section" delay={0.06} className="border-t border-line-strong pt-6">
              <div id="expertise" className="scroll-mt-28" />
              <Eyebrow index={2}>Legacy&rsquo;s expertise</Eyebrow>
              <h2 className="mt-6 font-display text-display-md text-ink">How we represent owners.</h2>
              <p className="mt-4 text-[17px] leading-relaxed text-ink/80">{data.legacyInsight}</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Key value drivers */}
      <Section tone="paper" divider id="drivers" className="scroll-mt-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <Eyebrow index={3}>Key value drivers</Eyebrow>
              <h2 className="mt-6 font-display text-display-lg text-ink">What buyers pay for.</h2>
              <p className="mt-5 max-w-sm text-lede text-mute">
                The factors that most often move price and terms in {data.name.toLowerCase()} transactions.
              </p>
            </Reveal>
            <Reveal delay={0.06} className="lg:col-span-8">
              <Card tone="deep" padding="lg">
                <CheckList items={data.keyDrivers} columns={2} />
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Sub-sector briefs */}
      {briefs.length > 0 && (
        <Section tone="white" divider aria-labelledby="briefs-heading">
          <Container>
            <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <Eyebrow index={4}>Sub-sector briefs</Eyebrow>
                <h2 id="briefs-heading" className="mt-4 font-display text-display-lg text-ink">
                  Where we go deeper.
                </h2>
              </div>
              <p className="max-w-md text-lede text-mute lg:col-span-5 lg:pb-1">
                Illustrative multiples, likely buyers, and the diligence issues we resolve before a teaser goes out.
              </p>
            </Reveal>
            <div className="mt-14 space-y-16 md:mt-16 md:space-y-20">
              {briefs.map((slug, i) => (
                <IndustrySection key={slug} slug={slug} index={`4.${i + 1}`} />
              ))}
            </div>
            <p className="mt-16 max-w-3xl border-t border-line pt-6 text-xs leading-relaxed text-mute-soft">
              Valuation ranges are illustrative for lower-middle-market transactions and vary by quality, durability of
              earnings, growth, and structure. Not an offer to sell or a solicitation of an offer to buy securities.
            </p>
          </Container>
        </Section>
      )}

      {/* Related sectors */}
      <Section tone="deep" size="sm" aria-labelledby="related-heading">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <h2 id="related-heading" className="eyebrow text-brass-deep">
              Other sectors
            </h2>
            <TextLink to="/industries" tone="mute">
              All industries
            </TextLink>
          </div>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.key}>
                  <Card hover to={`/industries/${s.key}`} padding="sm" className="flex h-full items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl text-ink">{s.name}</h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-mute">{s.description}</p>
                    </div>
                    <Icon className="mt-1 h-[18px] w-[18px] shrink-0 text-mute" strokeWidth={1.75} aria-hidden />
                  </Card>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title={isFunding ? 'Raising capital or weighing a sale?' : `Selling in ${data.name}?`}
        body={
          isFunding
            ? 'Start with a confidential conversation about minority investment, a majority sale, or both, and what each would mean for you as a founder.'
            : 'Start with a confidential conversation. We will pressure-test value, buyer fit, and timing before anything goes to market.'
        }
        actions={
          <>
            <Button to={`/contact?intent=sell&industry=${industry}`} size="lg" arrow>
              {isFunding ? 'Talk to an advisor' : 'Request a valuation'}
            </Button>
            <Button to="/industries" size="lg" variant="secondary">
              All industries
            </Button>
          </>
        }
      />
    </>
  );
}
