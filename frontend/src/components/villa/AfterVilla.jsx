import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const AfterVilla = ({ c }) => (
  <section id="dopo" className="parchment scroll-mt-40 py-16 sm:py-24" data-testid="villa-after">
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9 }} className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
      <p className="font-display font-semibold uppercase text-xs sm:text-sm tracking-[0.08em] text-[var(--terracotta)]">{c.afterKicker}</p>
      <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl text-[#3a1f12] leading-tight">{c.afterTitle}</h2>
      <p className="mt-5 font-body text-lg sm:text-xl text-[#4a3324] leading-relaxed">{c.afterText}</p>
      <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="/#esplora" className="btn-hero" data-testid="villa-after-centro-btn">{c.afterCta}<ArrowRight className="w-5 h-5" /></a>
        <a href="/#categorie" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#8a5a2b]/50 font-body text-lg text-[#3a1f12] hover:bg-[#3a1f12] hover:text-[#f6eee0] transition-colors" data-testid="villa-after-all-btn">{c.afterCta2}</a>
      </div>
    </motion.div>
  </section>
);
