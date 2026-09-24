import { getProject, projects } from "@/lib/projects";
import { ogCard, ogSize } from "@/lib/og-card";

export const alt = "Project — James Latten";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  return ogCard({
    label: "Project — James Latten",
    title: project?.title ?? "James Latten",
    subtitle: project?.tagline ?? "Software Engineer — Sheffield Lake, Ohio",
    footer: project?.tags.slice(0, 5).join("  ·  "),
  });
}
