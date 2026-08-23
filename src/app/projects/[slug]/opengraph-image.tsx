import { ImageResponse } from "next/og";
import { getProject, projects } from "@/lib/projects";

export const alt = "Project — James Latten";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const title = project?.title ?? "James Latten";
  const tagline = project?.tagline ?? "Software Engineer — Lorain, Ohio";
  const tags = project?.tags.slice(0, 5).join("  ·  ") ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top label */}
        <div
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "15px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          PROJECT &mdash; JAMES LATTEN
        </div>

        {/* Title + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: title.length > 20 ? "84px" : "104px",
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              display: "flex",
            }}
          >
            {title}
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "26px",
              lineHeight: 1.4,
              display: "flex",
              maxWidth: "900px",
            }}
          >
            {tagline}
          </span>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "14px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            {tags}
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.2)",
              fontSize: "14px",
              letterSpacing: "0.12em",
              display: "flex",
            }}
          >
            jameslatten.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
