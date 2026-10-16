import { Badge, Card, Eyebrow } from '../ui';
import { tiers } from '../../content/licensing';
import { cn } from '../../lib/utils';
import { economicsExample } from './content';

const usd = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const pct = (rate: number) => `${Math.round(rate * 100)}%`;

/**
 * A worked example of one closed mandate under each license, built only from
 * the program's published rates. Clearly labeled as illustrative.
 */
export default function EconomicsLedger() {
  const { salePrice, successFeeRate, footnote } = economicsExample;
  const gross = salePrice * successFeeRate;
  const columns = tiers.map((t) => {
    const rate = parseFloat(t.royalty) / 100;
    const royalty = Math.round(gross * rate);
    return { tier: t, rate, royalty, keeps: gross - royalty };
  });

  const head = 'px-2 py-3 text-right sm:px-6';
  const label = 'px-5 py-3.5 text-left align-top font-normal sm:px-6';
  const value = 'px-2 py-3.5 text-right align-top tabular sm:px-6';

  return (
    <Card tone="ink" padding="none" className="overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line-inverse px-5 py-4 sm:px-6">
        <Eyebrow tone="inverse">Illustrative mandate</Eyebrow>
        <Badge tone="inverse">Example only</Badge>
      </div>

      <table className="w-full table-fixed text-[13px] sm:text-sm">
        <caption className="sr-only">
          Illustrative commission on a {usd(salePrice)} sale under each license
        </caption>
        <colgroup>
          <col className="w-[36%]" />
          <col className="w-[32%]" />
          <col className="w-[32%]" />
        </colgroup>
        <thead>
          <tr className="border-b border-line-inverse">
            <th scope="col" className="px-5 py-3 text-left sm:px-6">
              <span className="sr-only">Line item</span>
            </th>
            {columns.map(({ tier }) => (
              <th key={tier.id} scope="col" className={head}>
                <Eyebrow tone="inverse">{tier.name}</Eyebrow>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line-inverse">
          <tr>
            <th scope="row" className={cn(label, 'text-paper/70')}>
              Sale price
            </th>
            {columns.map(({ tier }) => (
              <td key={tier.id} className={cn(value, 'text-paper')}>
                {usd(salePrice)}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className={cn(label, 'text-paper/70')}>
              Success fee at {pct(successFeeRate)}
            </th>
            {columns.map(({ tier }) => (
              <td key={tier.id} className={cn(value, 'text-paper')}>
                {usd(gross)}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className={cn(label, 'text-paper/70')}>
              Royalty to Legacy
            </th>
            {columns.map(({ tier, rate, royalty }) => (
              <td key={tier.id} className={cn(value, 'text-paper')}>
                −{usd(royalty)}
                <span className="mt-0.5 block whitespace-nowrap text-xs text-paper/55">{pct(rate)} royalty</span>
              </td>
            ))}
          </tr>
          <tr className="bg-white/[0.04]">
            <th scope="row" className={cn(label, 'py-5 text-paper')}>
              Broker keeps
            </th>
            {columns.map(({ tier, keeps }) => (
              <td key={tier.id} className={cn(value, 'py-5 font-display text-xl leading-none text-paper sm:text-2xl')}>
                {usd(keeps)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <p className="border-t border-line-inverse px-5 py-4 text-xs leading-relaxed text-paper/55 sm:px-6">{footnote}</p>
    </Card>
  );
}
