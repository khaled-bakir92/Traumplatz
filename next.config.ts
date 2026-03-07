import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
