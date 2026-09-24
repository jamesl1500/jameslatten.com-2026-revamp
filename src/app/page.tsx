import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { education } from "@/lib/education";
import { PERSON_ID, SITE_URL, SOCIAL_PROFILES, WEBSITE_ID } from "@/lib/seo";

const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "James Latten",
  givenName: "James",
  familyName: "Latten",
  url: "https://www.jameslatten.com",
  email: "hello@jameslatten.com",
  telephone: "+12168897822",
  jobTitle: "Software Engineer, Technology Development Program",
  description:
    "Full-stack Software Engineer with 4+ years of experience building scalable web applications and cloud-based systems using React, TypeScript, PHP, AWS, and more.",
  image: `${SITE_URL}/avatar.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sheffield Lake",
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
  hasCredential: education.map((entry) => ({
    "@type": "EducationalOccupationalCredential",
    name: entry.degree,
    credentialCategory: entry.type,
    url: `${SITE_URL}/education/${entry.slug}`,
    recognizedBy: { "@type": "EducationalOrganization", name: entry.institution },
  })),
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
    SOCIAL_PROFILES.github,
    SOCIAL_PROFILES.linkedin,
    SOCIAL_PROFILES.x,
    "https://www.foundryframe.com",
  ],
};

// ProfilePage is Google's recommended wrapper for a person's homepage; the
// Person and WebSite nodes carry stable @ids that every other page references.
const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profile`,
  url: SITE_URL,
  name: "James Latten — Software Engineer",
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: personSchema,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "James Latten — Software Engineer",
  url: "https://www.jameslatten.com",
  description:
    "Portfolio website of James Latten, a full-stack Software Engineer based in Sheffield Lake, Ohio.",
  inLanguage: "en-US",
  publisher: { "@id": PERSON_ID },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
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
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
