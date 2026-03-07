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
import { LocalServiceJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/json-ld";
import { getServiceBySlug } from "@/lib/seo-config";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Clock,
  ShieldCheck,
  Headphones,
} from "lucide-react";

interface LayoutProps {
  citySlug: string;
}

// Lorsch: "Klosterstadt" - Editorial magazine style with numbered sections, bento grid services
export default function LorschLayout({ citySlug }: LayoutProps) {
  const content = getCityContent(citySlug)!;
  const city = getCityBySlug(citySlug)!;
  const service = getServiceBySlug("hausmeisterservice")!;
  const otherCities = cities.filter((c) => c.slug !== citySlug).slice(0, 6);

  const processSteps = [
    {
      step: "01",
      title: "Kostenlose Besichtigung",
      description:
        "Wir kommen zu Ihrem Objekt in Lorsch, schauen uns alles an und besprechen Ihre Anforderungen - unverbindlich und kostenlos.",
    },
    {
      step: "02",
      title: "Individuelles Angebot",
      description:
        "Innerhalb von 48 Stunden erhalten Sie ein maßgeschneidertes Angebot mit transparenter Preisaufstellung.",
    },
    {
      step: "03",
      title: "Ihr Hausmeister startet",
      description:
        "Ihr fester Ansprechpartner übernimmt die Betreuung. Regelmäßige Berichte und direkter Kontakt inklusive.",
    },
  ];

  return (
    <>
      <LocalServiceJsonLd service={service} city={city} />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: "/" },
          { name: "Hausmeisterservice", url: "/hausmeisterservice" },
          { name: city.name },
        ]}
      />
      <FAQJsonLd questions={content.faqs} />

      <Header />
      <main className="pt-28">
        {/* Hero Section - Clean Editorial Style */}
        <section className="relative bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-0 min-h-[85vh] items-center">
              {/* Left Content - 7 cols */}
              <div className="lg:col-span-7 py-16 lg:py-24 lg:pr-16">
                {/* Breadcrumb */}
                <nav className="mb-8">
                  <ol className="flex items-center gap-2 text-sm text-gray-400">
                    <li>
                      <Link href="/" className="hover:text-gray-900 transition-colors">
                        Home
                      </Link>
                    </li>
                    <span className="text-gray-300">/</span>
                    <li>
                      <Link href="/hausmeisterservice" className="hover:text-gray-900 transition-colors">
                        Hausmeisterservice
                      </Link>
                    </li>
                    <span className="text-gray-300">/</span>
                    <li className="text-gray-900 font-medium">{city.name}</li>
                  </ol>
                </nav>

                {/* Micro badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-800 rounded-md text-xs font-semibold uppercase tracking-wider mb-6 border border-amber-200">
                  <MapPin className="w-3.5 h-3.5" />
                  Nur 8 km entfernt
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                  {content.heroHeadline}{" "}
                  <span className="relative inline-block text-brand-green">
                    {content.heroHighlight}
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 8C50 3 100 2 150 5C200 8 250 4 298 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-brand-green/30" />
                    </svg>
                  </span>
                </h1>

                <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                  {content.heroSubheadline}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 mb-12">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-base font-medium rounded-xl shadow-lg shadow-gray-900/20"
                  >
                    <a href={`tel:${businessInfo.contact.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Jetzt anrufen
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-6 text-base font-medium rounded-xl"
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

                {/* Compact Stats */}
                <div className="flex items-center gap-6 pt-8 border-t border-gray-100">
                  {content.stats.map((stat, index) => (
                    <div key={index} className="flex items-baseline gap-1.5">
                      <span className="text-xl font-bold text-gray-900">{stat.value}</span>
                      <span className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image - 5 cols */}
              <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[600px]">
                <div className="absolute inset-0 rounded-l-[2rem] overflow-hidden">
                  <Image
                    src="/Hausmeisterservice.png"
                    alt="Hausmeisterservice in Lorsch - Traumplatz"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/80" />
                </div>
                {/* Floating card on image */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-white">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-white text-sm font-bold ring-2 ring-white">T</div>
                      <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white text-sm font-bold ring-2 ring-white">P</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Traumplatz Lorsch</div>
                      <div className="text-xs text-gray-500">Ihr persönlicher Hausmeister wartet</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="bg-gray-900 py-5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {content.localBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2.5 text-white/90">
                  <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro Section - Asymmetric */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <div className="sticky top-32">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-4 block">Über uns in Lorsch</span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                    {content.introTitle}
                  </h2>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  {content.introText}
                </p>
                {/* Why us - numbered cards */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Clock, title: "Blitzschnell vor Ort", text: "12 Minuten Anfahrtszeit nach Lorsch" },
                    { icon: ShieldCheck, title: "Rechtssicher", text: "Dokumentierte Verkehrssicherungspflicht" },
                    { icon: Headphones, title: "Immer erreichbar", text: "24/7 Notdienst, auch an Feiertagen" },
                    { icon: MapPin, title: "Lorsch & Seehof", text: "Aktiv im gesamten Stadtgebiet" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group p-5 rounded-xl border border-gray-100 hover:border-brand-green/30 hover:bg-brand-green/5 transition-all"
                    >
                      <item.icon className="w-5 h-5 text-brand-green mb-3" />
                      <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Bento Grid */}
        <section className="py-24 bg-section-gray">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-4 block">Leistungen</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Hausmeisterservice-Leistungen in Lorsch
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                Von der täglichen Gebäudebetreuung bis zum winterlichen Räumdienst -
                alles aus einer Hand für Ihre Immobilie in Lorsch.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {content.services.map((serviceItem, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                    index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <serviceItem.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">
                        {serviceItem.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{serviceItem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - "So funktioniert's" */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-4 block">In 3 Schritten</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                So starten Sie mit Ihrem Hausmeister in Lorsch
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 relative">
              {/* Connection line */}
              <div className="hidden lg:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-brand-green/20 via-brand-green/40 to-brand-green/20" />

              {processSteps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-green text-white text-lg font-bold mb-6 relative z-10 shadow-lg shadow-brand-green/20">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full-width Image Break with Text Overlay */}
        <section className="relative h-[45vh] min-h-[350px]">
          <Image
            src="/Hausmeisterservice.png"
            alt="Professioneller Hausmeisterservice Lorsch"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  Lorsch verdient einen Hausmeister,<br className="hidden sm:block" /> der sich kümmert.
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  Ob Mehrfamilienhaus am Marktplatz oder Wohnanlage in Seehof -
                  wir behandeln jedes Objekt wie unser eigenes.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-5 text-base font-medium rounded-xl"
                >
                  <a href={`tel:${businessInfo.contact.phone}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Kostenlos beraten lassen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {content.testimonial && (
          <section className="py-24 bg-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="relative bg-gray-50 rounded-3xl p-10 sm:p-14">
                {/* Large quote mark */}
                <div className="absolute top-6 left-8 text-8xl font-serif text-brand-green/10 leading-none select-none">&ldquo;</div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(content.testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-xl sm:text-2xl text-gray-900 font-medium mb-8 leading-relaxed">
                    {content.testimonial.quote}
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center">
                      <span className="text-brand-green font-bold text-lg">
                        {content.testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{content.testimonial.author}</div>
                      <div className="text-sm text-gray-500">{content.testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Districts */}
        <section className="py-16 bg-section-gray">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Hausmeisterservice in ganz Lorsch
                </h2>
                <p className="text-gray-500 mt-1">Wir betreuen Objekte im gesamten Stadtgebiet</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {city.districts.map((district) => (
                  <span
                    key={district}
                    className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium text-sm border border-gray-200"
                  >
                    {district}
                  </span>
                ))}
                <span className="px-4 py-2 bg-brand-green/10 rounded-lg text-brand-green font-medium text-sm border border-brand-green/20">
                  + Lorsch Zentrum
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-green mb-4 block">FAQ</span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Häufige Fragen zum Hausmeisterservice in Lorsch
                  </h2>
                  <p className="text-gray-500">
                    Sie haben weitere Fragen? Rufen Sie uns einfach an - wir beraten Sie gerne.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl"
                  >
                    <a href={`tel:${businessInfo.contact.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      {businessInfo.contact.phoneDisplay}
                    </a>
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-8">
                <Accordion type="single" collapsible className="space-y-3">
                  {content.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="bg-gray-50 border-none rounded-xl px-6 overflow-hidden"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-5 text-base">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
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
        <section className="py-16 bg-section-gray">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-gray-900 mb-5">
              Hausmeisterservice auch in der Region
            </h2>
            <div className="flex flex-wrap gap-2">
              {otherCities.map((otherCity) => (
                <Link
                  key={otherCity.slug}
                  href={`/hausmeisterservice/${otherCity.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white rounded-lg text-sm text-gray-600 hover:text-brand-green hover:border-brand-green/30 border border-gray-200 transition-all group"
                >
                  <span>{otherCity.name}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-green rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-[96px]" />
          </div>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {content.ctaTitle}
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
              {content.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-green hover:bg-brand-green-dark text-white px-10 py-6 text-lg font-medium rounded-xl shadow-lg shadow-brand-green/20"
              >
                <a href={`tel:${businessInfo.contact.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {businessInfo.contact.phoneDisplay}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white px-10 py-6 text-lg font-medium rounded-xl border border-white/20"
              >
                <a
                  href={`mailto:${businessInfo.contact.email}?subject=${encodeURIComponent("Anfrage: Hausmeisterservice in Lorsch")}`}
                >
                  E-Mail schreiben
                </a>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-8">
              Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
