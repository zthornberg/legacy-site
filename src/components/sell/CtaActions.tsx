import React from 'react';

/**
 * Wraps CtaBand actions so two large buttons stack inside the band's narrow
 * right-hand column on desktop instead of overflowing into the body copy.
 */
export default function CtaActions({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full flex-col gap-3 sm:flex-row lg:flex-col">{children}</div>;
}
