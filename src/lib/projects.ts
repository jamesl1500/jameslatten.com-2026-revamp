export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  year: string;
  role: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "foundry-frame",
    title: "Foundry Frame",
    tagline: "Creative web design agency built for modern brands.",
    description: [
      "Foundry Frame is a creative web design and development agency I founded, delivering high-quality digital experiences across industries. The agency bridges the gap between design and engineering — producing pixel-perfect frontends backed by scalable cloud architectures.",
      "From custom React applications to full WooCommerce storefronts, every project is built with performance and longevity in mind. Foundry Frame has maintained a 90% client retention rate and helped clients measurably increase both productivity and revenue.",
      "Services span full-stack web development, AWS infrastructure, REST API design, and AI-assisted tooling — with every project delivered from concept through to deployment.",
    ],
    year: "2025",
    role: "Founder & Lead Engineer",
    tags: ["React", "Next.js", "TypeScript", "Vercel", "Node.js"],
    links: {
      live: "https://www.foundryframe.com",
      github: "https://github.com/jamesl1500/foundryframe.com-web",
    },
  },
  {
    slug: "ama-commerce",
    title: "AMA Commerce Platform",
    tagline: "Large-scale membership and e-commerce system for a national marketing organization.",
    description: [
      "Built and maintained the commerce and membership platform for the American Marketing Association — a large-scale WordPress and WooCommerce system serving thousands of marketers nationwide.",
      "Engineered new features and third-party integrations that boosted revenue by 25% through improved checkout flows, personalised member experiences, and digital product delivery.",
      "Wrote custom PHP extensions to support complex membership workflows, event registrations, and content automation. Deployed and managed scalable AWS infrastructure to ensure reliable performance under traffic spikes.",
      "Applied AI and Machine Learning tooling to automate content workflows and deliver targeted personalisation at scale.",
    ],
    year: "2022",
    role: "Web Developer",
    tags: ["PHP", "WordPress", "WooCommerce", "JavaScript", "TypeScript", "AWS", "MySQL"],
    links: {},
  },
  {
    slug: "pnc-banking-platform",
    title: "PNC Banking Platform",
    tagline: "Distributed systems infrastructure serving millions of customers daily.",
    description: [
      "As part of the Technology Development Program at PNC Bank, I contribute to highly complex distributed systems powering core banking features for millions of customers every day.",
      "Led performance optimisation initiatives that improved system throughput by 30% and reduced processing time by 15% — achieved through targeted algorithmic improvements and data structure optimisation across critical service paths.",
      "Delivered modern, high-impact features across the banking stack using React, Angular, Java, and TypeScript, working within cross-functional Agile teams across multiple product areas.",
      "Integrated third-party APIs and leveraged AI/ML tooling to build scalable, intelligent solutions within PNC's enterprise architecture.",
    ],
    year: "2026",
    role: "Technology Development Associate/Analyst",
    tags: ["React", "Angular", "TypeScript", "Java", "Spring Boot", "AWS", "Azure", "CI/CD"],
    links: {},
  },
  {
    slug: "kanban-flo",
    title: "Kanban Flo",
    tagline: "AI-powered task management app for individuals and teams.",
    description: [
      "Designed and developed Kanban Flo, a task management application that combines a user-friendly kanban interface with AI-powered features to help individuals and teams stay organized and productive.",
      "Implemented core features such as task creation, drag-and-drop functionality, due date reminders, and collaboration tools using React, TypeScript, and Node.js.",
      "Integrated AI capabilities to provide intelligent task suggestions, automated prioritization, and natural language processing for task input — enhancing user experience and productivity.",
      "Deployed the application on AWS using serverless architecture to ensure scalability and reliability while minimizing operational overhead.",
    ],
    year: "2025",
    role: "Full-Stack Developer",
    tags: ["React", "TypeScript", "Node.js", "Vercel", "Supabase", "AI/ML"],
    links: {
      live: "https://www.kanbanflo.com",
      github: "https://github.com/jamesl1500/kanbanflo",
    },
  },
  {
    slug: "prereqpilot",
    title: "PrereqPilot",
    tagline: "AI-powered course planning tool for university students.",
    description: [
      "Created PrereqPilot, an AI-powered course planning tool designed to help university students navigate complex prerequisite structures and optimize their academic paths.",
      "Developed a user-friendly interface using React and TypeScript, allowing students to input their degree requirements and receive personalized course recommendations based on their academic history and goals.",
      "Leveraged AI algorithms to analyze course data, identify optimal scheduling options, and provide insights on potential career paths based on selected courses.",
      "Deployed the application on AWS, ensuring scalability and reliability while providing a seamless user experience for students across multiple universities.",
    ],
    year: "2026",
    role: "Full-Stack Developer",
    tags: ["React", "TypeScript", "Node.js", "Vercel", "Supabase", "AI/ML"],
    links: {
      live: "https://www.prereqpilot.com",
      github: "https://github.com/jamesl1500/prereqpilot.com",
    },
  },
  {
    slug: "scriverly",
    title: "Scriverly",
    tagline: "AI-assisted writing tool for college students and essay writers.",
    description: [
      "Developed Scriverly, an AI-assisted writing tool designed to help college students and essay writers improve their writing skills and produce high-quality content.",
      "Implemented features such as grammar and style suggestions, plagiarism detection, and real-time feedback using React, TypeScript, and Node.js.",
      "Integrated advanced AI models to provide personalized writing assistance, including topic suggestions, sentence restructuring, and vocabulary enhancement.",
      "Deployed the application on AWS, ensuring scalability and reliability while providing a seamless user experience for writers across various platforms.",
    ],
    year: "2025",
    role: "Full-Stack Developer",
    tags: ["React", "TypeScript", "Node.js", "Vercel", "Supabase", "AI/ML"],
    links: {
      live: "https://www.scriverly.com",
      github: "https://github.com/jamesl1500/scriverly.com",
    },
  },
  {
    slug: "syllaplan",
    title: "Syllaplan",
    tagline: "AI-powered syllabus parser that turns course PDFs into calendars.",
    description: [
      "Built Syllaplan, a free tool that automates the tedious process of turning course syllabi into organized calendars and task lists for students juggling multiple classes.",
      "Students upload a syllabus PDF and the tool uses Claude (Anthropic's AI) to extract exam dates, assignment due dates, and key deadlines via natural language processing — working across any school or course format.",
      "Designed a human-in-the-loop review step so nothing saves automatically: extracted dates are surfaced for the student to review and edit before confirming them to their calendar, prioritizing accuracy over blind automation.",
      "Built the account system and calendar/task views to consolidate every class into a single source of truth, with privacy controls around stored syllabus data.",
    ],
    year: "2026",
    role: "Founder & Full-Stack Developer",
    tags: ["React", "TypeScript", "Node.js", "Vercel", "Supabase", "AI/ML", "Claude API"],
    links: {
      live: "https://www.syllaplan.com",
      github: "https://github.com/jamesl1500/syllaplan.com",
    },
  },
  {
    slug: "cardcrafty",
    title: "Cardcrafty",
    tagline: "Flashcard web app for students, built with React and Supabase.",
    description: [
      "Created Cardcrafty, a flashcard web application designed to help students study and retain information effectively through spaced repetition and interactive features.",
      "Built the frontend using React and TypeScript, providing a user-friendly interface for creating, organizing, and reviewing flashcards across various subjects.",
      "Implemented backend functionality with Node.js and Supabase, enabling secure user authentication, data storage, and real-time synchronization of flashcard decks.",
      "Deployed the application on Vercel, ensuring fast load times and a seamless user experience for students accessing their flashcards from any device.",
    ],
    year: "2024",
    role: "Full-Stack Developer",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "Vercel", "Supabase"],
    links: {
      live: "https://www.cardcrafty.com",
      github: "https://github.com/jamesl1500/cardcrafty",
    },
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
