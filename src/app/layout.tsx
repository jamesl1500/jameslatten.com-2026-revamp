import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jameslatten.com"),

  title: {
    default: "James Latten — Software Engineer | React, TypeScript, Next.js",
    template: "%s | James Latten",
  },

  description:
    "James Latten is a full-stack Software Engineer based in Lorain, Ohio with 4+ years of experience building scalable React, TypeScript, and cloud-based applications. Currently a Technology Development Analyst at PNC Bank. Open to consulting and engineering discussions.",

  keywords: [
    // Name / identity
    "James Latten",
    "James Latten Software Engineer",
    "James Latten Developer",
    "jameslattenjr",
    // Role + location (high employer/recruiter intent)
    "Software Engineer Ohio",
    "Software Engineer Lorain Ohio",
    "Software Engineer Cleveland Ohio",
    "Full Stack Developer Ohio",
    "Full Stack Developer Lorain Ohio",
    "Web Developer Lorain Ohio",
    "Web Developer Ohio",
    // Technology (what recruiters search for)
    "React Developer Ohio",
    "React Developer for hire",
    "TypeScript Developer",
    "Next.js Developer",
    "JavaScript Developer Ohio",
    "PHP Developer Ohio",
    "Java Developer Ohio",
    "AWS Developer Ohio",
    "Node.js Developer Ohio",
    // Client-intent searches
    "Hire Software Engineer Ohio",
    "Hire React Developer",
    "Freelance Web Developer Ohio",
    "Custom Web Application Developer",
    "REST API Developer Ohio",
    // Compound tech terms
    "React TypeScript Next.js Developer",
    "Full Stack React PHP Developer",
    "Cloud Application Developer AWS",
    // Current employer context
    "PNC Bank Technology Analyst",
  ],

  authors: [{ name: "James Latten", url: "https://jameslatten.com" }],
  creator: "James Latten",
  publisher: "James Latten",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://jameslatten.com",
  },

  openGraph: {
    title: "James Latten — Software Engineer | React, TypeScript, Next.js",
    description:
      "Full-stack Software Engineer with 4+ years building scalable React, TypeScript, and cloud-based systems. Currently at PNC Bank. Based in Lorain, Ohio.",
    url: "https://jameslatten.com",
    siteName: "James Latten",
    locale: "en_US",
    type: "profile",
    firstName: "James",
    lastName: "Latten",
    username: "jameslattenjr",
  },

  twitter: {
    card: "summary_large_image",
    title: "James Latten — Software Engineer | React, TypeScript, Next.js",
    description:
      "Full-stack Software Engineer with 4+ years building React, TypeScript, and cloud-based systems. Based in Lorain, Ohio.",
    creator: "@jameslattenjr",
    site: "@jameslattenjr",
  },

  category: "technology",

  verification: {
    google: "your-google-search-console-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-white text-black overflow-x-hidden">{children}</body>
    </html>
  );
}
