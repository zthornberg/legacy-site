// AutoIndustryInjector.tsx
// Renders the IndustrySection below the page content when the URL matches an industry.
// Safe to include globally; does nothing on non-industry pages.

import { useLocation } from "react-router-dom";
import IndustrySection from "../components/IndustrySection";

const rules: Array<{ test: (p: string) => boolean; slug: string }> = [
  { test: p => /construction|homebuild/i.test(p), slug: "construction-homebuilding" },
  { test: p => /elevator|industrial(-|)manufactur/i.test(p), slug: "industrial-manufacturing-elevator" },
  { test: p => /floor|distribut/i.test(p), slug: "distribution-flooring" },
  { test: p => /oil|energy|pressure(-|)pump/i.test(p), slug: "energy-services-oilfield" },
  { test: p => /electric/i.test(p), slug: "electrical-contractors" },
  { test: p => /hvac|plumb/i.test(p), slug: "hvac-plumbing" },
  { test: p => /landscap|facilit/i.test(p), slug: "landscaping-facilities" },
  { test: p => /health|dental|medspa/i.test(p), slug: "healthcare-services" },
  { test: p => /logistic|truck/i.test(p), slug: "logistics-trucking" },
  { test: p => /msp|it(-|)managed/i.test(p), slug: "it-msp" },
  { test: p => /staffing|industrial(-|)services/i.test(p), slug: "staffing-industrial-services" },
  { test: p => /saas|tech(-|)enabled/i.test(p), slug: "saas-tech-enabled-services" },
];

export default function AutoIndustryInjector() {
  const { pathname } = useLocation();

  // Skip known non-industry pages quickly
  if (/^\/(buy|sell|contact|about|team|portal|pricing|home)?$/.test(pathname)) return null;

  const rule = rules.find(r => r.test(pathname));
  if (!rule) {
    if (import.meta.env.DEV) console.debug("[IndustryInjector] No match for", pathname);
    return null;
  }

  if (import.meta.env.DEV) console.debug("[IndustryInjector] Match", pathname, "→", rule.slug);
  return <IndustrySection slug={rule.slug} />;
}