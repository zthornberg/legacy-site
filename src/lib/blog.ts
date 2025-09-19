// src/lib/blog.ts
// Loads Markdown posts at build time; parses frontmatter; renders HTML with marked.
// Swap later with a DB/CMS without changing the UI components.

import matter from "gray-matter";
import { marked } from "marked";

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;          // ISO date
  excerpt?: string;
  author?: string;
  tags?: string[];
  cover?: string;        // optional image URL
  readingTime?: string;  // computed
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

// Eagerly import markdown as raw strings:
const files = import.meta.glob("/src/content/blog/**/*.md", { as: "raw", eager: true });

function normalizeSlug(path: string) {
  // /src/content/blog/2025-08-30-my-post.md -> 2025-08-30-my-post
  return path.replace(/^.*\/blog\//, "").replace(/\.md$/, "");
}

export const allPosts: BlogPost[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, content } = matter(raw as string);
    const html = marked.parse(content);
    const slug = (data.slug as string) || normalizeSlug(path);
    const meta: BlogPostMeta = {
      slug,
      title: (data.title as string) || slug.replace(/-/g, " "),
      date: (data.date as string) || new Date().toISOString(),
      excerpt: data.excerpt as string | undefined,
      author: (data.author as string) || "Legacy Team",
      tags: (data.tags as string[]) || [],
      cover: data.cover as string | undefined,
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