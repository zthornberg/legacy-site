import { Card, Container, Eyebrow, Reveal, Section, SectionHeading, TextLink } from '../ui';
import { cn } from '../../lib/utils';
import home from '../../content/home.json';

/**
 * Sell / Buy / License. The Sell card is the primary path and sits on a brass-tint surface.
 * Tablet: Sell spans the full row above Buy and License; lg: three equal columns.
 * Titles reserve two lines wherever cards share a row, so the bodies start on one baseline.
 */
export default function ThreePaths() {
  const { paths } = home;
  return (
    <Section tone="paper" aria-labelledby="paths-title">
      <Container>
        <SectionHeading id="paths-title" split eyebrow={paths.eyebrow} title={paths.title} lede={paths.lede} />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {paths.items.map((p, i) => {
            const primary = i === 0;
            return (
              <Reveal key={p.eyebrow} delay={i * 0.06} className={cn('h-full', primary && 'md:col-span-2 lg:col-span-1')}>
                <Card tone={primary ? 'brass' : 'white'} padding="lg" as="article" className="flex h-full flex-col">
                  <Eyebrow index={i + 1} tone={primary ? 'brass' : 'mute'}>
                    {p.eyebrow}
                  </Eyebrow>
                  <h3
                    className={cn(
                      'mt-5 text-balance font-display text-display-sm text-ink',
                      primary ? 'lg:min-h-[3.75rem]' : 'md:min-h-[3.75rem]'
                    )}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-mute">{p.description}</p>
                  <div className="mt-auto pt-8">
                    <TextLink to={p.link.to} tone={primary ? 'brass' : 'ink'}>
                      {p.link.label}
                    </TextLink>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
