import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

/** Brass check marks. Use for feature lists and "what you get" blocks. */
export default function CheckList({
  items,
  columns = 1,
  tone = 'default',
  size = 'md',
  className,
}: {
  items: React.ReactNode[];
  columns?: 1 | 2;
  tone?: 'default' | 'inverse';
  size?: 'sm' | 'md';
  className?: string;
}) {
  const inverse = tone === 'inverse';
  return (
    <ul
      className={cn(
        'grid gap-x-8',
        size === 'sm' ? 'gap-y-2.5' : 'gap-y-3.5',
        columns === 2 && 'sm:grid-cols-2',
        className
      )}
    >
      {items.map((item, i) => (
        <li key={i} className={cn('flex items-start gap-3', size === 'sm' ? 'text-sm' : 'text-[15px]')}>
          <span
            className={cn(
              'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
              inverse ? 'bg-brass-light/15 text-brass-light' : 'bg-brass-tint text-brass-deep'
            )}
            aria-hidden
          >
            <Check className="h-3 w-3" strokeWidth={2.5} />
          </span>
          <span className={cn('leading-relaxed', inverse ? 'text-paper/85' : 'text-ink/85')}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
