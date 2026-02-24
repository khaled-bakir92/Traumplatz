import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PromoBanner() {
  return (
    <section
      className="relative py-12 sm:py-16 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/banner-01-1.jpg')" }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
            <span className="text-red-500">-15% Rabatt für Neukunden!</span>{" "}
            <span className="text-brand-green">
              Ihr Partner für Garten- Und Gebäudemanagement
            </span>
          </h2>

          <div className="mt-6">
            <Link
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Kontaktieren Sie uns
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
