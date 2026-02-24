import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LeistungenHero } from "@/components/leistungen/hero";
import { ServiceShowcase, ServiceShowcaseData } from "@/components/leistungen/service-showcase";
import { LeistungenCTA } from "@/components/leistungen/cta";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import {
  Wrench,
  Building2,
  Key,
  ClipboardCheck,
  Lightbulb,
  Trash2,
  Leaf,
  Scissors,
  TreeDeciduous,
  Flower2,
  Droplets,
  Sparkles,
  Building,
  Footprints,
  SprayCan,
  Stethoscope,
  ShowerHead,
  Snowflake,
  Thermometer,
  FileCheck,
  Clock,
  Route,
  Zap,
  Calendar,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Unsere Leistungen | Traumplatz - Gartenpflege, Hausmeisterservice & mehr",
  description:
    "Entdecken Sie unsere professionellen Dienstleistungen: Hausmeisterservice, Gartenpflege, Gebäudereinigung und Winterdienst in Bensheim und der Region Bergstraße. Kostenlose Erstberatung!",
  keywords: [
    "Leistungen",
    "Hausmeisterservice",
    "Gartenpflege",
    "Gebäudereinigung",
    "Glasreinigung",
    "Winterdienst",
    "Schneeräumung",
    "Bensheim",
    "Bergstraße",
  ],
  alternates: {
    canonical: "/leistungen",
  },
  openGraph: {
    title: "Unsere Leistungen | Traumplatz",
    description:
      "Professionelle Dienstleistungen für Ihr Objekt: Hausmeisterservice, Gartenpflege, Gebäudereinigung und Winterdienst.",
    url: "/leistungen",
    type: "website",
  },
};

const serviceShowcases: ServiceShowcaseData[] = [
  {
    slug: "hausmeisterservice",
    name: "Hausmeisterservice",
    tagline: "Ihr Objekt in besten Händen",
    description:
      "Zuverlässiger Hausmeisterservice für Wohnanlagen, Gewerbeimmobilien und öffentliche Einrichtungen. Von Kleinreparaturen über Objektbetreuung bis hin zum kompletten Facility Management – wir sind Ihr kompetenter Partner vor Ort.",
    image: "/leistungCard/HausmeisterCard.png",
    imageAlt: "Professioneller Hausmeisterservice - Objektbetreuung und Kleinreparaturen",
    icon: Wrench,
    features: [
      {
        icon: Wrench,
        title: "Kleinreparaturen",
        description: "Schnelle Behebung von Mängeln",
      },
      {
        icon: Building2,
        title: "Objektbetreuung",
        description: "Regelmäßige Kontrollgänge",
      },
      {
        icon: Key,
        title: "Schlüsseldienst",
        description: "Zuverlässige Schlüsselverwaltung",
      },
      {
        icon: ClipboardCheck,
        title: "Facility Management",
        description: "Koordination aller Gewerke",
      },
      {
        icon: Lightbulb,
        title: "Beleuchtung",
        description: "Wartung der Außenbeleuchtung",
      },
      {
        icon: Trash2,
        title: "Müllentsorgung",
        description: "Ordnungsgemäße Abfallwirtschaft",
      },
    ],
    badge: {
      text: "Rund um die Uhr",
      icon: Clock,
    },
  },
  {
    slug: "gartenpflege",
    name: "Gartenpflege & Rasenschnitt",
    tagline: "Ihr Garten in voller Pracht",
    description:
      "Professionelle Gartenpflege für Privat- und Geschäftskunden. Von der regelmäßigen Rasenpflege über den fachgerechten Heckenschnitt bis zur kompletten Grünflächenbetreuung – wir sorgen für gepflegte Außenanlagen das ganze Jahr über.",
    image: "/leistungCard/GartenCard.png",
    imageAlt: "Professionelle Gartenpflege und Rasenschnitt",
    icon: Leaf,
    features: [
      {
        icon: Scissors,
        title: "Rasenmähen",
        description: "Regelmäßiger Schnitt nach Wunsch",
      },
      {
        icon: TreeDeciduous,
        title: "Heckenschnitt",
        description: "Formschnitt und Pflege",
      },
      {
        icon: Flower2,
        title: "Beetpflege",
        description: "Bepflanzung und Unkrautentfernung",
      },
      {
        icon: TreeDeciduous,
        title: "Baumschnitt",
        description: "Fachgerechter Rückschnitt",
      },
      {
        icon: Leaf,
        title: "Laubbeseitigung",
        description: "Saisonale Gartenarbeiten",
      },
      {
        icon: Droplets,
        title: "Bewässerung",
        description: "Anlageninstallation und Wartung",
      },
    ],
    badge: {
      text: "Ganzjährig",
      icon: Calendar,
      position: "left",
    },
  },
  {
    slug: "gebaeudereinigung",
    name: "Gebäude- & Glasreinigung",
    tagline: "Strahlende Sauberkeit garantiert",
    description:
      "Professionelle Reinigung für Büros, Praxen, Treppenhäuser und Gewerbeobjekte mit höchsten Qualitätsstandards. Ob Unterhaltsreinigung, Glasreinigung oder intensive Grundreinigung – wir sorgen für hygienische Sauberkeit.",
    image: "/leistungCard/GlasCard.png",
    imageAlt: "Professionelle Gebäude- und Glasreinigung",
    icon: Sparkles,
    features: [
      {
        icon: Building,
        title: "Büroreinigung",
        description: "Tägliche Unterhaltsreinigung",
      },
      {
        icon: Sparkles,
        title: "Glasreinigung",
        description: "Fenster und Glasfassaden",
      },
      {
        icon: Footprints,
        title: "Treppenhausreinigung",
        description: "Gemeinschaftsflächen",
      },
      {
        icon: SprayCan,
        title: "Grundreinigung",
        description: "Intensive Tiefenreinigung",
      },
      {
        icon: Stethoscope,
        title: "Praxisreinigung",
        description: "Hygienische Standards",
      },
      {
        icon: ShowerHead,
        title: "Sanitärreinigung",
        description: "WC- und Badezimmerpflege",
      },
    ],
    badge: {
      text: "Höchste Hygiene",
      icon: ShieldCheck,
    },
  },
  {
    slug: "winterdienst",
    name: "Winterdienst",
    tagline: "Sichere Wege bei Eis und Schnee",
    description:
      "Professioneller Winterdienst mit Schneeräumung und Streudienst. Wir übernehmen zuverlässig Ihre Räum- und Streupflicht – für sichere Gehwege, Parkplätze und Zufahrten, auch an Wochenenden und Feiertagen.",
    image: "/leistungCard/winterCard.png",
    imageAlt: "Professioneller Winterdienst und Schneeräumung",
    icon: Snowflake,
    features: [
      {
        icon: Snowflake,
        title: "Schneeräumung",
        description: "Maschinell und manuell",
      },
      {
        icon: Thermometer,
        title: "Streudienst",
        description: "Präventiv und reaktiv",
      },
      {
        icon: FileCheck,
        title: "Räumpflicht-Übernahme",
        description: "Rechtliche Absicherung",
      },
      {
        icon: Clock,
        title: "24/7 Bereitschaft",
        description: "Auch an Feiertagen",
      },
      {
        icon: Route,
        title: "Gehwege & Parkplätze",
        description: "Vollständige Abdeckung",
      },
      {
        icon: Zap,
        title: "Schnelle Reaktionszeit",
        description: "Kurzfristige Einsätze möglich",
      },
    ],
    badge: {
      text: "24/7 Einsatzbereit",
      icon: Zap,
    },
  },
];

export default function LeistungenPage() {
  return (
    <>
      <Header />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: "/" },
          { name: "Unsere Leistungen" },
        ]}
      />

      <main className="pt-28">
        <LeistungenHero />

        {serviceShowcases.map((service, index) => (
          <ServiceShowcase
            key={service.slug}
            service={service}
            isReversed={index % 2 === 1}
            bgColor={index % 2 === 0 ? "white" : "section-gray"}
          />
        ))}

        <LeistungenCTA />
      </main>

      <Footer />
    </>
  );
}
