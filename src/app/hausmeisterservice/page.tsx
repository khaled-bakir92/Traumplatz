import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { businessInfo, cities, faqs, getServiceBySlug } from "@/lib/seo-config";
import { ServiceJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Wrench,
  Sparkles,
  TreeDeciduous,
  Snowflake,
  Key,
  Settings,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const service = getServiceBySlug("hausmeisterservice")!;

export const metadata: Metadata = {
  title: `${service.name} | Professionelle Objektbetreuung an der Bergstraße`,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: {
    canonical: "/hausmeisterservice",
  },
  openGraph: {
    title: `${service.name} | ${businessInfo.name}`,
    description: service.metaDescription,
    url: "/hausmeisterservice",
    type: "website",
    images: [
      {
        url: "/Hausmeisterservice.png",
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
    images: ["/Hausmeisterservice.png"],
  },
};

const services = [
  {
    icon: Wrench,
    title: "Reparaturen",
    description: "Schnelle Behebung von Defekten",
  },
  {
    icon: Sparkles,
    title: "Reinigung",
    description: "Treppenhäuser & Außenanlagen",
  },
  {
    icon: TreeDeciduous,
    title: "Grünpflege",
    description: "Rasenmähen & Heckenschnitt",
  },
  {
    icon: Snowflake,
    title: "Winterdienst",
    description: "Schneeräumung & Streudienst",
  },
  {
    icon: Key,
    title: "Schlüsselservice",
    description: "Verwaltung & Koordination",
  },
  {
    icon: Settings,
    title: "Technik",
    description: "Wartung & Instandhaltung",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Kontaktaufnahme",
    description:
      "Rufen Sie uns an oder schreiben Sie uns. Wir nehmen Ihre Anforderungen auf.",
  },
  {
    step: "02",
    title: "Kostenlose Besichtigung",
    description:
      "Wir besichtigen Ihr Objekt und erstellen ein maßgeschneidertes Angebot.",
  },
  {
    step: "03",
    title: "Vertragsabschluss",
    description:
      "Flexible Vertragsmodelle - monatlich kündbar oder mit Jahresvorteil.",
  },
  {
    step: "04",
    title: "Regelmäßige Betreuung",
    description:
      "Ihr fester Objektbetreuer kümmert sich zuverlässig um Ihre Immobilie.",
  },
];

export default function HausmeisterservicePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: "/" },
          { name: "Hausmeisterservice" },
        ]}
      />
      <FAQJsonLd questions={faqs} />

      <Header />
      <main className="pt-28">
        {/* Hero Section - Mit Hintergrundbild */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          {/* Hintergrundbild */}
          <Image
            src="/hausmeister-hintergrund.png"
            alt="Hausmeisterservice Hintergrund"
            fill
            className="object-cover"
            priority
          />

          {/* White gradient overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.65) 100%)",
            }}
          />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <nav className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-gray-600">
                  <li>
                    <Link href="/" className="hover:text-brand-green">
                      Home
                    </Link>
                  </li>
                  <span>/</span>
                  <li className="text-brand-green font-medium">
                    Hausmeisterservice
                  </li>
                </ol>
              </nav>

              <p className="text-brand-green font-medium tracking-wider uppercase mb-6">
                Professioneller Hausmeisterservice
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-8 leading-[1.1]">
                Wir kümmern uns.
                <span className="text-brand-green"> Sie entspannen.</span>
              </h1>

              <p className="text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
                Professionelle Objektbetreuung für Ihre Immobilie. Ein fester
                Ansprechpartner. Keine Ausreden.
              </p>

              <div className="flex flex-wrap gap-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-7 text-lg font-medium rounded-full"
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
                  className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-7 text-lg font-medium rounded-full bg-transparent"
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

        {/* Services - Horizontal Scroll Cards */}
        <section id="services" className="py-24 bg-section-gray">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Unsere Leistungen
            </h2>
          </div>

          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex gap-6 px-4 sm:px-6 lg:px-8 min-w-max">
              {services.map((serviceItem, index) => (
                <div
                  key={index}
                  className="group w-72 bg-white rounded-3xl p-8 hover:bg-brand-green transition-all duration-500 shadow-sm hover:shadow-2xl cursor-pointer"
                >
                  <serviceItem.icon className="w-12 h-12 text-brand-green group-hover:text-white mb-6 transition-colors" />
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                    {serviceItem.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-white/80 transition-colors">
                    {serviceItem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Section - Full Width */}
        <section className="relative h-[70vh]">
          <Image
            src="/Hausmeisterservice.png"
            alt="Professioneller Hausmeisterservice"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-20">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-xl">
                <p className="text-white/80 text-lg mb-4">Seit 15+ Jahren</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ihre Immobilie in besten Händen
                </h2>
                <p className="text-white/90 text-xl">
                  Über 500 zufriedene Kunden in der Region Bergstraße vertrauen
                  auf unseren Service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Prozess Timeline */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                So einfach geht&apos;s
              </h2>
              <p className="text-xl text-gray-500">
                In vier Schritten zu Ihrem persönlichen Hausmeisterservice
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line - Desktop */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-brand-green/20" />

              <div className="grid md:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative text-center">
                    {/* Step Number */}
                    <div className="relative z-10 w-20 h-20 mx-auto bg-brand-green rounded-full flex items-center justify-center mb-6 shadow-lg shadow-brand-green/30">
                      <span className="text-2xl font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-section-gray">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
              Häufig gestellte Fragen (FAQ) zu
              <br />
              Hausmeisterservice Bensheim
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-brand-green rounded-lg px-6 overflow-hidden"
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

        {/* Einzugsgebiet - Minimalistisch */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Wir sind für Sie da
                </h2>
                <p className="text-xl text-gray-500">
                  In der gesamten Region Bergstraße und Südhessen.
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="flex flex-wrap gap-3">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/hausmeisterservice/${city.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 rounded-full text-gray-700 hover:bg-brand-green hover:text-white transition-all shadow-sm hover:shadow-md group"
                    >
                      <span className="font-medium">{city.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
              Bereit für einen
              <span className="text-brand-green-light"> Hausmeister</span>, auf
              den Sie sich verlassen können?
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

            {/* Contact Info */}
            <div className="mt-16 pt-12 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
                <span>{businessInfo.address.street}</span>
                <span className="hidden sm:block">•</span>
                <span>
                  {businessInfo.address.postalCode} {businessInfo.address.city}
                </span>
                <span className="hidden sm:block">•</span>
                <span>{businessInfo.contact.email}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
