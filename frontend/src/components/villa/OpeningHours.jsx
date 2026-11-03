import { useEffect, useState } from "react";
import { formatVillaChangeDate, getVillaOpeningHours } from "@/lib/villaHours";

export const OpeningHours = () => {
  const [now, setNow] = useState(() => new Date());
  const hours = getVillaOpeningHours(now);

  useEffect(() => {
    let timer;
    // Al massimo un minuto tra i controlli, con aggiornamento esatto al cambio
    // stagionale se la pagina rimane aperta e il browser non è sospeso.
    const refresh = () => {
      window.clearTimeout(timer);
      const current = new Date();
      setNow(current);
      const untilChange = getVillaOpeningHours(current).nextChange.getTime() - current.getTime();
      timer = window.setTimeout(refresh, Math.min(60_000, Math.max(1, untilChange)));
    };
    const onVisibility = () => { if (!document.hidden) refresh(); };
    refresh();
    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="mt-3 flex-1 font-body text-[var(--cream)]/85" data-testid="villa-opening-hours">
      <p className="inline-block rounded-full border border-[var(--gold)]/30 px-3 py-1 text-sm text-[var(--gold-soft)]" data-testid="hours-season">{hours.label}</p>
      <p className="mt-3 text-base">Tutti i giorni · orari locali italiani</p>
      <dl className="mt-3 space-y-2 text-lg">
        {[["Apertura", hours.opens], ["Ultimo ingresso", hours.lastEntry], ["Chiusura", hours.closes]].map(([label, time]) => (
          <div key={label} className="flex items-baseline justify-between gap-3">
            <dt>{label}</dt>
            <dd className="font-bold tabular-nums text-xl text-white"><time>{time}</time></dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 border-t border-[var(--gold)]/20 pt-3 text-sm leading-relaxed" data-testid="hours-next-change">
        Dal {formatVillaChangeDate(hours.nextChange)}: chiusura alle {hours.nextSeason === "summer" ? "19:00" : "17:00"}, ultimo ingresso alle {hours.nextSeason === "summer" ? "18:00" : "16:00"}.
      </p>
      <details className="mt-3 text-sm leading-relaxed">
        <summary className="cursor-pointer text-[var(--gold-soft)]">Gli orari nelle due stagioni</summary>
        <p className="mt-2">Ora legale, dall’ultima domenica di marzo: 09:00–19:00, ultimo ingresso 18:00.</p>
        <p className="mt-1">Ora solare, dall’ultima domenica di ottobre: 09:00–17:00, ultimo ingresso 16:00.</p>
      </details>
      <p className="mt-3 text-sm leading-relaxed text-[var(--cream-dim)]">Eventuali aperture straordinarie e variazioni sono pubblicate dal Parco.</p>
    </div>
  );
};
