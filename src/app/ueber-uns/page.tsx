import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  AboutPageJsonLd,
  BreadcrumbJsonLd,
} from "@/components/json-ld";
import { businessInfo } from "@/lib/seo-config";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/animated-counter";
import {
  Phone,
  MessageCircle,
  Mail,
  Shield,
  Leaf,
  MapPin,
  Scale,
  Clock,
  Headphones,
  Users,
  Award,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns | Traumplatz – Ihr regionaler Partner an der Bergstraße",
  description:
    "Traumplatz – Seit 2020 Ihr zuverlässiger Partner für Gartenpflege, Hausmeisterservice, Gebäudereinigung und Winterdienst in Bensheim und der Region. 11-20 erfahrene Fachkräfte. Kostenlose Erstberatung.",
  keywords: [
    "Traumplatz",
    "Über uns",
    "Gartenpflege Bensheim",
    "Hausmeisterservice Bergstraße",
    "Gebäudereinigung Südhessen",
    "Winterdienst regional",
    "Fachkräfte",
    "Zuverlässig",
  ],
  alternates: {
    canonical: "/ueber-uns",
  },
  openGraph: {
    title: "Über uns | Traumplatz – Ihr regionaler Partner",
    description:
      "Erfahren Sie mehr über Traumplatz – Ihr Team für Gartenpflege, Hausmeisterservice, Gebäudereinigung und Winterdienst an der Bergstraße.",
    url: "/ueber-uns",
    type: "website",
  },
};

const values = [
  {
    icon: Shield,
    title: "Zuverlässigkeit",
    description: "Was wir versprechen, halten wir. Pünktlich, gründlich, ohne Ausreden.",
  },
  {
    icon: Leaf,
    title: "Nachhaltigkeit",
    description: "Umweltbewusste Methoden und Materialien – für eine grünere Zukunft.",
  },
  {
    icon: MapPin,
    title: "Regionalität",
    description: "Verwurzelt an der Bergstraße, immer in Ihrer Nähe.",
  },
  {
    icon: Scale,
    title: "Fairness",
    description: "Festpreise ohne Kleingedrucktes. Keine versteckten Kosten.",
  },
];

const usps = [
  {
    icon: MessageCircle,
    title: "Kostenlose Erstberatung",
    description: "Wir kommen zu Ihnen – unverbindlich und ohne Verpflichtungen.",
  },
  {
    icon: Scale,
    title: "Festpreise",
    description: "Keine versteckten Kosten, keine Überraschungen auf der Rechnung.",
  },
  {
    icon: Clock,
    title: "Schnelle Reaktionszeit",
    description: "Kurzfristige Termine möglich – oft noch am selben Tag.",
  },
  {
    icon: Headphones,
    title: "24/7 Erreichbar",
    description: "Rund um die Uhr für Sie da – auch an Wochenenden und Feiertagen.",
  },
];

const teamStats = [
  {
    icon: Users,
    value: "11-20",
    label: "Mitarbeiter",
  },
  {
    icon: Award,
    value: "Jahre",
    label: "Praktische Erfahrung",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <AboutPageJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: "/" },
          { name: "Über uns" },
        ]}
      />

      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 px-4">
          {/* Desktop Hintergrundbild */}
          <Image
            src="/uberuns-desktop.png"
            alt=""
            fill
            className="object-cover object-center hidden md:block"
            priority
          />
          {/* Mobile Hintergrundbild */}
          <Image
            src="/uberuns-handy.png"
            alt=""
            fill
            className="object-cover object-center md:hidden"
            priority
          />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
              <Link href="/" className="hover:text-brand-green transition-colors">
                Startseite
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">Über uns</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
                Traumplatz<br />
                <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl">Ihr Partner an der Bergstraße</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Traumplatz wurde nicht am Schreibtisch geplant – sondern auf der Baustelle geboren.
                Nach Jahren in der Branche wissen wir: <span className="text-brand-green font-semibold">Zuverlässigkeit ist keine Eigenschaft. Es ist eine Gewohnheit.</span>
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
                <a
                  href={`https://wa.me/${businessInfo.contact.whatsapp.replace(/\s+/g, "").replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-0 hover:gap-2 hover:scale-105 transition-all duration-300"
                >
                  <Image src="/whatsapp.svg" alt="WhatsApp" width={48} height={48} className="flex-shrink-0 [filter:invert(35%)_sepia(60%)_saturate(400%)_hue-rotate(90deg)_brightness(90%)]" />
                  <span className="max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300 text-sm font-semibold text-brand-green">
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Geschichte Section */}
        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Aus Erfahrung gewachsen
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Bevor Traumplatz gegründet wurde, haben unsere Experten jahrelang in der Branche gearbeitet –
                    bei großen Unternehmen, in kleinen Betrieben, immer nah am Kunden.
                  </p>
                  <p>
                    Was wir dabei gelernt haben? Dass guter Service kein Zufall ist.
                    Er entsteht durch <strong className="text-gray-900">Erfahrung, Sorgfalt und echtes Interesse</strong> an der Arbeit.
                  </p>
                  <p>
                    Seit 2020 bündeln wir diese Erfahrung unter einem Dach – mit Sitz in Bensheim,
                    direkt im Herzen der Bergstraße. Hier kennen wir nicht nur die Straßen,
                    sondern auch die Menschen.
                  </p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/team1.jpg"
                  alt="Traumplatz Team - Erfahrene Fachkräfte für Gartenpflege"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">
                    Erfahrung trifft Leidenschaft
                  </p>
                  <p className="text-green-200 text-sm">
                    Unser Team in Bensheim an der Bergstraße
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#7CB9C9] mb-2">
                  <AnimatedCounter end={1000} suffix="+" duration={2500} />
                </div>
                <div className="text-gray-600 text-sm md:text-base font-medium">
                  Pflanzen
                </div>
              </div>
              <div className="text-center border-x border-brand-green/30">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#7CB9C9] mb-2">
                  <AnimatedCounter end={100} suffix="+" duration={2000} />
                </div>
                <div className="text-gray-600 text-sm md:text-base font-medium">
                  Kunden
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#7CB9C9] mb-2">
                  <AnimatedCounter end={60} suffix="+" duration={1500} />
                </div>
                <div className="text-gray-600 text-sm md:text-base font-medium">
                  Projekte
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Werte Section */}
        <section className="py-16 md:py-20 px-4 bg-section-gray">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Wofür wir stehen
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Vier Werte, die jeden Tag unsere Arbeit bestimmen
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-green-100 rounded-xl mb-3 sm:mb-4 mx-auto">
                    <value.icon className="w-5 h-5 sm:w-7 sm:h-7 text-brand-green" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Erfahrene Fachkräfte
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Keine Subunternehmer. Keine Leiharbeiter. Nur unser Team.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-8 mb-12">
              {teamStats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 sm:p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 w-[calc(50%-6px)] sm:w-auto sm:min-w-[200px]"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-brand-green rounded-full mb-3 sm:mb-4 mx-auto">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-4xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Jeder in unserem Team bringt <strong>ausgebildetes Fachwissen</strong> und
                <strong> jahrelange praktische Erfahrung</strong> mit.
                Das bedeutet für Sie: kompetente Beratung, saubere Arbeit und Ergebnisse,
                die sich sehen lassen können.
              </p>
            </div>
          </div>
        </section>

        {/* USPs Section */}
        <section className="py-16 md:py-20 px-4 bg-section-gray">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Was uns auszeichnet
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Gute Gründe, warum unsere Kunden uns vertrauen
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {usps.map((usp) => (
                <div
                  key={usp.title}
                  className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow border-t-4 border-brand-green text-center"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-green-100 rounded-xl mb-3 sm:mb-4 mx-auto">
                    <usp.icon className="w-5 h-5 sm:w-7 sm:h-7 text-brand-green" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {usp.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{usp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-20 px-4 overflow-hidden">
          <Image
            src="/banner-01-1.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lernen Sie uns kennen
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Rufen Sie uns an oder schreiben Sie uns – wir freuen uns darauf,
              Sie persönlich kennenzulernen und Ihr Anliegen zu besprechen.
            </p>
            <p className="text-brand-green font-medium mb-8">
              {businessInfo.openingHours.weekdays} | {businessInfo.openingHours.phone}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-green text-white hover:bg-brand-green-dark rounded-full px-8"
              >
                <a href={`tel:${businessInfo.contact.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt anrufen
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-brand-green text-brand-green hover:bg-brand-green/10"
              >
                <a href={`mailto:${businessInfo.contact.email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  E-Mail schreiben
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
