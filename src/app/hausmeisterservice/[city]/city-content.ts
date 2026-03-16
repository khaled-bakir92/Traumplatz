import {
  Wrench,
  Sparkles,
  TreeDeciduous,
  Snowflake,
  Key,
  Settings,
  Shield,
  Clock,
  Users,
  Building2,
  Leaf,
  MapPin,
  Phone,
  CheckCircle,
  Home,
  Heart,
  Award,
  Target,
  Lightbulb,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface CityService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityStat {
  value: string;
  label: string;
}

export interface CityTestimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface CityPageContent {
  slug: string;
  name: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSubheadline: string;
  introTitle: string;
  introText: string;
  localBenefits: string[];
  services: CityService[];
  faqs: CityFAQ[];
  stats: CityStat[];
  testimonial?: CityTestimonial;
  ctaTitle: string;
  ctaSubtitle: string;
  uniqueSellingPoints: string[];
}

export const cityContent: Record<string, CityPageContent> = {
  // ============================================
  // BENSHEIM - Headquarters Premium
  // ============================================
  bensheim: {
    slug: "bensheim",
    name: "Bensheim",
    heroHeadline: "Hausmeisterservice direkt aus",
    heroHighlight: "Bensheim",
    heroSubheadline:
      "Als Ihr lokaler Partner mit Sitz direkt in Bensheim sind wir in wenigen Minuten bei Ihnen. Persönlich, zuverlässig, aus der Nachbarschaft.",
    introTitle: "Ihr Hausmeister aus der Nachbarschaft",
    introText:
      "Traumplatz hat seinen Hauptsitz direkt hier in Bensheim. Das bedeutet für Sie: Kurze Wege, schnelle Reaktionszeiten und ein Team, das die Stadt und ihre Bewohner kennt. Ob in Auerbach, Schönberg, Zell oder im Zentrum - wir sind Ihr direkter Ansprechpartner für alle Hausmeisteraufgaben.",
    localBenefits: [
      "Firmensitz direkt in Bensheim - Ihr lokaler Partner",
      "Reaktionszeit unter 30 Minuten im Notfall",
      "Persönliche Betreuung durch feste Ansprechpartner",
      "Kenntnis aller Ortsteile und lokalen Gegebenheiten",
    ],
    services: [
      {
        icon: Wrench,
        title: "Kleinreparaturen",
        description:
          "Schnelle Behebung von Defekten an Türen, Fenstern und Installationen",
      },
      {
        icon: Sparkles,
        title: "Treppenreinigung",
        description: "Regelmäßige Reinigung für ein gepflegtes Erscheinungsbild",
      },
      {
        icon: TreeDeciduous,
        title: "Grünflächenpflege",
        description: "Rasenmähen, Heckenschnitt und saisonale Bepflanzung",
      },
      {
        icon: Snowflake,
        title: "Winterdienst",
        description: "Zuverlässige Schneeräumung und Streudienst",
      },
      {
        icon: Key,
        title: "Schlüsselverwaltung",
        description: "Sichere Verwaltung und Koordination von Schlüsseln",
      },
      {
        icon: Settings,
        title: "Technische Wartung",
        description: "Regelmäßige Kontrolle aller technischen Anlagen",
      },
    ],
    faqs: [
      {
        question: "Wie schnell können Sie in Bensheim vor Ort sein?",
        answer:
          "Da unser Firmensitz direkt in Bensheim liegt, sind wir in der Regel innerhalb von 15-30 Minuten bei Ihnen. Bei Notfällen auch schneller.",
      },
      {
        question: "Betreuen Sie auch Objekte in den Ortsteilen wie Auerbach?",
        answer:
          "Ja, wir betreuen Objekte in allen Bensheimer Ortsteilen: Auerbach, Schönberg, Zell, Gronau, Hochstädten, Langwaden, Schwanheim, Wilmshausen und Fehlheim.",
      },
      {
        question: "Bieten Sie auch Notdienst am Wochenende an?",
        answer:
          "Ja, als lokaler Anbieter bieten wir einen 24/7 Notdienst. Sie erreichen uns jederzeit unter unserer Notfallnummer.",
      },
      {
        question: "Kann ich einen festen Hausmeister für mein Objekt bekommen?",
        answer:
          "Absolut! Bei Traumplatz hat jedes Objekt einen festen Ansprechpartner, der Ihre Immobilie und deren Besonderheiten kennt.",
      },
    ],
    stats: [
      { value: "15+", label: "Jahre Erfahrung" },
      { value: "500+", label: "Zufriedene Kunden" },
      { value: "24/7", label: "Notdienst" },
      { value: "< 30 Min", label: "Reaktionszeit" },
    ],
    testimonial: {
      quote:
        "Traumplatz ist wirklich aus der Nachbarschaft - das merkt man. Schnell, unkompliziert und immer freundlich.",
      author: "Familie Schneider",
      location: "Bensheim-Auerbach",
      rating: 5,
    },
    ctaTitle: "Ihr Hausmeister wartet schon um die Ecke",
    ctaSubtitle:
      "Vereinbaren Sie jetzt ein kostenloses Beratungsgespräch - direkt hier in Bensheim.",
    uniqueSellingPoints: [
      "Firmensitz in Bensheim",
      "Lokale Expertise",
      "Schnellste Reaktionszeiten",
    ],
  },

  // ============================================
  // HEPPENHEIM - Historischer Charme
  // ============================================
  heppenheim: {
    slug: "heppenheim",
    name: "Heppenheim",
    heroHeadline: "Hausmeisterservice für die",
    heroHighlight: "Kreisstadt Heppenheim",
    heroSubheadline:
      "Von der historischen Altstadt bis zur Starkenburg - wir pflegen Ihre Immobilie mit der gleichen Sorgfalt wie Heppenheim sein Erbe.",
    introTitle: "Tradition trifft moderne Objektbetreuung",
    introText:
      "Heppenheim, die Kreisstadt an der Bergstraße, verbindet historischen Charme mit modernem Leben. Unsere Hausmeisterservices sind perfekt auf die besonderen Anforderungen der Stadt abgestimmt - von denkmalgeschützten Fachwerkhäusern in der Altstadt bis zu modernen Wohnanlagen in den Außenbezirken.",
    localBenefits: [
      "Nur 5 km von unserem Standort entfernt",
      "Erfahrung mit historischen Gebäuden und Denkmalpflege",
      "Lokale Präsenz in allen Stadtteilen",
      "Flexible Einsatzzeiten für Gewerbeobjekte",
    ],
    services: [
      {
        icon: Building2,
        title: "Altbau-Betreuung",
        description:
          "Spezielle Pflege für historische Gebäude und Fachwerkhäuser",
      },
      {
        icon: Sparkles,
        title: "Gebäudereinigung",
        description: "Professionelle Reinigung für Treppenhäuser und Eingänge",
      },
      {
        icon: TreeDeciduous,
        title: "Gartenpflege",
        description: "Pflege von Innenhöfen und Außenanlagen",
      },
      {
        icon: Snowflake,
        title: "Winterdienst",
        description: "Sichere Wege auch bei Schnee und Eis",
      },
      {
        icon: Shield,
        title: "Objektkontrolle",
        description: "Regelmäßige Kontrollgänge und Sicherheitschecks",
      },
      {
        icon: Wrench,
        title: "Instandhaltung",
        description: "Pflege und Reparatur unter Beachtung des Denkmalschutzes",
      },
    ],
    faqs: [
      {
        question: "Haben Sie Erfahrung mit denkmalgeschützten Gebäuden?",
        answer:
          "Ja, wir betreuen mehrere denkmalgeschützte Objekte in der Heppenheimer Altstadt. Unser Team kennt die besonderen Anforderungen und arbeitet bei Bedarf mit spezialisierten Handwerkern zusammen.",
      },
      {
        question: "Wie weit ist es von Ihrem Standort nach Heppenheim?",
        answer:
          "Heppenheim liegt nur etwa 5 km von unserem Firmensitz in Bensheim entfernt. Wir sind in der Regel innerhalb von 10-15 Minuten vor Ort.",
      },
      {
        question: "Betreuen Sie auch Objekte in Erbach oder Kirschhausen?",
        answer:
          "Selbstverständlich! Wir sind in ganz Heppenheim aktiv, einschließlich Erbach, Kirschhausen, Hambach, Ober-Laudenbach und allen anderen Stadtteilen.",
      },
      {
        question: "Bieten Sie spezielle Services für die Weinlese-Zeit an?",
        answer:
          "Ja, während der Weinlese bieten wir verstärkte Reinigungsservices an, da in dieser Zeit mehr Besucher in der Stadt sind.",
      },
    ],
    stats: [
      { value: "5 km", label: "Entfernung" },
      { value: "10+", label: "Jahre in Heppenheim" },
      { value: "50+", label: "Objekte betreut" },
      { value: "100%", label: "Kundenzufriedenheit" },
    ],
    testimonial: {
      quote:
        "Unser Fachwerkhaus braucht besondere Pflege. Traumplatz versteht das und handelt entsprechend.",
      author: "Herr Müller",
      location: "Heppenheim Altstadt",
      rating: 5,
    },
    ctaTitle: "Hausmeisterservice mit Gespür für Geschichte",
    ctaSubtitle:
      "Lassen Sie uns Ihre Immobilie in Heppenheim gemeinsam pflegen.",
    uniqueSellingPoints: [
      "Altbau-Expertise",
      "5 km Entfernung",
      "Kreisstadt-Erfahrung",
    ],
  },

  // ============================================
  // LORSCH - Klosterstadt mit Charakter
  // ============================================
  lorsch: {
    slug: "lorsch",
    name: "Lorsch",
    heroHeadline: "Ihr Hausmeister in der",
    heroHighlight: "Klosterstadt Lorsch",
    heroSubheadline:
      "Wo Jahrhunderte Geschichte auf modernes Wohnen treffen, braucht es einen Hausmeisterservice, der beides versteht. Wir kümmern uns um Ihre Immobilie in Lorsch - mit Sorgfalt, Sachverstand und dem richtigen Gespür für diese besondere Stadt.",
    introTitle: "Hausmeisterservice, der Lorsch versteht",
    introText:
      "Lorsch ist mehr als eine Kleinstadt an der Bergstraße. Die UNESCO-Welterbestadt verbindet historischen Stolz mit einer lebendigen Wohnkultur. Genau hier setzen wir an: Unser Hausmeisterservice in Lorsch geht über das Übliche hinaus. Wir kennen die Besonderheiten der Lorscher Wohnanlagen, die Anforderungen der Hausverwaltungen vor Ort und wissen, worauf es bei der Betreuung von Immobilien in einer Stadt mit knapp 14.000 Einwohnern ankommt - persönlicher Kontakt, Verlässlichkeit und handwerkliches Können.",
    localBenefits: [
      "8 km Anfahrt - in 12 Minuten vor Ihrer Tür",
      "Fester Ansprechpartner für jedes Objekt in Lorsch",
      "Wöchentliche Kontrollgänge inklusive",
      "Notdienst auch am Wochenende und an Feiertagen",
    ],
    services: [
      {
        icon: Wrench,
        title: "Reparaturen & Instandhaltung",
        description:
          "Tropfende Hähne, klemmende Türen, defekte Beleuchtung - wir beheben Kleinreparaturen in Ihren Lorscher Objekten schnell und fachgerecht, bevor aus kleinen Mängeln große Schäden werden.",
      },
      {
        icon: Sparkles,
        title: "Treppenreinigung",
        description:
          "Ein sauberes Treppenhaus ist die Visitenkarte jedes Mehrfamilienhauses. In Lorsch sorgen wir für gepflegte Eingänge, gereinigte Flure und einladende Hauseingänge.",
      },
      {
        icon: Shield,
        title: "Objektbetreuung & Kontrollgänge",
        description:
          "Regelmäßige Rundgänge durch Ihre Immobilie in Lorsch: Wir prüfen technische Anlagen, kontrollieren Gemeinschaftsflächen und dokumentieren alles lückenlos für Sie.",
      },
      {
        icon: TreeDeciduous,
        title: "Außenanlagen & Grünpflege",
        description:
          "Rasenmähen, Hecken schneiden, Laub entfernen - wir halten die Außenanlagen Ihrer Lorscher Immobilie das ganze Jahr über in gepflegtem Zustand.",
      },
      {
        icon: Snowflake,
        title: "Winterdienst & Räumpflicht",
        description:
          "Wenn es in Lorsch schneit, sind wir ab 6 Uhr morgens unterwegs. Wir übernehmen Ihre Räum- und Streupflicht zuverlässig und rechtssicher.",
      },
      {
        icon: Key,
        title: "Schlüsseldienst & Zugangsverwaltung",
        description:
          "Sichere Schlüsselverwaltung, Koordination von Handwerkern und Zutrittsmanagement für Ihre Objekte in Lorsch und im Ortsteil Seehof.",
      },
    ],
    faqs: [
      {
        question: "Wie schnell ist Ihr Hausmeisterservice in Lorsch vor Ort?",
        answer:
          "Lorsch liegt nur 8 km von unserem Firmensitz in Bensheim entfernt. Im Regelfall sind wir innerhalb von 12-15 Minuten bei Ihnen. Bei Notfällen reagieren wir noch schneller - auch am Wochenende.",
      },
      {
        question: "Was kostet ein Hausmeisterservice in Lorsch?",
        answer:
          "Die Kosten richten sich nach Umfang und Häufigkeit der Leistungen. Für ein typisches Mehrfamilienhaus in Lorsch mit Treppenreinigung, Kontrollgängen und Kleinreparaturen starten unsere monatlichen Pauschalen bereits ab einem fairen Preis. Kontaktieren Sie uns für ein individuelles Angebot.",
      },
      {
        question: "Betreuen Sie auch Objekte im Ortsteil Seehof?",
        answer:
          "Selbstverständlich. Wir sind in ganz Lorsch aktiv - sowohl im Stadtzentrum als auch in Seehof. Die kurze Entfernung macht es uns leicht, beide Bereiche effizient zu betreuen.",
      },
      {
        question: "Übernehmen Sie auch die Verkehrssicherungspflicht?",
        answer:
          "Ja, als Ihr Hausmeisterservice in Lorsch übernehmen wir die Verkehrssicherungspflicht vollständig - von der Gehwegreinigung über den Winterdienst bis zur Dokumentation für Ihre Versicherung. Sie sind damit rechtlich auf der sicheren Seite.",
      },
      {
        question: "Können Sie kurzfristig in Lorsch einspringen?",
        answer:
          "Ja, wir bieten auch kurzfristige Einsätze und Vertretungsdienste an. Ob Ihr bisheriger Hausmeister ausfällt oder Sie schnell Unterstützung brauchen - wir sind flexibel und kurzfristig einsatzbereit.",
      },
    ],
    stats: [
      { value: "8 km", label: "von Bensheim" },
      { value: "12 Min", label: "Anfahrtszeit" },
      { value: "24/7", label: "Notdienst" },
      { value: "100%", label: "Zuverlässigkeit" },
    ],
    testimonial: {
      quote:
        "Seit Traumplatz unsere drei Mehrfamilienhäuser in Lorsch betreut, haben wir keine Sorgen mehr. Zuverlässig, gründlich und immer erreichbar - genau so muss ein Hausmeisterservice sein.",
      author: "Hausverwaltung Bergstraße GmbH",
      location: "Lorsch",
      rating: 5,
    },
    ctaTitle: "Jetzt Hausmeisterservice in Lorsch anfragen",
    ctaSubtitle:
      "Kostenloses Erstgespräch, individuelles Angebot, faire Preise. Rufen Sie uns an oder schreiben Sie uns - wir melden uns innerhalb von 24 Stunden.",
    uniqueSellingPoints: [
      "Nur 8 km Entfernung",
      "Fester Ansprechpartner",
      "Rechtssichere Dokumentation",
    ],
  },

  // ============================================
  // EINHAUSEN - Ländliche Exzellenz
  // ============================================
  einhausen: {
    slug: "einhausen",
    name: "Einhausen",
    heroHeadline: "Persönlicher Service für",
    heroHighlight: "Einhausen",
    heroSubheadline:
      "In einer Gemeinde, wo man sich noch kennt, setzen wir auf persönliche Betreuung. Ihr Hausmeister mit Handschlag-Qualität.",
    introTitle: "Ihr Hausmeister fürs Ried",
    introText:
      "Einhausen im Hessischen Ried steht für Gemeinschaft und persönlichen Kontakt. Genau das bieten wir Ihnen: Einen festen Ansprechpartner, der Sie und Ihre Immobilie kennt. Keine anonymen Großstadtservices, sondern echte Handschlag-Qualität.",
    localBenefits: [
      "Persönlicher Ansprechpartner für jedes Objekt",
      "Flexible Terminvereinbarung",
      "Kurze Kommunikationswege",
      "Faire, transparente Preise",
    ],
    services: [
      {
        icon: Heart,
        title: "Persönliche Betreuung",
        description: "Ein fester Ansprechpartner, der Sie kennt",
      },
      {
        icon: Home,
        title: "Hausmeisterdienste",
        description: "Alle klassischen Hausmeisteraufgaben aus einer Hand",
      },
      {
        icon: TreeDeciduous,
        title: "Gartenpflege",
        description: "Liebevolle Pflege Ihrer Grünflächen",
      },
      {
        icon: Snowflake,
        title: "Winterdienst",
        description: "Zuverlässig auch bei Schnee und Eis",
      },
      {
        icon: Wrench,
        title: "Kleinreparaturen",
        description: "Schnelle Hilfe bei kleinen Defekten",
      },
      {
        icon: Clock,
        title: "Flexible Zeiten",
        description: "Termine, die zu Ihrem Leben passen",
      },
    ],
    faqs: [
      {
        question: "Wie persönlich ist Ihr Service wirklich?",
        answer:
          "Bei uns haben Sie einen festen Ansprechpartner, der Ihr Objekt regelmäßig betreut. Sie erreichen diese Person direkt - ohne Callcenter oder Warteschleifen.",
      },
      {
        question: "Betreuen Sie auch den Ortsteil Klein-Hausen?",
        answer:
          "Ja, wir sind in ganz Einhausen tätig, einschließlich Klein-Hausen und allen umliegenden Gebieten.",
      },
      {
        question: "Wie weit ist Einhausen von Ihrem Standort entfernt?",
        answer:
          "Einhausen liegt etwa 10 km von unserem Firmensitz in Bensheim entfernt. Wir sind schnell bei Ihnen.",
      },
      {
        question: "Bieten Sie auch Einzelaufträge an?",
        answer:
          "Ja, neben regelmäßiger Betreuung bieten wir auch Einzelaufträge an - perfekt für saisonale Arbeiten oder einmalige Projekte.",
      },
    ],
    stats: [
      { value: "10 km", label: "Entfernung" },
      { value: "1:1", label: "Persönliche Betreuung" },
      { value: "Flexibel", label: "Terminplanung" },
      { value: "Fair", label: "Preisgestaltung" },
    ],
    testimonial: {
      quote:
        "Endlich ein Hausmeister, der nicht nur eine Nummer ist. Hier kennt man sich noch!",
      author: "Familie Weber",
      location: "Einhausen",
      rating: 5,
    },
    ctaTitle: "Persönlich statt anonym",
    ctaSubtitle:
      "Lernen Sie uns kennen - Ihr neuer Hausmeister für Einhausen.",
    uniqueSellingPoints: [
      "Persönlicher Service",
      "Flexible Zeiten",
      "Faire Preise",
    ],
  },

  // ============================================
  // ALSBACH-HÄHNLEIN - Doppelgemeinde mit Charakter
  // ============================================
  "alsbach-haehnlein": {
    slug: "alsbach-haehnlein",
    name: "Alsbach-Hähnlein",
    heroHeadline: "Hausmeisterservice für",
    heroHighlight: "Alsbach-Hähnlein",
    heroSubheadline:
      "Zwei Ortsteile, zwei Landschaften, ein Hausmeisterservice, der beide kennt. Vom Weinberg in Alsbach bis ins Ried nach Hähnlein - wir betreuen Ihre Immobilie dort, wo Sie sie brauchen.",
    introTitle: "Warum Alsbach-Hähnlein einen Hausmeister braucht, der die Gemeinde kennt",
    introText:
      "Alsbach-Hähnlein ist keine gewöhnliche Doppelgemeinde. In Alsbach prägen Hanglagen, historische Villen am Schloss und die steilen Weinbergstraßen das Bild. In Hähnlein dagegen dominieren flache Riedböden, moderne Wohnanlagen und landwirtschaftliche Flächen. Wer hier als Hausmeister arbeitet, muss beide Welten verstehen. Genau das tun wir: Seit Jahren betreuen wir Objekte in beiden Ortsteilen und in Sandwiese - mit dem Wissen um die unterschiedlichen Anforderungen, die jede Lage mit sich bringt.",
    localBenefits: [
      "12 km Anfahrt - in unter 20 Minuten bei Ihnen",
      "Erfahrung mit Hanglagen in Alsbach und Riedböden in Hähnlein",
      "Alle Ortsteile abgedeckt: Alsbach, Hähnlein, Sandwiese",
      "Ein Vertrag, ein Ansprechpartner - für die gesamte Gemeinde",
    ],
    services: [
      {
        icon: Wrench,
        title: "Reparaturen & Instandhaltung",
        description:
          "Ob klemmendes Hoftor in Alsbach oder defekte Außenbeleuchtung in Hähnlein - wir erledigen Kleinreparaturen schnell und zuverlässig, bevor größere Schäden entstehen.",
      },
      {
        icon: Sparkles,
        title: "Treppenreinigung & Gebäudepflege",
        description:
          "Saubere Treppenhäuser, gepflegte Eingangsbereiche und ordentliche Gemeinschaftsräume. Wir reinigen regelmäßig und gründlich - in Wohnanlagen beider Ortsteile.",
      },
      {
        icon: TreeDeciduous,
        title: "Grünflächenpflege & Gartenpflege",
        description:
          "Die steilen Gärten an den Alsbacher Weinbergen stellen andere Anforderungen als die ebenen Grundstücke in Hähnlein. Wir beherrschen beides - vom Rasenmähen über Heckenschnitt bis zur Laubbeseitigung.",
      },
      {
        icon: Snowflake,
        title: "Winterdienst & Streupflicht",
        description:
          "Gerade in den Hanglagen von Alsbach ist professioneller Winterdienst unverzichtbar. Wir räumen und streuen ab 6 Uhr morgens - auch auf schwierigem Gefälle und in engen Zufahrten.",
      },
      {
        icon: Shield,
        title: "Kontrollgänge & Objektüberwachung",
        description:
          "Regelmäßige Rundgänge durch Ihre Immobilie: Heizungscheck, Mülltonnenbereitstellung, Kontrolle der Außenanlagen und Prüfung auf Beschädigungen - alles dokumentiert.",
      },
      {
        icon: Key,
        title: "Schlüsselservice & Handwerkerkoordination",
        description:
          "Wir verwalten Schlüssel für Ihre Objekte, koordinieren Handwerkertermine und sorgen dafür, dass bei Reparaturen in Alsbach-Hähnlein alles reibungslos läuft.",
      },
    ],
    faqs: [
      {
        question: "Bieten Sie Ihren Hausmeisterservice in Alsbach und Hähnlein gleichermaßen an?",
        answer:
          "Ja, wir sind in der gesamten Gemeinde Alsbach-Hähnlein aktiv - in Alsbach, Hähnlein und Sandwiese. Für Hausverwaltungen mit Objekten in beiden Ortsteilen bedeutet das: nur ein Vertrag, ein Ansprechpartner und ein einheitlicher Standard.",
      },
      {
        question: "Haben Sie Erfahrung mit Hanglagen und steilen Zufahrten?",
        answer:
          "Definitiv. Gerade in Alsbach betreuen wir mehrere Objekte in Hanglage, auch am Schlossberg. Wir kennen die Herausforderungen: schwierige Zufahrten, erhöhter Winterdienstaufwand und besondere Anforderungen an die Grünflächenpflege.",
      },
      {
        question: "Was kostet ein Hausmeisterservice in Alsbach-Hähnlein?",
        answer:
          "Die Kosten hängen vom Leistungsumfang ab. Für ein Mehrfamilienhaus mit Standardleistungen wie Treppenreinigung, Kontrollgängen und Winterdienst erstellen wir Ihnen gerne ein individuelles Angebot. Die Erstberatung vor Ort ist kostenlos.",
      },
      {
        question: "Wie schnell können Sie in Alsbach-Hähnlein vor Ort sein?",
        answer:
          "Unser Firmensitz in Bensheim liegt nur 12 km entfernt. Im Regelfall sind wir innerhalb von 15-20 Minuten bei Ihnen. Bei dringenden Notfällen auch schneller.",
      },
      {
        question: "Übernehmen Sie auch die Verkehrssicherungspflicht für Immobilien in Hanglage?",
        answer:
          "Ja, wir übernehmen die komplette Verkehrssicherungspflicht - inklusive Winterdienst auf steilen Wegen, Kontrolle von Stützmauern und Treppen sowie Dokumentation aller Maßnahmen für Ihre Versicherung.",
      },
    ],
    stats: [
      { value: "12 km", label: "Anfahrt" },
      { value: "3", label: "Ortsteile" },
      { value: "<20 Min", label: "vor Ort" },
      { value: "24/7", label: "Notdienst" },
    ],
    testimonial: {
      quote:
        "Wir verwalten Objekte in Alsbach und in Hähnlein. Seit wir mit Traumplatz arbeiten, haben wir endlich einen Hausmeisterservice, der beide Ortsteile zuverlässig abdeckt. Die unterschiedlichen Anforderungen der Hanglagen und Riedgebiete werden professionell gemeistert.",
      author: "Immobilienverwaltung Kraus & Partner",
      location: "Alsbach-Hähnlein",
      rating: 5,
    },
    ctaTitle: "Hausmeisterservice für ganz Alsbach-Hähnlein",
    ctaSubtitle:
      "Kostenlose Erstbesichtigung in Alsbach, Hähnlein oder Sandwiese. Wir beraten Sie persönlich und erstellen ein faires Angebot.",
    uniqueSellingPoints: [
      "Beide Ortsteile aus einer Hand",
      "Hanglage-Erfahrung",
      "12 km Entfernung",
    ],
  },

  // ============================================
  // ZWINGENBERG - Älteste Stadt
  // ============================================
  zwingenberg: {
    slug: "zwingenberg",
    name: "Zwingenberg",
    heroHeadline: "Beständigkeit für die",
    heroHighlight: "älteste Stadt",
    heroSubheadline:
      "Zwingenberg ist die älteste Stadt an der Bergstraße. Wir bieten Service mit der gleichen Beständigkeit und Zuverlässigkeit.",
    introTitle: "Tradition der Zuverlässigkeit",
    introText:
      "Als älteste Stadt an der Bergstraße steht Zwingenberg für Geschichte und Beständigkeit. Diese Werte teilen wir: Seit Jahren betreuen wir Objekte in Zwingenberg mit der gleichen Zuverlässigkeit, auf die Sie sich auch morgen noch verlassen können.",
    localBenefits: [
      "Nur 7 km Entfernung",
      "Langjährige Erfahrung in Zwingenberg",
      "Verständnis für historische Bausubstanz",
      "Beständige, langfristige Partnerschaften",
    ],
    services: [
      {
        icon: Shield,
        title: "Verlässliche Betreuung",
        description: "Konstante Qualität, auf die Sie bauen können",
      },
      {
        icon: Building2,
        title: "Altbau-Kompetenz",
        description: "Erfahrung mit historischer Bausubstanz",
      },
      {
        icon: Sparkles,
        title: "Reinigungsservice",
        description: "Saubere Treppenhäuser und Eingänge",
      },
      {
        icon: TreeDeciduous,
        title: "Außenanlagen",
        description: "Pflege von Gärten und Grünflächen",
      },
      {
        icon: Snowflake,
        title: "Winterdienst",
        description: "Sichere Wege durch den Winter",
      },
      {
        icon: Clock,
        title: "Langzeit-Partner",
        description: "Verträge, die Bestand haben",
      },
    ],
    faqs: [
      {
        question: "Wie lange sind Sie schon in Zwingenberg tätig?",
        answer:
          "Wir betreuen seit über einem Jahrzehnt Objekte in Zwingenberg und kennen die Stadt und ihre Bewohner bestens.",
      },
      {
        question: "Haben Sie Erfahrung mit alten Gebäuden?",
        answer:
          "Ja, in einer historischen Stadt wie Zwingenberg ist das unerlässlich. Wir wissen, wie man mit alter Bausubstanz umgeht.",
      },
      {
        question: "Betreuen Sie auch Objekte in Rodau?",
        answer:
          "Ja, wir sind in ganz Zwingenberg tätig, einschließlich des Ortsteils Rodau.",
      },
      {
        question: "Wie schnell können Sie vor Ort sein?",
        answer:
          "Zwingenberg ist nur 7 km von uns entfernt. In der Regel sind wir in 10-15 Minuten bei Ihnen.",
      },
    ],
    stats: [
      { value: "7 km", label: "Entfernung" },
      { value: "10+", label: "Jahre Erfahrung" },
      { value: "Konstant", label: "Qualität" },
      { value: "Verlässlich", label: "Partnerschaft" },
    ],
    testimonial: {
      quote:
        "In über 8 Jahren hat Traumplatz nie enttäuscht. Das nenne ich Beständigkeit!",
      author: "Herr Dr. Fischer",
      location: "Zwingenberg",
      rating: 5,
    },
    ctaTitle: "Beständigkeit, auf die Sie bauen können",
    ctaSubtitle:
      "Werden Sie Teil unserer langjährigen Partnerschaften in Zwingenberg.",
    uniqueSellingPoints: [
      "7 km Entfernung",
      "Langjährige Erfahrung",
      "Altbau-Kompetenz",
    ],
  },

  // ============================================
  // DARMSTADT - Großstadt mit Anspruch
  // ============================================
  darmstadt: {
    slug: "darmstadt",
    name: "Darmstadt",
    heroHeadline: "Hausmeisterservice in",
    heroHighlight: "Darmstadt",
    heroSubheadline:
      "160.000 Einwohner, 9 Stadtteile, eine Anforderung: zuverlässiger Hausmeisterservice. Ob Bürokomplex in der Innenstadt oder Wohnanlage in Kranichstein - wir bringen die Professionalität, die Darmstadt erwartet.",
    introTitle: "Darmstadt braucht einen Hausmeister, der Großstadt kann",
    introText:
      "Darmstadt ist keine Kleinstadt. Zwischen TU-Campus, Mathildenhöhe und den Wohngebieten in Arheilgen oder Eberstadt liegen nicht nur Kilometer, sondern auch völlig unterschiedliche Anforderungen. Ein modernes Bürogebäude am Hauptbahnhof verlangt anderen Service als ein Altbau im Martinsviertel oder eine Wohnanlage in Wixhausen. Genau das ist unsere Stärke: Wir haben ein eigenes Team für Darmstadt, das die Gegebenheiten vor Ort kennt und jeden Stadtteil zuverlässig betreut - vom Facility Management für Gewerbeobjekte bis zur persönlichen Betreuung von Mehrfamilienhäusern.",
    localBenefits: [
      "Eigenes Team fest für Darmstadt eingeplant",
      "Alle 9 Stadtteile flächendeckend betreut",
      "Erfahrung mit Gewerbe-, Wohn- und Mischobjekten",
      "Digitale Leistungsdokumentation für Hausverwaltungen",
    ],
    services: [
      {
        icon: Building2,
        title: "Gewerbliche Objektbetreuung",
        description:
          "Bürokomplexe, Praxen, Einzelhandelsflächen - wir betreuen gewerbliche Immobilien in Darmstadt professionell. Reinigung, technische Wartung und Außenanlagenpflege nach Ihrem Leistungsverzeichnis.",
      },
      {
        icon: Home,
        title: "Wohnanlagen & Mehrfamilienhäuser",
        description:
          "Treppenreinigung, Mülltonnenservice, Kontrollgänge und Kleinreparaturen für Wohnanlagen in allen Darmstädter Stadtteilen. Ein fester Hausmeister kennt Ihr Objekt.",
      },
      {
        icon: Sparkles,
        title: "Gebäude- und Treppenreinigung",
        description:
          "Regelmäßige Unterhaltsreinigung für saubere Treppenhäuser, Eingangsbereiche und Gemeinschaftsräume. Flexibel planbar, auch außerhalb der Geschäftszeiten.",
      },
      {
        icon: Snowflake,
        title: "Winterdienst für Darmstadt",
        description:
          "Professionelle Schneeräumung und Streuung auf Gehwegen, Parkplätzen und Zufahrten. Wir übernehmen Ihre Räumpflicht in Darmstadt rechtssicher und dokumentiert.",
      },
      {
        icon: Wrench,
        title: "Instandhaltung & Reparaturen",
        description:
          "Tropfende Wasserhähne, defekte Türschließer, beschädigte Fliesen - unser Hausmeisterteam in Darmstadt erledigt Kleinreparaturen schnell und fachgerecht.",
      },
      {
        icon: Settings,
        title: "Technisches Facility Management",
        description:
          "Heizungskontrollen, Aufzugswartung koordinieren, Brandschutztüren prüfen, Außenbeleuchtung instand halten. Wir denken mit und dokumentieren digital.",
      },
    ],
    faqs: [
      {
        question: "Wie organisieren Sie den Hausmeisterservice in Darmstadt bei 20 km Entfernung?",
        answer:
          "Wir haben ein festes Team, das ausschließlich in Darmstadt und Umgebung arbeitet. Die Mitarbeiter starten morgens direkt in Darmstadt, nicht von unserem Firmensitz. Dadurch garantieren wir schnelle Reaktionszeiten trotz der Entfernung.",
      },
      {
        question: "In welchen Darmstädter Stadtteilen bieten Sie Hausmeisterservice an?",
        answer:
          "Wir betreuen Objekte in allen Stadtteilen: Arheilgen, Eberstadt, Kranichstein, Wixhausen, Bessungen, Martinsviertel, Johannesviertel, Heimstättensiedlung und in der Innenstadt. Flächendeckend und zuverlässig.",
      },
      {
        question: "Was kostet ein Hausmeisterservice in Darmstadt?",
        answer:
          "Die Kosten richten sich nach Objektgröße und Leistungsumfang. Für Gewerbeobjekte und größere Wohnanlagen erstellen wir individuelle Angebote nach Ihrem Leistungsverzeichnis. Die Erstberatung und Objektbesichtigung vor Ort sind kostenlos.",
      },
      {
        question: "Haben Sie Erfahrung mit größeren Gewerbeimmobilien?",
        answer:
          "Ja, wir betreuen in Darmstadt sowohl klassische Wohnanlagen als auch Bürogebäude und gemischt genutzte Immobilien. Unser Leistungsspektrum reicht von der einfachen Treppenreinigung bis zum umfassenden Facility Management.",
      },
      {
        question: "Bieten Sie auch Notdienst in Darmstadt an?",
        answer:
          "Ja, unser Darmstadt-Team ist auch für Notfälle erreichbar. Wasserrohrbruch, Heizungsausfall oder Sturmschäden - wir koordinieren schnelle Hilfe und sind als erster Ansprechpartner vor Ort.",
      },
    ],
    stats: [
      { value: "160k", label: "Einwohner" },
      { value: "9", label: "Stadtteile" },
      { value: "20 km", label: "Entfernung" },
      { value: "Eigenes Team", label: "vor Ort" },
    ],
    testimonial: {
      quote:
        "Wir haben mehrere Anbieter in Darmstadt getestet. Traumplatz überzeugt durch Zuverlässigkeit, digitale Dokumentation und ein Team, das mitdenkt. Seit zwei Jahren betreuen sie vier unserer Objekte - ohne eine einzige Beschwerde.",
      author: "Bergmann Hausverwaltung GmbH",
      location: "Darmstadt-Bessungen",
      rating: 5,
    },
    ctaTitle: "Hausmeisterservice für Darmstadt anfragen",
    ctaSubtitle:
      "Kostenlose Objektbesichtigung, individuelles Angebot nach Ihrem Leistungsverzeichnis. Wir betreuen Objekte jeder Größe in allen 9 Stadtteilen.",
    uniqueSellingPoints: [
      "Eigenes Darmstadt-Team",
      "Gewerbe & Wohnen",
      "Digitale Dokumentation",
    ],
  },

  // ============================================
  // WEINHEIM - Zwei-Burgen-Stadt
  // ============================================
  weinheim: {
    slug: "weinheim",
    name: "Weinheim",
    heroHeadline: "Hausmeisterservice in der",
    heroHighlight: "Zwei-Burgen-Stadt Weinheim",
    heroSubheadline:
      "Von Hohensachsen bis Lützelsachsen: Unser Hausmeisterservice sorgt dafür, dass Ihre Weinheimer Immobilie in bestem Zustand bleibt – zuverlässig, gründlich und mit nur 15 Minuten Anfahrt.",
    introTitle: "Ihr Hausmeisterservice für Weinheim und alle Ortsteile",
    introText:
      "Weinheim liegt zwischen Odenwald und Rheinebene und vereint historischen Charme mit modernem Wohnen. Ob gepflegte Mehrfamilienhäuser in der Altstadt, Wohnanlagen in Sulzbach oder Eigenheime in den Bergorten – unser Hausmeisterservice kennt die Besonderheiten jeder Lage. Wir kümmern uns um Treppenreinigung, Außenanlagen, Kleinreparaturen und saisonale Arbeiten, damit Sie sich auf Ihre Immobilie verlassen können.",
    localBenefits: [
      "Nur 15 km entfernt – schnelle Einsätze vor Ort",
      "Alle Ortsteile von Weinheim abgedeckt",
      "Erfahrung mit Hang- und Tallage-Immobilien",
      "Persönlicher Ansprechpartner für jedes Objekt",
    ],
    services: [
      {
        icon: Key,
        title: "Objektbetreuung & Kontrolle",
        description:
          "Regelmäßige Kontrollgänge, Schlüsselverwaltung und Gebäudeüberwachung für Ihre Weinheimer Immobilie – auch bei Abwesenheit.",
      },
      {
        icon: TreeDeciduous,
        title: "Grünanlagenpflege",
        description:
          "Rasenmähen, Heckenschnitt und Laubbeseitigung für Außenanlagen in Weinheim – von Vorgärten bis zu größeren Grundstücken.",
      },
      {
        icon: Sparkles,
        title: "Treppenreinigung",
        description:
          "Gründliche Reinigung von Treppenhäusern, Eingangsbereichen und Gemeinschaftsflächen nach festem Turnus.",
      },
      {
        icon: Shield,
        title: "Verkehrssicherungspflicht",
        description:
          "Prüfung und Dokumentation sicherheitsrelevanter Mängel, Beleuchtungskontrolle und Gefahrenbeseitigung an Ihrem Objekt.",
      },
      {
        icon: Snowflake,
        title: "Winterdienst Weinheim",
        description:
          "Räum- und Streupflicht zuverlässig erfüllt – auch in den Bergorten mit Steigungen und engen Zufahrten.",
      },
      {
        icon: Wrench,
        title: "Kleinreparaturen & Instandhaltung",
        description:
          "Türklinken, tropfende Wasserhähne, defekte Leuchten – wir beheben kleine Schäden direkt, bevor sie größer werden.",
      },
    ],
    faqs: [
      {
        question: "Was kostet ein Hausmeisterservice in Weinheim?",
        answer:
          "Die Kosten richten sich nach Objektgröße, Leistungsumfang und Einsatzhäufigkeit. Für ein typisches Mehrfamilienhaus in Weinheim erstellen wir Ihnen ein individuelles Angebot nach einer kostenlosen Objektbesichtigung.",
      },
      {
        question: "Betreuen Sie auch Immobilien in Hohensachsen und Lützelsachsen?",
        answer:
          "Ja, wir sind in allen Weinheimer Ortsteilen im Einsatz: Hohensachsen, Lützelsachsen, Oberflockenbach, Rippenweier, Sulzbach und Ritschweier. Die Hanglage dieser Orte kennen wir gut.",
      },
      {
        question: "Wie schnell sind Sie bei einem Notfall in Weinheim vor Ort?",
        answer:
          "Unser Standort in Bensheim liegt nur 15 km von Weinheim entfernt. Bei dringenden Fällen wie Wasserrohrbruch oder Sturmschäden sind wir in der Regel innerhalb von 30 Minuten vor Ort.",
      },
      {
        question: "Übernehmen Sie auch die Hausmeisterpflichten für WEG-Verwaltungen in Weinheim?",
        answer:
          "Ja, wir arbeiten mit mehreren Hausverwaltungen und WEG-Beiräten in Weinheim zusammen. Wir setzen Leistungsverzeichnisse um und dokumentieren alle Arbeiten transparent.",
      },
      {
        question: "Bieten Sie Urlaubsbetreuung für Eigenheime in Weinheim an?",
        answer:
          "Selbstverständlich. Briefkastenentleerung, Pflanzenbewässerung, Rollladenbedienung und Kontrollgänge – wir sorgen dafür, dass Ihr Haus während Ihrer Abwesenheit sicher und gepflegt bleibt.",
      },
    ],
    stats: [
      { value: "15 km", label: "ab Bensheim" },
      { value: "6+", label: "Ortsteile betreut" },
      { value: "< 30 Min", label: "Notfall-Anfahrt" },
      { value: "100%", label: "Zuverlässigkeit" },
    ],
    testimonial: {
      quote:
        "Seit Traumplatz unseren Hausmeisterservice übernommen hat, läuft alles reibungslos. Treppenreinigung, Winterdienst, Gartenarbeit – alles aus einer Hand und immer pünktlich.",
      author: "Hausverwaltung Bergstraße-Neckar",
      location: "Weinheim-Sulzbach",
      rating: 5,
    },
    ctaTitle: "Hausmeisterservice für Weinheim anfragen",
    ctaSubtitle:
      "Kostenlose Objektbesichtigung in allen Weinheimer Ortsteilen. Individuelles Angebot innerhalb von 48 Stunden.",
    uniqueSellingPoints: [
      "Alle Ortsteile abgedeckt",
      "Schnelle Einsätze",
      "Transparente Dokumentation",
    ],
  },

  // ============================================
  // VIERNHEIM - Metropol-Gateway
  // ============================================
  viernheim: {
    slug: "viernheim",
    name: "Viernheim",
    heroHeadline: "Hausmeisterservice für",
    heroHighlight: "Viernheim",
    heroSubheadline:
      "Ob Wohnanlage am Vogelpark, Gewerbeobjekt im Gewerbegebiet West oder Mehrfamilienhaus in der Innenstadt – unser Hausmeisterservice hält Ihre Viernheimer Immobilie in Schuss.",
    introTitle: "Zuverlässiger Hausmeisterservice in Viernheim – 34.000 Einwohner, ein Ansprechpartner",
    introText:
      "Viernheim im Rhein-Neckar-Dreieck wächst stetig: Neue Wohnanlagen, Gewerbegebiete und sanierte Bestandsimmobilien brauchen professionelle Betreuung. Unser Hausmeisterservice übernimmt Treppenreinigung, Außenanlagenpflege, Kleinreparaturen und Winterdienst für Ihre Objekte in Viernheim. Mit nur 18 km Anfahrt von unserem Standort in Bensheim sind wir schnell vor Ort – auch bei dringenden Einsätzen.",
    localBenefits: [
      "18 km Anfahrt – unter 25 Minuten vor Ort",
      "Wohn- und Gewerbeobjekte in ganz Viernheim",
      "Fester Ansprechpartner für jedes Objekt",
      "Flexible Einsatzzeiten – auch abends und samstags",
    ],
    services: [
      {
        icon: Building2,
        title: "Hausmeister für Wohnanlagen",
        description:
          "Komplettbetreuung von Mehrfamilienhäusern in Viernheim: Treppenreinigung, Mülltonnenservice, Beleuchtungskontrolle und Gemeinschaftsflächen.",
      },
      {
        icon: Target,
        title: "Gewerbeobjekte & Bürogebäude",
        description:
          "Hausmeisterservice für Gewerbeimmobilien in Viernheim – Parkplatzpflege, Eingangsbereiche, technische Kontrollgänge und Facility-Aufgaben.",
      },
      {
        icon: Sparkles,
        title: "Treppenreinigung",
        description:
          "Regelmäßige Reinigung von Treppenhäusern, Fluren und Eingangsbereichen nach festem Reinigungsplan – sauber und dokumentiert.",
      },
      {
        icon: TreeDeciduous,
        title: "Außenanlagen & Grünflächen",
        description:
          "Rasenmähen, Heckenschnitt, Unkrautentfernung und Laubbeseitigung für Außenanlagen, Innenhöfe und Vorgärten in Viernheim.",
      },
      {
        icon: Snowflake,
        title: "Winterdienst Viernheim",
        description:
          "Räum- und Streupflicht zuverlässig erfüllt – für Gehwege, Zufahrten und Parkplätze. Auch bei Großflächen im Gewerbegebiet.",
      },
      {
        icon: Wrench,
        title: "Kleinreparaturen & Instandhaltung",
        description:
          "Türschließer justieren, Leuchten tauschen, tropfende Armaturen reparieren – wir beheben Mängel schnell, bevor sie teuer werden.",
      },
    ],
    faqs: [
      {
        question: "Was kostet ein Hausmeisterservice in Viernheim?",
        answer:
          "Die Kosten hängen von Objektgröße, Leistungsumfang und Einsatzhäufigkeit ab. Für ein Mehrfamilienhaus mit 8–12 Einheiten in Viernheim erstellen wir nach einer kostenlosen Objektbesichtigung ein individuelles Angebot.",
      },
      {
        question: "Wie schnell ist Ihr Hausmeisterservice in Viernheim vor Ort?",
        answer:
          "Unser Standort in Bensheim liegt 18 km von Viernheim entfernt. Bei regulären Einsätzen arbeiten wir nach festem Tourenplan, bei Notfällen wie Wasserrohrbruch oder Sturmschäden sind wir in der Regel innerhalb von 25–30 Minuten da.",
      },
      {
        question: "Betreuen Sie auch Gewerbeobjekte und Einkaufsflächen in Viernheim?",
        answer:
          "Ja, wir übernehmen den Hausmeisterservice für verschiedene Gewerbeimmobilien in Viernheim – von Bürokomplexen über Einzelhandelsflächen bis zu Parkplatzanlagen. Unsere Einsatzzeiten passen wir an Ihre Geschäftszeiten an.",
      },
      {
        question: "Arbeiten Sie mit Hausverwaltungen in Viernheim zusammen?",
        answer:
          "Selbstverständlich. Wir kooperieren mit mehreren Hausverwaltungen und WEG-Beiräten in Viernheim. Leistungsverzeichnisse setzen wir exakt um und dokumentieren alle Arbeiten transparent für Ihre Abrechnung.",
      },
      {
        question: "Welche Stadtteile in Viernheim decken Sie ab?",
        answer:
          "Wir sind in ganz Viernheim im Einsatz: Innenstadt, West, Ost sowie die Neubaugebiete und Gewerbegebiete. Es gibt keinen Bereich in Viernheim, den wir nicht erreichen.",
      },
    ],
    stats: [
      { value: "18 km", label: "ab Bensheim" },
      { value: "34.000", label: "Einwohner" },
      { value: "< 30 Min", label: "Notfall-Anfahrt" },
      { value: "W+G", label: "Objekttypen" },
    ],
    testimonial: {
      quote:
        "Unser Mehrfamilienhaus in Viernheim wird seit einem Jahr von Traumplatz betreut. Treppenreinigung, Gartenpflege und Winterdienst laufen wie am Schnürchen – endlich ein Hausmeisterservice, auf den man sich verlassen kann.",
      author: "Immobilienverwaltung Rhein-Neckar",
      location: "Viernheim-Innenstadt",
      rating: 5,
    },
    ctaTitle: "Hausmeisterservice in Viernheim anfragen",
    ctaSubtitle:
      "Kostenlose Objektbesichtigung in Viernheim. Individuelles Angebot innerhalb von 48 Stunden – für Wohn- und Gewerbeobjekte.",
    uniqueSellingPoints: [
      "Wohn- & Gewerbeobjekte",
      "Schnelle Einsätze",
      "Flexible Zeiten",
    ],
  },

  // ============================================
  // PFUNGSTADT - Natur trifft Stadt
  // ============================================
  pfungstadt: {
    slug: "pfungstadt",
    name: "Pfungstadt",
    heroHeadline: "Nachhaltig für",
    heroHighlight: "Pfungstadt",
    heroSubheadline:
      "Zwischen Moor und Stadt - Pfungstadt verdient einen Hausmeisterservice, der Natur und Umwelt respektiert.",
    introTitle: "Umweltbewusster Service fürs Ried",
    introText:
      "Pfungstadt liegt im wunderschönen Hessischen Ried, umgeben von einzigartiger Natur. Diese Umgebung prägt auch unsere Arbeitsweise: Wir setzen auf nachhaltige Methoden, umweltfreundliche Produkte und einen respektvollen Umgang mit der Natur - für einen Hausmeisterservice, der zu Pfungstadt passt.",
    localBenefits: [
      "Umweltfreundliche Arbeitsweise",
      "Nachhaltige Reinigungsprodukte",
      "15 km Entfernung",
      "Erfahrung in allen Ortsteilen",
    ],
    services: [
      {
        icon: Leaf,
        title: "Öko-Reinigung",
        description: "Umweltfreundliche Reinigungsprodukte",
      },
      {
        icon: TreeDeciduous,
        title: "Naturnahe Pflege",
        description: "Gartenpflege im Einklang mit der Natur",
      },
      {
        icon: Sparkles,
        title: "Gebäudereinigung",
        description: "Gründlich und umweltbewusst",
      },
      {
        icon: Snowflake,
        title: "Grüner Winterdienst",
        description: "Umweltschonende Streumittel",
      },
      {
        icon: Home,
        title: "Hausmeisterdienste",
        description: "Alle klassischen Services nachhaltig",
      },
      {
        icon: Lightbulb,
        title: "Energieberatung",
        description: "Tipps zur Energieeffizienz Ihrer Immobilie",
      },
    ],
    faqs: [
      {
        question: "Was bedeutet 'nachhaltiger Hausmeisterservice'?",
        answer:
          "Wir verwenden umweltfreundliche Reinigungsprodukte, setzen auf ressourcenschonende Methoden und nutzen wo möglich natürliche Alternativen - etwa bei Streumitteln im Winter.",
      },
      {
        question: "Betreuen Sie auch Eschollbrücken, Eich und Hahn?",
        answer:
          "Ja, wir sind in ganz Pfungstadt tätig, einschließlich aller Ortsteile Eschollbrücken, Eich und Hahn.",
      },
      {
        question: "Kostet nachhaltiger Service mehr?",
        answer:
          "Nein, unser nachhaltiger Ansatz ist Teil unserer Unternehmensphilosophie und kein Aufpreis-Service. Sie erhalten umweltbewusste Qualität zum normalen Preis.",
      },
      {
        question: "Wie weit ist Pfungstadt von Ihrem Standort entfernt?",
        answer:
          "Pfungstadt liegt etwa 15 km von unserem Firmensitz in Bensheim entfernt. Wir sind in der Regel in 20-25 Minuten vor Ort.",
      },
    ],
    stats: [
      { value: "15 km", label: "Entfernung" },
      { value: "Eco", label: "Zertifiziert" },
      { value: "Bio", label: "Produkte" },
      { value: "Grün", label: "Philosophie" },
    ],
    testimonial: {
      quote:
        "Ein Hausmeisterservice, der Umwelt ernst nimmt. Das passt perfekt zu unserem Mehrfamilienhaus.",
      author: "WEG Pfungstadt-Mitte",
      location: "Pfungstadt",
      rating: 5,
    },
    ctaTitle: "Nachhaltig. Natürlich. Pfungstadt.",
    ctaSubtitle:
      "Entdecken Sie umweltbewussten Hausmeisterservice für Ihre Immobilie.",
    uniqueSellingPoints: [
      "Nachhaltig",
      "Umweltfreundlich",
      "15 km Entfernung",
    ],
  },

  // ============================================
  // SEEHEIM-JUGENHEIM - Villen-Viertel Luxus
  // ============================================
  "seeheim-jugenheim": {
    slug: "seeheim-jugenheim",
    name: "Seeheim-Jugenheim",
    heroHeadline: "Exklusiver Service für",
    heroHighlight: "Seeheim-Jugenheim",
    heroSubheadline:
      "Die Villen und Anwesen von Seeheim-Jugenheim verdienen einen Hausmeisterservice, der ihrem Niveau entspricht.",
    introTitle: "Für die feinsten Adressen an der Bergstraße",
    introText:
      "Seeheim-Jugenheim ist bekannt für seine exklusiven Wohnlagen, historischen Villen und gepflegten Anwesen. Unser Hausmeisterservice ist speziell auf die Anforderungen dieser besonderen Immobilien ausgerichtet: Diskret, qualitätsbewusst und mit einem Auge für Details.",
    localBenefits: [
      "Spezialisierung auf gehobene Immobilien",
      "Erfahrung mit Villen und Anwesen",
      "Diskrete, vertrauenswürdige Mitarbeiter",
      "15 km Entfernung mit zuverlässigem Service",
    ],
    services: [
      {
        icon: Award,
        title: "Villa-Service",
        description: "Spezialisierte Betreuung für Villen und Anwesen",
      },
      {
        icon: TreeDeciduous,
        title: "Parkpflege",
        description: "Professionelle Pflege großer Gartenanlagen",
      },
      {
        icon: Shield,
        title: "Diskrete Betreuung",
        description: "Vertraulicher, respektvoller Service",
      },
      {
        icon: Sparkles,
        title: "Exklusive Reinigung",
        description: "Hochwertige Reinigung mit Premium-Produkten",
      },
      {
        icon: Snowflake,
        title: "Winter-Service",
        description: "Zuverlässige Räumung auch großer Flächen",
      },
      {
        icon: Key,
        title: "Objektüberwachung",
        description: "Kontrollgänge und Urlaubsservice",
      },
    ],
    faqs: [
      {
        question: "Haben Sie Erfahrung mit größeren Anwesen?",
        answer:
          "Ja, wir betreuen mehrere Villen und Anwesen in Seeheim-Jugenheim. Unser Team ist geschult für die besonderen Anforderungen großer Immobilien.",
      },
      {
        question: "Wie gewährleisten Sie Diskretion und Vertrauen?",
        answer:
          "Unsere Mitarbeiter werden sorgfältig ausgewählt und in diskret Arbeitsweisen geschult. Vertraulichkeit und Respekt für die Privatsphäre sind für uns selbstverständlich.",
      },
      {
        question: "Betreuen Sie alle Ortsteile von Seeheim-Jugenheim?",
        answer:
          "Ja, wir sind in Seeheim, Jugenheim, Balkhausen, Malchen und Ober-Beerbach aktiv - in der gesamten Gemeinde.",
      },
      {
        question: "Bieten Sie auch Hausbetreuung bei Abwesenheit an?",
        answer:
          "Selbstverständlich! Unser Urlaubsservice umfasst Kontrollgänge, Briefkastenentleerung, Lüften und auf Wunsch auch Pflanzenpflege.",
      },
    ],
    stats: [
      { value: "15 km", label: "Entfernung" },
      { value: "Exklusiv", label: "Service-Level" },
      { value: "Diskret", label: "Arbeitsweise" },
      { value: "Premium", label: "Qualität" },
    ],
    testimonial: {
      quote:
        "Unser Anwesen in Jugenheim braucht besondere Pflege. Traumplatz liefert genau das - professionell und diskret.",
      author: "Dr. med. Elisabeth Hartmann",
      location: "Seeheim-Jugenheim",
      rating: 5,
    },
    ctaTitle: "Exzellenz für exklusive Immobilien",
    ctaSubtitle:
      "Erleben Sie Hausmeisterservice auf dem Niveau von Seeheim-Jugenheim.",
    uniqueSellingPoints: [
      "Villen-Expertise",
      "Diskret",
      "Premium-Service",
    ],
  },

  // ============================================
  // WORMS - Nibelungen Erbe
  // ============================================
  worms: {
    slug: "worms",
    name: "Worms",
    heroHeadline: "Zuverlässig bis nach",
    heroHighlight: "Worms",
    heroSubheadline:
      "25 km Entfernung, 100% Zuverlässigkeit. Wir bringen den gleichen erstklassigen Service auch in die Nibelungenstadt.",
    introTitle: "Ihr Partner auch in der Ferne",
    introText:
      "Worms, die stolze Nibelungenstadt am Rhein, liegt 25 km von unserem Standort entfernt. Doch Entfernung ist kein Hindernis für Qualität. Mit einem dedizierten Team für Worms gewährleisten wir den gleichen zuverlässigen Service, für den wir an der Bergstraße bekannt sind.",
    localBenefits: [
      "Dediziertes Team für Worms",
      "Geplante, zuverlässige Einsätze",
      "Alle 13 Stadtteile abgedeckt",
      "Notfall-Erreichbarkeit garantiert",
    ],
    services: [
      {
        icon: MapPin,
        title: "Flächendeckend",
        description: "Service in allen 13 Wormser Stadtteilen",
      },
      {
        icon: Clock,
        title: "Termingerecht",
        description: "Pünktliche, geplante Einsätze",
      },
      {
        icon: Sparkles,
        title: "Gebäudereinigung",
        description: "Professionelle Reinigung aller Objekte",
      },
      {
        icon: TreeDeciduous,
        title: "Grünflächenpflege",
        description: "Gartenpflege und Außenanlagen",
      },
      {
        icon: Snowflake,
        title: "Winterdienst",
        description: "Zuverlässige Räumung und Streuung",
      },
      {
        icon: Phone,
        title: "Notfall-Service",
        description: "Erreichbarkeit auch bei Notfällen",
      },
    ],
    faqs: [
      {
        question: "Wie garantieren Sie Zuverlässigkeit bei 25 km Entfernung?",
        answer:
          "Wir haben ein dediziertes Team für Worms, das fest eingeplante Routen fährt. Regelmäßige Aufträge werden zuverlässig und pünktlich erledigt.",
      },
      {
        question: "In welchen Wormser Stadtteilen sind Sie aktiv?",
        answer:
          "Wir betreuen Objekte in allen Wormser Stadtteilen, von der Innenstadt über Pfeddersheim bis nach Herrnsheim und Leiselheim.",
      },
      {
        question: "Wie lange dauert es bei einem Notfall?",
        answer:
          "Bei echten Notfällen sind wir innerhalb von 45-60 Minuten in Worms. Für schnellere Reaktionszeiten arbeiten wir mit lokalen Partnern zusammen.",
      },
      {
        question: "Lohnt sich der Service trotz der Entfernung preislich?",
        answer:
          "Ja! Durch unsere effiziente Routenplanung können wir faire Preise anbieten. Die Anfahrt wird auf mehrere Objekte verteilt.",
      },
    ],
    stats: [
      { value: "25 km", label: "Entfernung" },
      { value: "13", label: "Stadtteile" },
      { value: "100%", label: "Zuverlässigkeit" },
      { value: "Planbar", label: "Einsätze" },
    ],
    testimonial: {
      quote:
        "Wir hatten Bedenken wegen der Entfernung. Aber Traumplatz ist genauso zuverlässig wie ein lokaler Anbieter - nur besser.",
      author: "Hausverwaltung Nibelungen",
      location: "Worms-Zentrum",
      rating: 5,
    },
    ctaTitle: "Qualität kennt keine Entfernung",
    ctaSubtitle:
      "Überzeugen Sie sich selbst - erstklassiger Hausmeisterservice auch in Worms.",
    uniqueSellingPoints: [
      "Dediziertes Team",
      "13 Stadtteile",
      "100% Zuverlässig",
    ],
  },
};

// Helper function to get city content by slug
export function getCityContent(slug: string): CityPageContent | undefined {
  return cityContent[slug];
}

// Get all city slugs for static generation
export function getAllCitySlugs(): string[] {
  return Object.keys(cityContent);
}
