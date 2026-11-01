import { useEffect } from "react";
import { UI, villaContent } from "@/content/villa";
import { VillaHero } from "@/components/villa/VillaHero";
import { SectionNav } from "@/components/villa/SectionNav";
import { History } from "@/components/villa/History";
import { Mosaics } from "@/components/villa/Mosaics";
import { RouteSteps } from "@/components/villa/RouteSteps";
import { PlanVisit } from "@/components/villa/PlanVisit";
import { AfterVilla } from "@/components/villa/AfterVilla";

export default function VillaRomana({ lang }) {
  const ui = UI[lang] || UI.it;
  const c = villaContent(lang);
  useEffect(() => {
    document.title = "Villa Romana del Casale — Piazza Armerina Experience";
    return () => { document.title = "Piazza Armerina Experience"; };
  }, []);

  return (
    <main data-testid="villa-page">
      <VillaHero c={c} ui={ui} />
      <SectionNav ui={ui} />
      <section aria-labelledby="villa-video-title" className="bg-[var(--ink)] py-14 sm:py-20" data-testid="villa-video">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
          <p className="font-display uppercase tracking-widest text-sm text-[var(--gold-soft)] text-center">La Villa in immagini</p>
          <h2 id="villa-video-title" className="mt-3 mb-4 text-center font-display text-3xl sm:text-4xl font-bold text-white">Un viaggio dentro la Villa Romana</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center font-body text-lg text-[var(--cream)]/85">Scopri la panoramica del complesso e i dettagli dei suoi ambienti attraverso questo video.</p>
          <div className="relative aspect-video overflow-hidden border border-[var(--gold)]/35 shadow-2xl bg-black">
            <iframe
              src="https://www.youtube-nocookie.com/embed/QhFTY7m4xL4"
              title="Villa Romana del Casale — video panoramico"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="mt-3 text-center font-body text-sm text-[var(--cream)]/65">Video ospitato su YouTube · <a className="underline hover:text-[var(--gold)]" href="https://www.youtube.com/watch?v=QhFTY7m4xL4" target="_blank" rel="noreferrer">Guarda su YouTube</a></p>
        </div>
      </section>
      {ui.translating && <p className="bg-[var(--gold)] text-[var(--ink)] text-center font-body text-base px-4 py-2" data-testid="villa-translation-note">{ui.translating}</p>}
      <History c={c} ui={ui} />
      <Mosaics c={c} ui={ui} />
      <RouteSteps c={c} ui={ui} />
      <PlanVisit c={c} ui={ui} />
      <AfterVilla c={c} />
    </main>
  );
}
