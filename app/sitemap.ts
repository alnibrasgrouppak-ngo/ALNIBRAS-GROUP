import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alnibras.pk";

  // Explicitly reference all 12 system routes including the 7 core pages
  // alongside operational sub-modules and standard auxiliary pathways
  const routes = [
    // Core Layouts
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/about", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/skills", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/verticals", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/finance", priority: 0.8, changeFrequency: "weekly" as const },
    // Auxiliary & System Routes
    { path: "/privacy", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/terms", priority: 0.5, changeFrequency: "monthly" as const },
    // Specific Operational Vertical Hubs
    { path: "/verticals/education", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/verticals/finance", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/verticals/technology", priority: 0.8, changeFrequency: "weekly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
