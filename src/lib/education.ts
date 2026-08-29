export type Education = {
  slug: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  type: "Degree" | "Certificate";
  highlights: string[];
};

export const education: Education[] = [
  {
    slug: "wgu-information-technology-ms",
    degree: "Master of Science, Information Technology",
    institution: "Western Governors University",
    location: "Salt Lake City, Utah",
    year: "2026",
    type: "Degree",
    highlights: [
      "Advanced coursework in information technology",
      "Networking, security, and cloud computing",
      "Software development and project management",
      "Data analysis and database management",
      "Project management and leadership skills"
    ],
  },
  {
    slug: "wgu-psychology-bs",
    degree: "Bachelor of Science, Psychology",
    institution: "Western Governors University",
    location: "Salt Lake City, Utah",
    year: "2025",
    type: "Degree",
    highlights: [
      "Foundational coursework in psychology",
      "Research methods and statistical analysis",
      "Cognitive, developmental, and social psychology",
      "Behavioral and mental health studies",
    ],
  },
  {
    slug: "tri-c-aab-programming-development",
    degree: "Associates of Applied Business, Programming and Development",
    institution: "Cuyahoga Community College",
    location: "Cleveland, OH",
    year: "2026",
    type: "Degree",
    highlights: [
      "Advanced Data Structures and Algorithms",
      "Networking Fundamentals and servers",
      "Distributed systems with modern and legacy technologies",
      "PHP, Java, C#, HTML, CSS, and React",
      "Full Stack Development",
    ],
  },
  {
    slug: "tri-c-cert-programming-development",
    degree: "Certificate in IT-Programming & Development",
    institution: "Cuyahoga Community College",
    location: "Cleveland, OH",
    year: "2026",
    type: "Certificate",
    highlights: [
      "PHP, Java, C#, HTML, CSS, and React",
      "Full Stack Development",
      "Computer Science and Data Structures and Algorithms",
    ],
  },
  {
    slug: "tri-c-cert-web-app-dev",
    degree: "Certificate in IT-Web Application Development",
    institution: "Cuyahoga Community College",
    location: "Cleveland, OH",
    year: "2026",
    type: "Certificate",
    highlights: [
      "PHP, Java, C#, HTML, CSS, and React",
      "Full Stack Development",
      "Computer Science and Data Structures and Algorithms",
    ],
  },
  {
    slug: "tri-c-cert-dotnet-programming",
    degree: "Certificate in .NET Programming",
    institution: "Cuyahoga Community College",
    location: "Cleveland, OH",
    year: "2026",
    type: "Certificate",
    highlights: [
      "C#, ASP.NET, and Blazor",
      "Full Stack Development with .NET technologies",
      "Computer Science and Data Structures and Algorithms",
    ],
  },
  {
    slug: "lccc-cert-web-programming",
    degree: "Certificate in Web Programming Fundamentals",
    institution: "Lorain County Community College",
    location: "Elyria, OH",
    year: "2023",
    type: "Certificate",
    highlights: [
      "HTML, CSS, JavaScript, and PHP",
      "Web Development and Design",
      "Back-end development focus",
    ],
  },
  {
    slug: "lccc-cert-web-design",
    degree: "Certificate in Web Design Fundamentals",
    institution: "Lorain County Community College",
    location: "Elyria, OH",
    year: "2023",
    type: "Certificate",
    highlights: [
      "HTML, CSS, and JavaScript",
      "Web Design and Front-End Development",
    ],
  },
  {
    slug: "lccc-cert-software-development",
    degree: "Certificate in Software Development",
    institution: "Lorain County Community College",
    location: "Elyria, Ohio",
    year: "2023",
    type: "Certificate",
    highlights: [
      "Computer Science and Data Structures and Algorithms",
      "PHP, Java, C#, and Python",
      "Full Stack Development",
    ],
  },
];

export function getEducation(slug: string): Education | undefined {
  return education.find((entry) => entry.slug === slug);
}
