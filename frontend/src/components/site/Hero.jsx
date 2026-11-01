import { motion } from "framer-motion";
import { HeroText } from "./HeroText";
import { MosaicPanel } from "./MosaicPanel";

export const Hero = ({ t }) => (
  <section id="top" data-testid="hero-section" className="relative bg-[var(--ink)] pt-[86px] sm:pt-[104px] xl:pt-0">
    <div className="xl:flex xl:items-stretch">
      <div className="relative xl:w-[72vw]">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          data-testid="hero-panorama"
        >
          <img
            src="/img/panorama.png"
            alt="Panorama di Piazza Armerina al tramonto con la Cattedrale e Palazzo Trigona"
            width="1672"
            height="941"
            className="block w-full h-auto"
            fetchpriority="high"
          />
        </motion.div>
        <div aria-hidden className="hidden xl:block absolute inset-y-0 left-0 w-[45%] pointer-events-none bg-gradient-to-r from-[rgba(20,8,4,0.38)] to-transparent" />
        <img src="/img/flower-spray.png" alt="" aria-hidden className="hidden xl:block pointer-events-none absolute -left-[2.4vw] bottom-0 h-[30%] w-auto z-10 opacity-90" />
        <HeroText t={t} />
      </div>
      <MosaicPanel t={t} />
    </div>
  </section>
);
