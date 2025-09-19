import { useParams, Link } from "react-router-dom";
import { sectors } from "../content/sectors";

export default function SectorDetail() {
  const { slug } = useParams();
  const sector = sectors.find(s => s.slug === slug);
  if (!sector) return <div className="mx-auto max-w-screen-lg px-4 md:px-6 py-10">Sector not found.</div>;

  document.title = `${sector.title} | Legacy`;

  return (
    <article className="mx-auto max-w-screen-xl px-4 md:px-6 py-10">
      <Link to="/sectors" className="text-slate-500 hover:text-slate-700">← All sectors</Link>
      <header className="mt-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">{sector.title}</h1>
        <p className="mt-2 text-slate-600">{sector.intro}</p>
      </header>

      <section className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Pointed Insights</h2>
          <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-700">
            {sector.insights.map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Recent Comps & Multiples (Illustrative)</h2>
          <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-700">
            {sector.comps.map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Typical Buyers</h2>
          <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-700">
            {sector.buyers.map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Diligence Pitfalls</h2>
          <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-700">
            {sector.pitfalls.map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        </div>
      </section>

      <footer className="mt-10 border-t border-slate-200 pt-6">
        <p className="text-slate-800">{sector.cta}</p>
        <Link to="/contact" className="mt-3 inline-block rounded-lg bg-slate-900 text-white px-4 py-2">Book a 20-minute Fit Call</Link>
      </footer>
    </article>
  );
}