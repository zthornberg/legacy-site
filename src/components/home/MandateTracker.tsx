import { motion, useReducedMotion } from 'framer-motion';
import { Badge } from '../ui';
import { cn } from '../../lib/utils';
import { EASE } from '../../lib/motion';

/**
 * Illustrative "mandate tracker": a product-style card showing the buyer funnel
 * of one anonymized sell-side process. Built from DOM; numbers are illustrative.
 */
const FUNNEL = [
  { label: 'Teasers sent', count: 48 },
  { label: 'NDAs signed', count: 19 },
  { label: 'IOIs received', count: 6 },
  { label: 'LOI signed', count: 1 },
] as const;

const FOOTER = [
  { label: 'EBITDA', value: '$950K' },
  { label: 'Multiple', value: '4.1×' },
] as const;

export default function MandateTracker({ className, delay = 0 }: { className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  const max = FUNNEL[0].count;

  const row = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 6 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease: EASE, delay: delay + 0.1 + i * 0.07 },
        };

  return (
    <figure
      aria-label="Illustrative mandate tracker for Project Granite"
      className={cn(
        'rounded-xl border border-line-inverse bg-ink-800 text-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]',
        className
      )}
    >
      {/* Header */}
      <div className="px-6 pt-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brass-light" aria-hidden />
            <p className="text-[15px] font-medium leading-none">Project Granite</p>
          </div>
          <Badge tone="inverse">Illustrative</Badge>
        </div>
        <p className="mt-2 pl-4 text-[13px] text-paper/55">Commercial electrical contractor · Southeast US</p>
      </div>

      {/* Funnel ledger */}
      <div className="mt-6 border-t border-line-inverse px-6 pt-5">
        <div className="flex items-center justify-between">
          <span className="eyebrow text-paper/45">Buyer funnel</span>
          <span className="eyebrow tabular text-paper/45">Week 6 · Go to market</span>
        </div>
        <ol className="mt-5 space-y-4">
          {FUNNEL.map((f, i) => {
            const pct = Math.max(2, (f.count / max) * 100);
            return (
              <motion.li key={f.label} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2" {...row(i)}>
                <span className="text-[13px] text-paper/75">{f.label}</span>
                <span className="tabular text-[13px] font-medium text-paper">{f.count}</span>
                <div className="col-span-2 h-[3px] overflow-hidden rounded-full bg-white/[0.08]">
                  <motion.div
                    className="h-full rounded-full bg-brass-light"
                    style={{ width: `${pct}%`, transformOrigin: 'left' }}
                    initial={reduce ? false : { scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, ease: EASE, delay: delay + 0.3 + i * 0.07 }}
                  />
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>

      {/* Two-cell footer */}
      <div className="mt-6 grid grid-cols-2 divide-x divide-line-inverse border-t border-line-inverse">
        {FOOTER.map((c) => (
          <div key={c.label} className="px-6 py-5">
            <p className="eyebrow text-paper/45">{c.label}</p>
            <p className="mt-2 font-display text-3xl tabular leading-none text-paper">{c.value}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
