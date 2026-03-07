import Image from "next/image";
import { Phone, MessageCircle, Mail, CheckCircle, Clock, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/lib/seo-config";

const trustIndicators = [
  {
    icon: CheckCircle,
    text: "Kostenlose Erstberatung",
  },
  {
    icon: Banknote,
    text: "Festpreise ohne versteckte Kosten",
  },
  {
    icon: Clock,
    text: "Schnelle Reaktionszeiten",
  },
];

export function LeistungenCTA() {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/banner-01-1.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Bereit für professionelle Betreuung?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Kontaktieren Sie uns noch heute für eine kostenlose Beratung.
          Wir erstellen Ihnen ein individuelles Angebot – schnell und unverbindlich.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
          {trustIndicators.map((indicator) => (
            <div
              key={indicator.text}
              className="flex items-center gap-2 text-white/90"
            >
              <indicator.icon className="w-5 h-5 text-green-400" />
              <span className="text-sm md:text-base font-medium">{indicator.text}</span>
            </div>
          ))}
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-brand-green hover:bg-brand-green-dark text-white rounded-full px-8 shadow-lg shadow-brand-green/30"
          >
            <a href={`tel:${businessInfo.contact.phone}`}>
              <Phone className="w-5 h-5 mr-2" />
              Jetzt anrufen
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
          >
            <a
              href={`https://wa.me/${businessInfo.contact.whatsapp.replace(/\s+/g, "").replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-8"
          >
            <a href={`mailto:${businessInfo.contact.email}`}>
              <Mail className="w-5 h-5 mr-2" />
              E-Mail
            </a>
          </Button>
        </div>

        {/* Opening Hours */}
        <p className="mt-8 text-gray-300 text-sm">
          {businessInfo.openingHours.weekdays} | {businessInfo.openingHours.phone}
        </p>
      </div>
    </section>
  );
}
