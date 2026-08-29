import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import { experiences, getExperience } from "@/lib/experience";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperience(slug);

  if (!experience) {
    return { title: "Experience Not Found" };
  }

  return {
    title: `${experience.role} at ${experience.company}`,
    description: experience.summary,
    alternates: {
      canonical: `https://www.jameslatten.com/experience/${experience.slug}`,
    },
  };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params;
  const experience = getExperience(slug);

  if (!experience) {
    notFound();
  }

  const index = experiences.findIndex((item) => item.slug === slug);
  const nextExperience = experiences[index + 1];
  const experienceSchema = {
    "@context": "https://schema.org",
    "@type": "Role",
    roleName: experience.role,
    description: experience.summary,
    startDate: experience.period,
    inDefinedTermSet: "Professional Experience",
    inOrganization: {
      "@type": "Organization",
      name: experience.company,
      location: {
        "@type": "Place",
        name: experience.location,
      },
    },
    creator: {
      "@type": "Person",
      name: "James Latten",
      url: "https://www.jameslatten.com",
    },
    url: `https://www.jameslatten.com/experience/${experience.slug}`,
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
      {
        "@type": "ListItem",
        position: 3,
        name: `${experience.role} at ${experience.company}`,
        item: `https://www.jameslatten.com/experience/${experience.slug}`,
      },
    ],
  };
  const experienceWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${experience.role} at ${experience.company}`,
    url: `https://www.jameslatten.com/experience/${experience.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: "James Latten — Software Engineer",
      url: "https://www.jameslatten.com",
    },
    breadcrumb: {
      "@id": `https://www.jameslatten.com/experience/${experience.slug}#breadcrumb`,
    },
    mainEntity: {
      "@id": `https://www.jameslatten.com/experience/${experience.slug}#role`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...experienceSchema, "@id": `https://www.jameslatten.com/experience/${experience.slug}#role` }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...experienceBreadcrumbSchema, "@id": `https://www.jameslatten.com/experience/${experience.slug}#breadcrumb` }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceWebPageSchema) }}
      />
      <Nav />
      <main id="main-content">
        <section className="bg-black text-white pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/35 hover:text-white transition-colors mb-16"
            >
              <span>&larr;</span>
              <span>All Experience</span>
            </Link>

            <p className="text-xs tracking-widest uppercase text-white/25 font-mono mb-6">
              Role {experience.id}
            </p>

            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.92] tracking-[-0.03em] mb-8 max-w-4xl">
              {experience.role}
            </h1>

            <p className="text-lg md:text-xl text-white/55 leading-relaxed max-w-2xl">
              {experience.company}
            </p>
          </div>
        </section>

        <section className="bg-white border-b border-black/10">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-black/30 mb-1.5">Company</p>
                <p className="text-sm font-bold">{experience.company}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-black/30 mb-1.5">Period</p>
                <p className="text-sm font-bold">{experience.period}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-black/30 mb-1.5">Location</p>
                <p className="text-sm font-bold">{experience.location}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-36">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
              <div>
                <p className="text-xs tracking-widest uppercase text-black/35">Highlights</p>
              </div>
              <ul className="flex flex-col gap-4 text-[15px] text-black/65 leading-relaxed">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="text-black/25 select-none">&ndash;</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {nextExperience && (
          <section className="bg-black text-white py-20 md:py-28">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12">
              <p className="text-xs tracking-widest uppercase text-white/30 mb-8">Next Role</p>
              <Link href={`/experience/${nextExperience.slug}`} className="group inline-block">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight group-hover:opacity-50 transition-opacity">
                  {nextExperience.role}&nbsp;&rarr;
                </h2>
              </Link>
            </div>
          </section>
        )}
      </main>
      <CtaBand />
      <Footer />
    </>
  );
}
