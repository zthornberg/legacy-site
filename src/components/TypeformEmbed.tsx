import { useEffect } from 'react';
import Button, { type ButtonVariant } from './ui/Button';

type Props = {
  formId?: string; // e.g., "AbCdEf"
  mode?: 'popup' | 'inline';
  hidden?: Record<string, string | number | boolean>;
  height?: number; // for inline
  /** Popup trigger label. */
  label?: string;
  /** Popup trigger style. Use 'inverse-outline' on ink bands. */
  variant?: ButtonVariant;
};

type TypeformEmbedApi = {
  createPopup?: (id: string, options: { hidden?: Record<string, string> }) => { open: () => void };
};

declare global {
  interface Window {
    tf?: TypeformEmbedApi;
  }
}

/**
 * Typeform popup trigger or inline embed. Renders nothing unless a form id is passed
 * or VITE_TYPEFORM_FORM_ID is set.
 */
export default function TypeformEmbed({ formId, mode = 'popup', hidden = {}, height = 520, label = 'Schedule a call', variant = 'secondary' }: Props) {
  const id = formId || import.meta.env.VITE_TYPEFORM_FORM_ID;

  useEffect(() => {
    if (!id || mode !== 'popup') return;
    let script = document.querySelector<HTMLScriptElement>('#tf-embed');
    if (!script) {
      script = document.createElement('script');
      script.id = 'tf-embed';
      script.src = 'https://embed.typeform.com/next/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [id, mode]);

  if (!id) return null;

  const hiddenStrings = Object.fromEntries(Object.entries(hidden).map(([k, v]) => [k, String(v)]));
  const hiddenQS = Object.entries(hiddenStrings)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
  const baseUrl = `https://form.typeform.com/to/${id}?${hiddenQS}`;

  if (mode === 'inline') {
    return (
      <iframe
        title="Typeform"
        src={baseUrl}
        className="w-full rounded-xl border border-line bg-white"
        style={{ height }}
      />
    );
  }

  // Popup trigger
  return (
    <Button
      variant={variant}
      onClick={() => {
        if (window.tf?.createPopup) {
          window.tf.createPopup(id, { hidden: hiddenStrings }).open();
        } else {
          window.open(baseUrl, '_blank');
        }
      }}
    >
      {label}
    </Button>
  );
}
