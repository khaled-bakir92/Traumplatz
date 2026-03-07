"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const partners = [
  { id: 1, src: "/patner/1.png", alt: "Partner 1" },
  { id: 2, src: "/patner/2.png", alt: "Partner 2" },
  { id: 3, src: "/patner/3.png", alt: "Partner 3" },
  { id: 4, src: "/patner/4.png", alt: "Partner 4" },
  { id: 5, src: "/patner/5.png", alt: "Partner 5" },
  { id: 6, src: "/patner/6.png", alt: "Partner 6" },
  { id: 7, src: "/patner/7.png", alt: "Partner 7" },
  { id: 8, src: "/patner/8.png", alt: "Partner 8" },
  { id: 9, src: "/patner/9.png", alt: "Partner 9" },
  { id: 10, src: "/patner/10.png", alt: "Partner 10" },
  { id: 11, src: "/patner/11.png", alt: "Partner 11" },
  { id: 12, src: "/patner/12.png", alt: "Partner 12" },
];

export function PartnersSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
          Diese Kunde vertrauen uns bereits
        </h2>

        <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {partners.map((partner) => (
                <CarouselItem
                  key={partner.id}
                  className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="flex items-center justify-center h-32 p-4">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={200}
                      height={120}
                      sizes="(max-width: 640px) 120px, 200px"
                      className="max-h-24 w-auto object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
