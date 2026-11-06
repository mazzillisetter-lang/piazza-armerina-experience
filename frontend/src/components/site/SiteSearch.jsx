import { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, X, ArrowUpRight } from "lucide-react";

const PATHS = ["/villa-romana-del-casale", "/centro-storico", "/palio-dei-normanni", "/dove-mangiare", "/dove-dormire", "/natura-e-itinerari", "/eventi", "/prodotti-tipici", "/mappe-e-navette"];
const LABELS = {
  it: ["Cerca nel sito", "Cerca una sezione: parcheggio, mosaici, farmacie…", "Nessuna sezione trovata. Prova un altro termine.", "Servizi utili", "Farmacie, supermercati e assistenza", "Chiudi ricerca"],
  en: ["Search the site", "Find a section: parking, mosaics, pharmacies…", "No sections found. Try another term.", "Useful services", "Pharmacies, supermarkets and assistance", "Close search"],
  de: ["Website durchsuchen", "Bereich suchen: Parken, Mosaiken, Apotheken…", "Kein Bereich gefunden. Versuchen Sie einen anderen Begriff.", "Nützliche Dienste", "Apotheken, Supermärkte und Hilfe", "Suche schließen"],
  fr: ["Rechercher sur le site", "Trouver une rubrique : parking, mosaïques, pharmacies…", "Aucune rubrique trouvée. Essayez un autre terme.", "Services utiles", "Pharmacies, supermarchés et assistance", "Fermer la recherche"],
  es: ["Buscar en el sitio", "Buscar una sección: aparcamiento, mosaicos, farmacias…", "No se encontraron secciones. Prueba otro término.", "Servicios útiles", "Farmacias, supermercados y asistencia", "Cerrar búsqueda"],
};
const KEYWORDS = ["mosaici mosaics biglietti tickets orari hours accessibilità accessibility", "duomo cattedrale cathedral trigona chiese churches", "normanni knights cavalieri", "ristoranti restaurants bar pizza food", "hotel b&b camere rooms accommodation suite autore suite d'autore suite d’autore suitedautore", "sentieri trails boschi hiking pergusa", "calendario calendar concerti concerts", "pane bread dolci sweets formaggi cheese", "parcheggio parking navetta shuttle autobus bus directions arrivare", "farmacie pharmacy pharmacies apotheke pharmacie farmacia supermercati supermarket benzina fuel medico doctor assistenza"];
const normalize = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export const SiteSearch = ({ t, lang }) => {
  const input = useRef(null);
  const [query, setQuery] = useState("");
  const l = LABELS[lang] || LABELS.it;
  const entries = [...t.cards.map(([title, , description], i) => ({ title, description, href: PATHS[i], keywords: KEYWORDS[i] })), { title: l[3], description: l[4], href: "/servizi-utili", keywords: KEYWORDS[9] }];
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  const results = entries.filter((item) => terms.every((term) => normalize(`${item.title} ${item.description} ${item.keywords}`).includes(term)));
  return (
    <Dialog.Root onOpenChange={() => setQuery("")}>
      <Dialog.Trigger asChild><button data-testid="header-search-btn" aria-label={l[0]} className="grid place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[rgba(20,10,8,0.82)] text-white hover:text-[var(--gold)]"><Search className="w-5 h-5" /></button></Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/85" />
        <Dialog.Content onOpenAutoFocus={(e) => { e.preventDefault(); input.current?.focus(); }} className="fixed left-1/2 top-1/2 z-[101] w-[92vw] max-w-xl -translate-x-1/2 -translate-y-1/2 border border-[var(--gold)]/50 rounded-xl bg-[#17100b] p-5 sm:p-7 text-[var(--cream)]" data-testid="site-search-dialog" data-lenis-prevent>
          <Dialog.Title className="pr-10 font-display text-2xl">{l[0]}</Dialog.Title>
          <Dialog.Description className="mt-2 font-body text-base">{l[1]}</Dialog.Description>
          <Dialog.Close aria-label={l[5]} className="absolute right-3 top-3 p-2"><X /></Dialog.Close>
          <label className="sr-only" htmlFor="site-search-input">{l[0]}</label>
          <input ref={input} id="site-search-input" type="search" value={query} onChange={(e) => setQuery(e.target.value)} className="mt-4 w-full rounded-md border border-[var(--gold)]/50 bg-black/30 px-3 py-2 text-lg" autoComplete="off" />
          <div className="mt-4 max-h-[50svh] overflow-y-auto" data-testid="site-search-results">
            {results.length ? <ul>{results.map((item) => <li key={item.href}><a href={item.href} className="block border-b border-white/15 py-3 hover:text-[var(--gold-soft)]"><span className="flex items-center justify-between gap-3 font-display text-lg">{item.title}<ArrowUpRight className="w-4 h-4 shrink-0" /></span><span className="block mt-1 font-body text-sm">{item.description}</span></a></li>)}</ul> : <p role="status" className="font-body py-4">{l[2]}</p>}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
