// Sub-sector brief for an industry page: title, thesis, then four hairline lists
// (insights, illustrative multiples, likely buyers, diligence pitfalls) and a sell-side CTA.
// Copy lives in src/content/industries.ts.

import type { ReactNode } from 'react';
import { industries } from '../content/industries';
import { Button, Eyebrow, Reveal } from './ui';

type Band = { ev: string; multiple: string };

/** Pulls "~3.0–4.5× at $2–5M EV" pairs out of a comps line so they can be set as a ledger. */
function parseBands(line: string): { bands: Band[]; note?: string } {
  const re = /~?\s*([\d.]+)\s*[–-]\s*([\d.]+)\s*×\s*at\s*\$([\d.]+)\s*[–-]\s*([\d.]+)\s*M\s*EV/g;
  const bands: Band[] = [];
  for (const m of line.matchAll(re)) {
    bands.push({ multiple: `${m[1]}–${m[2]}×`, ev: `$${m[3]}–${m[4]}M` });
  }
  if (bands.length > 0) {
    const paren = line.match(/\(([^)]+)\)\.?\s*$/);
    return { bands, note: paren ? capitalize(paren[1]) + '.' : undefined };
  }
  // Single headline range, e.g. "EBITDA ~5.0–8.0× for profitable MSPs in the lower middle market; …"
  const single = stripIllustrative(line).match(/^EBITDA\s*~?\s*([\d.]+)\s*[–-]\s*([\d.]+)\s*×\s*(.*)$/);
  if (single) {
    return { bands: [{ ev: 'EBITDA', multiple: `${single[1]}–${single[2]}×` }], note: single[3] ? capitalize(single[3]) : undefined };
  }
  return { bands: [] };
}

/** Keep numeric ranges like "2–3×" on one line: a word joiner after the en dash stops the browser breaking there. */
function keepRanges(text: string) {
  return text.replace(/(\d)–(?=\d)/g, '$1–\u2060');
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/** "Premiums: a, b" → label + rest, so the label can be set in ink. */
function splitLabel(line: string) {
  const m = line.match(/^([A-Z][A-Za-z ]{2,24}):\s*(.+)$/);
  return m ? { label: m[1], rest: m[2] } : { label: undefined, rest: line };
}

/** "Illustrative 2025 lower-middle-market bands: EBITDA ~5.0–8.0× …" → "EBITDA ~5.0–8.0× …" */
function stripIllustrative(line: string) {
  return line.replace(/^Illustrative( \d{4})?( lower-middle-market| LMM)? bands:\s*/i, '');
}

function ListHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className="border-b border-line-strong pb-3 font-sans text-[13px] font-medium tracking-[0.01em] text-ink">{children}</h4>
  );
}

function HairlineList({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-line">
      {items.map((item, i) => {
        const { label, rest } = splitLabel(item);
        return (
          <li key={i} className="py-3.5 text-[15px] leading-relaxed text-mute-strong">
            {label && <span className="font-medium text-ink">{label}: </span>}
            {keepRanges(rest)}
          </li>
        );
      })}
    </ul>
  );
}

function Multiples({ comps }: { comps: string[] }) {
  const [first, ...rest] = comps;
  const { bands, note } = first ? parseBands(first) : { bands: [] as Band[], note: undefined };
  const evBands = bands[0]?.ev.startsWith('$');
  const noteText = evBands ? `EBITDA multiples, lower-middle-market bands.${note ? ` ${note}` : ''}` : note;

  return (
    <div>
      <ListHeading>Illustrative multiples</ListHeading>
      {bands.length > 0 ? (
        <>
          <dl className="divide-y divide-line">
            {bands.map((b) => (
              <div key={b.ev} className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="text-[13px] text-mute">
                  {b.ev.startsWith('$') ? (
                    <>
                      <span className="tabular text-ink">{b.ev}</span> enterprise value
                    </>
                  ) : (
                    <span className="text-ink">{b.ev} multiple</span>
                  )}
                </dt>
                <dd className="tabular font-display text-display-sm leading-none text-ink">{b.multiple}</dd>
              </div>
            ))}
          </dl>
          {noteText && <p className="border-t border-line pt-3 text-[12px] leading-relaxed text-mute">{keepRanges(noteText)}</p>}
          {rest.length > 0 && <HairlineList items={rest} />}
        </>
      ) : (
        <HairlineList items={comps.map(stripIllustrative)} />
      )}
    </div>
  );
}

export default function IndustrySection({ slug, index }: { slug: string; index?: string | number }) {
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return null;

  // First sentence is the thesis; the rest supports it.
  const m = ind.intro.match(/^(.+?\.)\s+(.*)$/);
  const thesis = m ? m[1] : ind.intro;
  const support = m ? m[2] : '';
  const titleId = `${slug}-title`;
  // The eyebrow sets index and title as separate flex items, which some screen readers run together ("4.1Construction").
  const indexLabel = typeof index === 'number' ? String(index).padStart(2, '0') : index;
  const headingLabel = indexLabel ? `${indexLabel} ${ind.title}` : ind.title;

  return (
    <article id={slug} aria-labelledby={titleId} className="scroll-mt-24 border-t border-line pt-10 md:pt-12">
      {/* DOM order (thesis → lists → CTA) keeps the CTA last on mobile; on lg the CTA tucks under the thesis. */}
      <div className="grid gap-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-0">
        <Reveal className="lg:col-span-4 lg:col-start-1 lg:row-start-1">
          <h3 id={titleId} aria-label={headingLabel}>
            <Eyebrow index={index}>{ind.title}</Eyebrow>
          </h3>
          <p className="mt-5 font-display text-display-sm text-ink">{thesis}</p>
          {support && <p className="mt-4 text-[15px] leading-relaxed text-mute">{support}</p>}
        </Reveal>

        <Reveal
          delay={0.06}
          className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8 lg:col-start-5 lg:row-span-2 lg:row-start-1"
        >
          <div>
            <ListHeading>What moves value</ListHeading>
            <HairlineList items={ind.insights} />
          </div>
          <Multiples comps={ind.comps} />
          <div>
            <ListHeading>Likely buyers</ListHeading>
            <HairlineList items={ind.buyers} />
          </div>
          <div>
            <ListHeading>Diligence pitfalls</ListHeading>
            <HairlineList items={ind.pitfalls} />
          </div>
        </Reveal>

        <div className="border-t border-line pt-6 lg:col-span-4 lg:col-start-1 lg:row-start-2 lg:mt-8 lg:self-start">
          <p className="text-[15px] leading-relaxed text-ink/85">{ind.cta}</p>
          <Button to={`/contact?intent=sell&industry=${slug}`} variant="secondary" size="sm" arrow className="mt-5">
            Discuss a sale
          </Button>
        </div>
      </div>
    </article>
  );
}
