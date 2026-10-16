import { useMemo, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { allPosts, formatPostDate, getAllTags, type BlogPost } from '../lib/blog';
import { Badge, Button, Card, Container, CtaBand, Eyebrow, PageHero, Reveal, Section } from '../components/ui';
import PostRow from '../components/company/PostRow';
import { cn } from '../lib/utils';

function TagChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        'inline-flex h-8 items-center rounded-full border px-3.5 text-[13px] font-medium transition-colors duration-200',
        active ? 'border-ink bg-ink text-paper' : 'border-line-strong text-mute-strong hover:border-ink/40 hover:text-ink'
      )}
    >
      {label}
    </button>
  );
}

function Meta({ post, className }: { post: BlogPost; className?: string }) {
  return (
    <p className={cn('tabular text-[13px] text-mute', className)}>
      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
      <span aria-hidden> · </span>
      {post.readingTime}
    </p>
  );
}

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Card hover to={`/company/blog/${post.slug}`} padding="none" className="overflow-hidden">
      <div className="grid lg:grid-cols-12">
        <div className="flex flex-col p-6 sm:p-8 md:p-10 lg:col-span-7 lg:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="brass">Latest</Badge>
            <Meta post={post} />
          </div>
          <h2 className="mt-8 font-display text-display-md text-ink md:mt-10">{post.title}</h2>
          {post.excerpt && <p className="mt-4 max-w-xl text-lede text-mute">{post.excerpt}</p>}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 md:mt-auto md:pt-12">
            <span className="text-[13px] text-mute">By {post.author}</span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink">
              Read the article
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
            </span>
          </div>
        </div>
        {post.outline.length > 0 && (
          <div className="border-t border-line bg-paper p-6 sm:p-8 md:p-10 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-12">
            <Eyebrow tone="mute" as="p">
              In this article
            </Eyebrow>
            <ol className="mt-5 divide-y divide-line border-y border-line">
              {post.outline.map((h, i) => (
                <li key={`${i}-${h}`} className="flex items-baseline gap-4 py-3.5 text-[15px] text-ink/85">
                  <span className="tabular w-5 shrink-0 text-[12px] text-mute-soft">{String(i + 1).padStart(2, '0')}</span>
                  {h}
                </li>
              ))}
            </ol>
            {post.tags && post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-1.5">
                {post.tags.map((t) => (
                  <Badge key={t} tone="outline">
                    {t}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}

export default function BlogIndex() {
  const tags = getAllTags();
  const [q, setQ] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return allPosts.filter((p) => {
      const hit =
        !needle ||
        p.title.toLowerCase().includes(needle) ||
        (p.excerpt || '').toLowerCase().includes(needle) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(needle));
      const tagOk = !activeTag || (p.tags || []).includes(activeTag);
      return hit && tagOk;
    });
  }, [q, activeTag]);

  const filtering = q.trim() !== '' || activeTag !== null;
  const featured = filtering ? undefined : filtered[0];
  const rest = featured ? filtered.slice(1) : filtered;
  const clear = () => {
    setQ('');
    setActiveTag(null);
  };

  return (
    <>
      <PageHero
        tone="paper"
        size="sm"
        eyebrow="Company · Insights"
        title="Notes from the deal desk."
        lede="Practical M&A playbooks, valuation notes, and market commentary from the Legacy team."
      />

      <Section tone="paper" className="pt-10 md:pt-12">
        <Container>
          {/* Controls */}
          <div className="flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between">
            <div role="group" aria-label="Filter by topic" className="flex flex-wrap gap-2">
              <TagChip label="All" active={!activeTag} onClick={() => setActiveTag(null)} />
              {tags.map((t) => (
                <TagChip key={t} label={t} active={activeTag === t} onClick={() => setActiveTag(activeTag === t ? null : t)} />
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <label htmlFor="insights-search" className="sr-only">
                Search insights
              </label>
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-mute-soft" aria-hidden />
              <input
                id="insights-search"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search insights"
                className="field pl-10"
                autoComplete="off"
              />
            </div>
          </div>
          <p className="sr-only" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'article' : 'articles'} shown
          </p>

          {featured && (
            <Reveal className="mt-10 md:mt-12">
              <FeaturedPost post={featured} />
            </Reveal>
          )}

          {rest.length > 0 && (
            <div className={cn(featured ? 'mt-16 md:mt-20' : 'mt-10 md:mt-12')}>
              <div className="flex items-end justify-between gap-6 border-b border-line pb-4">
                <h2 className="eyebrow text-brass-deep">{filtering ? 'Results' : 'More insights'}</h2>
                <span className="tabular text-[13px] text-mute">
                  {rest.length} {rest.length === 1 ? 'article' : 'articles'}
                </span>
              </div>
              <ul className="divide-y divide-line border-b border-line">
                {rest.map((p, i) => (
                  <Reveal as="li" key={p.slug} delay={Math.min(i, 4) * 0.06}>
                    <PostRow post={p} />
                  </Reveal>
                ))}
              </ul>
            </div>
          )}

          {filtered.length === 0 && (
            <Card tone="deep" padding="lg" className="mt-10 text-center md:mt-12">
              <h2 className="font-display text-display-sm text-ink">No insights match that search.</h2>
              <p className="mt-2 text-[15px] text-mute">Try a broader term or a different topic.</p>
              <div className="mt-6 flex justify-center">
                <Button variant="secondary" size="sm" onClick={clear}>
                  Clear filters
                </Button>
              </div>
            </Card>
          )}
        </Container>
      </Section>

      <CtaBand
        title="Put the playbook to work on your company."
        body="Request a confidential valuation and we'll walk through where your business sits in today's market, and what would move the number."
        actions={
          <Button to="/contact?intent=sell" size="lg" arrow>
            Request a confidential valuation
          </Button>
        }
      />
    </>
  );
}
