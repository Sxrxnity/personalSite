// Tetra League standings for _serenity_, from TETR.IO's public API (https://ch.tetr.io).
const USER = "_serenity_";

async function get(path: string) {
  const res = await fetch(`https://ch.tetr.io/api/${path}`, { headers: { "X-Session-ID": "personal-site" } });
  const json = await res.json();
  if (!json.success) throw new Error(json.error?.msg ?? `HTTP ${res.status}`);
  return json.data;
}

export type Standings = { world: number; local: number; country: string };

/** Current standings, or null if unranked or the API is unreachable. */
export async function getStandings(): Promise<Standings | null> {
  try {
    const [user, league] = await Promise.all([get(`users/${USER}`), get(`users/${USER}/summaries/league`)]);
    if (league.standing < 1) return null; // unranked or decayed out of the leaderboard
    return {
      world: league.standing,
      local: league.standing_local,
      country: new Intl.DisplayNames("en", { type: "region" }).of(user.country) ?? user.country,
    };
  } catch (err) {
    console.warn("Could not fetch TETR.IO standings:", err);
    return null;
  }
}
