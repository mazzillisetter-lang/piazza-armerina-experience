const PARK_TICKETS = "https://parchiarcheologici.regione.sicilia.it/morgantina-villa-romana-casale/biglietti/villa-romana-del-casale/";
const REDUCTIONS = "https://parchiarcheologici.regione.sicilia.it/morgantina-villa-romana-casale/norme-accessi-gratuiti-e-ridotti/";
const COMBINED = "https://www.villaromanadelcasale.it/wp-content/uploads/2024/12/tabella-BIGLIETTI-DEL-PARCO_2025.pdf";
const linkClass = "underline underline-offset-2 text-[var(--gold-soft)] hover:text-white";

export const TicketPrices = () => (
  <div className="mt-3 flex-1 font-body text-[var(--cream)]/85" data-testid="villa-ticket-prices">
    <p className="text-base">Tariffe ordinarie · ingresso alla Villa</p>
    <dl className="mt-3 space-y-2 text-lg">
      {[["Intero", "14 €"], ["Ridotto", "7 €"], ["Minori di 18 anni", "Gratuito"]].map(([label, price]) => (
        <div key={label} className="flex items-baseline justify-between gap-3">
          <dt>{label}</dt>
          <dd className="shrink-0 font-bold tabular-nums text-xl text-white">{price}</dd>
        </div>
      ))}
    </dl>
    <p className="mt-3 text-sm leading-relaxed">Riduzioni e altre gratuità sono riservate alle categorie ammesse, con documentazione: <a href={REDUCTIONS} target="_blank" rel="noreferrer" className={linkClass}>requisiti del Parco</a>.</p>
    <details className="mt-4 border-t border-[var(--gold)]/20 pt-3 text-sm leading-relaxed" data-testid="ticket-exhibitions">
      <summary className="cursor-pointer text-[var(--gold-soft)]">Mostre e supplementi</summary>
      <p className="mt-2">Per la mostra di G. Aceves, il Parco pubblica un supplemento di 3 €: intero 17 €, ridotto 10 €. Verifica in biglietteria se applicabile alla tua visita.</p>
      <a href={PARK_TICKETS} target="_blank" rel="noreferrer" className={`${linkClass} mt-2 inline-block`}>Tariffe con mostra sul sito del Parco</a>
    </details>
    <details className="mt-3 text-sm leading-relaxed" data-testid="ticket-combined">
      <summary className="cursor-pointer text-[var(--gold-soft)]">Biglietti cumulativi</summary>
      <p className="mt-2">Tariffario ufficiale 2025 · intero / ridotto:</p>
      <ul className="mt-2 space-y-2">
        <li>Villa + Palazzo Trigona: <strong className="text-white">18 € / 9 €</strong>.</li>
        <li>Villa + Morgantina + Museo di Aidone: <strong className="text-white">24 € / 12 €</strong>.</li>
        <li>I cinque siti del Parco: <strong className="text-white">34 € / 17 €</strong> (Villa, Morgantina, Museo di Aidone, Palazzo Trigona e Museo di Enna).</li>
      </ul>
      <p className="mt-2">Conferma importi, validità ed eventuali supplementi in biglietteria.</p>
      <a href={COMBINED} target="_blank" rel="noreferrer" className={`${linkClass} mt-2 inline-block`}>Consulta il tariffario ufficiale 2025 (PDF)</a>
    </details>
  </div>
);
