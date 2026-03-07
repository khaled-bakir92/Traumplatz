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
  Shield,
  CheckCircle,
  Star,
} from "lucide-react";

interface LayoutProps {
  citySlug: string;
}

// Zwingenberg: "Älteste Stadt" - Timeline design with historical milestones
export default function ZwingenbergLayout({ citySlug }: LayoutProps) {
  const content = getCityContent(citySlug)!;
  const city = getCityBySlug(citySlug)!;
  const service = getServiceBySlug("hausmeisterservice")!;
  const otherCities = cities.filter((c) => c.slug !== citySlug).slice(0, 6);

  const processSteps = [
    { step: "01", title: "Kontakt", desc: "Sie rufen uns an oder schreiben" },
    { step: "02", title: "Besichtigung", desc: "Wir besichtigen Ihr Objekt" },
    { step: "03", title: "Angebot", desc: "Transparentes, faires Angebot" },
    { step: "04", title: "Start", desc: "Regelmäßige, verlässliche Betreuung" },
  ];

  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Hero Section - History Inspired */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <Image
            src="/hausmeister-hintergrund.png"
            alt={`Hausmeisterservice ${city.name}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-white/60">
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
                <li className="text-white font-medium">{city.name}</li>
              </ol>
            </nav>

            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green text-white rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Beständig & Zuverlässig
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {content.heroHeadline}{" "}
                <span className="text-brand-green-light">{content.heroHighlight}</span>
              </h1>

              <p className="text-xl text-white/80 mb-8 leading-relaxed">
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
                    Anrufen
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-medium rounded-full"
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

              {/* Stats inline */}
              <div className="flex flex-wrap gap-8">
                {content.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Process Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                So einfach geht&apos;s
              </h2>
              <p className="text-gray-600">
                In vier Schritten zu Ihrem zuverlässigen Hausmeisterservice
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-brand-green/20" />

              <div className="grid md:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative text-center">
                    <div className="relative z-10 w-24 h-24 mx-auto bg-brand-green rounded-full flex items-center justify-center mb-6 shadow-lg shadow-brand-green/20">
                      <span className="text-3xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Intro + Benefits */}
        <section className="py-20 bg-section-gray">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  {content.introTitle}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {content.introText}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {content.localBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Hausmeisterservice.png"
                  alt={`Hausmeisterservice ${city.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services - Timeline Style */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Unsere Leistungen
            </h2>
            <div className="space-y-6">
              {content.services.map((serviceItem, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 p-6 bg-section-gray rounded-2xl hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <serviceItem.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {serviceItem.title}
                    </h3>
                    <p className="text-gray-600">{serviceItem.description}</p>
                  </div>
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
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Aktiv in {city.name} und Umgebung
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {city.districts.map((district) => (
                <span
                  key={district}
                  className="px-5 py-2 bg-section-gray rounded-full text-gray-700 font-medium"
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
              Fragen & Antworten
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
              Weitere Städte
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
