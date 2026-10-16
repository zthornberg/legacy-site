import { Card, Eyebrow } from '../ui';
import { timelineSteps } from './content';

/**
 * DOM-built "first 90 days" ledger for the program hero aside.
 * Reads as a product artifact on the ink band: four numbered steps, hairlines, one brass accent.
 */
export default function FirstNinetyDays() {
  return (
    <Card tone="ink" padding="none" className="overflow-hidden shadow-lift">
      <div className="flex items-center justify-between gap-4 border-b border-line-inverse px-6 py-4">
        <Eyebrow tone="inverse">The first 90 days</Eyebrow>
        <span className="text-xs text-paper/50">Both licenses</span>
      </div>
      <ol className="divide-y divide-line-inverse px-6">
        {timelineSteps.map((step, i) => (
          <li key={step.kicker} className="flex gap-5 py-4">
            <span className="tabular w-6 shrink-0 pt-0.5 text-sm text-brass-light">{String(i + 1).padStart(2, '0')}</span>
            <div className="min-w-0">
              <div className="text-[15px] font-medium text-paper">{step.title}</div>
              <div className="mt-1 text-sm leading-relaxed text-paper/60">{step.short}</div>
            </div>
          </li>
        ))}
      </ol>
      <div className="flex items-center justify-between gap-4 border-t border-line-inverse px-6 py-4 text-xs text-paper/50">
        <span className="shrink-0 whitespace-nowrap">Quarterly intake</span>
        <span className="text-right">A handful of new brokers each quarter</span>
      </div>
    </Card>
  );
}
