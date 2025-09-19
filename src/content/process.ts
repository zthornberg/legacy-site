import type { ProcessPage } from "./types";

export const sellProcess: ProcessPage = {
  slug: "sell",
  title: "Sell-Side Process",
  subtitle: "A clean, confidential sale in 5 disciplined phases.",
  steps: [
    { title: "Preparation & Recast", duration: "Weeks 1–2",
      artifacts: ["NDA", "Info request list", "Financial recast", "Teaser outline"],
      details: [
        "Recast financials (add-backs, normalization) and align on narrative.",
        "Owner interview: goals, timing, and non-negotiables.",
        "Data hygiene checklist; close any easy gaps pre-market."
      ]},
    { title: "Packaging", duration: "Weeks 2–3",
      artifacts: ["Teaser (blind)", "CIM", "Q&A log", "Buyer list"],
      details: [
        "Draft a concise Teaser and detailed CIM with clear KPI story.",
        "Assemble buyer universe: PE/search/strategics; screen for fit.",
        "Tighten diligence folders; assign document owners."
      ]},
    { title: "Go-to-Market", duration: "Weeks 3–8",
      artifacts: ["NDA releases", "Buyer tracking", "Management call agenda"],
      details: [
        "Release Teaser under NDA, manage Q&A and buyer calls.",
        "Guide site visits and follow-ups; protect confidentiality.",
        "Request IOIs with price/structure ranges."
      ]},
    { title: "Select & Negotiate", duration: "Weeks 8–10",
      artifacts: ["LOI", "Diligence request list", "Deal timeline"],
      details: [
        "Down-select bidders, push to LOI with clean terms and timelines.",
        "Preference to buyers with financing certainty and cultural fit.",
        "Align on exclusivity, working capital, and closing conditions."
      ]},
    { title: "Diligence to Close", duration: "Weeks 10–16",
      artifacts: ["Data room", "Legal docs", "Closing checklist"],
      details: [
        "Project-manage diligence; unblock issues fast.",
        "Coordinate lender/legal/tax workstreams; maintain momentum.",
        "Close, fund, and plan the first 100 days."
      ]}
  ],
  cta: "Thinking 6–18 months ahead? Let's audit your add-backs and buyer map in a 20-minute fit call."
};

export const buyProcess: ProcessPage = {
  slug: "buy",
  title: "Buy-Side Process",
  subtitle: "From mandate to close, disciplined origination and underwriting.",
  steps: [
    { title: "Mandate & Thesis", duration: "Week 1",
      artifacts: ["Mandate doc", "IC criteria", "Target list framework"],
      details: [
        "Define size, sector, geography, and must-have traits.",
        "Translate thesis into quick screen criteria.",
        "Set a weekly origination cadence tied to decisions."
      ]},
    { title: "Sourcing", duration: "Weeks 1–6",
      artifacts: ["Outreach tracker", "Broker/owner call logs"],
      details: [
        "Campaign to owners and intermediaries; log signals immediately.",
        "Protect reputation with consistent follow-through.",
        "Prioritize proprietary and time-sensitive opportunities."
      ]},
    { title: "Evaluate & IOI", duration: "Weeks 2–8",
      artifacts: ["IOI", "Light model", "Risk memo"],
      details: [
        "Run quick financial screens and market checks.",
        "Draft IOIs tied to achievable diligence.",
        "Clarify working capital and debt assumptions early."
      ]},
    { title: "LOI & Diligence", duration: "Weeks 8–14",
      artifacts: ["LOI", "Confirmatory diligence list", "Lender pack"],
      details: [
        "Negotiate clean LOI, then move to confirmatory diligence.",
        "Coordinate QoE, legal, tax, and operational reviews.",
        "Lock financing and covenant headroom."
      ]},
    { title: "Closing & Integration", duration: "Weeks 14–20",
      artifacts: ["Closing deliverables", "Integration plan"],
      details: [
        "Finalize docs and close; fund the transaction.",
        "Execute a 100-day plan that protects customers and employees.",
        "Install reporting cadence and governance."
      ]}
  ],
  cta: "Have a clear mandate? We'll source and qualify deals to your standard—let's talk."
};