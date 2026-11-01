import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { LANGS } from "@/i18n";

export const Header = ({ lang, setLang, t }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,padding] duration-500 border-b ${
        scrolled ? "bg-[rgba(14,11,8,0.86)] backdrop-blur-xl border-[var(--line)] py-3" : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
        <Logo />
        <nav className="hidden lg:flex items-center gap-9 text-[0.78rem] uppercase tracking-[0.22em] text-[var(--cream-dim)]">
          {t.menu.map((m, i) => (
            <a key={m} href="#esplora" data-testid={`header-nav-link-${i}`} className="link-gold">{m}</a>
          ))}
        </nav>
        <div className="flex items-center rounded-full border border-[var(--line)] bg-[rgba(14,11,8,0.6)] p-1" data-testid="lang-switcher">
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              data-testid={`lang-switcher-${l}`}
              aria-pressed={lang === l}
              className={`relative px-2 sm:px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.15em] rounded-full transition-colors duration-300 ${
                lang === l ? "text-[var(--ink)]" : "text-[var(--cream-dim)] hover:text-[var(--gold)]"
              }`}
            >
              {lang === l && <motion.span layoutId="lang-pill" className="absolute inset-0 rounded-full bg-[var(--gold)]" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
              <span className="relative">{l}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.header>
  );
};
