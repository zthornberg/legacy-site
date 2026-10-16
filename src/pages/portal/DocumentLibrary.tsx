import React, { useState } from 'react';
import { Download, File, FileText, Search, Video } from 'lucide-react';
import { Badge, Button, Card } from '../../components/ui';
import PortalShell from '../../components/portal/PortalShell';
import { SITE_EMAIL } from '../../lib/site';
import { cn } from '../../lib/utils';

/** Files with a real URL download directly; the rest open a request to HQ instead of a dead button. */
const docAction = (doc: { title: string; downloadUrl: string }) =>
  doc.downloadUrl && doc.downloadUrl !== '#'
    ? { href: doc.downloadUrl, label: 'Download' }
    : {
        href: `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(`Document request: ${doc.title}`)}`,
        label: 'Request file',
      };

interface Document {
  id: string;
  title: string;
  category: string;
  type: 'pdf' | 'video' | 'template' | 'guide';
  size: string;
  lastUpdated: string;
  downloadUrl: string;
}

const documents: Document[] = [
  {
    id: '1',
    title: 'Business Valuation Template',
    category: 'Templates',
    type: 'pdf',
    size: '2.4 MB',
    lastUpdated: '2025-01-10',
    downloadUrl: '#',
  },
  {
    id: '2',
    title: 'Negotiation Strategies Training',
    category: 'Training',
    type: 'video',
    size: '156 MB',
    lastUpdated: '2025-01-08',
    downloadUrl: '#',
  },
  {
    id: '3',
    title: 'Purchase Agreement Template',
    category: 'Legal',
    type: 'template',
    size: '1.2 MB',
    lastUpdated: '2025-01-05',
    downloadUrl: '#',
  },
  {
    id: '4',
    title: 'Market Analysis Guide',
    category: 'Guides',
    type: 'guide',
    size: '5.1 MB',
    lastUpdated: '2025-01-03',
    downloadUrl: '#',
  },
];

const categories = ['All', 'Training', 'Templates', 'Legal', 'Guides', 'Marketing'];

const typeLabel: Record<Document['type'], string> = {
  pdf: 'PDF',
  video: 'Video',
  template: 'Template',
  guide: 'Guide',
};

function FileIcon({ type }: { type: Document['type'] }) {
  const Icon = type === 'video' ? Video : type === 'template' ? File : FileText;
  return <Icon size={18} strokeWidth={1.75} className="shrink-0 text-mute" aria-hidden />;
}

// ISO dates are parsed as UTC; format in UTC so "2025-01-10" never renders as Jan 9.
const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

const DocumentLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  return (
    <PortalShell
      eyebrow="Resources"
      title="Document library"
      description="Training materials, templates, legal documents and marketing resources for your practice."
    >
      {/* Search and filters */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <label htmlFor="doc-search" className="sr-only">
            Search documents
          </label>
          <Search
            size={16}
            strokeWidth={1.75}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-mute-soft"
            aria-hidden
          />
          <input
            id="doc-search"
            type="search"
            placeholder="Search documents"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="field pl-10"
          />
        </div>

        <div role="group" aria-label="Filter by category" className="no-scrollbar -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div className="flex w-max gap-1 rounded-lg border border-line bg-white p-1">
            {categories.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    'h-8 rounded-md px-3 text-[13px] font-medium transition-colors duration-200',
                    active ? 'bg-ink text-paper' : 'text-mute hover:bg-paper-deep hover:text-ink'
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <p className="tabular mt-6 text-[13px] text-mute" aria-live="polite">
        {filteredDocuments.length} {filteredDocuments.length === 1 ? 'document' : 'documents'}
        {selectedCategory !== 'All' && ` in ${selectedCategory}`}
      </p>

      {filteredDocuments.length > 0 ? (
        <Card padding="none" className="mt-3 overflow-hidden">
          {/* Desktop: hairline table */}
          <table className="hidden w-full text-left md:table">
            <thead>
              <tr className="border-b border-line bg-paper text-[11px] uppercase tracking-[0.14em] text-mute">
                <th scope="col" className="px-5 py-3 font-medium">
                  Document
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Category
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Type
                </th>
                <th scope="col" className="px-5 py-3 text-right font-medium">
                  Size
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Updated
                </th>
                <th scope="col" className="px-5 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {filteredDocuments.map((doc) => (
                <tr key={doc.id} className="transition-colors duration-150 hover:bg-paper/70">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <FileIcon type={doc.type} />
                      <span className="text-sm font-medium text-ink">{doc.title}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-mute-strong">{doc.category}</td>
                  <td className="px-5 py-4">
                    <Badge>{typeLabel[doc.type]}</Badge>
                  </td>
                  <td className="tabular px-5 py-4 text-right text-sm text-mute-strong">{doc.size}</td>
                  <td className="tabular whitespace-nowrap px-5 py-4 text-sm text-mute-strong">{formatDate(doc.lastUpdated)}</td>
                  <td className="px-5 py-4 text-right">
                    <Button
                      variant="secondary"
                      size="sm"
                      icon={<Download size={14} strokeWidth={1.75} aria-hidden />}
                      href={docAction(doc).href}
                      aria-label={`${docAction(doc).label}: ${doc.title}`}
                    >
                      {docAction(doc).label}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile: stacked rows */}
          <ul className="divide-y divide-line md:hidden">
            {filteredDocuments.map((doc) => (
              <li key={doc.id} className="p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5">
                    <FileIcon type={doc.type} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-ink">{doc.title}</p>
                    <p className="tabular mt-1 text-[13px] text-mute">
                      {doc.category} · {typeLabel[doc.type]} · {doc.size} · {formatDate(doc.lastUpdated)}
                    </p>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  full
                  className="mt-4"
                  icon={<Download size={14} strokeWidth={1.75} aria-hidden />}
                  href={docAction(doc).href}
                  aria-label={`${docAction(doc).label}: ${doc.title}`}
                >
                  {docAction(doc).label}
                </Button>
              </li>
            ))}
          </ul>
        </Card>
      ) : (
        <Card tone="paper" padding="lg" className="mt-3 text-center">
          <h2 className="font-display text-display-sm text-ink">No documents found</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-mute">Try adjusting your search terms or category filter.</p>
          <Button variant="secondary" size="sm" className="mt-6" onClick={clearFilters}>
            Clear filters
          </Button>
        </Card>
      )}
    </PortalShell>
  );
};

export default DocumentLibrary;
