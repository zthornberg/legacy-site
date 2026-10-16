import { SITE_EMAIL } from '../lib/site';

/** Inline error shown when an inquiry endpoint rejects or cannot be reached. */
export function InquiryError({ mailto, className }: { mailto: string; className?: string }) {
  return (
    <p role="alert" className={className ?? 'mt-4 text-sm text-red-700'}>
      We could not send that just now.{' '}
      <a href={mailto} className="underline underline-offset-4">
        Email it to {SITE_EMAIL}
      </a>{' '}
      instead and an advisor will pick it up.
    </p>
  );
}

/** One line for confirmation panels when the submission went out through the visitor's email app. */
export function EmailHandoffNote({ className }: { className?: string }) {
  return (
    <p className={className ?? 'mt-4 max-w-lg text-[15px] leading-relaxed text-ink'}>
      Your email app opened with the details addressed to <span className="whitespace-nowrap">{SITE_EMAIL}</span>. Send
      that email to reach us.
    </p>
  );
}
