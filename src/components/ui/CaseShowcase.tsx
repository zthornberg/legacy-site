'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';

/** Data shape (you can load this from JSON later if you want) */
export type CaseItem = {
  id: string;
  title: string;
  region: string;
  summary?: string;
  facts: string[]; // ["$40M revenue", "$5.5M EBITDA", ...]
  href?: string;   // optional deep link
};

const DEFAULT_ITEMS: CaseItem[] = [
  {
    id: 'construction',
    title: 'Home-Builder Construction Company',
    region: 'Southwest US',
    summary: 'Multiple above-ask offers; strong asset base and scale efficiencies.',
    facts: ['$40M annual revenue', '$5.5M EBITDA', '$12M FF&E', '60+ employees'],
    href: '/sell/case-studies',
  },
  {
    id: 'elevator',
    title: 'Elevator Manufacturing Company',
    region: 'Midwest US',
    summary: 'Strategic buyer demand from installed base & recurring parts/service.',
    facts: ['$3M+ annual revenue', '$700K EBITDA', '15+ employees', 'Diversified client base'],
    href: '/sell/case-studies',
  },
  {
    id: 'flooring',
    title: 'Flooring Distribution Company',
    region: 'Southwest US',
    summary: 'Lean operations, strong supplier terms; fast diligence from clear documentation.',
    facts: ['$6.5M+ annual revenue', '$950K EBITDA', '5+ employees'],
    href: '/sell/case-studies',
  },
  {
    id: 'oil',
    title: 'Oil Pressure Pumping Company',
    region: 'Midwest US',
    summary: 'Process tailored to commodity cycles; generated sponsor competition.',
    facts: ['$15M+ annual revenue', '$4M EBITDA', '20+ employees'],
    href: '/sell/case-studies',
  },
  {
    id: 'electrical',
    title: 'Commercial Electrical Contractor',
    region: 'Southeast US',
    summary: 'Backlog & safety record highlighted; culture-fit buyer prioritized.',
    facts: ['$3.5M+ annual revenue', '$950K EBITDA', '10+ employees'],
    href: '/sell/case-studies',
  },
];

/** Best-practice autoplay: 5–7s; we choose 6.5s as a balanced default */
const DEFAULT_AUTOPLAY_MS = 6500;

// Optimized animation settings for smooth manual navigation
const TRANSITION_CONFIG = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smoother feel
};

export default function CaseShowcase({
  items = DEFAULT_ITEMS,
  autoplayMs = DEFAULT_AUTOPLAY_MS,
  className = '',
}: {
  items?: CaseItem[];
  autoplayMs?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { amount: 0.35, margin: '0px 0px -20% 0px' });
  const reduceMotion = useReducedMotion();

  const go = (delta: 1 | -1) => {
    if (isTransitioning) return; // Prevent rapid clicks during transition
    
    setIsTransitioning(true);
    setDir(delta);
    setIndex((i) => (i + delta + items.length) % items.length);
    
    // Reset transition lock after animation completes
    setTimeout(() => setIsTransitioning(false), TRANSITION_CONFIG.duration * 1000);
  };

  // Autoplay only when section is visible and not paused
  useEffect(() => {
    if (!inView || paused || isTransitioning) return;
    const t = window.setInterval(() => go(1), autoplayMs);
    return () => window.clearInterval(t);
  }, [inView, paused, autoplayMs, isTransitioning]);

  const label = useMemo(() => `Case study ${index + 1} of ${items.length}`, [index, items.length]);

  // Optimized variants for smoother transitions
  const variants = reduceMotion
    ? {
        enter: { opacity: 0, scale: 1 },
        center: { opacity: 1 },
        exit: { opacity: 0, scale: 1 },
      }
    : {
        enter: (d: 1 | -1) => ({
          x: d * 20,
          opacity: 0,
          scale: 0.99,
          transition: TRANSITION_CONFIG
        }),
        center: {
          x: 0,
          opacity: 1,
          scale: 1,
          transition: TRANSITION_CONFIG
        },
        exit: (d: 1 | -1) => ({
          x: -d * 20,
          opacity: 0,
          scale: 0.99,
          transition: TRANSITION_CONFIG
        }),
      };

  const jumpTo = (next: number) => {
    if (next === index) return;
    if (isTransitioning) return; // Prevent rapid clicks
    
    setIsTransitioning(true);
    const forward = (next > index) || (index === items.length - 1 && next === 0);
    setDir(forward ? 1 : -1);
    setIndex(next);
    
    // Reset transition lock after animation completes
    setTimeout(() => setIsTransitioning(false), TRANSITION_CONFIG.duration * 1000);
  };

  const current = items[index];

  return (
    <section
      id="case-showcase"
      ref={sectionRef}
      aria-label="Case study showcase"
      className={`relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28 overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      style={{ 
        contain: 'layout style paint',
        willChange: isTransitioning ? 'transform' : 'auto'
      }}
    >
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-ink text-3xl font-semibold tracking-tight md:text-4xl">
            Outcomes in Focus
          </h2>
          <p className="text-slate-700 mt-2 max-w-2xl">
            One anonymized engagement at a time—refreshed automatically, with manual controls.
          </p>
        </div>
        <div className="hidden shrink-0 gap-2 md:flex" aria-hidden="false">
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={isTransitioning}
            className="rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-sm shadow-sm backdrop-blur hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            ← Prev
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            disabled={isTransitioning}
            className="rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-sm shadow-sm backdrop-blur hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Slider region */}
      <div 
        role="region"
        aria-roledescription="carousel"
        aria-live="polite"
        aria-label="Case study slider"
        className="relative overflow-hidden mb-8"
        style={{ 
          height: '380px',
          contain: 'layout style'
        }}
      >
        <AnimatePresence initial={false} mode="wait" custom={dir}>
          <motion.article
            key={current.id}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 overflow-hidden rounded-2xl border border-white/40 bg-white/80 ring-1 ring-black/5 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.30)] backdrop-blur-xl"
            style={{
              contain: 'layout style paint'
            }}
            // swipe on touch devices
            drag="x"
            dragElastic={0.12}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              const threshold = 60;
              if (info.offset.x > threshold) go(-1);
              else if (info.offset.x < -threshold) go(1);
            }}
          >
            {/* Decorative fintech gradients */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
              <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-[#2563EB] to-[#0EA5E9] blur-2xl" />
              <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#2563EB] blur-2xl" />
            </div>

            <div className="relative z-10 grid gap-6 p-6 md:grid-cols-5 md:p-8 h-full">
              {/* Content column */}
              <div className="md:col-span-3">
                <div className="mb-2 inline-flex items-center gap-2 rounded-lg border border-black/5 bg-white/70 px-2.5 py-1 text-xs text-slate-700 backdrop-blur">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#2563EB]" />
                  {current.region}
                </div>
                <h3 className="text-ink text-2xl font-semibold leading-snug">{current.title}</h3>
                {current.summary && <p className="text-slate-700 mt-2">{current.summary}</p>}

                <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-ink/90 sm:grid-cols-2">
                  {current.facts.map((f) => (
                    <li key={f} className="rounded-lg border border-black/5 bg-white/70 px-3 py-2 backdrop-blur">
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={current.href ?? '/case-studies'}
                    className="rounded-xl bg-[#2563EB] px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95"
                  >
                    View more
                  </a>
                  <a
                    href="/contact?flow=advisor"
                    className="rounded-xl border border-black/10 bg-white/70 px-3.5 py-2 text-sm font-medium text-ink/80 backdrop-blur hover:bg-white"
                  >
                    Talk to an advisor
                  </a>
                </div>
              </div>

              {/* Visual placeholder panel (keeps height stable / prevents CLS) */}
              <div className="hidden h-full rounded-xl border border-black/5 bg-gradient-to-br from-slate-100 to-white md:col-span-2 md:block overflow-hidden">
                {current.id === 'construction' && (
                  <motion.img
                    key="construction-img"
                    src="/media/Home Builder Construction Case Study.png"
                    alt="Home Builder Construction Case Study"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                )}
                {current.id === 'elevator' && (
                  <motion.img
                    key="elevator-img"
                    src="/media/Elevator Manufacturing Pic.png"
                    alt="Elevator Manufacturing Company"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                )}
                {current.id === 'flooring' && (
                  <motion.img
                    key="flooring-img"
                    src="/media/Flooring Distributor Pic.png"
                    alt="Flooring Distribution Company"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                )}
                {current.id === 'oil' && (
                  <motion.img
                    key="oil-img"
                    src="/media/Oil Pressure Pumping Company.png"
                    alt="Oil Pressure Pumping Company"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                )}
                {current.id === 'electrical' && (
                  <motion.img
                    key="electrical-img"
                    src="/media/Commercial Electrical Contractor pic.png"
                    alt="Commercial Electrical Contractor"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                )}
              </div>
            </div>

            {/* Progress bar (resets every slide) */}
            <motion.div key={`bar-${current.id}`} className="absolute -bottom-3 left-0 h-1 w-full bg-black/10">
              <motion.span
                className="block h-full bg-ink"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: paused || isTransitioning ? 0 : 1 }}
                transition={{ 
                  duration: autoplayMs / 1000, 
                  ease: 'linear',
                  type: 'tween'
                }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Dot bubbles - positioned outside slider region */}
      <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Slides">
        {items.map((it, i) => {
          const active = i === index;
          return (
            <button
              key={it.id}
              role="tab"
              aria-selected={active}
              aria-label={`Go to case ${i + 1}`}
              disabled={isTransitioning}
              className={`h-3 w-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                active ? 'bg-ink' : 'bg-slate-400/50 ring-1 ring-black/5 hover:bg-slate-500/70'
              } ${isTransitioning ? 'opacity-50' : ''}`}
              onClick={() => jumpTo(i)}
            />
          );
        })}
      </div>
    </section>
  );
}