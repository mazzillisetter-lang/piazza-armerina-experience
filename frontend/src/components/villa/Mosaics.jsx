import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHead } from "./SectionHead";
import { PhotoSlot } from "./PhotoSlot";

const Card = ({ m, ui, i }) => (
  <motion.article initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.8, delay: (i % 3) * 0.08 }} className="group flex flex-col bg-[#17100b] border border-[var(--gold)]/20 hover:border-[var(--gold)]/55 transition-colors" data-testid={`mosaic-card-${m.key}`}>
    <PhotoSlot photo={m.photo} alt={m.title} label={ui.photoSoon} className="aspect-[4/3] w-full" testId={`mosaic-photo-${m.key}`} />
    <div className="p-6 flex flex-col flex-1">
      <p className="flex items-center gap-1.5 font-body text-sm text-[var(--gold)]"><MapPin className="w-4 h-4" />{m.where}</p>
      <h3 className="mt-2 font-display font-bold text-2xl text-white leading-tight">{m.title}</h3>
      <p className="mt-3 font-body text-lg leading-relaxed text-[var(--cream)]/85">{m.text}</p>
    </div>
  </motion.article>
);

export const Mosaics = ({ c, ui }) => (
  <section id="mosaici" className="bg-[var(--ink)] scroll-mt-40 py-16 sm:py-24" data-testid="villa-mosaics">
    <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
      <SectionHead dark kicker={c.mosaicsKicker} title={c.mosaicsTitle} lead={c.mosaicsLead} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
        {c.mosaics.map((m, i) => <Card key={m.key} m={m} ui={ui} i={i} />)}
      </div>
    </div>
  </section>
);
