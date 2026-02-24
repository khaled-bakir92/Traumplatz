import Image from "next/image";
import Link from "next/link";

const serviceCards = [
  {
    title: "Hausmeisterservice",
    image: "/leistungen/Hausmeister.png",
    href: "/hausmeisterservice",
  },
  {
    title: "Glas- Und Gebäudereinigung",
    image: "/leistungen/glasreinigung.png",
    href: "/gebaeudereinigung",
  },
  {
    title: "Rasenschnitt",
    image: "/leistungen/Rasenschnitt.png",
    href: "/gartenpflege",
  },
  {
    title: "Winterdienst",
    image: "/leistungen/Winterdienst.png",
    href: "/winterdienst",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {serviceCards.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-square mb-4 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-medium text-gray-900 group-hover:text-brand-green transition-colors text-sm sm:text-base">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
