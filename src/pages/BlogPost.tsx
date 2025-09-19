import { useParams, Link } from "react-router-dom";
import { getBySlug } from "../lib/blog";

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="pt-20 bg-white">
        <section className="mx-auto max-w-screen-md px-4 md:px-6 py-20 text-center">
          <h1 className="text-2xl font-semibold text-slate-900">Article not found</h1>
          <p className="mt-2 text-slate-600">It may have been moved or renamed.</p>
          <Link to="/company/blog" className="mt-6 inline-block rounded-lg bg-slate-900 text-white px-4 py-2">Back to Blog</Link>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white">
      <article className="mx-auto max-w-screen-md px-4 md:px-6 py-10">
        {post.cover && (
          <img className="mb-6 h-64 w-full rounded-2xl object-cover" src={post.cover} alt="" />
        )}
        <header>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{post.title}</h1>
          {post.tags && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {post.tags.map(t => (
                <span key={t} className="rounded-full bg-slate-100 text-slate-700 px-2 py-0.5 text-[11px]">{t}</span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-slate mt-6 max-w-none prose-a:text-slate-900">
          {/* Rendered HTML from markdown */}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>

        <footer className="mt-8 flex items-center justify-between">
          <Link to="/company/blog" className="text-sm font-medium text-slate-900 hover:opacity-80">← All articles</Link>
          <Share title={post.title} />
        </footer>
      </article>
    </div>
  );
}

function Share({ title }: { title: string }) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(title);
  return (
    <div className="flex items-center gap-2 text-sm">
      <a href={`https://twitter.com/intent/tweet?url=${encoded}&text=${text}`} target="_blank" rel="noreferrer" className="hover:underline">Share</a>
    </div>
  );
}