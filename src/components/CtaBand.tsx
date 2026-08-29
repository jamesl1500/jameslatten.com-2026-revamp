import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-black/10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none max-w-xl">
          Let&apos;s Build Something Great
        </h2>
        <Link
          href="/#contact"
          className="inline-block shrink-0 text-xs tracking-widest uppercase px-10 py-5 bg-black text-white hover:bg-black/85 transition-colors text-center"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
