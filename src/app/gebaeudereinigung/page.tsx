import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HausmeisterTimelineSteps } from "@/components/hausmeister-timeline-steps";
import { ServiceAreaMap } from "@/components/service-area-map";
import { BreadcrumbJsonLd, FAQJsonLd, ServiceJsonLd } from "@/components/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { businessInfo, cities, getServiceBySlug } from "@/lib/seo-config";

const service = getServiceBySlug("gebaeudereinigung")!;

interface CleaningServiceItem {
  image: string;
  title: string;
  description: string;
  fit?: "cover" | "contain";
  imageClass?: string;
  imagePadding?: string;
}

export const metadata: Metadata = {
  title: `${service.name} | Professionelle Sauberkeit an der Bergstraße`,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: {
    canonical: "/gebaeudereinigung",
  },
  openGraph: {
    title: `${service.name} | ${businessInfo.name}`,
    description: service.metaDescription,
    url: "/gebaeudereinigung",
    type: "website",
    images: [
      {
        url: "/leistungCard/GlasCard.png",
        width: 1200,
        height: 630,
        alt: `${service.name} - ${businessInfo.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${service.name} | ${businessInfo.name}`,
    description: service.metaDescription,
    images: ["/leistungCard/GlasCard.png"],
  },
};

const services: CleaningServiceItem[] = [
  {
    image: "/glasreinigung/leistugen/Unterhaltsreinigung-v2.png",
    title: "Unterhaltsreinigung",
    description: "Regelmäßige Reinigung für dauerhaft gepflegte Flächen",
  },
  {
    image: "/glasreinigung/leistugen/Treppenhausreinigung-v2.png",
    title: "Treppenreinigung",
    description: "Saubere Eingangs- und Treppenbereiche mit System",
  },
  {
    image: "/glasreinigung/leistugen/Buroreinigung-v2.png",
    title: "Büroreinigung",
    description: "Hygienische Arbeitsplätze für Teams und Kundenkontakt",
    fit: "cover",
  },
  {
    image: "/glasreinigung/leistugen/Glasreinigung-v2.png",
    title: "Glasreinigung",
    description: "Streifenfreie Fenster und Glaselemente innen und außen",
    fit: "contain",
    imageClass: "object-contain scale-110 p-0",
  },
  {
    image: "/glasreinigung/leistugen/Grundreinigung-v2.png",
    title: "Grundreinigung",
    description: "Intensive Reinigung bei Übergaben und Sonderbedarfen",
  },
  {
    image: "/glasreinigung/leistugen/Sanitaerreinigung-v2.png",
    title: "Sanitärreinigung",
    description: "Gründliche Reinigung und Desinfektion sensibler Bereiche",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Kontaktaufnahme",
    description:
      "Sie schreiben oder rufen uns an. Wir erfassen Objekt, Flächen und Turnus.",
  },
  {
    step: "02",
    title: "Kostenlose Besichtigung",
    description:
      "Wir besichtigen Ihr Objekt vor Ort und definieren gemeinsam den Reinigungsumfang.",
  },
  {
    step: "03",
    title: "Individuelles Angebot",
    description:
      "Sie erhalten ein transparentes Angebot mit festen Leistungen und Intervallen.",
  },
  {
    step: "04",
    title: "Regelmäßige Reinigung",
    description:
      "Unser Team sorgt zuverlässig für saubere, gepflegte und hygienische Räume.",
  },
];

const cleaningFaqs = [
  {
    question: "Wie oft sollte eine Gebäudereinigung stattfinden?",
    answer:
      "Das hängt von Nutzung, Personenaufkommen und Branchenanforderungen ab. Für viele Objekte sind 1- bis 3-mal pro Woche sinnvoll.",
  },
  {
    question: "Bieten Sie feste Reinigungsteams an?",
    answer:
      "Ja, nach Möglichkeit arbeiten feste Teams in festen Objekten. Das sorgt für gleichbleibende Qualität und kurze Abstimmungswege.",
  },
  {
    question: "Werden Reinigungsmittel gestellt?",
    answer:
      "Ja, wir bringen professionelle Reinigungsmittel und Geräte mit. Auf Wunsch nutzen wir auch umweltschonende oder objektspezifische Produkte.",
  },
  {
    question: "Ist eine Reinigung außerhalb der Öffnungszeiten möglich?",
    answer:
      "Ja, wir reinigen auf Wunsch früh morgens, abends oder am Wochenende, damit Ihr Betrieb ungestört bleibt.",
  },
  {
    question: "Übernehmen Sie auch einmalige Grundreinigungen?",
    answer:
      "Ja. Neben laufenden Verträgen bieten wir auch einmalige Einsätze an, zum Beispiel nach Umbauten, Umzügen oder vor Übergaben.",
  },
  {
    question: "Wie schnell kann ein Einsatz starten?",
    answer:
      "Nach Erstgespräch und Besichtigung können wir meist kurzfristig starten. Bei dringendem Bedarf prüfen wir sofort verfügbare Kapazitäten.",
  },
  {
    question: "Was kostet eine professionelle Gebäudereinigung?",
    answer:
      "Die Kosten richten sich nach Fläche, Häufigkeit und Leistungsumfang. Nach Besichtigung erhalten Sie ein transparentes Angebot ohne versteckte Kosten.",
  },
  {
    question: "Reinigen Sie auch Glasflächen und Sanitärbereiche?",
    answer:
      "Ja, wir übernehmen sowohl Glasreinigung als auch Sanitärreinigung nach klar definierten Qualitätsstandards.",
  },
];

export default function GebaeudereinigungPage() {
  return (
    <>
      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: "/" },
          { name: "Gebäudereinigung" },
        ]}
      />
      <FAQJsonLd questions={cleaningFaqs} />

      <Header />
      <main className="pt-28">
        <section className="h-[calc(100svh-7rem)] flex items-center relative overflow-hidden">
          <Image
            src="/glasreinigung/img2.jpeg"
            alt="Gebäudereinigung Hintergrund"
            fill
            className="object-cover object-center"
            priority
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.65) 100%)",
            }}
          />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20 relative z-10">
            <div className="max-w-4xl">
              <nav className="-mt-4 sm:mt-0 mb-4 sm:mb-6">
                <ol className="flex items-center gap-2 text-sm text-gray-600">
                  <li>
                    <Link href="/" className="hover:text-sky-600">
                      Home
                    </Link>
                  </li>
                  <span>/</span>
                  <li className="text-sky-600 font-medium">Gebäudereinigung</li>
                </ol>
              </nav>

              <p className="text-xs sm:text-sm text-sky-600 font-medium tracking-normal sm:tracking-wider uppercase mb-3 sm:mb-6">
                Professionelle Gebäudereinigung
              </p>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-[1.1]">
                Wir reinigen Ihr Objekt.
                <span className="text-sky-700"> Sie konzentrieren sich auf Ihr Geschäft.</span>
              </h1>

              <p className="text-lg sm:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
                Zuverlässige Gebäudereinigung für Büros, Praxen und Wohnanlagen.
                Gründlich, diskret und termintreu.
              </p>

              <div className="mt-4 sm:mt-0 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-6">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-sky-700 hover:bg-sky-800 text-white px-4 py-4 text-sm font-medium rounded-xl sm:w-auto sm:px-10 sm:py-7 sm:text-lg sm:rounded-full"
                >
                  <a href={`tel:${businessInfo.contact.phone}`}>
                    <Phone className="w-5 h-5 mr-3" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-4 py-4 text-sm font-medium rounded-xl bg-transparent sm:w-auto sm:px-10 sm:py-7 sm:text-lg sm:rounded-full"
                >
                  <Link href="#services">
                    Mehr erfahren
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-section-gray">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Unsere Leistungen
            </h2>
          </div>

          <div className="pb-8 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 justify-items-center">
              {services.map((serviceItem, index) => (
                <div
                  key={index}
                  className="group w-full max-w-[14rem] bg-white rounded-2xl p-5 hover:bg-sky-500 transition-all duration-500 shadow-sm hover:shadow-2xl cursor-pointer"
                >
                  <div className="relative h-16 sm:h-20 rounded-xl mb-3 overflow-hidden">
                    <Image
                      src={serviceItem.image}
                      alt={serviceItem.title}
                      fill
                      className={
                        serviceItem.imageClass
                          ? serviceItem.imageClass
                          : serviceItem.fit === "cover"
                            ? "object-cover"
                            : `object-contain ${serviceItem.imagePadding ?? "p-2"}`
                      }
                    />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 group-hover:text-white mb-1.5 transition-colors">
                    {serviceItem.title}
                  </h3>
                  <p className="text-xs text-gray-500 group-hover:text-white/80 transition-colors">
                    {serviceItem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative h-[70vh]">
          <Image
            src="/glasreinigung/img1.jpg"
            alt="Professionelle Gebäudereinigung"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-20">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-xl">
                <p className="text-white/80 text-lg mb-4">Seit 6+ Jahren</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Sauberkeit auf die Sie sich verlassen können
                </h2>
                <p className="text-white/90 text-base sm:text-xl">
                  Von der täglichen Unterhaltsreinigung bis zur Grundreinigung:
                  Zahlreiche Kunden in der Bergstraße vertrauen auf unser Team.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                So einfach geht&apos;s
              </h2>
              <p className="text-xl text-gray-500">
                In vier Schritten zu Ihrer professionellen Gebäudereinigung
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-sky-200" />
              <HausmeisterTimelineSteps steps={processSteps} variant="blue" />
            </div>
          </div>
        </section>

        <section className="py-24 bg-section-gray">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
              Häufige Fragen zur Gebäudereinigung
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {cleaningFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-sky-300 last:border-b rounded-lg px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 sm:mb-12">
              <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs sm:text-sm font-semibold text-sky-700 mb-5">
                <MapPin className="w-4 h-4" />
                Unser Servicegebiet
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Wir sind für Sie da
              </h2>
              <p className="text-base sm:text-xl text-gray-500">
                In der gesamten Region Bergstraße und Südhessen.
              </p>
            </div>

            <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-100/70 via-white to-sky-50 p-4 sm:p-5">
              <div className="mb-4 sm:mb-5">
                <p className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
                  Regionale Einsatzkarte
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Tippen Sie auf einen Marker und wechseln Sie direkt zur lokalen
                  Leistungsseite.
                </p>
              </div>
              <ServiceAreaMap
                cities={cities}
                serviceSlug="gebaeudereinigung"
                variant="blue"
              />
            </div>
          </div>
        </section>

        <section className="py-32 relative overflow-hidden">
          <Image
            src="/glasreinigung/img3.jpg"
            alt="Gebäudereinigung CTA Hintergrund"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gray-900/70" />

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
              Bereit für ein
              <span className="text-sky-200"> sichtbar sauberes Objekt</span>?
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Gespräch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-7 text-lg font-medium rounded-full"
              >
                <a href={`tel:${businessInfo.contact.phone}`}>
                  <Phone className="w-5 h-5 mr-3" />
                  {businessInfo.contact.phoneDisplay}
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-sky-700 hover:bg-sky-800 text-white px-12 py-7 text-lg font-medium rounded-full"
              >
                <a
                  href={`https://wa.me/${businessInfo.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
