import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { HomeVideo } from "./HomeVideo";

const ease = [0.22, 1, 0.36, 1];

const Line = ({ children, delay, className = "" }) => (
  <span className="block overflow-hidden pb-[0.14em] -mb-[0.1em]">
    <motion.span className={`block ${className}`} initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1.1, ease, delay }}>
      {children}
    </motion.span>
  </span>
);

const fade = (delay) => ({ initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, ease, delay } });

export const HeroText = ({ t }) => (
  <div className="hero-copy absolute inset-0 md:right-auto md:w-[calc(var(--u)*32)] flex flex-col md:block px-5 sm:px-8 md:px-0 md:pl-[calc(var(--u)*3)] pt-[104px] sm:pt-[124px] pb-6 md:pb-0 md:pt-[124px] lg:pt-[calc(var(--u)*7.4)] text-white z-10" data-testid="hero-text">
    <motion.p {...fade(0.3)} className="flex items-center gap-3 font-display font-semibold uppercase text-[var(--gold-soft)] text-sm sm:text-base md:text-[1.4vw] lg:text-[calc(var(--u)*0.95)] tracking-[0.04em] text-shadow-soft">
      <span className="h-[2px] w-10 md:w-[calc(var(--u)*3.4)] bg-[var(--gold)]" />{t.heroOverline}
    </motion.p>
    <h1 data-testid="hero-title" className="font-display font-bold text-[2.55rem] sm:text-6xl md:text-[calc(var(--u)*3.4)] leading-[1] mt-3 md:mt-[calc(var(--u)*0.6)] text-shadow-hero">
      <Line delay={0.45}>Piazza Armerina</Line>
    </h1>
    <p data-testid="hero-tagline" className="font-display italic font-bold text-[2.05rem] sm:text-5xl md:text-[calc(var(--u)*2.6)] leading-[1.06] md:leading-[1.02] mt-2 md:mt-[calc(var(--u)*0.6)] drop-gold">
      {t.taglineLines.map((l, i) => (
        <Line key={l} delay={0.65 + i * 0.12}><span className="text-gold-grad">{l}</span></Line>
      ))}
    </p>
    <motion.p {...fade(1.15)} data-testid="hero-lead" className="hidden md:block font-body text-lg sm:text-xl md:text-[1.6vw] lg:text-[calc(var(--u)*1.25)] leading-[1.28] md:leading-[1.3] mt-5 md:mt-[calc(var(--u)*1.3)] text-shadow-soft">
      {t.leadLines.map((l) => <span key={l} className="block">{l}</span>)}
    </motion.p>
    <motion.div {...fade(1.35)} className="hero-actions flex flex-col items-start md:flex-row md:items-center gap-3 md:gap-[calc(var(--u)*1.8)] mt-auto md:mt-[calc(var(--u)*1.8)]">
      <a href="#categorie" data-testid="hero-cta-btn" className="btn-hero">
        {t.heroCta}<ArrowRight className="w-5 h-5 md:w-[calc(var(--u)*1.5)] md:h-[calc(var(--u)*1.5)] transition-transform duration-300 group-hover:translate-x-1" />
      </a>
      <HomeVideo t={t}><button type="button" data-testid="hero-video-btn" className="group flex items-center gap-3 md:gap-[calc(var(--u)*1)] text-left">
        <span className="grid place-items-center w-12 h-12 md:w-[calc(var(--u)*2.9)] md:h-[calc(var(--u)*2.9)] rounded-full border-2 border-white text-white bg-black/20 group-hover:bg-white group-hover:text-[var(--ink)] transition-colors duration-300">
          <Play className="w-5 h-5 md:w-[calc(var(--u)*1.5)] md:h-[calc(var(--u)*1.5)] fill-current ml-0.5" />
        </span>
        <span className="text-shadow-soft whitespace-nowrap">
          <span className="block font-body text-xl md:text-[calc(var(--u)*1.25)] leading-tight">{t.video}</span>
          <span className="block font-body italic text-base md:text-[1.45vw] lg:text-[calc(var(--u)*0.95)] text-white/90">{t.videoSub}</span>
        </span>
      </button></HomeVideo>
    </motion.div>
  </div>
);
