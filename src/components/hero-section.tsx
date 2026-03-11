import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28">
      {/* Background Image — priority + sizes für optimales LCP */}
      <Image
        src="/landingpage.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Ihre Immobilie -
          <br />
          Unser Handwerk
        </h1>

        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Von der Gartenpflege über Glas- und Gebäudereinigung bis zum Hausmeisterservice und Winterdienst – wir kümmern uns um Ihre Außenanlagen und Gebäude mit Leidenschaft und Präzision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-base font-medium rounded-full"
          >
            <Link href="/kontakt">Jetzt anfragen</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-base font-medium rounded-full bg-transparent"
          >
            <Link href="#services">Unsere Leistungen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
