import { motion } from "framer-motion";
import { Map } from "lucide-react";
import { SectionHead } from "./SectionHead";

export const RouteSteps = ({ c, ui }) => (
  <section id="percorso" className="parchment scroll-mt-40 py-16 sm:py-24" data-testid="villa-route">
    <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
      <SectionHead kicker={c.routeKicker} title={c.routeTitle} lead={ui.routeNote} />
      <div className="grid lg:grid-cols-12 gap-10">
        <ol className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {c.route.map((s, i) => (
            <motion.li key={s.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: (i % 2) * 0.08 }} className="flex gap-4 rounded-xl bg-[#fff8e8]/60 border border-[#8a5a2b]/25 p-5" data-testid={`route-step-${i}`}>
              <span className="shrink-0 font-display font-bold text-4xl leading-none text-[var(--terracotta)]">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display font-bold text-xl text-[#3a1f12] leading-snug">{s.title}</h3>
                <p className="mt-1 font-body text-lg leading-snug text-[#4a3324]">{s.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
        <div className="lg:col-span-5 lg:sticky lg:top-44 self-start grid place-items-center text-center aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] border-2 border-dashed border-[#8a5a2b]/45 rounded-xl bg-[#fff8e8]/40 p-8" data-testid="route-map-slot">
          <div>
            <Map className="w-12 h-12 mx-auto text-[var(--terracotta)]" strokeWidth={1.3} />
            <p className="mt-4 font-display font-bold text-2xl text-[#3a1f12]">{ui.mapSlot}</p>
            <p className="mt-2 font-body text-lg text-[#4a3324] max-w-sm mx-auto">{ui.mapSlotText}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
