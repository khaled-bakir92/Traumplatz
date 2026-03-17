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
  Award,
  Star,
} from "lucide-react";

interface LayoutProps {
  citySlug: string;
}

// Seeheim-Jugenheim: "Villen-Viertel Luxus" - Elegant, minimalist, high-end
export default function SeeheimJugenheimLayout({ citySlug }: LayoutProps) {
  const content = getCityContent(citySlug)!;
  const city = getCityBySlug(citySlug)!;
  const otherCities = cities.filter((c) => c.slug !== citySlug).slice(0, 6);

  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Hero Section - Elegant Minimalist */}
        <section className="relative min-h-screen bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
              <div>
                {/* Breadcrumb */}
                <nav className="mb-8">
                  <ol className="flex items-center gap-2 text-sm text-gray-400">
                    <li>
                      <Link href="/" className="hover:text-gray-900">
                        Home
                      </Link>
                    </li>
                    <span>/</span>
                    <li>
                      <Link href="/hausmeisterservice" className="hover:text-gray-900">
                        Hausmeisterservice
                      </Link>
                    </li>
                    <span>/</span>
                    <li className="text-gray-900">{city.name}</li>
                  </ol>
                </nav>

                {/* Exclusive Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-gray-200 text-gray-600 rounded text-xs font-medium tracking-wider uppercase mb-8">
                  <Award className="w-3 h-3" />
                  Exklusiver Service
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
                  {content.heroHeadline}
                  <br />
                  <span className="font-bold">{content.heroHighlight}</span>
                </h1>

                <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">
                  {content.heroSubheadline}
                </p>

                <div className="flex flex-wrap gap-4 mb-16">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-base font-normal tracking-wide"
                  >
                    <a href={`tel:${businessInfo.contact.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Persönliche Beratung
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-gray-200 text-gray-600 hover:bg-gray-50 px-8 py-6 text-base font-normal tracking-wide"
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

                {/* Minimal Stats */}
                <div className="flex gap-12 pt-8 border-t border-gray-100">
                  {content.stats.slice(0, 3).map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-light text-gray-900">{stat.value}</div>
                      <div className="text-xs text-gray-400 tracking-wider uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[600px] lg:h-[700px]">
                <Image
                  src="/leistungen/Hausmeister.png"
                  alt={`Exklusiver Hausmeisterservice ${city.name}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro - Elegant */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              {content.introTitle}
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-12">
              {content.introText}
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {content.localBenefits.map((benefit, index) => (
                <div key={index} className="text-left p-4 bg-white border border-gray-100">
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services - Clean Grid */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light text-gray-900 mb-4 text-center">
              Unsere Leistungen
            </h2>
            <p className="text-gray-500 text-center mb-16">
              Maßgeschneiderter Service für exklusive Immobilien
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
              {content.services.map((serviceItem, index) => (
                <div
                  key={index}
                  className="bg-white p-8 hover:bg-gray-50 transition-colors"
                >
                  <serviceItem.icon className="w-8 h-8 text-gray-400 mb-6" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {serviceItem.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{serviceItem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial - Minimal */}
        {content.testimonial && (
          <section className="py-24 bg-gray-900">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(content.testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl font-light text-white mb-8 leading-relaxed">
                &ldquo;{content.testimonial.quote}&rdquo;
              </blockquote>
              <div className="text-gray-400">
                <div className="text-white">{content.testimonial.author}</div>
                <div className="text-sm">{content.testimonial.location}</div>
              </div>
            </div>
          </section>
        )}

        {/* Districts */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-light text-gray-900 mb-8 text-center">
              Unsere Einsatzgebiete
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {city.districts.map((district) => (
                <span
                  key={district}
                  className="px-4 py-2 border border-gray-200 text-gray-600 text-sm"
                >
                  {district}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-light text-gray-900 mb-12 text-center">
              Häufige Fragen
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {content.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-white border border-gray-100 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-normal text-gray-900 hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 pb-5">
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
            <h2 className="text-sm font-normal text-gray-400 tracking-wider uppercase mb-6">
              Weitere Standorte
            </h2>
            <div className="flex flex-wrap gap-3">
              {otherCities.map((otherCity) => (
                <Link
                  key={otherCity.slug}
                  href={`/hausmeisterservice/${otherCity.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all text-sm"
                >
                  <span>{otherCity.name}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gray-900">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-light text-white mb-6">
              {content.ctaTitle}
            </h2>
            <p className="text-gray-400 mb-10">{content.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 text-base font-normal"
              >
                <a href={`tel:${businessInfo.contact.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {businessInfo.contact.phoneDisplay}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-gray-900 px-10 py-6 text-base font-normal"
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
        </section>
      </main>
      <Footer />
    </>
  );
}
