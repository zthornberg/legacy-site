import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE, viewportOnce } from '../../lib/motion';

/**
 * Fade-up on scroll into view, once. Keep it subtle: 14px, 600ms, expo ease.
 * Respects prefers-reduced-motion. Use `delay` for light stagger (0.06 steps).
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
  y = 14,
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'ul' | 'header' | 'figure' | 'span';
  y?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const Comp = (motion as unknown as Record<string, React.ElementType>)[as] ?? motion.div;
  if (reduce) {
    const Plain = as as React.ElementType;
    return <Plain className={className}>{children}</Plain>;
  }
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={once ? viewportOnce : { margin: viewportOnce.margin }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
}
