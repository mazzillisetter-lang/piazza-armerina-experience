import { MARQUEE } from "@/i18n";

const Row = ({ hidden }) => (
  <div className="flex shrink-0 items-center" aria-hidden={hidden}>
    {MARQUEE.map((w) => (
      <span key={w} className="flex items-center">
        <span className="font-display italic text-lg sm:text-2xl text-[var(--ink)] px-5 sm:px-8 whitespace-nowrap">{w}</span>
        <span className="text-[var(--terracotta)] text-xs">✦</span>
      </span>
    ))}
  </div>
);

export const Marquee = () => (
  <div className="relative overflow-hidden bg-[var(--gold)] py-2 sm:py-2.5 border-y border-[var(--ink)]" data-testid="editorial-marquee">
    <div className="marquee-track flex w-max">
      <Row />
      <Row hidden />
    </div>
  </div>
);
