import { ShareSite } from "./ShareSite";
import { LogoMark } from "./Logo";

export const Footer = ({ t, lang }) => (
  <footer className="bg-[var(--ink)] border-t border-[var(--line)] pt-20 pb-10 overflow-hidden" data-testid="site-footer">
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex items-center gap-5 text-[var(--gold)]">
          <LogoMark className="w-14 h-14" />
          <div>
            <p className="font-display text-3xl sm:text-4xl text-[var(--cream)]">Piazza Armerina Experience</p>
            <p className="font-script text-2xl sm:text-3xl text-[var(--gold-soft)] mt-1">{t.footerTag}</p>
          </div>
        </div>
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--cream-dim)]" data-testid="footer-preview-note">{t.preview}</p>
      </div>
      <ShareSite lang={lang} />
      <p aria-hidden className="font-display text-[17vw] leading-[0.8] text-center mt-16 text-gold-grad opacity-90 select-none whitespace-nowrap">Armerina</p>
      <div className="mt-10 pt-6 border-t border-[var(--line)] text-xs text-[var(--cream-dim)] flex flex-col sm:flex-row justify-between gap-3">
        <span>© {new Date().getFullYear()} Piazza Armerina Experience. {t.rights}</span>
        <span>Sicilia · Italia</span>
      </div>
    </div>
  </footer>
);
