import type { Sector } from "./types";

export const sectors: Sector[] = [
  {
    slug: "construction-homebuilding",
    title: "Construction & Homebuilding",
    intro:
      "Lower middle-market construction firms trade on backlog quality, margin consistency, and safety. Service/maintenance revenue and labor stability matter more than one-off project peaks.",
    insights: [
      "Backlog visibility (≥6–9 months) and WIP accuracy drive confidence.",
      "Mix shift toward service/maintenance and recurring programs increases multiples.",
      "Union/non-union & licensing/bonding posture impacts buyer universe and diligence speed.",
      "Lead source concentration (1–2 GCs) suppresses value; diversify upstream.",
    ],
    comps: [
      "EBITDA: ~3.5–6.0× for diversified specialty trades with clean WIP.",
      "Revenue: ~0.30–0.60× for project-heavy firms; service-heavy can exceed.",
      "Premiums: recurring maintenance contracts, safety EMR ≤0.9, low change-order disputes.",
    ],
    buyers: [
      "PE platforms & PE-backed strategics rolling up specialty trades",
      "Regional strategics expanding capabilities/geography",
      "Independent sponsors/search funds with construction ops partners",
    ],
    pitfalls: [
      "WIP misstatements (under/over-billing), unpriced change orders",
      "Labor pipeline risk / foreman dependency",
      "Warranty reserves and safety/OSHA history",
      "Bonding/permit transferability and licensing coverage",
    ],
    cta: "Considering a sale in 6–18 months? Let's pressure-test backlog, WIP, and crew depth."
  },
  {
    slug: "industrial-manufacturing-elevator",
    title: "Industrial Manufacturing (Elevator & Components)",
    intro:
      "Component manufacturers with installed base and aftermarket parts command stronger pricing than pure OEMs. Certifications, QA, and on-time performance are the trust currency.",
    insights: [
      "Aftermarket/parts revenue and long-tail SKUs stabilize cash flow.",
      "Certifications (ISO, UL) and PPAP discipline reduce buy-side friction.",
      "Vendor concentration (single-source) is a valuation resistor.",
      "On-time delivery ≥95% with low scrap improves credibility.",
    ],
    comps: [
      "EBITDA: ~5.0–8.0× for niche component makers with parts/service tail.",
      "Revenue: ~0.6–1.0× where gross margins ≥30% and backlog stable.",
      "Premiums: proprietary SKUs, aftermarket mix >30%, sticky OEM relationships.",
    ],
    buyers: [
      "PE platforms consolidating vertical components",
      "Strategic manufacturers filling capability gaps",
      "Search funds with sector operators",
    ],
    pitfalls: [
      "Unprotected drawings/IP and key-customer dependency (>25% revenue)",
      "Quality escapes & chargebacks not fully reserved",
      "Aging equipment without capex roadmap",
    ],
    cta: "We'll package throughput, QA, and parts tail so buyers see durable value—not just machines."
  },
  {
    slug: "distribution-flooring",
    title: "Distribution (Flooring & Building Products)",
    intro:
      "Distributors trade on margin discipline, turns, and contract stickiness. Private-label and preferred vendor status push multiples above pure pass-through models.",
    insights: [
      "SKU rationalization and A/R hygiene are quick wins in diligence.",
      "Contracted B2B accounts with rebate programs lift retention.",
      "Private-label mix boosts margin and buyer appetite.",
    ],
    comps: [
      "EBITDA: ~4.0–6.0× for regional distributors with clean A/R.",
      "Revenue: ~0.35–0.75× depending on margin profile and churn.",
      "Premiums: recurring contractor programs, low returns, vendor incentives.",
    ],
    buyers: [
      "PE-backed platforms pursuing regional density",
      "Strategics adding product lines / geography",
      "Independent sponsors with ops advisors",
    ],
    pitfalls: [
      "Customer concentration (>20%), weak MAP/compliance",
      "Dead/obsolete stock, consignment exposure",
      "Untracked rebates and off-invoice programs",
    ],
    cta: "Let's quantify turn, mix, and contract quality so your multiple reflects the real engine."
  },
  {
    slug: "energy-services-oilfield",
    title: "Energy Services (Pressure Pumping & Field Services)",
    intro:
      "Cyclicality is priced in; buyers pay for contracts, safety, and fleet readiness. Utilization >70% with diversified basins dampens risk.",
    insights: [
      "Contract coverage & rate integrity outweigh spot exposure.",
      "HSE record and TRIR metrics drive buyer screens.",
      "OEM relationships and parts logistics reduce downtime risk.",
    ],
    comps: [
      "EBITDA: ~3.0–5.0× depending on cycle and contract visibility.",
      "Revenue: ~0.25–0.45×; higher with multiyear MSAs and modern fleet.",
      "Premiums: proprietary chem/tech, basin diversity, low TRIR.",
    ],
    buyers: [
      "Strategic oilfield service consolidators",
      "PE specialists with energy cycles expertise",
      "Regional players expanding fleet/crew",
    ],
    pitfalls: [
      "Deferred maintenance capex, DOT/HS&E flags",
      "Single-operator dependence; pricing fragility",
      "Vendor payables stretch masking cash needs",
    ],
    cta: "We'll present utilization, HSE, and MSA depth so the story is resilience—not volatility."
  },
  {
    slug: "electrical-contractors",
    title: "Commercial Electrical Contractors",
    intro:
      "Recurring service, term contracts, and low rework separate premium contractors from bid-only shops. Certifications and foreman bench strength are diligence targets.",
    insights: [
      "Service/term contract mix (vs new build) stabilizes margin.",
      "GC relationships, preferred status, and no-bid work move value.",
      "Estimator/PM systems (WinBid/Accubid) and close-rate KPIs matter.",
    ],
    comps: [
      "EBITDA: ~4.5–6.5× with strong service mix and safety track.",
      "Revenue: ~0.35–0.60× where backlog ≥6 months and change-order discipline is tight.",
      "Premiums: multi-site programs, EMR ≤0.9, low punch-list costs.",
    ],
    buyers: [
      "PE platforms in specialty trades",
      "Regional strategics building self-perform capabilities",
      "Independent sponsors with trade ops partners",
    ],
    pitfalls: [
      "Unpriced change orders, WIP errors, licensing gaps",
      "Field leadership concentration and overtime burn",
      "Warranty accruals under-reserved",
    ],
    cta: "We'll evidence service density, licensing, and WIP hygiene to support a premium outcome."
  },
  {
    slug: "saas-tech-enabled-services",
    title: "SaaS & Tech-Enabled Services (Lower MM)",
    intro:
      "Buyers separate true SaaS (contracted, net-revenue retention) from services with tooling. Clean cohort data and gross margin tell the truth.",
    insights: [
      "NRR/GRR and gross margin drive valuation bands more than logo count.",
      "Implementation SOWs vs recurring revenue: map the split clearly.",
      "Security posture (SOC2, ISO) shortcuts diligence pain.",
    ],
    comps: [
      "ARR: ~2.0–5.0× for sub-$10M ARR with NRR ≥100% and CAC payback <18 months.",
      "EBITDA: ~6–10× for profitable tech-enabled services with sticky contracts.",
      "Premiums: usage-based pricing, expansion revenue, low churn cohorts.",
    ],
    buyers: [
      "Vertical-SaaS strategics",
      "Growth/PE funds at smaller check sizes",
      "Search funds with technical advisors",
    ],
    pitfalls: [
      "Blended revenue obscuring true ARR vs services",
      "Low data hygiene; missing cohort analytics",
      "Weak security/compliance slowing buyer approval",
    ],
    cta: "We'll separate ARR from services and publish cohort math so buyers underwrite with confidence."
  }
];