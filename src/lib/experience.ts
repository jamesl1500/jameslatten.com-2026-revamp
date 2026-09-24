export type Experience = {
  id: string;
  slug: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    id: "01",
    slug: "pnc-bank",
    role: "Software Engineer, Technology Development Program",
    company: "PNC Bank",
    location: "Strongsville, OH",
    period: "Feb 2026 - Present",
    summary:
      "Building and improving distributed systems in PNC's Technology Development Program with a focus on high-impact software engineering.",
    highlights: [
      "Participating in the Technology Development Program focused on Software Engineering in banking.",
      "Working on highly complex distributed systems serving millions of customers daily.",
      "Leveraged React, Angular, Vue, Next.js, Java, TypeScript, and JavaScript to deliver modern, high-impact features.",
      "Improved system performance by 30% and reduced processing time by 15% through optimised data structures and algorithms.",
      "Led complex projects across multiple teams, delivering modern and high-impact solutions.",
      "Integrated third-party APIs and leveraged AI/ML tools for scalable, intelligent solutions.",
    ],
  },
  {
    id: "02",
    slug: "american-marketing-association",
    role: "Web Developer",
    company: "American Marketing Association",
    location: "Chicago, IL",
    period: "Oct 2022 - Oct 2025",
    summary:
      "Owned feature development and platform improvements for a large-scale WooCommerce and membership ecosystem.",
    highlights: [
      "Built and maintained large-scale WordPress and WooCommerce systems used by thousands of customers.",
      "Engineered new features and functionality that boosted revenue by 25%.",
      "Leveraged HTML, CSS, TypeScript, JavaScript, and PHP for frontend and backend development.",
      "Created and integrated third-party APIs using JavaScript and PHP.",
      "Used AWS to build scalable server infrastructure running web applications, APIs, and microservices.",
      "Applied AI and Machine Learning to develop complex, scalable solutions.",
    ],
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experiences.find((experience) => experience.slug === slug);
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "Feb 2026 - Present" → { startDate: "2026-02" } (ISO 8601 for JSON-LD) */
export function periodToDates(period: string): { startDate?: string; endDate?: string } {
  const toIso = (part: string) => {
    const [month, year] = part.trim().split(/\s+/);
    const index = MONTHS.indexOf(month.slice(0, 3));
    return index === -1 || !year ? undefined : `${year}-${String(index + 1).padStart(2, "0")}`;
  };
  const [start, end] = period.split(/\s+-\s+/);
  return { startDate: toIso(start), endDate: end ? toIso(end) : undefined };
}
