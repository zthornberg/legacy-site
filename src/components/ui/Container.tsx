import React from 'react';
import { cn } from '../../lib/utils';

type Size = 'default' | 'narrow' | 'wide' | 'prose';

const sizes: Record<Size, string> = {
  default: 'max-w-container',
  narrow: 'max-w-4xl',
  wide: 'max-w-wide',
  prose: 'max-w-prose',
};

export default function Container({
  children,
  className,
  size = 'default',
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  size?: Size;
  as?: keyof JSX.IntrinsicElements;
}) {
  const Comp = Tag as React.ElementType;
  return <Comp className={cn('mx-auto w-full px-5 sm:px-6 lg:px-8', sizes[size], className)}>{children}</Comp>;
}
