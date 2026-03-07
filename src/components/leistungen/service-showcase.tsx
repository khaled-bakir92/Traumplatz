import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceShowcaseData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  features: ServiceFeature[];
  badge?: {
    text: string;
    icon: LucideIcon;
    position?: "left" | "right";
  };
}

interface ServiceShowcaseProps {
  service: ServiceShowcaseData;
  isReversed?: boolean;
  bgColor?: "white" | "section-gray";
}

export function ServiceShowcase({
  service,
  isReversed = false,
  bgColor = "white",
}: ServiceShowcaseProps) {
  const ServiceIcon = service.icon;

  return (
    <section
      id={service.slug}
      className={`py-16 md:py-24 px-4 ${bgColor === "white" ? "bg-white" : "bg-section-gray"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${
            isReversed ? "md:grid-flow-dense" : ""
          }`}
        >
          {/* Image */}
          <div className={`relative ${isReversed ? "md:col-start-2" : ""}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              <Image
                src={service.image}
                alt={service.imageAlt}
                width={600}
                height={500}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-[400px] md:h-[500px] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Badge */}
              {service.badge && (
                <div className={`absolute top-4 ${service.badge.position === "left" ? "left-4" : "right-4"} bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2`}>
                  <service.badge.icon className="w-4 h-4 text-brand-green" />
                  <span className="text-sm font-semibold text-gray-900">
                    {service.badge.text}
                  </span>
                </div>
              )}

            </div>
          </div>

          {/* Content */}
          <div className={isReversed ? "md:col-start-1" : ""}>
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-4">
              <ServiceIcon className="w-5 h-5 text-brand-green" />
              <span className="text-sm font-semibold text-brand-green uppercase tracking-wide">
                {service.name}
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {service.tagline}
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {service.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-8">
              {service.features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:border-brand-green/30 hover:shadow-sm transition-all duration-200 group/feature"
                >
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 bg-green-50 rounded-lg group-hover/feature:bg-green-100 transition-colors">
                    <feature.icon className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-0.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="bg-brand-green hover:bg-brand-green-dark text-white rounded-full px-6 group"
            >
              <Link href={`/${service.slug}`}>
                Mehr erfahren
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
