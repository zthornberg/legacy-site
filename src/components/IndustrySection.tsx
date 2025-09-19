// src/components/IndustrySection.tsx
// Premium, uniform layout for every Industry page.
// Keeps copy from src/content/industries.ts but renders it with a fintech-grade UI.

import { industries } from "../content/industries";
import { Link, useLocation } from "react-router-dom";
import {
  Factory, PackageSearch, LineChart, Users, ShieldAlert, Building2, ChevronRight,
} from "lucide-react";

type Props = { slug: string };

const iconSize = 18;

export default function IndustrySection({ slug }: Props) {
  const ind = industries.find(i => i.slug === slug);
  const { pathname } = useLocation();
  if (!ind) return null;

  // Try to surface a concise, readable "multiples" line from comps for the stat chip.
  const multiplesLine =
    ind.comps.find(c => /LMM|EBITDA|×|x/.test(c)) ?? "Illustrative 2025 LMM Multiples";

  return (
    <section className="relative">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-screen-xl px-4 md:px-6 mt-8">
        <ol className="flex items-center gap-2 text-sm text-slate-500">
          <li>
            <Link to="/industries" className="hover:text-slate-700 transition-colors">Industries</Link>
          </li>
          <li aria-hidden="true"><ChevronRight className="inline -mt-0.5" size={16} /></li>
          <li className="text-slate-900 font-medium">{ind.title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mx-auto max-w-screen-xl px-4 md:px-6 mt-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
          {ind.title}
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
          {ind.intro}
        </p>

        {/* Meta chips */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Chip icon={<LineChart size={14} />} label={multiplesLine} />
          <Chip icon={<PackageSearch size={14} />} label="Buyer Universe: PE, strategics, sponsors" />
          {/* Add more chips if you want (e.g., "Typical Deal Size: $5–30M EV") */}
        </div>
      </header>

      {/* Content grid */}
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 mt-10 grid gap-6 md:gap-8 md:grid-cols-2">
        <InfoCard title="Pointed Insights" icon={<Factory size={iconSize} />} items={ind.insights} />
        <InfoCard title="Recent Comps & Multiples (Illustrative)" icon={<LineChart size={iconSize} />} items={ind.comps} />
        <InfoCard title="Typical Buyers" icon={<Users size={iconSize} />} items={ind.buyers} />
        <InfoCard title="Diligence Pitfalls" icon={<ShieldAlert size={iconSize} />} items={ind.pitfalls} tone="warning" />
      </div>

      {/* CTA band */}
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <CTAIndustry slug={ind.slug} title={ind.title} ctaLine={ind.cta} pathname={pathname} />
      </div>

      {/* Footnote / compliance line */}
      <p className="mx-auto max-w-screen-xl px-4 md:px-6 mt-6 mb-12 text-xs text-slate-500">
        Valuation ranges are illustrative for lower-middle-market transactions and vary by quality, durability of
        earnings, growth, and structure. Not an offer to sell or solicit an offer to buy securities.
      </p>
    </section>
  );
}

/* ---------- subcomponents ---------- */

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-700 shadow-sm">
      {icon}
      {label}
    </span>
  );
}

function InfoCard({
  title, icon, items, tone = "default",
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
  tone?: "default" | "warning";
}) {
  const ring =
    tone === "warning"
      ? "ring-1 ring-amber-200 bg-amber-50/40"
      : "ring-1 ring-slate-200 bg-white/70";
  return (
    <article
      className={`rounded-2xl ${ring} backdrop-blur p-6 shadow-[0_6px_24px_-8px_rgba(15,23,42,0.15)]`}
    >
      <div className="flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
          {icon}
        </span>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      </div>
      <ul className="mt-4 space-y-2 text-slate-700 leading-relaxed">
        {items.map((x, i) => (
          <li key={i} className="pl-5 relative">
            <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
            {x}
          </li>
        ))}
      </ul>
    </article>
  );
}

function CTAIndustry({
  slug, title, ctaLine, pathname,
}: { slug: string; title: string; ctaLine: string; pathname: string }) {
  const base = import.meta.env.VITE_TALLY_BOOK_URL || "/contact";
  const href = `${base}${base.includes("?") ? "&" : "?"}industry=${encodeURIComponent(slug)}&source=${encodeURIComponent(pathname)}`;
  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-700 text-white p-6 md:p-8 shadow-[0_16px_40px_-12px_rgba(2,6,23,0.45)]">
      <div className="md:flex md:items-center md:justify-between gap-6">
        <div className="max-w-3xl">
          <h3 className="text-xl md:text-2xl font-semibold">
            Ready to explore opportunities in {title}?
          </h3>
          <p className="mt-2 text-slate-200">
            {ctaLine}
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <a
            href={href}
            className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2.5 font-medium shadow hover:bg-slate-100 transition"
          >
            Schedule a call
          </a>
          <Link
            to="/buy"
            className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white px-4 py-2.5 font-medium ring-1 ring-white/30 hover:bg-white/15 transition"
          >
            View listings
          </Link>
        </div>
      </div>
    </div>
  );
}