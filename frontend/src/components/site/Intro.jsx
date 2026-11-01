import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

export const Intro = ({ t }) => (
  <section className="bg-[var(--cream)] text-[var(--ink)] py-24 sm:py-32 lg:py-40" data-testid="intro-section">
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
      <motion.div {...reveal} className="lg:col-span-5">
        <p className="kicker kicker-dark mb-6 flex items-center gap-4"><span className="h-px w-10 bg-[var(--terracotta)]" />{t.introKicker}</p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">{t.introTitle}</h2>
      </motion.div>
      <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.15 }} className="lg:col-span-6 lg:col-start-7 lg:pt-14">
        <p className="text-lg sm:text-xl leading-relaxed text-[#3d3227] first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.8] first-letter:text-[var(--terracotta)]">
          {t.introText}
        </p>
        <p className="font-script text-4xl sm:text-5xl text-[var(--terracotta)] mt-10">{t.tagline}</p>
      </motion.div>
    </div>
  </section>
);
