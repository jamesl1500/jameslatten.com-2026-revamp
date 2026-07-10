import type { MetadataRoute } from "next";
import { experiences } from "@/lib/experience";
import { education } from "@/lib/education";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.jameslatten.com";
  const lastModified = new Date("2026-07-09");

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const experienceRoutes: MetadataRoute.Sitemap = experiences.map((experience) => ({
    url: `${baseUrl}/experience/${experience.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const educationRoutes: MetadataRoute.Sitemap = education.map((entry) => ({
    url: `${baseUrl}/education/${entry.slug}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.65,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/education`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.75,
    },
    ...projectRoutes,
    ...experienceRoutes,
    ...educationRoutes,
  ];
}
