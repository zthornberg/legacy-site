import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { cn } from '../../lib/utils';
import { EASE } from '../../lib/motion';
import Button from '../ui/Button';

type NavItem = { label: string; href: string; desc?: string };
type NavGroup = {
  label: string;
  href: string;
  /** Extra path prefixes that count as "inside" this group for the active state. */
  match?: string[];
  items: NavItem[];
  columns?: 1 | 2;
  footer?: NavItem;
};

const NAV: NavGroup[] = [
  {
    label: 'Sell',
    href: '/sell/brokerage',
    match: ['/case-studies'],
    items: [
      { label: 'Brokerage services', href: '/sell/brokerage', desc: 'A confidential, competitive sale process for $1M–$25M companies' },
      { label: 'M&A advisory', href: '/sell/ma-services', desc: 'Sell-side advisory for larger and more complex mandates' },
      { label: 'Closed transactions', href: '/sell/case-studies', desc: 'Representative outcomes across industries' },
    ],
  },
  {
    label: 'Buy',
    href: '/buy/listings',
    items: [
      { label: 'Current listings', href: '/buy/listings', desc: 'Businesses currently on the market with Legacy' },
      { label: 'Buyer representation', href: '/buy/representation', desc: 'Buy-side search, underwriting and negotiation' },
      { label: 'Register as a buyer', href: '/buy/registration', desc: 'Join the buyer network and see deals first' },
    ],
  },
  {
    label: 'Licensing',
    href: '/licensing/program',
    items: [
      { label: 'Program overview', href: '/licensing/program', desc: 'Build an M&A practice on the Legacy platform' },
      { label: 'Pricing', href: '/licensing/pricing', desc: 'Two license tiers, one standard of support' },
      { label: 'Broker stories', href: '/licensing/testimonials', desc: 'What licensed brokers say about the program' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    columns: 2,
    items: [
      { label: 'Manufacturing & Distribution', href: '/industries/manufacturing-distribution' },
      { label: 'Construction', href: '/industries/construction' },
      { label: 'Home Services', href: '/industries/home-services' },
      { label: 'Business Services', href: '/industries/business-services' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Technology', href: '/industries/technology' },
      { label: 'Energy & Sustainability', href: '/industries/energy-sustainability' },
      { label: 'Retail & Consumer', href: '/industries/retail-consumer' },
      { label: 'Hospitality', href: '/industries/hospitality' },
      { label: 'Startup Funding', href: '/industries/startup-funding' },
    ],
    footer: { label: 'All industries', href: '/industries' },
  },
  {
    label: 'Company',
    href: '/company/team',
    match: ['/contact', '/blog'],
    items: [
      { label: 'Our team', href: '/company/team', desc: 'The advisors and operators behind Legacy' },
      { label: 'Insights', href: '/company/blog', desc: 'Playbooks and market notes from the team' },
      { label: 'Contact', href: '/contact', desc: 'Start a confidential conversation' },
    ],
  },
];

const LOGO = '/media/Horizontal Logo High Res.png';

function Logo({ className, inverse = false }: { className?: string; inverse?: boolean }) {
  return (
    <Link to="/" className={cn('inline-flex items-center shrink-0', className)} aria-label="Legacy Business Brokers — home">
      <img src={LOGO} alt="Legacy Business Brokers" className={cn('h-8 w-auto', inverse && 'invert')} draggable={false} />
    </Link>
  );
}

/* ----------------------------------------------------------------- desktop */

function DesktopGroup({ group, open, onOpen, onClose }: { group: NavGroup; open: boolean; onOpen: () => void; onClose: () => void }) {
  const location = useLocation();
  const prefixes = [group.href.split('/').slice(0, 2).join('/'), ...(group.match ?? [])];
  const active = prefixes.some((p) => location.pathname.startsWith(p));
  const reduce = useReducedMotion();
  const timer = useRef<number | null>(null);

  const enter = () => {
    if (timer.current) window.clearTimeout(timer.current);
    onOpen();
  };
  const leave = () => {
    timer.current = window.setTimeout(onClose, 140);
  };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => (open ? onClose() : onOpen())}
        className={cn(
          'inline-flex h-9 items-center gap-1 rounded-md px-3 text-sm font-medium transition-colors duration-200',
          active || open ? 'text-ink' : 'text-mute-strong hover:text-ink'
        )}
      >
        {group.label}
        <ChevronDown className={cn('h-3.5 w-3.5 opacity-60 transition-transform duration-200', open && 'rotate-180')} aria-hidden />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 4, scale: 0.985 }}
            transition={{ duration: 0.18, ease: EASE }}
            className={cn(
              'absolute left-0 top-full pt-2',
              group.columns === 2 ? 'w-[34rem]' : 'w-80'
            )}
          >
            <div className="rounded-xl border border-line bg-white p-2 shadow-lift">
              <div className={cn('grid gap-0.5', group.columns === 2 && 'grid-cols-2')}>
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    role="menuitem"
                    onClick={onClose}
                    className="group/item block rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-paper-deep"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[14px] font-medium text-ink">{item.label}</span>
                      {!item.desc && (
                        <ArrowRight className="h-3.5 w-3.5 text-mute-soft opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0" aria-hidden />
                      )}
                    </div>
                    {item.desc && <div className="mt-0.5 text-[13px] leading-snug text-mute">{item.desc}</div>}
                  </Link>
                ))}
              </div>
              {group.footer && (
                <div className="mt-1 border-t border-line pt-1">
                  <Link
                    to={group.footer.href}
                    role="menuitem"
                    onClick={onClose}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] font-medium text-brass-deep transition-colors hover:bg-paper-deep"
                  >
                    {group.footer.label}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ mobile */

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="sheet"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] bg-paper lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="flex h-16 items-center justify-between border-b border-line px-5">
            <Logo />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-paper-deep"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <motion.nav
            initial={reduce ? {} : { y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: EASE, delay: 0.05 }}
            className="flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto px-5 pb-8"
          >
            <ul className="divide-y divide-line">
              {NAV.map((group) => {
                const isOpen = expanded === group.label;
                return (
                  <li key={group.label}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setExpanded(isOpen ? null : group.label)}
                      className="flex w-full items-center justify-between py-4 text-left font-display text-2xl text-ink"
                    >
                      {group.label}
                      <ChevronDown className={cn('h-5 w-5 text-mute transition-transform duration-200', isOpen && 'rotate-180')} aria-hidden />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <ul className={cn('pb-4', group.columns === 2 && 'grid grid-cols-2 gap-x-4')}>
                            {group.items.map((item) => (
                              <li key={item.href}>
                                <Link to={item.href} onClick={onClose} className="block py-2 text-[15px] text-mute-strong hover:text-ink">
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                            {group.footer && (
                              <li className={cn(group.columns === 2 && 'col-span-2')}>
                                <Link to={group.footer.href} onClick={onClose} className="inline-flex items-center gap-1.5 py-2 text-[15px] font-medium text-brass-deep">
                                  {group.footer.label} <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                              </li>
                            )}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
            <div className="mt-auto space-y-3 pt-8">
              <Button to="/contact" full size="lg" onClick={onClose} arrow>
                Request a confidential valuation
              </Button>
              <Button to="/licensing/program" variant="secondary" full size="lg" onClick={onClose}>
                Explore the licensing program
              </Button>
              <Link to="/portal/login" onClick={onClose} className="block pt-2 text-center text-sm text-mute hover:text-ink">
                Broker login
              </Link>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ header */

export default function Header() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  const isPortal = location.pathname.startsWith('/portal');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpenGroup(null);
    setMobileOpen(false);
  }, [location.pathname]);

  // Escape / outside click
  const closeAll = useCallback(() => setOpenGroup(null), []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeAll();
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) closeAll();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [closeAll]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <header
        ref={rootRef}
        className={cn(
          'sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300',
          scrolled ? 'border-line bg-paper/85 backdrop-blur-md' : 'border-transparent bg-paper'
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-wide items-center gap-6 px-5 sm:px-6 lg:px-8">
          <Logo />

          {isPortal ? (
            <div className="ml-auto flex items-center gap-4">
              <span className="hidden text-sm text-mute sm:inline">Broker portal</span>
              <NavLink to="/" className="text-sm text-mute-strong hover:text-ink">
                Public site
              </NavLink>
              {user && (
                <Button size="sm" variant="secondary" onClick={logout}>
                  Sign out
                </Button>
              )}
            </div>
          ) : (
            <>
              <nav className="ml-2 hidden items-center gap-0.5 lg:flex" aria-label="Primary">
                {NAV.map((group) => (
                  <DesktopGroup
                    key={group.label}
                    group={group}
                    open={openGroup === group.label}
                    onOpen={() => setOpenGroup(group.label)}
                    onClose={() => setOpenGroup((g) => (g === group.label ? null : g))}
                  />
                ))}
              </nav>

              <div className="ml-auto hidden items-center gap-2 lg:flex">
                <Link to="/portal/login" className="px-3 text-sm font-medium text-mute-strong transition-colors hover:text-ink">
                  Broker login
                </Link>
                <Button to="/contact" size="sm" arrow>
                  Get a valuation
                </Button>
              </div>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="-mr-2 ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-paper-deep lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </header>
      {!isPortal && <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />}
    </>
  );
}
