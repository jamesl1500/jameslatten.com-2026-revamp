import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { projects, getProject } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.tagline,
    alternates: {
      canonical: `https://jameslatten.com/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — James Latten`,
      description: project.tagline,
      url: `https://jameslatten.com/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((p) => p.slug === slug);
  const id = String(index + 1).padStart(2, "0");

  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-black text-white pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            {/* Back link */}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/35 hover:text-white transition-colors mb-16"
            >
              <span>&larr;</span>
              <span>All Projects</span>
            </Link>

            <p className="text-xs tracking-widest uppercase text-white/25 font-mono mb-6">
              Project {id}
            </p>

            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.92] tracking-[-0.03em] mb-8 max-w-4xl">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl text-white/55 leading-relaxed max-w-2xl">
              {project.tagline}
            </p>
          </div>
        </section>

        {/* Meta bar */}
        <section className="bg-white border-b border-black/10">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-black/30 mb-1.5">Role</p>
                <p className="text-sm font-bold">{project.role}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-black/30 mb-1.5">Year</p>
                <p className="text-sm font-bold">{project.year}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs tracking-widest uppercase text-black/30 mb-1.5">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs tracking-widest uppercase px-3 py-1.5 border border-black/15 text-black/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="bg-white py-24 md:py-36">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
              <div>
                <p className="text-xs tracking-widest uppercase text-black/35">Overview</p>
              </div>
              <div className="flex flex-col gap-6 text-[15px] text-black/65 leading-relaxed">
                {project.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}

                {(project.links.live || project.links.github) && (
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs tracking-widest uppercase px-8 py-4 bg-black text-white hover:bg-black/80 transition-colors text-center"
                      >
                        Visit Live Site &rarr;
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs tracking-widest uppercase px-8 py-4 border border-black/25 text-black hover:border-black hover:bg-black/5 transition-colors text-center"
                      >
                        View on GitHub &rarr;
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Next project */}
        {projects[index + 1] && (
          <section className="bg-black text-white py-20 md:py-28">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12">
              <p className="text-xs tracking-widest uppercase text-white/30 mb-8">Next Project</p>
              <Link
                href={`/projects/${projects[index + 1].slug}`}
                className="group inline-block"
              >
                <h2 className="text-3xl md:text-5xl font-black tracking-tight group-hover:opacity-50 transition-opacity">
                  {projects[index + 1].title}&nbsp;&rarr;
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
