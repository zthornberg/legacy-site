import { motion, useReducedMotion } from 'framer-motion';
import { Button, Container, Eyebrow } from '../ui';
import { EASE } from '../../lib/motion';
import MandateTracker from './MandateTracker';
import home from '../../content/home.json';

/** Home opener: ink band, serif h1, lede, two actions and the mandate tracker aside on lg+. */
export default function HomeHero() {
  const reduce = useReducedMotion();
  const { hero } = home;

  const anim = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: EASE, delay: 0.05 + i * 0.08 },
        };

  return (
    <header className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 ink-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 ink-grid" aria-hidden />
      <Container className="relative pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <motion.div {...anim(0)}>
              <Eyebrow tone="inverse" className="mb-5">
                {hero.eyebrow}
              </Eyebrow>
            </motion.div>
            <motion.h1 className="font-display text-display-2xl text-paper" {...anim(1)}>
              {hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>
            <motion.p className="mt-6 max-w-xl text-lede text-paper/72 md:text-lede-lg" {...anim(2)}>
              {hero.lede}
            </motion.p>
            <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row" {...anim(3)}>
              <Button to={hero.primary.to} variant="inverse" size="lg" arrow>
                {hero.primary.label}
              </Button>
              <Button to={hero.secondary.to} variant="inverse-outline" size="lg">
                {hero.secondary.label}
              </Button>
            </motion.div>
          </div>
          <motion.div className="hidden lg:col-span-5 lg:block" {...anim(2)}>
            <MandateTracker delay={0.3} />
          </motion.div>
        </div>
      </Container>
    </header>
  );
}
