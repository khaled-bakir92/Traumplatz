import { Star } from "lucide-react";
import { fetchGoogleReviews } from "@/lib/google-places";
import { ReviewsCarousel } from "./reviews-carousel";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

// Server Component - lädt Reviews serverseitig mit ISR (alle 2 Tage)
export async function ReviewsSection() {
  const { reviews, rating, totalReviews } = await fetchGoogleReviews();

  // Rating-Text basierend auf Bewertung
  const ratingText =
    rating >= 4.5 ? "AUSGEZEICHNET" : rating >= 4.0 ? "SEHR GUT" : "GUT";

  // Anzahl voller Sterne
  const fullStars = Math.round(rating);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          Das sagen unsere Kunden aus Bensheim
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          {/* Left side - Rating Summary */}
          <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-xl font-bold text-gray-900 tracking-wide mb-2">
              {ratingText}
            </h3>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-8 w-8 ${
                    i < fullStars
                      ? "fill-amber-400 text-amber-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Basierend auf <strong>{totalReviews} Bewertungen</strong>
            </p>
            <div className="flex items-center gap-1">
              <GoogleIcon className="h-8 w-auto" />
              <span className="text-xl font-medium tracking-tight">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
            </div>
          </div>

          {/* Right side - Review Cards with Carousel on Mobile */}
          <div className="lg:w-3/4 w-full">
            <ReviewsCarousel reviews={reviews.slice(0, 5)} />
          </div>
        </div>
      </div>
    </section>
  );
}
