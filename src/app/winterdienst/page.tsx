import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WinterdienstHeroBackground } from "@/components/winterdienst-hero-background";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
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

function HeroContent({ variant }: { variant: "dark" | "light" }) {
  const isDark = variant === "dark";
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20 h-full flex items-center">
      <div className="max-w-4xl">
        <nav className="-mt-4 sm:mt-0 mb-4 sm:mb-6">
          <ol className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-600" : "text-white/70"}`}>
            <li>
              <Link href="/" className={isDark ? "hover:text-sky-600" : "hover:text-white"}>
                Home
              </Link>
            </li>
            <span>/</span>
            <li className={`${isDark ? "text-sky-600" : "text-sky-300"} font-medium`}>Winterdienst</li>
          </ol>
        </nav>

        <p className={`text-xs sm:text-sm ${isDark ? "text-sky-600" : "text-sky-300"} font-medium tracking-normal sm:tracking-wider uppercase mb-3 sm:mb-6`}>
          Professioneller Winterdienst
        </p>

        <h1 className={`text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold ${isDark ? "text-gray-900" : "text-white"} mb-8 leading-[1.1]`}>
          Wir sichern Ihre Flächen.
          <span className={isDark ? "text-sky-700" : "text-sky-300"}> Sie bleiben sorgenfrei im Winter.</span>
        </h1>

        <p className={`text-lg sm:text-2xl ${isDark ? "text-gray-600" : "text-white/80"} mb-12 max-w-2xl leading-relaxed`}>
          Zuverlässiger Winterdienst für Wohnanlagen, Gewerbe und Praxen.
          Pünktlich, gründlich und einsatzbereit bei Glätte.
        </p>

        <div className="mt-4 sm:mt-0 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-6">
          <Button
            asChild
            size="lg"
            className={`w-full ${isDark ? "bg-sky-700 hover:bg-sky-800" : "bg-sky-600 hover:bg-sky-500"} text-white px-4 py-4 text-sm font-medium rounded-xl sm:w-auto sm:px-10 sm:py-7 sm:text-lg sm:rounded-full`}
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
            className={`w-full ${isDark ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white" : "border-white text-white hover:bg-white hover:text-gray-900"} px-4 py-4 text-sm font-medium rounded-xl bg-transparent sm:w-auto sm:px-10 sm:py-7 sm:text-lg sm:rounded-full`}
          >
            <Link href="#services">
              Mehr erfahren
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

const service = getServiceBySlug("winterdienst")!;

export const metadata: Metadata = {
  title: `${service.name} | Sicher durch den Winter an der Bergstraße`,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: {
    canonical: "/winterdienst",
  },
  openGraph: {
    title: `${service.name} | ${businessInfo.name}`,
    description: service.metaDescription,
    url: "/winterdienst",
    type: "website",
    images: [
      {
        url: "/leistungCard/winterCard.png",
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
    images: ["/leistungCard/winterCard.png"],
  },
};

const services = [
  {
    image: "/leistungen/Winterdienst.png",
    title: "Schneeräumung",
    description: "Zuverlässige Räumung von Wegen, Zufahrten und Flächen",
  },
  {
    image: "/leistungCard/winterCard.png",
    title: "Streudienst",
    description: "Vereisungsschutz auf Gehwegen und Eingangsbereichen",
  },
  {
    image: "/leistungen/Winterdienst.png",
    title: "Kontrollfahrten",
    description: "Regelmäßige Wetter- und Flächenkontrolle im Einsatzgebiet",
  },
  {
    image: "/leistungCard/winterCard.png",
    title: "Objektbetreuung",
    description: "Winterdienst für Wohnanlagen, Gewerbe und Praxen",
  },
  {
    image: "/leistungen/Winterdienst.png",
    title: "Früh-Einsätze",
    description: "Einsatz ab den frühen Morgenstunden bei Bedarf",
  },
  {
    image: "/leistungCard/winterCard.png",
    title: "Dokumentation",
    description: "Transparente Einsatznachweise für mehr Sicherheit",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Kontaktaufnahme",
    description:
      "Sie melden sich telefonisch oder per WhatsApp. Wir erfassen Objekt und Flächen.",
  },
  {
    step: "02",
    title: "Kostenlose Besichtigung",
    description:
      "Wir prüfen vor Ort Zufahrten, Gehwege und sensible Bereiche für den Winter.",
  },
  {
    step: "03",
    title: "Individuelles Angebot",
    description:
      "Sie erhalten ein klares Angebot mit Leistungen, Einsatzzeiten und Intervallen.",
  },
  {
    step: "04",
    title: "Wintereinsatz",
    description:
      "Unser Team sorgt bei Schnee und Glätte für sichere und begehbare Flächen.",
  },
];

const winterFaqs = [
  {
    question: "Wann startet der Winterdienst-Einsatz?",
    answer:
      "Wir orientieren uns an Wetterlage und Glätteprognosen. Bei Bedarf starten unsere Einsätze bereits in den frühen Morgenstunden.",
  },
  {
    question: "Welche Flächen übernehmen Sie?",
    answer:
      "Wir übernehmen Gehwege, Eingänge, Zufahrten, Parkflächen und weitere vereinbarte Bereiche rund um Ihr Objekt.",
  },
  {
    question: "Stellen Sie Streumittel bereit?",
    answer:
      "Ja, wir bringen geeignete Streumittel mit und passen den Einsatz an Temperatur und Untergrund an.",
  },
  {
    question: "Bieten Sie feste Winterverträge an?",
    answer:
      "Ja, wir bieten planbare Vertragsmodelle für die gesamte Wintersaison sowie flexible Lösungen bei kurzfristigem Bedarf.",
  },
  {
    question: "Reinigen Sie die Flächen auch nach dem Winter?",
    answer:
      "Auf Wunsch übernehmen wir die Nachreinigung von Reststreugut und Winterrückständen zum Saisonende.",
  },
  {
    question: "Wie schnell können Sie starten?",
    answer:
      "Nach Erstgespräch und Besichtigung können wir in der Regel kurzfristig starten. Bei akuter Wetterlage prüfen wir sofort verfügbare Kapazitäten.",
  },
  {
    question: "Was kostet ein Winterdienst-Vertrag?",
    answer:
      "Die Kosten richten sich nach Fläche, Objektlage und gewünschtem Leistungsumfang. Sie erhalten ein transparentes Angebot ohne versteckte Kosten.",
  },
  {
    question: "Sind Einsätze dokumentiert?",
    answer:
      "Ja, unsere Einsätze können mit Zeitfenstern und Leistungen dokumentiert werden, damit Sie jederzeit den Überblick behalten.",
  },
];

export default function WinterdienstPage() {
  return (
    <>
      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: "/" },
          { name: "Winterdienst" },
        ]}
      />
      <FAQJsonLd questions={winterFaqs} />

      <Header />
      <main className="pt-28">
        <section className="h-[calc(100svh-7rem)] relative overflow-hidden">
          <WinterdienstHeroBackground
            contentDark={<HeroContent variant="dark" />}
            contentLight={<HeroContent variant="light" />}
          />
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
                      className="object-contain p-2"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-1.5 transition-colors">
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
            src="/leistungen/Winterdienst.png"
            alt="Professioneller Winterdienst"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-20">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-xl">
                <p className="text-white/80 text-lg mb-4">Seit 6+ Jahren</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Sicherheit auf die Sie sich verlassen können
                </h2>
                <p className="text-white/90 text-base sm:text-xl">
                  Von der ersten Glätte bis zum letzten Schneefall: Zahlreiche
                  Kunden in der Bergstraße setzen auf unseren Winterdienst.
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
                In vier Schritten zu Ihrem professionellen Winterdienst
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
              Häufige Fragen zum Winterdienst
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {winterFaqs.map((faq, index) => (
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
              <ServiceAreaMap cities={cities} serviceSlug="winterdienst" variant="blue" />
            </div>
          </div>
        </section>

        <section className="py-32 relative overflow-hidden">
          <Image
            src="/leistungCard/winterCard.png"
            alt="Winterdienst CTA Hintergrund"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gray-900/70" />

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
              Bereit für sichere
              <span className="text-sky-200"> Wege und Flächen</span>?
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
