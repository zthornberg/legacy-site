import { industries } from "../content/industries";

type Props = { slug: string };

export default function IndustrySection({ slug }: Props) {
  const ind = industries.find(i => i.slug === slug);
  if (!ind) return null;

  return (
    <section className="mt-10">
      <header>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{ind.title}</h2>
        <p className="mt-2 text-slate-600">{ind.intro}</p>
      </header>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Pointed Insights</h3>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
            {ind.insights.map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Recent Comps & Multiples (Illustrative)</h3>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
            {ind.comps.map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Typical Buyers</h3>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
            {ind.buyers.map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Diligence Pitfalls</h3>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
            {ind.pitfalls.map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        </div>
      </div>

      {/* Tailored CTA */}
      <div className="mt-10 border-t border-slate-200 pt-6">
        <p className="text-slate-800">{ind.cta}</p>
        <AdvisorCTA industrySlug={ind.slug} />
      </div>
    </section>
  );
}

// Inline import to avoid circular deps warning in some setups
function AdvisorCTA({ industrySlug }: { industrySlug: string }) {
  // Optional: set VITE_TALLY_BOOK_URL in .env to send users to Tally with prefilled industry
  const base = import.meta.env.VITE_TALLY_BOOK_URL || "/contact";
  const href = `${base}${base.includes("?") ? "&" : "?"}industry=${encodeURIComponent(industrySlug)}`;

  return (
    <a
      href={href}
      className="mt-3 inline-block rounded-lg bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
    >
      Schedule a call with an advisor
    </a>
  );
}