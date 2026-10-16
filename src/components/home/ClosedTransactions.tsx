import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { Badge, Container, Reveal, Section, SectionHeading, TextLink } from '../ui';
import { cn } from '../../lib/utils';
import { EASE } from '../../lib/motion';
import { TRANSACTIONS, type Transaction } from '../sell/transactions';
import home from '../../content/home.json';

const AUTOPLAY_MS = 7000;

const fact = (t: Transaction, label: string) => t.facts.find((f) => f.label === label)?.value;

/**
 * Five anonymized outcomes as a selectable list (left) and a figure (right).
 * Data comes from src/components/sell/transactions.ts, the same source as /sell/case-studies.
 * Gentle autoplay while in view; pauses on hover/focus, stops once the reader picks one,
 * and is off entirely under prefers-reduced-motion. The caption is only announced after a pick.
 */
export default function ClosedTransactions() {
  const { transactions } = home;
  const items = TRANSACTIONS;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [picked, setPicked] = useState(false);
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const inView = useInView(rootRef, { amount: 0.4 });
  const current = items[index];

  useEffect(() => {
    if (reduce || paused || picked || !inView) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % items.length), AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [reduce, paused, picked, inView, items.length]);

  // Warm the cache for the next image so the crossfade never shows an empty frame.
  useEffect(() => {
    const img = new Image();
    img.src = items[(index + 1) % items.length].image;
  }, [index, items]);

  const pick = (i: number, focus = false) => {
    setIndex(i);
    setPicked(true);
    if (focus) buttons.current[i]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLOListElement>) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    const focused = buttons.current.indexOf(document.activeElement as HTMLButtonElement);
    const from = focused >= 0 ? focused : index;
    const step = e.key === 'ArrowDown' ? 1 : -1;
    pick((from + step + items.length) % items.length, true);
  };

  return (
    <Section tone="paper" divider aria-labelledby="transactions-title">
      <Container>
        <SectionHeading
          id="transactions-title"
          split
          eyebrow={transactions.eyebrow}
          title={transactions.title}
          lede={
            <>
              {transactions.lede}
              <span className="mt-2 block text-[13px] text-mute-soft">{transactions.note}</span>
            </>
          }
          action={<TextLink to={transactions.link.to}>{transactions.link.label}</TextLink>}
        />

        <div
          ref={rootRef}
          className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* Selectable list */}
          <Reveal className="order-2 lg:order-1 lg:col-span-5">
            <ol className="border-t border-line" aria-label="Select a transaction" onKeyDown={onKeyDown}>
              {items.map((t, i) => {
                const active = i === index;
                return (
                  <li key={t.id} className="border-b border-line">
                    <button
                      type="button"
                      ref={(el) => {
                        buttons.current[i] = el;
                      }}
                      aria-pressed={active}
                      onClick={() => pick(i)}
                      className={cn(
                        'group relative flex w-full items-start gap-4 py-4 pl-5 text-left transition-colors duration-200 lg:py-6',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded-sm',
                        active ? 'text-ink' : 'text-mute-strong hover:text-ink'
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          'absolute left-0 top-0 h-full w-0.5 bg-brass transition-opacity duration-200',
                          active ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                        )}
                      />
                      <span className="eyebrow tabular pt-1 text-mute-soft">{String(i + 1).padStart(2, '0')}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-medium leading-snug">{t.title}</span>
                        <span className="mt-0.5 block text-[13px] text-mute">{t.region}</span>
                      </span>
                      <span className="hidden shrink-0 text-right text-[13px] tabular leading-snug text-mute sm:block">
                        <span className="block">{fact(t, 'Revenue')} revenue</span>
                        <span className="mt-0.5 block">{fact(t, 'EBITDA')} EBITDA</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          {/* Figure */}
          <Reveal className="order-1 lg:order-2 lg:col-span-7" delay={0.06}>
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-paper-deep">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={current.id}
                    src={current.image}
                    alt={current.alt}
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
                  />
                </AnimatePresence>
              </div>
              <figcaption className="mt-6" aria-live={picked ? 'polite' : 'off'}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-display-sm text-ink">{current.title}</h3>
                  <span className="text-[13px] text-mute">{current.region}</span>
                </div>
                <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-line py-5 sm:flex sm:gap-0 sm:divide-x sm:divide-line">
                  {current.facts.map((f) => (
                    <div key={f.label} className="sm:flex-1 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                      <dt className="eyebrow text-mute-soft">{f.label}</dt>
                      <dd className="mt-2 font-display text-2xl tabular leading-none text-ink md:text-3xl">{f.value}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-4 flex min-h-[3.625rem] flex-wrap content-start gap-2 sm:min-h-0" aria-label="Outcome">
                  {current.outcomes.map((o) => (
                    <li key={o}>
                      <Badge tone="brass" className="tabular">
                        {o}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
