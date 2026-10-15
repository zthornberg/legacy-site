# Legacy Business Brokers — website

Marketing site and broker portal for Legacy Business Brokers: sell-side M&A advisory for owners of lower-middle-market companies, and the licensing program behind a national network of brokers.

Stack: Vite · React 18 · TypeScript · Tailwind 3.4 · framer-motion · lucide-react · react-router 7. Deployed on Vercel (`vercel.json` rewrites every path to `index.html`).

```bash
npm ci          # install
npm run dev     # local dev server
npm run build   # production build to dist/
npm run lint    # eslint
npx tsc -p tsconfig.app.json --noEmit   # typecheck
```

## Design system

The site is built on a small, deliberate system. Read `tailwind.config.js` and `src/index.css` first.

- **Direction:** light "institutional fintech". Warm off-white surfaces, near-black ink type, hairline borders, tabular numerals, one restrained brass accent, ink bands for heroes and key CTAs. No stock photography, no glassmorphism, no decorative gradients.
- **Type:** Instrument Serif (display, weight 400 only) for headlines and large numbers; Inter for UI and body. Sizes: `text-display-2xl/xl/lg/md/sm`, `text-lede`, `.eyebrow`.
- **Color tokens:** `ink`, `paper` / `paper-deep`, `brass` (+ `brass-deep` for AA text, `brass-light` on ink, `brass-soft` borders, `brass-tint` backgrounds), `mute`, `line`. Never use raw `gray-*` / `slate-*` classes.
- **Kit (`src/components/ui`):** `Button`, `TextLink`, `Container`, `Section`, `Eyebrow`, `SectionHeading`, `Reveal`, `Stat`/`CountUp`, `Card`, `Badge`, `CheckList`, `PageHero`, `CtaBand`. Form fields use the `.field`, `.label`, `.hint` classes. Rendered markdown uses `.prose-legacy`.
- **Page anatomy:** `PageHero` → proof strip (when there are real numbers) → 2–4 sections alternating tone, each opened by `SectionHeading` → `CtaBand`. The header is sticky and in normal flow; pages do not add top padding.
- `src/lib/utils.ts` extends tailwind-merge so the custom font-size, shadow and max-width tokens survive `cn()`.

## Where content lives

| What | File |
| --- | --- |
| Home copy, stats, transactions, approach | `src/content/home.json` |
| Licensing tiers, comparison rows, assurance, disclaimers | `src/content/licensing.ts` (single source of truth; read by pricing, program and home) |
| Licensing page copy, FAQ, testimonials | `src/components/licensing/content.ts` |
| Sell / buy process phases | `src/content/process.ts` |
| Closed transactions | `src/components/sell/transactions.ts` |
| Representative listings | `src/components/buy/listings.ts` |
| Team bios and portraits | `src/data/team.ts` |
| Sector pages and sub-sector briefs | `src/content/industries/industries.json`, `src/content/industries.ts`, `src/components/industries/sectors.ts` |
| Insights (markdown with frontmatter) | `src/content/blog/*.md` |
| Route titles and meta descriptions | `src/lib/seo.ts` |

Photos live in `public/media` as WebP. The logo PNGs are the only PNGs that should remain there.

## Forms and portal

Contact, buyer registration, listing requests and the portal forms currently log to the console and show a confirmation state; there is no backend yet. The broker portal uses a mock `AuthContext` (demo credentials are shown on the login page in development builds only). `TypeformEmbed` activates when `VITE_TYPEFORM_FORM_ID` is set.
