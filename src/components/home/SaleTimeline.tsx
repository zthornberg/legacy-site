import { Container, Eyebrow, Reveal, Section, SectionHeading, TextLink } from '../ui';
import { sellProcess } from '../../content/process';

/**
 * The five sell-side phases as a horizontal rail on lg (numbered, duration, title, one line)
 * and a vertical rail on smaller screens. Reads from src/content/process.ts.
 */
export default function SaleTimeline() {
  return (
    <Section tone="white" aria-labelledby="process-title">
      <Container>
        <SectionHeading
          id="process-title"
          split
          eyebrow="How a sale runs"
          title={sellProcess.title}
          lede={sellProcess.subtitle}
          action={<TextLink to="/sell/brokerage">The sell-side process in detail</TextLink>}
        />
        <ol className="mt-12 lg:mt-16 lg:grid lg:grid-cols-5">
          {sellProcess.steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 0.06}
              className="relative border-l border-line pb-10 pl-7 last:pb-0 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pr-8 lg:pt-7 lg:last:pr-0"
            >
              <span
                aria-hidden
                className="absolute -left-[3px] top-1 h-[5px] w-[5px] rounded-full bg-brass lg:-top-[3px] lg:left-0"
              />
              <Eyebrow index={i + 1} tone="mute">
                {s.duration}
              </Eyebrow>
              <h3 className="mt-3 font-display text-display-sm text-ink">{s.title}</h3>
              <p className="mt-2.5 max-w-sm text-[14px] leading-relaxed text-mute">{s.details[0]}</p>
              {s.artifacts && s.artifacts.length > 0 && (
                <p className="mt-4 max-w-sm text-[12px] leading-relaxed text-mute-soft">{s.artifacts.join(' · ')}</p>
              )}
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
