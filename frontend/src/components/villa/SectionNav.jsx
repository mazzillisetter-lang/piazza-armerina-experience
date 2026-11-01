const IDS = ["storia", "mosaici", "percorso", "visita", "dopo"];

export const SectionNav = ({ ui }) => (
  <nav className="sticky top-[78px] sm:top-[92px] lg:top-[100px] z-40 bg-[rgba(18,9,7,0.92)] backdrop-blur-xl border-y border-[var(--gold)]/25" data-testid="villa-section-nav">
    <div className="max-w-[1320px] mx-auto px-3 sm:px-8 lg:px-12 flex gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-2">
      {ui.nav.map((label, i) => (
        <a key={IDS[i]} href={`#${IDS[i]}`} data-testid={`villa-nav-${IDS[i]}`} className="shrink-0 px-4 py-2 rounded-full font-body text-base text-[var(--cream)] hover:bg-[var(--gold)]/15 hover:text-[var(--gold-soft)] transition-colors whitespace-nowrap">
          <span className="text-[var(--gold)] mr-1.5 font-display text-sm">{String(i + 1).padStart(2, "0")}</span>{label}
        </a>
      ))}
    </div>
  </nav>
);
