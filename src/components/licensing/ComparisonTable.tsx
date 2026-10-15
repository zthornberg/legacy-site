import { Check } from 'lucide-react';
import { Eyebrow, TextLink } from '../ui';
import { comparisonRows, tiers } from '../../content/licensing';
import { cn } from '../../lib/utils';
import { APPLY_PATH } from './content';

function Cell({ value, featured }: { value: string | boolean; featured?: boolean }) {
  return (
    <td
      className={cn(
        'whitespace-nowrap px-2 py-4 align-top text-sm tabular text-ink sm:px-4 sm:text-[15px] lg:px-6',
        featured && 'bg-brass-tint'
      )}
    >
      {value === true ? (
        <>
          <Check className="h-4 w-4 text-brass-deep" strokeWidth={2} aria-hidden />
          <span className="sr-only">Included</span>
        </>
      ) : value === false ? (
        <>
          <span className="text-mute-soft" aria-hidden>
            —
          </span>
          <span className="sr-only">Not included</span>
        </>
      ) : (
        value
      )}
    </td>
  );
}

/**
 * Side-by-side comparison of the two licenses. Three fixed columns so it fits
 * 390px without horizontal scroll; the header row sticks under the site header.
 */
export default function ComparisonTable() {
  return (
    <table className="w-full table-fixed border-collapse text-left">
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
                'sticky top-16 z-10 border-b border-line-strong bg-paper px-2 pb-4 pt-3 align-bottom font-normal sm:px-4 lg:px-6',
                t.featured && 'bg-brass-tint'
              )}
            >
              <Eyebrow tone={t.featured ? 'brass' : 'mute'}>{t.name}</Eyebrow>
              <div className="mt-2 font-display text-lg tabular leading-none text-ink sm:text-2xl lg:text-3xl">{t.priceLabel}</div>
              <div className="mt-1.5 hidden text-xs text-mute sm:block">One-time license</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-line">
        {comparisonRows.map((row) => (
          <tr key={row.label}>
            <th scope="row" className="py-4 pr-3 align-top font-normal">
              <div className="text-[15px] leading-snug text-ink">{row.label}</div>
              {row.note && <div className="mt-1 text-xs leading-snug text-mute">{row.note}</div>}
            </th>
            <Cell value={row.partner} />
            <Cell value={row.principal} featured />
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="border-t border-line-strong">
          <td className="py-5" />
          {tiers.map((t) => (
            <td key={t.id} className={cn('px-2 py-5 align-top sm:px-4 lg:px-6', t.featured && 'bg-brass-tint')}>
              <TextLink to={APPLY_PATH} tone={t.featured ? 'brass' : 'ink'}>
                Apply
              </TextLink>
            </td>
          ))}
        </tr>
      </tfoot>
    </table>
  );
}
