import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { businessInfo, services, cities } from "@/lib/seo-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Viewport Konfiguration (separat von Metadata in Next.js 14+)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// Globale Metadata mit metadataBase für Canonical URLs
export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.url),

  // Standard Titel und Beschreibung
  title: {
    default: `${businessInfo.name} | Gartenpflege, Hausmeisterservice, Reinigung & Winterdienst`,
    template: `%s | ${businessInfo.name}`,
  },
  description: businessInfo.description,

  // Keywords (für einige Suchmaschinen noch relevant)
  keywords: [
    "Gartenpflege",
    "Hausmeisterservice",
    "Gebäudereinigung",
    "Winterdienst",
    "Bensheim",
    "Bergstraße",
    "Darmstadt",
    ...services.flatMap((s) => s.keywords.slice(0, 3)),
    ...cities.slice(0, 6).map((c) => c.name),
  ],

  // Autoren und Publisher
  authors: [{ name: "Khaled Bakir" }],
  creator: businessInfo.name,
  publisher: businessInfo.name,

  // Robots Direktiven
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

  // Open Graph für Social Sharing (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: businessInfo.url,
    siteName: businessInfo.name,
    title: `${businessInfo.name} | Gartenpflege, Hausmeisterservice, Reinigung & Winterdienst`,
    description: businessInfo.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${businessInfo.name} - Professionelle Dienstleistungen an der Bergstraße`,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${businessInfo.name} | Gartenpflege, Hausmeisterservice, Reinigung & Winterdienst`,
    description: businessInfo.description,
    images: ["/og-image.png"],
  },

  // Zusätzliche Meta-Informationen
  category: "Dienstleistungen",
  classification: "Business",

  // Google Search Console Verifizierung
  // 1. Gehe zu https://search.google.com/search-console
  // 2. Füge deine Domain hinzu → wähle "HTML-Meta-Tag" Methode
  // 3. Kopiere den Inhalt des "content"-Attributs (ohne Anführungszeichen)
  // 4. Ersetze "DEIN_CODE_HIER" mit deinem Code und entferne den Kommentar
  // verification: {
  //   google: "DEIN_CODE_HIER",
  // },

  // Alternative Sprachen (falls mehrsprachig)
  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "/",
    },
  },

  // App-spezifische Metadaten
  applicationName: businessInfo.name,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Icons
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },

  // Manifest für PWA
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Preconnect für externe Ressourcen — reduziert Ladezeit */}
        <link rel="preconnect" href="https://tile.openstreetmap.org" />
        <link rel="dns-prefetch" href="https://tile.openstreetmap.org" />
        <link rel="preconnect" href="https://www.openstreetmap.org" />
        <link rel="dns-prefetch" href="https://www.openstreetmap.org" />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
