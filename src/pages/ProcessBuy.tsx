import { buyProcess } from "../content/process";

export default function ProcessBuy() {
  document.title = "Buy-Side Process | Legacy";
  const p = buyProcess;
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">{p.title}</h1>
      <p className="mt-2 text-slate-600">{p.subtitle}</p>
      <ol className="mt-8 space-y-6">
        {p.steps.map((s, idx) => (
          <li key={idx} className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-baseline justify-between">
              <h2 className="text-xl font-medium text-slate-900">{idx+1}. {s.title}</h2>
              {s.duration && <span className="text-sm text-slate-500">{s.duration}</span>}
            </div>
            {s.artifacts && (
              <p className="mt-2 text-sm text-slate-600"><strong>Artifacts:</strong> {s.artifacts.join(", ")}</p>
            )}
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              {s.details.map((d,i)=><li key={i}>{d}</li>)}
            </ul>
          </li>
        ))}
      </ol>
      <div className="mt-8">
        <p className="text-slate-800">{p.cta}</p>
        <a href="/contact" className="mt-3 inline-block rounded-lg bg-slate-900 text-white px-4 py-2">Start a Mandate</a>
      </div>
    </div>
  );
}