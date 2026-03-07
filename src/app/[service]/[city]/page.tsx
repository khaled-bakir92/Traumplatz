import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  services,
  cities,
  getServiceBySlug,
  getCityBySlug,
  generateAllServiceCityParams,
  generateSeoTitle,
  generateSeoDescription,
  getOpenStreetMapEmbedUrl,
  businessInfo,
  Service,
  City,
} from "@/lib/seo-config";
import { LocalServiceJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";

interface CityServicePageProps {
  params: Promise<{ service: string; city: string }>;
}

// Statische Parameter für alle 48 Kombinationen generieren (SSG)
export function generateStaticParams() {
  return generateAllServiceCityParams();
}

// Dynamische Metadaten für SEO
export async function generateMetadata({
  params,
}: CityServicePageProps): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const city = getCityBySlug(citySlug);

  if (!service || !city) {
    return {
      title: "Seite nicht gefunden",
    };
  }

  const title = generateSeoTitle(service.name, city.name);
  const description = generateSeoDescription(service, city);
  const url = `/${service.slug}/${city.slug}`;

  return {
    title,
    description,
    keywords: [
      ...service.keywords,
      city.name,
      ...city.districts.slice(0, 5),
      city.region,
    ],
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
          url: `/images/${service.slug}-${city.slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.name} in ${city.name} - ${businessInfo.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

// Service-spezifische Inhalte generieren (Anti-Duplicate-Content)
function getServiceContent(service: Service, city: City) {
  const contents: Record<
    string,
    {
      features: string[];
      benefits: string[];
      seasonalNote?: string;
    }
  > = {
    gartenpflege: {
      features: [
        "Professionelles Rasenmähen und Rasenpflege",
        "Heckenschnitt und Formschnitt",
        "Beetpflege und Unkrautbekämpfung",
        "Baumpflege und Baumschnitt",
        "Saisonale Bepflanzung",
        "Bewässerungssysteme",
      ],
      benefits: [
        "Regelmäßige Pflege für einen gepflegten Garten",
        "Fachgerechter Schnitt für gesunde Pflanzen",
        "Individuelle Beratung für Ihren Garten",
      ],
      seasonalNote: `In ${city.name} und Umgebung sorgen wir das ganze Jahr für Ihren perfekten Garten – vom Frühjahrsputz bis zur Herbstpflege.`,
    },
    hausmeisterservice: {
      features: [
        "Kleinreparaturen und Instandhaltung",
        "Objektbetreuung und Kontrollgänge",
        "Treppenhausreinigung",
        "Mülltonnenservice",
        "Schlüsselverwaltung",
        "Handwerkerkoordination",
      ],
      benefits: [
        "Zuverlässige Betreuung Ihrer Immobilie",
        "Schnelle Reaktion bei Problemen",
        "Regelmäßige Objektkontrolle",
      ],
      seasonalNote: `Als Ihr Hausmeisterservice in ${city.name} sind wir Ihr Ansprechpartner für alle Belange rund um Ihre Immobilie.`,
    },
    gebaeudereinigung: {
      features: [
        "Büroreinigung und Unterhaltsreinigung",
        "Treppenhausreinigung",
        "Fensterreinigung",
        "Grundreinigung",
        "Bauendreinigung",
        "Teppichreinigung",
      ],
      benefits: [
        "Saubere Arbeitsumgebung für mehr Wohlbefinden",
        "Hygienische Räumlichkeiten",
        "Flexible Reinigungszeiten",
      ],
      seasonalNote: `Für Unternehmen und Hausverwaltungen in ${city.name} bieten wir professionelle Reinigungsdienstleistungen.`,
    },
    winterdienst: {
      features: [
        "Schneeräumung von Gehwegen und Parkplätzen",
        "Streudienst mit umweltfreundlichem Streugut",
        "Räumpflicht-Übernahme",
        "24/7 Bereitschaft bei Schneefall",
        "Dokumentation für Versicherungen",
        "Vertragsmodelle für die gesamte Saison",
      ],
      benefits: [
        "Rechtssichere Übernahme der Räumpflicht",
        "Zuverlässiger Service auch bei starkem Schneefall",
        "Haftungsübernahme inklusive",
      ],
      seasonalNote: `In ${city.name} sorgen wir bei Schnee und Eis für sichere Wege – zuverlässig und termingerecht.`,
    },
  };

  return contents[service.slug] || contents.gartenpflege;
}

// Stadt-spezifische Einleitung generieren (Anti-Duplicate-Content)
function getCityIntro(service: Service, city: City): string {
  if (city.isHQ) {
    return `Als lokaler Dienstleister mit Sitz direkt in ${city.name} sind wir Ihr erster Ansprechpartner für professionelle ${service.name}. Kurze Wege, schnelle Reaktionszeiten und persönlicher Service zeichnen uns aus.`;
  }

  if (city.distanceFromHQ <= 10) {
    return `${city.name} liegt nur ${city.distanceFromHQ} km von unserem Standort in Bensheim entfernt. Das bedeutet für Sie: schnelle Verfügbarkeit und flexible Terminplanung für alle ${service.name}-Dienstleistungen.`;
  }

  return `Auch in ${city.name} und der Region ${city.region} sind wir für Sie da. ${city.description}`;
}

export default async function CityServicePage({ params }: CityServicePageProps) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const city = getCityBySlug(citySlug);

  if (!service || !city) {
    notFound();
  }

  const content = getServiceContent(service, city);
  const cityIntro = getCityIntro(service, city);
  const mapUrl = getOpenStreetMapEmbedUrl(city);

  // Andere Städte für diesen Service (für interne Verlinkung)
  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 6);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <LocalServiceJsonLd service={service} city={city} />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: "/" },
          { name: service.name, url: `/${service.slug}` },
          { name: city.name },
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
                <li>
                  <Link
                    href={`/${service.slug}`}
                    className="hover:text-green-600"
                  >
                    {service.name}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-green-700 font-medium">{city.name}</li>
              </ol>
            </nav>

            {/* Einziger H1 pro Seite - SEO-optimiert */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {service.name} in {city.name}
            </h1>

            {/* Stadt-spezifische Einleitung */}
            <p className="text-xl text-gray-700 max-w-3xl mb-8">{cityIntro}</p>

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

        {/* Leistungen Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Unsere {service.name} Leistungen in {city.name}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Features Liste */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Das bieten wir Ihnen:
                </h3>
                <ul className="space-y-3">
                  {content.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits Liste */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ihre Vorteile:
                </h3>
                <ul className="space-y-3">
                  {content.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-3">★</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {content.seasonalNote && (
                  <p className="mt-6 p-4 bg-green-50 rounded-lg text-gray-700 border border-green-100">
                    {content.seasonalNote}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Ortsteile Section - Einzigartiger Content pro Stadt */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {service.name} in {city.name} und Umgebung
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Wir sind nicht nur in {city.name} selbst für Sie da, sondern auch
              in den umliegenden Ortsteilen und Stadtteilen:
            </p>

            {/* Ortsteile Grid */}
            <div className="flex flex-wrap gap-3 mb-8">
              {city.districts.map((district) => (
                <span
                  key={district}
                  className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200"
                >
                  {district}
                </span>
              ))}
            </div>

            {/* Entfernung Info */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700">
                <strong className="text-gray-900">Unser Standort:</strong>{" "}
                {businessInfo.address.street}, {businessInfo.address.postalCode}{" "}
                {businessInfo.address.city}
                {!city.isHQ && (
                  <>
                    {" "}
                    – nur <strong>{city.distanceFromHQ} km</strong> von {city.name}{" "}
                    entfernt.
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Unser Einsatzgebiet in {city.name}
            </h2>

            {/* OpenStreetMap Embed */}
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Karte von ${city.name}`}
              />
            </div>

            <p className="mt-4 text-sm text-gray-600">
              Karte zeigt {city.name} und Umgebung. Wir sind in der gesamten
              Region {city.region} für Sie tätig.
            </p>
          </div>
        </section>

        {/* Andere Städte Section - Interne Verlinkung */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {service.name} auch in anderen Städten
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {otherCities.map((otherCity) => (
                <Link
                  key={otherCity.slug}
                  href={`/${service.slug}/${otherCity.slug}`}
                  className="p-4 bg-white rounded-lg hover:bg-green-50 transition-colors border border-gray-200 hover:border-green-200"
                >
                  <span className="font-semibold text-gray-900 hover:text-green-700">
                    {service.name} in {otherCity.name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href={`/${service.slug}`}
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                → Alle Standorte für {service.name} anzeigen
              </Link>
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section className="py-16 px-4 bg-green-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              {service.name} in {city.name} anfragen
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Kontaktieren Sie uns für ein unverbindliches Angebot. Wir sind{" "}
              {businessInfo.openingHours.phone}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${businessInfo.contact.phone}`}
                className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-green-50 transition-colors"
              >
                {businessInfo.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${businessInfo.contact.email}?subject=${encodeURIComponent(`Anfrage: ${service.name} in ${city.name}`)}`}
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
