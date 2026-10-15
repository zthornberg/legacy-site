import type { ProcessPage } from "./types";

export const sellProcess: ProcessPage = {
  slug: "sell",
  title: "Five phases from recast to close.",
  subtitle:
    "A confidential sale run in disciplined phases, each with clear owners, documents and decisions. Timelines are indicative and move with deal complexity.",
  steps: [
    { title: "Preparation & recast", duration: "Weeks 1–2",
      artifacts: ["NDA", "Info request list", "Financial recast", "Teaser outline"],
      details: [
        "Recast financials (add-backs, normalization) and align on the narrative.",
        "Owner interview: goals, timing and non-negotiables.",
        "Data hygiene checklist; close the easy gaps before going to market."
      ]},
    { title: "Packaging", duration: "Weeks 2–3",
      artifacts: ["Blind teaser", "CIM", "Q&A log", "Buyer list"],
      details: [
        "Draft a concise teaser and a detailed CIM with a clear KPI story.",
        "Assemble the buyer universe (PE, search funds, strategics) and screen for fit.",
        "Tighten diligence folders and assign document owners."
      ]},
    { title: "Go to market", duration: "Weeks 3–8",
      artifacts: ["NDA releases", "Buyer tracking", "Management call agenda"],
      details: [
        "Release the teaser under NDA; manage Q&A and buyer calls.",
        "Guide site visits and follow-ups while protecting confidentiality.",
        "Request IOIs with price and structure ranges."
      ]},
    { title: "Select & negotiate", duration: "Weeks 8–10",
      artifacts: ["LOI", "Diligence request list", "Deal timeline"],
      details: [
        "Down-select bidders and push to an LOI with clean terms and timelines.",
        "Favor buyers with financing certainty and cultural fit.",
        "Align on exclusivity, working capital and closing conditions."
      ]},
    { title: "Diligence to close", duration: "Weeks 10–16",
      artifacts: ["Data room", "Legal docs", "Closing checklist"],
      details: [
        "Project-manage diligence and unblock issues fast.",
        "Coordinate lender, legal and tax workstreams to keep momentum.",
        "Close, fund and plan the first 100 days."
      ]}
  ],
  cta: "Thinking 6–18 months ahead? We'll audit your add-backs and buyer map in a 20-minute fit call."
};

export const buyProcess: ProcessPage = {
  slug: "buy",
  title: "Five phases from mandate to close.",
  subtitle:
    "Disciplined origination and underwriting, from the first screen to the first 100 days. Timelines are indicative and move with deal complexity.",
  steps: [
    { title: "Mandate & thesis", duration: "Week 1",
      artifacts: ["Mandate doc", "IC criteria", "Target list framework"],
      details: [
        "Define size, sector, geography and must-have traits.",
        "Translate the thesis into quick screening criteria.",
        "Set a weekly origination cadence tied to decisions."
      ]},
    { title: "Sourcing", duration: "Weeks 1–6",
      artifacts: ["Outreach tracker", "Broker and owner call logs"],
      details: [
        "Campaign to owners and intermediaries; log signals immediately.",
        "Protect your reputation with consistent follow-through.",
        "Prioritize proprietary and time-sensitive opportunities."
      ]},
    { title: "Evaluate & IOI", duration: "Weeks 2–8",
      artifacts: ["IOI", "Light model", "Risk memo"],
      details: [
        "Run quick financial screens and market checks.",
        "Draft IOIs tied to achievable diligence.",
        "Clarify working capital and debt assumptions early."
      ]},
    { title: "LOI & diligence", duration: "Weeks 8–14",
      artifacts: ["LOI", "Confirmatory diligence list", "Lender pack"],
      details: [
        "Negotiate a clean LOI, then move to confirmatory diligence.",
        "Coordinate QoE, legal, tax and operational reviews.",
        "Lock financing and covenant headroom."
      ]},
    { title: "Closing & integration", duration: "Weeks 14–20",
      artifacts: ["Closing deliverables", "Integration plan"],
      details: [
        "Finalize documents and close; fund the transaction.",
        "Execute a 100-day plan that protects customers and employees.",
        "Install a reporting cadence and governance."
      ]}
  ],
  cta: "Have a clear mandate? We'll source and qualify deals to your standard."
};
