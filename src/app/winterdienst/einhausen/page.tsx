import { Metadata } from "next";
import Image from "next/image";
import { WinterdienstHeroBackground } from "@/components/winterdienst-hero-background";
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

function getPageData() {
  const service = getServiceBySlug("winterdienst");
  const city = getCityBySlug("einhausen");
  if (!service || !city) { notFound(); }
  return { service, city };
}

const { service, city } = getPageData();

export const metadata: Metadata = {
  title: `${service.name} in ${city.name} | Sicher durch den Winter`,
  description: `Professioneller ${service.name} in ${city.name} (${city.postalCodes.join(", ")}). Schneeräumung, Streudienst und Räumpflicht-Übernahme in ${city.name} und ${city.districts.slice(0, 3).join(", ")}.`,
  keywords: [...service.keywords, city.name, ...city.districts, ...city.postalCodes],
  alternates: { canonical: `/${service.slug}/${city.slug}` },
  openGraph: {
    title: `${service.name} in ${city.name} | ${businessInfo.name}`,
    description: `Zuverlässiger ${service.name} in ${city.name}. Jetzt unverbindlich anfragen.`,
    url: `/${service.slug}/${city.slug}`,
    type: "website",
    images: [{ url: "/leistungCard/winterCard.png", width: 1200, height: 630, alt: `${service.name} in ${city.name} - ${businessInfo.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${service.name} in ${city.name} | ${businessInfo.name}`,
    description: `Lokaler ${service.name} in ${city.name}: pünktlich, gründlich, einsatzbereit.`,
    images: ["/leistungCard/winterCard.png"],
  },
};

const serviceItems = [
  { image: "/winterdienst/leistungen/Schneeraeumung.png", title: "Schneeräumung", description: `Zuverlässige Räumung in ${city.name}` },
  { image: "/winterdienst/leistungen/Streudienst.png", title: "Streudienst", description: "Vereisungsschutz auf Gehwegen und Eingängen" },
  { image: "/winterdienst/leistungen/Kontrollfahrten.png", title: "Kontrollfahrten", description: "Regelmäßige Wetter- und Flächenkontrolle" },
  { image: "/winterdienst/leistungen/Objektbetreuung.png", title: "Objektbetreuung", description: "Winterdienst für Wohnanlagen und Gewerbe" },
  { image: "/winterdienst/leistungen/Einsatz.png", title: "Früh-Einsätze", description: "Einsatz ab den frühen Morgenstunden bei Bedarf" },
  { image: "/winterdienst/leistungen/Dokumentation.png", title: "Dokumentation", description: "Transparente Einsatznachweise für mehr Sicherheit" },
];

const processSteps = [
  { step: "01", title: "Kontaktaufnahme", description: `Sie melden sich telefonisch oder per WhatsApp. Wir erfassen Ihr Objekt in ${city.name} und die Flächen.` },
  { step: "02", title: "Kostenlose Besichtigung", description: `Wir prüfen in ${city.name} vor Ort Zufahrten, Gehwege und sensible Bereiche für den Winter.` },
  { step: "03", title: "Individuelles Angebot", description: "Sie erhalten ein klares Angebot mit Leistungen, Einsatzzeiten und Intervallen." },
  { step: "04", title: "Wintereinsatz", description: "Unser Team sorgt bei Schnee und Glätte für sichere und begehbare Flächen." },
];

const winterFaqs = [
  { question: `Ab wann räumen Sie bei Schneefall in ${city.name}?`, answer: `Wir starten witterungsabhängig früh am Morgen. Da ${city.name} nur ${city.distanceFromHQ} km von unserem Standort entfernt liegt, können wir Einsätze in ${city.name} kurzfristig einplanen und bei anhaltendem Schneefall nachräumen.` },
  { question: `Übernehmen Sie Winterdienst auch in ${city.districts.slice(0, 2).join(" und ")}?`, answer: `Ja, wir betreuen Kunden im gesamten Gemeindegebiet von ${city.name}, inklusive ${city.districts.join(", ")}. Bei der Einsatzplanung berücksichtigen wir Verkehrswege und frequentierte Flächen.` },
  { question: `Welche Flächen werden beim Winterdienst in ${city.name} geräumt?`, answer: `Wir übernehmen in ${city.name} Gehwege, Hauseingänge, Hof- und Garagenzufahrten sowie Stellplätze. Den Leistungsumfang stimmen wir vorab mit Ihnen ab.` },
  { question: `Stellen Sie Streumittel für Einsätze in ${city.name} bereit?`, answer: `Ja, wir bringen geeignete Streumittel mit und passen den Einsatz an Temperatur und Untergrund in ${city.name} an.` },
  { question: `Bieten Sie feste Winterverträge für ${city.name} an?`, answer: `Ja, wir bieten planbare Vertragsmodelle für die gesamte Wintersaison sowie flexible Lösungen für Objekte in ${city.name} bei kurzfristigem Bedarf.` },
  { question: `Was kostet Winterdienst in ${city.name}?`, answer: `Die Kosten richten sich nach Fläche, Lage und Leistungsumfang. Für Ihr Objekt in ${city.name} erhalten Sie nach Besichtigung ein transparentes Angebot.` },
];

export default function EinhausenWinterdienstPage() {
  return (
    <>
      <LocalServiceJsonLd service={service} city={city} />
      <BreadcrumbJsonLd items={[{ name: "Startseite", url: "/" }, { name: "Winterdienst", url: "/winterdienst" }, { name: city.name }]} />
      <FAQJsonLd questions={winterFaqs} />
      <Header />
      <main className="pt-28">
        <section className="h-[calc(100svh-7rem)] relative overflow-hidden">
          <WinterdienstHeroBackground
            contentDark={
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20 h-full flex items-center">
                <div className="max-w-4xl">
                  <nav className="-mt-4 sm:mt-0 mb-4 sm:mb-6">
                    <ol className="flex items-center gap-2 text-sm text-gray-600">
                      <li><Link href="/" className="hover:text-sky-600">Home</Link></li>
                      <span>/</span>
                      <li><Link href="/winterdienst" className="hover:text-sky-600">Winterdienst</Link></li>
                      <span>/</span>
                      <li className="text-sky-600 font-medium">{city.name}</li>
                    </ol>
                  </nav>
                  <p className="text-xs sm:text-sm text-sky-600 font-medium tracking-normal sm:tracking-wider uppercase mb-3 sm:mb-6">Professioneller Winterdienst in {city.name}</p>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-[1.1]">
                    Wir sichern Ihre Flächen in {city.name}.<span className="text-sky-700"> Sie bleiben sorgenfrei im Winter.</span>
                  </h1>
                  <p className="text-lg sm:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed">{city.description} Zuverlässiger Winterdienst für Wohnanlagen, Gewerbe und Praxen in {city.name} - pünktlich, gründlich und einsatzbereit bei Glätte.</p>
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
            }
            contentLight={
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20 h-full flex items-center">
                <div className="max-w-4xl">
                  <nav className="-mt-4 sm:mt-0 mb-4 sm:mb-6">
                    <ol className="flex items-center gap-2 text-sm text-white/70">
                      <li><Link href="/" className="hover:text-white">Home</Link></li>
                      <span>/</span>
                      <li><Link href="/winterdienst" className="hover:text-white">Winterdienst</Link></li>
                      <span>/</span>
                      <li className="text-sky-300 font-medium">{city.name}</li>
                    </ol>
                  </nav>
                  <p className="text-xs sm:text-sm text-sky-300 font-medium tracking-normal sm:tracking-wider uppercase mb-3 sm:mb-6">Professioneller Winterdienst in {city.name}</p>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-[1.1]">
                    Wir sichern Ihre Flächen in {city.name}.<span className="text-sky-300"> Sie bleiben sorgenfrei im Winter.</span>
                  </h1>
                  <p className="text-lg sm:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed">{city.description} Zuverlässiger Winterdienst für Wohnanlagen, Gewerbe und Praxen in {city.name} - pünktlich, gründlich und einsatzbereit bei Glätte.</p>
                  <div className="mt-4 sm:mt-0 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-6">
                    <Button asChild size="lg" className="w-full bg-sky-600 hover:bg-sky-500 text-white px-4 py-4 text-sm font-medium rounded-xl sm:w-auto sm:px-10 sm:py-7 sm:text-lg sm:rounded-full">
                      <a href={`tel:${businessInfo.contact.phone}`}><Phone className="w-5 h-5 mr-3" />Jetzt anrufen</a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-gray-900 px-4 py-4 text-sm font-medium rounded-xl bg-transparent sm:w-auto sm:px-10 sm:py-7 sm:text-lg sm:rounded-full">
                      <Link href="#services">Mehr erfahren<ArrowRight className="w-5 h-5 ml-2" /></Link>
                    </Button>
                  </div>
                </div>
              </div>
            }
          />
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
                    <Image src={item.image} alt={`${item.title} in ${city.name}`} fill className={`object-contain ${item.title === "Dokumentation" ? "scale-125 p-0" : "p-2"}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-1.5 transition-colors">{item.title}</h3>
                  <p className="text-xs text-gray-500 group-hover:text-white/80 transition-colors">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative h-[70vh]">
          <Image src="/winterdienst/111.png" alt={`Professioneller Winterdienst in ${city.name}`} fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-20">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-xl">
                <p className="text-white/80 text-lg mb-4">Seit 6+ Jahren</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Sicherheit in {city.name} auf die Sie sich verlassen können</h2>
                <p className="text-white/90 text-base sm:text-xl">Von der ersten Glätte bis zum letzten Schneefall: Kunden in {city.name} setzen auf unseren zuverlässigen Winterdienst.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">So einfach geht&apos;s in {city.name}</h2>
              <p className="text-xl text-gray-500">In vier Schritten zu Ihrem professionellen Winterdienst</p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-sky-200" />
              <HausmeisterTimelineSteps steps={processSteps} variant="blue" />
            </div>
          </div>
        </section>

        <section className="py-24 bg-section-gray">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">Häufige Fragen zum Winterdienst in {city.name}</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {winterFaqs.map((faq, index) => (
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
              <ServiceAreaMap cities={cities} serviceSlug="winterdienst" variant="blue" />
            </div>
          </div>
        </section>

        <section className="py-32 relative overflow-hidden">
          <Image src="/leistungCard/winterCard.png" alt={`Winterdienst Kontakt in ${city.name}`} fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gray-900/70" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-8">Bereit für sichere<span className="text-sky-200"> Wege und Flächen</span> in {city.name}?</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Kontaktieren Sie uns für ein unverbindliches Gespräch zum Winterdienst in {city.name}.</p>
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
