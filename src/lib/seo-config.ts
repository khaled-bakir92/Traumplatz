// SEO Konfiguration für Traumplatz
// Alle Geschäftsdaten, Services und Städte zentral verwaltet

export const businessInfo = {
  name: "Traumplatz",
  legalName: "Traumplatz",
  description:
    "Ihr zuverlässiger Partner für Gartenpflege, Hausmeisterservice, Gebäudereinigung und Winterdienst in der Region Bergstraße und Südhessen.",
  url: "https://traumplatz-gartenpflege.de",
  logo: "/logo.png",
  address: {
    street: "Berliner Ring 89",
    postalCode: "64625",
    city: "Bensheim",
    country: "DE",
    region: "Hessen",
  },
  contact: {
    phone: "+49 155 66179082",
    phoneDisplay: "0155 66179082",
    phone2: "+49 155 66179083",
    phone2Display: "0155 66179083",
    email: "kontakt@traumplatz-gartenpflege.de",
    whatsapp: "+49 155 66179082",
  },
  openingHours: {
    weekdays: "Mo-Sa 07:00-20:00",
    phone: "24/7 telefonisch erreichbar",
    schema: ["Mo-Sa 07:00-20:00"],
  },
  socialMedia: {
    instagram: "https://www.instagram.com/traumplatz_?igsh=MWVwdXJiMHgzYWk3bg==",
    tiktok: "https://www.tiktok.com/@traumplatz?_r=1&_t=ZN-94hEQ9To1d0",
  },
} as const;

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: "gartenpflege",
    name: "Gartenpflege",
    shortName: "Garten",
    description:
      "Professionelle Gartenpflege für Privat- und Geschäftskunden. Rasenmähen, Heckenschnitt, Baumfällung, Beetpflege und saisonale Gartenarbeiten.",
    metaDescription:
      "Professionelle Gartenpflege vom Experten. Rasenmähen, Heckenschnitt, Beetpflege und mehr. Zuverlässig und termingerecht.",
    keywords: [
      "Gartenpflege",
      "Rasenmähen",
      "Heckenschnitt",
      "Gärtner",
      "Gartenservice",
      "Beetpflege",
      "Baumschnitt",
    ],
    icon: "leaf",
  },
  {
    slug: "hausmeisterservice",
    name: "Hausmeisterservice",
    shortName: "Hausmeister",
    description:
      "Zuverlässiger Hausmeisterservice für Wohnanlagen, Gewerbeimmobilien und öffentliche Einrichtungen. Kleinreparaturen, Objektbetreuung und Facility Management.",
    metaDescription:
      "Professioneller Hausmeisterservice für Ihre Immobilie. Kleinreparaturen, Objektbetreuung und mehr. Zuverlässig vor Ort.",
    keywords: [
      "Hausmeisterservice",
      "Hausmeister",
      "Objektbetreuung",
      "Facility Management",
      "Kleinreparaturen",
      "Gebäudemanagement",
    ],
    icon: "wrench",
  },
  {
    slug: "gebaeudereinigung",
    name: "Gebäudereinigung",
    shortName: "Reinigung",
    description:
      "Professionelle Gebäudereinigung für Büros, Praxen, Treppenhäuser und Gewerbeobjekte. Unterhaltsreinigung, Grundreinigung und Sonderreinigung.",
    metaDescription:
      "Professionelle Gebäudereinigung für saubere Räumlichkeiten. Büroreinigung, Treppenreinigung und mehr. Gründlich und zuverlässig.",
    keywords: [
      "Gebäudereinigung",
      "Büroreinigung",
      "Treppenreinigung",
      "Unterhaltsreinigung",
      "Reinigungsservice",
      "Grundreinigung",
    ],
    icon: "sparkles",
  },
  {
    slug: "winterdienst",
    name: "Winterdienst",
    shortName: "Winter",
    description:
      "Professioneller Winterdienst mit Schneeräumung und Streudienst. Zuverlässige Räum- und Streupflicht-Übernahme für Privat- und Geschäftskunden.",
    metaDescription:
      "Zuverlässiger Winterdienst mit Schneeräumung und Streudienst. Räumpflicht-Übernahme für sichere Wege. 24/7 Bereitschaft.",
    keywords: [
      "Winterdienst",
      "Schneeräumung",
      "Streudienst",
      "Räumpflicht",
      "Schneebeseitigung",
      "Eisbeseitigung",
    ],
    icon: "snowflake",
  },
];

export interface City {
  slug: string;
  name: string;
  isHQ: boolean;
  region: string;
  postalCodes: string[];
  districts: string[];
  description: string;
  distanceFromHQ: number; // in km
  population: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const cities: City[] = [
  {
    slug: "bensheim",
    name: "Bensheim",
    isHQ: true,
    region: "Bergstraße",
    postalCodes: ["64625"],
    districts: [
      "Auerbach",
      "Schönberg",
      "Zell",
      "Gronau",
      "Wilmshausen",
      "Hochstädten",
      "Langwaden",
      "Fehlheim",
      "Schwanheim",
    ],
    description:
      "Als Ihr lokaler Partner mit Sitz direkt in Bensheim kennen wir die Bergstraße wie unsere Westentasche. Schnelle Reaktionszeiten und persönlicher Service sind bei uns garantiert.",
    distanceFromHQ: 0,
    population: 42000,
    coordinates: { lat: 49.6803, lng: 8.6187 },
  },
  {
    slug: "heppenheim",
    name: "Heppenheim",
    isHQ: false,
    region: "Bergstraße",
    postalCodes: ["64646"],
    districts: [
      "Erbach",
      "Kirschhausen",
      "Mittershausen-Scheuerberg",
      "Sonderbach",
      "Wald-Erlenbach",
      "Hambach",
      "Unter-Hambach",
      "Ober-Laudenbach",
    ],
    description:
      "Die Kreisstadt Heppenheim an der Bergstraße mit ihrer malerischen Altstadt und der Starkenburg liegt nur wenige Minuten von unserem Standort entfernt. Wir betreuen hier zahlreiche Privat- und Geschäftskunden.",
    distanceFromHQ: 5,
    population: 26000,
    coordinates: { lat: 49.6417, lng: 8.6364 },
  },
  {
    slug: "lorsch",
    name: "Lorsch",
    isHQ: false,
    region: "Bergstraße",
    postalCodes: ["64653"],
    districts: ["Seehof"],
    description:
      "Die UNESCO-Welterbestadt Lorsch mit dem berühmten Kloster Lorsch ist ein wichtiger Standort in unserem Einzugsgebiet. Wir kennen die Stadt und ihre besonderen Anforderungen bestens.",
    distanceFromHQ: 8,
    population: 14000,
    coordinates: { lat: 49.6539, lng: 8.5672 },
  },
  {
    slug: "einhausen",
    name: "Einhausen",
    isHQ: false,
    region: "Bergstraße",
    postalCodes: ["64683"],
    districts: ["Klein-Hausen"],
    description:
      "Die Gemeinde Einhausen im Ried ist bekannt für ihre ländliche Idylle und naturnahe Gärten. Unsere Experten kennen die besonderen Anforderungen der Riedböden.",
    distanceFromHQ: 10,
    population: 6500,
    coordinates: { lat: 49.6775, lng: 8.5361 },
  },
  {
    slug: "alsbach-haehnlein",
    name: "Alsbach-Hähnlein",
    isHQ: false,
    region: "Bergstraße",
    postalCodes: ["64665"],
    districts: ["Alsbach", "Hähnlein", "Sandwiese"],
    description:
      "Die Doppelgemeinde Alsbach-Hähnlein verbindet Bergstraße und Ried. Vom historischen Schloss Alsbach bis zu den gepflegten Wohnsiedlungen – wir sind Ihr Partner vor Ort.",
    distanceFromHQ: 12,
    population: 9500,
    coordinates: { lat: 49.7389, lng: 8.5953 },
  },
  {
    slug: "zwingenberg",
    name: "Zwingenberg",
    isHQ: false,
    region: "Bergstraße",
    postalCodes: ["64673"],
    districts: ["Rodau"],
    description:
      "Zwingenberg, die älteste Stadt an der Bergstraße, begeistert mit historischem Flair und gepflegten Gärten. Wir sind stolz, hier unsere Dienstleistungen anzubieten.",
    distanceFromHQ: 7,
    population: 7200,
    coordinates: { lat: 49.7264, lng: 8.6106 },
  },
  {
    slug: "darmstadt",
    name: "Darmstadt",
    isHQ: false,
    region: "Südhessen",
    postalCodes: ["64283", "64285", "64287", "64289", "64291", "64293", "64295", "64297"],
    districts: [
      "Arheilgen",
      "Eberstadt",
      "Kranichstein",
      "Wixhausen",
      "Bessungen",
      "Martinsviertel",
      "Johannesviertel",
      "Heimstättensiedlung",
    ],
    description:
      "In der Wissenschaftsstadt Darmstadt betreuen wir Kunden von der TU bis zum Mathildenhöhe-Viertel. Moderne Architektur trifft auf professionelle Pflege.",
    distanceFromHQ: 20,
    population: 160000,
    coordinates: { lat: 49.8728, lng: 8.6512 },
  },
  {
    slug: "weinheim",
    name: "Weinheim",
    isHQ: false,
    region: "Rhein-Neckar",
    postalCodes: ["69469"],
    districts: [
      "Hohensachsen",
      "Lützelsachsen",
      "Oberflockenbach",
      "Ritschweier",
      "Sulzbach",
      "Rippenweier",
      "Ofling",
    ],
    description:
      "Die Zwei-Burgen-Stadt Weinheim an der Bergstraße ist ein bedeutender Standort in unserem Einzugsgebiet. Wir kennen die Region und ihre Anforderungen bestens.",
    distanceFromHQ: 15,
    population: 45000,
    coordinates: { lat: 49.5489, lng: 8.6644 },
  },
  {
    slug: "viernheim",
    name: "Viernheim",
    isHQ: false,
    region: "Rhein-Neckar",
    postalCodes: ["68519"],
    districts: ["Innenstadt", "West", "Ost"],
    description:
      "Viernheim, die größte Stadt im Kreis Bergstraße in der Metropolregion Rhein-Neckar. Hier betreuen wir sowohl Wohnanlagen als auch Gewerbeobjekte.",
    distanceFromHQ: 18,
    population: 34000,
    coordinates: { lat: 49.5403, lng: 8.5778 },
  },
  {
    slug: "pfungstadt",
    name: "Pfungstadt",
    isHQ: false,
    region: "Darmstadt-Dieburg",
    postalCodes: ["64319"],
    districts: ["Eschollbrücken", "Eich", "Hahn"],
    description:
      "Die Stadt Pfungstadt liegt zwischen Bergstraße und Ried – ein wichtiger Standort in unserem Einzugsgebiet. Hier betreuen wir Privat- und Gewerbekunden zuverlässig vor Ort.",
    distanceFromHQ: 15,
    population: 25000,
    coordinates: { lat: 49.8056, lng: 8.6036 },
  },
  {
    slug: "seeheim-jugenheim",
    name: "Seeheim-Jugenheim",
    isHQ: false,
    region: "Bergstraße",
    postalCodes: ["64342"],
    districts: [
      "Seeheim",
      "Jugenheim",
      "Balkhausen",
      "Malchen",
      "Ober-Beerbach",
      "Steigerts",
    ],
    description:
      "Die Luftkurortgemeinde Seeheim-Jugenheim besticht durch herrschaftliche Villen und gepflegte Parkanlagen an der Bergstraße.",
    distanceFromHQ: 15,
    population: 16500,
    coordinates: { lat: 49.7694, lng: 8.6497 },
  },
  {
    slug: "worms",
    name: "Worms",
    isHQ: false,
    region: "Rheinhessen",
    postalCodes: ["67547", "67549", "67551"],
    districts: [
      "Abenheim",
      "Heppenheim",
      "Herrnsheim",
      "Hochheim",
      "Horchheim",
      "Ibersheim",
      "Leiselheim",
      "Neuhausen",
      "Pfeddersheim",
      "Pfiffligheim",
      "Rheindürkheim",
      "Weinsheim",
      "Wiesoppenheim",
    ],
    description:
      "Die Nibelungenstadt Worms mit ihrer über 1000-jährigen Geschichte liegt am westlichen Rand unseres Einzugsgebiets. Wir betreuen hier Kunden auf beiden Seiten des Rheins.",
    distanceFromHQ: 25,
    population: 84000,
    coordinates: { lat: 49.6341, lng: 8.3507 },
  },
];

// Helper Funktionen
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

// Generiere alle Service-Stadt Kombinationen für generateStaticParams
export function generateAllServiceCityParams(): { service: string; city: string }[] {
  const params: { service: string; city: string }[] = [];
  for (const service of services) {
    for (const city of cities) {
      params.push({ service: service.slug, city: city.slug });
    }
  }
  return params;
}

// Google Maps Embed URL generieren
export function getGoogleMapsEmbedUrl(city: City): string {
  const query = encodeURIComponent(`${city.name}, ${city.postalCodes[0]}, Deutschland`);
  return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${query}&zoom=13`;
}

// Alternative: OpenStreetMap Embed (kostenlos, kein API Key nötig)
export function getOpenStreetMapEmbedUrl(city: City): string {
  const { lat, lng } = city.coordinates;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.05},${lat - 0.03},${lng + 0.05},${lat + 0.03}&layer=mapnik&marker=${lat},${lng}`;
}

// SEO Title generieren
export function generateSeoTitle(serviceName: string, cityName: string): string {
  return `${serviceName} in ${cityName} | Traumplatz`;
}

// SEO Description generieren (FR-012)
// Per-Stadt differenziert: Bevölkerungsgröße, Region, stadtspezifische Beschreibung.
export function generateSeoDescription(service: Service, city: City): string {
  const sizeLabel =
    city.population >= 100000
      ? "Großstadt"
      : city.population >= 30000
        ? "Stadt"
        : city.population >= 10000
          ? "Mittelstadt"
          : "Gemeinde";

  // Ersten Satz der stadtspezifischen Beschreibung extrahieren
  const cityHighlight = city.description.split(".")[0];

  return `Professionelle ${service.name} in ${city.name} (${sizeLabel}, ${city.region}): ${cityHighlight}. Traumplatz – zuverlässig, termingerecht, jetzt anfragen!`;
}

// FAQ Konfiguration
export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Wie oft sollte der Rasen gemäht werden und was ist im Jahresverlauf zu beachten?",
    answer:
      "Von April bis Oktober empfehlen wir eine Mahd alle 1–2 Wochen, im Frühjahr und Herbst genügen 2–3 Wochen Abstand. Die ideale Schnitthöhe liegt zwischen 3,5 und 5 cm – zu kurzes Mähen schwächt den Rasen und fördert Unkraut. Zusätzlich übernehmen wir das gesamte Jahresprogramm: Vertikutieren im Frühjahr, regelmäßiges Düngen, Bewässerung bei Trockenheit und die Herbstvorbereitung für einen gesunden Rasen im nächsten Jahr.",
  },
  {
    question: "Übernehmen Sie auch das Beschneiden von Hecken und Sträuchern?",
    answer:
      "Ja, wir kümmern uns um den fachgerechten Formschnitt von Hecken, Sträuchern und Zierbäumen. Der optimale Zeitpunkt ist zweimal jährlich – im Frühjahr (März/April) vor dem Austrieb und im Spätsommer (August/September) für den letzten Schnitt vor dem Winter. Dabei halten wir uns strikt an das Bundesnaturschutzgesetz, das starke Rückschnitte während der Brutzeit von März bis September untersagt. So bleibt Ihr Garten gepflegt und Sie bleiben rechtlich auf der sicheren Seite.",
  },
  {
    question: "Wie häufig sollte eine professionelle Glasreinigung durchgeführt werden?",
    answer:
      "Für Privathaushalte empfehlen wir 2–4 Reinigungen pro Jahr, je nach Lage und Umgebung. Gebäude in der Nähe von Straßen, Industrie oder mit viel Baumbestand benötigen häufigere Reinigungen. Für Gewerbeobjekte, Schaufenster oder Bürogebäude empfehlen wir je nach Verschmutzungsgrad alle 4–8 Wochen. Regelmäßige Reinigung schützt das Glas langfristig vor hartnäckigen Kalkflecken, Mineralablagerungen und UV-Schäden, die die Glasoberfläche dauerhaft beschädigen können.",
  },
  {
    question: "Welche Bereiche werden bei der Glas- und Gebäudereinigung gereinigt?",
    answer:
      "Unser Leistungsumfang umfasst Fenster innen und außen inklusive Rahmen und Dichtungen, Glasfassaden, Eingangsbereiche und Türen, Treppenhäuser, Flure und Gemeinschaftsflächen, Tiefgaragenböden, Dachrinnen sowie Fassaden- und Außenwandreinigung. Wir arbeiten mit professionellen Geräten und umweltfreundlichen Reinigungsmitteln, die Oberflächen schonen und dennoch gründlich reinigen – auch bei schwer zugänglichen Stellen.",
  },
  {
    question: "Welche Aufgaben übernimmt ein Hausmeisterservice konkret?",
    answer:
      "Unser Hausmeisterservice deckt ein breites Spektrum ab: Kleinreparaturen und Wartungsarbeiten, Leuchtmittelwechsel, Treppenreinigung, Mülltonnenmanagement und Stellplatzpflege, Grünpflege und Winterdienst, Schlüsselverwaltung, Koordination von Handwerkern sowie die Übernahme der Verkehrssicherungspflicht. Sie erhalten alles aus einer Hand – zuverlässig, dokumentiert und zu festen Konditionen. Das spart Ihnen Zeit, Nerven und die Kosten für mehrere einzelne Dienstleister.",
  },
  {
    question: "Ab wann sind Grundstückseigentümer zur Schneeräumung verpflichtet?",
    answer:
      "In Deutschland sind Grundstückseigentümer gesetzlich verpflichtet, angrenzende Gehwege an Werktagen ab 7:00 Uhr und an Sonn- und Feiertagen ab 8:00–9:00 Uhr (je nach Gemeinde) schnee- und eisfrei zu halten – in der Regel bis 20:00 Uhr. Bei Verstoß haften Eigentümer bei Unfällen auf Schadensersatz und Schmerzensgeld. Wir übernehmen diese Verkehrssicherungspflicht vollständig für Sie: mit 24/7-Bereitschaft, dokumentierten Einsätzen und schneller Reaktionszeit bei Neuschnee und Glatteis.",
  },
];

// ─── Stabile Sitemap-Daten (FR-013) ────────────────────────────────────────
// Nur manuell aktualisieren, wenn der Inhalt der jeweiligen Seitengruppe
// tatsächlich geändert wurde. Kein Build-Zeit-Dependency.
export const sitemapDates = {
  homepage: "2026-03-17",
  staticPages: "2026-03-17",
  servicePages: "2026-03-17",
  cityPages: "2026-03-17",
} as const;

// ─── City-FAQ-Pool (FR-007, FR-007a) — 12 Stadtsets ─────────────────────────
// Stadtspezifische FAQs: Standort, Anfahrt, Ortsteile, regionale Vorschriften.
// Mindestens 4 FAQs pro Stadt. Keine inhaltlichen Duplikate zwischen Städten.
export const cityFAQs: Record<string, FAQ[]> = {
  bensheim: [
    {
      question: "Arbeitet Traumplatz in allen Stadtteilen von Bensheim?",
      answer:
        "Ja, wir sind in allen Bensheimer Stadtteilen aktiv – von Auerbach über Schönberg und Zell bis nach Gronau, Wilmshausen, Hochstädten, Langwaden, Fehlheim und Schwanheim. Da unser Betrieb direkt in Bensheim ansässig ist, profitieren Sie von kurzen Fahrtzeiten und äußerst flexiblen Terminvereinbarungen. Spontaneinsätze sind bei uns häufig noch am selben Tag möglich.",
    },
    {
      question: "Wie schnell kann Traumplatz in Bensheim reagieren?",
      answer:
        "Als Heimatstandort unseres Unternehmens können wir in Bensheim besonders schnell reagieren. In der Regel sind wir bei dringenden Anfragen innerhalb von 24 Stunden vor Ort, bei Notfällen im Winterdienst oder nach Sturmschäden oft noch am selben Tag. Sie erreichen uns rund um die Uhr telefonisch.",
    },
    {
      question: "Kümmert sich Traumplatz auch um Gartenanlagen in der Bensheimer Bergstraße?",
      answer:
        "Absolut. Die Bergstraße rund um Bensheim ist eines unserer Kerngebiete. Wir pflegen Privatgärten, Wohnanlagenbegrünungen und gewerbliche Außenanlagen entlang der gesamten Bergstraße. Die besondere Hanglage vieler Bensheimer Gärten ist uns vertraut – wir setzen entsprechendes Spezialgerät ein.",
    },
    {
      question: "Welche Schneeräumpflicht gilt in Bensheim für Grundstückseigentümer?",
      answer:
        "In Bensheim sind Eigentümer verpflichtet, ihre angrenzenden Gehwege werktags ab 7:00 Uhr und sonn- und feiertags ab 8:00 Uhr schnee- und eisfrei zu halten – bis 20:00 Uhr. Die Pflicht gilt auch bei wiederholtem Schneefall mehrfach täglich. Traumplatz übernimmt diese Verkehrssicherungspflicht mit dokumentierten Einsätzen, damit Sie rechtlich abgesichert sind.",
    },
    {
      question: "Bietet Traumplatz in Bensheim auch Hausmeisterdienste für Eigentümergemeinschaften an?",
      answer:
        "Ja, wir betreuen in Bensheim zahlreiche WEGs und Eigentümergemeinschaften mit umfassenden Hausmeisterleistungen: von der Treppenhausreinigung über Grünpflege bis zur Koordination von Handwerkern. Auf Wunsch stellen wir Ihnen monatliche Leistungsberichte zur Verfügung, die Sie direkt an Ihre Hausverwaltung weitergeben können.",
    },
  ],
  heppenheim: [
    {
      question: "Ist Traumplatz in allen Stadtteilen von Heppenheim tätig?",
      answer:
        "Wir betreuen alle Ortsteile Heppenheims: Erbach, Kirschhausen, Mittershausen-Scheuerberg, Sonderbach, Wald-Erlenbach, Hambach, Unter-Hambach und Ober-Laudenbach. Gerade die weitläufigen Hanglagen der Heppenheimer Ortsteile an der Bergstraße kennen wir bestens – inklusive der speziellen Anforderungen bei der Grünpflege in Terrassengärten.",
    },
    {
      question: "Wie weit ist Traumplatz von Heppenheim entfernt und wie lange sind die Anfahrtswege?",
      answer:
        "Unser Betrieb in Bensheim liegt nur ca. 5 km von Heppenheim entfernt. Die Anfahrt dauert in der Regel unter 10 Minuten, sodass wir auch kurzfristige Termine problemlos wahrnehmen können. Für regelmäßige Kunden planen wir Tourenrouten, die die Anfahrtskosten minimieren.",
    },
    {
      question: "Übernimmt Traumplatz Pflege der historischen Gärten in der Heppenheimer Altstadt?",
      answer:
        "Ja, wir haben Erfahrung mit der Pflege von Gärten in der historischen Altstadt und rund um die Starkenburg. Ältere Gehölze, Weinreben, Rosenbeete und denkmalgeschützte Grünanlagen bedürfen besonderer Sorgfalt und Fachkenntnis – das bringen unsere Mitarbeiter mit.",
    },
    {
      question: "Gilt in Heppenheim eine besondere Regelung zur Schnee- und Eisglätte-Beseitigung?",
      answer:
        "In Heppenheim gelten die Vorgaben der hessischen Landesgesetzgebung: Grundstückseigentümer müssen angrenzende Gehwege werktags ab 7:00 Uhr und sonn- und feiertags ab 8:00 Uhr von Schnee und Eis befreien. Besonders auf den steilen Zugängen in Kirschhausen oder den Altstadt-Gassen müssen rutschsichere Verhältnisse gewährleistet sein. Wir übernehmen das zuverlässig für Sie.",
    },
  ],
  lorsch: [
    {
      question: "Betreut Traumplatz auch Grünanlagen rund um das UNESCO-Welterbe Kloster Lorsch?",
      answer:
        "Wir sind in Lorsch und im gesamten Stadtgebiet – einschließlich des Ortsteils Seehof – tätig. Die Nähe zum Kloster Lorsch und die historische Prägung des Stadtbilds stellen besondere Anforderungen an Sauberkeit und Pflege im öffentlichen Raum. Wir arbeiten mit entsprechender Sorgfalt und diskret.",
    },
    {
      question: "Wie schnell ist Traumplatz in Lorsch vor Ort?",
      answer:
        "Von unserem Standort in Bensheim sind wir in ca. 8–10 Minuten in Lorsch. Das ermöglicht uns schnelle Reaktionszeiten, auch für kurzfristige Aufträge. Im Winter stellen wir sicher, dass Räum- und Streudienste zeitgerecht erfolgen, bevor der morgendliche Berufsverkehr beginnt.",
    },
    {
      question: "Welche spezifischen Gartenarbeiten sind in Lorsch besonders gefragt?",
      answer:
        "In Lorsch verzeichnen wir besonders hohe Nachfrage nach Laubbeseitigung im Herbst (der alte Baumbestand im Stadtgebiet ist erheblich), Rasenpflege für Einfamilienhäuser im Ried-Rand sowie Heckenschnitt und Beetpflege für Wohnanlagen. Wir erstellen gerne einen saisonalen Pflegeplan, der auf Ihren Garten abgestimmt ist.",
    },
    {
      question: "Übernimmt Traumplatz auch Hausmeisterdienste für Gewerbeobjekte in Lorsch?",
      answer:
        "Ja, wir betreuen in Lorsch sowohl private als auch gewerbliche Objekte. Für Gewerbekunden bieten wir Instandhaltungsverträge an, die Hausmeisterdienste, Grünpflege und Winterdienst kombinieren. Ein fester Ansprechpartner und regelmäßige Protokolle sind dabei selbstverständlich.",
    },
  ],
  einhausen: [
    {
      question: "Ist Traumplatz auch in Einhausen und im Ortsteil Klein-Hausen aktiv?",
      answer:
        "Ja, wir betreuen Kunden in der gesamten Gemeinde Einhausen, einschließlich Klein-Hausen. Die ländlich geprägte Gemeinde im Ried hat ihre eigenen Besonderheiten – viele Gärten haben schwere Riedböden, die eine angepasste Pflege und Bearbeitung erfordern. Unsere Mitarbeiter kennen diese Bodenbeschaffenheit gut.",
    },
    {
      question: "Welche Bodenbesonderheiten gibt es in Einhausen, die die Gartenpflege beeinflussen?",
      answer:
        "Einhausen liegt im Hessischen Ried, einem Gebiet mit charakteristisch schweren, oft lehm- und tonhaltigen Böden. Diese speichern Feuchtigkeit, neigen aber auch zu Staunässe. Wir berücksichtigen das bei der Rasenpflege (Vertikutieren, belüften statt verdichten), der Beetgestaltung und bei der Auswahl geeigneter Pflanzen.",
    },
    {
      question: "Wie weit ist Traumplatz von Einhausen entfernt?",
      answer:
        "Von Bensheim nach Einhausen sind es ca. 10 km, eine Fahrzeit von rund 12–15 Minuten. Wir kombinieren Einhausen in der Regel mit benachbarten Orten und halten die Anfahrtspauschale so gering wie möglich. Festpreisangebote für regelmäßige Pflegeverträge sind möglich.",
    },
    {
      question: "Bietet Traumplatz in Einhausen auch Winterdienst an?",
      answer:
        "Ja, auch in Einhausen übernehmen wir den Winterdienst für Privathaushalte und Gewerbe. Das Ried liegt klimatisch etwas anders als die Bergstraße – Nebel und Eisregen sind im Winter häufiger. Wir sind entsprechend vorbereitet und dokumentieren alle Einsätze für Ihre rechtliche Absicherung.",
    },
  ],
  "alsbach-haehnlein": [
    {
      question: "Betreut Traumplatz Kunden in beiden Ortsteilen Alsbach und Hähnlein?",
      answer:
        "Ja, wir sind in beiden Ortsteilen der Doppelgemeinde aktiv – sowohl in Alsbach am Hang der Bergstraße als auch in Hähnlein im flacheren Riedbereich sowie in der Sandwiese. Die unterschiedliche Topografie beider Ortsteile spiegelt sich in der Gartenpflege wider: Hanglagen erfordern anderes Gerät und andere Techniken als ebene Riedgärten.",
    },
    {
      question: "Wie ist die Anfahrt nach Alsbach-Hähnlein von Bensheim aus?",
      answer:
        "Von Bensheim nach Alsbach-Hähnlein sind es ca. 12 km nördlich, die Fahrzeit beträgt etwa 15 Minuten über die B3 oder die A5. Wir integrieren Alsbach-Hähnlein in unsere Nordroute zusammen mit Seeheim-Jugenheim, sodass effiziente Einsätze ohne lange Wartezeiten möglich sind.",
    },
    {
      question: "Gibt es in Alsbach-Hähnlein Besonderheiten beim Baumschnitt oder der Heckengestaltung?",
      answer:
        "Rund um Schloss Alsbach und in den Hanglagen gibt es viele ältere Bäume und gewachsene Hecken. Diese erfordern einen behutsamen Formschnitt, der die Gehölze nicht schädigt und gleichzeitig ihre natürliche Form bewahrt. Wir halten dabei die gesetzlichen Schnittzeiten gemäß Bundesnaturschutzgesetz ein.",
    },
    {
      question: "Übernimmt Traumplatz in Alsbach-Hähnlein auch die Schneeräumung bei plötzlichem Wintereinbruch?",
      answer:
        "Ja. Gerade die Hanglagen in Alsbach können bei Schneefall und Eisregen schnell gefährlich werden. Wir haben 24/7-Bereitschaft und rücken bei gemeldeten Wetterwarnungen präventiv aus. Alle Einsätze werden mit Uhrzeit und Maßnahme dokumentiert, was Sie als Eigentümer bei der Haftung schützt.",
    },
  ],
  zwingenberg: [
    {
      question: "Ist Traumplatz auch im Ortsteil Rodau und in der Altstadt von Zwingenberg aktiv?",
      answer:
        "Ja, wir betreuen Kunden in der gesamten Bergstadt Zwingenberg – sowohl in der historischen Altstadt mit ihren charmanten Gärten und Hofanlagen als auch im Ortsteil Rodau. Die engen Altstadtgassen sind für uns kein Hindernis, da wir bei Bedarf handgeführtes Gerät einsetzen.",
    },
    {
      question: "Welche Besonderheiten hat die Gartenpflege in Zwingenberg an der Bergstraße?",
      answer:
        "Zwingenberg liegt an den Ausläufern des Odenwalds mit charakteristischen Hanglagen und teilweise Lössboden. Viele Gärten haben Weinreben oder Obstbäume, die fachgerechten Schnitt und saisonale Pflege benötigen. Die Allergiker-Saison entlang der Bergstraße beginnt aufgrund des milden Klimas früher als im Landesinneren – wir passen unsere Mähpläne darauf ab.",
    },
    {
      question: "Wie weit ist Traumplatz von Zwingenberg entfernt?",
      answer:
        "Zwingenberg liegt nur ca. 7 km nördlich von unserem Standort in Bensheim – Fahrzeit ca. 8–10 Minuten. Das ermöglicht kurze Reaktionszeiten und häufige Besuche ohne hohe Anfahrtskosten. Regelmäßige Pflegeverträge rechnen sich daher besonders in Zwingenberg.",
    },
    {
      question: "Betreut Traumplatz auch größere Wohnanlagen und Eigentümergemeinschaften in Zwingenberg?",
      answer:
        "Ja, neben Privatkunden betreuen wir in Zwingenberg auch WEGs und Hausverwaltungen. Unser Angebot umfasst Grünpflege, Treppenhausreinigung, Winterdienst und Hausmeisterleistungen aus einer Hand. Auf Wunsch erstellen wir individuelle Jahresverträge mit transparenten Leistungsnachweisen.",
    },
  ],
  darmstadt: [
    {
      question: "In welchen Stadtteilen Darmstadts ist Traumplatz aktiv?",
      answer:
        "Wir betreuen Kunden in allen Darmstädter Stadtteilen – von Arheilgen und Kranichstein im Norden über Bessungen, Martinsviertel und Johannesviertel in der Stadtmitte bis nach Eberstadt und Wixhausen. Auch die Heimstättensiedlung und weitere Wohngebiete gehören zu unserem Einzugsgebiet. Als Großstadt mit 160.000 Einwohnern hat Darmstadt vielfältige Anforderungen, auf die wir flexibel eingehen.",
    },
    {
      question: "Wie ist die Anfahrt von Traumplatz nach Darmstadt?",
      answer:
        "Von unserem Standort in Bensheim nach Darmstadt sind es ca. 20 km, was bei normaler Verkehrslage etwa 20–25 Minuten Fahrzeit entspricht. Wir planen Darmstadt-Einsätze in Routenblöcken, um Fahrwege zu optimieren und Ihnen günstige Konditionen bieten zu können. Für regelmäßige Aufträge empfehlen wir Serviceverträge mit Festpreisen.",
    },
    {
      question: "Bietet Traumplatz in der Wissenschaftsstadt Darmstadt auch Grünanlagenpflege für Gewerbeobjekte an?",
      answer:
        "Ja, wir betreuen in Darmstadt Bürokomplexe, Arztpraxen, Wohnanlagen und Institutionen. Die hohe Dichte an Forschungseinrichtungen und Technologieunternehmen schafft Bedarf an gepflegten Außenanlagen als Visitenkarte. Wir bieten maßgeschneiderte Servicepakete für gewerbliche Objekte jeder Größe.",
    },
    {
      question: "Wie ist die Schneeräumpflicht in Darmstadt geregelt?",
      answer:
        "In Darmstadt gilt die Streupflicht nach hessischem Kommunalrecht: Gehwege müssen werktags ab 7:00 Uhr, sonn- und feiertags ab 8:00 Uhr geräumt und gestreut sein. Bei anhaltendem Schneefall ist die Räumung mehrfach täglich erforderlich. Darmstadts viel befahrene Innenstadt hat besonders strenge Kontrollen – wir dokumentieren jeden unserer Einsätze lückenlos.",
    },
  ],
  weinheim: [
    {
      question: "Betreut Traumplatz alle Stadtteile Weinheims?",
      answer:
        "Ja, wir sind in ganz Weinheim aktiv – von der Kernstadt über Hohensachsen und Lützelsachsen bis in die Außenorte Oberflockenbach, Ritschweier, Sulzbach, Rippenweier und Ofling. Die vielen Hanglagen im Weinheimer Tal und die berühmten Parkanlagen (Exotenwald, Schlossgarten) kennen wir gut.",
    },
    {
      question: "Wie weit ist Traumplatz von Weinheim entfernt?",
      answer:
        "Von Bensheim nach Weinheim sind es ca. 15 km südlich, meist 15–20 Minuten Fahrzeit über die B3. Da Weinheim direkt an der Bergstraße liegt, integrieren wir Aufträge dort effizient in unsere Südroute. Die Anfahrtskosten halten sich dadurch in engen Grenzen.",
    },
    {
      question: "Hat Traumplatz Erfahrung mit der Pflege von Gartenanlagen in der Weinheimer Zwei-Burgen-Stadt?",
      answer:
        "Ja. Weinheim mit dem Exotenwald und dem Schlosspark hat eine besondere Gartenkultur. Viele Privatgärten orientieren sich an diesem dendrologischen Erbe mit seltenen Gehölzen und mediterranen Pflanzen. Unser Team ist im Umgang mit anspruchsvollen Bepflanzungen erfahren und berät Sie gerne zur artgerechten Pflege.",
    },
    {
      question: "Gilt für Weinheimer Grundstückseigentümer eine besondere Streupflicht-Regelung?",
      answer:
        "Weinheim liegt in Baden-Württemberg (Rhein-Neckar-Kreis), weshalb hier das Gemeinderecht Baden-Württembergs gilt. Die Räum- und Streupflicht ist ähnlich geregelt wie in Hessen: werktags ab 7:00 Uhr, sonn- und feiertags ab 8:00 Uhr bis 21:00 Uhr. Wir kennen die lokalen Anforderungen und dokumentieren alle Einsätze rechtssicher.",
    },
  ],
  viernheim: [
    {
      question: "In welchen Viernheimer Stadtteilen ist Traumplatz tätig?",
      answer:
        "Wir arbeiten in der gesamten Stadt Viernheim – in der Innenstadt sowie in den Wohngebieten West und Ost. Viernheim als größte Stadt im Kreis Bergstraße hat eine hohe Dichte an Wohnanlagen und Gewerbeobjekten, für die wir sowohl Grünpflege als auch Hausmeisterdienste anbieten.",
    },
    {
      question: "Wie ist die Anfahrt von Bensheim nach Viernheim?",
      answer:
        "Viernheim liegt ca. 18 km westlich von Bensheim, in der Metropolregion Rhein-Neckar an der Grenze zu Mannheim. Die Fahrzeit beträgt rund 20 Minuten. Durch die gute Anbindung über die A659 integrieren wir Viernheim regelmäßig in unsere Westroute.",
    },
    {
      question: "Bietet Traumplatz in Viernheim Leistungen für Wohnanlagen und WEGs an?",
      answer:
        "Ja, Viernheim hat viele Wohnanlagenkomplexe aus den 1970er und 1980er Jahren mit ausgedehnten Grünflächen. Wir bieten Eigentümergemeinschaften und Hausverwaltungen umfassende Leistungspakete: Rasenpflege, Heckenschnitt, Treppenhausreinigung und Winterdienst aus einer Hand mit transparenter Abrechnung.",
    },
    {
      question: "Gilt in Viernheim (Hessen) hessisches Streupflicht-Recht?",
      answer:
        "Ja, Viernheim liegt in Hessen und unterliegt dem hessischen Kommunalrecht. Grundstückseigentümer müssen angrenzende Gehwege werktags ab 7:00 Uhr und sonn- sowie feiertags ab 8:00 Uhr winterfest halten. Wir übernehmen diese Pflicht mit lückenloser Dokumentation und 24/7-Bereitschaft im Winter.",
    },
  ],
  pfungstadt: [
    {
      question: "Betreut Traumplatz auch die Pfungstädter Stadtteile Eschollbrücken, Eich und Hahn?",
      answer:
        "Ja, wir sind in allen Pfungstädter Ortsteilen tätig – in der Kernstadt sowie in Eschollbrücken, Eich und Hahn. Pfungstadt liegt im Übergang von der Bergstraße zum Hessischen Ried, was vielfältige Gartentypen mit sich bringt: von Ried-Gemüsegärten bis zu Bergstraßen-Hanglagen.",
    },
    {
      question: "Wie ist Pfungstadt von Bensheim aus erreichbar?",
      answer:
        "Pfungstadt liegt ca. 15 km nördlich von Bensheim, Fahrzeit ca. 20 Minuten über die B3 oder A5. Wir kombinieren Pfungstadt often mit Seeheim-Jugenheim und Darmstadt in einer Nordroute, was die Anfahrtskosten für unsere Kunden senkt.",
    },
    {
      question: "Hat das Pfungstädter Moor Einfluss auf die Gartengestaltung und -pflege?",
      answer:
        "Das Pfungstädter Moor prägt die lokale Bodenfeuchtigkeit und das Mikroklima. Viele Gärten in der Umgebung haben einen erhöhten Grundwasserspiegel, was Rasenpflege (insbesondere Belüftung und Drainage) und Pflanzenwahl beeinflusst. Wir berücksichtigen diese Standortbedingungen bei unseren Pflegeempfehlungen.",
    },
    {
      question: "Welche Winterdienstleistungen bietet Traumplatz in Pfungstadt an?",
      answer:
        "Wir bieten in Pfungstadt umfassenden Winterdienst: Schneeräumung von Gehwegen, Zufahrten und Parkplätzen sowie Streudienst mit umweltfreundlichem Abstumpfungsmittel. Für Gewerbekunden mit Kundenparkplätzen übernehmen wir besonders früh – damit Ihr Geschäfts- oder Praxisbetrieb ungestört beginnen kann.",
    },
  ],
  "seeheim-jugenheim": [
    {
      question: "Ist Traumplatz in allen Ortsteilen von Seeheim-Jugenheim tätig?",
      answer:
        "Ja, wir betreuen alle sechs Ortsteile der Gemeinde: Seeheim, Jugenheim, Balkhausen, Malchen, Ober-Beerbach und Steigerts. Seeheim-Jugenheim ist geprägt von herrschaftlichen Villen, großzügigen Parkanlagen und dem Luftkurortes-Charakter – unsere Gartenpflege erfüllt entsprechend hohe Ansprüche.",
    },
    {
      question: "Wie weit ist Traumplatz von Seeheim-Jugenheim entfernt?",
      answer:
        "Von Bensheim nach Seeheim-Jugenheim sind es ca. 15 km nördlich entlang der Bergstraße, Fahrzeit ca. 15–20 Minuten. Wir integrieren Seeheim-Jugenheim in unsere Nordroute und bieten dort regelmäßige Gartenpflegetermine zu attraktiven Konditionen an.",
    },
    {
      question: "Hat Traumplatz Erfahrung mit der Pflege aufwändiger Villen- und Parkanlagen?",
      answer:
        "Ja. Seeheim-Jugenheim ist bekannt für seine repräsentativen Anwesen mit altem Baumbestand, Rosenbeeten, Rhododendron-Pflanzungen und gestalteten Parkanlagen. Unser Team verfügt über die notwendige Erfahrung und das passende Gerät, um auch aufwändige Gartenarchitekturen professionell zu pflegen.",
    },
    {
      question: "Bietet Traumplatz in Seeheim-Jugenheim auch Laub- und Herbstpflege an?",
      answer:
        "Herbstpflege und Laubbeseitigung sind in Seeheim-Jugenheim durch den alten Baumbestand besonders gefragt. Wir bieten saisonale Pakete an: Laubblasen, Harken, Laubabtransport sowie Rasennachsaat und Wintervorbereitung der Beete. Rufen Sie uns an, um Ihren Herbstpflegetermin frühzeitig zu sichern.",
    },
  ],
  worms: [
    {
      question: "In welchen Wormser Stadtteilen und Stadtbezirken ist Traumplatz tätig?",
      answer:
        "Wir betreuen Kunden in der gesamten Stadt Worms – sowohl in der historischen Innenstadt der Nibelungenstadt als auch in den Stadtteilen Herrnsheim, Hochheim, Horchheim, Pfeddersheim, Pfiffligheim, Neuhausen, Abenheim, Leiselheim, Ibersheim, Rheindürkheim, Weinsheim und Wiesoppenheim. Die Rheinnähe und die Weinberg-Kultur prägen das Stadtbild und die Gärten.",
    },
    {
      question: "Wie weit ist Traumplatz von Worms entfernt und lohnt sich ein Servicevertrag?",
      answer:
        "Worms liegt ca. 25 km westlich von Bensheim, Fahrzeit über die A67 ca. 25–30 Minuten. Bei regelmäßigen Pflegeverträgen optimieren wir unsere Touren so, dass die Anfahrtskosten für Sie minimal bleiben. Jahresverträge für Gartenhegearbeiten oder Winterdienst amortisieren sich in Worms besonders gut.",
    },
    {
      question: "Gilt in Worms (Rheinland-Pfalz) eine andere Schneeräumpflicht als in Hessen?",
      answer:
        "Ja, Worms liegt in Rheinland-Pfalz, wo das Landesrecht und die Wormser Stadtsatzung gelten. Grundstückseigentümer müssen angrenzende Gehwege werktags ab 7:00 Uhr und sonn- sowie feiertags ab 8:30 Uhr schnee- und eisfrei halten – in der Regel bis 20:00 Uhr. Bei Gefahr durch Glatteis muss sofort gestreut werden. Wir kennen die spezifischen Anforderungen und übernehmen die Räumpflicht rechtssicher.",
    },
    {
      question: "Hat die Rheinlage Einfluss auf den Winterdienst in Worms?",
      answer:
        "Ja, die Lage am Rhein bedeutet hohes Nebelaufkommen und häufige Glatteis-Situationen, besonders in den Monaten November bis März. Eisregen, der sich auf Gehwegen als gefährliche Schicht absetzt, ist in Worms häufiger als an der Bergstraße. Wir reagieren frühzeitig auf Glättemeldungen und streuen präventiv.",
    },
  ],
};

// ─── Service-FAQ-Pool (FR-007, FR-007a) — 4 Servicesets ─────────────────────
// Dienstleistungsspezifische FAQs: Leistungsumfang, Häufigkeit, Saisonalität.
// Mindestens 4 FAQs pro Service. Echte Nutzerfragen mit Long-Tail-Keywords.
export const serviceFAQs: Record<string, FAQ[]> = {
  gartenpflege: [
    {
      question: "Was ist alles in der professionellen Gartenpflege von Traumplatz enthalten?",
      answer:
        "Unser Gartenpflegeservice umfasst das gesamte Jahresprogramm: Rasenmähen und Vertikutieren, Heckenschnitt und Gehölzpflege, Beetpflege und Unkrautentfernung, Laubbeseitigung im Herbst, Wintervorbereitung der Beete sowie Bewässerungs- und Düngeberatung. Auf Wunsch übernehmen wir auch Neupflanzungen, Rindenmulch und die Entsorgung des Grünguts. Sie legen fest, welche Leistungen Sie regelmäßig benötigen – wir erstellen einen maßgeschneiderten Pflegeplan.",
    },
    {
      question: "Wie oft sollte eine professionelle Gartenpflege durchgeführt werden?",
      answer:
        "In der Hauptsaison (April bis Oktober) empfehlen wir Besuche alle 1–2 Wochen, da Rasen und Gehölze in dieser Zeit schnell wachsen. Im Frühjahr und Herbst reichen oft 2–3 Wochen-Intervalle. Im Winter beschränken sich die Arbeiten auf Baumschnitt, Rückschnitt und Winterschutz-Maßnahmen. Den genauen Rhythmus stimmen wir gemeinsam mit Ihnen auf Ihren Garten und Ihr Budget ab.",
    },
    {
      question: "Wann ist der optimale Zeitpunkt für den Heckenschnitt?",
      answer:
        "Der Heckenschnitt sollte zweimal jährlich erfolgen: Der erste Schnitt im Frühjahr (März/April) vor dem neuen Austrieb formt die Grundstruktur; der zweite Schnitt im Spätsommer (August/September) hält die Form bis zum Winterende. Beachten Sie: Das Bundesnaturschutzgesetz untersagt zwischen dem 1. März und dem 30. September starke Rückschnitte von Sträuchern und Hecken zum Schutz brütender Vögel. Leichte Formschnitte sind jedoch ganzjährig erlaubt.",
    },
    {
      question: "Kümmert sich Traumplatz auch um die Entsorgung des Schnittguts und Laubes?",
      answer:
        "Ja, wir entsorgen alles anfallende Grüngut nach Absprache. Rasenschnitt wird entweder auf der Fläche als natürlicher Dünger belassen (Mulchverfahren) oder abtransportiert. Ast- und Heckenschnitt sowie Laub werden gesammelt und zur lokalen Kompostieranlage oder einem Bioenergiehof gefahren. Wir stellen nach Bedarf auch Laubbehälter oder -säcke zur Verfügung.",
    },
  ],
  hausmeisterservice: [
    {
      question: "Welche Leistungen sind im Hausmeisterservice von Traumplatz inbegriffen?",
      answer:
        "Unser Hausmeisterservice deckt ein breites Spektrum ab: Kleinreparaturen (Leuchtmittelwechsel, Türjustage, Silikon-Erneuerung), Treppenhausreinigung, Mülltonnenmanagement, Schlüsselverwaltung, Grünpflege und Winterdienst, Koordination von Handwerkern sowie die Übernahme der Verkehrssicherungspflicht. Auf Wunsch erstellen wir monatliche Leistungsprotokolle, die Sie direkt an Ihre Hausverwaltung weitergeben können.",
    },
    {
      question: "Kann Traumplatz die Hausmeisterleistungen für eine Wohnanlage oder WEG übernehmen?",
      answer:
        "Ja, wir sind spezialisiert auf die Betreuung von Eigentümergemeinschaften und Wohnanlagen jeder Größe. Als Ihr fester Hausmeister sind wir regelmäßig vor Ort, beseitigen Mängel zeitnah und koordinieren bei Bedarf Fachhandwerker. Sie sparen die Kosten für einen eigenen Hausmeister und profitieren von unserer professionellen Dokumentation und transparenten Abrechnung.",
    },
    {
      question: "Wie schnell reagiert Traumplatz bei kleineren Schäden oder Mängeln?",
      answer:
        "Bei Kleinreparaturen, die keine Handwerker erfordern, sind wir in der Regel innerhalb von 24 bis 48 Stunden vor Ort. Bei Notfällen wie Wasserrohrbrüchen oder Sturmschäden reagieren wir sofort und koordinieren umgehend den zuständigen Notfalldienst. Unser Ziel ist es, Ausfallzeiten und Schäden für Ihre Immobilie auf ein Minimum zu reduzieren.",
    },
    {
      question: "Bietet Traumplatz auch Hausmeisterverträge mit fester monatlicher Pauschale an?",
      answer:
        "Ja, wir bieten Jahres- und Dauervereinbarungen mit monatlicher Pauschale an. Diese umfassen eine vereinbarte Anzahl von Besuchen pro Monat sowie einen definierten Leistungskatalog. Sonderleistungen werden transparent nach Aufwand abgerechnet. So haben Sie volle Kostenkontrolle und einen verlässlichen Ansprechpartner das ganze Jahr über.",
    },
  ],
  gebaeudereinigung: [
    {
      question: "Welche Gebäude und Bereiche reinigt Traumplatz?",
      answer:
        "Wir reinigen Bürogebäude, Praxen, Treppenhäuser, Gemeinschaftsflächen in Wohnanlagen, Schaufenster und Glasfassaden, Tiefgaragen sowie Dachrinnen und Außenfassaden. Sowohl Unterhaltsreinigung (regelmäßige Basisreinigung) als auch Grundreinigung (intensive Einmalreinigung, z. B. nach Bauarbeiten oder zum Jahresbeginn) gehören zu unserem Angebot.",
    },
    {
      question: "Wie häufig sollte die Gebäudereinigung durchgeführt werden?",
      answer:
        "Treppenhäuser und Flure in Wohnanlagen werden am häufigsten gebucht: ein- bis zweimal wöchentlich. Büroreinigung erfolgt in der Regel täglich oder mehrmals wöchentlich je nach Nutzungsintensität. Fenster- und Glasreinigung empfehlen wir 2–4 Mal im Jahr für Privathaushalte, alle 4–8 Wochen für Gewerbeobjekte. Den optimalen Rhythmus ermitteln wir bei einer kostenlosen Begehung.",
    },
    {
      question: "Verwendet Traumplatz umweltfreundliche Reinigungsmittel?",
      answer:
        "Ja, wir setzen auf biologisch abbaubare, REACH-konforme Reinigungsmittel, die Flächen und Materialien schonen und gleichzeitig gründlich reinigen. Auf besonderen Wunsch setzen wir ausschließlich auf ECO-zertifizierte Produkte ein. Aggressive lösemittelhaltige Mittel verwenden wir nur dort, wo dies technisch unumgänglich ist – und informieren Sie vorab.",
    },
    {
      question: "Kann Traumplatz auch einmalige Grundreinigungen und Bauendreinigungen durchführen?",
      answer:
        "Ja, Grundreinigungen und Bauendreinigungen gehören zu unserem Angebot für Einmalanfragen. Wir reinigen nach Renovierungen, Umzügen oder Baufertigstellungen – inklusive Entfernung von Farb- und Putzspritzern, Fensterputz nach dem Einzug und Beseitigung von Baustaubrückständen. Anfragen bitte mit einem kurzen Zeitfenster und der ungefähren Objektgröße – wir erstellen schnell ein Angebot.",
    },
  ],
  winterdienst: [
    {
      question: "Wie funktioniert der Winterdienst von Traumplatz und wann rückt das Team aus?",
      answer:
        "Wir überwachen täglich die Wettervorhersage und Meldungen des Deutschen Wetterdienstes. Sobald Schneefall oder Glatteisbildung prognostiziert sind, rücken wir präventiv aus – meist vor 7:00 Uhr werktags, damit Ihre Wege und Einfahrten zur Hauptverkehrszeit sicher sind. Wir räumen Gehwege, Zufahrten, Treppenstufen und Parkplätze und streuen mit umweltfreundlichem Abstumpfungsmittel.",
    },
    {
      question: "Was genau übernimmt Traumplatz bei der Schneeräumung und Streupflicht?",
      answer:
        "Wir übernehmen die gesamte Verkehrssicherungspflicht für das von uns betreute Areal: Schneeräumung von Gehwegen und Fußwegen, Winterdienst auf Zufahrten und Kfz-Stellplätzen, umweltfreundliches Streuen mit Splitt oder Sole, sowie die lückenlose Dokumentation jedes Einsatzes mit Datum, Uhrzeit und Maßnahme. Diese Protokolle schützen Sie bei haftungsrechtlichen Fragen.",
    },
    {
      question: "Ist Traumplatz auch bei extremem Winterwetter und Dauerschneefall erreichbar?",
      answer:
        "Ja, wir haben 24/7-Bereitschaft in den Wintermonaten. Auch bei Dauerschneefall, Winterstürmen oder wiederholtem Gefrieren nach Räumungen rücken wir erneut aus. Unsere Fahrzeuge und Geräte sind vollständig winterfest ausgestattet. Notfallanfragen nehmen wir rund um die Uhr entgegen.",
    },
    {
      question: "Welche umweltfreundlichen Streumittel setzt Traumplatz ein?",
      answer:
        "Wir verwenden vorrangig Granit- oder Kalksteinsplitt sowie Solelösungen, die ohne Auftausalz wirken und Vegetation, Pflaster und Betonoberflächen schonen. Auftausalz (NaCl) setzen wir nur auf ausdrücklichen Kundenwunsch oder in besonders kritischen Bereichen ein, da es Böden versalzt und Wurzeln schädigt. Wir beraten Sie zur besten Lösung für Ihre individuelle Lage.",
    },
  ],
};

// ─── Helper: Kombinierte City+Service-FAQs (FR-007) ──────────────────────────
/**
 * Gibt die kombinierte FAQ-Liste für eine Stadtseite zurück.
 * Mindestens 2 aus dem City-Pool + mindestens 2 aus dem Service-Pool.
 * Gibt leeres Array zurück bei unbekannten Slugs (graceful degradation).
 */
export function getCityServiceFAQs(citySlug: string, serviceSlug: string): FAQ[] {
  const city = cityFAQs[citySlug] ?? [];
  const service = serviceFAQs[serviceSlug] ?? [];
  return [...city, ...service];
}

// ─── Helper: Haversine-Abstandsberechnung (FR-009) ───────────────────────────
/** Berechnet den Großkreis-Abstand in km zwischen zwei GPS-Koordinaten. */
function haversineDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371; // Erdradius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ─── Helper: Nächstgelegene Städte (FR-009) ───────────────────────────────────
/**
 * Gibt die `count` geographisch nächstgelegenen Städte zur übergebenen Stadt zurück,
 * sortiert aufsteigend nach Haversine-Abstand.
 */
export function getNearestCities(citySlug: string, count: number): City[] {
  const target = cities.find((c) => c.slug === citySlug);
  if (!target) return [];
  return cities
    .filter((c) => c.slug !== citySlug)
    .map((c) => ({
      city: c,
      distance: haversineDistance(
        target.coordinates.lat,
        target.coordinates.lng,
        c.coordinates.lat,
        c.coordinates.lng,
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count)
    .map((item) => item.city);
}


