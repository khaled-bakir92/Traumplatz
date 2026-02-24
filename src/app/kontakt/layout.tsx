import { Metadata } from "next";
import { businessInfo } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Kontakt | Traumplatz – Jetzt anfragen",
  description: `Kontaktieren Sie Traumplatz in ${businessInfo.address.city}. Telefon: ${businessInfo.contact.phoneDisplay}, E-Mail: ${businessInfo.contact.email}. Kostenlose Beratung für Gartenpflege, Hausmeisterservice, Gebäudereinigung und Winterdienst.`,
  keywords: [
    "Kontakt Traumplatz",
    "Gartenpflege anfragen",
    "Hausmeisterservice Kontakt",
    "Bensheim Dienstleister",
    "Kostenlose Beratung",
    "Angebot anfordern",
  ],
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: "Kontakt | Traumplatz – Jetzt anfragen",
    description: `Kontaktieren Sie uns für Gartenpflege, Hausmeisterservice, Gebäudereinigung und Winterdienst in ${businessInfo.address.city} und Umgebung.`,
    url: "/kontakt",
    type: "website",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
