export type Industry = {
  slug: string;          // must match how you reference it in each page
  title: string;
  intro: string;         // 2–3 sentence lead-in
  insights: string[];    // 3–5 bullets (pointed)
  comps: string[];       // "recent comps & multiples (illustrative)"
  buyers: string[];      // typical buyers
  pitfalls: string[];    // diligence pitfalls
  cta: string;           // short industry-specific CTA line
};