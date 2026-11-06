import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Search, MapPin, Phone, MessageCircle, UtensilsCrossed, Coffee, Pizza, Croissant, SlidersHorizontal, X } from "lucide-react";
import directory from "@/content/food.json";
import photos from "@/content/foodPhotos.json";
import DirectoryCardMedia from "@/components/site/DirectoryCardMedia";
import { FOOD_CATEGORIES, FOOD_ZONES, filterFoodVenues, foodMapUrl } from "@/lib/foodDirectory";
import "@/pages/food.css";

const categoryLabel = id => FOOD_CATEGORIES.find(c=>c[0]===id)?.[1] || id;
const Icon = ({ venue }) => {
  const Component = venue.categories.includes("pizza") ? Pizza : venue.categories.includes("dolci") || venue.categories.includes("panificio") ? Croissant : venue.categories.includes("bar") ? Coffee : UtensilsCrossed;
  return <Component size={24} strokeWidth={1.3} aria-hidden="true" />;
};
const Credit = ({ photo }) => <span><a href={photo.sourceUrl} target="_blank" rel="noreferrer">{photo.author}</a> · <a href={photo.licenseUrl} target="_blank" rel="noreferrer">{photo.license}</a></span>;
const HeroPhoto = ({ id, alt, eager=false }) => {
  const photo=photos[id];
  return <figure className={`food-hero-photo food-photo-${id}`}><img src={photo.src} width={photo.width} height={photo.height} alt={alt} loading={eager?"eager":"lazy"} style={{filter:photo.filter}} /><figcaption><Credit photo={photo} /></figcaption></figure>;
};
const VenueCard = ({ venue }) => <article className="food-venue directory-card" data-testid="food-venue" id={`locale-${venue.id}`}>
  <DirectoryCardMedia kind="food" item={venue}/>
  <div className="directory-card-body">
  <div className="food-venue-top"><div className="food-venue-symbol"><Icon venue={venue}/></div><p className="food-zone"><MapPin size={13}/>{FOOD_ZONES[venue.zone]}</p></div>
  <div className="food-venue-copy"><p className="food-venue-type">{venue.categories.slice(0,2).map(categoryLabel).join(" · ")}</p><h3>{venue.name}</h3><p className="food-venue-description">{venue.description}</p><p className="food-address">{venue.address.replace(/, Piazza Armerina$/," ").trim()}</p></div>
  <div className="food-contact-actions">
    {venue.phone && <a className="food-primary-action" href={`tel:${venue.phone}`} aria-label={`Chiama ${venue.name}`}><Phone size={16}/>Chiama</a>}
    {venue.whatsapp && <a className="food-whatsapp-action" href={venue.whatsapp} target="_blank" rel="noreferrer" aria-label={`Scrivi a ${venue.name} su WhatsApp`}><MessageCircle size={16}/>WhatsApp</a>}
    <a className={venue.phone ? "food-secondary-action" : "food-primary-action"} href={foodMapUrl(venue)} target="_blank" rel="noreferrer" aria-label={`Foto, contatti e indicazioni per ${venue.name} su Google Maps`}>{venue.phone ? "Foto e indicazioni" : "Foto e contatti su Google"}<ArrowUpRight size={16}/></a>
    {venue.website && <a className="food-secondary-action" href={venue.website} target="_blank" rel="noreferrer">Sito del locale<ArrowUpRight size={15}/></a>}
    {venue.booking && <a className="food-secondary-action" href={venue.booking} target="_blank" rel="noreferrer">Prenota online<ArrowUpRight size={15}/></a>}
  </div>
  <details className="food-card-sources"><summary>Fonti della scheda</summary><ul>{venue.sources.map((source,i)=><li key={source}><a href={source} target="_blank" rel="noreferrer">{i===0?"Pagina di riferimento":"Altra fonte"}<ArrowUpRight size={12}/></a></li>)}</ul></details>
  </div>
</article>;

export default function DoveMangiare({ lang }) {
  const [query,setQuery]=useState("");const [category,setCategory]=useState("all");const [zone,setZone]=useState("all");const [limit,setLimit]=useState(18);
  const filtered=useMemo(()=>filterFoodVenues(directory.venues,{query,category,zone}),[query,category,zone]);
  const visible=filtered.slice(0,limit);
  const reset=()=>{setQuery("");setCategory("all");setZone("all");setLimit(18);};
  useEffect(()=>{document.title="Dove mangiare a Piazza Armerina — Ristoranti, pizza e sapori";return()=>{document.title="Piazza Armerina Experience";};},[]);
  return <main className="food-page" data-testid="food-page">
    <section className="food-opening food-container"><a className="food-back" href="/#esplora"><ArrowLeft size={16}/>Torna alle esperienze</a><div className="food-opening-grid"><div className="food-opening-copy"><p className="kicker">Dove mangiare · Piazza Armerina</p><h1>La Sicilia<br/>si assaggia.</h1><p className="food-script">Una pausa che diventa un ricordo.</p><p className="food-lead">Una trattoria tra i vicoli, una pizza da condividere, un arancino prima di ripartire. Trova il posto per la tua prossima sosta, dalla Villa al cuore della città.</p><a className="btn-hero" href="#locali">Scegli dove fermarti<ArrowRight size={18}/></a><div className="food-opening-stats"><span><strong>{directory.venues.length}</strong> locali da esplorare</span><span>Villa · Centro · Città · Campagna</span></div></div><div className="food-photo-story"><HeroPhoto id="cannoli" alt="Cannoli siciliani: fotografia gastronomica illustrativa" eager/><div className="food-photo-pair"><HeroPhoto id="pasta" alt="Cavatelli con pomodoro e ricotta salata: immagine illustrativa di cucina siciliana"/><HeroPhoto id="arancini" alt="Arancini dorati: fotografia gastronomica illustrativa"/></div><p className="food-photo-note">Immagini dei sapori siciliani · <a href="#crediti-foto">Crediti e ritocchi fotografici</a></p></div></div>{lang!=="it"&&<p className="food-language-note">Contenuti in italiano · English / Deutsch / Français / Español: traduzioni in preparazione.</p>}</section>
    <section id="locali" className="food-directory"><div className="food-container"><div className="food-directory-heading"><div><p className="food-kicker">Il posto giusto per la tua pausa</p><h2>Cosa ti va oggi?</h2></div><p>Esplora per gusto, cerca un nome o scegli una zona.<br/>I contatti del locale sono a un tocco.</p></div>
      <div className="food-filters" aria-label="Filtra i locali"><div className="food-search-row"><label className="food-search"><Search size={20}/><span className="sr-only">Cerca nome, via o tipo di locale</span><input type="search" value={query} onChange={e=>{setQuery(e.target.value);setLimit(18);}} placeholder="Cerca un locale, una via, un sapore…" data-testid="food-search"/>{query&&<button type="button" onClick={()=>{setQuery("");setLimit(18);}} aria-label="Cancella ricerca"><X size={17}/></button>}</label><label className="food-zone-select"><SlidersHorizontal size={17}/><span className="sr-only">Scegli la zona</span><select value={zone} onChange={e=>{setZone(e.target.value);setLimit(18);}} data-testid="food-zone"><option value="all">Tutte le zone</option>{Object.entries(FOOD_ZONES).map(([id,label])=><option key={id} value={id}>{label}</option>)}</select></label></div><div className="food-category-filters" aria-label="Tipi di locale">{FOOD_CATEGORIES.map(([id,label])=><button key={id} type="button" aria-pressed={category===id} onClick={()=>{setCategory(id);setLimit(18);}} className={category===id?"selected":""} data-testid={`food-category-${id}`}>{label}</button>)}</div></div>
      <div className="food-results-heading"><p role="status" aria-live="polite" data-testid="food-count"><strong>{filtered.length}</strong> {filtered.length===1?"locale trovato":"locali trovati"}{zone!=="all"?` · ${FOOD_ZONES[zone]}`:""}</p>{(query||zone!=="all"||category!=="all")&&<button onClick={reset} type="button" className="food-reset">Azzera i filtri<X size={14}/></button>}</div>
      <div className="food-venues-grid">{visible.map(venue=><VenueCard key={venue.id} venue={venue}/>)}</div>
      {filtered.length===0&&<div className="food-no-results"><Search size={30}/><h3>Nessun locale con questi filtri</h3><p>Prova un altro nome oppure torna a tutte le proposte.</p><button className="food-primary-action" onClick={reset}>Mostra tutti i locali</button></div>}
      {limit<filtered.length&&<div className="food-load-more"><button type="button" onClick={()=>setLimit(n=>n+18)} data-testid="food-more">Mostra altri {Math.min(18,filtered.length-limit)} locali<ArrowRight size={17}/></button><p>Stai vedendo {visible.length} di {filtered.length} proposte</p></div>}
      <div className="food-directory-note"><h3>Prima di scegliere</h3><p>La raccolta riunisce attività individuate online e non è un elenco completo né una classifica. Per apertura, menu, disponibilità e allergeni chiedi direttamente al locale. Le zone sono indicazioni orientative.</p><p>Il pulsante Google apre la ricerca del locale: lì puoi vedere le sue fotografie, i recapiti e le indicazioni aggiornate. I pulsanti di chiamata sono presenti dove il numero è stato riscontrato su una pagina dell’attività; WhatsApp compare soltanto se pubblicato espressamente.</p><p className="food-review-date">Fonti delle schede consultate il 4 novembre 2026 · Nessuna indicazione “aperto ora” o aggiornamento automatico dei recapiti.</p></div>
    </div></section>
    <section id="crediti-foto" className="food-container food-photo-credits"><p className="kicker">Le immagini del gusto</p><h2>Fotografie vere, luce curata.</h2><p>Le fotografie gastronomiche illustrano i sapori della pagina e non raffigurano i piatti dei singoli locali elencati. Per le immagini di un’attività usa il collegamento alla sua scheda Google.</p><div>{["cannoli","pasta","arancini"].map(id=><p key={id}><strong>{photos[id].title}</strong> · <Credit photo={photos[id]}/><br/>Ridimensionamento, conversione WebP e ritaglio delle miniature; lievi regolazioni di luminosità e contrasto, senza ricostruzioni.</p>)}</div><a className="food-back" href="#locali">Torna ai locali<ArrowRight size={16}/></a></section>
  </main>;
}
