import React, { useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';
import Button, { TextLink } from '../ui/Button';
import Card from '../ui/Card';
import Eyebrow from '../ui/Eyebrow';

/** Hairline card that holds a sectioned form. Sections divide themselves with hairlines. */
export function FormCard({
  onSubmit,
  children,
  className,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card padding="none" className={className}>
      <form onSubmit={onSubmit} className="divide-y divide-line">
        {children}
      </form>
    </Card>
  );
}

/** One titled group of fields. The eyebrow is the visible title; the legend carries it for assistive tech. */
export function FormSection({
  index,
  title,
  description,
  columns = 2,
  children,
}: {
  index?: number;
  title: string;
  description?: React.ReactNode;
  columns?: 2 | 3;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="min-w-0 p-6 md:p-8">
      <legend className="sr-only">{title}</legend>
      <div className="mb-6">
        <div aria-hidden>
          <Eyebrow index={index}>{title}</Eyebrow>
        </div>
        {description && <p className="mt-2 text-[13px] leading-relaxed text-mute">{description}</p>}
      </div>
      <div className={cn('grid gap-5', columns === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2')}>{children}</div>
    </fieldset>
  );
}

/** Label + control + optional hint. `optional` marks the field quietly instead of starring required ones. */
export function Field({
  id,
  label,
  optional = false,
  hint,
  wide = false,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  hint?: React.ReactNode;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('min-w-0', wide && 'sm:col-span-full')}>
      <label htmlFor={id} className="label">
        {label}
        {optional && <span className="ml-1.5 font-normal text-mute-soft">Optional</span>}
      </label>
      {children}
      {hint && (
        <p id={`${id}-hint`} className="hint">
          {hint}
        </p>
      )}
    </div>
  );
}

/** Bottom bar of a form card: a note on the left, the submit action on the right. */
export function FormFooter({ note, children }: { note?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 rounded-b-xl bg-paper px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
      {note ? <p className="text-[13px] leading-relaxed text-mute">{note}</p> : <span />}
      <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">{children}</div>
    </div>
  );
}

/** Confirmation panel shown after a form is submitted. */
export function SuccessPanel({
  eyebrow = 'Received',
  title,
  body,
  resetLabel,
  onReset,
}: {
  eyebrow?: string;
  title: string;
  body: React.ReactNode;
  resetLabel: string;
  onReset: () => void;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  // The form that had focus is gone; move focus to the confirmation so keyboard and screen reader users land on it.
  useEffect(() => {
    window.scrollTo(0, 0);
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <Card padding="lg" className="motion-safe:animate-fade-up" as="article">
      <div role="status">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 ref={headingRef} tabIndex={-1} className="mt-4 max-w-xl font-display text-display-md text-ink focus:outline-none">
          {title}
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mute">{body}</p>
      </div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <Button variant="secondary" onClick={onReset}>
          {resetLabel}
        </Button>
        <TextLink to="/portal" tone="mute">
          Back to dashboard
        </TextLink>
      </div>
    </Card>
  );
}

/** Small sans heading for panels inside the portal (sits under the page's serif h1). */
export function PanelHeading({
  children,
  action,
  id,
  className,
}: {
  children: React.ReactNode;
  action?: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <div className={cn('mb-4 flex items-baseline justify-between gap-4', className)}>
      <h2 id={id} className="font-sans text-[15px] font-medium text-ink">
        {children}
      </h2>
      {action}
    </div>
  );
}
