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
  Heart,
  CheckCircle,
  Star,
} from "lucide-react";

interface LayoutProps {
  citySlug: string;
}

// Einhausen: "Ländliche Exzellenz" - Personal, warm design with nature focus
export default function EinhausenLayout({ citySlug }: LayoutProps) {
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
        {/* Hero Section - Warm, Personal Feel */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-b from-green-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

            <div className="max-w-3xl">
              {/* Personal Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Persönlich & Nah
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {content.heroHeadline}{" "}
                <span className="text-brand-green">{content.heroHighlight}</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {content.heroSubheadline}
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-6 text-lg font-medium rounded-full"
                >
                  <a href={`tel:${businessInfo.contact.phone}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Persönlich erreichen
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-full"
                >
                  <Link href="#leistungen">
                    Mehr erfahren
                  </Link>
                </Button>
              </div>

              {/* Personal Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {content.stats.map((stat, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <div className="text-3xl font-bold text-brand-green">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Personal Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 lg:h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="/Hausmeisterservice.png"
                  alt={`Hausmeisterservice ${city.name}`}
                  fill
                  className="object-cover"
                />
              </div>
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
                      <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Card Grid */}
        <section id="leistungen" className="py-20 bg-section-gray">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Was wir für Sie tun
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Persönlicher Service mit Handschlag-Qualität
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.services.map((serviceItem, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                    <serviceItem.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {serviceItem.title}
                  </h3>
                  <p className="text-gray-600">{serviceItem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial - Warm Style */}
        {content.testimonial && (
          <section className="py-20 bg-green-50">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(content.testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-900 font-medium mb-6 leading-relaxed">
                &ldquo;{content.testimonial.quote}&rdquo;
              </blockquote>
              <div className="text-gray-600">
                <div className="font-semibold text-gray-900">{content.testimonial.author}</div>
                <div>{content.testimonial.location}</div>
              </div>
            </div>
          </section>
        )}

        {/* Districts */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Wir betreuen ganz {city.name}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {city.districts.map((district) => (
                <span
                  key={district}
                  className="px-4 py-2 bg-gray-100 rounded-full text-gray-700"
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
              Ihre Fragen - unsere Antworten
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
              Auch in Ihrer Nähe
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
        <section className="py-24 bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {content.ctaTitle}
            </h2>
            <p className="text-xl text-gray-400 mb-10">{content.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-green hover:bg-brand-green-dark text-white px-10 py-6 text-lg font-medium rounded-full"
              >
                <a href={`tel:${businessInfo.contact.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {businessInfo.contact.phoneDisplay}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-6 text-lg font-medium rounded-full"
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
