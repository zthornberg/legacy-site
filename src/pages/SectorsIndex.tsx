import { Link } from "react-router-dom";
import { sectors } from "../content/sectors";

export default function SectorsIndex() {
  document.title = "Sectors | Legacy";
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">Sectors</h1>
      <p className="mt-2 text-slate-600">Short, pointed insight per vertical. No fluff.</p>
      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {sectors.map(s => (
          <li key={s.slug} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-medium text-slate-900">{s.title}</h2>
            <p className="mt-2 text-slate-600 line-clamp-3">{s.intro}</p>
            <Link to={`/sectors/${s.slug}`} className="mt-4 inline-block text-indigo-700 hover:text-indigo-900">Explore →</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}