import type { Industry } from "./types";

export const industries: Industry[] = [
  {
    slug: "construction-homebuilding",
    title: "Construction & Homebuilding",
    intro:
      "Lower middle-market construction firms trade on backlog visibility, margin discipline, and safety. Service/maintenance revenue and reliable field leadership matter more than one-off project peaks.",
    insights: [
      "Backlog ≥6–9 months and accurate WIP (under/over-billing) drive buyer confidence.",
      "Service/maintenance mix and term programs lift stability—and multiples.",
      "Licensing/bonding posture and EMR history change the buyer universe.",
      "Lead-source concentration (1–2 GCs) suppresses value; diversify upstream."
    ],
    comps: [
      "Illustrative 2025 LMM bands: EBITDA ~3.0–4.5× at $2–5M EV; ~4.0–6.0× at $5–30M EV (service-heavy with clean WIP tends higher).",
      "Premiums: recurring programs, EMR ≤0.9, low change-order disputes."
    ],
    buyers: [
      "PE platforms & PE-backed strategics in specialty trades",
      "Regional strategics expanding capability/geography",
      "Independent sponsors with trade operators"
    ],
    pitfalls: [
      "WIP misstatements, unpriced change orders, weak documentation",
      "Labor pipeline risk / foreman dependency",
      "Warranty reserves and OSHA/safety history"
    ],
    cta: "Considering a sale in 6–18 months? We'll pressure-test backlog, WIP, and crew depth before buyers do."
  },
  {
    slug: "industrial-manufacturing-elevator",
    title: "Industrial Manufacturing (Elevator & Components)",
    intro:
      "Component makers with installed base and aftermarket parts command stronger pricing than pure OEMs. Certifications, QA, and on-time performance are the trust currency.",
    insights: [
      "Aftermarket/parts revenue and long-tail SKUs stabilize cash flow.",
      "ISO/UL/PPAP discipline reduces buy-side friction and re-work.",
      "Vendor concentration (single-source) is a valuation resistor.",
      "On-time delivery ≥95% with low scrap improves credibility."
    ],
    comps: [
      "Illustrative 2025 LMM bands: EBITDA ~3.5–5.5× at $2–5M EV; ~5.0–7.0× at $5–30M EV.",
      "Premiums: proprietary SKUs, aftermarket >30%, sticky OEM relationships."
    ],
    buyers: [
      "PE platforms consolidating vertical components",
      "Strategic manufacturers filling capability gaps",
      "Search funds with sector advisors"
    ],
    pitfalls: [
      "Unprotected drawings/IP, key-customer dependence (>25%)",
      "Quality escapes & chargebacks not fully reserved",
      "Aging equipment with no capex roadmap"
    ],
    cta: "We package throughput, QA, and parts tail so buyers see durability—not just machines."
  },
  {
    slug: "distribution-flooring",
    title: "Distribution (Flooring & Building Products)",
    intro:
      "Distributors trade on margin discipline, inventory turns, and contract stickiness. Private-label and preferred vendor status push multiples above pass-through models.",
    insights: [
      "SKU rationalization and A/R hygiene are quick diligence wins.",
      "Contracted B2B accounts with rebates lift retention and predictability.",
      "Private-label mix boosts margin and buyer appetite."
    ],
    comps: [
      "Illustrative 2025 LMM bands: EBITDA ~3.5–5.5× at $2–5M EV; ~4.5–6.5× at $5–30M EV.",
      "Premiums: recurring contractor programs, low returns, vendor incentives."
    ],
    buyers: [
      "PE-backed platforms pursuing regional density",
      "Strategics adding product lines/geography",
      "Independent sponsors with ops advisors"
    ],
    pitfalls: [
      "Customer concentration (>20%), weak MAP/compliance",
      "Dead/obsolete stock, consignment exposure",
      "Untracked rebates and off-invoice programs"
    ],
    cta: "Let's quantify turns, mix, and contract quality so your multiple reflects the real engine."
  },
  {
    slug: "energy-services-oilfield",
    title: "Energy Services (Pressure Pumping & Field)",
    intro:
      "Cyclicality is priced in; buyers pay for contracts, safety, and fleet readiness. Utilization >70% with diversified basins dampens risk.",
    insights: [
      "Contract coverage & rate integrity outweigh spot exposure.",
      "HSE record/TRIR are first-pass buyer screens.",
      "OEM support and parts logistics reduce downtime risk."
    ],
    comps: [
      "Illustrative 2025 LMM bands: EBITDA ~3.0–4.5× at $2–5M EV; ~3.5–5.0× at $5–30M EV.",
      "Premiums: multiyear MSAs, modern fleet, basin diversity, low TRIR."
    ],
    buyers: [
      "Strategic oilfield consolidators",
      "PE specialists with energy cycles expertise",
      "Regional players expanding fleet/crew"
    ],
    pitfalls: [
      "Deferred maintenance capex, DOT/HS&E flags",
      "Single-operator dependence; pricing fragility",
      "Vendor payables stretch masking cash needs"
    ],
    cta: "We'll present utilization, HSE, and MSA depth so the story is resilience—not volatility."
  },
  {
    slug: "electrical-contractors",
    title: "Commercial Electrical Contractors",
    intro:
      "Recurring service, term contracts, and low rework separate premium contractors from bid-only shops. Certifications and foreman bench strength are diligence targets.",
    insights: [
      "Service/term contract mix stabilizes margins vs new-build only.",
      "Preferred GC status and negotiated/no-bid work move value.",
      "Estimator/PM systems and close-rate KPIs matter."
    ],
    comps: [
      "Illustrative 2025 LMM bands: EBITDA ~3.5–5.0× at $2–5M EV; ~4.5–6.0× at $5–30M EV.",
      "Premiums: multi-site programs, EMR ≤0.9, low punch-list costs."
    ],
    buyers: [
      "PE platforms in specialty trades",
      "Regional strategics building self-perform",
      "Independent sponsors with trade ops partners"
    ],
    pitfalls: [
      "Unpriced change orders, WIP errors, licensing gaps",
      "Field leadership concentration and overtime burn",
      "Warranty accruals under-reserved"
    ],
    cta: "We'll evidence service density, licensing, and WIP hygiene to support a premium outcome."
  },
  {
    slug: "hvac-plumbing",
    title: "HVAC & Plumbing Contractors",
    intro:
      "Term service agreements, replacement mix, and tech retention drive defensibility. The best shops show capacity planning and efficient dispatch.",
    insights: [
      "Membership plans and IAQ/upgrades increase attachment and NPS.",
      "Seasonality smoothing (maintenance cadence) supports cash predictability.",
      "Technician pipeline and apprenticeship reduce single-point risk."
    ],
    comps: [
      "Illustrative bands: EBITDA ~3.5–5.0× at $2–5M EV; ~4.5–6.5× at $5–30M EV.",
      "Premiums: service agreement density, high first-call close."
    ],
    buyers: [
      "PE-backed home services platforms",
      "Regional consolidators",
      "Independent sponsors with service ops advisors"
    ],
    pitfalls: [
      "Heavy new-construction exposure, callback/rework costs",
      "Unbalanced capacity planning, weak dispatch KPIs",
      "Licensing and code compliance gaps"
    ],
    cta: "We'll highlight service agreements, replacement mix, and technician bench to command a better multiple."
  },
  {
    slug: "landscaping-facilities",
    title: "Landscaping & Facilities Services",
    intro:
      "Route density, contract terms, and retention define value. Enhancements and snow push margin beyond base maintenance.",
    insights: [
      "Multi-year commercial contracts with CPI clauses stabilize margin.",
      "Route density and branch fill rates lower cost to serve.",
      "Enhancement mix and upsells increase contribution."
    ],
    comps: [
      "Illustrative bands: EBITDA ~3.0–4.5× at $2–5M EV; ~4.0–6.0× at $5–30M EV.",
      "Premiums: HOA/multi-site programs, low churn, strong safety."
    ],
    buyers: [
      "PE-backed facility services platforms",
      "Regionals adding density",
      "Sponsors with ops partners"
    ],
    pitfalls: [
      "Labor volatility, equipment maintenance backlogs",
      "Customer churn due to service quality",
      "Under-indexed pricing/escals on older contracts"
    ],
    cta: "We'll map route density, contract quality, and enhancement mix to support premium bids."
  },
  {
    slug: "healthcare-services",
    title: "Healthcare Services (Dental/MedSpa/MSO)",
    intro:
      "Buyers prize payer mix, clinical quality, and de-risked compliance. De novo growth and provider retention are central to underwriting.",
    insights: [
      "Payer mix (commercial vs Medicaid) and out-of-network exposure affect pricing.",
      "Provider retention and recruiting funnels lower integration risk.",
      "Compliance, coding, and documentation shortcuts diligence."
    ],
    comps: [
      "Illustrative bands: EBITDA ~5.0–8.0× across lower-MM multi-site services; higher for scaled MSOs.",
      "Premiums: recurring membership plans, strong clinical metrics, clean audits."
    ],
    buyers: [
      "DSOs/MSOs and PE-backed rollups",
      "Regional strategics",
      "Sponsors with clinical advisors"
    ],
    pitfalls: [
      "Compliance gaps (billing/coding), credentialing delays",
      "Provider concentration, churn, patient leakage",
      "Weak rev-cycle and denial management"
    ],
    cta: "We'll present clinical quality, payer mix, and retention so diligence is confidence-building, not chaotic."
  },
  {
    slug: "logistics-trucking",
    title: "Logistics & Trucking",
    intro:
      "Contract coverage, dedicated lanes, and safety/compliance define defensibility. Brokerage vs asset-based mix changes capital and risk.",
    insights: [
      "Contracted volumes and rate integrity beat spot exposure.",
      "Driver retention, safety scores, and insurance history drive screens.",
      "Telematics/dispatch discipline improves margins and visibility."
    ],
    comps: [
      "Illustrative bands: EBITDA ~3.0–4.5× at $2–5M EV; ~4.0–5.5× at $5–30M EV.",
      "Premiums: dedicated lanes, diversified customers, safety outperformance."
    ],
    buyers: [
      "Strategic carriers and 3PLs",
      "PE platforms consolidating lanes",
      "Sponsors with ops expertise"
    ],
    pitfalls: [
      "Insurance shocks, DOT/CSA issues",
      "Driver/owner-operator concentration",
      "Aging fleet and capex gaps"
    ],
    cta: "We'll evidence contract coverage, safety, and lane economics to support stronger offers."
  },
  {
    slug: "it-msp",
    title: "IT Managed Services (MSP)",
    intro:
      "ARR quality, logo retention, and security posture separate premium MSPs from project-heavy shops. Clean MSA/SLA data is essential.",
    insights: [
      "ARR/GRR/NRR and gross margin trump logo count.",
      "Security stack (SOC2/ISO, EDR, MFA) reduces diligence friction.",
      "Vertical specialization and packaged SKUs improve pricing power."
    ],
    comps: [
      "Illustrative bands: EBITDA ~5.0–8.0× for profitable MSPs in the LMM; some price partially on ARR multiples.",
      "Premiums: cyber-forward stack, low churn cohorts, high attach rates."
    ],
    buyers: [
      "PE platforms in MSP/cyber",
      "Regional strategics",
      "Sponsors with technical advisors"
    ],
    pitfalls: [
      "Blended project revenue obscuring true ARR",
      "Low data hygiene; missing cohort analytics",
      "Weak security/compliance slowing approvals"
    ],
    cta: "We'll separate ARR from projects and publish cohort math so buyers underwrite with confidence."
  },
  {
    slug: "staffing-industrial-services",
    title: "Staffing & Industrial Services",
    intro:
      "Fill rates, gross margin discipline, and safety drive value. Contract terms and customer concentration set the guardrails.",
    insights: [
      "MSA terms, mark-ups, and guaranteed hours define resilience.",
      "Vertical specialization and redeployment improve retention.",
      "Safety programs reduce claims and margin volatility."
    ],
    comps: [
      "Illustrative bands: EBITDA ~3.0–4.5× at $2–5M EV; ~4.0–5.5× at $5–30M EV.",
      "Premiums: low concentration, predictable redeployment, safety outperformance."
    ],
    buyers: [
      "PE-backed staffing platforms",
      "Regional consolidators",
      "Sponsors with ops partners"
    ],
    pitfalls: [
      "High workers' comp claims, compliance issues",
      "Overexposure to one or two sites/customers",
      "Uncollectible A/R and rate under-recovery"
    ],
    cta: "We'll evidence contract quality, redeployment, and safety to de-risk diligence and improve price."
  },
  {
    slug: "saas-tech-enabled-services",
    title: "SaaS & Tech-Enabled Services",
    intro:
      "Buyers separate true SaaS (contracted, net revenue retention) from services with tooling. Clean cohort data, security, and gross margin tell the truth.",
    insights: [
      "NRR/GRR and CAC payback trump top-line growth at small scale.",
      "Usage-based pricing and expansion revenue push valuation bands.",
      "Security posture (SOC2/ISO) shortcuts buyer approvals."
    ],
    comps: [
      "Illustrative bands: EBITDA ~6–10× for profitable; many price partially on ARR (~2–3×+) at small scale.",
      "Premiums: low churn cohorts, strong expansion, defensible IP."
    ],
    buyers: [
      "Vertical-SaaS strategics",
      "Growth/PE funds at smaller check sizes",
      "Search funds with technical advisors"
    ],
    pitfalls: [
      "Blended revenue obscuring true ARR vs services",
      "Low data hygiene; missing cohort analytics",
      "Weak security/compliance slowing approvals"
    ],
    cta: "We'll separate ARR from services and publish cohort math so diligence feels inevitable."
  }
];