import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import { education } from "@/lib/education";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic degrees and certificates earned by James Latten.",
  alternates: {
    canonical: "https://www.jameslatten.com/education",
  },
};

export default function EducationPage() {
  const educationPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Education",
    url: "https://www.jameslatten.com/education",
    description: "Academic degrees and certificates earned by James Latten.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: education.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.jameslatten.com/education/${entry.slug}`,
        name: entry.degree,
      })),
    },
  };
  const educationBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.jameslatten.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Education",
        item: "https://www.jameslatten.com/education",
      },
    ],
  };
  const educationWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Education",
    url: "https://www.jameslatten.com/education",
    isPartOf: {
      "@type": "WebSite",
      name: "James Latten — Software Engineer",
      url: "https://www.jameslatten.com",
    },
    breadcrumb: {
      "@id": "https://www.jameslatten.com/education#breadcrumb",
    },
    mainEntity: {
      "@id": "https://www.jameslatten.com/education#collection",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...educationPageSchema, "@id": "https://www.jameslatten.com/education#collection" }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...educationBreadcrumbSchema, "@id": "https://www.jameslatten.com/education#breadcrumb" }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationWebPageSchema) }}
      />
      <Nav />
      <main id="main-content">
        <section className="bg-white pt-36 pb-20 md:pt-44 md:pb-24 border-b border-black/10">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <p className="text-xs tracking-widest uppercase text-black/35 mb-6">Education</p>
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.92] tracking-[-0.03em] mb-8 max-w-4xl">
              Degrees and Certifications
            </h1>
            <p className="text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl">
              Academic milestones and credential programs focused on software engineering,
              computer science, and modern web development.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {education.map((entry) => (
              <Link
                key={entry.slug}
                href={`/education/${entry.slug}`}
                className="bg-white p-8 flex flex-col gap-3 hover:bg-black/[0.02] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest uppercase text-black/30">{entry.type}</span>
                  <span className="text-xs font-mono text-black/40">{entry.year}</span>
                </div>

                <h2 className="text-[15px] font-bold leading-snug tracking-tight text-black mt-1">
                  {entry.degree}
                </h2>

                <p className="text-sm text-black/55">{entry.institution}</p>
                <p className="text-xs text-black/35">{entry.location}</p>

                <span className="text-xs tracking-widest uppercase text-black/40 mt-2">
                  View Credential &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <CtaBand />
      <Footer />
    </>
  );
}
