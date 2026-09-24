import Link from "next/link";
import { SOCIAL_PROFILES } from "@/lib/seo";

const footerLinks = [
  // `profile: true` adds rel="me", marking the link as James's own account
  { href: SOCIAL_PROFILES.github, label: "GitHub", external: true, profile: true },
  { href: SOCIAL_PROFILES.linkedin, label: "LinkedIn", external: true, profile: true },
  { href: "https://www.foundryframe.com", label: "Agency", external: true },
  { href: SOCIAL_PROFILES.x, label: "Twitter/X", external: true, profile: true },
  { href: "mailto:hello@jameslatten.com", label: "Email", external: false },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="text-xs tracking-widest uppercase text-white/25">
          &copy; {year} James Latten. All rights reserved.
        </p>

        <nav
          className="flex items-center gap-8 flex-wrap"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={
                link.external
                  ? `${link.profile ? "me " : ""}noopener noreferrer`
                  : undefined
              }
              className="text-xs tracking-widest uppercase text-white/30 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
