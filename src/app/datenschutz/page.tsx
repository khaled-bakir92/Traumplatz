import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mail, Phone } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { businessInfo } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Traumplatz GbR mit Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  alternates: {
    canonical: "/datenschutz",
  },
  robots: {
    index: false,
    follow: false,
  },
};

interface PrivacySection {
  title: string;
  content: string[];
}

const responsibleParties = "Sinan Cam und Sarkis Yuonan";

const privacySections: PrivacySection[] = [
  {
    title: "1. Verantwortlicher",
    content: [
      `${businessInfo.name} GbR`,
      `Vertreten durch: ${responsibleParties}`,
      `${businessInfo.address.street}`,
      `${businessInfo.address.postalCode} ${businessInfo.address.city}`,
      `Telefon: ${businessInfo.contact.phoneDisplay}`,
      `E-Mail: ${businessInfo.contact.email}`,
    ],
  },
  {
    title: "2. Erhebung und Speicherung personenbezogener Daten",
    content: [
      "Beim Besuch dieser Website werden automatisch technische Informationen durch den Hosting-Anbieter verarbeitet (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp, Betriebssystem, Referrer-URL).",
      "Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten (z. B. Name, E-Mail-Adresse, Telefonnummer und Nachricht), um Ihre Anfrage zu bearbeiten.",
    ],
  },
  {
    title: "3. Zwecke der Datenverarbeitung",
    content: [
      "Die Verarbeitung erfolgt zur Bereitstellung der Website, zur Gewährleistung der technischen Sicherheit und zur Bearbeitung von Kontaktanfragen.",
      "Eine Verwendung zu Werbezwecken ohne Ihre ausdrückliche Einwilligung erfolgt nicht.",
    ],
  },
  {
    title: "4. Rechtsgrundlagen der Verarbeitung",
    content: [
      "Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Durchführung vorvertraglicher Maßnahmen und zur Bearbeitung Ihrer Anfragen).",
      "Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website).",
    ],
  },
  {
    title: "5. Speicherdauer",
    content: [
      "Daten aus Kontaktanfragen speichern wir grundsätzlich nur so lange, wie dies zur Bearbeitung Ihres Anliegens erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.",
      "Server-Logdaten werden in der Regel nach spätestens 30 Tagen gelöscht, sofern keine sicherheitsrelevante Auswertung erforderlich ist.",
    ],
  },
  {
    title: "6. Hosting",
    content: [
      "Diese Website wird bei Vercel Inc. gehostet. Dabei können technische Zugriffsdaten auf Servern verarbeitet werden.",
      "Soweit eine Verarbeitung in Drittländern erfolgt, geschieht diese auf Grundlage geeigneter Garantien, insbesondere der EU-Standardvertragsklauseln.",
    ],
  },
  {
    title: "7. Weitergabe von Daten",
    content: [
      "Eine Übermittlung Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn dies gesetzlich erlaubt ist, zur Vertragserfüllung erforderlich ist oder Sie eingewilligt haben.",
      "Eine Weitergabe zu Werbe- oder Trackingzwecken erfolgt nicht.",
    ],
  },
  {
    title: "8. Cookies und Tracking",
    content: [
      "Wir verwenden keine Analyse- oder Tracking-Tools wie Google Analytics.",
      "Es werden ausschließlich technisch notwendige Funktionen genutzt, die für den sicheren Betrieb der Website erforderlich sind.",
    ],
  },
  {
    title: "9. Ihre Rechte",
    content: [
      "Sie haben das Recht auf Auskunft über die von uns verarbeiteten personenbezogenen Daten (Art. 15 DSGVO).",
      "Sie haben das Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) sowie Datenübertragbarkeit (Art. 20 DSGVO).",
      "Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO einzulegen (Art. 21 DSGVO).",
      "Sie haben außerdem das Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde.",
    ],
  },
  {
    title: "10. Zuständige Aufsichtsbehörde",
    content: [
      "Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)",
      "Gustav-Stresemann-Ring 1, 65189 Wiesbaden",
      "Website: https://datenschutz.hessen.de",
    ],
  },
  {
    title: "11. Aktualität und Änderungen",
    content: [
      "Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.",
    ],
  },
];

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <BreadcrumbJsonLd items={[{ name: "Startseite", url: "/" }, { name: "Datenschutz" }]} />

      <main className="pt-28">
        <section className="relative min-h-[60vh] flex items-center px-4">
          <Image
            src="/banner-01-1.jpg"
            alt="Datenschutz bei Traumplatz"
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
              <span className="text-gray-900 font-medium">Datenschutz</span>
            </nav>

            <div className="max-w-3xl">
              <p className="text-brand-green font-semibold tracking-wide uppercase text-sm mb-4">
                Datenschutz & Transparenz
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Datenschutzerklärung
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Nachfolgend informieren wir
                Sie über Art, Umfang und Zweck der Verarbeitung Ihrer Daten auf dieser Website.
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
              {privacySections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 shadow-sm"
                >
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
