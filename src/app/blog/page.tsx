import type { Metadata } from "next";
import { pageMetadata, personRef, WEBSITE_ID } from "@/lib/seo";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import { getPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Writing by James Latten on software engineering, React, TypeScript, cloud architecture, and lessons from shipping real products.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.jameslatten.com/blog#blog",
    name: "James Latten — Blog",
    url: "https://www.jameslatten.com/blog",
    author: personRef,
    isPartOf: { "@id": WEBSITE_ID },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://www.jameslatten.com/blog/${post.slug}`,
      datePublished: post.date,
    })),
  };
  const blogBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.jameslatten.com/blog#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.jameslatten.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.jameslatten.com/blog",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumbSchema) }}
      />
      <Nav />
      <main id="main-content">
        <section className="bg-white pt-36 pb-20 md:pt-44 md:pb-24 border-b border-black/10">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <p className="text-xs tracking-widest uppercase text-black/35 mb-6">Blog</p>
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.92] tracking-[-0.03em] mb-8 max-w-4xl">
              Notes From the Build
            </h1>
            <p className="text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl">
              Writing on software engineering, frontend architecture, the cloud, and lessons from
              shipping real products.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            {posts.length === 0 && (
              <p className="text-sm text-black/50">No posts yet — check back soon.</p>
            )}

            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block py-10 border-b border-black/10 last:border-b-0 hover:bg-black/[0.02] transition-colors -mx-6 md:-mx-12 px-6 md:px-12"
              >
                <div className="grid md:grid-cols-[10rem_1fr_auto] gap-4 md:gap-10 items-start">
                  <time
                    dateTime={post.date}
                    className="text-xs tracking-widest uppercase text-black/30 font-mono pt-1.5"
                  >
                    {formatDate(post.date)}
                  </time>

                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight leading-snug group-hover:opacity-60 transition-opacity">
                        {post.draft && (
                          <span className="align-middle text-[10px] tracking-widest uppercase px-2 py-1 mr-3 bg-black text-white">
                            Draft
                          </span>
                        )}
                        {post.title}
                      </h2>
                      <p className="text-sm text-black/50 mt-1.5 leading-relaxed max-w-2xl">
                        {post.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs tracking-widest uppercase px-3 py-1.5 border border-black/12 text-black/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center self-center">
                    <span className="text-xs tracking-widest uppercase text-black/30 group-hover:text-black transition-colors whitespace-nowrap">
                      {post.readingMinutes} min read&nbsp;&rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <CtaBand />
      <Footer />
    </>
  );
}
