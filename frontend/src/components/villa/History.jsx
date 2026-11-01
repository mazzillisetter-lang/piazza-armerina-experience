import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { SectionHead } from "./SectionHead";

export const History = ({ c, ui }) => (
  <section id="storia" className="parchment scroll-mt-40 py-16 sm:py-24" data-testid="villa-history">
    <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
      <SectionHead kicker={c.historyKicker} title={c.historyTitle} />
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
        <ol className="lg:col-span-8 relative border-l-2 border-[var(--terracotta)]/35 pl-7 sm:pl-10 space-y-10">
          {c.history.map((h, i) => (
            <motion.li key={h.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, delay: i * 0.05 }} className="relative" data-testid={`villa-history-${i}`}>
              <span className="absolute -left-[2.35rem] sm:-left-[3.1rem] top-1 grid place-items-center w-8 h-8 rounded-full bg-[var(--terracotta)] text-white font-display text-sm">{i + 1}</span>
              <h3 className="font-display font-bold text-2xl sm:text-[1.7rem] text-[#3a1f12]">{h.title}</h3>
              <p className="mt-2 font-body text-lg sm:text-[1.2rem] leading-relaxed text-[#4a3324]">{h.text}</p>
            </motion.li>
          ))}
        </ol>
        <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-44 self-start" data-testid="villa-facts">
          {c.facts.map((f, i) => (
            <div key={i} className="rounded-xl border border-[#8a5a2b]/30 bg-[#fff8e8]/60 p-5 shadow-[0_10px_30px_-18px_rgba(90,50,20,.5)]">
              <p className="flex items-center gap-2 font-display italic font-semibold text-[var(--terracotta)]"><Lightbulb className="w-5 h-5" />{ui.didYouKnow}</p>
              <p className="mt-2 font-body text-lg leading-snug text-[#3a1f12]">{f}</p>
            </div>
          ))}
        </aside>
      </div>
    </div>
  </section>
);
