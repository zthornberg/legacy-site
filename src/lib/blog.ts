// src/lib/blog.ts
// Loads Markdown posts at build time; parses frontmatter; renders HTML with marked.
// Swap later with a DB/CMS without changing the UI components.

import matter from "gray-matter";
import { marked } from "marked";

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;          // ISO date (YYYY-MM-DD)
  excerpt?: string;
  author?: string;
  tags?: string[];
  cover?: string;        // optional image path; only local /media paths are rendered
  readingTime?: string;  // computed
  outline: string[];     // h2 headings, in order
};

export type BlogPost = BlogPostMeta & {
  html: string;          // rendered HTML
};

function computeReadingTime(text: string) {
  const wpm = 220;
  const words = text.trim().split(/\s+/).length || 0;
  const mins = Math.max(1, Math.round(words / wpm));
  return `${mins} min read`;
}

// YAML parses `date: 2025-01-10` into a Date at UTC midnight; keep it as a plain ISO day.
function normalizeDate(value: unknown) {
  if (value instanceof Date && !Number.isNaN(+value)) return value.toISOString().slice(0, 10);
  if (typeof value === "string" && value.trim()) return value.trim();
  return new Date().toISOString().slice(0, 10);
}

function extractOutline(markdown: string) {
  return markdown
    .split("\n")
    .map((line) => line.match(/^##\s+(.+?)\s*#*\s*$/)?.[1])
    .filter((h): h is string => Boolean(h))
    .map((h) => h.replace(/[*_`]/g, ""));
}

// Eagerly import markdown as raw strings:
const files = import.meta.glob("/src/content/blog/**/*.md", { query: "?raw", import: "default", eager: true });

function normalizeSlug(path: string) {
  // /src/content/blog/2025-08-30-my-post.md -> 2025-08-30-my-post
  return path.replace(/^.*\/blog\//, "").replace(/\.md$/, "");
}

export const allPosts: BlogPost[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, content } = matter(raw as string);
    const html = marked.parse(content, { async: false }) as string;
    const slug = (data.slug as string) || normalizeSlug(path);
    const meta: BlogPostMeta = {
      slug,
      title: (data.title as string) || slug.replace(/-/g, " "),
      date: normalizeDate(data.date),
      excerpt: data.excerpt as string | undefined,
      author: (data.author as string) || "Legacy Team",
      tags: (data.tags as string[]) || [],
      cover: data.cover as string | undefined,
      outline: extractOutline(content),
    };
    meta.readingTime = computeReadingTime(content);
    return { ...meta, html };
  })
  // newest first
  .sort((a, b) => +new Date(b.date) - +new Date(a.date));

export function getBySlug(slug: string) {
  return allPosts.find(p => p.slug === slug);
}

export function getAllTags() {
  const set = new Set<string>();
  allPosts.forEach(p => (p.tags || []).forEach(t => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

/** "2025-01-15" → "Jan 15, 2025" (formatted in UTC so the day never shifts). */
export function formatPostDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(+d)) return iso;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}

/** Covers render only from the site's own media folder. */
export function localCover(cover?: string) {
  return cover && cover.startsWith("/media/") ? cover : undefined;
}
