const OUTBOUND = [
  ["09:35", "09:45", "09:55"], ["10:30", "10:35", "10:45"],
  ["12:30", "12:35", "12:45"], ["14:30", "14:35", "14:45"],
  ["16:35", "16:45", "16:55"], ["17:30", "17:40", "17:50"],
];
const RETURN = [
  ["10:05", "10:15", "10:25"], ["12:15", "12:25", "12:30"],
  ["14:15", "14:20", "14:30"], ["16:15", "16:25", "16:30"],
  ["17:05", "17:15", "17:25"], ["19:00", "19:15", "19:30"],
];

const Timetable = ({ title, stops, rows }) => (
  <table className="mt-3 w-full table-fixed text-center text-sm tabular-nums">
    <caption className="mb-2 text-left font-bold text-white">{title}</caption>
    <thead><tr>{stops.map((stop) => <th key={stop} scope="col" className="px-1 pb-2 font-normal text-[var(--gold-soft)]">{stop}</th>)}</tr></thead>
    <tbody>{rows.map((row) => <tr key={row[0]} className="border-t border-[var(--gold)]/20">{row.map((time, i) => <td key={i} className="px-1 py-2"><time>{time}</time></td>)}</tr>)}</tbody>
  </table>
);

export const ShuttleTimes = () => (
  <div className="mt-3 flex-1 font-body text-[var(--cream)]/85" data-testid="villa-shuttle-times">
    <p className="inline-block rounded-full border border-[var(--gold)]/30 px-3 py-1 text-sm text-[var(--gold-soft)]">Servizio stagionale · 1 aprile–30 ottobre</p>
    <p className="mt-3 text-base">Piazza Senatore Marescalchi ↔ Piazza Generale Cascino (Info Point) ↔ Villa Romana del Casale</p>
    <dl className="mt-4 space-y-2 text-lg">
      <div className="flex justify-between gap-3"><dt>Corsa singola</dt><dd className="font-bold text-white">1,50 €</dd></div>
      <div className="flex justify-between gap-3"><dt>Andata e ritorno in giornata</dt><dd className="shrink-0 font-bold text-white">2,50 €</dd></div>
    </dl>
    <details className="mt-4 border-t border-[var(--gold)]/20 pt-3 text-sm leading-relaxed" data-testid="shuttle-timetable-details">
      <summary className="cursor-pointer text-[var(--gold-soft)]">Orari andata e ritorno · 6 corse per direzione</summary>
      <Timetable title="Andata · Piazza Armerina → Villa" stops={["Marescalchi", "Cascino", "Villa"]} rows={OUTBOUND} />
      <Timetable title="Ritorno · Villa → Piazza Armerina" stops={["Villa", "Cascino", "Marescalchi"]} rows={RETURN} />
      <p className="mt-2 text-[var(--cream-dim)]">Orari locali italiani, riferiti al periodo stagionale indicato.</p>
    </details>
    <p className="mt-4 text-sm leading-relaxed">Prenota ogni corsa telefonicamente almeno <strong className="text-white">15 minuti prima</strong>. Per l’ultima corsa, preferibilmente almeno <strong className="text-white">45 minuti prima</strong>.</p>
    <a href="tel:+393664448128" className="mt-3 inline-flex rounded-lg border border-[var(--gold)]/40 px-3 py-2 text-base text-[var(--gold-soft)] hover:text-white" data-testid="shuttle-call">Chiama SA.DA. Tours · 366 444 8128</a>
    <p className="mt-3 text-sm leading-relaxed text-[var(--cream-dim)]">Fuori dal periodo indicato, contatta il gestore per conoscere i collegamenti disponibili. Conferma gli orari prima del viaggio.</p>
  </div>
);
