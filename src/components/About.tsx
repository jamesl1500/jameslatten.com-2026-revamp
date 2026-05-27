"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tags = [
  "React",
  "TypeScript",
  "Next.js",
  "AWS",
  "Node.js",
  "PHP",
  "Java",
  "Python",
  "REST APIs",
  "CI/CD",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="bg-white py-24 md:py-36">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-widest uppercase text-black/35 mb-16"
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              Building systems that scale. Writing code that lasts.
            </h2>

            <div className="flex flex-wrap gap-2 mt-10">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs tracking-widest uppercase px-3 py-1.5 border border-black/15 text-black/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 text-black/65 leading-relaxed text-[15px]"
          >
            <p>
              Results-driven Software Engineer with 4+ years of experience building
              scalable web applications and cloud-based systems. My background spans
              full-stack development, from pixel-perfect frontends in React and
              TypeScript to robust backend services with PHP, Python, and Java.
            </p>
            <p>
              Currently serving as a Technology Development Analyst at PNC Bank,
              where I work on highly complex distributed systems serving millions of
              customers. I apply Data Structures and Algorithms to achieve measurable
              performance improvements, including a 30% boost in system throughput
              and a 15% reduction in processing time.
            </p>
            <p>
              Experienced in Agile environments, CI/CD pipelines, and modern version
              control workflows using Git, GitHub, and Bitbucket. I am also the
              founder of Foundry Frame, a creative web design agency based in Ohio,
              where I translate engineering expertise into client-facing digital
              experiences.
            </p>
            <p>
              Adept at leveraging AI tools including GitHub Copilot, OpenAI, and
              Claude to accelerate development and build intelligent, scalable
              solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
