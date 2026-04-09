import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getServiceBySlug,
  getCityBySlug,
  generateAllServiceCityParams,
  generateSeoTitle,
  generateSeoDescription,
  getOpenStreetMapEmbedUrl,
  businessInfo,
  Service,
  City,
  getCityServiceFAQs,
  getNearestCities,
  services,
} from "@/lib/seo-config";
import { LocalServiceJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/json-ld";
import { CityFaqSection } from "@/components/city-faq-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
  const url = `${businessInfo.url}/${service.slug}/${city.slug}`;

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
          url: "/og-image.png",
          width: 2848,
          height: 1504,
          alt: `${title} – Traumplatz`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function getServiceContent(service: Service, city: City) {
  const isLargeCity = city.population > 50000;
  const isHQ = city.isHQ;
  const isFar = city.distanceFromHQ > 15;

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
        `Rasenmähen und Grünflächenpflege in ganz ${city.name}`,
        `Fachgerechter Heckenschnitt (gemäß Naturschutzvorgaben)`,
        "Beetpflege und effektive Unkrautbekämpfung",
        "Baumpflege und zertifizierter Baumschnitt",
        isLargeCity ? "Pflege von gewerblichen Außenanlagen und Parks" : "Saisonale Bepflanzung für Privatgärten",
        `Umweltfreundliche Entsorgung des Grünguts in der Region ${city.region}`,
      ],
      benefits: [
        isHQ ? "Besonders schnelle Anfahrt ohne Zusatzkosten" : `Pünktliche Anfahrt (nur ${city.distanceFromHQ} km von unserem Hauptsitz)`,
        "Fachgerechter Schnitt für langfristig gesunde Pflanzen",
        `Individuelle Beratung für Gärten in den ${city.districts.length} Ortsteilen von ${city.name}`,
      ],
      seasonalNote: `Von Frühjahr bis Herbst: Wir halten das Stadtbild von ${city.name} grün und gepflegt.`,
    },
    hausmeisterservice: {
      features: [
        `Kleinreparaturen und Instandhaltung von Immobilien in ${city.name}`,
        "Regelmäßige Kontrollgänge und Objektbetreuung",
        "Treppenhausreinigung (wöchentlich oder monatlich)",
        "Zuverlässiges Mülltonnenmanagement und Tonnenbereitstellung",
        "Schlüsselverwaltung für Eigentümer und Verwaltungen",
        isLargeCity ? "Koordination von Fachhandwerkern in der Großstadt" : "Wartung kleinerer Wohnanlagen vor Ort",
      ],
      benefits: [
        `Verlässlicher Werterhalt Ihrer Immobilie in der Region ${city.region}`,
        isFar ? "Fest geplante Touren für verlässliche Betreuung" : "Schnell vor Ort bei dringenden Reparaturen",
        "Ein fester Ansprechpartner für Ihr gesamtes Objekt",
      ],
      seasonalNote: `Als starker Partner für Verwaltungen und Eigentümer in ${city.name} entlasten wir Sie im Alltag.`,
    },
    gebaeudereinigung: {
      features: [
        `Büro- und Unterhaltsreinigung für Unternehmen in ${city.name}`,
        "Treppenhausreinigung für Mehrfamilienhäuser",
        "Streifenfreie Fenster- und Glasreinigung",
        "Gründliche Bauendreinigung nach handwerklichen Arbeiten",
        isLargeCity ? "Flexible Reinigungszeiten außerhalb der Geschäftszeiten" : "Individuelle Reinigungsintervalle nach Bedarf",
        "Einsatz geprüfter und umweltfreundlicher Reinigungsmittel",
      ],
      benefits: [
        `Repräsentative Sauberkeit für Gebäude in ganz ${city.name}`,
        "Hygienische Arbeitsumgebungen für Ihre Mitarbeiter",
        `Transparente Abrechnung ohne versteckte Anfahrtskosten`,
      ],
      seasonalNote: `Fachgerechte Reinigung für Praxen, Kanzleien und Bürogebäude im gesamten Einzugsgebiet ${city.name}.`,
    },
    winterdienst: {
      features: [
        `Schneeräumung von Wegen, Einfahrten und Parkplätzen in ${city.name}`,
        `Streudienst gemäß den gesetzlichen Vorgaben der Region ${city.region}`,
        "Vollständige Räumpflicht-Übernahme für Grundstückseigentümer",
        "24/7 Bereitschaft bei Neuschnee oder Glatteiswarnung",
        "Strikte Dokumentationspflicht für rechtliche Absicherung",
        isFar ? "Koordinierte Anfahrt für höchste Zuverlässigkeit" : "Sofort-Einsatz bei plötzlichem Wintereinbruch",
      ],
      benefits: [
        `Rechtssichere Erfüllung der kommunalen Vorgaben für ${city.name}`,
        "Deutlich minimiertes Haftungsrisiko bei Glatteisunfällen",
        "Sorgenfreier und zuverlässiger Service durch die gesamte Wintersaison",
      ],
      seasonalNote: `Wir sichern die Gehwege in ${city.name} – damit Anwohner, Kunden und Mitarbeiter jederzeit sicher ankommen.`,
    },
  };

  return contents[service.slug] || contents.gartenpflege;
}

function getCityIntro(service: Service, city: City): string {
  const serviceContext = `Traumplatz bietet professionellen ${service.name} in ${city.name} – zuverlässig, termingerecht und mit langjähriger Erfahrung in der Region Bergstraße.`;
  
  const districtMentions = city.districts.length > 0
    ? `Egal ob im Stadtzentrum oder in Ortsteilen wie ${city.districts.slice(0, 2).join(" und ")} – wir kümmern uns darum.`
    : `Wir betreuen das gesamte Stadtgebiet termingerecht und mit höchster Sorgfalt.`;

  return `${city.description} ${serviceContext} ${districtMentions}`;
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
  const localFaqs = getCityServiceFAQs(city.slug, service.slug);

  // Geographisch nächste Städte für diesen Service (interne Verlinkung - FR-009)
  const otherCities = getNearestCities(city.slug, 6);

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
      {localFaqs.length > 0 && <FAQJsonLd questions={localFaqs} />}

      <Header />
      <main className="min-h-screen pt-28">
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

            {/* Emotionaler Tagline (früher H1) */}
            <p className="text-sm md:text-base font-medium text-gray-500 mb-3 uppercase tracking-wide">
              Wir kümmern uns in {city.name}. Sie entspannen.
            </p>

            {/* Einziger H1 pro Seite - SEO-optimiert, prominent */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Traumplatz – {service.name} in {city.name}
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
              Was bietet Traumplatz bei {service.name} in {city.name}?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Features Liste */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Was ist im Leistungsumfang enthalten?
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
                  Warum Traumplatz für {service.name} in {city.name}?
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
              In welchen Stadtteilen von {city.name} ist Traumplatz tätig?
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

        {/* FAQ Section */}
        {localFaqs.length > 0 && (
          <CityFaqSection
            faqs={localFaqs}
            cityName={city.name}
            serviceName={service.name}
          />
        )}

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

        {/* Weitere Leistungen in dieser Stadt - Cross-Service Verlinkung */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Weitere Leistungen in {city.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {services
                .filter((s) => s.slug !== service.slug)
                .map((otherService) => (
                  <Link
                    key={otherService.slug}
                    href={`/${otherService.slug}/${city.slug}`}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors border border-gray-200 hover:border-green-200"
                  >
                    <span className="font-semibold text-gray-900 hover:text-green-700">
                      {otherService.name} in {city.name}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section className="py-16 px-4 bg-green-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Wie {service.name} in {city.name} beauftragen?
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
      <Footer />
    </>
  );
}
