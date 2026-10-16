import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Small uppercase label that sits above a heading.
 * Use `tone="inverse"` on ink backgrounds. `index` renders a leading "01" style number.
 */
export default function Eyebrow({
  children,
  tone = 'brass',
  index,
  className,
  as: Tag = 'span',
}: {
  children: React.ReactNode;
  tone?: 'brass' | 'mute' | 'inverse' | 'ink';
  index?: string | number;
  className?: string;
  as?: 'span' | 'p' | 'div';
}) {
  const tones = {
    brass: 'text-brass-deep',
    mute: 'text-mute',
    inverse: 'text-brass-light',
    ink: 'text-ink',
  };
  return (
    <Tag className={cn('eyebrow inline-flex items-center gap-2.5', tones[tone], className)}>
      {index !== undefined && (
        <span className={cn('tabular', tone === 'inverse' ? 'text-paper/50' : 'text-mute-soft')}>
          {typeof index === 'number' ? String(index).padStart(2, '0') : index}
        </span>
      )}
      {children}
    </Tag>
  );
}
