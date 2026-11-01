import { motion } from "framer-motion";
import { SectionHead } from "./SectionHead";
import { VillaMap } from "./VillaMap";

export const RouteSteps = ({ c, ui }) => (
  <section id="percorso" className="parchment scroll-mt-40 py-16 sm:py-24" data-testid="villa-route">
    <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
      <SectionHead kicker={c.routeKicker} title={c.routeTitle} lead={ui.routeNote} />
      <VillaMap m={ui.map} />
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
    </div>
  </section>
);
