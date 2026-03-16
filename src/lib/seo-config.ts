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
      "Die UNESCO-Welterbestadt Lorsch mit dem berühmten Kloster Lorsch ist ein wichtiger Standort in unserem Einzugsgebiet. Wir pflegen hier Gärten und Grünanlagen mit besonderer Sorgfalt.",
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
      "Die Zwei-Burgen-Stadt Weinheim an der Bergstraße bietet mit dem Exotenwald und dem Schlossgarten besondere Grünanlagen. Wir kennen die Region bestens.",
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
      "Die Stadt Pfungstadt liegt zwischen Bergstraße und Ried. Mit dem Pfungstädter Moor und ausgedehnten Grünflächen ein ideales Arbeitsgebiet für unsere Gartenpflege.",
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
      "Die Luftkurortgemeinde Seeheim-Jugenheim besticht durch herrschaftliche Villen und gepflegte Parkanlagen an der Bergstraße. Wir pflegen hier Gärten mit Tradition.",
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

// SEO Description generieren
export function generateSeoDescription(service: Service, city: City): string {
  return `Professionelle ${service.name} in ${city.name} und Umgebung (${city.districts.slice(0, 3).join(", ")}). ${city.distanceFromHQ === 0 ? "Direkt vor Ort" : `Nur ${city.distanceFromHQ} km entfernt`}. Jetzt anfragen!`;
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
