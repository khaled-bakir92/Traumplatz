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
  Clock,
} from "lucide-react";

interface LayoutProps {
  citySlug: string;
}

// Heppenheim: "Historischer Charme" - Split Hero design with accordion services
export default function HeppenheimLayout({ citySlug }: LayoutProps) {
  const content = getCityContent(citySlug)!;
  const city = getCityBySlug(citySlug)!;
  const service = getServiceBySlug("hausmeisterservice")!;
  const otherCities = cities.filter((c) => c.slug !== citySlug).slice(0, 6);

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
        {/* Hero Section - Split Layout */}
        <section className="min-h-[90vh] grid lg:grid-cols-2">
          {/* Left: Content */}
          <div className="flex items-center bg-white px-6 sm:px-12 lg:px-16 py-16">
            <div className="max-w-xl">
              {/* Breadcrumb */}
              <nav className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-gray-500">
                  <li>
                    <Link href="/" className="hover:text-brand-green">
                      Home
                    </Link>
                  </li>
                  <span>/</span>
                  <li>
                    <Link href="/hausmeisterservice" className="hover:text-brand-green">
                      Hausmeisterservice
                    </Link>
                  </li>
                  <span>/</span>
                  <li className="text-brand-green font-medium">{city.name}</li>
                </ol>
              </nav>

              <div className="flex items-center gap-2 text-brand-green mb-4">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Nur {city.distanceFromHQ} km entfernt</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {content.heroHeadline}{" "}
                <span className="text-brand-green">{content.heroHighlight}</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {content.heroSubheadline}
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg font-medium rounded-full"
                >
                  <a href={`tel:${businessInfo.contact.phone}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Anrufen
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-6 text-lg font-medium rounded-full"
                >
                  <Link href="#services">
                    Leistungen ansehen
                  </Link>
                </Button>
              </div>

              {/* Stats Row */}
              <div className="flex gap-8 pt-8 border-t border-gray-200">
                {content.stats.slice(0, 3).map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[50vh] lg:h-auto">
            <Image
              src="/Hausmeisterservice.png"
              alt={`Hausmeisterservice ${city.name}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-l" />
          </div>
        </section>

        {/* Benefits Bar */}
        <section className="bg-brand-green py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {content.localBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro + Image Section */}
        <section className="py-20 bg-section-gray">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  {content.introTitle}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {content.introText}
                </p>
                <ul className="space-y-3">
                  {content.uniqueSellingPoints.map((point, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-green rounded-full" />
                      <span className="text-gray-700 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/hausmeister-hintergrund.png"
                  alt="Hausmeisterservice Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services - Accordion Style */}
        <section id="services" className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              Unsere Leistungen in {city.name}
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Klicken Sie auf eine Leistung für mehr Details
            </p>
            <Accordion type="single" collapsible className="space-y-3">
              {content.services.map((serviceItem, index) => (
                <AccordionItem
                  key={index}
                  value={`service-${index}`}
                  className="bg-gray-50 border-none rounded-xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center">
                        <serviceItem.icon className="w-6 h-6 text-brand-green" />
                      </div>
                      <span className="text-lg font-semibold text-gray-900">
                        {serviceItem.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5 pl-16">
                    {serviceItem.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Testimonial */}
        {content.testimonial && (
          <section className="py-20 bg-gray-900">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(content.testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl sm:text-3xl text-white font-medium mb-6 leading-relaxed">
                &ldquo;{content.testimonial.quote}&rdquo;
              </blockquote>
              <div className="text-gray-400">
                <div className="font-semibold text-white">{content.testimonial.author}</div>
                <div>{content.testimonial.location}</div>
              </div>
            </div>
          </section>
        )}

        {/* Districts */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Wir betreuen alle {city.name}er Ortsteile
              </h2>
              <p className="text-gray-600">
                Von der Altstadt bis zu den Außenbezirken - wir sind überall für Sie da
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {city.districts.map((district) => (
                <span
                  key={district}
                  className="px-5 py-2.5 bg-section-gray rounded-full text-gray-700 font-medium"
                >
                  {district}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-section-gray">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Häufige Fragen zu {city.name}
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {content.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-white border border-gray-200 rounded-xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Other Cities */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Weitere Standorte
            </h2>
            <div className="flex flex-wrap gap-3">
              {otherCities.map((otherCity) => (
                <Link
                  key={otherCity.slug}
                  href={`/hausmeisterservice/${otherCity.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-brand-green hover:text-white transition-all group text-sm"
                >
                  <span>{otherCity.name}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-brand-green">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {content.ctaTitle}
            </h2>
            <p className="text-xl text-white/80 mb-10">{content.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-green hover:bg-gray-100 px-10 py-6 text-lg font-medium rounded-full"
              >
                <a href={`tel:${businessInfo.contact.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {businessInfo.contact.phoneDisplay}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-6 text-lg font-medium rounded-full"
              >
                <a
                  href={`https://wa.me/${businessInfo.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
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
