import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // X-Powered-By Header entfernen (kein Tech-Stack verraten)
  poweredByHeader: false,

  images: {
    // Moderne Formate: AVIF zuerst (kleinste Dateigröße), dann WebP als Fallback
    formats: ["image/avif", "image/webp"],
    // Bilder 30 Tage im CDN-Cache halten (in Sekunden)
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Gerätebreiten für srcset — deckt Mobil bis 4K ab
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Bildbreiten für fill/responsive Images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // HTTP Security Headers — verbessert Lighthouse "Best Practices" Score
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Verhindert MIME-Type-Sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Verhindert Clickjacking (Seite kann nicht in iframes eingebettet werden)
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Steuert Referrer-Informationen bei Links
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          // Schränkt Browser-Features ein (Kamera, Mikrofon, etc.)
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Erzwingt HTTPS für 1 Jahr (nur in Produktion sinnvoll)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          // Grundlegende Content-Security-Policy
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
