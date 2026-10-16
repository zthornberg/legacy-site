import { motion, useReducedMotion } from 'framer-motion';
import { Badge } from '../ui';
import { EASE } from '../../lib/motion';

/** Illustrative buy-side sourcing funnel, built from DOM for the Representation hero. */
const STAGES = [
  { label: 'Targets identified', value: 140 },
  { label: 'Contacted', value: 62 },
  { label: 'Conversations', value: 18 },
  { label: 'IOIs submitted', value: 4 },
  { label: 'LOI signed', value: 1 },
];

export default function SourcingTracker() {
  const reduce = useReducedMotion();
  const max = STAGES[0].value;

  return (
    <figure
      className="relative rounded-xl border border-line-inverse bg-ink-800/90 p-6 shadow-lift sm:p-7"
      aria-label="Illustrative sourcing tracker for a buy-side mandate"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="eyebrow text-paper/55">Sourcing tracker</span>
        <Badge tone="inverse">Illustrative</Badge>
      </div>

      <div className="mt-5 border-b border-line-inverse pb-5">
        <p className="font-display text-[1.75rem] leading-tight text-paper">Add-on search, B2B services</p>
        <p className="mt-1.5 text-[13px] text-paper/55">
          <span className="tabular">$1–3M</span> EBITDA · Southwest · Week <span className="tabular">6</span> of origination
        </p>
      </div>

      <ol className="mt-5 space-y-4">
        {STAGES.map((s, i) => {
          const pct = Math.max((s.value / max) * 100, 1.5);
          return (
            <li key={s.label}>
              <div className="flex items-baseline justify-between gap-4 text-[13px]">
                <span className="text-paper/75">{s.label}</span>
                <span className="tabular font-medium text-paper">{s.value}</span>
              </div>
              <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-white/[0.07]" aria-hidden>
                <motion.div
                  className="h-full origin-left rounded-full bg-brass-light"
                  style={{ width: `${pct}%` }}
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.35 + i * 0.08 }}
                />
              </div>
            </li>
          );
        })}
      </ol>

      <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-line-inverse pt-4 text-xs text-paper/50">
        <span>Weekly pipeline review with your deal team</span>
        <span className="tabular hidden sm:inline">140 → 1</span>
      </figcaption>
    </figure>
  );
}
