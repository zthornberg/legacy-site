import React from 'react';
import { cn } from '../../lib/utils';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';

/**
 * Eyebrow + serif title + lede. The standard header for every section.
 * `split` lays the title left and lede right on large screens (editorial).
 */
export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  tone = 'default',
  size = 'lg',
  split = false,
  className,
  id,
  action,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'default' | 'inverse';
  size?: 'md' | 'lg' | 'xl';
  split?: boolean;
  className?: string;
  id?: string;
  action?: React.ReactNode;
}) {
  const inverse = tone === 'inverse';
  const titleSize = { md: 'text-display-md', lg: 'text-display-lg', xl: 'text-display-xl' }[size];
  const ledeCls = cn('text-lede', inverse ? 'text-paper/70' : 'text-mute');

  if (split) {
    return (
      <Reveal className={cn('grid gap-6 lg:grid-cols-12 lg:items-end', className)}>
        <div className="lg:col-span-7">
          {eyebrow && (
            <Eyebrow tone={inverse ? 'inverse' : 'brass'} className="mb-4">
              {eyebrow}
            </Eyebrow>
          )}
          <h2 id={id} className={cn('font-display', titleSize, inverse ? 'text-paper' : 'text-ink')}>
            {title}
          </h2>
        </div>
        <div className="lg:col-span-5 lg:pb-1">
          {lede && <p className={cn(ledeCls, 'max-w-md')}>{lede}</p>}
          {action && <div className="mt-5">{action}</div>}
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal className={cn(align === 'center' && 'text-center mx-auto', className)}>
      {eyebrow && (
        <Eyebrow tone={inverse ? 'inverse' : 'brass'} className="mb-4">
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        id={id}
        className={cn('font-display', titleSize, inverse ? 'text-paper' : 'text-ink', align === 'center' ? 'max-w-3xl mx-auto' : 'max-w-3xl')}
      >
        {title}
      </h2>
      {lede && <p className={cn(ledeCls, 'mt-5 max-w-2xl', align === 'center' && 'mx-auto')}>{lede}</p>}
      {action && <div className={cn('mt-6', align === 'center' && 'flex justify-center')}>{action}</div>}
    </Reveal>
  );
}
