export type Sector = {
  slug: string;
  title: string;
  intro: string;                 // 2–3 sentences
  insights: string[];            // 3–5 bullets (pointed)
  comps: string[];               // "recent comps & multiples (illustrative)"
  buyers: string[];              // typical buyers
  pitfalls: string[];            // diligence pitfalls
  cta: string;                   // single line CTA
};

export type ProcessStep = {
  title: string;
  duration?: string;             // e.g., "Weeks 1–2"
  artifacts?: string[];          // documents produced/exchanged
  details: string[];             // bullets
};

export type ProcessPage = {
  slug: "sell" | "buy";
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  cta: string;
};