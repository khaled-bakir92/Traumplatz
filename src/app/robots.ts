import { MetadataRoute } from "next";
import { businessInfo } from "@/lib/seo-config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = businessInfo.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      { userAgent: "GPTBot",        allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot",     allow: "/" },
      { userAgent: "anthropic-ai",  allow: "/" },
      { userAgent: "Applebot",      allow: "/" },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
