import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Cambia esta URL por el dominio definitivo cuando hagas el deploy
  const baseUrl = "https://ecolaw.mx"; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}#servicios`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}#extranjeros`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}