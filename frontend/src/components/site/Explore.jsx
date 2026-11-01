import { motion } from "framer-motion";
import { Landmark, Church, Shield, UtensilsCrossed, BedDouble, Mountain, CalendarDays, Wheat, Map, ArrowUpRight } from "lucide-react";

const ICONS = [Landmark, Church, Shield, UtensilsCrossed, BedDouble, Mountain, CalendarDays, Wheat, Map];
const KEYS = ["villa", "centro", "palio", "mangiare", "dormire", "natura", "eventi", "prodotti", "mappe"];

const Card = ({ data, i, soon }) => {
  const [title, tag, text] = data;
  const Icon = ICONS[i];
  const big = i === 0;
  return (
    <motion.a
      href={i === 0 ? "/villa-romana-del-casale" : "#esplora"}
      onClick={(e) => { if (i !== 0) e.preventDefault(); }}
      data-testid={`nav-card-${KEYS[i]}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: (i % 4) * 0.08 }}
      className={`ecard group ${big ? "sm:col-span-2 lg:row-span-2 ecard-big" : ""}`}
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-[var(--gold)] text-lg tracking-wider">{String(i + 1).padStart(2, "0")}</span>
        <Icon strokeWidth={1.1} className={`${big ? "w-14 h-14" : "w-9 h-9"} text-[var(--gold-soft)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-6deg]`} />
      </div>
      <div className="mt-auto pt-10">
        <p className="kicker mb-3">{tag}</p>
        <h3 className={`font-display text-[var(--cream)] leading-[1.05] ${big ? "text-4xl sm:text-5xl lg:text-6xl" : "text-2xl sm:text-[1.7rem]"}`}>{title}</h3>
        <p className={`text-[var(--cream-dim)] mt-3 leading-relaxed ${big ? "text-base sm:text-lg max-w-md" : "text-sm"}`}>{text}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-[var(--gold)]">
          {soon}<ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </motion.a>
  );
};

export const Explore = ({ t }) => (
  <section id="esplora" className="bg-[var(--ink)] py-24 sm:py-32" data-testid="explore-section">
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1 }}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
      >
        <div>
          <p className="kicker mb-5 flex items-center gap-4"><span className="h-px w-10 bg-[var(--gold)]" />{t.exploreKicker}</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--cream)]">{t.exploreTitle}</h2>
        </div>
        <p className="text-[var(--cream-dim)] text-base sm:text-lg max-w-sm">{t.exploreText}</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)]">
        {t.cards.map((c, i) => <Card key={KEYS[i]} data={c} i={i} soon={t.soon} />)}
      </div>
    </div>
  </section>
);
