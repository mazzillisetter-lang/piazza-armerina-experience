import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export const MosaicPanel = ({ t }) => {

  return (
    <aside className="mosaic-panel relative lg:absolute lg:inset-0 lg:pointer-events-none z-10 flex flex-col justify-end px-5 sm:px-10 lg:px-0 pt-8 lg:pt-0 pb-8 lg:pb-0" data-testid="hero-mosaic">
      <img src="/img/flower-corner.png" alt="" aria-hidden data-testid="flower-top-right" className="hidden lg:block pointer-events-none absolute z-20 -right-[0.8vw] -top-[0.6vw] w-[11vw] -scale-y-100 opacity-90" />
      <img src="/img/flower-corner.png" alt="" aria-hidden data-testid="flower-bottom-right" className="pointer-events-none absolute z-20 -right-[4%] -bottom-[5%] w-[34%] lg:w-[11vw] max-w-none" />

      <div className="relative lg:absolute lg:bottom-[4vw] lg:right-[21vw] z-20 font-script text-white text-[1.8rem] sm:text-5xl lg:text-[1.75vw] leading-[1.05] lg:leading-[1.12] flex flex-wrap gap-x-4 lg:block lg:-rotate-[6deg] mb-3 lg:mb-0 text-shadow-hero" data-testid="mosaic-words">
        {t.words.map((w, i) => (
          <motion.span key={w} className="inline-block lg:block lg:pl-[var(--pl)]" style={{ "--pl": `${i * 0.28}em` }} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease, delay: 1.2 + i * 0.12 }}>
            {w}
          </motion.span>
        ))}
      </div>

      <motion.figure initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease, delay: 0.9 }} className="relative z-10 m-0 lg:absolute lg:right-0 lg:bottom-0 lg:h-[88%] lg:w-[27vw]">
        <div className="mosaic-mask lg:h-full">
          <img src="/img/mosaico.jpg" alt={t.mosaicCap} width="660" height="343" className="block w-full h-auto lg:h-full lg:object-cover lg:object-[50%_50%] mosaic-img" />
        </div>
        <figcaption className="-mt-1 lg:mt-0 lg:absolute lg:left-[34%] lg:bottom-[0.7vw] relative z-30 font-body italic text-sm lg:text-[0.85vw] text-white/90 text-shadow-soft">{t.mosaicCap}</figcaption>
      </motion.figure>
    </aside>
  );
};
