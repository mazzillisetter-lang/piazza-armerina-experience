import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export const MosaicCard = ({ t }) => {
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
    <motion.aside
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.3, ease, delay: 1.1 }}
      className="lg:col-span-4 flex flex-col justify-between rounded-[2px] border border-[var(--line)] bg-[var(--ink-2)] p-5 sm:p-7"
      data-testid="hero-mosaic"
    >
      <div>
        <p className="kicker mb-3">{t.mosaicCap}</p>
        <h2 className="font-display text-3xl sm:text-4xl text-[var(--cream)] leading-tight">{t.mosaicTitle}</h2>
      </div>
      <div className="my-6 lg:my-8" style={{ perspective: 1000 }} onMouseMove={onMove} onMouseLeave={reset}>
        <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="frame mosaic-glow">
          <img
            src="/img/mosaico.jpg"
            alt="Mosaico originale della Villa Romana del Casale"
            width="660"
            height="343"
            className="block w-full h-auto"
          />
        </motion.div>
      </div>
      <div className="flex items-end justify-between gap-4">
        <p className="text-sm text-[var(--cream-dim)] leading-relaxed max-w-[18rem]">{t.mosaicText}</p>
        <span className="font-display italic text-3xl tracking-[0.12em] text-[var(--gold)] leading-none shrink-0">UNESCO</span>
      </div>
    </motion.aside>
  );
};
