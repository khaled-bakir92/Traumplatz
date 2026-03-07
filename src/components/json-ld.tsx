import { businessInfo, services, cities, Service, City } from "@/lib/seo-config";
import { fetchGoogleReviews } from "@/lib/google-places";

// Typen für JSON-LD Schemas
interface LocalBusinessSchema {
  "@context": "https://schema.org";
  "@type": "ProfessionalService";
  "@id": string;
  name: string;
  description: string;
  url: string;
  logo?: string;
  image?: string;
  telephone: string;
  email: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressRegion: string;
    addressCountry: string;
  };
  geo?: {
    "@type": "GeoCoordinates";
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification?: {
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[];
  areaServed: {
    "@type": "City" | "State";
    name: string;
  }[];
  priceRange?: string;
  sameAs?: string[];
  hasOfferCatalog?: {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: {
      "@type": "Offer";
      itemOffered: {
        "@type": "Service";
        name: string;
        description: string;
      };
    }[];
  };
}

interface ServiceSchema {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description: string;
  url: string;
  provider: {
    "@type": "LocalBusiness";
    "@id": string;
    name: string;
  };
  areaServed: {
    "@type": "City";
    name: string;
  }[];
  serviceType: string;
}

interface BreadcrumbSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: {
    "@type": "ListItem";
    position: number;
    name: string;
    item?: string;
  }[];
}

// Generische JSON-LD Komponente
export function JsonLd<T extends object>({ data }: { data: T }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// LocalBusiness Schema für Startseite und Kontaktseite
export function LocalBusinessJsonLd() {
  const bensheim = cities.find((c) => c.slug === "bensheim");

  const schema: LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${businessInfo.url}/#organization`,
    name: businessInfo.name,
    description: businessInfo.description,
    url: businessInfo.url,
    logo: `${businessInfo.url}/logo.png`,
    image: `${businessInfo.url}/og-image.png`,
    telephone: businessInfo.contact.phone,
    email: businessInfo.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      postalCode: businessInfo.address.postalCode,
      addressRegion: businessInfo.address.region,
      addressCountry: businessInfo.address.country,
    },
    geo: bensheim
      ? {
          "@type": "GeoCoordinates",
          latitude: bensheim.coordinates.lat,
          longitude: bensheim.coordinates.lng,
        }
      : undefined,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    areaServed: cities.map((city) => ({
      "@type": "City" as const,
      name: city.name,
    })),
    priceRange: "$$",
    sameAs: [
      businessInfo.socialMedia.instagram,
      businessInfo.socialMedia.tiktok,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Unsere Dienstleistungen",
      itemListElement: services.map((service) => ({
        "@type": "Offer" as const,
        itemOffered: {
          "@type": "Service" as const,
          name: service.name,
          description: service.description,
        },
      })),
    },
  };

  return <JsonLd data={schema} />;
}

// Service Schema für Service-Übersichtsseiten
export function ServiceJsonLd({ service }: { service: Service }) {
  const schema: ServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${businessInfo.url}/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${businessInfo.url}/#organization`,
      name: businessInfo.name,
    },
    areaServed: cities.map((city) => ({
      "@type": "City" as const,
      name: city.name,
    })),
    serviceType: service.name,
  };

  return <JsonLd data={schema} />;
}

// Service Schema für lokale Landingpages (Service + Stadt)
export function LocalServiceJsonLd({
  service,
  city,
}: {
  service: Service;
  city: City;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${city.name}`,
    description: `${service.description} Wir bieten unsere ${service.name} Dienstleistungen in ${city.name} und den umliegenden Ortsteilen ${city.districts.slice(0, 3).join(", ")} an.`,
    url: `${businessInfo.url}/${service.slug}/${city.slug}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${businessInfo.url}/#organization`,
      name: businessInfo.name,
      telephone: businessInfo.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: businessInfo.address.street,
        addressLocality: businessInfo.address.city,
        postalCode: businessInfo.address.postalCode,
        addressCountry: businessInfo.address.country,
      },
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.coordinates.lat,
        longitude: city.coordinates.lng,
      },
    },
    serviceType: service.name,
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: businessInfo.contact.phone,
      serviceUrl: `${businessInfo.url}/${service.slug}/${city.slug}`,
    },
  };

  return <JsonLd data={schema} />;
}

// Breadcrumb Schema
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url?: string }[];
}) {
  const schema: BreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url ? `${businessInfo.url}${item.url}` : undefined,
    })),
  };

  return <JsonLd data={schema} />;
}

// FAQ Schema (für FAQ-Seiten oder FAQ-Sections)
export function FAQJsonLd({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return <JsonLd data={schema} />;
}

// WebSite Schema — ermöglicht Sitelinks Search Box in Google
export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${businessInfo.url}/#website`,
    name: businessInfo.name,
    url: businessInfo.url,
    description: businessInfo.description,
    inLanguage: "de-DE",
    publisher: {
      "@type": "ProfessionalService",
      "@id": `${businessInfo.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${businessInfo.url}/leistungen?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={schema} />;
}

// AggregateRating Schema — zeigt Sternebewertung in Google Suchergebnissen
export async function AggregateRatingJsonLd() {
  const { rating, totalReviews } = await fetchGoogleReviews();

  // Nur rendern wenn echte Daten vorhanden
  if (!rating || !totalReviews) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${businessInfo.url}/#organization`,
    name: businessInfo.name,
    url: businessInfo.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.toFixed(1),
      bestRating: "5",
      worstRating: "1",
      ratingCount: totalReviews,
    },
  };

  return <JsonLd data={schema} />;
}

// AboutPage Schema für die Über-uns Seite
export function AboutPageJsonLd() {
  const bensheim = cities.find((c) => c.slug === "bensheim");

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Über Traumplatz",
    description:
      "Erfahren Sie mehr über Traumplatz – Ihren regionalen Partner für Gartenpflege, Hausmeisterservice, Gebäudereinigung und Winterdienst an der Bergstraße.",
    url: `${businessInfo.url}/ueber-uns`,
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": `${businessInfo.url}/#organization`,
      name: businessInfo.name,
      description: businessInfo.description,
      url: businessInfo.url,
      logo: `${businessInfo.url}/logo.png`,
      foundingDate: "2020",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 11,
        maxValue: 20,
      },
      telephone: businessInfo.contact.phone,
      email: businessInfo.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: businessInfo.address.street,
        addressLocality: businessInfo.address.city,
        postalCode: businessInfo.address.postalCode,
        addressRegion: businessInfo.address.region,
        addressCountry: businessInfo.address.country,
      },
      geo: bensheim
        ? {
            "@type": "GeoCoordinates",
            latitude: bensheim.coordinates.lat,
            longitude: bensheim.coordinates.lng,
          }
        : undefined,
      areaServed: cities.map((city) => ({
        "@type": "City" as const,
        name: city.name,
      })),
      knowsAbout: services.map((service) => service.name),
      slogan: "Ihr zuverlässiger Partner an der Bergstraße",
    },
  };

  return <JsonLd data={schema} />;
}
