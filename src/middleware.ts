import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// URLs die dauerhaft entfernt wurden (410 Gone)
const GONE_PATHS = new Set([
  "/services-3/",
  "/video-popup/",
  "/google-maps/",
  "/team/james-garcia/",
  "/service/lawn-maintenance/",
  "/portfolio/gardening-for-beans/",
  "/service/planting-and-landscape/",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Trailing Slash normalisieren für den Vergleich
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;

  if (GONE_PATHS.has(normalized)) {
    return new NextResponse(null, { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/services-3/:path*",
    "/video-popup/:path*",
    "/google-maps/:path*",
    "/team/james-garcia/:path*",
    "/service/lawn-maintenance/:path*",
    "/portfolio/gardening-for-beans/:path*",
    "/service/planting-and-landscape/:path*",
  ],
};
