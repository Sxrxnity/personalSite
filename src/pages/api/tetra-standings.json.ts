import type { APIRoute } from "astro";
import { getStandings } from "../../lib/tetrio";

// Runs on every request, unlike the rest of the site, which is built ahead of time.
// The browser can't call ch.tetr.io directly (it only allows tetr.io), so the page asks this instead.
export const prerender = false;

export const GET: APIRoute = async () => {
  const standings = await getStandings();
  return new Response(JSON.stringify(standings), {
    status: standings ? 200 : 503,
    headers: {
      "Content-Type": "application/json",
      // TETR.IO caches its own data for ~5 minutes, so Vercel's CDN can too:
      // viewers get current numbers without every page view hitting TETR.IO.
      "Cache-Control": standings ? "public, s-maxage=300, stale-while-revalidate=600" : "no-store",
    },
  });
};
