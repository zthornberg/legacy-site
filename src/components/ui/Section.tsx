import React from 'react';
import { cn } from '../../lib/utils';

export type SectionTone = 'paper' | 'white' | 'deep' | 'ink' | 'brass';
export type SectionSize = 'sm' | 'md' | 'lg' | 'none';

const tones: Record<SectionTone, string> = {
  paper: 'bg-paper text-ink',
  white: 'bg-white text-ink',
  deep: 'bg-paper-deep text-ink',
  ink: 'bg-ink text-paper',
  brass: 'bg-brass-tint text-ink',
};

const sizes: Record<SectionSize, string> = {
  sm: 'section-sm',
  md: 'section',
  lg: 'section-lg',
  none: '',
};

/**
 * Full-bleed section with a tone and vertical rhythm. Put a <Container> inside.
 * `divider` adds a top hairline (useful between two same-tone sections).
 */
export default function Section({
  children,
  tone = 'paper',
  size = 'md',
  divider = false,
  className,
  id,
  'aria-labelledby': labelledBy,
}: {
  children: React.ReactNode;
  tone?: SectionTone;
  size?: SectionSize;
  divider?: boolean;
  className?: string;
  id?: string;
  'aria-labelledby'?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        'relative',
        tones[tone],
        sizes[size],
        divider && (tone === 'ink' ? 'border-t border-line-inverse' : 'border-t border-line'),
        className
      )}
    >
      {children}
    </section>
  );
}
