const F = {
  it: <><rect width="8" height="16" fill="#009246" /><rect x="8" width="8" height="16" fill="#fff" /><rect x="16" width="8" height="16" fill="#CE2B37" /></>,
  fr: <><rect width="8" height="16" fill="#0055A4" /><rect x="8" width="8" height="16" fill="#fff" /><rect x="16" width="8" height="16" fill="#EF4135" /></>,
  de: <><rect width="24" height="5.34" fill="#000" /><rect y="5.33" width="24" height="5.34" fill="#DD0000" /><rect y="10.66" width="24" height="5.34" fill="#FFCE00" /></>,
  es: <><rect width="24" height="16" fill="#AA151B" /><rect y="4" width="24" height="8" fill="#F1BF00" /></>,
  en: <><rect width="24" height="16" fill="#012169" /><path d="M0 0L24 16M24 0L0 16" stroke="#fff" strokeWidth="3" /><path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.2" /><path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5" /><path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="3" /></>,
};

export const Flag = ({ code }) => (
  <svg viewBox="0 0 24 16" className="w-6 h-6 rounded-full shrink-0" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    {F[code]}
  </svg>
);
