import { motion, useReducedMotion } from 'framer-motion';
import { Container, Stat } from '../ui';
import { EASE } from '../../lib/motion';
import home from '../../content/home.json';

const CARD = 'rounded-xl border border-line bg-white p-6 shadow-lift';

/**
 * Five proof cards that straddle the bottom edge of the hero and count up as they land.
 * One row on lg; a horizontal snap-scroll row with a peek on smaller screens.
 */
export default function ProofStrip() {
  const reduce = useReducedMotion();
  const item = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18, scale: 0.98 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.7, ease: EASE, delay: 0.5 + i * 0.08 },
        };

  return (
    <section aria-label="Legacy by the numbers" className="relative z-10 -mt-14 bg-transparent md:-mt-20">
      <Container>
        <ul className="hidden gap-4 lg:grid lg:grid-cols-5">
          {home.stats.map((s, i) => (
            <motion.li key={s.label} className={CARD} {...item(i)}>
              <Stat value={s.value} label={s.label} />
            </motion.li>
          ))}
        </ul>
        <ul className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1 sm:-mx-6 sm:px-6 lg:hidden">
          {home.stats.map((s, i) => (
            <motion.li key={s.label} className={`${CARD} min-w-[62%] snap-start sm:min-w-[38%]`} {...item(i)}>
              <Stat value={s.value} label={s.label} size="sm" />
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
