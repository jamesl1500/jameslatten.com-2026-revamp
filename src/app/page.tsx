import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "James Latten",
  url: "https://www.jameslatten.com",
  email: "hello@jameslatten.com",
  telephone: "+14409218245",
  jobTitle: "Software Engineer",
  description:
    "Full-stack Software Engineer with 4+ years of experience building scalable web applications and cloud-based systems using React, TypeScript, PHP, AWS, and more.",
  image: "https://www.jameslatten.com/opengraph-image",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lorain",
    addressRegion: "OH",
    addressCountry: "US",
  },
  worksFor: {
    "@type": "Organization",
    name: "PNC Bank",
    url: "https://www.pnc.com",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Western Governors University",
    },
    {
      "@type": "EducationalOrganization",
      name: "Cuyahoga Community College",
    },
    {
      "@type": "EducationalOrganization",
      name: "Lorain County Community College",
    },
  ],
  knowsAbout: [
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
    "REST APIs",
    "CI/CD",
    "Agile",
    "WordPress",
    "Laravel",
    "Spring Boot",
    "Angular",
    "Full Stack Development",
    "Cloud Computing",
    "Machine Learning",
  ],
  sameAs: [
    "https://github.com/jameslattenjr",
    "https://www.linkedin.com/in/jameslattenjr",
    "https://www.foundryframe.com",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "James Latten — Software Engineer",
  url: "https://www.jameslatten.com",
  description:
    "Portfolio website of James Latten, a full-stack Software Engineer based in Lorain, Ohio.",
  author: {
    "@type": "Person",
    name: "James Latten",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
