import { Link } from 'react-router-dom';
import { Container, Eyebrow, Reveal, Section, TextLink } from '../ui';
import { team } from '../../data/team';
import home from '../../content/home.json';

/** Three principles under an editorial serif statement, with the real advisors alongside. */
export default function Approach() {
  const { approach } = home;
  const advisors = team.filter((m) => m.headshot).slice(0, 5);
  return (
    <Section tone="deep" aria-labelledby="approach-title">
      <Container>
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Eyebrow className="mb-5">{approach.eyebrow}</Eyebrow>
            <h2 id="approach-title" className="max-w-4xl font-display text-display-md text-ink">
              {approach.statement}
            </h2>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link to="/company/team" className="group inline-flex items-center gap-4" aria-label="Meet the advisors">
              <ul className="flex -space-x-2.5">
                {advisors.map((m) => (
                  <li key={m.id}>
                    <img
                      src={m.headshot}
                      alt={m.name}
                      loading="lazy"
                      className="h-11 w-11 rounded-full border-2 border-paper-deep object-cover object-top transition-transform duration-300 group-hover:-translate-y-0.5"
                    />
                  </li>
                ))}
              </ul>
              <span className="flex flex-col">
                <span className="text-sm font-medium text-ink">The advisors on every mandate</span>
                <TextLink to="/company/team" tone="mute" className="text-[13px]">
                  Meet the team
                </TextLink>
              </span>
            </Link>
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
