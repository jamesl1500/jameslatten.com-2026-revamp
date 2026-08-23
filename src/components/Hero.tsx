"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "2", label: "Companies" },
  { value: "30%", label: "Performance Gains" },
  { value: "90%", label: "Client Retention" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.35,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col overflow-hidden">
      {/* Main content */}
      <div className="flex-1 flex flex-col justify-end max-w-screen-xl mx-auto w-full px-6 md:px-12 pb-16 pt-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Label */}
          <div className="overflow-hidden mb-6">
            <motion.div
              variants={lineVariants}
              className="flex flex-wrap items-center gap-3"
            >
              <p className="text-xs tracking-widest uppercase text-white/40">
                Software Engineer &mdash; Sheffield Lake, Ohio
              </p>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-white/70 border border-white/20 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Open to New Opportunities
              </span>
            </motion.div>
          </div>

          {/* Headline */}
          <h1 className="contents">
            {/* Headline line one */}
            <div className="overflow-hidden">
              <motion.span
                variants={lineVariants}
                className="block text-[clamp(3.5rem,11vw,10rem)] font-black leading-[0.9] tracking-[-0.03em] text-white"
              >
                James
              </motion.span>
            </div>

            {/* Headline line two */}
            <div className="overflow-hidden mb-12">
              <motion.span
                variants={lineVariants}
                className="block text-[clamp(3.5rem,11vw,10rem)] font-black leading-[0.9] tracking-[-0.03em] text-white/20"
              >
                Latten.
              </motion.span>
            </div>
          </h1>

          {/* Description and CTAs */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="overflow-hidden max-w-lg">
              <motion.p
                variants={lineVariants}
                className="text-base md:text-lg text-white/55 leading-relaxed"
              >
                Full-stack engineer specialising in React, TypeScript, and cloud-based
                systems. Currently building distributed systems at PNC Bank used by
                millions of customers.
              </motion.p>
            </div>

            <div className="overflow-hidden shrink-0">
              <motion.div
                variants={lineVariants}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="#experience"
                  className="text-xs tracking-widest uppercase px-8 py-4 bg-white text-black hover:bg-white/85 transition-colors text-center"
                >
                  View Work
                </Link>
                <Link
                  href="#contact"
                  className="text-xs tracking-widest uppercase px-8 py-4 border border-white/25 text-white hover:border-white hover:bg-white/5 transition-colors text-center"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-white/10 max-w-screen-xl mx-auto w-full px-6 md:px-12 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.3 + i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="text-3xl md:text-4xl font-black text-white tabular-nums">
                {stat.value}
              </p>
              <p className="text-xs tracking-widest uppercase text-white/30 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
