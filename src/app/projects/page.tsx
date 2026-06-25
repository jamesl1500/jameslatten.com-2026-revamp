import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A curated list of software projects and case studies by James Latten.",
  alternates: {
    canonical: "https://jameslatten.com/projects",
  },
};

export default function ProjectsPage() {
  const projectsPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects",
    url: "https://jameslatten.com/projects",
    description: "A curated list of software projects and case studies by James Latten.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://jameslatten.com/projects/${project.slug}`,
        name: project.title,
      })),
    },
  };
  const projectsBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jameslatten.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://jameslatten.com/projects",
      },
    ],
  };
  const projectsWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Projects",
    url: "https://jameslatten.com/projects",
    isPartOf: {
      "@type": "WebSite",
      name: "James Latten — Software Engineer",
      url: "https://jameslatten.com",
    },
    breadcrumb: {
      "@id": "https://jameslatten.com/projects#breadcrumb",
    },
    mainEntity: {
      "@id": "https://jameslatten.com/projects#collection",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...projectsPageSchema, "@id": "https://jameslatten.com/projects#collection" }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...projectsBreadcrumbSchema, "@id": "https://jameslatten.com/projects#breadcrumb" }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsWebPageSchema) }}
      />
      <Nav />
      <main id="main-content">
        <section className="bg-white pt-36 pb-20 md:pt-44 md:pb-24 border-b border-black/10">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <p className="text-xs tracking-widest uppercase text-black/35 mb-6">Projects</p>
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.92] tracking-[-0.03em] mb-8 max-w-4xl">
              Built for Real Use Cases
            </h1>
            <p className="text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl">
              A complete view of product builds, client platforms, and engineering case studies.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block py-10 border-b border-black/10 last:border-b-0 hover:bg-black/[0.02] transition-colors -mx-6 md:-mx-12 px-6 md:px-12"
              >
                <div className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[2.5rem_1fr_auto] gap-6 md:gap-10 items-start">
                  <span className="text-xs tracking-widest text-black/20 font-mono pt-1.5 select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight leading-snug group-hover:opacity-60 transition-opacity">
                        {project.title}
                      </h2>
                      <p className="text-sm text-black/50 mt-1.5 leading-relaxed">{project.tagline}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs tracking-widest uppercase px-3 py-1.5 border border-black/12 text-black/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="col-start-2 md:col-start-auto flex items-center mt-2 md:mt-0 self-center">
                    <span className="text-xs tracking-widest uppercase text-black/30 group-hover:text-black transition-colors whitespace-nowrap">
                      View Project&nbsp;&rarr;
                    </span>
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
