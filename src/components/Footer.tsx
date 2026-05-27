import Link from "next/link";

const footerLinks = [
  { href: "https://github.com/jamesl1500", label: "GitHub", external: true },
  { href: "https://www.linkedin.com/in/jameslattenjr", label: "LinkedIn", external: true },
  { href: "https://www.foundryframe.com", label: "Agency", external: true },
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
              rel={link.external ? "noopener noreferrer" : undefined}
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
