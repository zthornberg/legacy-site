import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export type Crumb = { label: string; to?: string };

/**
 * Standalone breadcrumb trail for pages that don't open with <PageHero> (bio, article).
 * Mirrors the PageHero crumb styling. The last crumb is the current page; it stays on one line
 * and truncates (e.g. a long article title) while the parent crumbs keep their full width.
 */
export default function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex min-w-0 items-center gap-1.5 text-[13px] text-mute">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} className={cn('flex items-center gap-1.5', last ? 'min-w-0' : 'shrink-0')}>
              {c.to && !last ? (
                <Link to={c.to} className="transition-colors hover:text-ink">
                  {c.label}
                </Link>
              ) : (
                <span
                  className={cn(last && 'truncate text-ink')}
                  aria-current={last ? 'page' : undefined}
                  title={last ? c.label : undefined}
                >
                  {c.label}
                </span>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
