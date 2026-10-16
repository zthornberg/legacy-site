import React from 'react';
import { cn } from '../../lib/utils';

/** Small pill. `dot` adds a leading status dot. */
export default function Badge({
  children,
  tone = 'mute',
  dot = false,
  className,
}: {
  children: React.ReactNode;
  tone?: 'mute' | 'brass' | 'ink' | 'inverse' | 'outline';
  dot?: boolean;
  className?: string;
}) {
  const tones = {
    mute: 'bg-paper-deep text-mute-strong',
    brass: 'bg-brass-tint text-brass-deep border border-brass-soft',
    ink: 'bg-ink text-paper',
    inverse: 'bg-white/10 text-paper border border-white/15',
    outline: 'border border-line-strong text-ink',
  };
  const dots = {
    mute: 'bg-mute',
    brass: 'bg-brass',
    ink: 'bg-brass-light',
    inverse: 'bg-brass-light',
    outline: 'bg-ink',
  };
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide leading-none',
        tones[tone],
        className
      )}
    >
      {dot && <span className={cn('h-1.5 w-1.5 rounded-full', dots[tone])} aria-hidden />}
      {children}
    </span>
  );
}
