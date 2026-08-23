import { ImageResponse } from "next/og";

export const alt = "James Latten — Software Engineer | Sheffield Lake, Ohio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          SOFTWARE ENGINEER &mdash; Sheffield Lake, Ohio
        </div>

        {/* Name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: "128px",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              display: "flex",
            }}
          >
            James
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.18)",
              fontSize: "128px",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              display: "flex",
            }}
          >
            Latten.
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
            React &nbsp;·&nbsp; TypeScript &nbsp;·&nbsp; Next.js &nbsp;·&nbsp;
            AWS &nbsp;·&nbsp; Node.js
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
