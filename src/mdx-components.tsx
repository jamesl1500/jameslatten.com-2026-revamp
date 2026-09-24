import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

// Maps markdown output onto the site's typographic system. Required by
// @next/mdx in the App Router — applies to every .mdx file.

function Anchor({ href = "", ...props }: ComponentPropsWithoutRef<"a">) {
  const className =
    "underline underline-offset-4 decoration-black/25 hover:decoration-black transition-colors";

  if (href.startsWith("/") || href.startsWith("#")) {
    return <Link href={href} className={className} {...props} />;
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props} />;
}

const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="scroll-mt-24 text-2xl md:text-3xl font-black tracking-tight leading-tight text-black mt-16 mb-6"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="scroll-mt-24 text-xl font-bold tracking-tight text-black mt-12 mb-4" {...props} />
  ),
  p: (props) => <p className="mb-6" {...props} />,
  a: Anchor,
  strong: (props) => <strong className="font-bold text-black" {...props} />,
  ul: (props) => <ul className="list-disc pl-6 mb-6 flex flex-col gap-2 marker:text-black/30" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 mb-6 flex flex-col gap-2 marker:text-black/30" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-2 border-black pl-6 my-10 text-black/80 italic" {...props} />
  ),
  hr: () => <hr className="my-16 border-black/10" />,
  // Block code is highlighted by rehype-pretty-code; see .blog-prose in globals.css
  pre: (props) => (
    <pre
      className="my-8 -mx-6 md:mx-0 overflow-x-auto border-y md:border border-black/10 bg-black/[0.025] py-5 text-[13px] leading-relaxed"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-8 overflow-x-auto">
      <table className="w-full text-sm border-collapse" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="text-left text-xs tracking-widest uppercase text-black/40 font-normal border-b border-black/15 py-3 pr-6"
      {...props}
    />
  ),
  td: (props) => <td className="border-b border-black/10 py-3 pr-6 align-top" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
