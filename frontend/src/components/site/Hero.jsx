import { motion } from "framer-motion";
import { HeroText } from "./HeroText";
import { MosaicPanel } from "./MosaicPanel";

export const Hero = ({ t }) => (
  <section id="top" data-testid="hero-section" className="relative bg-[var(--ink)]">
    <div className="relative overflow-hidden">
      <div className="relative pano-box">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          className="absolute inset-0"
          data-testid="hero-panorama"
        >
          <img
            src="/img/panorama.png"
            alt="Panorama di Piazza Armerina al tramonto con la Cattedrale e Palazzo Trigona"
            width="1672"
            height="941"
            className="block w-full h-full object-cover pano-warm"
            fetchpriority="high"
          />
        </motion.div>
        <div aria-hidden data-testid="hero-mobile-gradient" className="md:hidden absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(14,8,5,0.66)_0%,rgba(14,8,5,0.34)_34%,rgba(14,8,5,0)_52%,rgba(14,8,5,0.12)_68%,rgba(14,8,5,0.62)_100%)]" />
        <div aria-hidden className="hidden md:block absolute inset-y-0 left-0 w-[32%] pointer-events-none bg-gradient-to-r from-[rgba(20,8,4,0.38)] to-transparent" />
        <img src="/img/flower-spray.png" alt="" aria-hidden className="hidden md:block pointer-events-none absolute -left-[calc(var(--u)*2.4)] bottom-0 h-[20%] w-auto z-10 opacity-90" />
        <HeroText t={t} />
        <MosaicPanel t={t} />
      </div>
    </div>
  </section>
);
