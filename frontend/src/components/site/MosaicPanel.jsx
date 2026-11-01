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
    <aside className="mosaic-panel relative z-10 overflow-hidden lg:w-[calc(var(--u)*34)] lg:-ml-[calc(var(--u)*6)] flex flex-col justify-end px-5 sm:px-10 lg:pl-0 lg:pr-[calc(var(--u)*1.2)] pt-8 lg:pt-[calc(var(--u)*6)] pb-8 lg:pb-[calc(var(--u)*1.6)]" data-testid="hero-mosaic">
      <div aria-hidden className="mosaic-ext absolute inset-0 lg:left-[calc(var(--u)*3.5)] pointer-events-none">
        <div className="mosaic-streak absolute inset-0" style={{ backgroundImage: "url(/img/panorama.png)" }} />
      </div>
      <img src="/img/flower-spray.png" alt="" aria-hidden className="hidden lg:block pointer-events-none absolute -left-10 lg:-left-0 top-[8%] h-[58%] w-auto opacity-95 -scale-x-100" />
      <img src="/img/flower-corner.png" alt="" aria-hidden className="pointer-events-none absolute -right-[8%] -bottom-[6%] w-[62%] max-w-none" />

      <div className="relative z-10 font-script text-white text-[1.8rem] sm:text-5xl lg:text-[calc(var(--u)*3)] leading-[1.05] lg:leading-[0.95] flex flex-wrap gap-x-4 lg:block lg:-rotate-[8deg] mb-3 lg:mb-[calc(var(--u)*0.6)] lg:ml-[34%] text-shadow-hero" data-testid="mosaic-words">
        {t.words.map((w, i) => (
          <motion.span key={w} className="inline-block lg:block lg:pl-[var(--pl)]" style={{ "--pl": `${i * 0.18}em` }} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease, delay: 1.2 + i * 0.12 }}>
            {w}
          </motion.span>
        ))}
      </div>

      <motion.figure initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease, delay: 0.9 }} className="relative z-10 m-0" style={{ perspective: 1000 }} onMouseMove={onMove} onMouseLeave={reset}>
        <motion.div style={{ rotateX: rx, rotateY: ry }} className="mosaic-mask">
          <img src="/img/mosaico.jpg" alt={t.mosaicCap} width="660" height="343" className="block w-full h-auto" />
        </motion.div>
        <figcaption className="-mt-1 lg:-mt-[calc(var(--u)*1)] lg:pl-[18%] relative font-body italic text-sm lg:text-[calc(var(--u)*0.95)] text-white/90 text-shadow-soft">{t.mosaicCap}</figcaption>
      </motion.figure>
    </aside>
  );
};
