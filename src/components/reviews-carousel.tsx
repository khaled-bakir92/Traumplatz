"use client";

import { useEffect, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { TransformedReview } from "@/lib/google-places";

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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

const avatarColors = [
  "bg-amber-700",
  "bg-teal-600",
  "bg-blue-600",
  "bg-purple-600",
  "bg-rose-600",
];

function getAvatarColor(name: string): string {
  const index = name.charCodeAt(0) % avatarColors.length;
  return avatarColors[index];
}

function Avatar({ name, initials, photoUrl }: { name: string; initials: string; photoUrl: string | null }) {
  const [imageError, setImageError] = useState(false);

  if (!photoUrl || imageError) {
    return (
      <div
        className={`w-10 h-10 ${getAvatarColor(name)} rounded-full flex items-center justify-center text-white font-medium text-sm shrink-0`}
      >
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photoUrl}
      alt={name}
      className="w-10 h-10 rounded-full object-cover shrink-0"
      referrerPolicy="no-referrer"
      onError={() => setImageError(true)}
    />
  );
}

function ReviewCard({ review }: { review: TransformedReview }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <Avatar name={review.name} initials={review.initials} photoUrl={review.photoUrl} />
          <div>
            <p className="font-medium text-gray-900 text-sm">{review.name}</p>
            <p className="text-gray-500 text-xs">{review.time}</p>
          </div>
        </div>
        <GoogleIcon className="h-5 w-5 shrink-0" />
      </div>
      <StarRating rating={review.rating} />
      <p className="mt-3 text-gray-700 text-sm leading-relaxed grow">{review.text}</p>
    </div>
  );
}

interface ReviewsCarouselProps {
  reviews: TransformedReview[];
}

export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const totalReviews = reviews.length;

  // Mobile: 1 Karte sichtbar, Desktop: 3 Karten sichtbar
  const visibleCards = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, totalReviews - visibleCards);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-scroll alle 4 Sekunden
  useEffect(() => {
    if (isPaused || totalReviews <= visibleCards) return;

    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [isPaused, totalReviews, visibleCards, goToNext]);

  // Reset index wenn sich die Ansicht ändert
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Berechne translateX basierend auf Kartenbreite
  const cardWidthPercent = 100 / visibleCards;
  const translateX = currentIndex * cardWidthPercent;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
    >
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${translateX}%)`,
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="shrink-0 px-2"
              style={{ width: `${cardWidthPercent}%` }}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {totalReviews > visibleCards && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-8 h-8 md:w-10 md:h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors z-10"
            aria-label="Vorherige Bewertung"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-8 h-8 md:w-10 md:h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors z-10"
            aria-label="Nächste Bewertung"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
          </button>
        </>
      )}

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "w-6 bg-brand-green"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Seite ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
