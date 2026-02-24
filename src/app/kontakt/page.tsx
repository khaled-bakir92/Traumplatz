"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { businessInfo } from "@/lib/seo-config";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  ChevronRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";

export default function KontaktPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    telefon: "",
    nachricht: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual form handling
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", telefon: "", nachricht: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Telefon",
      content: businessInfo.contact.phoneDisplay,
      subContent: businessInfo.contact.phone2Display,
      href: `tel:${businessInfo.contact.phone}`,
      color: "bg-emerald-500",
    },
    {
      icon: Mail,
      title: "E-Mail",
      content: businessInfo.contact.email,
      href: `mailto:${businessInfo.contact.email}`,
      color: "bg-blue-500",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: businessInfo.address.street,
      subContent: `${businessInfo.address.postalCode} ${businessInfo.address.city}`,
      href: `https://maps.google.com/?q=${encodeURIComponent(
        `${businessInfo.address.street}, ${businessInfo.address.postalCode} ${businessInfo.address.city}`
      )}`,
      color: "bg-orange-500",
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      content: "Mo - Sa: 7:00 - 20:00",
      subContent: "24/7 telefonisch erreichbar",
      color: "bg-purple-500",
    },
  ];

  return (
    <>
      <Header />

      <main className="pt-28 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12 md:py-24 px-4 overflow-hidden">
          {/* Decorative elements - hidden on mobile to prevent overflow */}
          <div className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl" />
          <div className="hidden md:block absolute bottom-10 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />

          <div className="relative max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
              <Link href="/" className="hover:text-brand-green transition-colors">
                Startseite
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">Kontakt</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MessageCircle className="w-4 h-4" />
                Wir freuen uns auf Ihre Nachricht
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Kontaktieren Sie uns
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Haben Sie Fragen oder wünschen ein unverbindliches Angebot?
                <br className="hidden md:block" />
                Wir sind für Sie da – schnell, persönlich und unkompliziert.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-8 md:py-12 px-4 bg-white -mt-4 md:-mt-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {contactCards.map((card) => (
                <div
                  key={card.title}
                  className="group relative bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-green/20 hover:-translate-y-1"
                >
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 ${card.color} rounded-lg md:rounded-xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <card.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{card.title}</h3>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.title === "Adresse" ? "_blank" : undefined}
                      rel={card.title === "Adresse" ? "noopener noreferrer" : undefined}
                      className="text-gray-600 hover:text-brand-green transition-colors"
                    >
                      <p className="text-xs md:text-sm break-all md:break-normal">{card.content}</p>
                      {card.subContent && (
                        <p className="text-xs md:text-sm text-gray-500">{card.subContent}</p>
                      )}
                    </a>
                  ) : (
                    <>
                      <p className="text-xs md:text-sm text-gray-600">{card.content}</p>
                      {card.subContent && (
                        <p className="text-xs md:text-sm text-brand-green font-medium mt-1">
                          {card.subContent}
                        </p>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form & Map Section */}
        <section className="py-16 md:py-24 px-4 bg-section-gray">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Schreiben Sie uns
                  </h2>
                  <p className="text-gray-600">
                    Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                      <CheckCircle2 className="w-10 h-10 text-brand-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Vielen Dank!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="rounded-full border-brand-green text-brand-green hover:bg-green-50"
                    >
                      Weitere Nachricht senden
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Ihr vollständiger Name"
                          value={formState.name}
                          onChange={handleChange}
                          className="h-12 rounded-xl border-gray-200 focus:border-brand-green focus:ring-brand-green/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">
                          E-Mail *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="ihre@email.de"
                          value={formState.email}
                          onChange={handleChange}
                          className="h-12 rounded-xl border-gray-200 focus:border-brand-green focus:ring-brand-green/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefon" className="text-gray-700 font-medium">
                        Telefon
                      </Label>
                      <Input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        placeholder="Ihre Telefonnummer (optional)"
                        value={formState.telefon}
                        onChange={handleChange}
                        className="h-12 rounded-xl border-gray-200 focus:border-brand-green focus:ring-brand-green/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nachricht" className="text-gray-700 font-medium">
                        Nachricht *
                      </Label>
                      <Textarea
                        id="nachricht"
                        name="nachricht"
                        required
                        placeholder="Wie können wir Ihnen helfen? Beschreiben Sie Ihr Anliegen..."
                        rows={5}
                        value={formState.nachricht}
                        onChange={handleChange}
                        className="rounded-xl border-gray-200 focus:border-brand-green focus:ring-brand-green/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full h-14 bg-brand-green hover:bg-brand-green-dark text-white rounded-xl text-lg font-semibold shadow-lg shadow-brand-green/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand-green/30"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Nachricht senden
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      Mit dem Absenden stimmen Sie unserer{" "}
                      <Link href="/datenschutz" className="text-brand-green hover:underline">
                        Datenschutzerklärung
                      </Link>{" "}
                      zu.
                    </p>
                  </form>
                )}
              </div>

              {/* Map & Info */}
              <div className="space-y-6">
                {/* Map */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                  <div className="aspect-[4/3] w-full">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=8.5687%2C49.6603%2C8.6687%2C49.7003&layer=mapnik&marker=49.6803%2C8.6187"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Traumplatz Standort in Bensheim"
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-r from-brand-green to-emerald-600 text-white">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Unser Standort</h3>
                        <p className="text-green-100">
                          {businessInfo.address.street}
                          <br />
                          {businessInfo.address.postalCode} {businessInfo.address.city}
                        </p>
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(
                            `${businessInfo.address.street}, ${businessInfo.address.postalCode} ${businessInfo.address.city}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-3 text-white hover:text-green-200 transition-colors font-medium"
                        >
                          Route planen
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                      <MessageCircle className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Schnelle Antwort gewünscht?</h3>
                      <p className="text-green-100">Schreiben Sie uns auf WhatsApp</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="w-full h-14 bg-white text-green-600 hover:bg-green-50 rounded-xl font-semibold text-lg shadow-lg"
                  >
                    <a
                      href={`https://wa.me/${businessInfo.contact.whatsapp.replace(/\s+/g, "").replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp öffnen
                    </a>
                  </Button>
                </div>

                {/* Quick Call */}
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                    Lieber direkt sprechen?
                  </h3>
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                    Rufen Sie uns an – wir beraten Sie gerne persönlich und unverbindlich.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button
                      asChild
                      size="lg"
                      className="w-full h-12 bg-brand-green hover:bg-brand-green-dark text-white rounded-xl"
                    >
                      <a href={`tel:${businessInfo.contact.phone}`}>
                        <Phone className="w-5 h-5" />
                        {businessInfo.contact.phoneDisplay}
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="w-full h-12 border-gray-200 rounded-xl"
                    >
                      <a href={`tel:${businessInfo.contact.phone2}`}>
                        <Phone className="w-5 h-5" />
                        {businessInfo.contact.phone2Display}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Warum Traumplatz?
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Seit 2020 vertrauen uns über 100 zufriedene Kunden in der Region Bergstraße
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "24/7", label: "Erreichbar" },
                { value: "100+", label: "Zufriedene Kunden" },
                { value: "< 24h", label: "Antwortzeit" },
                { value: "100%", label: "Fachkräfte" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-brand-green mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
