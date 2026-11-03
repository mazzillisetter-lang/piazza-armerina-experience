import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export const MosaicPanel = ({ t }) => {

  return (
    <aside className="mosaic-panel absolute inset-0 pointer-events-none z-[5]" data-testid="hero-mosaic">
      <img src="/img/flower-corner.png" alt="" aria-hidden data-testid="flower-top-right" className="hidden md:block pointer-events-none absolute z-20 -right-[0.8vw] -top-[0.6vw] w-[11vw] -scale-y-100 opacity-90" />
      <img src="/img/flower-corner.png" alt="" aria-hidden data-testid="flower-bottom-right" className="pointer-events-none absolute z-20 -right-[4%] -bottom-[4%] w-[24%] md:w-[11vw] max-w-none" />

      <div className="mosaic-words hidden md:block md:absolute md:bottom-[4vw] md:right-[21vw] z-20 font-script text-white text-[1.8rem] md:text-[2.3vw] lg:text-[1.75vw] leading-[1.05] md:leading-[1.12] flex flex-wrap gap-x-4 md:block md:-rotate-[6deg] mb-3 md:mb-0 text-shadow-hero" data-testid="mosaic-words">
        {t.words.map((w, i) => (
          <motion.span key={w} className="inline-block md:block md:pl-[var(--pl)]" style={{ "--pl": `${i * 0.28}em` }} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease, delay: 1.2 + i * 0.12 }}>
            {w}
          </motion.span>
        ))}
      </div>

      <motion.figure initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease, delay: 0.9 }} className="absolute right-0 bottom-2 w-[42%] z-10 m-0 md:right-0 md:bottom-0 md:h-[88%] md:w-[27vw]" data-testid="hero-mosaic-figure">
        <div className="mosaic-mask md:h-full">
          <img src="/img/mosaico.jpg" alt={t.mosaicCap} width="660" height="343" className="block w-full h-auto md:h-full md:object-cover md:object-[50%_50%] mosaic-img" />
        </div>
        <figcaption className="hidden lg:block md:absolute md:left-[34%] md:bottom-[0.7vw] relative z-30 font-body italic text-sm md:text-[1.2vw] lg:text-[0.85vw] text-white/90 text-shadow-soft">{t.mosaicCap}</figcaption>
      </motion.figure>
    </aside>
  );
};
