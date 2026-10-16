import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';

/** Splits "$60M+" into { prefix: "$", number: 60, suffix: "M+" } */
function parseValue(value: string) {
  const m = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  if (!m) return null;
  const prefix = m[1] ?? '';
  const raw = m[2] ?? '';
  const suffix = m[3] ?? '';
  const number = parseFloat(raw.replace(/,/g, ''));
  if (Number.isNaN(number)) return null;
  const decimals = (raw.split('.')[1] ?? '').length;
  const grouped = raw.includes(',');
  return { prefix, number, suffix, decimals, grouped };
}

function format(n: number, decimals: number, grouped: boolean) {
  return grouped
    ? n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : n.toFixed(decimals);
}

/** Count-up number that animates once when it scrolls into view. */
export function CountUp({ value, className, duration = 1400 }: { value: string; className?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduce = useReducedMotion();
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(() => (parsed ? parsed.prefix + format(0, parsed.decimals, parsed.grouped) + parsed.suffix : value));

  useEffect(() => {
    if (!parsed) return;
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = duration > 0 ? Math.min(1, (now - start) / duration) : 1;
      const eased = 1 - Math.pow(1 - t, 4);
      const n = parsed.number * eased;
      setDisplay(parsed.prefix + format(t === 1 ? parsed.number : n, parsed.decimals, parsed.grouped) + parsed.suffix);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, reduce, duration]);

  return (
    <span ref={ref} className={cn('tabular', className)}>
      {display}
    </span>
  );
}

/**
 * A single statistic: serif number over a small label.
 * Use inside a grid; add `divider` to draw a left hairline between stats.
 */
export default function Stat({
  value,
  label,
  note,
  tone = 'default',
  size = 'md',
  animate = true,
  className,
}: {
  value: string;
  label: string;
  note?: string;
  tone?: 'default' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
  className?: string;
}) {
  const inverse = tone === 'inverse';
  const numCls = cn(
    'font-display tabular leading-none',
    { sm: 'text-3xl', md: 'text-4xl md:text-5xl', lg: 'text-5xl md:text-6xl' }[size],
    inverse ? 'text-paper' : 'text-ink'
  );
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className={numCls}>{animate ? <CountUp value={value} /> : <span className="tabular">{value}</span>}</div>
      <div className={cn('text-[13px] leading-snug', inverse ? 'text-paper/65' : 'text-mute')}>{label}</div>
      {note && <div className={cn('text-xs', inverse ? 'text-paper/40' : 'text-mute-soft')}>{note}</div>}
    </div>
  );
}
