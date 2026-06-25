"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";

function ProjectItem({
  project,
  index,
  isParentInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isParentInView: boolean;
}) {
  const id = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isParentInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        delay: 0.35 + index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block py-12 border-b border-black/10 last:border-b-0 hover:bg-black/[0.02] transition-colors -mx-6 md:-mx-12 px-6 md:px-12"
      >
        <div className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[2.5rem_1fr_auto] gap-6 md:gap-10 items-start">
          {/* Index */}
          <span className="text-xs tracking-widest text-black/20 font-mono pt-1.5 select-none">
            {id}
          </span>

          {/* Main content */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-snug group-hover:opacity-60 transition-opacity">
                {project.title}
              </h3>
              <p className="text-sm text-black/50 mt-1.5 leading-relaxed">
                {project.tagline}
              </p>
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

          {/* CTA */}
          <div className="col-start-2 md:col-start-auto flex items-center mt-2 md:mt-0 self-center">
            <span className="text-xs tracking-widest uppercase text-black/30 group-hover:text-black transition-colors whitespace-nowrap">
              View Project&nbsp;&rarr;
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="bg-white py-24 md:py-36 border-b border-black/10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-widest uppercase text-black/35 mb-16"
        >
          Projects
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-16"
        >
          What I&rsquo;ve Built
        </motion.h2>

        {/* Project list */}
        <div>
          {projects.map((project, i) => (
            <ProjectItem
              key={project.slug}
              project={project}
              index={i}
              isParentInView={isInView}
            />
          ))}
        </div>

        <div className="mt-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-8 py-4 border border-black/25 text-black/70 hover:text-black hover:border-black transition-colors"
          >
            View All Projects
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
