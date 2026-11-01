export const LogoMark = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <circle cx="24" cy="24" r="22.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <path d="M24 7v4M22.2 9h3.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M17 22c0-4.4 3.1-8.5 7-9.6 3.9 1.1 7 5.2 7 9.6z" fill="currentColor" />
    <path d="M13 38V25h22v13" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <path d="M15.5 22.5h17" stroke="currentColor" strokeWidth="1.2" />
    <path d="M21 38v-6a3 3 0 0 1 6 0v6" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <path d="M10 38h28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const Logo = () => (
  <a href="#top" data-testid="header-logo-link" className="flex items-center gap-3 text-[var(--gold)] group">
    <LogoMark className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform duration-700 group-hover:rotate-[360deg]" />
    <span className="leading-none">
      <span className="block font-display text-[1.05rem] sm:text-[1.35rem] whitespace-nowrap text-[var(--cream)] tracking-wide">Piazza Armerina</span>
      <span className="block text-[0.62rem] uppercase tracking-[0.42em] text-[var(--gold)] mt-1">Experience</span>
    </span>
  </a>
);
