import { Check } from 'lucide-react';
import { Eyebrow, TextLink } from '../ui';
import { comparisonRows, tiers } from '../../content/licensing';
import { cn } from '../../lib/utils';
import { APPLY_PATH } from './content';

/** A comparison value: `true` renders a brass check, `false` a dash, a string as-is. */
function Value({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <>
        <Check className="h-4 w-4 text-brass-deep" strokeWidth={2} aria-hidden />
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <span className="text-mute-soft" aria-hidden>
          —
        </span>
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return <>{value}</>;
}

function RowLabel({ label, note }: { label: string; note?: string }) {
  return (
    <>
      <div className="text-[15px] leading-snug text-ink">{label}</div>
      {note && <div className="mt-1 text-xs leading-snug text-mute">{note}</div>}
    </>
  );
}

/**
 * Side-by-side comparison of the two licenses.
 * - Below `sm`: a stacked list. Each row's label runs full width, then a two-column value row
 *   aligned under a sticky tier header, so nothing wraps into a narrow label column.
 * - `sm` and up: a three-column table whose header row sticks under the site header.
 * Only one rendering is displayed (and exposed to assistive tech) at a time.
 */
export default function ComparisonTable() {
  return (
    <>
      {/* Mobile: stacked rows */}
      <div className="sm:hidden">
        <div className="sticky top-16 z-10 grid grid-cols-2 gap-2 border-b border-line-strong bg-paper pb-3 pt-3">
          {tiers.map((t) => (
            <div key={t.id} className={cn('rounded-lg px-3 py-2.5', t.featured && 'bg-brass-tint')}>
              <Eyebrow tone={t.featured ? 'brass' : 'mute'}>{t.name}</Eyebrow>
              <div className="mt-1.5 font-display text-2xl tabular leading-none text-ink">{t.priceLabel}</div>
              <div className="mt-1 text-xs text-mute">One-time license</div>
            </div>
          ))}
        </div>
        <dl className="divide-y divide-line">
          {comparisonRows.map((row) => (
            <div key={row.label} className="py-4">
              <dt>
                <RowLabel label={row.label} note={row.note} />
              </dt>
              <dd className="mt-3 grid grid-cols-2 gap-2">
                {tiers.map((t) => (
                  <div
                    key={t.id}
                    className={cn(
                      'flex min-h-9 items-center rounded-lg px-3 py-1.5 text-sm tabular text-ink',
                      t.featured && 'bg-brass-tint'
                    )}
                  >
                    <span className="sr-only">{t.name}: </span>
                    <Value value={row[t.id]} />
                  </div>
                ))}
              </dd>
            </div>
          ))}
        </dl>
        <div className="grid grid-cols-2 gap-2 border-t border-line-strong pt-5">
          {tiers.map((t) => (
            <div key={t.id} className="px-3">
              <TextLink to={APPLY_PATH} tone={t.featured ? 'brass' : 'ink'}>
                Apply<span className="sr-only"> for the {t.name} license</span>
              </TextLink>
            </div>
          ))}
        </div>
      </div>

      {/* sm and up: table */}
      <table className="hidden w-full table-fixed border-collapse text-left sm:table">
        <caption className="sr-only">Comparison of the Partner and Principal licenses</caption>
        <colgroup>
          <col className="w-[40%] lg:w-1/2" />
          <col className="w-[30%] lg:w-1/4" />
          <col className="w-[30%] lg:w-1/4" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" className="sticky top-16 z-10 border-b border-line-strong bg-paper pb-4 pt-3 align-bottom">
              <span className="sr-only">Feature</span>
            </th>
            {tiers.map((t) => (
              <th
                key={t.id}
                scope="col"
                className={cn(
                  'sticky top-16 z-10 border-b border-line-strong bg-paper px-4 pb-4 pt-3 align-bottom font-normal lg:px-6',
                  t.featured && 'bg-brass-tint'
                )}
              >
                <Eyebrow tone={t.featured ? 'brass' : 'mute'}>{t.name}</Eyebrow>
                <div className="mt-2 font-display text-2xl tabular leading-none text-ink lg:text-3xl">{t.priceLabel}</div>
                <div className="mt-1.5 text-xs text-mute">One-time license</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {comparisonRows.map((row) => (
            <tr key={row.label}>
              <th scope="row" className="py-4 pr-3 align-top font-normal">
                <RowLabel label={row.label} note={row.note} />
              </th>
              {tiers.map((t) => (
                <td
                  key={t.id}
                  className={cn(
                    'whitespace-nowrap px-4 py-4 align-top text-[15px] tabular text-ink lg:px-6',
                    t.featured && 'bg-brass-tint'
                  )}
                >
                  <Value value={row[t.id]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t border-line-strong">
            <td className="py-5" />
            {tiers.map((t) => (
              <td key={t.id} className={cn('px-4 py-5 align-top lg:px-6', t.featured && 'bg-brass-tint')}>
                <TextLink to={APPLY_PATH} tone={t.featured ? 'brass' : 'ink'}>
                  Apply<span className="sr-only"> for the {t.name} license</span>
                </TextLink>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </>
  );
}
