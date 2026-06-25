import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { education, getEducation } from "@/lib/education";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return education.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEducation(slug);

  if (!entry) {
    return { title: "Education Not Found" };
  }

  return {
    title: entry.degree,
    description: `${entry.type} at ${entry.institution}`,
    alternates: {
      canonical: `https://jameslatten.com/education/${entry.slug}`,
    },
  };
}

export default async function EducationDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = getEducation(slug);

  if (!entry) {
    notFound();
  }

  const index = education.findIndex((item) => item.slug === slug);
  const nextEntry = education[index + 1];

  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="bg-white pt-36 pb-24 md:pt-44 md:pb-32 border-b border-black/10">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <Link
              href="/education"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-black/35 hover:text-black transition-colors mb-16"
            >
              <span>&larr;</span>
              <span>All Education</span>
            </Link>

            <p className="text-xs tracking-widest uppercase text-black/30 mb-6">{entry.type}</p>

            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.92] tracking-[-0.03em] mb-8 max-w-4xl">
              {entry.degree}
            </h1>

            <p className="text-lg md:text-xl text-black/55 leading-relaxed max-w-2xl">
              {entry.institution}
            </p>
          </div>
        </section>

        <section className="bg-white border-b border-black/10">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-black/30 mb-1.5">Institution</p>
                <p className="text-sm font-bold">{entry.institution}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-black/30 mb-1.5">Year</p>
                <p className="text-sm font-bold">{entry.year}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-black/30 mb-1.5">Location</p>
                <p className="text-sm font-bold">{entry.location}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-36">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
              <div>
                <p className="text-xs tracking-widest uppercase text-black/35">Details</p>
              </div>

              {entry.highlights.length > 0 ? (
                <ul className="flex flex-col gap-4 text-[15px] text-black/65 leading-relaxed">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="text-black/25 select-none">&ndash;</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[15px] text-black/65 leading-relaxed">
                  Formal credential completed with focus on academic rigor and practical application.
                </p>
              )}
            </div>
          </div>
        </section>

        {nextEntry && (
          <section className="bg-black text-white py-20 md:py-28">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12">
              <p className="text-xs tracking-widest uppercase text-white/30 mb-8">Next Credential</p>
              <Link href={`/education/${nextEntry.slug}`} className="group inline-block">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight group-hover:opacity-50 transition-opacity">
                  {nextEntry.degree}&nbsp;&rarr;
                </h2>
              </Link>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
