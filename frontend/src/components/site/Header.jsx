import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { Logo } from "./Logo";
import { Flag } from "./Flag";
import { LANGS } from "@/i18n";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const HREFS = ["#benvenuti", "#categorie", "#esplora", "#esplora", "#esplora", "#esplora", "#esplora"];

const LangMenu = ({ lang, setLang }) => (
  <DropdownMenu modal={false}>
    <DropdownMenuTrigger data-testid="lang-switcher" className="flex items-center gap-2 h-11 sm:h-12 pl-1.5 pr-3 rounded-full bg-[rgba(20,10,8,0.82)] border border-[var(--gold)]/60 text-white font-body text-sm sm:text-base outline-none hover:border-[var(--gold)] transition-colors">
      <Flag code={lang} /><span className="uppercase">{lang}</span><ChevronDown className="w-4 h-4" />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="bg-[#1a0f0b] border-[var(--gold)]/40 text-white min-w-[9rem]">
      {LANGS.map((l) => (
        <DropdownMenuItem key={l} data-testid={`lang-switcher-${l}`} onSelect={() => setLang(l)} className="gap-3 uppercase cursor-pointer focus:bg-[var(--gold)]/20 focus:text-white">
          <Flag code={l} />{l}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export const Header = ({ lang, setLang, t, base = "" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,padding] duration-500 ${scrolled ? "bg-[rgba(18,9,7,0.9)] backdrop-blur-xl py-2" : "bg-transparent py-2.5 lg:py-[calc(var(--u)*1)]"}`}
    >
      <div className="px-4 sm:px-8 lg:px-[calc(var(--u)*3)] lg:max-w-[calc(var(--u)*100)] mx-auto flex items-center justify-between gap-3">
        <Logo href={base ? "/" : "#top"} />
        <nav className="hidden xl:flex items-center gap-[2.2vw] font-body text-[calc(var(--u)*1.25)] text-white text-shadow-soft">
          {t.nav.map((m, i) => (
            <a key={m} href={i === 2 ? "/dove-mangiare" : i === 3 ? "/dove-dormire" : i === 5 ? "/natura-e-itinerari" : i === 4 ? "/eventi" : base + HREFS[i]} data-testid={`header-nav-link-${i}`} className="link-gold whitespace-nowrap">{m}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <button data-testid="header-search-btn" aria-label="Search" onClick={() => toast(t.searchSoon)} className="hidden sm:grid place-items-center w-12 h-12 rounded-full bg-[rgba(20,10,8,0.82)] text-white hover:text-[var(--gold)] transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <LangMenu lang={lang} setLang={setLang} />
          <button data-testid="header-menu-btn" aria-label={t.menuLabel} onClick={() => setOpen((o) => !o)} className="grid place-items-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-b from-[#f0c45a] to-[#c98f22] text-white shadow-[0_6px_20px_-6px_rgba(240,180,60,.7)] hover:scale-105 transition-transform">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="header-menu-panel"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute right-4 sm:right-8 lg:right-[calc(var(--u)*3)] top-full mt-2 w-64 rounded-2xl bg-[#1a0f0b]/95 backdrop-blur-xl border border-[var(--gold)]/40 p-3"
          >
            {t.nav.map((m, i) => (
              <a key={m} href={i === 2 ? "/dove-mangiare" : i === 3 ? "/dove-dormire" : i === 5 ? "/natura-e-itinerari" : i === 4 ? "/eventi" : base + HREFS[i]} onClick={() => setOpen(false)} data-testid={`menu-panel-link-${i}`} className="block px-4 py-2.5 rounded-xl font-body text-lg text-white hover:bg-[var(--gold)]/15 hover:text-[var(--gold-soft)] transition-colors">{m}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
