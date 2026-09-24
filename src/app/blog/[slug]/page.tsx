import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata, personRef, SITE_URL } from "@/lib/seo";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import { getPosts, getPost, formatDate } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogType: "article",
    keywords: post.tags,
    openGraph: {
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [SITE_URL],
      tags: post.tags,
    },
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { Content } = post;
  const posts = await getPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  // Posts are sorted newest-first, so the next-older post is index + 1
  const nextPost = posts[index + 1];

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://www.jameslatten.com/blog/${post.slug}#post`,
    headline: post.title,
    description: post.description,
    url: `https://www.jameslatten.com/blog/${post.slug}`,
    image: `https://www.jameslatten.com/blog/${post.slug}/opengraph-image`,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    keywords: post.tags.join(", "),
    timeRequired: `PT${post.readingMinutes}M`,
    author: personRef,
    isPartOf: {
      "@id": "https://www.jameslatten.com/blog#blog",
    },
  };
  const postBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://www.jameslatten.com/blog/${post.slug}#breadcrumb`,
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.jameslatten.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postBreadcrumbSchema) }}
      />
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-black text-white pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/35 hover:text-white transition-colors mb-16"
            >
              <span>&larr;</span>
              <span>All Posts</span>
            </Link>

            <p className="text-xs tracking-widest uppercase text-white/25 font-mono mb-6">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              &nbsp;&middot;&nbsp;{post.readingMinutes} min read
            </p>

            <h1 className="text-[clamp(2.25rem,6vw,5rem)] font-black leading-[0.95] tracking-[-0.03em] mb-8 max-w-4xl">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-white/55 leading-relaxed max-w-2xl">
              {post.description}
            </p>
          </div>
        </section>

        {/* Meta bar */}
        <section className="bg-white border-b border-black/10">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-black/30 mb-1.5">Author</p>
                <p className="text-sm font-bold">James Latten</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-black/30 mb-1.5">
                  {post.updated ? "Updated" : "Published"}
                </p>
                <p className="text-sm font-bold">{formatDate(post.updated ?? post.date)}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs tracking-widest uppercase text-black/30 mb-1.5">Topics</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs tracking-widest uppercase px-3 py-1.5 border border-black/15 text-black/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <article className="bg-white py-20 md:py-28">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <div className="blog-prose max-w-[68ch] mx-auto text-[17px] text-black/70 leading-[1.75]">
              <Content />
            </div>
          </div>
        </article>

        {/* Next post */}
        {nextPost && (
          <section className="bg-black text-white py-20 md:py-28">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12">
              <p className="text-xs tracking-widest uppercase text-white/30 mb-8">Keep Reading</p>
              <Link href={`/blog/${nextPost.slug}`} className="group inline-block">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight group-hover:opacity-50 transition-opacity">
                  {nextPost.title}&nbsp;&rarr;
                </h2>
              </Link>
            </div>
          </section>
        )}
      </main>
      <CtaBand />
      <Footer />
    </>
  );
}
