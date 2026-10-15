import { Badge, Button, Card, CheckList, Container, Eyebrow, Reveal, Section } from '../ui';
import { cn } from '../../lib/utils';
import { tiers } from '../../content/licensing';
import home from '../../content/home.json';

/** Ink band introducing the licensing program with the two tier cards from src/content/licensing.ts. */
export default function LicensingBand() {
  const { licensing } = home;
  return (
    <Section tone="ink" aria-labelledby="licensing-title">
      <div className="pointer-events-none absolute inset-0 ink-glow" aria-hidden />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Eyebrow tone="inverse" className="mb-4">
              {licensing.eyebrow}
            </Eyebrow>
            <h2 id="licensing-title" className="font-display text-display-lg text-paper">
              {licensing.title}
            </h2>
            <p className="mt-5 max-w-md text-lede text-paper/70">{licensing.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to={licensing.primary.to} variant="inverse" arrow>
                {licensing.primary.label}
              </Button>
              <Button to={licensing.secondary.to} variant="inverse-outline">
                {licensing.secondary.label}
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-5">
            {tiers.map((t, i) => (
              <Reveal key={t.id} delay={0.06 + i * 0.06} className="h-full">
                <Card tone="ink" as="article" className={cn('flex h-full flex-col', t.featured && 'border-brass-light/40')}>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-sans text-[15px] font-medium text-paper">{t.name}</h3>
                    {t.featured && t.featuredLabel && (
                      <Badge tone="inverse" dot>
                        {t.featuredLabel}
                      </Badge>
                    )}
                  </div>
                  <p className="mt-6 eyebrow text-paper/45">License investment</p>
                  <p className="mt-2 font-display text-display-md tabular leading-none text-paper">{t.priceLabel}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-paper/60">{t.tagline}</p>
                  <CheckList
                    tone="inverse"
                    size="sm"
                    items={t.highlights.slice(0, 2)}
                    className="mt-6 border-t border-line-inverse pt-6"
                  />
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
