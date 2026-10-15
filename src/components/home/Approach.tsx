import { Container, Eyebrow, Reveal, Section, TextLink } from '../ui';
import home from '../../content/home.json';

/** Three principles under an editorial serif statement, on the paper-deep tone. */
export default function Approach() {
  const { approach } = home;
  return (
    <Section tone="deep" aria-labelledby="approach-title">
      <Container>
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
            <Eyebrow className="mb-5">{approach.eyebrow}</Eyebrow>
            <h2 id="approach-title" className="max-w-4xl font-display text-display-md text-ink">
              {approach.statement}
            </h2>
          </div>
          <div className="lg:col-span-3 lg:pb-1 lg:text-right">
            <TextLink to="/company/team">Meet the advisors</TextLink>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16">
          {approach.principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="border-t border-line-strong pt-6">
              <span className="eyebrow tabular text-mute-soft">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-display text-display-sm text-ink">{p.title}</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-mute">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
