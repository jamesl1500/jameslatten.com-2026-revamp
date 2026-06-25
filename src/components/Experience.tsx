"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { experiences } from "@/lib/experience";

type Experience = (typeof experiences)[0];

function ExperienceItem({
  exp,
  index,
  isParentInView,
}: {
  exp: Experience;
  index: number;
  isParentInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isParentInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        delay: 0.35 + index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="py-12 border-b border-white/10 last:border-b-0"
    >
      <div className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[2.5rem_1fr_auto] gap-6 md:gap-10 items-start">
        {/* Index */}
        <span className="text-xs tracking-widest text-white/20 font-mono pt-1.5 select-none">
          {exp.id}
        </span>

        {/* Main content */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-snug">
              {exp.role}
            </h3>
            <span className="hidden sm:block text-white/20 text-sm">&#8212;</span>
            <span className="text-sm text-white/50">{exp.company}</span>
          </div>

          <ul className="flex flex-col gap-2.5">
            {exp.highlights.map((highlight, j) => (
              <li key={j} className="text-[14px] text-white/55 leading-relaxed flex gap-3">
                <span className="text-white/20 mt-0.5 shrink-0 select-none">&#8212;</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Period and location — stacks below on mobile */}
        <div className="col-start-2 md:col-start-auto flex flex-col gap-1 md:text-right mt-2 md:mt-0">
          <span className="text-xs tracking-widest uppercase text-white/40 whitespace-nowrap">
            {exp.period}
          </span>
          <span className="text-xs text-white/20">{exp.location}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="bg-black text-white py-24 md:py-36">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-widest uppercase text-white/30 mb-16"
        >
          Experience
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-16"
        >
          Where I Have Worked
        </motion.h2>

        {/* Experience items */}
        <div>
          {experiences.map((exp, i) => (
            <ExperienceItem
              key={exp.id}
              exp={exp}
              index={i}
              isParentInView={isInView}
            />
          ))}
        </div>

        <div className="mt-14">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-8 py-4 border border-white/25 text-white/80 hover:text-white hover:border-white transition-colors"
          >
            View Full Experience
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
