import { education, getEducation } from "@/lib/education";
import { ogCard, ogSize } from "@/lib/og-card";

export const alt = "Education — James Latten";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return education.map((e) => ({ slug: e.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEducation(slug);

  return ogCard({
    label: `${entry?.type ?? "Education"} — James Latten`,
    title: entry?.degree ?? "James Latten",
    subtitle: entry ? `${entry.institution}  ·  ${entry.year}` : undefined,
    footer: entry?.location,
  });
}
