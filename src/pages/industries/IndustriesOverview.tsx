import { ArrowRight } from 'lucide-react';
import { Button, Card, Container, CtaBand, Eyebrow, PageHero, Reveal, Section, TextLink } from '../../components/ui';
import { SECTORS, SUBSECTORS_BY_SECTOR } from '../../components/industries/sectors';

const PERSPECTIVES = [
  {
    label: 'For sellers',
    title: 'Positioned around what buyers underwrite.',
    body: "Knowing your industry's value drivers, market trends, and buyer preferences lets us position the business precisely and reach the acquirers who will pay for what you've built.",
    link: { label: 'How we sell companies', to: '/sell/brokerage' },
  },
  {
    label: 'For buyers',
    title: 'Diligence that knows where to look.',
    body: 'Sector knowledge surfaces the risks and opportunities specific to each industry, so you make acquisition decisions with a clear view of market dynamics and growth potential.',
    link: { label: 'Buyer representation', to: '/buy/representation' },
  },
];

function briefLabel(key: string) {
  const n = SUBSECTORS_BY_SECTOR[key]?.length ?? 0;
  if (n === 0) return 'Sector overview';
  return `${n} sub-sector ${n === 1 ? 'brief' : 'briefs'}`;
}

export default function IndustriesOverview() {
  return (
    <>
      <PageHero
        tone="paper"
        eyebrow="Industries"
        title="Sector fluency for every mandate."
        lede="Legacy has facilitated deals across a wide range of industries. We know the value drivers, buyer universe, and diligence questions in each sector, so every company goes to market positioned around what acquirers actually pay for."
      />

      <Section tone="paper" aria-labelledby="sectors-heading" className="pt-12 md:pt-16">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-line pb-5 md:mb-12">
            <h2 id="sectors-heading" className="eyebrow text-brass-deep">
              Sectors we cover
            </h2>
            <span className="tabular text-[13px] text-mute">{String(SECTORS.length).padStart(2, '0')} sectors</span>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {SECTORS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal as="li" key={s.key} delay={(i % 3) * 0.06} className="h-full">
                  <Card hover to={`/industries/${s.key}`} className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <Eyebrow index={i + 1} tone="mute">
                        {null}
                      </Eyebrow>
                      <Icon className="h-[18px] w-[18px] text-mute" strokeWidth={1.75} aria-hidden />
                    </div>
                    <h3 className="mt-10 font-display text-display-sm text-ink">{s.name}</h3>
                    <p className="mb-8 mt-2 text-[15px] leading-relaxed text-mute">{s.description}</p>
                    <div className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-4 text-[13px]">
                      <span className="text-mute">{briefLabel(s.key)}</span>
                      <ArrowRight
                        className="h-4 w-4 text-mute-soft transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:text-ink"
                        aria-hidden
                      />
                    </div>
                  </Card>
                </Reveal>
              );
            })}
            <Reveal as="li" delay={0.06} className="h-full sm:col-span-2">
              <Card tone="deep" className="flex h-full flex-col justify-between gap-8 md:flex-row md:items-end">
                <div className="max-w-md">
                  <Eyebrow tone="mute">Not listed</Eyebrow>
                  <h3 className="mt-5 font-display text-display-sm text-ink">Your sector isn't here?</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-mute">
                    The list reflects where we see the most activity, not the limit of what we advise on. Tell us about the
                    company and we'll say plainly whether we're the right fit.
                  </p>
                </div>
                <div className="shrink-0">
                  <TextLink to="/contact?intent=sell">Start a confidential conversation</TextLink>
                </div>
              </Card>
            </Reveal>
          </ul>
        </Container>
      </Section>

      <Section tone="deep" aria-labelledby="why-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <Eyebrow>Why it matters</Eyebrow>
              <h2 id="why-heading" className="mt-4 font-display text-display-lg text-ink">
                Why sector expertise matters.
              </h2>
              <p className="mt-5 max-w-sm text-lede text-mute">
                Buyers price a company against its peers. An advisor who knows those peers changes the conversation.
              </p>
            </Reveal>
            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:gap-12">
              {PERSPECTIVES.map((p, i) => (
                <Reveal key={p.label} delay={i * 0.06} className="flex flex-col border-t border-line-strong pt-6">
                  <Eyebrow index={i + 1} tone="mute">
                    {p.label}
                  </Eyebrow>
                  <h3 className="mt-6 font-display text-display-sm text-ink">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-mute-strong">{p.body}</p>
                  <div className="mt-auto pt-6">
                    <TextLink to={p.link.to}>{p.link.label}</TextLink>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Get a valuation from advisors who know your sector."
        body="A confidential conversation about where your company sits against its peers, who the likely buyers are, and what they will ask in diligence."
        actions={
          <>
            <Button to="/contact?intent=sell" size="lg" arrow>
              Request a valuation
            </Button>
            <Button to="/buy/listings" size="lg" variant="secondary">
              View listings
            </Button>
          </>
        }
      />
    </>
  );
}
