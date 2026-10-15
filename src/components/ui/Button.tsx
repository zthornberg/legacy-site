import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export type ButtonVariant =
  | 'primary' // ink on paper
  | 'secondary' // outlined ink
  | 'ghost' // text only, hover wash
  | 'brass' // brass fill, ink text — use once per view at most
  | 'inverse' // paper on ink (for dark bands)
  | 'inverse-outline'; // outlined paper (for dark bands)

export type ButtonSize = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  /** Trailing arrow. `arrow` = →, `external` = ↗ */
  arrow?: boolean | 'external';
  icon?: React.ReactNode;
  full?: boolean;
};

type AsLink = CommonProps & { to: string; href?: never; onClick?: React.MouseEventHandler<HTMLAnchorElement> };
type AsAnchor = CommonProps & {
  href: string;
  to?: never;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};
type AsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & { to?: never; href?: never };

export type ButtonProps = AsLink | AsAnchor | AsButton;

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap select-none transition-[background-color,border-color,color,transform,box-shadow] duration-200 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-50 disabled:pointer-events-none active:translate-y-px';

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-3.5 text-[13px]',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[15px]',
};

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-ink text-paper hover:bg-ink-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]',
  secondary: 'bg-transparent text-ink border border-line-strong hover:border-ink hover:bg-paper-deep/60',
  ghost: 'bg-transparent text-ink hover:bg-paper-deep',
  brass: 'bg-brass text-ink hover:bg-brass-light',
  inverse: 'bg-paper text-ink hover:bg-white',
  'inverse-outline': 'bg-transparent text-paper border border-white/25 hover:border-white/50 hover:bg-white/10',
};

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, arrow, icon, full } = props;
  const classes = cn(base, sizes[size], variants[variant], full && 'w-full', className);
  const iconSize = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4';
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow === 'external' ? (
        <ArrowUpRight className={cn(iconSize, '-mr-0.5 opacity-80')} aria-hidden />
      ) : arrow ? (
        <ArrowRight
          className={cn(iconSize, '-mr-0.5 opacity-80 transition-transform duration-200 group-hover/btn:translate-x-0.5')}
          aria-hidden
        />
      ) : null}
    </>
  );

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} onClick={props.onClick} className={cn('group/btn', classes)}>
        {content}
      </Link>
    );
  }
  if ('href' in props && props.href) {
    return (
      <a href={props.href} target={props.target} rel={props.rel} onClick={props.onClick} className={cn('group/btn', classes)}>
        {content}
      </a>
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant: _v, size: _s, className: _c, children: _ch, arrow: _a, icon: _i, full: _f, ...rest } = props as AsButton;
  return (
    <button type={rest.type ?? 'button'} {...rest} className={cn('group/btn', classes)}>
      {content}
    </button>
  );
}

/** Inline text link with an animated underline and trailing arrow. */
export function TextLink({
  to,
  href,
  children,
  className,
  tone = 'ink',
  arrow = true,
}: {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  tone?: 'ink' | 'brass' | 'inverse' | 'mute';
  arrow?: boolean;
}) {
  const tones = {
    ink: 'text-ink decoration-ink/30 hover:decoration-ink',
    brass: 'text-brass-deep decoration-brass/40 hover:decoration-brass-deep',
    inverse: 'text-paper decoration-white/30 hover:decoration-white',
    mute: 'text-mute decoration-mute/30 hover:text-ink hover:decoration-ink',
  };
  const cls = cn(
    'group/tl inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-[5px] decoration-1 transition-colors duration-200',
    tones[tone],
    className
  );
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/tl:translate-x-0.5" aria-hidden />
      )}
    </>
  );
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  return (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
}
