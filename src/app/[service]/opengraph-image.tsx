import { ImageResponse } from "next/og";
import { getServiceBySlug, businessInfo } from "@/lib/seo-config";

export const alt = "Traumplatz Service OpenGraph Image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  const title = service ? service.name : businessInfo.name;

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #f0fdf4, #ffffff)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "72px",
            fontWeight: "bold",
            color: "#166534",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "36px",
            color: "#374151",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          {service ? "Professionelle Dienstleistungen für Ihre Region" : "Ihr starker Partner an der Bergstraße"}
        </div>
        
        <div
          style={{
            display: "flex",
            marginTop: "60px",
            fontSize: "32px",
            fontWeight: "bold",
            color: "#15803d",
            border: "4px solid #166534",
            padding: "16px 32px",
            borderRadius: "16px",
          }}
        >
          {businessInfo.name}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
