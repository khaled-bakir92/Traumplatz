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
import { getServiceBySlug } from "@/lib/seo-config";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  Leaf,
  CheckCircle,
  Star,
} from "lucide-react";

interface LayoutProps {
  citySlug: string;
}

// Pfungstadt: "Natur trifft Stadt" - Eco-conscious, green theme
export default function PfungstadtLayout({ citySlug }: LayoutProps) {
  const content = getCityContent(citySlug)!;
  const city = getCityBySlug(citySlug)!;
  const service = getServiceBySlug("hausmeisterservice")!;
  const otherCities = cities.filter((c) => c.slug !== citySlug).slice(0, 6);

  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Hero Section - Nature Inspired */}
        <section className="relative min-h-[90vh] bg-gradient-to-b from-green-50 to-white overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            {/* Breadcrumb */}
            <nav className="mb-8">
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

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Eco Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-6">
                  <Leaf className="w-4 h-4" />
                  Nachhaltig & Umweltbewusst
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {content.heroHeadline}
                  <br />
                  <span className="text-brand-green">{content.heroHighlight}</span>
                </h1>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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
                      Kontakt
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-6 text-lg font-medium rounded-full"
                  >
                    <Link href="#services">
                      Leistungen
                    </Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-8">
                  {content.stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-bold text-brand-green">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative h-80 lg:h-[450px] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/hausmeister-hintergrund.png"
                    alt={`Nachhaltiger Hausmeisterservice ${city.name}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating eco card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">100% Öko</div>
                      <div className="text-sm text-gray-500">Produkte</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-brand-green/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.localBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {content.introTitle}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {content.introText}
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-green-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Nachhaltige Leistungen
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.services.map((serviceItem, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border border-green-100"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
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

        {/* Image Break */}
        <section className="relative h-[40vh]">
          <Image
            src="/leistungen/Hausmeister.png"
            alt={`Hausmeisterservice ${city.name}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-green/70" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-2xl px-4">
              <h2 className="text-3xl font-bold text-white mb-4">
                Umweltbewusst aus Überzeugung
              </h2>
              <p className="text-white/90">
                Nachhaltigkeit ist kein Trend, sondern unsere Verantwortung.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {content.testimonial && (
          <section className="py-20 bg-white">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="bg-green-50 rounded-3xl p-8 sm:p-12">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(content.testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-900 font-medium mb-6 text-center leading-relaxed">
                  &ldquo;{content.testimonial.quote}&rdquo;
                </blockquote>
                <div className="text-center text-gray-600">
                  <div className="font-semibold text-gray-900">{content.testimonial.author}</div>
                  <div>{content.testimonial.location}</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Districts */}
        <section className="py-16 bg-green-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Aktiv in {city.name} und Umgebung
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {city.districts.map((district) => (
                <span
                  key={district}
                  className="px-5 py-2 bg-white rounded-full text-gray-700 shadow-sm"
                >
                  {district}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Fragen & Antworten
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {content.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-green-50 border-none rounded-xl px-6 overflow-hidden"
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
        <section className="py-16 bg-green-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Weitere Standorte
            </h2>
            <div className="flex flex-wrap gap-3">
              {otherCities.map((otherCity) => (
                <Link
                  key={otherCity.slug}
                  href={`/hausmeisterservice/${otherCity.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-brand-green hover:text-white transition-all text-sm shadow-sm"
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
