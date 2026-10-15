import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

type Padding = 'none' | 'sm' | 'md' | 'lg';
const pads: Record<Padding, string> = { none: '', sm: 'p-5', md: 'p-6 md:p-7', lg: 'p-8 md:p-10' };

/**
 * Surface with a hairline border. Prefer borders over shadows; add `hover` only when the whole card is a link.
 * `tone="ink"` for cards on dark bands, `tone="deep"` for muted panels.
 */
export default function Card({
  children,
  className,
  padding = 'md',
  hover = false,
  tone = 'white',
  to,
  href,
  as,
}: {
  children: React.ReactNode;
  className?: string;
  padding?: Padding;
  hover?: boolean;
  tone?: 'white' | 'paper' | 'deep' | 'ink' | 'brass';
  to?: string;
  href?: string;
  as?: 'div' | 'article' | 'li';
}) {
  const tones = {
    white: 'bg-white border-line',
    paper: 'bg-paper border-line',
    deep: 'bg-paper-deep border-transparent',
    ink: 'bg-ink-800 border-line-inverse text-paper',
    brass: 'bg-brass-tint border-brass-soft',
  };
  const cls = cn(
    'relative rounded-xl border',
    tones[tone],
    pads[padding],
    hover &&
      'transition-[transform,box-shadow,border-color] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-card hover:border-line-strong',
    className
  );
  if (to) {
    return (
      <Link to={to} className={cn('block group', cls)}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cn('block group', cls)}>
        {children}
      </a>
    );
  }
  const Comp = (as ?? 'div') as React.ElementType;
  return <Comp className={cls}>{children}</Comp>;
}
