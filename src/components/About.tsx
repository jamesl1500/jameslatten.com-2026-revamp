"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

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

        <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr] gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Left: photo + identity */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-black/10">
              <Image
                src="/avatar.jpg"
                alt="James Latten — Software Engineer"
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                className="object-cover object-top grayscale-[20%]"
              />
            </div>
            <div>
              <p className="text-sm font-bold tracking-tight">James Latten</p>
              <p className="text-xs tracking-widest uppercase text-black/40 mt-0.5">
                Software Engineer
              </p>
            </div>
          </motion.div>

          {/* Right: statement + bio + tags */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                Building systems that scale. Writing code that lasts.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-5 text-black/65 leading-relaxed text-[15px]"
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

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-2"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs tracking-widest uppercase px-3 py-1.5 border border-black/15 text-black/50"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
