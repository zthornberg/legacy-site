import { useMemo, useState } from "react";
import { allPosts, getAllTags } from "../lib/blog";
import { Link } from "react-router-dom";

export default function BlogIndex() {
  const tags = getAllTags();
  const [q, setQ] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return allPosts.filter(p => {
      const hit =
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        (p.excerpt || "").toLowerCase().includes(q.toLowerCase()) ||
        (p.tags || []).some(t => t.toLowerCase().includes(q.toLowerCase()));
      const tagOk = !activeTag || (p.tags || []).includes(activeTag);
      return hit && tagOk;
    });
  }, [q, activeTag]);

  return (
    <div className="pt-20 bg-white">
      <section className="mx-auto max-w-screen-xl px-4 md:px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Insights & Articles</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Practical M&A playbooks, industry analysis, and case studies from the Legacy team.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search articles…"
              className="w-full md:w-80 rounded-lg border border-slate-200 bg-white/80 backdrop-blur px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
            />
            <div className="flex flex-wrap gap-2">
              <Tag label="All" active={!activeTag} onClick={() => setActiveTag(null)} />
              {tags.map(t => (
                <Tag key={t} label={t} active={activeTag === t} onClick={() => setActiveTag(t)} />
              ))}
            </div>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(p => (
            <article
              key={p.slug}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_-12px_rgba(2,6,23,0.12)]"
            >
              {p.cover && (
                <Link to={`/company/blog/${p.slug}`} className="block">
                  <img src={p.cover} alt="" className="h-44 w-full object-cover transition group-hover:scale-[1.02]" />
                </Link>
              )}
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <time dateTime={p.date}>{new Date(p.date).toLocaleDateString()}</time>
                  <span>•</span>
                  <span>{p.readingTime}</span>
                </div>
                <h2 className="mt-2 text-lg font-semibold text-slate-900">
                  <Link to={`/company/blog/${p.slug}`} className="hover:underline">{p.title}</Link>
                </h2>
                {p.tags && p.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.tags.map(t => (
                      <span key={t} className="rounded-full bg-slate-100 text-slate-700 px-2 py-0.5 text-[11px]">{t}</span>
                    ))}
                  </div>
                )}
                {p.excerpt && <p className="mt-3 text-sm text-slate-600 line-clamp-3">{p.excerpt}</p>}
                <div className="mt-4">
                  <Link to={`/company/blog/${p.slug}`} className="text-sm font-medium text-slate-900 hover:opacity-80">
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">No articles found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
}

function Tag({ label, active, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-xs border transition ${
        active ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );
}