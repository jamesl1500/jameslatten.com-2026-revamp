import { getPost, getPosts, formatDate } from "@/lib/blog";
import { ogCard, ogSize } from "@/lib/og-card";

export const alt = "Blog post — James Latten";
export const size = ogSize;
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  return ogCard({
    label: "Blog — James Latten",
    title: post?.title ?? "James Latten",
    subtitle: post ? `${formatDate(post.date)}  ·  ${post.readingMinutes} min read` : undefined,
    footer: post?.tags.slice(0, 4).join("  ·  "),
  });
}
