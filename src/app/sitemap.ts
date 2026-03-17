import { MetadataRoute } from "next";
import {
  services,
  businessInfo,
  generateAllServiceCityParams,
  sitemapDates,
} from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = businessInfo.url;

  // Hauptseiten
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(sitemapDates.homepage),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: new Date(sitemapDates.servicePages),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(sitemapDates.homepage),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: new Date(sitemapDates.homepage),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(sitemapDates.staticPages),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(sitemapDates.staticPages),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Service-Übersichtsseiten (z.B. /gartenpflege)
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: new Date(sitemapDates.servicePages),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Lokale Landingpages (z.B. /gartenpflege/darmstadt)
  const serviceParams = generateAllServiceCityParams();
  const localPages: MetadataRoute.Sitemap = serviceParams.map(
    ({ service, city }) => ({
      url: `${baseUrl}/${service}/${city}`,
      lastModified: new Date(sitemapDates.cityPages),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })
  );

  return [...staticPages, ...servicePages, ...localPages];
}
