import { MetadataRoute } from "next";
import { businessInfo } from "@/lib/seo-config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = businessInfo.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
