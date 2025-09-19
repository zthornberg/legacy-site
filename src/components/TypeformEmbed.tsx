import { useEffect } from "react";

type Props = {
  formId?: string;        // e.g., "AbCdEf"
  mode?: "popup" | "inline";
  hidden?: Record<string, string | number | boolean>;
  height?: number;        // for inline
};

declare global {
  interface Window { tf?: any; }
}

export default function TypeformEmbed({ formId, mode = "popup", hidden = {}, height = 520 }: Props) {
  const id = formId || import.meta.env.VITE_TYPEFORM_FORM_ID;
  if (!id) return null;

  const hiddenQS = Object.entries(hidden)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
    .join("&");
  const baseUrl = `https://form.typeform.com/to/${id}?${hiddenQS}`;

  useEffect(() => {
    if (mode !== "popup") return;
    let script = document.querySelector<HTMLScriptElement>("#tf-embed");
    if (!script) {
      script = document.createElement("script");
      script.id = "tf-embed";
      script.src = "https://embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [mode]);

  if (mode === "inline") {
    return (
      <iframe
        title="Typeform"
        src={baseUrl}
        className="w-full rounded-xl border border-slate-200"
        style={{ height }}
      />
    );
  }

  // Popup trigger
  return (
    <button
      onClick={() => {
        // @ts-ignore
        if (window?.tf?.createPopup) {
          // @ts-ignore
          window.tf.createPopup(id, { hidden }).open();
        } else {
          window.open(baseUrl, "_blank");
        }
      }}
      className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2.5 font-medium shadow hover:bg-slate-100 transition"
    >
      Schedule a call
    </button>
  );
}