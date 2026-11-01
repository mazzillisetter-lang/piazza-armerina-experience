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
    <aside className="mosaic-panel relative overflow-hidden lg:w-[calc(var(--u)*28)] flex flex-col justify-end px-6 sm:px-10 lg:px-[calc(var(--u)*2.2)] pt-8 lg:pt-[calc(var(--u)*6)] pb-9 lg:pb-[calc(var(--u)*2.4)]" data-testid="hero-mosaic">
      <img src="/img/flower-spray.png" alt="" aria-hidden className="hidden lg:block pointer-events-none absolute -left-10 lg:-left-[calc(var(--u)*3)] top-[8%] h-[62%] w-auto opacity-95 -scale-x-100" />
      <img src="/img/flower-corner.png" alt="" aria-hidden className="pointer-events-none absolute -right-[8%] -bottom-[6%] w-[70%] max-w-none" />

      <div className="relative z-10 font-script text-white text-[1.8rem] sm:text-5xl lg:text-[calc(var(--u)*3)] leading-[1.05] lg:leading-[0.95] flex flex-wrap gap-x-4 lg:block lg:-rotate-[8deg] mb-5 lg:mb-[calc(var(--u)*2.2)] lg:ml-[14%] text-shadow-hero" data-testid="mosaic-words">
        {t.words.map((w, i) => (
          <motion.span key={w} className="inline-block lg:block lg:pl-[var(--pl)]" style={{ "--pl": `${i * 0.18}em` }} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease, delay: 1.2 + i * 0.12 }}>
            {w}
          </motion.span>
        ))}
      </div>

      <motion.figure initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease, delay: 0.9 }} className="relative z-10 m-0" style={{ perspective: 1000 }} onMouseMove={onMove} onMouseLeave={reset}>
        <motion.div style={{ rotateX: rx, rotateY: ry }} className="mosaic-frame">
          <img src="/img/mosaico.jpg" alt={t.mosaicCap} width="660" height="343" className="block w-full h-auto" />
        </motion.div>
        <figcaption className="mt-3 font-body italic text-sm lg:text-[calc(var(--u)*0.95)] text-white/90 text-shadow-soft">{t.mosaicCap}</figcaption>
      </motion.figure>
    </aside>
  );
};
