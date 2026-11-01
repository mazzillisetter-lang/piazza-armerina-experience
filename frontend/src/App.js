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

const initialLang = () => {
  const saved = localStorage.getItem("pa-lang");
  return LANGS.includes(saved) ? saved : "it";
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
    <div className="site grain">
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <CategoryBand t={t} />
        <Marquee />
        <Intro t={t} />
        <Explore t={t} />
      </main>
      <Footer t={t} />
      <Toaster position="bottom-center" />
    </div>
  );
}

export default App;
