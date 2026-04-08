import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/lib/seo-config";

export function LeistungenHero() {
  return (
    <section className="relative min-h-screen flex items-center px-4">
      {/* Background Image */}
      <Image
        src="/banner-01-1.jpg"
        alt="Traumplatz Leistungen Hintergrund"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-brand-green transition-colors">
            Startseite
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Unsere Leistungen</span>
        </nav>

        <div className="max-w-4xl mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Unsere Leistungen
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Von der <span className="text-brand-green font-semibold">Gartenpflege</span> über{" "}
            <span className="text-brand-green font-semibold">Glas- und Gebäudereinigung</span> bis zum{" "}
            <span className="text-brand-green font-semibold">Hausmeisterservice</span> und{" "}
            <span className="text-brand-green font-semibold">Winterdienst</span> –
            professionelle Dienstleistungen aus einer Hand. Wir kümmern uns um Ihr Objekt,
            damit Sie sich auf das Wesentliche konzentrieren können.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-brand-green hover:bg-brand-green-dark text-white rounded-full px-8"
            >
              <a href={`tel:${businessInfo.contact.phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                {businessInfo.contact.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-brand-green text-brand-green hover:bg-green-50"
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
          </div>
        </div>

      </div>
    </section>
  );
}
