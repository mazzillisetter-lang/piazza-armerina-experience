import { useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Church, Footprints } from "lucide-react";
import { CENTRO_SOURCES as SOURCES, CENTRO_PHOTOS as PHOTOS, CENTRO_PLACES as PLACES, CENTRO_STOPS as STOPS, CENTRO_DETAILS as DETAILS } from "@/content/centro";

const mapUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const Source = ({ id }) => <a href={SOURCES[id].url} target="_blank" rel="noreferrer" className="underline decoration-[var(--gold)]/40 underline-offset-4 hover:text-white">{SOURCES[id].label}</a>;
const Photo = ({ photo, eager = false }) => (
  <figure className="min-w-0" data-testid="centro-photo">
    <a href={photo.src} target="_blank" rel="noreferrer" aria-label={`Ingrandisci: ${photo.alt}`} className="block border border-[var(--gold)]/30 bg-[#17100b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]">
      <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading={eager ? "eager" : "lazy"} style={photo.filter ? { filter: photo.filter } : undefined} className="block h-auto w-full" />
    </a>
    <figcaption className="mt-3 font-body text-sm leading-relaxed text-[var(--cream-dim)]">{photo.credit ? photo.credit : <><a className="underline underline-offset-2" href={photo.source} target="_blank" rel="noreferrer">{photo.author}</a> · <a className="underline underline-offset-2" href={photo.licenseUrl} target="_blank" rel="noreferrer">{photo.license}</a> · {photo.date}</>} · Tocca per ingrandire</figcaption>
  </figure>
);

export default function CentroStorico({ lang }) {
  useEffect(() => {
    document.title = "Centro storico: Duomo e Palazzo Trigona — Piazza Armerina Experience";
    return () => { document.title = "Piazza Armerina Experience"; };
  }, []);
  return (
    <main className="bg-[var(--ink)] text-[var(--cream)]" data-testid="centro-page">
      <section className="px-5 pt-32 pb-14 sm:px-8 sm:pt-40 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <a href="/#esplora" className="inline-flex items-center gap-2 font-body text-base text-[var(--gold-soft)]"><ArrowLeft className="h-4 w-4" />Torna alle esperienze</a>
          <div className="mt-9 grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
            <div>
              <p className="kicker">Duomo · Palazzo Trigona · Vicoli</p>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">Centro storico</h1>
              <p className="mt-5 font-script text-4xl leading-tight text-[var(--gold-soft)] sm:text-5xl">Il cuore alto della città</p>
              <p className="mt-6 max-w-lg font-body text-xl leading-relaxed text-[var(--cream-dim)]">Dalla piazza della Cattedrale ai vicoli: pietra dorata, palazzi e chiese da scoprire un dettaglio alla volta.</p>
              <a href="#duomo" className="btn-hero mt-8">Comincia dalla piazza<ArrowRight className="h-5 w-5" /></a>
            </div>
            <Photo photo={PHOTOS.square} eager />
          </div>
          {lang !== "it" && <p className="mt-6 border-l-2 border-[var(--gold)] pl-4 font-body text-base text-[var(--cream-dim)]">Contenuti di questa sezione in italiano · English / Deutsch / Français / Español: traduzioni in preparazione.</p>}
        </div>
      </section>
      <nav aria-label="Sezioni del centro storico" className="border-y border-[var(--gold)]/25">
        <div className="mx-auto flex max-w-[1320px] flex-wrap gap-x-7 gap-y-3 px-5 py-5 font-body text-lg text-[var(--gold-soft)] sm:px-8 lg:px-12">
          <a href="#duomo">Il Duomo</a><a href="#palazzo-trigona">Palazzo Trigona</a><a href="#passeggiata">La passeggiata</a><a href="#prima-di-partire">Prima di partire</a>
        </div>
      </nav>
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {PLACES.map((place, i) => (
          <section id={place.id} key={place.id} className="scroll-mt-32 border-b border-[var(--gold)]/20 py-16 sm:py-20" data-testid={`centro-${place.id}`}>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className={i % 2 ? "lg:order-2" : ""}><Photo photo={PHOTOS[place.photo]} /></div>
              <div className="min-w-0">
                <p className="kicker"><span className="mr-3">{place.number}</span>{place.kicker}</p>
                <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">{place.title}</h2>
                <p className="mt-3 font-body text-xl italic text-[var(--gold-soft)]">{place.subtitle}</p>
                <p className="mt-5 font-body text-lg leading-relaxed text-[var(--cream-dim)]">{place.text}</p>
                <div className="mt-6 border-l-2 border-[var(--gold)] pl-4 font-body text-lg leading-relaxed"><p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--gold-soft)]">Il dettaglio da cercare</p>{place.detail}</div>
                <a href={mapUrl(place.map)} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-body text-lg text-[var(--gold-soft)]"><MapPin className="h-4 w-4" />Trova il luogo sulla mappa<ArrowUpRight className="h-4 w-4" /></a>
                <p className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-body text-sm text-[var(--cream-dim)]">{place.sources.map(id => <Source key={id} id={id} />)}</p>
              </div>
            </div>
          </section>
        ))}
        <section id="passeggiata" className="scroll-mt-32 py-16 sm:py-20" data-testid="centro-walk">
          <p className="kicker flex items-center gap-3"><Footprints className="h-5 w-5" />Passo dopo passo</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">La città oltre la piazza</h2>
          <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-[var(--cream-dim)]">Una proposta di tappe per la tua passeggiata. Scegli da dove partire e lascia spazio ai vicoli: il centro si scopre anche tra una sosta e l’altra.</p>
          <ol className="mt-9 grid gap-px border border-[var(--gold)]/25 bg-[var(--gold)]/20 sm:grid-cols-2">
            {STOPS.map((stop,i) => <li key={stop.id} className="bg-[var(--ink-2)] p-6 sm:p-8"><span className="font-display text-3xl text-[var(--gold)]">0{i+1}</span><h3 className="mt-5 font-display text-2xl font-semibold">{stop.title}</h3><p className="mt-2 font-body text-lg italic text-[var(--gold-soft)]">{stop.subtitle}</p><p className="mt-4 font-body text-lg leading-relaxed text-[var(--cream-dim)]">{stop.text}</p><a href={mapUrl(stop.map)} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-body text-base text-[var(--gold-soft)]">Trova la tappa<MapPin className="h-4 w-4" /></a></li>)}
          </ol>
          <p className="mt-5 flex flex-wrap gap-x-5 gap-y-3 font-body text-sm text-[var(--cream-dim)]"><Source id="city" /><Source id="quarters" /></p>
        </section>
        <section className="border-t border-[var(--gold)]/20 py-14" aria-labelledby="centro-details-title">
          <p className="kicker">Tre soste da ricordare</p><h2 id="centro-details-title" className="mt-4 font-display text-3xl font-bold sm:text-4xl">Chiese e architetture, da vicino</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">{DETAILS.map(item=><article key={item.title} className="border border-[var(--gold)]/25 p-6"><Church className="h-6 w-6 text-[var(--gold)]" strokeWidth={1.4}/><p className="mt-5 font-body text-sm uppercase tracking-wide text-[var(--gold-soft)]">{item.where}</p><h3 className="mt-2 font-display text-2xl font-semibold">{item.title}</h3><p className="mt-4 font-body text-lg leading-relaxed text-[var(--cream-dim)]">{item.text}</p><p className="mt-5 flex flex-wrap gap-3 font-body text-sm text-[var(--cream-dim)]"><Source id={item.source}/>{item.extraSource&&<Source id={item.extraSource}/>}</p></article>)}</div>
        </section>
        <section id="prima-di-partire" className="scroll-mt-32 border-t border-[var(--gold)]/20 py-14" data-testid="centro-visit">
          <p className="kicker">Prima di partire</p><h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Organizza la tua passeggiata</h2>
          <div className="mt-7 grid gap-7 font-body text-lg leading-relaxed text-[var(--cream-dim)] md:grid-cols-2"><div><h3 className="mb-2 font-display text-2xl text-[var(--cream)]">Gli interni, con calma</h3><p>Per chiese e museo verifica aperture e modalità di visita sulle fonti del luogo. Le celebrazioni possono limitare l’accesso turistico alle chiese.</p><p className="mt-3 text-base"><Source id="museum" /> · <Source id="cathedral" /></p></div><div><h3 className="mb-2 font-display text-2xl text-[var(--cream)]">Scegli il tuo percorso</h3><p>Il centro presenta dislivelli e scalinate. Se hai esigenze di mobilità, verifica il percorso e l’accesso ai singoli edifici prima della visita.</p><a href="/villa-romana-del-casale#visita" className="mt-3 inline-flex items-center gap-2 text-base text-[var(--gold-soft)]">Arrivi dalla Villa? Parcheggio e navetta<ArrowUpRight className="h-4 w-4" /></a></div></div>
          <p className="mt-10 font-body text-sm text-[var(--cream-dim)]">Fonti consultate il 4 novembre 2026 · Le fotografie documentano i luoghi alle date indicate nelle didascalie.</p>
        </section>
      </div>
    </main>
  );
}
