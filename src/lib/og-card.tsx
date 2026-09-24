import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Shared 1200×630 social card used by every per-page opengraph-image route.

export const ogSize = { width: 1200, height: 630 };

// next/og only bundles Geist Regular, so heavier weights would be faux-rendered
// at 400. Load the site's actual weights (400 body, 700 bold, 900 headings).
const FONT_DIR = join(process.cwd(), "src", "assets", "fonts");
let fontsPromise: ReturnType<typeof loadFonts> | undefined;

async function loadFonts() {
  const weights = [
    [400, "Geist-Regular.ttf"],
    [700, "Geist-Bold.ttf"],
    [900, "Geist-Black.ttf"],
  ] as const;

  return Promise.all(
    weights.map(async ([weight, file]) => ({
      name: "Geist",
      data: await readFile(join(FONT_DIR, file)),
      weight,
      style: "normal" as const,
    }))
  );
}

export function ogFonts() {
  fontsPromise ??= loadFonts();
  return fontsPromise;
}

type OgCardInput = {
  /** Small uppercase label, e.g. "Project — James Latten" */
  label: string;
  title: string;
  subtitle?: string;
  /** Bottom-left line, e.g. tags */
  footer?: string;
};

export async function ogCard({ label, title, subtitle, footer }: OgCardInput) {
  const titleSize = title.length > 40 ? "64px" : title.length > 20 ? "84px" : "104px";

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
          fontFamily: "Geist",
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
          {label}
        </div>

        {/* Title + subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: titleSize,
              fontWeight: 900,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              display: "flex",
              maxWidth: "1040px",
            }}
          >
            {title}
          </span>
          {subtitle && (
            <span
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "26px",
                lineHeight: 1.4,
                display: "flex",
                maxWidth: "900px",
              }}
            >
              {subtitle}
            </span>
          )}
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
            {footer ?? ""}
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
    { ...ogSize, fonts: await ogFonts() }
  );
}
