import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export const MosaicPanel = ({ t }) => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <aside className="mosaic-panel relative overflow-hidden xl:w-[28vw] flex flex-col justify-end px-6 sm:px-10 xl:px-[2.2vw] pt-12 xl:pt-[6vw] pb-12 xl:pb-[2.4vw]" data-testid="hero-mosaic">
      <img src="/img/flower-spray.png" alt="" aria-hidden className="pointer-events-none absolute -left-10 xl:-left-[3vw] top-[8%] h-[62%] w-auto opacity-95 -scale-x-100" />
      <img src="/img/flower-corner.png" alt="" aria-hidden className="pointer-events-none absolute -right-[8%] -bottom-[6%] w-[70%] max-w-none" />

      <div className="relative z-10 font-script text-white text-[2.6rem] sm:text-6xl xl:text-[3vw] leading-[0.95] -rotate-[8deg] mb-8 xl:mb-[2.2vw] ml-[18%] xl:ml-[14%] text-shadow-hero" data-testid="mosaic-words">
        {t.words.map((w, i) => (
          <motion.span key={w} className="block" style={{ paddingLeft: `${i * 0.18}em` }} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease, delay: 1.2 + i * 0.12 }}>
            {w}
          </motion.span>
        ))}
      </div>

      <motion.figure initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease, delay: 0.9 }} className="relative z-10 m-0" style={{ perspective: 1000 }} onMouseMove={onMove} onMouseLeave={reset}>
        <motion.div style={{ rotateX: rx, rotateY: ry }} className="mosaic-frame">
          <img src="/img/mosaico.jpg" alt={t.mosaicCap} width="660" height="343" className="block w-full h-auto" />
        </motion.div>
        <figcaption className="mt-3 font-body italic text-sm xl:text-[0.95vw] text-white/90 text-shadow-soft">{t.mosaicCap}</figcaption>
      </motion.figure>
    </aside>
  );
};
