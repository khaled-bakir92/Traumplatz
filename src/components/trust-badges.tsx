import { CheckCircle } from "lucide-react";

const badges = [
  {
    title: "Ein fester Objektbetreuer",
    description: "Kein Wechsel, keine Ausreden",
  },
  {
    title: "Ein fester Objektbetreuer",
    description: "Technik, Pflege, Koordination und Kontrolle",
  },
  {
    title: "Ein fester Objektbetreuer",
    description: "Auch bei Schnee, Schäden oder Störungen",
  },
];

export function TrustBadges() {
  return (
    <section
      className="py-12 sm:py-16"
      style={{ backgroundColor: "rgba(217, 217, 217, 0.21)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-start gap-4 text-center md:text-left md:items-center md:justify-center"
            >
              <CheckCircle className="h-8 w-8 text-brand-green flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {badge.title}
                </h3>
                <p className="text-gray-600 text-sm">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
