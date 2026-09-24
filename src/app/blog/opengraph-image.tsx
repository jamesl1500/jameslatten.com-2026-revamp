import { ogCard, ogSize } from "@/lib/og-card";

export const alt = "Blog — James Latten";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    label: "Blog — James Latten",
    title: "Notes From the Build",
    subtitle: "Writing on software engineering, frontend architecture, and the cloud.",
  });
}
