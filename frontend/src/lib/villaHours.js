export const VILLA_TIME_ZONE = "Europe/Rome";

// Regola stagionale ordinaria concordata: il cambio d'ora europeo avviene
// alle 01:00 UTC dell'ultima domenica di marzo e di ottobre.
// Nessun orario viene ricavato dal fuso impostato sul dispositivo del visitatore.
const romeYear = new Intl.DateTimeFormat("en", {
  timeZone: VILLA_TIME_ZONE,
  year: "numeric",
});

const HOURS = {
  summer: { season: "summer", label: "Ora legale · orario estivo", opens: "09:00", lastEntry: "18:00", closes: "19:00" },
  winter: { season: "winter", label: "Ora solare · orario invernale", opens: "09:00", lastEntry: "16:00", closes: "17:00" },
};

export function lastSundayAtOneUtc(year, monthIndex) {
  const monthEnd = new Date(Date.UTC(year, monthIndex + 1, 0));
  return new Date(Date.UTC(year, monthIndex, monthEnd.getUTCDate() - monthEnd.getUTCDay(), 1));
}

export function getVillaOpeningHours(value = new Date()) {
  const now = new Date(value);
  if (!Number.isFinite(now.getTime())) throw new RangeError("Data non valida per gli orari della Villa");
  const year = Number(romeYear.format(now));
  const summerStarts = lastSundayAtOneUtc(year, 2);
  const winterStarts = lastSundayAtOneUtc(year, 9);
  const isSummer = now >= summerStarts && now < winterStarts;
  const nextChange = now < summerStarts
    ? summerStarts
    : isSummer
      ? winterStarts
      : lastSundayAtOneUtc(year + 1, 2);

  return {
    ...HOURS[isSummer ? "summer" : "winter"],
    timeZone: VILLA_TIME_ZONE,
    nextChange,
    nextSeason: isSummer ? "winter" : "summer",
  };
}

export const formatVillaChangeDate = (date) => new Intl.DateTimeFormat("it-IT", {
  timeZone: VILLA_TIME_ZONE,
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(date);
