import React, { useEffect, useId, useRef, useState } from 'react';
import { Lock } from 'lucide-react';
import { Badge, Button, TextLink } from '../ui';
import { cn } from '../../lib/utils';
import type { Listing } from './listings';

/*
 * Confidential listings ledger. Desktop: a hairline table (one row per listing, tabular figures).
 * Mobile: each row stacks into its own card. "Request details" opens an inline NDA request
 * under the row; only one is open at a time.
 */

const COLS =
  'lg:grid-cols-[minmax(0,1fr)_6.5rem_6.5rem_6.5rem_7.5rem_9.75rem] lg:gap-x-6 xl:grid-cols-[minmax(0,1fr)_7.5rem_7.5rem_7.5rem_8rem_10rem]';

function Metric({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="min-w-0 lg:text-right">
      <span className="block text-xs text-mute lg:sr-only">{label}</span>
      <span className={cn('tabular mt-1 block text-[15px] lg:mt-0', strong ? 'font-medium text-ink' : 'text-ink/85')}>
        {value}
      </span>
    </div>
  );
}

function RequestPanel({ listing, id }: { listing: Listing; id: string }) {
  const [form, setForm] = useState({ name: '', email: '' });
  const [sent, setSent] = useState(false);
  const firstField = useRef<HTMLInputElement>(null);
  const uid = useId();

  useEffect(() => {
    firstField.current?.focus({ preventScroll: true });
  }, []);

  const underLoi = listing.status === 'Under LOI';

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Listing details request:', { listing: listing.ref, ...form });
    setSent(true);
  };

  return (
    <div id={id} className="mt-5 rounded-lg border border-line bg-paper p-5 sm:p-6 lg:col-span-full lg:mt-1">
      {sent ? (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" role="status">
          <div>
            <p className="font-display text-2xl leading-tight text-ink">Request received.</p>
            <p className="mt-1.5 text-sm leading-relaxed text-mute">
              A Legacy advisor will send the NDA for <span className="tabular text-ink">{listing.ref}</span> to{' '}
              <span className="text-ink">{form.email}</span> and confirm your buyer profile before releasing the package.
            </p>
          </div>
          <TextLink to="/buy/registration" className="shrink-0">
            Complete your buyer profile
          </TextLink>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-2 text-xs font-medium text-brass-deep">
              <Lock className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
              Released under NDA
              <span className="tabular text-mute-soft">· {listing.ref}</span>
            </p>
            <p className="mt-3 font-display text-2xl leading-tight text-ink">
              {underLoi ? 'This business is under LOI.' : 'Request the full package.'}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-mute">
              {underLoi
                ? 'You can still request details. We will tell you if it returns to market and send comparable businesses as they list.'
                : 'The CIM, full financials and the seller’s identity are shared once you sign an NDA and complete buyer registration.'}
            </p>
          </div>
          <form onSubmit={submit} className="lg:col-span-7" aria-label={`Request details for ${listing.ref}`}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor={`${uid}-name`} className="label">
                  Full name
                </label>
                <input
                  ref={firstField}
                  id={`${uid}-name`}
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="field"
                />
              </div>
              <div>
                <label htmlFor={`${uid}-email`} className="label">
                  Work email
                </label>
                <input
                  id={`${uid}-email`}
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="field"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" arrow>
                Send me the NDA
              </Button>
              <p className="text-[13px] text-mute">
                Not registered?{' '}
                <TextLink to="/buy/registration" tone="ink" arrow={false} className="text-[13px]">
                  Register as a buyer
                </TextLink>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

function Row({ listing, open, onToggle }: { listing: Listing; open: boolean; onToggle: () => void }) {
  const panelId = `listing-${listing.id}-request`;
  const available = listing.status === 'Available';
  return (
    <li
      className={cn(
        'relative rounded-xl border border-line bg-white p-5 transition-colors duration-200 sm:p-6',
        'lg:grid lg:items-center lg:rounded-none lg:border-0 lg:px-6 lg:py-5',
        open ? 'lg:bg-paper-deep/40' : 'lg:hover:bg-paper/70',
        COLS
      )}
    >
      {/* Business */}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2.5 pr-28 lg:pr-0">
          <Badge>{listing.industry}</Badge>
          <span className="tabular text-xs text-mute-soft">{listing.ref}</span>
        </div>
        <h3 className="mt-3 font-sans text-base font-medium leading-snug text-ink">{listing.title}</h3>
        <p className="mt-1 text-sm text-mute">{listing.location}</p>
      </div>

      {/* Figures: one grid row on mobile, three table cells on desktop */}
      <div className="mt-5 grid grid-cols-3 gap-4 border-t border-line pt-4 lg:contents">
        <Metric label="Revenue" value={listing.revenue} />
        <Metric label="Cash flow" value={listing.cashFlow} />
        <Metric label="Asking price" value={listing.askingPrice} strong />
      </div>

      {/* Status: top-right of the card on mobile, its own column on desktop */}
      <div className="absolute right-5 top-5 sm:right-6 sm:top-6 lg:static lg:flex lg:justify-start">
        <span className="sr-only">Status: </span>
        <Badge tone={available ? 'brass' : 'mute'} dot>
          {listing.status}
        </Badge>
      </div>

      <div className="mt-5 lg:mt-0 lg:flex lg:justify-end">
        <Button
          size="sm"
          variant="secondary"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="w-full lg:w-auto"
        >
          {open ? 'Close' : 'Request details'}
        </Button>
      </div>

      {open && <RequestPanel listing={listing} id={panelId} />}
    </li>
  );
}

export default function ListingsLedger({ listings }: { listings: Listing[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="lg:overflow-hidden lg:rounded-xl lg:border lg:border-line lg:bg-white">
      <div
        className={cn(
          'hidden border-b border-line bg-paper/60 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-mute lg:grid',
          COLS
        )}
        aria-hidden
      >
        <span>Business</span>
        <span className="text-right">Revenue</span>
        <span className="text-right">Cash flow</span>
        <span className="text-right">Asking</span>
        <span>Status</span>
        <span className="sr-only">Action</span>
      </div>
      <ul className="space-y-3 lg:space-y-0 lg:divide-y lg:divide-line" aria-label="Representative listings">
        {listings.map((l) => (
          <Row
            key={l.id}
            listing={l}
            open={openId === l.id}
            onToggle={() => setOpenId((cur) => (cur === l.id ? null : l.id))}
          />
        ))}
      </ul>
    </div>
  );
}
