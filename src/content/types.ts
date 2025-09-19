export type Industry = {
  slug: string;
  title: string;
  intro: string;
  insights: string[];
  comps: string[];    // "Illustrative 2025 LMM bands…" copy
  buyers: string[];
  pitfalls: string[];
  cta: string;
};

export type ProcessStep = {
  title: string;
  duration?: string;
  artifacts?: string[];
  details: string[];
};

export type ProcessPage = {
  slug: "sell" | "buy";
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  cta: string;
};