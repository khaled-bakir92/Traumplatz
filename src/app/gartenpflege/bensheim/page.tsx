import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HausmeisterTimelineSteps } from "@/components/hausmeister-timeline-steps";
import {
  BreadcrumbJsonLd,
  FAQJsonLd,
  LocalServiceJsonLd,
} from "@/components/json-ld";
import { ServiceAreaMap } from "@/components/service-area-map";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  businessInfo,
  cities,
  getCityBySlug,
  getServiceBySlug,
} from "@/lib/seo-config";

function getPageData() {
  const service = getServiceBySlug("gartenpflege");
  const city = getCityBySlug("bensheim");

  if (!service || !city) {
    notFound();
  }

  return { service, city };
}

const { service, city } = getPageData();

export const metadata: Metadata = {
  title: `${service.name} in ${city.name} | Professionelle Grünpflege vor Ort`,
  description:
    `Professionelle ${service.name} in ${city.name} (${city.postalCodes.join(", ")}). ` +
    `Regelmäßige Pflege, Hecken- und Rasenschnitt in ${city.name} und ${city.districts.join(", ")}.`,
  keywords: [...service.keywords, city.name, ...city.districts, ...city.postalCodes],
  alternates: {
    canonical: `/${service.slug}/${city.slug}`,
  },
  openGraph: {
    title: `${service.name} in ${city.name} | ${businessInfo.name}`,
    description:
      `Zuverlässige ${service.name} in ${city.name} und Umgebung. Jetzt unverbindlich anfragen.`,
    url: `/${service.slug}/${city.slug}`,
    type: "website",
    images: [
      {
        url: "/leistungCard/GartenCard.png",
        width: 1200,
        height: 630,
        alt: `${service.name} in ${city.name} - ${businessInfo.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${service.name} in ${city.name} | ${businessInfo.name}`,
    description:
      `Lokale ${service.name} in ${city.name}: planbar, sauber, termintreu.`,
    images: ["/leistungCard/GartenCard.png"],
  },
};

const services = [
  {
    image: "/Gartenpflege/leistungen/Rasenpflege.png",
    title: "Rasenpflege",
    description: `Rasen mähen, Kanten schneiden und sauber halten - regelmäßig in ${city.name}`,
  },
  {
    image: "/Gartenpflege/leistungen/Hackenschere.png",
    title: "Heckenschnitt",
    description: `Formschnitt und Rückschnitt je Saison für Gärten in ${city.name}`,
  },
  {
    image: "/Gartenpflege/leistungen/Beetpflege.png",
    title: "Beetpflege",
    description: "Unkraut entfernen, mulchen und saisonal bepflanzen",
  },
  {
    image: "/Gartenpflege/leistungen/konstruktion-und-werkzeuge.png",
    title: "Baumpflege",
    description: "Pflegeschnitt und sichere Entlastung für gesunde Bäume",
  },
  {
    image: "/Gartenpflege/leistungen/Laubbeseitigung.png",
    title: "Laubbeseitigung",
    description: "Saubere Wege und Flächen durch gründliche Laubentfernung",
  },
  {
    image: "/Gartenpflege/leistungen/Bewaesserung.png",
    title: "Bewässerung",
    description: "Gezielte Wasserversorgung für gesunde Pflanzen und Rasen",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Kontaktaufnahme",
    description:
      `Sie schreiben oder rufen uns an. Wir erfassen Flächen, Wünsche und Turnus für Ihr Objekt in ${city.name}.`,
  },
  {
    step: "02",
    title: "Kostenlose Besichtigung",
    description:
      `Wir sehen uns den Garten in ${city.name} vor Ort an und beraten zu sinnvollen Leistungen.`,
  },
  {
    step: "03",
    title: "Individuelles Angebot",
    description:
      "Sie erhalten ein transparentes Angebot mit festen Aufgaben und Intervallen.",
  },
  {
    step: "04",
    title: "Regelmäßige Pflege",
    description:
      "Unser Team kümmert sich zuverlässig um einen gepflegten Garten das ganze Jahr.",
  },
];

const gardenFaqs = [
  {
    question: `Bieten Sie Gartenpflege in ganz ${city.name} inklusive ${city.districts.join(", ")} an?`,
    answer:
      `Ja, wir übernehmen Einsätze im gesamten Stadtgebiet von ${city.name} - inklusive ${city.districts.join(", ")}.`,
  },
  {
    question: `Wie oft ist Gartenpflege in ${city.name} sinnvoll?`,
    answer:
      `Für die meisten Gärten in ${city.name} ist in der Hauptsaison ein 2- bis 4-wöchiger Rhythmus sinnvoll.`,
  },
  {
    question: `Wie schnell können Sie in ${city.name} starten?`,
    answer:
      `Da wir direkt in Bensheim ansässig sind, können wir Ersttermine kurzfristig und flexibel anbieten.`,
  },
  {
    question: `Übernehmen Sie in ${city.name} auch Hecken- und Rückschnitt mit Entsorgung?`,
    answer:
      `Ja, wir übernehmen fachgerechten Schnitt, sammeln Grünschnitt ein und entsorgen ihn nach Absprache.`,
  },
  {
    question: `Gibt es in ${city.name} auch einmalige Einsätze ohne Vertrag?`,
    answer:
      "Ja, neben laufenden Pflegeverträgen bieten wir auch Einzeltermine an, z. B. für Frühjahrspflege oder Laubbeseitigung.",
  },
  {
    question: `Was kostet Gartenpflege in ${city.name}?`,
    answer:
      `Die Kosten hängen von Fläche, Leistungsumfang und Intervall ab. Für Ihr Objekt in ${city.name} erhalten Sie ein klares, unverbindliches Angebot.`,
  },
];

export default function BensheimGartenpflegePage() {
  return (
    <>
      <LocalServiceJsonLd service={service} city={city} />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: "/" },
          { name: "Gartenpflege", url: "/gartenpflege" },
          { name: city.name },
        ]}
      />
      <FAQJsonLd questions={gardenFaqs} />

      <Header />
      <main className="pt-28">
        <section className="h-[calc(100svh-7rem)] flex items-center relative overflow-hidden">
          <Image
            src="/Gartenpflege/Hintergrund mit farbe.png"
            alt={`Gartenpflege in ${city.name}`}
            fill
            className="object-contain object-center"
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
                    <Link href="/" className="hover:text-brand-green">
                      Home
                    </Link>
                  </li>
                  <span>/</span>
                  <li>
                    <Link href="/gartenpflege" className="hover:text-brand-green">
                      Gartenpflege
                    </Link>
                  </li>
                  <span>/</span>
                  <li className="text-brand-green font-medium">{city.name}</li>
                </ol>
              </nav>

              <p className="text-xs sm:text-sm text-brand-green font-medium tracking-normal sm:tracking-wider uppercase mb-3 sm:mb-6">
                Professionelle Gartenpflege in {city.name}
              </p>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-[1.1]">
                Wir pflegen Ihren Garten in {city.name}.
                <span className="text-brand-green"> Sie genießen ihn.</span>
              </h1>

              <p className="text-lg sm:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
                {city.description} Zuverlässige Termine, saubere Ausführung und
                feste Ansprechpartner - direkt vor Ort in {city.name}.
              </p>

              <div className="mt-4 sm:mt-0 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-6">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-brand-green-light hover:bg-brand-green text-white px-4 py-4 text-sm font-medium rounded-xl sm:w-auto sm:px-10 sm:py-7 sm:text-lg sm:rounded-full"
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
              Unsere Leistungen in {city.name}
            </h2>
          </div>

          <div className="pb-8 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 justify-items-center">
              {services.map((serviceItem, index) => (
                <div
                  key={index}
                  className="group w-full max-w-[14rem] bg-white rounded-2xl p-5 hover:bg-brand-green transition-all duration-500 shadow-sm hover:shadow-2xl cursor-pointer"
                >
                  <div className="relative h-16 sm:h-20 rounded-xl mb-3 overflow-hidden">
                    <Image
                      src={serviceItem.image}
                      alt={`${serviceItem.title} in ${city.name}`}
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
            src="/Gartenpflege/2.png"
            alt={`Professionelle Gartenpflege in ${city.name}`}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-20">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-xl">
                <p className="text-white/80 text-lg mb-4">Seit 6+ Jahren</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Ihr Garten in {city.name} in besten Händen
                </h2>
                <p className="text-white/90 text-base sm:text-xl">
                  Von der ersten Frühlingspflege bis zum letzten Herbstschnitt:
                  Kundinnen und Kunden in {city.name} setzen auf unsere
                  zuverlässige Gartenpflege.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                So einfach geht&apos;s in {city.name}
              </h2>
              <p className="text-xl text-gray-500">
                In vier Schritten zu Ihrer professionellen Gartenpflege
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-brand-green/20" />
              <HausmeisterTimelineSteps steps={processSteps} />
            </div>
          </div>
        </section>

        <section className="py-24 bg-section-gray">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
              Häufige Fragen zur Gartenpflege in {city.name}
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {gardenFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-brand-green last:border-b rounded-lg px-6 overflow-hidden"
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
              <p className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-2 text-xs sm:text-sm font-semibold text-brand-green mb-5">
                <MapPin className="w-4 h-4" />
                Unser Servicegebiet rund um {city.name}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Wir sind schnell in {city.name} vor Ort
              </h2>
              <p className="text-base sm:text-xl text-gray-500">
                {city.name} ist unser Hauptstandort - wir sind direkt vor Ort in{" "}
                {businessInfo.address.city}.
              </p>
            </div>

            <div className="rounded-3xl border border-brand-green/20 bg-gradient-to-br from-brand-green-light/20 via-white to-brand-green/10 p-4 sm:p-5">
              <div className="mb-4 sm:mb-5">
                <p className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
                  Regionale Einsatzkarte
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Tippen Sie auf einen Marker und wechseln Sie direkt zur lokalen
                  Leistungsseite.
                </p>
              </div>
              <ServiceAreaMap cities={cities} serviceSlug="gartenpflege" />
            </div>
          </div>
        </section>

        <section className="py-32 relative overflow-hidden">
          <Image
            src="/Gartenpflege/background-Gartenpflege.png"
            alt={`Gartenpflege Kontakt in ${city.name}`}
            fill
            className="object-contain object-center"
          />
          <div className="absolute inset-0 bg-gray-900/70" />

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
              Bereit für gepflegte
              <span className="text-brand-green-light"> Außenanlagen</span> in
              {" "}{city.name}?
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Gespräch zu Ihrem
              Garten in {city.name}.
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
                className="bg-brand-green hover:bg-brand-green-dark text-white px-12 py-7 text-lg font-medium rounded-full"
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
