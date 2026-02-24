import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  services,
  cities,
  getServiceBySlug,
  getAllServiceSlugs,
  businessInfo,
} from "@/lib/seo-config";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

// Statische Parameter für alle Services generieren
export function generateStaticParams() {
  return getAllServiceSlugs().map((service) => ({
    service,
  }));
}

// Dynamische Metadaten für SEO
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return {
      title: "Service nicht gefunden",
    };
  }

  const title = `${service.name} | Professioneller Service an der Bergstraße`;
  const description = service.metaDescription;
  const url = `/${service.slug}`;

  return {
    title,
    description,
    keywords: service.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: `/images/${service.slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.name} - ${businessInfo.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/images/${service.slug}-og.jpg`],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: "/" },
          { name: service.name },
        ]}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-green-50 to-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li>
                  <Link href="/" className="hover:text-green-600">
                    Startseite
                  </Link>
                </li>
                <li>/</li>
                <li className="text-green-700 font-medium">{service.name}</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professionelle {service.name}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mb-8">
              {service.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${businessInfo.contact.phone}`}
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Jetzt anrufen: {businessInfo.contact.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${businessInfo.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 font-semibold rounded-lg hover:bg-green-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp schreiben
              </a>
            </div>
          </div>
        </section>

        {/* Einzugsgebiet Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {service.name} in Ihrer Nähe
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Wir bieten unsere {service.name} Dienstleistungen in folgenden
              Städten und Gemeinden an:
            </p>

            {/* Stadt-Grid mit Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${service.slug}/${city.slug}`}
                  className="group p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors border border-gray-100 hover:border-green-200"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-700">
                    {service.name} in {city.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {city.isHQ ? "Hauptstandort" : `${city.distanceFromHQ} km entfernt`}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section className="py-16 px-4 bg-green-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Kostenlose Beratung anfordern
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Wir sind {businessInfo.openingHours.phone}. Rufen Sie uns an oder
              schreiben Sie uns!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${businessInfo.contact.phone}`}
                className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-green-50 transition-colors"
              >
                {businessInfo.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${businessInfo.contact.email}`}
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 transition-colors border-2 border-white"
              >
                E-Mail schreiben
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
