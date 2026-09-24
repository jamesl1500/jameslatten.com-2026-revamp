import { ogCard, ogSize } from "@/lib/og-card";

export const alt = "Experience — James Latten";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    label: "Experience — James Latten",
    title: "Professional Experience",
    subtitle: "Distributed banking systems, commerce platforms, and full-stack delivery.",
  });
}
