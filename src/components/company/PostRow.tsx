import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { formatPostDate, type BlogPost } from '../../lib/blog';
import { cn } from '../../lib/utils';

/** Hairline list row for an insight: date, serif title, excerpt, author. Whole row links to the post. */
export default function PostRow({ post, compact = false }: { post: BlogPost; compact?: boolean }) {
  return (
    <Link
      to={`/company/blog/${post.slug}`}
      className={cn('group grid gap-3 md:grid-cols-12 md:gap-8', compact ? 'py-7' : 'py-8 md:py-10')}
    >
      <p className="tabular text-[13px] text-mute md:col-span-3 md:pt-1.5">
        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        <span aria-hidden> · </span>
        {post.readingTime}
      </p>
      <div className="md:col-span-8">
        <h3 className="font-display text-display-sm text-ink decoration-ink/30 underline-offset-[6px] group-hover:underline">
          {post.title}
        </h3>
        {post.excerpt && <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-mute">{post.excerpt}</p>}
        <p className="mt-3 text-[13px] text-mute-soft">By {post.author}</p>
      </div>
      <div className="hidden items-start justify-end md:col-span-1 md:flex md:pt-2">
        <ArrowRight
          className="h-4 w-4 text-mute-soft transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:text-ink"
          aria-hidden
        />
      </div>
    </Link>
  );
}
