// Google Places API Integration für Reviews
// Dokumentation: https://developers.google.com/maps/documentation/places/web-service/place-details

export interface GoogleReview {
  rating: number;
  text: {
    text: string;
    languageCode: string;
  };
  originalText?: {
    text: string;
    languageCode: string;
  };
  relativePublishTimeDescription: string;
  authorAttribution: {
    displayName: string;
    photoUri: string;
  };
}

export interface TransformedReview {
  id: string;
  name: string;
  initials: string;
  photoUrl: string | null;
  time: string;
  rating: number;
  text: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
}

// Deutsche Zeitangaben
function translateTime(time: string): string {
  return time
    .replace("months ago", "Monaten")
    .replace("month ago", "Monat")
    .replace("weeks ago", "Wochen")
    .replace("week ago", "Woche")
    .replace("days ago", "Tagen")
    .replace("day ago", "Tag")
    .replace("years ago", "Jahren")
    .replace("year ago", "Jahr")
    .replace(/^(\d+)/, "vor $1");
}

export async function fetchGoogleReviews(): Promise<{
  reviews: TransformedReview[];
  rating: number;
  totalReviews: number;
}> {
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

  if (!PLACE_ID || !API_KEY) {
    throw new Error("Google Places API credentials not configured");
  }

  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;

  const response = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": API_KEY,
      "X-Goog-FieldMask": "reviews,rating,userRatingCount",
    },
    // ISR: Alle 2 Tage revalidieren (172800 Sekunden)
    next: { revalidate: 172800 },
  });

  if (!response.ok) {
    throw new Error(`Google Places API error: ${response.status}`);
  }

  const data = await response.json();

  // Reviews transformieren (API liefert max 5)
  // Bevorzuge originalText (deutsch) falls vorhanden
  const reviews: TransformedReview[] = (data.reviews || []).map(
    (r: GoogleReview, i: number) => ({
      id: `review-${i}`,
      name: r.authorAttribution.displayName,
      initials: getInitials(r.authorAttribution.displayName),
      photoUrl: r.authorAttribution.photoUri || null,
      time: translateTime(r.relativePublishTimeDescription),
      rating: r.rating,
      text: r.originalText?.text || r.text.text,
    })
  );

  return {
    reviews,
    rating: data.rating,
    totalReviews: data.userRatingCount,
  };
}
