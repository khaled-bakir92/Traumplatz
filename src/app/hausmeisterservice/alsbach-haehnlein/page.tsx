import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Key, MapPin, MessageCircle, Phone, Settings, Snowflake, Sparkles, TreeDeciduous, Wrench } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HausmeisterTimelineSteps } from "@/components/hausmeister-timeline-steps";
import { BreadcrumbJsonLd, FAQJsonLd, LocalServiceJsonLd } from "@/components/json-ld";
import { ServiceAreaMap } from "@/components/service-area-map";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { businessInfo, cities, getCityBySlug, getServiceBySlug } from "@/lib/seo-config";

function getPageData() {
  const service = getServiceBySlug("hausmeisterservice");
  const city = getCityBySlug("alsbach-haehnlein");
  if (!service || !city) { notFound(); }
  return { service, city };
}

const { service, city } = getPageData();

export const metadata: Metadata = {
  title: `${service.name} in ${city.name} | Professionelle Objektbetreuung vor Ort`,
  description: `Professioneller ${service.name} in ${city.name} (${city.postalCodes.join(", ")}). Zuverlässige Objektbetreuung, Reparaturen und Kontrollgänge in ${city.name} und ${city.districts.slice(0, 3).join(", ")}.`,
  keywords: [...service.keywords, city.name, ...city.districts, ...city.postalCodes],
  alternates: { canonical: `/${service.slug}/${city.slug}` },
  openGraph: {
    title: `${service.name} in ${city.name} | ${businessInfo.name}`,
    description: `Zuverlässiger ${service.name} in ${city.name}. Jetzt unverbindlich anfragen.`,
    url: `/${service.slug}/${city.slug}`,
    type: "website",
    images: [{ url: "/leistungen/Hausmeister.png", width: 1200, height: 630, alt: `${service.name} in ${city.name} - ${businessInfo.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${service.name} in ${city.name} | ${businessInfo.name}`,
    description: `Lokaler ${service.name} in ${city.name}: zuverlässig, schnell, vor Ort.`,
    images: ["/leistungen/Hausmeister.png"],
  },
};

const serviceItems = [
  { icon: Wrench, title: "Reparaturen", description: `Schnelle Behebung von Defekten in ${city.name}` },
  { icon: Sparkles, title: "Reinigung", description: "Treppenhäuser & Außenanlagen" },
  { icon: TreeDeciduous, title: "Grünpflege", description: "Rasenmähen & Heckenschnitt" },
  { icon: Snowflake, title: "Winterdienst", description: "Schneeräumung & Streudienst" },
  { icon: Key, title: "Schlüsselservice", description: "Verwaltung & Koordination" },
  { icon: Settings, title: "Technik", description: "Wartung & Instandhaltung" },
];

const processSteps = [
  { step: "01", title: "Kontaktaufnahme", description: `Sie rufen uns an oder schreiben uns. Wir erfassen Ihr Objekt in ${city.name} und Ihre Anforderungen.` },
  { step: "02", title: "Kostenlose Besichtigung", description: `Wir besichtigen Ihr Objekt in ${city.name} und erstellen ein maßgeschneidertes Angebot.` },
  { step: "03", title: "Vertragsabschluss", description: "Flexible Vertragsmodelle - monatlich kündbar oder mit Jahresvorteil." },
  { step: "04", title: "Regelmäßige Betreuung", description: "Ihr fester Objektbetreuer kümmert sich zuverlässig um Ihre Immobilie." },
];

const hausmeisterFaqs = [
  { question: `Welche Aufgaben übernehmen Sie als Hausmeisterservice in ${city.name}?`, answer: `In ${city.name} übernehmen wir Objektbetreuung, Kontrollgänge, Kleinreparaturen, Treppenreinigung und Winterdienst - alles aus einer Hand für Ihre Immobilie in ${city.districts.slice(0, 3).join(", ")} und dem gesamten Stadtgebiet.` },
  { question: `Wie schnell sind Sie bei Problemen in ${city.name} vor Ort?`, answer: `Da ${city.name} nur ${city.distanceFromHQ} km von unserem Standort entfernt liegt, können wir bei dringenden Meldungen zeitnah reagieren. Für jede Immobilie legen wir feste Reaktionszeiten fest.` },
  { question: `Bieten Sie feste Kontrollgänge für Mehrfamilienhäuser in ${city.name} an?`, answer: `Ja, wir erstellen für Objekte in ${city.name} verbindliche Kontrollpläne und dokumentieren alle Begehungen nachvollziehbar - für Eigentümer, Verwaltung und Mieter.` },
  { question: `Ist der Hausmeisterservice in ${city.name} auch für Kleinreparaturen geeignet?`, answer: `Ja, wir erledigen in ${city.name} viele Kleinreparaturen direkt. Bei größeren Gewerken steuern wir passende Fachbetriebe und begleiten die Ausführung.` },
  { question: `Welche Vertragsmodelle gibt es für Objekte in ${city.name}?`, answer: `Wir bieten flexible Verträge für Immobilien in ${city.name} an - monatlich kündbar oder mit Jahresvorteil. Das Leistungspaket stimmen wir individuell auf Ihr Objekt ab.` },
  { question: `Was kostet ein Hausmeisterservice in ${city.name}?`, answer: `Die Kosten hängen von Objektgröße und Leistungsumfang ab. Für Ihr Objekt in ${city.name} erhalten Sie nach einer kostenlosen Besichtigung ein transparentes Angebot.` },
];

export default function AlsbachHaehnleinHausmeisterPage() {
  return (
    <>
      <LocalServiceJsonLd service={service} city={city} />
      <BreadcrumbJsonLd items={[{ name: "Startseite", url: "/" }, { name: "Hausmeisterservice", url: "/hausmeisterservice" }, { name: city.name }]} />
      <FAQJsonLd questions={hausmeisterFaqs} />
      <Header />
      <main className="pt-28">
        <section className="h-[calc(100svh-7rem)] flex items-center relative overflow-hidden">
          <Image src="/hausmeister-hintergrund.png" alt={`Hausmeisterservice in ${city.name}`} fill className="object-cover" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.65) 100%)" }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
            <div className="max-w-4xl">
              <nav className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-gray-600">
                  <li><Link href="/" className="hover:text-brand-green">Home</Link></li>
                  <span>/</span>
                  <li><Link href="/hausmeisterservice" className="hover:text-brand-green">Hausmeisterservice</Link></li>
                  <span>/</span>
                  <li className="text-brand-green font-medium">{city.name}</li>
                </ol>
              </nav>
              <p className="text-xs sm:text-sm text-brand-green font-medium tracking-normal sm:tracking-wider uppercase mb-4 sm:mb-6">Professioneller Hausmeisterservice in {city.name}</p>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-[1.1]">
                Wir kümmern uns in {city.name}.<br /><span className="text-brand-green">Sie entspannen.</span>
              </h1>
              <p className="text-lg sm:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed">{city.description} Professionelle Objektbetreuung mit festem Ansprechpartner direkt vor Ort in {city.name}.</p>
              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-6">
                <Button asChild size="lg" className="w-full bg-gray-900 hover:bg-gray-800 text-white px-4 py-4 text-sm font-medium rounded-xl sm:w-auto sm:px-10 sm:py-7 sm:text-lg sm:rounded-full">
                  <a href={`tel:${businessInfo.contact.phone}`}><Phone className="w-5 h-5 mr-3" />Jetzt anrufen</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-4 py-4 text-sm font-medium rounded-xl bg-transparent sm:w-auto sm:px-10 sm:py-7 sm:text-lg sm:rounded-full">
                  <Link href="#services">Mehr erfahren<ArrowRight className="w-5 h-5 ml-2" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-section-gray">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Unsere Leistungen in {city.name}</h2>
          </div>
          <div className="pb-8 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 justify-items-center">
              {serviceItems.map((item, index) => (
                <div key={index} className="group w-full max-w-[14rem] bg-white rounded-2xl p-5 hover:bg-brand-green transition-all duration-500 shadow-sm hover:shadow-2xl cursor-pointer">
                  <item.icon className="w-8 h-8 text-brand-green group-hover:text-white mb-3 transition-colors" />
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-1.5 transition-colors">{item.title}</h3>
                  <p className="text-xs text-gray-500 group-hover:text-white/80 transition-colors">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative h-[70vh]">
          <Image src="/Hausmeister/IMG_7214.png" alt={`Professioneller Hausmeisterservice in ${city.name}`} fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-20">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-xl">
                <p className="text-white/80 text-lg mb-4">Seit 6+ Jahren</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Ihre Immobilie in {city.name} in besten Händen</h2>
                <p className="text-white/90 text-base sm:text-xl">Eigentümer und Verwaltungen in {city.name} setzen auf unseren zuverlässigen Hausmeisterservice.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">So einfach geht&apos;s in {city.name}</h2>
              <p className="text-xl text-gray-500">In vier Schritten zu Ihrem persönlichen Hausmeisterservice</p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-brand-green/20" />
              <HausmeisterTimelineSteps steps={processSteps} />
            </div>
          </div>
        </section>

        <section className="py-24 bg-section-gray">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">Häufige Fragen zum Hausmeisterservice in {city.name}</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {hausmeisterFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-brand-green last:border-b rounded-lg px-6 overflow-hidden">
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 sm:mb-12">
              <p className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-2 text-xs sm:text-sm font-semibold text-brand-green mb-5"><MapPin className="w-4 h-4" />Unser Servicegebiet rund um {city.name}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Wir sind schnell in {city.name} vor Ort</h2>
              <p className="text-base sm:text-xl text-gray-500">{city.name} liegt nur {city.distanceFromHQ} km von unserem Standort in {businessInfo.address.city} entfernt.</p>
            </div>
            <div className="rounded-3xl border border-brand-green/20 bg-gradient-to-br from-brand-green-light/20 via-white to-brand-green/10 p-4 sm:p-5">
              <div className="mb-4 sm:mb-5">
                <p className="text-sm sm:text-base font-semibold text-gray-800 mb-1">Regionale Einsatzkarte</p>
                <p className="text-xs sm:text-sm text-gray-600">Tippen Sie auf einen Marker und wechseln Sie direkt zur lokalen Leistungsseite.</p>
              </div>
              <ServiceAreaMap cities={cities} serviceSlug="hausmeisterservice" />
            </div>
          </div>
        </section>

        <section className="py-32 bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
              Bereit für einen<span className="text-brand-green-light"> Hausmeister</span> in {city.name}, auf den Sie sich verlassen können?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Kontaktieren Sie uns für ein unverbindliches Gespräch zu Ihrem Objekt in {city.name}.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-7 text-lg font-medium rounded-full">
                <a href={`tel:${businessInfo.contact.phone}`}><Phone className="w-5 h-5 mr-3" />{businessInfo.contact.phoneDisplay}</a>
              </Button>
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white px-12 py-7 text-lg font-medium rounded-full">
                <a href={`https://wa.me/${businessInfo.contact.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5 mr-3" />WhatsApp</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
