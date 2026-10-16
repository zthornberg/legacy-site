import { motion, useReducedMotion } from 'framer-motion';
import { Button, Container, Eyebrow } from '../ui';
import { EASE } from '../../lib/motion';
import home from '../../content/home.json';

/**
 * Home opener: a full-height photograph under an ink wash, with the serif headline set low-left
 * and the header floating transparently over the top. The proof cards straddle the bottom edge.
 * Swap the photo by replacing /media/hero-table.webp (1920w) and /media/hero-table-960.webp (mobile).
 */
export default function HomeHero() {
  const reduce = useReducedMotion();
  const { hero } = home;

  const anim = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: EASE, delay: 0.15 + i * 0.09 },
        };

  return (
    <header id="home-hero" className="relative -mt-16 flex min-h-[90svh] items-end overflow-hidden bg-ink text-paper md:min-h-[92vh]">
      {/* Photograph */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1 }}
        animate={reduce ? undefined : { scale: 1.06 }}
        transition={{ duration: 22, ease: 'linear' }}
        aria-hidden
      >
        <picture>
          <source media="(max-width: 640px)" srcSet="/media/hero-table-960.webp" />
          <img
            src="/media/hero-table.webp"
            alt=""
            className="h-full w-full object-cover object-[68%_42%]"
            fetchPriority="high"
            decoding="async"
            draggable={false}
          />
        </picture>
      </motion.div>

      {/* Ink wash: heavier on the text side, lifting toward the handshake; darker at the foot for the cards */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/30" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-ink/35" aria-hidden />

      <Container className="relative pt-40 pb-32 md:pt-48 md:pb-40">
        <div className="max-w-3xl">
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
          <motion.p className="mt-6 max-w-xl text-lede text-paper/75 md:text-lede-lg" {...anim(2)}>
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
      </Container>
    </header>
  );
}
