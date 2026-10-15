import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart3, Building2, FilePlus2, FileText, LayoutGrid, Users, type LucideIcon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { cn } from '../../lib/utils';
import Container from '../ui/Container';
import Eyebrow from '../ui/Eyebrow';

type Tool = { label: string; to: string; icon: LucideIcon; end?: boolean };

const TOOLS: Tool[] = [
  { label: 'Dashboard', to: '/portal', icon: LayoutGrid, end: true },
  { label: 'Document library', to: '/portal/documents', icon: FileText },
  { label: 'Listing submission', to: '/portal/listing-submission', icon: FilePlus2 },
  { label: 'Buyer network', to: '/portal/buyer-search', icon: Users },
  { label: 'Private equity', to: '/portal/pe-request', icon: Building2 },
  { label: 'Market research', to: '/portal/market-research', icon: BarChart3 },
];

const iconProps = { size: 18, strokeWidth: 1.75, 'aria-hidden': true } as const;

/** Horizontal, scrollable tab row for small screens. Keeps the active tab in view. */
function MobileTabs() {
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scroller.current;
    const active = el?.querySelector<HTMLElement>('[aria-current="page"]');
    if (el && active) el.scrollLeft = active.offsetLeft - (el.clientWidth - active.offsetWidth) / 2;
  }, []);

  return (
    <div className="sticky top-16 z-30 border-b border-line bg-paper lg:hidden">
      <nav aria-label="Portal">
        <div ref={scroller} className="no-scrollbar flex gap-1 overflow-x-auto px-5 py-2.5 sm:px-6">
          {TOOLS.map(({ label, to, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                cn(
                  'inline-flex h-9 shrink-0 items-center gap-2 rounded-lg px-3 text-[13px] font-medium transition-colors duration-200',
                  isActive ? 'bg-paper-deep text-ink' : 'text-mute hover:text-ink'
                )
              }
            >
              <Icon {...iconProps} size={16} />
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}

function SideNav() {
  const { user } = useAuth();
  return (
    <div className="sticky top-16 py-10 pr-6">
      {user && (
        <div className="mb-8 px-3">
          <Eyebrow tone="mute" as="p">
            Signed in
          </Eyebrow>
          <p className="mt-2.5 text-sm font-medium text-ink">{user.name}</p>
          <p className="mt-0.5 truncate text-[13px] text-mute">{user.email}</p>
        </div>
      )}
      <nav aria-label="Portal">
        <ul className="space-y-0.5">
          {TOOLS.map(({ label, to, icon: Icon, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  cn(
                    'flex h-10 items-center gap-3 rounded-lg px-3 text-sm transition-colors duration-200',
                    isActive ? 'bg-paper-deep font-medium text-ink' : 'text-mute-strong hover:bg-paper-deep/60 hover:text-ink'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon {...iconProps} className={isActive ? 'text-ink' : 'text-mute'} />
                    {label}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

/**
 * Authenticated app layout for the broker portal: left tool nav (lg+) or a scrollable tab row (mobile),
 * and a content column opened by a serif page title with optional actions.
 */
export default function PortalShell({
  eyebrow,
  title,
  description,
  actions,
  children,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[calc(100svh-4rem)] bg-paper">
      <MobileTabs />
      <Container size="wide" className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="hidden border-r border-line lg:block">
          <SideNav />
        </aside>
        <div className="min-w-0 pb-16 pt-8 md:pt-10 lg:pb-20 lg:pl-10 lg:pt-10 motion-safe:animate-fade-in">
          <div className="mb-8 flex flex-col gap-5 border-b border-line pb-7 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
              <h1 className="font-display text-display-md text-ink">{title}</h1>
              {description && <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-mute">{description}</p>}
            </div>
            {actions && <div className="flex shrink-0 flex-wrap gap-2.5">{actions}</div>}
          </div>
          {children}
        </div>
      </Container>
    </div>
  );
}
