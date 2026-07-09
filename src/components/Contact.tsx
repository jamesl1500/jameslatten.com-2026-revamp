"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const contactDetails = [
  {
    label: "Email",
    value: "hello@jameslatten.com",
    href: "mailto:hello@jameslatten.com",
    external: false,
  },
  {
    label: "Phone",
    value: "(440) 921-8245",
    href: "tel:+14409218245",
    external: false,
  },
  {
    label: "Location",
    value: "Lorain, Ohio",
    href: null,
    external: false,
  },
  {
    label: "GitHub",
    value: "jamesl1500",
    href: "https://github.com/jamesl1500",
    external: true,
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="bg-white py-24 md:py-36">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-widest uppercase text-black/35 mb-16"
        >
          Contact
        </motion.p>

        {/* Big CTA block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 pb-20 border-b border-black/10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-none max-w-2xl"
          >
            Let&apos;s Build Something Great
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0"
          >
            <Link
              href="mailto:hello@jameslatten.com"
              className="inline-block text-xs tracking-widest uppercase px-10 py-5 bg-black text-white hover:bg-black/85 transition-colors"
            >
              Send Me an Email
            </Link>
          </motion.div>
        </div>

        {/* Contact details row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
          {contactDetails.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.5 + i * 0.09 }}
            >
              <p className="text-xs tracking-widest uppercase text-black/30 mb-3">
                {item.label}
              </p>

              {item.href ? (
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-black/60 hover:text-black transition-colors break-all"
                >
                  {item.value}
                </Link>
              ) : (
                <p className="text-sm text-black/60">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Secondary links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-6 mt-16 pt-16 border-t border-black/10"
        >
          <Link
            href="https://www.linkedin.com/in/jameslattenjr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-black/35 hover:text-black transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/jamesl1500"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-black/35 hover:text-black transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.foundryframe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-black/35 hover:text-black transition-colors"
          >
            Foundry Frame Agency
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
