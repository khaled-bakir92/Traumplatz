import { postHogMiddleware } from "@posthog/next";

export default postHogMiddleware({
  proxy: {
    pathPrefix: "/ingest",
    host: "https://us.i.posthog.com",
  },
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
