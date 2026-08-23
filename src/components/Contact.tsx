"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

type FormStatus = "idle" | "submitting" | "success" | "error";

const contactDetails = [
  {
    label: "Email",
    value: "hello@jameslatten.com",
    href: "mailto:hello@jameslatten.com",
    external: false,
  },
  {
    label: "Phone",
    value: "(216) 889-7822",
    href: "tel:+12168897822",
    external: false,
  },
  {
    label: "Location",
    value: "Sheffield Lake, Ohio",
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

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Form isn't configured yet — email hello@jameslatten.com directly."
      );
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "New message from jameslatten.com");
    formData.append("from_name", "jameslatten.com contact form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error — please try again or email directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-black/15 px-8 py-10 flex flex-col gap-2">
        <p className="text-sm font-bold">Message sent.</p>
        <p className="text-sm text-black/60">
          Thanks for reaching out — I&apos;ll reply as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-xl">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs tracking-widest uppercase text-black/40">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="border border-black/15 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs tracking-widest uppercase text-black/40">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="border border-black/15 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs tracking-widest uppercase text-black/40">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell me about the role or project..."
          className="border border-black/15 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start text-xs tracking-widest uppercase px-10 py-5 bg-black text-white hover:bg-black/85 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

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
        <div className="flex flex-col gap-12 pb-20 border-b border-black/10">
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
          >
            <ContactForm />
            <p className="text-xs text-black/35 mt-6">
              Prefer email?{" "}
              <Link
                href="mailto:hello@jameslatten.com"
                className="underline hover:text-black transition-colors"
              >
                hello@jameslatten.com
              </Link>
            </p>
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
