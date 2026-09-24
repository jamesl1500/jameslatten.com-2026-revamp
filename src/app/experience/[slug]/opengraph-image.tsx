import { experiences, getExperience } from "@/lib/experience";
import { ogCard, ogSize } from "@/lib/og-card";

export const alt = "Experience — James Latten";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experience = getExperience(slug);

  return ogCard({
    label: "Experience — James Latten",
    title: experience ? `${experience.role} at ${experience.company}` : "James Latten",
    subtitle: experience?.summary,
    footer: experience ? `${experience.period}  ·  ${experience.location}` : undefined,
  });
}
