import { Container, Reveal, Stat } from '../ui';
import { cn } from '../../lib/utils';
import home from '../../content/home.json';

/**
 * Five stats in a hairline-bordered row. On lg it is one row with vertical dividers;
 * on small screens the lead stat spans the row and the rest sit in a 2×2 ledger.
 */
const CELL: string[] = [
  'col-span-2 border-b border-line lg:col-span-1 lg:border-b-0 lg:pr-6',
  'border-b border-line pr-4 lg:border-b-0 lg:border-l lg:px-6',
  'border-b border-l border-line pl-5 lg:border-b-0 lg:px-6',
  'pr-4 lg:border-l lg:border-line lg:px-6',
  'border-l border-line pl-5 lg:px-6 lg:pr-0',
];

export default function ProofStrip() {
  return (
    <section aria-label="Legacy by the numbers" className="bg-paper">
      <Container>
        <Reveal as="ul" className="grid grid-cols-2 border-b border-line lg:grid-cols-5">
          {home.stats.map((s, i) => (
            <li key={s.label} className={cn('py-7 lg:py-10', CELL[i])}>
              <Stat value={s.value} label={s.label} />
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
