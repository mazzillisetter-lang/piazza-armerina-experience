export const FOOD_CATEGORIES = [
  ["all", "Tutti"], ["ristorante", "Ristoranti"], ["pizza", "Pizza"],
  ["veloce", "Pranzo veloce e rosticceria"], ["panificio", "Panifici"],
  ["dolci", "Dolci e gelati"], ["bar", "Bar e caffè"], ["aperitivo", "Aperitivo"],
];
export const FOOD_ZONES = { villa:"Vicino alla Villa", centro:"Centro e vie vicine", citta:"In città", dintorni:"Campagna e dintorni" };
export const normalizeFoodSearch = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[’']/g," ").replace(/\s+/g," ").trim();
export function filterFoodVenues(venues, { query = "", category = "all", zone = "all" } = {}) {
  const terms = normalizeFoodSearch(query).split(" ").filter(Boolean);
  return venues.filter(venue => (category === "all" || venue.categories.includes(category)) && (zone === "all" || venue.zone === zone) && terms.every(term => normalizeFoodSearch([venue.name,venue.address,venue.description,FOOD_ZONES[venue.zone],...venue.categories.map(c=>FOOD_CATEGORIES.find(x=>x[0]===c)?.[1] || c)].join(" ")).includes(term)));
}
export const foodMapUrl = venue => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${venue.name}, ${venue.address}${/piazza armerina/i.test(venue.address) ? "" : ", Piazza Armerina"}`)}`;
