"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Science, Psychology",
    institution: "Western Governors University",
    location: "Salt Lake City, Utah",
    year: "2025",
    type: "Degree" as const,
    highlights: [] as string[],
  },
  {
    degree: "Associates of Applied Business, Programming and Development",
    institution: "Cuyahoga Community College",
    location: "Cleveland, OH",
    year: "2026",
    type: "Degree" as const,
    highlights: [
      "Advanced Data Structures and Algorithms",
      "Networking Fundamentals and servers",
      "Distributed systems with modern and legacy technologies",
      "PHP, Java, C#, HTML, CSS, and React",
      "Full Stack Development",
    ],
  },
  {
    degree: "Associates of Arts",
    institution: "Cuyahoga Community College",
    location: "Cleveland, OH",
    year: "2022",
    type: "Degree" as const,
    highlights: [] as string[],
  },
  {
    degree: "Certificate in Web Programming Fundamentals",
    institution: "Lorain County Community College",
    location: "Elyria, OH",
    year: "2023",
    type: "Certificate" as const,
    highlights: [
      "HTML, CSS, JavaScript, and PHP",
      "Web Development and Design",
      "Back-end development focus",
    ],
  },
  {
    degree: "Certificate in Web Design Fundamentals",
    institution: "Lorain County Community College",
    location: "Elyria, OH",
    year: "2023",
    type: "Certificate" as const,
    highlights: [
      "HTML, CSS, and JavaScript",
      "Web Design and Front-End Development",
    ],
  },
  {
    degree: "Certificate in Software Development",
    institution: "Lorain County Community College",
    location: "Elyria, Ohio",
    year: "2023",
    type: "Certificate" as const,
    highlights: [
      "Computer Science and Data Structures and Algorithms",
      "PHP, Java, C#, and Python",
      "Full Stack Development",
    ],
  },
];

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="bg-black text-white py-24 md:py-36">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-widest uppercase text-white/30 mb-16"
        >
          Education
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-16"
        >
          Academic Background
        </motion.h2>

        {/* Grid of credentials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-white/10">
          {education.map((item, i) => (
            <motion.div
              key={`${item.degree}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.3 + i * 0.09,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-r border-b border-white/10 p-8 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest uppercase text-white/25">
                  {item.type}
                </span>
                <span className="text-xs font-mono text-white/35">{item.year}</span>
              </div>

              <h3 className="text-[15px] font-bold leading-snug tracking-tight text-white mt-1">
                {item.degree}
              </h3>

              <p className="text-sm text-white/45">{item.institution}</p>
              <p className="text-xs text-white/25">{item.location}</p>

              {item.highlights.length > 0 && (
                <ul className="mt-3 flex flex-col gap-1.5">
                  {item.highlights.map((h) => (
                    <li key={h} className="text-xs text-white/45 flex gap-2 leading-relaxed">
                      <span className="text-white/20 shrink-0 select-none mt-0.5">&#8212;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
