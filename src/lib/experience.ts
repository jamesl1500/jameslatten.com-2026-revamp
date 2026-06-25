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
    role: "Technology Development Analyst / Associate",
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
  {
    id: "03",
    slug: "self-employed",
    role: "Software Engineer",
    company: "Self-Employed",
    location: "Lorain, OH",
    period: "Feb 2017 - Oct 2022",
    summary:
      "Delivered full-stack web applications and cloud solutions for clients across industries with strong retention outcomes.",
    highlights: [
      "Designed and delivered custom web applications using React, Node.js, and AWS.",
      "Achieved a 90% client retention rate and increased client productivity by 30%.",
      "Implemented RESTful APIs and cloud-based architectures, cutting server costs by 25%.",
      "Specialised in pixel-perfect frontend development with HTML, CSS, SASS, and JavaScript/TypeScript.",
      "Built robust database systems using MySQL and PostgreSQL with complex SQL data flows.",
      "Deployed scalable server infrastructure on AWS for clients across various industries.",
    ],
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experiences.find((experience) => experience.slug === slug);
}
