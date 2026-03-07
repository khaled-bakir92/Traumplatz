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
import { businessInfo, getCityBySlug, cities, getOpenStreetMapEmbedUrl } from "@/lib/seo-config";
import { getServiceBySlug } from "@/lib/seo-config";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  MapPin,
  CheckCircle,
  Star,
  Clock,
} from "lucide-react";

interface LayoutProps {
  citySlug: string;
}

// Worms: "Nibelungen Erbe" - Map integration, distance reliability
export default function WormsLayout({ citySlug }: LayoutProps) {
  const content = getCityContent(citySlug)!;
  const city = getCityBySlug(citySlug)!;
  const service = getServiceBySlug("hausmeisterservice")!;
  const otherCities = cities.filter((c) => c.slug !== citySlug).slice(0, 6);
  const mapUrl = getOpenStreetMapEmbedUrl(city);

  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Hero Section - Distance Focus */}
        <section className="relative py-20 lg:py-28 bg-gray-900 overflow-hidden">
          {/* Background Image */}
          <Image
            src="/leistungen/Hausmeister.png"
            alt={`Hausmeisterservice ${city.name}`}
            fill
            className="object-cover opacity-20"
            priority
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <span>/</span>
                <li>
                  <Link href="/hausmeisterservice" className="hover:text-white">
                    Hausmeisterservice
                  </Link>
                </li>
                <span>/</span>
                <li className="text-white">{city.name}</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Distance Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green text-white rounded-full text-sm font-medium mb-6">
                  <MapPin className="w-4 h-4" />
                  {city.distanceFromHQ} km Entfernung
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {content.heroHeadline}
                  <br />
                  <span className="text-brand-green-light">{content.heroHighlight}</span>
                </h1>

                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  {content.heroSubheadline}
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-6 text-lg font-medium rounded-full"
                  >
                    <a href={`tel:${businessInfo.contact.phone}`}>
                      <Phone className="w-5 h-5 mr-2" />
                      Anrufen
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-medium rounded-full border border-white/30"
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

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4">
                  {content.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-white/50">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Embed */}
              <div className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Karte ${city.name}`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Route Info Bar */}
        <section className="py-6 bg-brand-green">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Von Bensheim nach {city.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>~30-45 Min Anfahrt</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Dediziertes Team</span>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  {content.introTitle}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {content.introText}
                </p>
                <div className="space-y-4">
                  {content.localBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/hausmeister-hintergrund.png"
                  alt={`Hausmeisterservice ${city.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-section-gray">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Unsere Leistungen in {city.name}
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Flächendeckend in allen {city.districts.length} Stadtteilen
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.services.map((serviceItem, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4">
                    <serviceItem.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {serviceItem.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{serviceItem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Districts - All 13 */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Alle {city.districts.length} Wormser Stadtteile
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Flächendeckende Betreuung in der gesamten Nibelungenstadt
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {city.districts.map((district) => (
                <div
                  key={district}
                  className="py-3 px-4 bg-section-gray rounded-lg text-center text-gray-700 hover:bg-brand-green hover:text-white transition-colors"
                >
                  {district}
                </div>
              ))}
            </div>
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
              <blockquote className="text-2xl text-white font-medium mb-6 leading-relaxed">
                &ldquo;{content.testimonial.quote}&rdquo;
              </blockquote>
              <div className="text-gray-400">
                <div className="font-semibold text-white">{content.testimonial.author}</div>
                <div>{content.testimonial.location}</div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
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
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-brand-green hover:text-white transition-all text-sm"
                >
                  <span>{otherCity.name}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
