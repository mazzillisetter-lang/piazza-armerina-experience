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
  <div className="relative xl:absolute xl:inset-y-0 xl:left-0 xl:w-[32vw] px-5 sm:px-8 xl:px-0 xl:pl-[3vw] pt-10 pb-12 xl:pb-0 xl:pt-[7.1vw] text-white z-10" data-testid="hero-text">
    <motion.p {...fade(0.3)} className="flex items-center gap-3 font-display font-semibold uppercase text-[var(--gold-soft)] text-sm sm:text-base xl:text-[0.95vw] tracking-[0.04em] text-shadow-soft">
      <span className="h-[2px] w-10 xl:w-[3.4vw] bg-[var(--gold)]" />{t.heroOverline}
    </motion.p>
    <h1 data-testid="hero-title" className="font-display font-bold text-[3rem] sm:text-6xl xl:text-[3.6vw] leading-[1] mt-3 xl:mt-[0.5vw] text-shadow-hero">
      <Line delay={0.45}>Piazza Armerina</Line>
    </h1>
    <p data-testid="hero-tagline" className="font-display italic font-bold text-[2.3rem] sm:text-5xl xl:text-[2.7vw] leading-[1.06] mt-2 xl:mt-[0.3vw] drop-gold">
      {t.taglineLines.map((l, i) => (
        <Line key={l} delay={0.65 + i * 0.12}><span className="text-gold-grad">{l}</span></Line>
      ))}
    </p>
    <motion.p {...fade(1.15)} data-testid="hero-lead" className="font-body text-lg sm:text-xl xl:text-[1.25vw] leading-[1.28] xl:leading-[1.22] mt-5 xl:mt-[0.9vw] text-shadow-soft">
      {t.leadLines.map((l) => <span key={l} className="block">{l}</span>)}
    </motion.p>
    <motion.div {...fade(1.35)} className="flex flex-wrap xl:flex-col xl:items-start items-center gap-5 xl:gap-[0.9vw] mt-7 xl:mt-[1.1vw]">
      <a href="#categorie" data-testid="hero-cta-btn" className="btn-hero">
        {t.heroCta}<ArrowRight className="w-5 h-5 xl:w-[1.5vw] xl:h-[1.5vw] transition-transform duration-300 group-hover:translate-x-1" />
      </a>
      <button data-testid="hero-video-btn" onClick={() => toast(t.videoSoon)} className="group flex items-center gap-3 xl:gap-[1vw] text-left">
        <span className="grid place-items-center w-14 h-14 xl:w-[2.9vw] xl:h-[2.9vw] rounded-full border-2 border-white text-white bg-black/20 group-hover:bg-white group-hover:text-[var(--ink)] transition-colors duration-300">
          <Play className="w-6 h-6 xl:w-[1.5vw] xl:h-[1.5vw] fill-current ml-0.5" />
        </span>
        <span className="text-shadow-soft">
          <span className="block font-body text-xl xl:text-[1.25vw] leading-tight">{t.video}</span>
          <span className="block font-body italic text-base xl:text-[0.95vw] text-white/90">{t.videoSub}</span>
        </span>
      </button>
    </motion.div>
  </div>
);
