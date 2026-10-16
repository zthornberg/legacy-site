import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { formatPostDate, type BlogPost } from '../../lib/blog';
import { cn } from '../../lib/utils';

function PostMeta({ post, className }: { post: BlogPost; className?: string }) {
  return (
    <p className={cn('tabular text-[13px] text-mute', className)}>
      <time dateTime={post.date} className="whitespace-nowrap">
        {formatPostDate(post.date)}
      </time>
      <span aria-hidden> · </span>
      <span className="whitespace-nowrap">{post.readingTime}</span>
    </p>
  );
}

function RowArrow({ className }: { className?: string }) {
  return (
    <ArrowRight
      className={cn(
        'h-4 w-4 shrink-0 text-mute-soft transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:text-ink',
        className
      )}
      aria-hidden
    />
  );
}

/**
 * Hairline list row for an insight: date, serif title, excerpt, author. Whole row links to the post.
 * `compact` (narrow prose columns) stacks the meta above the title instead of using the 12-col grid.
 */
export default function PostRow({ post, compact = false }: { post: BlogPost; compact?: boolean }) {
  const title = (
    <h3 className="font-display text-display-sm text-ink decoration-ink/30 underline-offset-[6px] group-hover:underline">
      {post.title}
    </h3>
  );
  const excerpt = post.excerpt && <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-mute">{post.excerpt}</p>;
  const byline = <p className="mt-3 text-[13px] text-mute-soft">By {post.author}</p>;

  if (compact) {
    return (
      <Link to={`/company/blog/${post.slug}`} className="group flex flex-col gap-2 py-7">
        <PostMeta post={post} />
        <div>
          <div className="flex items-start justify-between gap-6">
            {title}
            <RowArrow className="mt-2 hidden sm:block" />
          </div>
          {excerpt}
          {byline}
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/company/blog/${post.slug}`} className="group grid gap-3 py-8 md:grid-cols-12 md:gap-8 md:py-10">
      <PostMeta post={post} className="md:col-span-3 md:pt-1.5" />
      <div className="md:col-span-8">
        {title}
        {excerpt}
        {byline}
      </div>
      <div className="hidden items-start justify-end md:col-span-1 md:flex md:pt-2">
        <RowArrow />
      </div>
    </Link>
  );
}
