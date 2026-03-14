import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HausmeisterTimelineSteps } from "@/components/hausmeister-timeline-steps";
import { BreadcrumbJsonLd, FAQJsonLd, LocalServiceJsonLd } from "@/components/json-ld";
import { ServiceAreaMap } from "@/components/service-area-map";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { businessInfo, cities, getCityBySlug, getServiceBySlug } from "@/lib/seo-config";

interface CleaningServiceItem {
  image: string;
  title: string;
  description: string;
  fit?: "cover" | "contain";
  imageClass?: string;
}

function getPageData() {
  const service = getServiceBySlug("gebaeudereinigung");
  const city = getCityBySlug("worms");
  if (!service || !city) { notFound(); }
  return { service, city };
}

const { service, city } = getPageData();

export const metadata: Metadata = {
  title: `${service.name} in ${city.name} | Professionelle Sauberkeit vor Ort`,
  description: `Professionelle ${service.name} in ${city.name} (${city.postalCodes.join(", ")}). Büroreinigung, Treppenhausreinigung und Grundreinigung in ${city.name} und ${city.districts.slice(0, 3).join(", ")}.`,
  keywords: [...service.keywords, city.name, ...city.districts, ...city.postalCodes],
  alternates: { canonical: `/${service.slug}/${city.slug}` },
  openGraph: {
    title: `${service.name} in ${city.name} | ${businessInfo.name}`,
    description: `Zuverlässige ${service.name} in ${city.name}. Jetzt unverbindlich anfragen.`,
    url: `/${service.slug}/${city.slug}`,
    type: "website",
    images: [{ url: "/leistungCard/GlasCard.png", width: 1200, height: 630, alt: `${service.name} in ${city.name} - ${businessInfo.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${service.name} in ${city.name} | ${businessInfo.name}`,
    description: `Lokale ${service.name} in ${city.name}: gründlich, diskret, termintreu.`,
    images: ["/leistungCard/GlasCard.png"],
  },
};

const serviceItems: CleaningServiceItem[] = [
  { image: "/glasreinigung/leistugen/Unterhaltsreinigung-v2.png", title: "Unterhaltsreinigung", description: `Regelmäßige Reinigung für dauerhaft gepflegte Flächen in ${city.name}` },
  { image: "/glasreinigung/leistugen/Treppenhausreinigung-v2.png", title: "Treppenhausreinigung", description: "Saubere Eingangs- und Treppenbereiche mit System" },
  { image: "/glasreinigung/leistugen/Buroreinigung-v2.png", title: "Büroreinigung", description: "Hygienische Arbeitsplätze für Teams und Kundenkontakt", fit: "cover" },
  { image: "/glasreinigung/leistugen/Glasreinigung-v2.png", title: "Glasreinigung", description: "Streifenfreie Fenster und Glaselemente innen und außen", fit: "contain", imageClass: "object-contain scale-110 p-0" },
  { image: "/glasreinigung/leistugen/Grundreinigung-v2.png", title: "Grundreinigung", description: "Intensive Reinigung bei Übergaben und Sonderbedarfen" },
  { image: "/glasreinigung/leistugen/Sanitaerreinigung-v2.png", title: "Sanitärreinigung", description: "Gründliche Reinigung und Desinfektion sensibler Bereiche" },
];

const processSteps = [
  { step: "01", title: "Kontaktaufnahme", description: `Sie schreiben oder rufen uns an. Wir erfassen Objekt und Flächen in ${city.name}.` },
  { step: "02", title: "Kostenlose Besichtigung", description: `Wir besichtigen Ihr Objekt in ${city.name} und definieren gemeinsam den Reinigungsumfang.` },
  { step: "03", title: "Individuelles Angebot", description: "Sie erhalten ein transparentes Angebot mit festen Leistungen und Intervallen." },
  { step: "04", title: "Regelmäßige Reinigung", description: "Unser Team sorgt zuverlässig für saubere, gepflegte und hygienische Räume." },
];

const cleaningFaqs = [
  { question: `Bieten Sie Gebäudereinigung in ganz ${city.name} an?`, answer: `Ja, wir betreuen Objekte im gesamten Stadtgebiet von ${city.name} - inklusive ${city.districts.slice(0, 3).join(", ")}. Die Einsatzplanung erfolgt nach Lage und Objektart.` },
  { question: `Wie schnell kann eine Reinigung in ${city.name} starten?`, answer: `Da ${city.name} nur ${city.distanceFromHQ} km von unserem Standort entfernt liegt, können wir Besichtigungen und Ersttermine in ${city.name} oft kurzfristig anbieten.` },
  { question: `Reinigen Sie in ${city.name} auch Treppenhäuser, Büros und Praxisflächen?`, answer: `Ja, wir übernehmen in ${city.name} die laufende Reinigung von Treppenhäusern, Büroeinheiten und Praxisbereichen. Leistungsumfang und Intervalle werden objektspezifisch festgelegt.` },
  { question: `Bieten Sie in ${city.name} auch einmalige Grundreinigungen an?`, answer: `Ja, neben laufenden Verträgen bieten wir für Objekte in ${city.name} auch einmalige Einsätze an, z. B. nach Umbauten oder vor Übergaben.` },
  { question: `Wie wird die Reinigungsleistung in ${city.name} dokumentiert?`, answer: `Für Standorte in ${city.name} arbeiten wir mit klaren Leistungsverzeichnissen. Auf Wunsch erhalten Sie eine nachvollziehbare Dokumentation der erledigten Arbeiten.` },
  { question: `Was kostet Gebäudereinigung in ${city.name}?`, answer: `Die Kosten richten sich nach Fläche, Häufigkeit und Leistungsumfang. Für Ihr Objekt in ${city.name} erhalten Sie nach Besichtigung ein transparentes Angebot.` },
];

export default function WormsGebaeudereinigungPage() {
  return (
    <>
      <LocalServiceJsonLd service={service} city={city} />
      <BreadcrumbJsonLd items={[{ name: "Startseite", url: "/" }, { name: "Gebäudereinigung", url: "/gebaeudereinigung" }, { name: city.name }]} />
      <FAQJsonLd questions={cleaningFaqs} />
      <Header />
      <main className="pt-28">
        <section className="h-[calc(100svh-7rem)] flex items-center relative overflow-hidden">
          <Image src="/glasreinigung/img2.jpeg" alt={`Gebäudereinigung in ${city.name}`} fill className="object-cover object-center" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.65) 100%)" }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20 relative z-10">
            <div className="max-w-4xl">
              <nav className="-mt-4 sm:mt-0 mb-4 sm:mb-6">
                <ol className="flex items-center gap-2 text-sm text-gray-600">
                  <li><Link href="/" className="hover:text-sky-600">Home</Link></li>
                  <span>/</span>
                  <li><Link href="/gebaeudereinigung" className="hover:text-sky-600">Gebäudereinigung</Link></li>
                  <span>/</span>
                  <li className="text-sky-600 font-medium">{city.name}</li>
                </ol>
              </nav>
              <p className="text-xs sm:text-sm text-sky-600 font-medium tracking-normal sm:tracking-wider uppercase mb-3 sm:mb-6">Professionelle Gebäudereinigung in {city.name}</p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-[1.1]">
                Wir reinigen Ihr Objekt in {city.name}.<span className="text-sky-700"> Sie konzentrieren sich auf Ihr Geschäft.</span>
              </h1>
              <p className="text-lg sm:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed">{city.description} Zuverlässige Gebäudereinigung für Büros, Praxen und Wohnanlagen in {city.name} - gründlich, diskret und termintreu.</p>
              <div className="mt-4 sm:mt-0 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-6">
                <Button asChild size="lg" className="w-full bg-sky-700 hover:bg-sky-800 text-white px-4 py-4 text-sm font-medium rounded-xl sm:w-auto sm:px-10 sm:py-7 sm:text-lg sm:rounded-full">
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
                <div key={index} className="group w-full max-w-[14rem] bg-white rounded-2xl p-5 hover:bg-sky-500 transition-all duration-500 shadow-sm hover:shadow-2xl cursor-pointer">
                  <div className="relative h-16 sm:h-20 rounded-xl mb-3 overflow-hidden">
                    <Image src={item.image} alt={`${item.title} in ${city.name}`} fill className={item.imageClass ? item.imageClass : item.fit === "cover" ? "object-cover" : "object-contain p-2"} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-1.5 transition-colors">{item.title}</h3>
                  <p className="text-xs text-gray-500 group-hover:text-white/80 transition-colors">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative h-[70vh]">
          <Image src="/glasreinigung/img1.jpg" alt={`Professionelle Gebäudereinigung in ${city.name}`} fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-20">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-xl">
                <p className="text-white/80 text-lg mb-4">Seit 6+ Jahren</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Sauberkeit in {city.name} auf die Sie sich verlassen können</h2>
                <p className="text-white/90 text-base sm:text-xl">Von der täglichen Unterhaltsreinigung bis zur Grundreinigung: Kunden in {city.name} vertrauen auf unser Team.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">So einfach geht&apos;s in {city.name}</h2>
              <p className="text-xl text-gray-500">In vier Schritten zu Ihrer professionellen Gebäudereinigung</p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-sky-200" />
              <HausmeisterTimelineSteps steps={processSteps} variant="blue" />
            </div>
          </div>
        </section>

        <section className="py-24 bg-section-gray">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">Häufige Fragen zur Gebäudereinigung in {city.name}</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {cleaningFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-sky-300 last:border-b rounded-lg px-6 overflow-hidden">
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
              <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs sm:text-sm font-semibold text-sky-700 mb-5"><MapPin className="w-4 h-4" />Unser Servicegebiet rund um {city.name}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Wir sind schnell in {city.name} vor Ort</h2>
              <p className="text-base sm:text-xl text-gray-500">{city.name} liegt nur {city.distanceFromHQ} km von unserem Standort in {businessInfo.address.city} entfernt.</p>
            </div>
            <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-100/70 via-white to-sky-50 p-4 sm:p-5">
              <div className="mb-4 sm:mb-5">
                <p className="text-sm sm:text-base font-semibold text-gray-800 mb-1">Regionale Einsatzkarte</p>
                <p className="text-xs sm:text-sm text-gray-600">Tippen Sie auf einen Marker und wechseln Sie direkt zur lokalen Leistungsseite.</p>
              </div>
              <ServiceAreaMap cities={cities} serviceSlug="gebaeudereinigung" variant="blue" />
            </div>
          </div>
        </section>

        <section className="py-32 relative overflow-hidden">
          <Image src="/glasreinigung/img3.jpg" alt={`Gebäudereinigung Kontakt in ${city.name}`} fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gray-900/70" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-8">Bereit für ein<span className="text-sky-200"> sichtbar sauberes Objekt</span> in {city.name}?</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Kontaktieren Sie uns für ein unverbindliches Gespräch zu Ihrem Objekt in {city.name}.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-7 text-lg font-medium rounded-full">
                <a href={`tel:${businessInfo.contact.phone}`}><Phone className="w-5 h-5 mr-3" />{businessInfo.contact.phoneDisplay}</a>
              </Button>
              <Button asChild size="lg" className="bg-sky-700 hover:bg-sky-800 text-white px-12 py-7 text-lg font-medium rounded-full">
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
