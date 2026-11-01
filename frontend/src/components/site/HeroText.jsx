import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { toast } from "sonner";

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
  <div className="relative lg:absolute lg:inset-y-0 lg:left-0 lg:w-[calc(var(--u)*32)] px-5 sm:px-8 lg:px-0 lg:pl-[calc(var(--u)*3)] pt-7 pb-8 lg:pb-0 lg:pt-[calc(var(--u)*7.1)] text-white z-10" data-testid="hero-text">
    <motion.p {...fade(0.3)} className="flex items-center gap-3 font-display font-semibold uppercase text-[var(--gold-soft)] text-sm sm:text-base lg:text-[calc(var(--u)*0.95)] tracking-[0.04em] text-shadow-soft">
      <span className="h-[2px] w-10 lg:w-[calc(var(--u)*3.4)] bg-[var(--gold)]" />{t.heroOverline}
    </motion.p>
    <h1 data-testid="hero-title" className="font-display font-bold text-[2.55rem] sm:text-6xl lg:text-[calc(var(--u)*3.6)] leading-[1] mt-3 lg:mt-[calc(var(--u)*0.5)] text-shadow-hero">
      <Line delay={0.45}>Piazza Armerina</Line>
    </h1>
    <p data-testid="hero-tagline" className="font-display italic font-bold text-[2.05rem] sm:text-5xl lg:text-[calc(var(--u)*2.7)] leading-[1.06] mt-2 lg:mt-[calc(var(--u)*0.3)] drop-gold">
      {t.taglineLines.map((l, i) => (
        <Line key={l} delay={0.65 + i * 0.12}><span className="text-gold-grad">{l}</span></Line>
      ))}
    </p>
    <motion.p {...fade(1.15)} data-testid="hero-lead" className="font-body text-lg sm:text-xl lg:text-[calc(var(--u)*1.25)] leading-[1.28] lg:leading-[1.22] mt-5 lg:mt-[calc(var(--u)*0.9)] text-shadow-soft">
      {t.leadLines.map((l) => <span key={l} className="block">{l}</span>)}
    </motion.p>
    <motion.div {...fade(1.35)} className="flex flex-wrap lg:flex-col lg:items-start items-center gap-4 lg:gap-[calc(var(--u)*0.9)] mt-6 lg:mt-[calc(var(--u)*1.1)]">
      <a href="#categorie" data-testid="hero-cta-btn" className="btn-hero">
        {t.heroCta}<ArrowRight className="w-5 h-5 lg:w-[calc(var(--u)*1.5)] lg:h-[calc(var(--u)*1.5)] transition-transform duration-300 group-hover:translate-x-1" />
      </a>
      <button data-testid="hero-video-btn" onClick={() => toast(t.videoSoon)} className="group flex items-center gap-3 lg:gap-[calc(var(--u)*1)] text-left">
        <span className="grid place-items-center w-14 h-14 lg:w-[calc(var(--u)*2.9)] lg:h-[calc(var(--u)*2.9)] rounded-full border-2 border-white text-white bg-black/20 group-hover:bg-white group-hover:text-[var(--ink)] transition-colors duration-300">
          <Play className="w-6 h-6 lg:w-[calc(var(--u)*1.5)] lg:h-[calc(var(--u)*1.5)] fill-current ml-0.5" />
        </span>
        <span className="text-shadow-soft">
          <span className="block font-body text-xl lg:text-[calc(var(--u)*1.25)] leading-tight">{t.video}</span>
          <span className="block font-body italic text-base lg:text-[calc(var(--u)*0.95)] text-white/90">{t.videoSub}</span>
        </span>
      </button>
    </motion.div>
  </div>
);
