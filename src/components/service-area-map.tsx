"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import type { Map as LeafletMap } from "leaflet";

interface ServiceAreaCity {
  slug: string;
  name: string;
  isHQ: boolean;
  distanceFromHQ: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface ServiceAreaMapProps {
  cities: ServiceAreaCity[];
  serviceSlug?: string;
  variant?: "green" | "blue";
}

export function ServiceAreaMap({
  cities,
  serviceSlug = "hausmeisterservice",
  variant = "green",
}: ServiceAreaMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    let map: LeafletMap | null = null;

    async function setupMap() {
      if (!mapRef.current) return;

      const L = await import("leaflet");

      const leafletMap = L.map(mapRef.current, {
        center: [49.68, 8.62],
        zoom: 10,
        scrollWheelZoom: false,
      });
      map = leafletMap;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(leafletMap);

      const palette =
        variant === "blue"
          ? {
              hqStroke: "#0369a1",
              hqFill: "#0284c7",
              cityStroke: "#334155",
              cityFill: "#64748b",
              linkColor: "#0284c7",
            }
          : {
              hqStroke: "#166534",
              hqFill: "#15803d",
              cityStroke: "#1f2937",
              cityFill: "#374151",
              linkColor: "#166534",
            };

      cities.forEach((city) => {
        const marker = L.circleMarker([city.coordinates.lat, city.coordinates.lng], {
          radius: city.isHQ ? 8 : 6,
          color: city.isHQ ? palette.hqStroke : palette.cityStroke,
          fillColor: city.isHQ ? palette.hqFill : palette.cityFill,
          fillOpacity: 0.9,
          weight: 2,
        }).addTo(leafletMap);

        marker.bindTooltip(city.name, {
          direction: "top",
          offset: [0, -8],
        });

        marker.on("click", () => {
          router.push(`/${serviceSlug}/${city.slug}`);
        });

        const el = marker.getElement() as HTMLElement | undefined;
        if (el) el.style.cursor = "pointer";
      });
    }

    setupMap();

    return () => {
      if (map) map.remove();
    };
  }, [cities, serviceSlug, variant]);

  return (
    <div className="h-72 sm:h-80 lg:h-[28rem] overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
      <div ref={mapRef} className="h-full w-full" />
    </div>
  );
}
