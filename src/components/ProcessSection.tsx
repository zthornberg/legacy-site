import { useId } from 'react';
import { buyProcess, sellProcess } from '../content/process';
import type { ProcessStep } from '../content/types';
import { Badge, Button, Container, Reveal, Section, SectionHeading } from './ui';

type Tone = 'paper' | 'white' | 'deep';

type Props = {
  mode: 'sell' | 'buy';
  /** Section surface. Defaults to white. */
  tone?: Tone;
  /** Summary view: phase, duration and deliverables only. Runs horizontally on large screens. */
  compact?: boolean;
  /** Optional heading overrides; default copy comes from content/process.ts. */
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  /** Where the closing button points. */
  ctaTo?: string;
  id?: string;
};

// Node fill must match the section surface so the spine appears to pass behind it.
const nodeFill: Record<Tone, string> = {
  paper: 'bg-paper',
  white: 'bg-white',
  deep: 'bg-paper-deep',
};

const pad = (n: number) => String(n).padStart(2, '0');

/** Keep hyphenated tokens like "20-minute" on one line. */
function keepHyphens(text: string) {
  return text.split(/(\S+-\S+)/).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

function Node({ n, tone }: { n: number; tone: Tone }) {
  return (
    <span
      aria-hidden
      className={`relative z-[1] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong ${nodeFill[tone]} font-display text-xl leading-none text-ink tabular`}
    >
      {pad(n)}
    </span>
  );
}

function Deliverables({ items }: { items: string[] }) {
  return (
    <div>
      <p className="eyebrow mb-3 text-mute">Deliverables</p>
      <ul className="flex flex-wrap gap-1.5" aria-label="Deliverables">
        {items.map((a) => (
          <li key={a}>
            <Badge tone="outline" className="bg-transparent font-normal text-mute-strong">
              {a}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------- full (vertical) */

function FullTimeline({ steps, tone }: { steps: ProcessStep[]; tone: Tone }) {
  const last = steps.length - 1;
  return (
    <ol className="mt-14 md:mt-20">
      {steps.map((s, i) => (
        <Reveal
          as="li"
          key={s.title}
          delay={i * 0.06}
          className="relative grid grid-cols-[2.75rem_1fr] gap-x-5 sm:gap-x-8"
        >
          {/* Spine: incoming segment (from the row's top to this node) and outgoing segment (to the next row). */}
          {i > 0 && (
            <span
              aria-hidden
              className="absolute left-[1.375rem] top-0 h-[4.375rem] w-px -translate-x-1/2 bg-line-strong"
            />
          )}
          {i < last && (
            <span
              aria-hidden
              className={`absolute bottom-0 left-[1.375rem] w-px -translate-x-1/2 bg-line-strong ${i > 0 ? 'top-[4.375rem]' : 'top-[1.375rem]'}`}
            />
          )}

          <div className={i > 0 ? 'mt-12' : ''}>
            <Node n={i + 1} tone={tone} />
          </div>

          <div
            className={`grid gap-6 lg:grid-cols-12 lg:gap-10 ${i > 0 ? 'border-t border-line pt-12' : ''} ${i < last ? 'pb-12' : ''}`}
          >
            <div className="lg:col-span-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-1.5">
                <h3 className="font-display text-[1.75rem] leading-[1.15] text-ink">{s.title}</h3>
                {s.duration && (
                  <Badge tone="brass" className="tabular">
                    {s.duration}
                  </Badge>
                )}
              </div>
              {s.artifacts && s.artifacts.length > 0 && (
                <div className="mt-6">
                  <Deliverables items={s.artifacts} />
                </div>
              )}
            </div>
            <ul className="space-y-3 lg:col-span-7 lg:pt-3">
              {s.details.map((d) => (
                <li key={d} className="flex gap-4 text-[15px] leading-relaxed text-mute">
                  <span aria-hidden className="mt-3 w-3 shrink-0 border-t border-brass" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/* --------------------------------------------- compact (horizontal on desktop) */

function CompactTimeline({ steps, tone }: { steps: ProcessStep[]; tone: Tone }) {
  const last = steps.length - 1;
  return (
    <ol className="mt-14 grid md:mt-16 lg:grid-cols-5 lg:gap-x-6">
      {steps.map((s, i) => (
        <Reveal
          as="li"
          key={s.title}
          delay={i * 0.06}
          className="relative grid grid-cols-[2.75rem_1fr] gap-x-5 pb-10 last:pb-0 lg:block lg:pb-0"
        >
          {i < last && (
            <>
              {/* vertical spine (mobile) */}
              <span
                aria-hidden
                className="absolute bottom-0 left-[1.375rem] top-[1.375rem] w-px -translate-x-1/2 bg-line-strong lg:hidden"
              />
              {/* horizontal spine (desktop), runs into the column gap */}
              <span
                aria-hidden
                className="absolute -right-6 left-11 top-[1.375rem] hidden h-px bg-line-strong lg:block"
              />
            </>
          )}
          <Node n={i + 1} tone={tone} />
          <div className="pt-1.5 lg:pt-7 lg:pr-2">
            <h3 className="font-display text-[1.625rem] leading-[1.15] text-ink">{s.title}</h3>
            {s.duration && <p className="mt-2 text-[13px] text-mute tabular">{s.duration}</p>}
            {s.artifacts && s.artifacts.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Deliverables">
                {s.artifacts.map((a) => (
                  <li key={a}>
                    <Badge tone="outline" className="bg-transparent font-normal text-mute-strong">
                      {a}
                    </Badge>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/* ---------------------------------------------------------------------- section */

export default function ProcessSection({
  mode,
  tone = 'white',
  compact = false,
  eyebrow,
  title,
  subtitle,
  ctaTo,
  id,
}: Props) {
  const p = mode === 'sell' ? sellProcess : buyProcess;
  const headingId = useId();
  const ctaLabel = mode === 'sell' ? 'Book a fit call' : 'Start a mandate';
  const href = ctaTo ?? (mode === 'sell' ? '/contact?intent=sell' : '/contact?intent=buy');

  return (
    <Section tone={tone} id={id} aria-labelledby={headingId} divider={tone !== 'white'}>
      <Container>
        <SectionHeading
          split
          id={headingId}
          eyebrow={eyebrow ?? (mode === 'sell' ? 'Sell-side process' : 'Buy-side process')}
          title={title ?? p.title}
          lede={subtitle ?? p.subtitle}
        />

        {compact ? <CompactTimeline steps={p.steps} tone={tone} /> : <FullTimeline steps={p.steps} tone={tone} />}

        <Reveal className="mt-16 flex flex-col gap-6 border-t border-line pt-10 md:mt-20 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <p className="max-w-2xl font-display text-display-sm text-ink">{keepHyphens(p.cta)}</p>
          <div className="shrink-0">
            <Button to={href} arrow>
              {ctaLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
