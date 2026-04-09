import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mail, Phone } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { businessInfo } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Rechtliche Angaben und Kontaktinformationen der Traumplatz GbR gemäß § 5 TMG.",
  alternates: {
    canonical: "/impressum",
  },
};

const representatives = "Sinan Cam und Sarkis Yuonan";

interface LegalSection {
  title: string;
  content: string[];
}

const legalSections: LegalSection[] = [
  {
    title: "Angaben gemäß § 5 TMG",
    content: [
      `${businessInfo.name} GbR`,
      `Vertreten durch die Gesellschafter: ${representatives}`,
      `${businessInfo.address.street}`,
      `${businessInfo.address.postalCode} ${businessInfo.address.city}`,
      "Deutschland",
    ],
  },
  {
    title: "Kontakt",
    content: [
      `Telefon: ${businessInfo.contact.phoneDisplay}`,
      `E-Mail: ${businessInfo.contact.email}`,
    ],
  },
  {
    title: "Umsatzsteuer",
    content: [
      "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:",
      "DE366957082",
    ],
  },
  {
    title: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
    content: [
      representatives,
      `${businessInfo.address.street}`,
      `${businessInfo.address.postalCode} ${businessInfo.address.city}`,
    ],
  },
  {
    title: "Haftung für Inhalte",
    content: [
      "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.",
      "Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.",
    ],
  },
  {
    title: "Haftung für Links",
    content: [
      "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.",
      "Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.",
      "Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
    ],
  },
  {
    title: "Urheberrecht",
    content: [
      "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.",
      "Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors beziehungsweise Erstellers.",
      "Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
    ],
  },
  {
    title: "Bildnachweise",
    content: [
      "Die auf dieser Website verwendeten Bilder wurden teilweise mithilfe von KI-Bildgeneratoren erstellt.",
    ],
  },
  {
    title: "Webdesign & Entwicklung",
    content: ["Entwickelt von Khaled Bakir"],
  },
];

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <BreadcrumbJsonLd items={[{ name: "Startseite", url: "/" }, { name: "Impressum" }]} />

      <main className="pt-28">
        <section className="relative min-h-[60vh] flex items-center px-4">
          <Image
            src="/banner-01-1.jpg"
            alt="Impressum von Traumplatz"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/75" />

          <div className="relative max-w-6xl mx-auto w-full">
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
              <Link href="/" className="hover:text-brand-green transition-colors">
                Startseite
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">Impressum</span>
            </nav>

            <div className="max-w-3xl">
              <p className="text-brand-green font-semibold tracking-wide uppercase text-sm mb-4">Rechtliche Angaben</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Impressum</h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Auf dieser Seite finden Sie alle gesetzlich vorgeschriebenen Informationen zu unserem Unternehmen,
                den verantwortlichen Personen sowie Kontaktmöglichkeiten.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href={`tel:${businessInfo.contact.phone}`}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 text-brand-green mb-3">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">Telefon</span>
                </div>
                <p className="text-gray-800 text-lg font-medium">{businessInfo.contact.phoneDisplay}</p>
              </a>

              <a
                href={`mailto:${businessInfo.contact.email}`}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 text-brand-green mb-3">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">E-Mail</span>
                </div>
                <p className="text-gray-800 text-lg font-medium break-all">{businessInfo.contact.email}</p>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-section-gray py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {legalSections.map((section) => (
                <article key={section.title} className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    {section.content.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
