import { motion } from "framer-motion";

export const SectionHead = ({ kicker, title, lead, dark }) => (
  <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9 }} className="max-w-3xl mb-10 lg:mb-14">
    <p className={`flex items-center gap-3 font-display font-semibold uppercase text-xs sm:text-sm tracking-[0.08em] ${dark ? "text-[var(--gold-soft)]" : "text-[var(--terracotta)]"}`}>
      <span className={`h-[2px] w-10 ${dark ? "bg-[var(--gold)]" : "bg-[var(--terracotta)]"}`} />{kicker}
    </p>
    <h2 className={`mt-4 font-display font-bold text-3xl sm:text-5xl leading-[1.08] ${dark ? "text-white" : "text-[#3a1f12]"}`}>{title}</h2>
    {lead && <p className={`mt-4 font-body text-lg sm:text-xl leading-relaxed ${dark ? "text-[var(--cream)]/85" : "text-[#4a3324]"}`}>{lead}</p>}
  </motion.div>
);
