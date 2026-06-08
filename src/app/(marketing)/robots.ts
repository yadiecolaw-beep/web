import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Cambia esta URL por el dominio definitivo cuando hagas el deploy en Vercel
  const baseUrl = "https://ecolaw.mx"; 

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}