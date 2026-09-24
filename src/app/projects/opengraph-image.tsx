import { ogCard, ogSize } from "@/lib/og-card";

export const alt = "Projects — James Latten";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    label: "Projects — James Latten",
    title: "Built for Real Use Cases",
    subtitle: "Product builds, client platforms, and engineering case studies.",
  });
}
