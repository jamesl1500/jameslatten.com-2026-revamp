"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const marqueeItems = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "PHP",
  "Python",
  "Java",
  "C#",
  "AWS",
  "Node.js",
  "MySQL",
  "PostgreSQL",
  "Git",
  "CI/CD",
  "REST APIs",
  "WordPress",
  "Laravel",
  "Spring Boot",
  "Angular",
  "Linux",
  "HTML5",
  "CSS3",
  "SASS",
  "ASP.NET",
];

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML5 / CSS3",
      "JavaScript (ES2024+)",
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "SASS / SCSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "PHP / Laravel",
      "Python / Django / Flask",
      "Java / Spring Boot",
      "C# / ASP.NET",
      "Node.js",
      "REST APIs",
      "Microservices",
      "CI/CD Pipelines",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MySQL",
      "PostgreSQL",
      "SQL",
      "NoSQL",
      "Relational Databases",
    ],
  },
  {
    title: "Cloud and Tools",
    skills: [
      "AWS (EC2, S3, Lambda)",
      "Git / GitHub / Bitbucket",
      "Linux / Ubuntu / UNIX",
      "IIS / Windows Server",
      "Agile / Scrum",
      "Object-Oriented Programming",
      "Performance Tuning",
      "Root Cause Analysis",
    ],
  },
  {
    title: "Integrations",
    skills: [
      "WooCommerce",
      "Stripe / PayPal",
      "LearnDash LMS",
      "Advanced Custom Fields",
      "WordPress API",
    ],
  },
  {
    title: "AI and Machine Learning",
    skills: [
      "GitHub Copilot",
      "OpenAI API",
      "Claude / Anthropic",
      "ChatGPT",
      "AI-assisted development",
      "ML-powered solutions",
    ],
  },
];

function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-black/10 py-6 my-20 select-none">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex gap-0 whitespace-nowrap w-max"
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-xs tracking-widest uppercase text-black/40 flex items-center"
          >
            {item}
            <span className="mx-8 text-black/15 select-none">&#8226;</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="bg-white py-24 md:py-36">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-widest uppercase text-black/35 mb-6"
        >
          Skills
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
        >
          Technical Expertise
        </motion.h2>
      </div>

      {/* Scrolling marquee */}
      <Marquee />

      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Skill category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-black/10">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.35 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-r border-b border-black/10 p-8"
            >
              <h3 className="text-xs tracking-widest uppercase text-black/30 mb-6">
                {category.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-black/65 hover:text-black transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
