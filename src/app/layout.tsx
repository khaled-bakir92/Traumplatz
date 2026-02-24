import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  authors: [{ name: businessInfo.name }],
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

  // Verification (später hinzufügen wenn vorhanden)
  // verification: {
  //   google: "your-google-verification-code",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  // Manifest für PWA
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
