export const PALIO_FEED_URL = "https://raw.githubusercontent.com/mazzillisetter-lang/piazza-armerina-experience/armerina-experience-20261101/frontend/public/data/palio-2027.json";
const HOSTS = ["www.comune.piazzaarmerina.en.it", "comune.piazzaarmerina.en.it", "servizi.comune.piazzaarmerina.en.it"];
export const isMunicipalSource = value => {
  try { const u = new URL(value); return u.protocol === "https:" && HOSTS.includes(u.hostname) && !u.username && !u.password; } catch { return false; }
};
const date = value => typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) && new Date(value + "T00:00:00Z").toISOString().slice(0,10) === value;
const text = (value, max) => typeof value === "string" && value.trim().length > 0 && value.length <= max;
export function validPalioUpdates(data) {
  try {
    if (!data || data.schemaVersion !== 1 || data.edition !== 2027 || !["pending", "partial", "confirmed", "cancelled"].includes(data.status) || !date(data.verifiedAt) || !text(data.summary, 1600) || !Array.isArray(data.items) || data.items.length > 30) return false;
    if (data.dateLabel !== null && (!text(data.dateLabel, 120) || !isMunicipalSource(data.dateSourceUrl))) return false;
    if (data.status === "confirmed" && !data.dateLabel) return false;
    if (data.status !== "pending" && data.items.length === 0) return false;
    const ids = new Set();
    return data.items.every(item => {
      if (!text(item.id, 120) || ids.has(item.id)) return false;
      ids.add(item.id);
      return text(item.title, 240) && text(item.text, 2000) && date(item.publishedAt) && isMunicipalSource(item.sourceUrl);
    });
  } catch { return false; }
}
export const palioStatusTitle = status => ({pending:"In attesa del programma ufficiale", partial:"Primi comunicati ufficiali", confirmed:"Programma ufficiale disponibile", cancelled:"Edizione annullata · Comunicazione del Comune"}[status]);
export const formatPalioDate = value => new Intl.DateTimeFormat("it-IT", { day:"numeric", month:"long", year:"numeric", timeZone:"Europe/Rome" }).format(new Date(value+"T12:00:00Z"));
