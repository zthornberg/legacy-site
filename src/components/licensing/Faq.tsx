import { Plus } from 'lucide-react';
import type { FaqItem } from './content';

/**
 * Native <details>/<summary> accordion: keyboard and screen-reader friendly
 * with no JS state. Hairline rows, a plus that turns into a cross when open.
 */
export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-sm py-5 text-left text-[17px] font-medium text-ink transition-colors duration-200 hover:text-ink/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-4 focus-visible:ring-offset-white [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <Plus
              className="h-4 w-4 shrink-0 text-mute transition-transform duration-200 group-open:rotate-45"
              strokeWidth={1.75}
              aria-hidden
            />
          </summary>
          <div className="max-w-2xl pb-6 text-[15px] leading-relaxed text-mute">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
