import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

// Posts live in src/content/blog/<slug>.mdx and declare their metadata with
// `export const metadata = { ... }`. This module is the only place that knows
// where posts come from — swap its internals to move to a headless CMS later.

export type PostMeta = {
  title: string;
  description: string;
  /** ISO date, e.g. "2026-09-24" */
  date: string;
  /** ISO date of the last meaningful edit, if any */
  updated?: string;
  tags: string[];
  /** Drafts render in `next dev` but are excluded from production builds */
  draft?: boolean;
};

export type Post = PostMeta & {
  slug: string;
  readingMinutes: number;
};

const POSTS_DIR = path.join(process.cwd(), "src", "content", "blog");
const WORDS_PER_MINUTE = 225;
const showDrafts = process.env.NODE_ENV === "development";

function getSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

function readingMinutes(slug: string): number {
  const source = fs.readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), "utf8");
  const prose = source
    .replace(/export const metadata = \{[\s\S]*?\n\};?/, "")
    .replace(/```[\s\S]*?```/g, "");
  const words = prose.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

async function loadModule(slug: string) {
  return (await import(`@/content/blog/${slug}.mdx`)) as {
    default: ComponentType;
    metadata: PostMeta;
  };
}

export async function getPosts(): Promise<Post[]> {
  const posts = await Promise.all(
    getSlugs().map(async (slug) => {
      const { metadata } = await loadModule(slug);
      return { ...metadata, slug, readingMinutes: readingMinutes(slug) };
    })
  );

  return posts
    .filter((post) => showDrafts || !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string) {
  if (!getSlugs().includes(slug)) return null;

  const mod = await loadModule(slug);
  if (mod.metadata.draft && !showDrafts) return null;

  return {
    ...mod.metadata,
    slug,
    readingMinutes: readingMinutes(slug),
    Content: mod.default,
  };
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
