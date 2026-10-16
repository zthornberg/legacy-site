import { Container, Section } from '../ui';
import { disclaimers } from '../../content/licensing';

/** The three program disclaimers, quiet and left-aligned, above the closing CTA. */
export default function Disclaimers() {
  return (
    <Section tone="paper" size="sm" divider aria-labelledby="licensing-disclaimers">
      <Container>
        <h2 id="licensing-disclaimers" className="sr-only">
          Disclaimers
        </h2>
        <ul className="max-w-3xl space-y-2.5 text-xs leading-relaxed text-mute">
          {disclaimers.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
