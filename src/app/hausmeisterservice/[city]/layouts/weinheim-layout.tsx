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
  Award,
  CheckCircle,
  Star,
} from "lucide-react";

interface LayoutProps {
  citySlug: string;
}

// Weinheim: "Zwei-Burgen-Stadt" - Premium, elegant aesthetic
export default function WeinheimLayout({ citySlug }: LayoutProps) {
  const content = getCityContent(citySlug)!;
  const city = getCityBySlug(citySlug)!;
  const service = getServiceBySlug("hausmeisterservice")!;
  const otherCities = cities.filter((c) => c.slug !== citySlug).slice(0, 6);

  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Hero Section - Premium Elegant */}
        <section className="relative min-h-screen">
          <Image
            src="/Hausmeisterservice.png"
            alt={`Premium Hausmeisterservice ${city.name}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center">
            <div className="max-w-2xl">
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

              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-green to-brand-green-dark text-white rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Hausmeisterservice Weinheim
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {content.heroHeadline}
                <br />
                <span className="text-brand-green-light">{content.heroHighlight}</span>
              </h1>

              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                {content.heroSubheadline}
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-full"
                >
                  <a href={`tel:${businessInfo.contact.phone}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Persönliche Beratung
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-transparent border-2 border-white/50 text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-medium rounded-full"
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
              <div className="flex gap-12">
                {content.stats.slice(0, 3).map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-brand-green-light">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section - Elegant */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {content.introTitle}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {content.introText}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.localBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services - Elegant Cards */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              Unsere Hausmeisterleistungen in Weinheim
            </h2>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Zuverlässige Gebäudebetreuung für Wohnanlagen und Eigenheime in der Zwei-Burgen-Stadt
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.services.map((serviceItem, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-green to-brand-green-dark rounded-xl flex items-center justify-center mb-6">
                    <serviceItem.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {serviceItem.title}
                  </h3>
                  <p className="text-gray-600">{serviceItem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial - Premium Style */}
        {content.testimonial && (
          <section className="py-24 bg-gray-900">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(content.testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl sm:text-3xl text-white font-light mb-8 leading-relaxed italic">
                &ldquo;{content.testimonial.quote}&rdquo;
              </blockquote>
              <div className="text-gray-400">
                <div className="font-semibold text-white text-lg">{content.testimonial.author}</div>
                <div>{content.testimonial.location}</div>
              </div>
            </div>
          </section>
        )}

        {/* Districts */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Hausmeisterservice in allen Weinheimer Ortsteilen
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {city.districts.map((district) => (
                <span
                  key={district}
                  className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium hover:bg-brand-green hover:text-white transition-colors"
                >
                  {district}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Häufige Fragen zum Hausmeisterservice Weinheim
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {content.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-white border border-gray-200 rounded-xl px-6 overflow-hidden shadow-sm"
                >
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5">
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
        <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {content.ctaTitle}
            </h2>
            <p className="text-xl text-gray-400 mb-10">{content.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 text-lg font-medium rounded-full"
              >
                <a href={`tel:${businessInfo.contact.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {businessInfo.contact.phoneDisplay}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-brand-green hover:bg-brand-green-dark text-white px-10 py-6 text-lg font-medium rounded-full"
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
