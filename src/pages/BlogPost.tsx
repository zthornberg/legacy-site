import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowUpRight, Check, Link2 } from 'lucide-react';
import { allPosts, formatPostDate, getBySlug, localCover } from '../lib/blog';
import { team } from '../data/team';
import { Badge, Button, Container, CtaBand, PageHero, Section, TextLink } from '../components/ui';
import PostRow from '../components/company/PostRow';
import Breadcrumbs from '../components/company/Breadcrumbs';
import TeamAvatar from '../components/team/TeamAvatar';

function ShareLinks({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const linkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
      <span className="text-mute">Share</span>
      <a
        href={linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Share “${title}” on LinkedIn (opens in a new tab)`}
        className="inline-flex items-center gap-1 font-medium text-ink underline decoration-ink/30 decoration-1 underline-offset-[5px] transition-colors hover:decoration-ink"
      >
        LinkedIn
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-1.5 rounded font-medium text-ink underline decoration-ink/30 decoration-1 underline-offset-[5px] transition-colors hover:decoration-ink"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-brass-deep" aria-hidden /> : <Link2 className="h-3.5 w-3.5" aria-hidden />}
        <span aria-live="polite">{copied ? 'Link copied' : 'Copy link'}</span>
      </button>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getBySlug(slug) : undefined;

  if (!post) {
    return (
      <PageHero
        tone="paper"
        crumbs={[{ label: 'Company' }, { label: 'Insights', to: '/company/blog' }, { label: 'Not found' }]}
        eyebrow="Insights"
        title="We couldn't find that article."
        lede="It may have been moved or renamed. Everything we've published is on the insights page."
        actions={
          <Button to="/company/blog" arrow>
            All insights
          </Button>
        }
      />
    );
  }

  const author = team.find((m) => m.name === post.author);
  const cover = localCover(post.cover);
  const more = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="border-b border-line bg-paper">
          <Container size="prose" className="pb-12 pt-10 md:pb-16 md:pt-12">
            <Breadcrumbs items={[{ label: 'Company' }, { label: 'Insights', to: '/company/blog' }, { label: 'Article' }]} />
            <p className="tabular mt-12 text-[13px] text-mute md:mt-16">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span aria-hidden> · </span>
              {post.readingTime}
              <span aria-hidden> · </span>
              {post.author}
            </p>
            <h1 className="mt-5 font-display text-display-xl text-ink">{post.title}</h1>
            {post.excerpt && <p className="mt-6 text-lede text-mute md:text-lede-lg">{post.excerpt}</p>}
            {post.tags && post.tags.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-1.5" aria-label="Topics">
                {post.tags.map((t) => (
                  <li key={t}>
                    <Badge tone="outline">{t}</Badge>
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </header>

        <Section tone="paper" className="pt-12 md:pt-16">
          <Container size="prose">
            {cover && <img src={cover} alt="" className="mb-12 w-full rounded-xl border border-line" />}
            <div className="prose-legacy [&>:first-child]:mt-0" dangerouslySetInnerHTML={{ __html: post.html }} />

            <footer className="mt-16 border-t border-line pt-8">
              <div className="flex items-center gap-4">
                {author ? (
                  <TeamAvatar name={author.name} src={author.headshot} focus={author.portrait} shape="circle" decorative />
                ) : null}
                <div>
                  <p className="text-[12px] text-mute">Written by</p>
                  {author ? (
                    <TextLink to={`/company/team/${author.id}`} arrow={false} className="mt-0.5">
                      {author.name}
                    </TextLink>
                  ) : (
                    <p className="mt-0.5 text-sm font-medium text-ink">{post.author}</p>
                  )}
                  {author && <p className="text-[13px] text-mute">{author.title}</p>}
                </div>
              </div>
              <div className="mt-8 flex flex-col-reverse gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                <TextLink to="/company/blog">All insights</TextLink>
                <ShareLinks title={post.title} />
              </div>
            </footer>
          </Container>
        </Section>
      </article>

      {more.length > 0 && (
        <Section tone="white" divider size="sm" aria-labelledby="more-heading">
          <Container size="prose">
            <div className="flex items-end justify-between gap-6 border-b border-line pb-4">
              <h2 id="more-heading" className="eyebrow text-brass-deep">
                Keep reading
              </h2>
              <TextLink to="/company/blog" tone="mute">
                All insights
              </TextLink>
            </div>
            <ul className="divide-y divide-line">
              {more.map((p) => (
                <li key={p.slug}>
                  <PostRow post={p} compact />
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

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
