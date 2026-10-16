import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Form primitives shared by the buy pages and Contact. They compose the kit's
 * `.field` / `.label` / `.hint` classes (index.css) so every form on the site
 * has the same 44px fields, label rhythm and option tiles.
 */

/** Native checkbox / radio tint. Kept inline so it works without a CSS change. */
const NATIVE_ACCENT: React.CSSProperties = { accentColor: '#0B0B0C' };

/** Right-aligned qualifier on a label or legend ("Optional", "Select all that apply"). */
const QUALIFIER = 'text-xs font-normal text-mute-soft';

export function Field({
  id,
  label,
  optional = false,
  hint,
  className,
  children,
}: {
  id: string;
  label: React.ReactNode;
  optional?: boolean;
  hint?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label flex items-baseline justify-between gap-3">
        <span>{label}</span>
        {optional && <span className={QUALIFIER}>Optional</span>}
      </label>
      {hint && React.isValidElement<{ 'aria-describedby'?: string }>(children) && !children.props['aria-describedby']
        ? React.cloneElement(children, { 'aria-describedby': `${id}-hint` })
        : children}
      {hint && (
        <p id={`${id}-hint`} className="hint">
          {hint}
        </p>
      )}
    </div>
  );
}

/** Legend for a group of tiles, styled like a field label with the same right-aligned qualifier. */
export function Legend({ children, qualifier }: { children: React.ReactNode; qualifier?: React.ReactNode }) {
  return (
    <legend className="label flex w-full items-baseline justify-between gap-3">
      <span>{children}</span>
      {qualifier && <span className={QUALIFIER}>{qualifier}</span>}
    </legend>
  );
}

/** Size bands shared by every buyer form, so registration and mandate briefs report the same values. */
const TARGET_EV_BANDS = [
  { value: 'under-1m', label: 'Under $1M' },
  { value: '1m-5m', label: '$1M–$5M' },
  { value: '5m-10m', label: '$5M–$10M' },
  { value: '10m-25m', label: '$10M–$25M' },
  { value: '25m-plus', label: '$25M+' },
];

export function TargetEvField({
  id,
  value,
  onChange,
  required = false,
  className,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
}) {
  return (
    <Field id={id} label="Target enterprise value" optional={!required} className={className}>
      <select id={id} required={required} value={value} onChange={(e) => onChange(e.target.value)} className="field">
        <option value="">Select range</option>
        {TARGET_EV_BANDS.map((b) => (
          <option key={b.value} value={b.value}>
            {b.label}
          </option>
        ))}
      </select>
    </Field>
  );
}

/** A titled group of fields. The legend is real (for screen readers) and styled as a section header. */
export function Fieldset({
  index,
  title,
  description,
  children,
  className,
}: {
  index?: number;
  title: string;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <fieldset className={cn('min-w-0', className)}>
      <legend className="float-left w-full">
        <span className="flex items-baseline gap-3">
          {index !== undefined && (
            <span className="tabular text-[13px] font-medium text-mute-soft" aria-hidden>
              {String(index).padStart(2, '0')}
            </span>
          )}
          <span className="font-display text-[1.625rem] leading-tight text-ink">{title}</span>
        </span>
      </legend>
      <div className="clear-both" />
      {description && <p className="mt-2 text-sm leading-relaxed text-mute">{description}</p>}
      <div className="mt-6">{children}</div>
    </fieldset>
  );
}

/** A tappable checkbox / radio tile: 44px tall, hairline border, ink when checked. */
export function OptionTile({
  type,
  name,
  value,
  checked,
  onChange,
  required,
  children,
  className,
}: {
  type: 'checkbox' | 'radio';
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label
      className={cn(
        'flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border border-line-strong bg-white px-3.5 py-2.5 text-[14px] leading-snug text-ink transition-colors duration-200 hover:border-ink/30',
        'has-[:checked]:border-ink has-[:checked]:bg-paper',
        className
      )}
    >
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        required={required}
        className="h-4 w-4 shrink-0 cursor-pointer"
        style={NATIVE_ACCENT}
      />
      <span>{children}</span>
    </label>
  );
}

/** A plain checkbox with a long-form label, e.g. an agreement line. */
export function InlineCheck({
  id,
  checked,
  onChange,
  required,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        required={required}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-[3px] h-4 w-4 shrink-0 cursor-pointer"
        style={NATIVE_ACCENT}
      />
      <label htmlFor={id} className="cursor-pointer text-sm leading-relaxed text-ink/85">
        {children}
      </label>
    </div>
  );
}

/** Numbered vertical steps joined by a hairline. Used for "What happens next". */
export function NextSteps({
  steps,
  className,
}: {
  steps: { title: string; body: React.ReactNode }[];
  className?: string;
}) {
  return (
    <ol className={cn('relative', className)}>
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-4 pb-7 last:pb-0">
          {i < steps.length - 1 && (
            <span className="absolute left-[13.5px] top-8 bottom-1 w-px bg-line-strong" aria-hidden />
          )}
          <span
            className="tabular flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-strong bg-white text-xs font-medium text-ink"
            aria-hidden
          >
            {i + 1}
          </span>
          <div className="pt-[3px]">
            <p className="text-[15px] font-medium leading-snug text-ink">{s.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-mute">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
