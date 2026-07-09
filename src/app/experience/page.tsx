import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { experiences } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "A complete timeline of professional experience for James Latten.",
  alternates: {
    canonical: "https://www.jameslatten.com/experience",
  },
};

export default function ExperiencePage() {
  const experiencePageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Experience",
    url: "https://www.jameslatten.com/experience",
    description: "A complete timeline of professional experience for James Latten.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: experiences.map((experience, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.jameslatten.com/experience/${experience.slug}`,
        name: `${experience.role} at ${experience.company}`,
      })),
    },
  };
  const experienceBreadcrumbSchema = {
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
        name: "Experience",
        item: "https://www.jameslatten.com/experience",
      },
    ],
  };
  const experienceWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Experience",
    url: "https://www.jameslatten.com/experience",
    isPartOf: {
      "@type": "WebSite",
      name: "James Latten — Software Engineer",
      url: "https://www.jameslatten.com",
    },
    breadcrumb: {
      "@id": "https://www.jameslatten.com/experience#breadcrumb",
    },
    mainEntity: {
      "@id": "https://www.jameslatten.com/experience#collection",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...experiencePageSchema, "@id": "https://www.jameslatten.com/experience#collection" }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...experienceBreadcrumbSchema, "@id": "https://www.jameslatten.com/experience#breadcrumb" }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceWebPageSchema) }}
      />
      <Nav />
      <main id="main-content">
        <section className="bg-black text-white pt-36 pb-20 md:pt-44 md:pb-24 border-b border-white/10">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <p className="text-xs tracking-widest uppercase text-white/35 mb-6">Experience</p>
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.92] tracking-[-0.03em] mb-8 max-w-4xl">
              Career Timeline
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
              A detailed look at my engineering and product experience across enterprise, agency,
              and independent work.
            </p>
          </div>
        </section>

        <section className="bg-black text-white py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            {experiences.map((experience) => (
              <Link
                key={experience.slug}
                href={`/experience/${experience.slug}`}
                className="group block py-10 border-b border-white/10 last:border-b-0 hover:bg-white/[0.02] transition-colors -mx-6 md:-mx-12 px-6 md:px-12"
              >
                <div className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[2.5rem_1fr_auto] gap-6 md:gap-10 items-start">
                  <span className="text-xs tracking-widest text-white/25 font-mono pt-1.5 select-none">
                    {experience.id}
                  </span>

                  <div className="flex flex-col gap-3">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight leading-snug group-hover:opacity-60 transition-opacity">
                        {experience.role}
                      </h2>
                      <p className="text-sm text-white/45 mt-1.5">{experience.company}</p>
                    </div>
                    <p className="text-sm text-white/55 leading-relaxed max-w-2xl">
                      {experience.summary}
                    </p>
                  </div>

                  <div className="col-start-2 md:col-start-auto flex flex-col md:text-right mt-2 md:mt-0 self-center gap-1">
                    <span className="text-xs tracking-widest uppercase text-white/35 whitespace-nowrap">
                      {experience.period}
                    </span>
                    <span className="text-xs text-white/25">{experience.location}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
