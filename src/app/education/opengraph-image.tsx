import { ogCard, ogSize } from "@/lib/og-card";

export const alt = "Education — James Latten";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    label: "Education — James Latten",
    title: "Education & Credentials",
    subtitle: "Degrees and certificates in information technology and software development.",
  });
}
