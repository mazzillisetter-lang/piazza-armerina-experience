export const LogoMark = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 48 40" className={className} aria-hidden="true" fill="currentColor">
    <path d="M24 2v4M22.4 3.6h3.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M18.5 15c0-3.6 2.4-6.8 5.5-7.8 3.1 1 5.5 4.2 5.5 7.8z" />
    <rect x="16.5" y="15.6" width="15" height="2.2" />
    <path d="M17 18.5h14V38H27v-6a3 3 0 0 0-6 0v6h-4z" />
    <path d="M6 22.5l5-4 5 4V38H6z" />
    <path d="M32 22.5l5-4 5 4V38H32z" />
    <rect x="9.6" y="27" width="2.8" height="4.5" rx="1.4" fill="#000" fillOpacity=".35" />
    <rect x="35.6" y="27" width="2.8" height="4.5" rx="1.4" fill="#000" fillOpacity=".35" />
    <rect x="3" y="38" width="42" height="1.6" />
  </svg>
);

export const Logo = () => (
  <a href="#top" data-testid="header-logo-link" className="flex flex-col items-center text-[var(--gold)] group shrink-0">
    <LogoMark className="w-9 h-8 sm:w-12 sm:h-10 lg:w-[calc(var(--u)*3)] lg:h-[calc(var(--u)*2.5)] transition-transform duration-700 group-hover:-translate-y-0.5" />
    <span className="font-display font-bold text-[0.95rem] sm:text-[1.45rem] lg:text-[calc(var(--u)*1.5)] leading-none tracking-[0.02em] text-white uppercase mt-1 text-shadow-soft whitespace-nowrap">Piazza Armerina</span>
    <span className="text-[0.55rem] sm:text-[0.72rem] lg:text-[max(0.55rem,calc(var(--u)*0.7))] uppercase tracking-[0.42em] text-[var(--gold)] mt-1 pl-[0.42em] font-body">Experience</span>
  </a>
);
