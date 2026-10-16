import { Reveal, Stat } from '../ui';

export type ProofItem = { value: string; label: string };

const SELL_PROOF: ProofItem[] = [
  { value: '2,400+', label: 'Registered buyers' },
  { value: '$60M+', label: 'Transaction value closed' },
  { value: '35+', label: 'Years of combined team experience' },
  { value: '97%', label: 'Client satisfaction' },
];

// Explicit per-cell dividers: 2×2 on small screens, one row of four on large.
const cell = [
  '',
  'border-l border-line pl-6 lg:pl-8',
  'lg:border-l lg:border-line lg:pl-8',
  'border-l border-line pl-6 lg:pl-8',
];

/** A hairline row of 3–4 stats. Renders inside a hero or a section. */
export default function ProofStrip({
  items = SELL_PROOF,
  className = '',
}: {
  items?: ProofItem[];
  className?: string;
}) {
  return (
    <Reveal className={`grid grid-cols-2 gap-y-10 border-t border-line pt-10 lg:grid-cols-4 ${className}`}>
      {items.map((s, i) => (
        <div key={s.label} className={`pr-4 ${cell[i % 4]}`}>
          <Stat value={s.value} label={s.label} />
        </div>
      ))}
    </Reveal>
  );
}
