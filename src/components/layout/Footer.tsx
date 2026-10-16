import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import Container from '../ui/Container';

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Sell',
    links: [
      { label: 'Brokerage services', href: '/sell/brokerage' },
      { label: 'M&A advisory', href: '/sell/ma-services' },
      { label: 'Closed transactions', href: '/sell/case-studies' },
      { label: 'Request a valuation', href: '/contact?intent=sell' },
    ],
  },
  {
    title: 'Buy',
    links: [
      { label: 'Current listings', href: '/buy/listings' },
      { label: 'Buyer representation', href: '/buy/representation' },
      { label: 'Register as a buyer', href: '/buy/registration' },
    ],
  },
  {
    title: 'Licensing',
    links: [
      { label: 'Program overview', href: '/licensing/program' },
      { label: 'Pricing', href: '/licensing/pricing' },
      { label: 'Broker stories', href: '/licensing/testimonials' },
      { label: 'Broker login', href: '/portal/login' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our team', href: '/company/team' },
      { label: 'Industries', href: '/industries' },
      { label: 'Insights', href: '/company/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper">
      <Container className="pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex" aria-label="Legacy Business Brokers — home">
              <img src="/media/Horizontal Logo High Res.png" alt="Legacy Business Brokers" className="h-7 w-auto invert" draggable={false} />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/60">
              Senior M&amp;A advisory for owners of lower-middle-market companies, and the platform behind a national network
              of licensed brokers.
            </p>
            <div className="mt-6 space-y-1.5 text-sm">
              <a href="mailto:info@legacybrokers.com" className="block text-paper/80 transition-colors hover:text-paper">
                info@legacybrokers.com
              </a>
              <p className="text-paper/50">Scottsdale, Arizona · Serving owners nationwide</p>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="eyebrow text-brass-light">{col.title}</h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link to={l.href} className="text-sm text-paper/70 transition-colors hover:text-paper">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 border-t border-line-inverse pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <p className="max-w-3xl text-xs leading-relaxed text-paper/40">
              Legacy is a licensing program, not a franchise. Licensees operate independent businesses and are solely
              responsible for their services. Transaction examples are illustrative, anonymized, and not a promise of future
              results. Legacy does not disclose client financial statements.
            </p>
            <a
              href="https://linkedin.com/company/legacy-brokers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Legacy on LinkedIn"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line-inverse text-paper/60 transition-colors hover:border-line-inverse-strong hover:text-paper"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-xs text-paper/40">© {year} Legacy Business Brokers. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
