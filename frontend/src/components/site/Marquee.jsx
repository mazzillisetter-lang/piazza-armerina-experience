import { MARQUEE } from "@/i18n";

const Row = ({ hidden }) => (
  <div className="flex shrink-0 items-center" aria-hidden={hidden}>
    {MARQUEE.map((w) => (
      <span key={w} className="flex items-center">
        <span className="font-display italic text-3xl sm:text-5xl text-[var(--ink)] px-6 sm:px-10 whitespace-nowrap">{w}</span>
        <span className="text-[var(--terracotta)] text-xl">✦</span>
      </span>
    ))}
  </div>
);

export const Marquee = () => (
  <div className="relative overflow-hidden bg-[var(--gold)] py-5 sm:py-7 border-y border-[var(--ink)]" data-testid="editorial-marquee">
    <div className="marquee-track flex w-max">
      <Row />
      <Row hidden />
    </div>
  </div>
);
