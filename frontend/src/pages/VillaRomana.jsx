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
      {ui.translating && <p className="bg-[var(--gold)] text-[var(--ink)] text-center font-body text-base px-4 py-2" data-testid="villa-translation-note">{ui.translating}</p>}
      <History c={c} ui={ui} />
      <Mosaics c={c} ui={ui} />
      <RouteSteps c={c} ui={ui} />
      <PlanVisit c={c} ui={ui} />
      <AfterVilla c={c} />
    </main>
  );
}
