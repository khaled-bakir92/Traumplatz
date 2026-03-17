"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getCityContent } from "../city-content";
import { businessInfo, getCityBySlug, cities } from "@/lib/seo-config";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Star,
  Mountain,
  Wheat,
  Users,
  FileCheck,
} from "lucide-react";

interface LayoutProps {
  citySlug: string;
}

// Alsbach-Hähnlein: "Doppelgemeinde" - Dual-identity design with side-by-side comparison, numbered services
export default function AlsbachHaehnleinLayout({ citySlug }: LayoutProps) {
  const content = getCityContent(citySlug)!;
  const city = getCityBySlug(citySlug)!;
  const otherCities = cities.filter((c) => c.slug !== citySlug).slice(0, 6);

  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Hero Section - Image background with overlay card */}
        <section className="relative min-h-[90vh] flex items-end lg:items-center">
          <Image
            src="/leistungen/Hausmeister.png"
            alt="Hausmeisterservice Alsbach-Hähnlein - Traumplatz"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/30" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <span>/</span>
                <li>
                  <Link href="/hausmeisterservice" className="hover:text-white transition-colors">
                    Hausmeisterservice
                  </Link>
                </li>
                <span>/</span>
                <li className="text-white font-medium">{city.name}</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.08]">
                {content.heroHeadline}{" "}
                <span className="text-brand-green-light">{content.heroHighlight}</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
                {content.heroSubheadline}
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-6 text-base font-medium rounded-xl shadow-lg"
                >
                  <a href={`tel:${businessInfo.contact.phone}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-6 text-base font-medium rounded-xl border border-white/20"
                >
                  <a
                    href={`https://wa.me/${businessInfo.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              {/* Stats inline */}
              <div className="flex flex-wrap gap-8">
                {content.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Bar */}
        <section className="bg-white border-b border-gray-100 py-5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {content.localBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dual Community Section - Unique to Alsbach-Hähnlein */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-4 block">Zwei Ortsteile, ein Service</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Wir kennen beide Seiten von Alsbach-Hähnlein
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Alsbach Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-green/5 to-brand-green/10 border border-brand-green/15 p-8 lg:p-10">
                <div className="absolute top-6 right-6 text-[8rem] font-black text-brand-green/5 leading-none select-none">A</div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-green/10 text-brand-green rounded-lg text-xs font-semibold uppercase tracking-wider mb-5">
                    <Mountain className="w-3.5 h-3.5" />
                    Bergstraße
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Alsbach</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Historisches Schloss Alsbach, steile Weinbergstraßen und gepflegte Villen in Hanglage. Hier braucht es einen Hausmeister, der mit anspruchsvollem Gelände umgehen kann - vom Winterdienst auf steilen Wegen bis zur Pflege von Hanggrundstücken.
                  </p>
                  <ul className="space-y-2.5">
                    {["Winterdienst auf Hanglagen", "Pflege steiler Gärten", "Historische Gebäudebetreuung"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-brand-green shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hähnlein Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50/50 to-amber-100/30 border border-amber-200/30 p-8 lg:p-10">
                <div className="absolute top-6 right-6 text-[8rem] font-black text-amber-900/5 leading-none select-none">H</div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 text-amber-800 rounded-lg text-xs font-semibold uppercase tracking-wider mb-5">
                    <Wheat className="w-3.5 h-3.5" />
                    Hessisches Ried
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Hähnlein</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Moderne Wohnanlagen, ebene Grundstücke und die ruhige Atmosphäre des Rieds. In Hähnlein und Sandwiese betreuen wir Mehrfamilienhäuser und Eigenheime mit dem gleichen hohen Standard - abgestimmt auf die flache Topografie und die örtlichen Gegebenheiten.
                  </p>
                  <ul className="space-y-2.5">
                    {["Großflächiger Winterdienst", "Pflege ebener Außenanlagen", "Betreuung moderner Wohnanlagen"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro / Why Us */}
        <section className="py-24 bg-section-gray">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src="/hausmeister-hintergrund.png"
                  alt="Hausmeisterservice Team Alsbach-Hähnlein"
                  fill
                  className="object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-brand-green" />
                    <div>
                      <div className="text-sm font-bold text-gray-900">Fester Ansprechpartner</div>
                      <div className="text-xs text-gray-500">Für Ihre Objekte in Alsbach-Hähnlein</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-4 block">Über uns</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {content.introTitle}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {content.introText}
                </p>
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                  {[
                    { value: "12 km", label: "Entfernung" },
                    { value: "3", label: "Ortsteile" },
                    { value: "24/7", label: "Erreichbar" },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="text-2xl font-bold text-brand-green">{item.value}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Numbered List Style */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-4 block">Unsere Leistungen</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Hausmeisterservice für Alsbach-Hähnlein
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                Professionelle Objektbetreuung für Hausverwaltungen, Eigentümergemeinschaften
                und Privatimmobilien in beiden Ortsteilen.
              </p>
            </div>

            <div className="space-y-4">
              {content.services.map((serviceItem, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-6 p-6 rounded-2xl border border-gray-100 hover:border-brand-green/20 hover:bg-brand-green/[0.02] transition-all"
                >
                  {/* Number */}
                  <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-xl bg-gray-50 group-hover:bg-brand-green/10 transition-colors shrink-0">
                    <span className="text-lg font-bold text-gray-300 group-hover:text-brand-green transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Icon */}
                  <div className="w-11 h-11 bg-brand-green/10 rounded-xl flex items-center justify-center shrink-0 sm:hidden">
                    <serviceItem.icon className="w-5 h-5 text-brand-green" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:block">
                        <serviceItem.icon className="w-5 h-5 text-brand-green mt-1" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                          {serviceItem.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{serviceItem.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA Band */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-brand-green" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 w-80 h-80 border border-white rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 border border-white rounded-full" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Kostenlose Erstbesichtigung in Alsbach-Hähnlein
                </h2>
                <p className="text-white/80">
                  Wir schauen uns Ihr Objekt an und erstellen ein faires Angebot - unverbindlich.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-green hover:bg-gray-100 px-8 py-5 text-base font-medium rounded-xl"
                >
                  <a href={`tel:${businessInfo.contact.phone}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Anrufen
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-white/15 hover:bg-white/25 text-white px-8 py-5 text-base font-medium rounded-xl border border-white/25"
                >
                  <a
                    href={`https://wa.me/${businessInfo.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {content.testimonial && (
          <section className="py-24 bg-gray-900">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(content.testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-xl sm:text-2xl lg:text-3xl text-white font-medium mb-10 leading-relaxed">
                  &ldquo;{content.testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="text-white font-semibold text-lg">{content.testimonial.author}</div>
                  <div className="text-gray-500 mt-1">{content.testimonial.location}</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Districts */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Aktiv in allen Ortsteilen
              </h2>
              <p className="text-gray-500">
                Unser Hausmeisterservice deckt die gesamte Gemeinde Alsbach-Hähnlein ab
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {city.districts.map((district) => (
                <div
                  key={district}
                  className="px-6 py-3 bg-section-gray rounded-xl text-gray-800 font-medium border border-gray-100 hover:border-brand-green/20 hover:bg-brand-green/5 transition-all"
                >
                  {district}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Full width, clean */}
        <section className="py-24 bg-section-gray">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2">
                <div className="sticky top-32">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-green/10 text-brand-green rounded-lg text-xs font-semibold uppercase tracking-wider mb-5">
                    <FileCheck className="w-3.5 h-3.5" />
                    FAQ
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Fragen zum Hausmeisterservice in Alsbach-Hähnlein
                  </h2>
                  <p className="text-gray-500 mb-6">
                    Die wichtigsten Antworten auf einen Blick. Bei weiteren Fragen beraten wir Sie gerne persönlich.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={`tel:${businessInfo.contact.phone}`}
                      className="inline-flex items-center gap-2 text-brand-green font-medium hover:underline"
                    >
                      <Phone className="w-4 h-4" />
                      {businessInfo.contact.phoneDisplay}
                    </a>
                    <a
                      href={`mailto:${businessInfo.contact.email}`}
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-green transition-colors"
                    >
                      {businessInfo.contact.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <Accordion type="single" collapsible className="space-y-3">
                  {content.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="bg-white border border-gray-100 rounded-xl px-6 overflow-hidden"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-5 text-base gap-4">
                        <span className="flex items-start gap-3">
                          <span className="text-brand-green/40 font-bold text-sm mt-0.5 shrink-0">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{faq.question}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-5 pl-9 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Other Cities */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-gray-900 mb-5">
              Hausmeisterservice in der Region Bergstraße
            </h2>
            <div className="flex flex-wrap gap-2">
              {otherCities.map((otherCity) => (
                <Link
                  key={otherCity.slug}
                  href={`/hausmeisterservice/${otherCity.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-gray-50 rounded-xl text-sm text-gray-600 hover:text-white hover:bg-brand-green border border-gray-100 hover:border-brand-green transition-all group"
                >
                  <span>{otherCity.name}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-950 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green via-amber-400 to-brand-green" />
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white rounded-full" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {content.ctaTitle}
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
              {content.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-green hover:bg-brand-green-dark text-white px-10 py-6 text-lg font-medium rounded-xl shadow-lg shadow-brand-green/25"
              >
                <a href={`tel:${businessInfo.contact.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {businessInfo.contact.phoneDisplay}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white/10 hover:bg-white/15 text-white px-10 py-6 text-lg font-medium rounded-xl border border-white/15"
              >
                <a
                  href={`mailto:${businessInfo.contact.email}?subject=${encodeURIComponent("Anfrage: Hausmeisterservice Alsbach-Hähnlein")}`}
                >
                  E-Mail schreiben
                </a>
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-8">
              Antwort innerhalb von 24 Stunden garantiert.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
