import { motion } from "framer-motion";
import { Clock, Ticket, SquareParking, Bus, Accessibility, Navigation, ExternalLink } from "lucide-react";
import { SectionHead } from "./SectionHead";
import { PRACTICAL, OFFICIAL } from "@/content/villa";
import { OpeningHours } from "./OpeningHours";
import { TicketPrices } from "./TicketPrices";
import { ParkingPrices } from "./ParkingPrices";
import { ShuttleTimes } from "./ShuttleTimes";

const ICONS = { Clock, Ticket, SquareParking, Bus, Accessibility, Navigation };

export const PlanVisit = ({ c, ui }) => (
  <section id="visita" className="bg-[var(--ink)] scroll-mt-40 py-16 sm:py-24" data-testid="villa-plan">
    <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
      <SectionHead dark kicker={c.planKicker} title={c.planTitle} lead={c.planLead} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PRACTICAL.map((p, i) => {
          const Icon = ICONS[p.icon];
          const link = OFFICIAL[p.link];
          return (
            <motion.div key={p.key} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: (i % 3) * 0.07 }} className="flex flex-col rounded-xl border border-[var(--gold)]/25 bg-[#17100b] p-6" data-testid={`plan-card-${p.key}`}>
              <span className="grid place-items-center w-12 h-12 rounded-full bg-[var(--gold)]/15 text-[var(--gold-soft)]"><Icon className="w-6 h-6" /></span>
              <h3 className="mt-4 font-display font-bold text-2xl text-white">{p.title}</h3>
              {p.key === "orari" ? <OpeningHours /> : p.key === "biglietti" ? <TicketPrices /> : p.key === "parcheggio" ? <ParkingPrices /> : p.key === "navetta" ? <ShuttleTimes /> : <p className="mt-2 font-body text-lg leading-relaxed text-[var(--cream)]/85 flex-1">{p.text}</p>}
              {link && <a href={link.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-body text-lg text-[var(--gold-soft)] hover:text-white transition-colors" data-testid={`plan-link-${p.key}`}>
                {link.label}<ExternalLink className="w-4 h-4" />
              </a>}
              <p className="mt-3 text-sm font-body text-[var(--cream-dim)]">{ui.updated}: {p.updated}</p>
            </motion.div>
          );
        })}
      </div>
      <p className="mt-8 font-body text-base text-[var(--cream-dim)]">
        {ui.source}: <a href={OFFICIAL.unesco.url} target="_blank" rel="noreferrer" className="underline hover:text-[var(--gold-soft)]" data-testid="plan-unesco-link">{OFFICIAL.unesco.label}</a>
      </p>
    </div>
  </section>
);
