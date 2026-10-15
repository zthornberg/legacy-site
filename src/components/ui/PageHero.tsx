import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';
import Container from './Container';
import Eyebrow from './Eyebrow';
import { EASE } from '../../lib/motion';

export type Crumb = { label: string; to?: string };

/**
 * Standard page opener. `tone="ink"` for a dark band (hero, licensing), `tone="paper"` for quiet pages.
 * Put a product-style visual or a stat stack in `aside`; it sits right on large screens.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  actions,
  aside,
  crumbs,
  tone = 'paper',
  size = 'md',
  align = 'left',
  className,
  children,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
  crumbs?: Crumb[];
  tone?: 'paper' | 'ink' | 'deep';
  size?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center';
  className?: string;
  /** Rendered below the hero content, still inside the band (e.g. a stat strip). */
  children?: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const inverse = tone === 'ink';
  const pad = {
    sm: 'pt-12 pb-12 md:pt-16 md:pb-16',
    md: 'pt-16 pb-16 md:pt-24 md:pb-24',
    lg: 'pt-20 pb-20 md:pt-32 md:pb-28',
  }[size];
  const titleSize = { sm: 'text-display-lg', md: 'text-display-xl', lg: 'text-display-2xl' }[size];

  const anim = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: EASE, delay: 0.05 + i * 0.08 },
        };

  return (
    <header
      className={cn(
        'relative overflow-hidden',
        inverse ? 'bg-ink text-paper' : tone === 'deep' ? 'bg-paper-deep' : 'bg-paper border-b border-line',
        className
      )}
    >
      {inverse && (
        <>
          <div className="pointer-events-none absolute inset-0 ink-glow" aria-hidden />
          <div className="pointer-events-none absolute inset-0 ink-grid" aria-hidden />
        </>
      )}
      <Container className={cn('relative', pad)}>
        {crumbs && crumbs.length > 0 && (
          <motion.nav aria-label="Breadcrumb" className="mb-8" {...anim(0)}>
            <ol className={cn('flex flex-wrap items-center gap-1.5 text-[13px]', inverse ? 'text-paper/55' : 'text-mute')}>
              {crumbs.map((c, i) => {
                const last = i === crumbs.length - 1;
                return (
                  <li key={i} className="flex items-center gap-1.5">
                    {c.to && !last ? (
                      <Link to={c.to} className={cn('transition-colors', inverse ? 'hover:text-paper' : 'hover:text-ink')}>
                        {c.label}
                      </Link>
                    ) : (
                      <span className={cn(last && (inverse ? 'text-paper' : 'text-ink'))}>{c.label}</span>
                    )}
                    {!last && <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden />}
                  </li>
                );
              })}
            </ol>
          </motion.nav>
        )}

        <div className={cn('grid gap-12 lg:gap-16', aside ? 'lg:grid-cols-12 lg:items-center' : '')}>
          <div className={cn(aside ? 'lg:col-span-7' : '', align === 'center' && 'text-center mx-auto max-w-3xl')}>
            {eyebrow && (
              <motion.div {...anim(0)}>
                <Eyebrow tone={inverse ? 'inverse' : 'brass'} className="mb-5">
                  {eyebrow}
                </Eyebrow>
              </motion.div>
            )}
            <motion.h1 className={cn('font-display', titleSize, inverse ? 'text-paper' : 'text-ink', 'max-w-4xl', align === 'center' && 'mx-auto')} {...anim(1)}>
              {title}
            </motion.h1>
            {lede && (
              <motion.p
                className={cn('mt-6 text-lede md:text-lede-lg max-w-2xl', inverse ? 'text-paper/72' : 'text-mute', align === 'center' && 'mx-auto')}
                {...anim(2)}
              >
                {lede}
              </motion.p>
            )}
            {actions && (
              <motion.div className={cn('mt-9 flex flex-col sm:flex-row gap-3', align === 'center' && 'justify-center')} {...anim(3)}>
                {actions}
              </motion.div>
            )}
          </div>
          {aside && (
            <motion.div className="lg:col-span-5" {...anim(2)}>
              {aside}
            </motion.div>
          )}
        </div>
        {children}
      </Container>
    </header>
  );
}
