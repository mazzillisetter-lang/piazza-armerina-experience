import { motion } from "framer-motion";
import { ChevronRight, ArrowDown } from "lucide-react";
import { PhotoSlot } from "./PhotoSlot";

const ease = [0.22, 1, 0.36, 1];

export const VillaHero = ({ c, ui }) => (
  <section id="top" className="relative overflow-hidden bg-[var(--ink)] pt-[110px] sm:pt-[128px] lg:pt-[150px] pb-14 lg:pb-20" data-testid="villa-hero">
    <div aria-hidden className="absolute -top-40 right-[-10%] w-[900px] h-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(232,140,60,0.22),transparent)] pointer-events-none" />
    <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <div className="lg:col-span-6">
        <nav className="flex items-center gap-2 text-sm font-body text-[var(--cream-dim)]" data-testid="villa-breadcrumb">
          <a href="/" className="hover:text-[var(--gold)] transition-colors" data-testid="villa-breadcrumb-home">{ui.home}</a>
          <ChevronRight className="w-4 h-4" /><span className="text-[var(--gold-soft)]">{c.heroTitle}</span>
        </nav>
        <p className="mt-8 flex items-center gap-3 font-display font-semibold uppercase text-xs sm:text-sm tracking-[0.06em] text-[var(--gold-soft)]">
          <span className="h-[2px] w-10 bg-[var(--gold)]" />{c.heroKicker}
        </p>
        <h1 className="mt-4 font-display font-bold text-[2.6rem] sm:text-6xl lg:text-[4.4rem] leading-[1.02] text-white" data-testid="villa-title">
          <span className="block overflow-hidden"><motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.1, ease, delay: 0.2 }}>{c.heroTitle}</motion.span></span>
        </h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.5 }} className="mt-3 font-display italic font-bold text-[1.7rem] sm:text-4xl lg:text-[2.6rem] leading-tight drop-gold" data-testid="villa-tagline">
          <span className="text-gold-grad">— {c.heroTagline}</span>
        </motion.p>
        <p className="mt-6 font-body text-lg sm:text-xl leading-relaxed text-[var(--cream)]/90 max-w-xl">{c.heroLead}</p>
        <a href="#mosaici" className="btn-hero mt-8" data-testid="villa-hero-cta">{ui.nav[1]}<ArrowDown className="w-5 h-5" /></a>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease, delay: 0.3 }} className="lg:col-span-6">
        <PhotoSlot photo={{ src: "https://raw.githubusercontent.com/mazzillisetter-lang/piazza-armerina-experience/armerina-experience-20261101/villa-romana-panoramica-ritocco-leggero.jpg", credit: "Panoramica della Villa Romana del Casale" }} label={c.heroPhoto} className="aspect-[16/10] w-full rounded-[2px]" testId="villa-hero-photo-slot" />
      </motion.div>
    </div>
  </section>
);
