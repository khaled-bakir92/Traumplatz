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
  ArrowUpRight,
  CheckCircle,
  Star,
  MapPin,
} from "lucide-react";

interface LayoutProps {
  citySlug: string;
}

// Darmstadt: "Urban Professional" - Grid-based, sharp geometry, corporate feel with stadtteile showcase
export default function DarmstadtLayout({ citySlug }: LayoutProps) {
  const content = getCityContent(citySlug)!;
  const city = getCityBySlug(citySlug)!;
  const otherCities = cities.filter((c) => c.slug !== citySlug).slice(0, 6);

  return (
    <>
      <Header />
      <main className="pt-28">
        {/* Hero Section - Minimal with geometric accent */}
        <section className="relative bg-white overflow-hidden">
          {/* Large decorative text */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[20rem] font-black text-gray-50 leading-none select-none pointer-events-none hidden xl:block tracking-tighter">
            DA
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Accent line */}
            <div className="absolute left-0 top-28 bottom-0 w-1 bg-brand-green hidden lg:block" />

            <div className="py-20 lg:py-32 relative z-10">
              {/* Breadcrumb */}
              <nav className="mb-10">
                <ol className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 font-medium">
                  <li>
                    <Link href="/" className="hover:text-gray-900 transition-colors">
                      Home
                    </Link>
                  </li>
                  <span className="text-gray-300">&mdash;</span>
                  <li>
                    <Link href="/hausmeisterservice" className="hover:text-gray-900 transition-colors">
                      Hausmeisterservice
                    </Link>
                  </li>
                  <span className="text-gray-300">&mdash;</span>
                  <li className="text-gray-900">{city.name}</li>
                </ol>
              </nav>

              <div className="max-w-3xl">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-[1.05] tracking-tight">
                  {content.heroHeadline}{" "}
                  <span className="text-brand-green">{content.heroHighlight}</span>
                </h1>

                <p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-2xl">
                  {content.heroSubheadline}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gray-900 hover:bg-black text-white px-8 py-6 text-base font-semibold rounded-none"
                  >
                    <a href={`tel:${businessInfo.contact.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Jetzt anrufen
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-6 text-base font-semibold rounded-none"
                  >
                    <a
                      href={`https://wa.me/${businessInfo.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp schreiben
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar - Dark, bold numbers */}
        <section className="bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
              {content.stats.map((stat, index) => (
                <div key={index} className="py-8 lg:py-10 px-6 first:pl-0 last:pr-0">
                  <div className="text-3xl lg:text-4xl font-black text-white tracking-tight">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-brand-green">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              {content.localBenefits.map((benefit, index) => (
                <div key={index} className="py-5 px-5 first:pl-0 last:pr-0">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-white/80 mt-0.5 shrink-0" />
                    <span className="text-sm text-white font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stadtteile Showcase - Unique to Darmstadt */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3 block">9 Stadtteile</span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                  Flächendeckend in ganz Darmstadt
                </h2>
              </div>
              <p className="text-gray-500 max-w-md lg:text-right">
                Von der Innenstadt bis an den Stadtrand - unser Team ist in jedem Darmstädter Stadtteil für Sie im Einsatz.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {city.districts.map((district, index) => (
                <div
                  key={district}
                  className={`group relative overflow-hidden rounded-none p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
                    index === 0
                      ? "bg-gray-900 text-white"
                      : index === 1
                        ? "bg-brand-green text-white"
                        : "bg-gray-50 text-gray-900 hover:bg-gray-900 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">{district}</span>
                    <ArrowUpRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                      index < 2 ? "text-white/60" : ""
                    }`} />
                  </div>
                  <div className={`text-xs mt-2 ${
                    index < 2 ? "text-white/50" : "text-gray-400 group-hover:text-white/50"
                  }`}>
                    Hausmeisterservice
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro Section - Text heavy, editorial */}
        <section className="py-24 bg-section-gray">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green mb-4 block">Warum Traumplatz</span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
                  {content.introTitle}
                </h2>
                <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                  <p>{content.introText}</p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="sticky top-32 space-y-4">
                  {content.uniqueSellingPoints.map((point, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 border-l-4 border-brand-green"
                    >
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Vorteil {String(index + 1).padStart(2, "0")}</div>
                      <div className="text-lg font-bold text-gray-900">{point}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Alternating layout */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3 block">Leistungsportfolio</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Hausmeisterservice-Leistungen in Darmstadt
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              {content.services.map((serviceItem, index) => (
                <div
                  key={index}
                  className={`p-8 transition-all group ${
                    index % 2 === 0
                      ? "bg-gray-50 hover:bg-gray-900 hover:text-white"
                      : "bg-white border border-gray-100 hover:bg-brand-green hover:text-white hover:border-brand-green"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div className={`w-12 h-12 flex items-center justify-center shrink-0 ${
                      index % 2 === 0
                        ? "bg-gray-200 group-hover:bg-white/10"
                        : "bg-brand-green/10 group-hover:bg-white/20"
                    } transition-colors`}>
                      <serviceItem.icon className={`w-6 h-6 ${
                        index % 2 === 0
                          ? "text-gray-900 group-hover:text-white"
                          : "text-brand-green group-hover:text-white"
                      } transition-colors`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{serviceItem.title}</h3>
                      <p className={`text-sm leading-relaxed ${
                        index % 2 === 0
                          ? "text-gray-600 group-hover:text-white/70"
                          : "text-gray-600 group-hover:text-white/80"
                      } transition-colors`}>
                        {serviceItem.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image + Quote Split */}
        <section className="relative">
          <div className="grid lg:grid-cols-2">
            {/* Image half */}
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/leistungen/Hausmeister.png"
                alt="Professioneller Hausmeisterservice Darmstadt"
                fill
                className="object-cover"
              />
            </div>
            {/* Quote half */}
            {content.testimonial && (
              <div className="bg-gray-900 p-10 lg:p-16 flex flex-col justify-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(content.testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-xl lg:text-2xl text-white font-medium leading-relaxed mb-8">
                  &ldquo;{content.testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="text-white font-semibold">{content.testimonial.author}</div>
                  <div className="text-gray-500 text-sm mt-1">{content.testimonial.location}</div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section - Three column */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3 block">FAQ</span>
                <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
                  Häufige Fragen zum Hausmeisterservice in Darmstadt
                </h2>
                <p className="text-gray-500 mb-8">
                  Transparente Antworten auf die wichtigsten Fragen.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${businessInfo.contact.phone}`}
                    className="flex items-center gap-2 text-gray-900 font-semibold hover:text-brand-green transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {businessInfo.contact.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${businessInfo.contact.email}`}
                    className="flex items-center gap-2 text-gray-500 hover:text-brand-green transition-colors text-sm"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {businessInfo.contact.email}
                  </a>
                </div>
              </div>
              <div className="lg:col-span-2">
                <Accordion type="single" collapsible className="space-y-2">
                  {content.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="border border-gray-100 rounded-none px-6 overflow-hidden bg-gray-50"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-5 text-[15px]">
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
        <section className="py-14 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
              <h2 className="text-lg font-bold text-gray-900">
                Weitere Standorte in der Region
              </h2>
              <Link
                href="/hausmeisterservice"
                className="text-sm text-brand-green font-semibold hover:underline inline-flex items-center gap-1"
              >
                Alle Standorte
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {otherCities.map((otherCity) => (
                <Link
                  key={otherCity.slug}
                  href={`/hausmeisterservice/${otherCity.slug}`}
                  className="px-4 py-2.5 bg-white text-sm text-gray-600 hover:bg-gray-900 hover:text-white border border-gray-200 hover:border-gray-900 transition-all font-medium"
                >
                  {otherCity.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Split layout */}
        <section className="relative overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left: Dark */}
            <div className="bg-gray-950 py-20 lg:py-28 px-8 lg:px-16 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                {content.ctaTitle}
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
                {content.ctaSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-6 text-base font-semibold rounded-none"
                >
                  <a href={`tel:${businessInfo.contact.phone}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    {businessInfo.contact.phoneDisplay}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-white/10 hover:bg-white/15 text-white px-8 py-6 text-base font-semibold rounded-none border border-white/10"
                >
                  <a
                    href={`mailto:${businessInfo.contact.email}?subject=${encodeURIComponent("Anfrage: Hausmeisterservice Darmstadt")}`}
                  >
                    E-Mail senden
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
            {/* Right: Green with location info */}
            <div className="bg-brand-green py-20 lg:py-28 px-8 lg:px-16 flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-widest font-bold mb-2">Unser Standort</div>
                  <div className="text-white text-lg font-medium">
                    {businessInfo.address.street}<br />
                    {businessInfo.address.postalCode} {businessInfo.address.city}
                  </div>
                </div>
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-widest font-bold mb-2">Entfernung nach Darmstadt</div>
                  <div className="text-white text-lg font-medium">
                    ca. 20 km - eigenes Team vor Ort
                  </div>
                </div>
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-widest font-bold mb-2">Erreichbarkeit</div>
                  <div className="text-white text-lg font-medium">
                    {businessInfo.openingHours.phone}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm pt-4 border-t border-white/20">
                  <MapPin className="w-4 h-4" />
                  Antwort innerhalb von 24 Stunden
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
