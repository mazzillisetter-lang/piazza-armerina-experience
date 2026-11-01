import { motion } from "framer-motion";
import { Landmark, Castle, Swords, Utensils, Wine, BedDouble, Trees, CalendarDays, Drama, Leaf, Bus } from "lucide-react";

const KEYS = ["villa", "centro", "palio", "mangiare", "dormire", "natura", "eventi", "prodotti", "mappe"];
const MAROON = "#8e1b1f";
const GOLD = "#b98018";
const GREEN = "#2f5a22";
const ICONS = [
  [[Landmark, GOLD]],
  [[Castle, GOLD]],
  [[Swords, MAROON]],
  [[Utensils, MAROON], [Wine, MAROON]],
  [[BedDouble, MAROON]],
  [[Trees, GREEN]],
  [[CalendarDays, MAROON], [Drama, MAROON]],
  [[Leaf, GREEN]],
  [[Bus, MAROON]],
];

export const CategoryBand = ({ t }) => (
  <section id="categorie" className="relative parchment" data-testid="category-band">
    <svg aria-hidden className="absolute -top-px left-0 w-full h-3 text-[var(--ink)]" viewBox="0 0 1200 12" preserveAspectRatio="none">
      <path fill="currentColor" d="M0 0h1200v4l-18 5-26-6-31 7-22-5-37 6-28-4-33 5-24-6-35 7-27-5-30 4-36-6-25 7-33-5-29 5-38-6-21 6-34-5-27 5-31-7-26 6-35-4-24 5-37-6-28 6-30-5-33 7-22-6-36 5-27-4-31 6-25-7-34 5-29-4-23 6-38-5-26 4-33-6-28 7-31-5-24 4-36-6-27 7-30-5-35 4-22-5-33 6-26-6-31 5-29-4-25 6-14-3z" />
    </svg>
    <div className="lg:max-w-[calc(var(--u)*100)] mx-auto px-4 sm:px-8 lg:px-[calc(var(--u)*1.5)] pt-9 pb-8 sm:pt-12 sm:pb-12 lg:pt-[calc(var(--u)*1.7)] lg:pb-[calc(var(--u)*1.4)]">
      <ul className="grid grid-cols-3 lg:grid-cols-9 gap-y-6 lg:gap-y-0">
        {t.bandShort.map((label, i) => (
          <motion.li
            key={KEYS[i]}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className={`band-item ${i % 3 !== 0 ? "max-lg:border-l" : ""} ${i !== 0 ? "lg:border-l" : ""}`}
          >
            <a href="#esplora" data-testid={`category-${KEYS[i]}`} className="group flex flex-col items-center text-center px-2 py-1">
              <span className="flex items-end gap-1 h-12 sm:h-16 lg:h-[calc(var(--u)*2.9)] transition-transform duration-500 group-hover:-translate-y-1.5">
                {ICONS[i].map(([Icon, color], k) => (
                  <Icon key={k} strokeWidth={1.8} style={{ color }} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[calc(var(--u)*2.6)] lg:h-[calc(var(--u)*2.6)]" />
                ))}
              </span>
              <span className="mt-2.5 lg:mt-[calc(var(--u)*0.7)] font-display font-semibold text-[1.05rem] sm:text-[1.25rem] lg:text-[calc(var(--u)*1.38)] leading-[1.18] tracking-[0.005em] text-[#3a1f12] group-hover:text-[#8e1b1f] transition-colors max-w-[9rem] lg:max-w-[calc(var(--u)*10.8)]">
                {label}
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);
