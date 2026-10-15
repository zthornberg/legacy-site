import { Badge, Button, Card, CheckList, Eyebrow, Reveal, TextLink } from '../ui';
import type { Tier } from '../../content/licensing';
import { cn } from '../../lib/utils';
import { APPLY_PATH } from './content';

/** Quiet key-value rows: label left, tabular value right. */
function Facts({ rows, className }: { rows: { label: string; value: string }[]; className?: string }) {
  return (
    <dl className={cn('divide-y divide-line border-y border-line', className)}>
      {rows.map((r) => (
        <div key={r.label} className="flex items-baseline justify-between gap-4 py-3 text-sm">
          <dt className="text-mute">{r.label}</dt>
          <dd className="tabular text-right font-medium text-ink">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * A license tier. Full card on the pricing page; `compact` on the program teaser.
 * The featured tier gets a brass top rule and a brass-soft border, nothing louder.
 */
export default function TierCard({ tier, compact = false, delay = 0 }: { tier: Tier; compact?: boolean; delay?: number }) {
  const featured = Boolean(tier.featured);

  const facts = [
    { label: 'Exclusive seller leads', value: tier.hotLeads },
    { label: 'Warm local leads', value: tier.warmLeads },
    { label: 'Research suite', value: tier.dataAccess },
    { label: 'Royalty on closed commissions', value: tier.royalty },
  ];
  // The numeric lead and royalty highlights are already shown in the facts ledger above the list.
  const inclusions = tier.highlights.filter((h) => !/^\d/.test(h));

  if (compact) {
    return (
      <Reveal delay={delay} className="h-full">
        <Card
          as="article"
          padding="md"
          className={cn('flex h-full flex-col overflow-hidden', featured && 'border-brass-soft')}
        >
          {featured && <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-brass" />}
          <div className="flex min-h-[1.5rem] items-center justify-between gap-4">
            <Eyebrow tone={featured ? 'brass' : 'mute'}>{tier.name}</Eyebrow>
            {featured && tier.featuredLabel && <Badge tone="brass">{tier.featuredLabel}</Badge>}
          </div>
          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-display-md tabular leading-none text-ink">{tier.priceLabel}</span>
            <span className="text-sm text-mute">one-time license</span>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-mute">{tier.tagline}</p>
          <Facts rows={[facts[0], facts[3]]} className="mt-6" />
          <div className="mt-auto pt-6">
            <TextLink to="/licensing/pricing">See everything included</TextLink>
          </div>
        </Card>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay} className="h-full">
      <Card
        as="article"
        padding="lg"
        className={cn('flex h-full flex-col overflow-hidden', featured && 'border-brass-soft')}
      >
        {featured && <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-brass" />}

        <div className="flex min-h-[1.5rem] items-center justify-between gap-4">
          <Eyebrow tone={featured ? 'brass' : 'mute'}>{tier.name}</Eyebrow>
          {featured && tier.featuredLabel && <Badge tone="brass">{tier.featuredLabel}</Badge>}
        </div>

        <div className="mt-6">
          <div className="font-display text-display-lg tabular leading-none text-ink">{tier.priceLabel}</div>
          <div className="mt-3 text-sm text-mute">One-time license</div>
        </div>

        <p className="mt-6 text-[17px] leading-relaxed text-ink">{tier.tagline}</p>

        <div className="mt-6">
          <Eyebrow tone="mute">Best for</Eyebrow>
          <p className="mt-2 text-[15px] leading-relaxed text-mute">{tier.bestFor}</p>
        </div>

        <Facts rows={facts} className="mt-7" />

        <CheckList items={inclusions} size="sm" className="mt-6" />

        <div className="mt-auto pt-9">
          <Button to={APPLY_PATH} variant={featured ? 'primary' : 'secondary'} size="lg" full arrow>
            Apply for the {tier.name} license
          </Button>
        </div>
      </Card>
    </Reveal>
  );
}
