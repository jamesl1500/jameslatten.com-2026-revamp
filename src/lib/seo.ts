import type { Metadata } from "next";

export const SITE_URL = "https://www.jameslatten.com";
export const SITE_NAME = "James Latten";

export const X_HANDLE = "@jameslattendev";

/** Profiles that represent James — used for JSON-LD sameAs and rel="me" links */
export const SOCIAL_PROFILES = {
  github: "https://github.com/jamesl1500",
  linkedin: "https://www.linkedin.com/in/jameslattenjr",
  x: "https://x.com/jameslattendev",
};

/** Stable JSON-LD node ids, so pages can reference the same entities */
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const RSS_FEED = {
  "application/rss+xml": [{ url: `${SITE_URL}/blog/rss.xml`, title: "James Latten — Blog" }],
};

export const personRef = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "James Latten",
  url: SITE_URL,
};

type PageMetadataInput = {
  /** Page title; the root layout's template appends " | James Latten" */
  title: string;
  description: string;
  /** Path beginning with "/", e.g. "/projects/foundry-frame" */
  path: string;
  ogType?: "website" | "article" | "profile";
  keywords?: string[];
  /** Extra Open Graph fields, e.g. publishedTime for articles */
  openGraph?: Partial<NonNullable<Metadata["openGraph"]>>;
};

// Next.js merges metadata *shallowly*: a page that sets `openGraph` or
// `twitter` replaces the root layout's object entirely, and a page that
// doesn't inherits the homepage's URL and title. Every route builds its
// metadata here so canonical, Open Graph, and Twitter values always agree.
export function pageMetadata({
  title,
  description,
  path,
  ogType = "website",
  keywords,
  openGraph,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const socialTitle = `${title} — ${SITE_NAME}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url, types: RSS_FEED },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: ogType,
      ...openGraph,
    } as Metadata["openGraph"],
    twitter: {
      card: "summary_large_image",
      site: X_HANDLE,
      creator: X_HANDLE,
      title: socialTitle,
      description,
    },
  };
}

/** Trim to a meta-description-friendly length on a word boundary */
export function truncate(text: string, max = 160): string {
  if (text.length <= max) return text;
  return `${text.slice(0, text.lastIndexOf(" ", max - 1))}…`;
}
