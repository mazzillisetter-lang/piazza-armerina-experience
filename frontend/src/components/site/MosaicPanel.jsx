import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export const MosaicPanel = ({ t }) => {

  return (
    <aside className="mosaic-panel relative z-10 overflow-hidden lg:w-[calc(var(--u)*43)] lg:-ml-[calc(var(--u)*15)] flex flex-col justify-end px-5 sm:px-10 lg:px-0 pt-8 lg:pt-0 pb-8 lg:pb-0" data-testid="hero-mosaic">
      <div aria-hidden className="mosaic-ext absolute inset-0 lg:left-[calc(var(--u)*9)] pointer-events-none">
        <div className="mosaic-streak absolute inset-0" style={{ backgroundImage: "url(/img/panorama.png)" }} />
      </div>
      <img src="/img/flower-corner.png" alt="" aria-hidden data-testid="flower-top-right" className="hidden lg:block pointer-events-none absolute z-20 -right-[calc(var(--u)*0.8)] -top-[calc(var(--u)*0.6)] w-[calc(var(--u)*12.5)] -scale-y-100 opacity-90" />
      <img src="/img/flower-corner.png" alt="" aria-hidden data-testid="flower-bottom-right" className="pointer-events-none absolute z-20 -right-[4%] -bottom-[5%] w-[34%] lg:w-[calc(var(--u)*13)] max-w-none" />

      <div className="relative lg:absolute lg:top-[calc(var(--u)*7)] lg:left-[7%] z-20 font-script text-white text-[1.8rem] sm:text-5xl lg:text-[calc(var(--u)*2.7)] leading-[1.05] lg:leading-[0.95] flex flex-wrap gap-x-4 lg:block lg:-rotate-[8deg] mb-3 lg:mb-0 text-shadow-hero" data-testid="mosaic-words">
        {t.words.map((w, i) => (
          <motion.span key={w} className="inline-block lg:block lg:pl-[var(--pl)]" style={{ "--pl": `${i * 0.18}em` }} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease, delay: 1.2 + i * 0.12 }}>
            {w}
          </motion.span>
        ))}
      </div>

      <motion.figure initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease, delay: 0.9 }} className="relative z-10 m-0">
        <div className="mosaic-mask">
          <img src="/img/mosaico.jpg" alt={t.mosaicCap} width="660" height="343" className="block w-full h-auto" />
        </div>
        <figcaption className="-mt-1 lg:mt-0 lg:absolute lg:left-[24%] lg:bottom-[calc(var(--u)*0.7)] relative z-30 font-body italic text-sm lg:text-[calc(var(--u)*0.9)] text-white/90 text-shadow-soft">{t.mosaicCap}</figcaption>
      </motion.figure>
    </aside>
  );
};
