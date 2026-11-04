import { useEffect, useState } from "react";
import initialData from "@/content/palio-initial.json";
import { PALIO_FEED_URL, validPalioUpdates } from "@/lib/palioUpdates";
const KEY = "pa-palio-official-2027-v1";
export function usePalioUpdates() {
  const [data, setData] = useState(() => {
    try { const saved = JSON.parse(localStorage.getItem(KEY)); if (validPalioUpdates(saved) && saved.verifiedAt >= initialData.verifiedAt) return saved; } catch {}
    return initialData;
  });
  const [unavailable, setUnavailable] = useState(false);
  useEffect(() => {
    let active = true;
    let running = false;
    let controller;
    const refresh = async () => {
      if (running) return;
      running = true;
      controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      try {
        const response = await fetch(PALIO_FEED_URL, { cache: "no-store", signal: controller.signal });
        if (!response.ok) throw new Error("Feed unavailable");
        const next = await response.json();
        if (!validPalioUpdates(next)) throw new Error("Invalid official update");
        if (active) {
          setData(previous => next.verifiedAt >= previous.verifiedAt ? next : previous);
          setUnavailable(false);
          try { const saved = JSON.parse(localStorage.getItem(KEY)); if (!validPalioUpdates(saved) || next.verifiedAt >= saved.verifiedAt) localStorage.setItem(KEY, JSON.stringify(next)); } catch { try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {} }
        }
      } catch { if (active) setUnavailable(true); }
      finally { clearTimeout(timeout); running = false; }
    };
    refresh();
    const interval = setInterval(refresh, 5 * 60 * 1000);
    window.addEventListener("focus", refresh);
    return () => { active = false; controller?.abort(); clearInterval(interval); window.removeEventListener("focus", refresh); };
  }, []);
  return { data, unavailable };
}
