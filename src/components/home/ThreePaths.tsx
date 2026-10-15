import { Card, Container, Eyebrow, Reveal, Section, SectionHeading, TextLink } from '../ui';
import home from '../../content/home.json';

/** Sell / Buy / License. The Sell card is the primary path and sits on a brass-tint surface. */
export default function ThreePaths() {
  const { paths } = home;
  return (
    <Section tone="paper" aria-labelledby="paths-title">
      <Container>
        <SectionHeading id="paths-title" split eyebrow={paths.eyebrow} title={paths.title} lede={paths.lede} />
        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-16 lg:gap-5">
          {paths.items.map((p, i) => {
            const primary = i === 0;
            return (
              <Reveal key={p.eyebrow} delay={i * 0.06} className="h-full">
                <Card tone={primary ? 'brass' : 'white'} padding="lg" as="article" className="flex h-full flex-col">
                  <Eyebrow index={i + 1} tone={primary ? 'brass' : 'mute'}>
                    {p.eyebrow}
                  </Eyebrow>
                  <h3 className="mt-5 font-display text-display-sm text-ink">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-mute">{p.description}</p>
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
