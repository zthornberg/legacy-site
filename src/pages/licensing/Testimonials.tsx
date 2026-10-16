import { Button, Container, CtaBand, Eyebrow, PageHero, Reveal, Section, SectionHeading, Stat } from '../../components/ui';
import Disclaimers from '../../components/licensing/Disclaimers';
import { APPLY_PATH, brokerStats, earningsFootnote, testimonials } from '../../components/licensing/content';
import { cn } from '../../lib/utils';

export default function Testimonials() {
  return (
    <>
      <PageHero
        tone="paper"
        crumbs={[{ label: 'Licensing', to: '/licensing/program' }, { label: 'Broker stories' }]}
        eyebrow="Broker stories"
        title="What licensed brokers say."
        lede="Brokers who built their practice on the Legacy platform, in their own words: the leads, the training, and what the first year looked like."
      />

      {/* Stories */}
      <Section tone="white" id="stories">
        <Container>
          <div className="divide-y divide-line">
            {testimonials.map((t, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal
                  key={t.name}
                  as="article"
                  className={cn('grid gap-10 py-16 first:pt-0 last:pb-0 md:py-20 lg:grid-cols-12 lg:items-center lg:gap-12')}
                >
                  <figure
                    className={cn(
                      'lg:col-span-4',
                      flip ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-9'
                    )}
                  >
                    <div
                      className={cn(
                        'overflow-hidden rounded-xl border border-line bg-paper-deep',
                        t.frame === 'landscape' ? 'aspect-[4/3]' : 'aspect-[4/5]'
                      )}
                    >
                      <img
                        src={t.image}
                        alt={t.alt}
                        className={cn('h-full w-full object-cover', t.frame === 'portrait' && 'object-top')}
                        loading="lazy"
                      />
                    </div>
                  </figure>

                  <div className={cn('lg:col-span-7', flip ? 'lg:col-start-6 lg:row-start-1' : 'lg:col-start-1 lg:row-start-1')}>
                    <span aria-hidden className="block select-none font-display text-7xl leading-[0.55] text-brass">
                      “
                    </span>
                    <blockquote className="mt-3">
                      <p className="font-display text-display-md text-ink">{t.quote}</p>
                    </blockquote>
                    <div className="mt-8 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
                      <div className="min-w-0">
                        <div className="text-[15px] font-medium text-ink">{t.name}</div>
                        <div className="mt-1 text-sm text-mute">{t.role}</div>
                      </div>
                      <div className="sm:w-72 sm:shrink-0">
                        <Eyebrow tone="mute">Outcome</Eyebrow>
                        <p className="mt-2 text-sm leading-relaxed text-mute-strong">{t.outcome}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Stat strip */}
      <Section tone="deep" id="results">
        <Container>
          <SectionHeading eyebrow="Across the network" title="The numbers behind the stories." size="md" />
          <Reveal delay={0.06} className="mt-10">
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
              {brokerStats.map((s) => (
                <li key={s.label} className="bg-paper-deep p-6 md:p-8">
                  <Stat value={s.value} label={s.label} />
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-2xl text-xs leading-relaxed text-mute-soft">{earningsFootnote}</p>
          </Reveal>
        </Container>
      </Section>

      <Disclaimers />

      <CtaBand
        eyebrow="Apply"
        title="Build your own practice on the platform."
        body="Legacy accepts a handful of new brokers each quarter. See the two licenses, or start an application."
        actions={
          <>
            <Button to="/licensing/pricing" size="lg" arrow>
              See pricing
            </Button>
            <Button to={APPLY_PATH} variant="secondary" size="lg">
              Start an application
            </Button>
          </>
        }
      />
    </>
  );
}
