import { useEffect, useState } from "react";
import { ZoomIn, ZoomOut, X, Maximize2, Info, ExternalLink } from "lucide-react";

const SRC = "/img/villa/mappa-villa.webp";
const ZOOMS = [100, 200, 300];

const Lightbox = ({ m, onClose }) => {
  const [z, setZ] = useState(0);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[100] bg-[#0b0705] flex flex-col" role="dialog" aria-modal="true" data-testid="villa-map-lightbox" data-lenis-prevent>
      <div className="flex items-center justify-between gap-2 px-3 sm:px-6 py-3 bg-[#120a07] border-b border-[var(--gold)]/30">
        <p className="font-display text-white text-base sm:text-lg truncate">{m.title}</p>
        <div className="flex items-center gap-2">
          <button onClick={() => setZ((v) => Math.max(0, v - 1))} disabled={z === 0} aria-label={m.zoomOut} className="map-btn" data-testid="villa-map-zoom-out"><ZoomOut className="w-5 h-5" /></button>
          <span className="w-12 text-center font-body text-white" data-testid="villa-map-zoom-level">{ZOOMS[z]}%</span>
          <button onClick={() => setZ((v) => Math.min(ZOOMS.length - 1, v + 1))} disabled={z === ZOOMS.length - 1} aria-label={m.zoomIn} className="map-btn" data-testid="villa-map-zoom-in"><ZoomIn className="w-5 h-5" /></button>
          <button onClick={onClose} aria-label={m.close} className="map-btn bg-[var(--gold)] text-[var(--ink)]" data-testid="villa-map-close"><X className="w-5 h-5" /></button>
        </div>
      </div>
      <div className="flex-1 overflow-auto overscroll-contain" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        <img src={SRC} alt={m.alt} style={{ width: z === 0 ? undefined : `${ZOOMS[z]}%` }} className={`block mx-auto ${z === 0 ? "max-w-full max-h-full w-auto h-auto object-contain my-auto" : "max-w-none h-auto"}`} />
      </div>
    </div>
  );
};

export const VillaMap = ({ m }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-14 lg:mb-20" data-testid="villa-map">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#3a1f12]" data-testid="villa-map-title">{m.title}</h3>
        <p className="mt-3 font-body text-lg sm:text-xl text-[#4a3324] leading-relaxed">{m.intro}</p>
      </div>
      <p className="mt-6 max-w-3xl mx-auto flex items-start gap-2.5 rounded-xl border border-[var(--terracotta)]/40 bg-[#fff8e8]/70 px-4 py-3 font-body text-base sm:text-lg text-[#5a2a18]" data-testid="villa-map-disclaimer">
        <Info className="w-5 h-5 mt-0.5 shrink-0 text-[var(--terracotta)]" />{m.note}
      </p>
      <button onClick={() => setOpen(true)} className="group relative block mt-8 mx-auto w-full max-w-[920px] rounded-xl overflow-hidden border-4 border-[#8a5a2b]/40 shadow-[0_30px_70px_-30px_rgba(60,30,10,.7)] cursor-zoom-in" aria-label={m.open} data-testid="villa-map-open">
        <img src={SRC} alt={m.alt} width="1133" height="1388" loading="lazy" className="block w-full h-auto" />
        <span className="absolute right-3 bottom-3 inline-flex items-center gap-2 rounded-full bg-[rgba(18,9,7,0.85)] px-4 py-2 font-body text-base text-white group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors">
          <Maximize2 className="w-4 h-4" />{m.open}
        </span>
      </button>
      <p className="mt-3 text-center">
        <a href={SRC} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-body text-base text-[#5a2a18] underline hover:text-[var(--terracotta)]" data-testid="villa-map-newtab">{m.newTab}<ExternalLink className="w-4 h-4" /></a>
      </p>
      {open && <Lightbox m={m} onClose={() => setOpen(false)} />}
    </div>
  );
};
