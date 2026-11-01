import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { MosaicCard } from "./MosaicCard";

const ease = [0.22, 1, 0.36, 1];

const Line = ({ children, delay, className = "" }) => (
  <span className="block overflow-hidden pb-[0.12em]">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "105%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.2, ease, delay }}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = ({ t }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const numeral = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const glow = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="relative overflow-hidden bg-[var(--ink)] pt-28 sm:pt-28 pb-16 lg:pb-24">
      <motion.div style={{ opacity: glow }} className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(232,140,60,0.22),transparent)]" />
      <motion.span style={{ y: numeral }} aria-hidden className="pointer-events-none absolute right-[-2vw] top-16 font-display text-[22vw] leading-none text-[rgba(217,174,95,0.05)] select-none">
        MCMXCVII
      </motion.span>

      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 lg:mb-12">
          <div className="lg:col-span-7">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="kicker mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--gold)]" />{t.overline}
            </motion.p>
            <h1 data-testid="hero-title" className="font-display text-[3.4rem] sm:text-7xl lg:text-[6.2rem] leading-[0.92] text-[var(--cream)] tracking-[-0.01em]">
              <Line delay={0.45}>Piazza</Line>
              <Line delay={0.6} className="pl-[0.6em] text-gold-grad">Armerina</Line>
            </h1>
            <div className="mt-3 lg:mt-1 lg:pl-[4.5rem]">
              <Line delay={0.95} className="font-script text-[1.75rem] sm:text-5xl lg:text-[3rem] text-[var(--gold-soft)] leading-tight">
                <span data-testid="hero-tagline">{t.tagline}</span>
              </Line>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 1.2 }} className="lg:col-span-5 lg:pb-4">
            <p className="text-[var(--cream-dim)] text-base sm:text-lg leading-relaxed max-w-md" data-testid="hero-lead">{t.lead}</p>
            <a href="#esplora" data-testid="hero-cta-btn" className="btn-gold mt-8 inline-flex">
              {t.cta}<ArrowDown className="w-4 h-4 ml-3" />
            </a>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <motion.figure
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1.6, ease, delay: 0.7 }}
            className="lg:col-span-8 frame frame-cap m-0"
            data-testid="hero-panorama"
          >
            <div className="frame-inner">
            <img
              src="/img/panorama.png"
              alt="Panorama di Piazza Armerina al tramonto con la Cattedrale e Palazzo Trigona"
              width="1672"
              height="941"
              className="block w-full h-auto"
              fetchpriority="high"
            />
            </div>
            <figcaption className="caption">{t.panoCap}</figcaption>
          </motion.figure>
          <MosaicCard t={t} />
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }} className="hidden lg:flex items-center gap-3 mt-12 text-[0.7rem] uppercase tracking-[0.3em] text-[var(--cream-dim)]">
          <span className="scroll-line" /> Scroll
        </motion.div>
      </div>
    </section>
  );
};
