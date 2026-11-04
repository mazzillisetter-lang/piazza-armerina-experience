import { useEffect, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "@/App.css";
import { T, LANGS } from "@/i18n";
import { H } from "@/i18n-hero";
import { Toaster } from "@/components/ui/sonner";
import { CategoryBand } from "@/components/site/CategoryBand";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Intro } from "@/components/site/Intro";
import { Explore } from "@/components/site/Explore";
import { Footer } from "@/components/site/Footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import VillaRomana from "@/pages/VillaRomana";
import CentroStorico from "@/pages/CentroStorico";
import PalioNormanni from "@/pages/PalioNormanni";
import DoveMangiare from "@/pages/DoveMangiare";
import DoveDormire from "@/pages/DoveDormire";
import NaturaItinerari from "@/pages/NaturaItinerari";
import Eventi from "@/pages/Eventi";

const initialLang = () => {
  const saved = localStorage.getItem("pa-lang");
  return LANGS.includes(saved) ? saved : "it";
};

const Home = ({ t }) => (
  <main>
    <Hero t={t} />
    <CategoryBand t={t} />
    <Marquee />
    <Intro t={t} />
    <Explore t={t} />
  </main>
);

const Shell = ({ lang, setLang, t }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <div className="site grain">
      <Header lang={lang} setLang={setLang} t={t} base={isHome ? "" : "/"} />
      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/villa-romana-del-casale" element={<VillaRomana lang={lang} />} />
        <Route path="/centro-storico" element={<CentroStorico lang={lang} />} />
        <Route path="/palio-dei-normanni" element={<PalioNormanni lang={lang} />} />
        <Route path="/dove-mangiare" element={<DoveMangiare lang={lang} />} />
        <Route path="/dove-dormire" element={<DoveDormire lang={lang} />} />
        <Route path="/natura-e-itinerari" element={<NaturaItinerari lang={lang} />} />
        <Route path="/eventi" element={<Eventi lang={lang} />} />
        <Route path="*" element={<Home t={t} />} />
      </Routes>
      <Footer t={t} />
      <Toaster position="bottom-center" />
    </div>
  );
};

function App() {
  const [lang, setLang] = useState(initialLang);
  const t = { ...T[lang], ...H[lang] };

  useEffect(() => {
    localStorage.setItem("pa-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.25, anchors: true });
    let id;
    const raf = (time) => { lenis.raf(time); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);

  return (
    <BrowserRouter>
      <Shell lang={lang} setLang={setLang} t={t} />
    </BrowserRouter>
  );
}

export default App;
