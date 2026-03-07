import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug, businessInfo, getServiceBySlug } from "@/lib/seo-config";
import { getCityContent, getAllCitySlugs } from "./city-content";
import { LocalServiceJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/json-ld";

// Import all city layouts
import BensheimLayout from "./layouts/bensheim-layout";
import HeppenheimLayout from "./layouts/heppenheim-layout";
import LorschLayout from "./layouts/lorsch-layout";
import EinhausenLayout from "./layouts/einhausen-layout";
import AlsbachHaehnleinLayout from "./layouts/alsbach-haehnlein-layout";
import ZwingenbergLayout from "./layouts/zwingenberg-layout";
import DarmstadtLayout from "./layouts/darmstadt-layout";
import WeinheimLayout from "./layouts/weinheim-layout";
import ViernheimLayout from "./layouts/viernheim-layout";
import PfungstadtLayout from "./layouts/pfungstadt-layout";
import SeeheimJugenheimLayout from "./layouts/seeheim-jugenheim-layout";
import WormsLayout from "./layouts/worms-layout";

// Map city slugs to their layout components
const cityLayouts: Record<string, React.ComponentType<{ citySlug: string }>> = {
  bensheim: BensheimLayout,
  heppenheim: HeppenheimLayout,
  lorsch: LorschLayout,
  einhausen: EinhausenLayout,
  "alsbach-haehnlein": AlsbachHaehnleinLayout,
  zwingenberg: ZwingenbergLayout,
  darmstadt: DarmstadtLayout,
  weinheim: WeinheimLayout,
  viernheim: ViernheimLayout,
  pfungstadt: PfungstadtLayout,
  "seeheim-jugenheim": SeeheimJugenheimLayout,
  worms: WormsLayout,
};

// Generate static params for all cities
export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({
    city,
  }));
}

// Generate metadata for each city page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  const content = getCityContent(citySlug);
  const service = getServiceBySlug("hausmeisterservice");

  if (!city || !content || !service) {
    return {
      title: "Seite nicht gefunden",
    };
  }

  const title = `Hausmeisterservice ${city.name} | ${businessInfo.name}`;
  const description = `Professioneller Hausmeisterservice in ${city.name} und ${city.districts.slice(0, 3).join(", ")}. ✓ Kleinreparaturen ✓ Objektbetreuung ✓ Winterdienst. ${city.distanceFromHQ === 0 ? "Unser Firmensitz!" : `Nur ${city.distanceFromHQ}km entfernt.`} Jetzt anfragen!`;

  return {
    title,
    description,
    keywords: [
      `Hausmeisterservice ${city.name}`,
      `Hausmeister ${city.name}`,
      `Objektbetreuung ${city.name}`,
      `Facility Management ${city.name}`,
      `Gebäudemanagement ${city.region}`,
      ...city.districts.slice(0, 5).map((d) => `Hausmeister ${d}`),
      ...service.keywords,
    ],
    alternates: {
      canonical: `/hausmeisterservice/${citySlug}`,
    },
    openGraph: {
      title: `Hausmeisterservice in ${city.name} | ${businessInfo.name}`,
      description,
      url: `/hausmeisterservice/${citySlug}`,
      type: "website",
      locale: "de_DE",
      images: [
        {
          url: "/leistungen/Hausmeister.png",
          width: 1200,
          height: 630,
          alt: `Hausmeisterservice ${city.name} - ${businessInfo.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Hausmeisterservice ${city.name} | ${businessInfo.name}`,
      description,
      images: ["/leistungen/Hausmeister.png"],
    },
  };
}

// Main page component
export default async function HausmeisterserviceCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;

  // Get city data and content
  const city = getCityBySlug(citySlug);
  const content = getCityContent(citySlug);

  // Check if city exists
  if (!city || !content) {
    notFound();
  }

  // Get the layout component for this city
  const LayoutComponent = cityLayouts[citySlug];

  if (!LayoutComponent) {
    notFound();
  }

  const service = getServiceBySlug("hausmeisterservice")!;

  return (
    <>
      <LocalServiceJsonLd service={service} city={city} />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: "/" },
          { name: "Hausmeisterservice", url: "/hausmeisterservice" },
          { name: city.name },
        ]}
      />
      <FAQJsonLd questions={content.faqs} />
      <LayoutComponent citySlug={citySlug} />
    </>
  );
}
