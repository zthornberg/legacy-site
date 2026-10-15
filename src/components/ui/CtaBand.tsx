import React from 'react';
import { cn } from '../../lib/utils';
import Container from './Container';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';

/**
 * Closing call-to-action band. One per page, at the bottom, above the footer.
 * Default tone is `brass` (warm, light) so it separates cleanly from the ink footer.
 */
export default function CtaBand({
  eyebrow,
  title,
  body,
  actions,
  footnote,
  tone = 'brass',
  align = 'left',
  className,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  body?: React.ReactNode;
  actions?: React.ReactNode;
  footnote?: React.ReactNode;
  tone?: 'brass' | 'ink' | 'paper';
  align?: 'left' | 'center';
  className?: string;
}) {
  const inverse = tone === 'ink';
  return (
    <section
      className={cn(
        'relative overflow-hidden',
        tone === 'ink' && 'bg-ink text-paper',
        tone === 'brass' && 'bg-brass-tint text-ink border-t border-brass-soft',
        tone === 'paper' && 'bg-paper text-ink border-t border-line',
        className
      )}
    >
      {inverse && <div className="pointer-events-none absolute inset-0 ink-glow" aria-hidden />}
      <Container className="relative section">
        <Reveal
          className={cn(
            align === 'center' ? 'mx-auto max-w-3xl text-center' : 'grid gap-10 lg:grid-cols-12 lg:items-end'
          )}
        >
          <div className={cn(align === 'left' && 'lg:col-span-8')}>
            {eyebrow && (
              <Eyebrow tone={inverse ? 'inverse' : 'brass'} className="mb-4">
                {eyebrow}
              </Eyebrow>
            )}
            <h2 className={cn('font-display text-display-lg', inverse ? 'text-paper' : 'text-ink')}>{title}</h2>
            {body && (
              <p className={cn('mt-5 text-lede max-w-2xl', inverse ? 'text-paper/70' : 'text-mute', align === 'center' && 'mx-auto')}>
                {body}
              </p>
            )}
            {align === 'center' && actions && <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">{actions}</div>}
          </div>
          {align === 'left' && actions && (
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:justify-end">{actions}</div>
          )}
        </Reveal>
        {footnote && (
          <p className={cn('mt-8 text-xs max-w-3xl', inverse ? 'text-paper/40' : 'text-mute-soft', align === 'center' && 'mx-auto text-center')}>
            {footnote}
          </p>
        )}
      </Container>
    </section>
  );
}
