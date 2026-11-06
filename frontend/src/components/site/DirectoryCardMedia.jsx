import venuePhotos from "@/content/foodVenuePhotos.json";
import "@/pages/directory-cards.css";

const territory = {
  square: { src: "/img/centro/piazza-cattedrale-ludvig14.jpg", width: 1280, height: 853, alt: "Piazza Cattedrale con il Duomo e Palazzo Trigona, fotografia del territorio", title: "Piazza Cattedrale", author: "Ludvig14", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Piazza_Armerina_Cathedral_0802.jpg" },
  duomo: { src: "/img/centro/duomo-pelagalli.jpg", width: 1280, height: 891, alt: "Facciata del Duomo di Piazza Armerina, fotografia del territorio", title: "Il Duomo", author: "Carlo Pelagalli", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Piazza_Armerina,_La_Cattedrale_-_panoramio.jpg" },
  trigona: { src: "/img/centro/palazzo-trigona-pelagalli.jpg", width: 1280, height: 826, alt: "Palazzo Trigona a Piazza Armerina, fotografia del territorio", title: "Palazzo Trigona", author: "Carlo Pelagalli", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Piazza_Armerina,_Palazzo_Trigona_della_Floresta_e_di_San_Cono._Museo_della_citt%C3%A0_e_del_territorio_-_panoramio.jpg" },
  country: { src: "/img/nature/altesina.webp", width: 1600, height: 1067, alt: "Paesaggio del Monte Altesina nei monti Erei, non la vista dalla struttura", title: "Monti Erei · Monte Altesina", author: "Davide Mauro", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Monte_Altesina.jpg" },
  woods: { src: "/img/nature/altesina-bosco.webp", width: 1600, height: 1063, alt: "Bosco nella riserva del Monte Altesina, fotografia del territorio e non della struttura", title: "La natura dei monti Erei", author: "Vincenzo Capasso", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Riserva_Orientata_Monte_Altesina.jpg" },
};

export function directoryPhoto(kind, item) {
  if (kind === "stay") {
    if (item.zone === "campagna") return Array.from(item.id).reduce((sum, character) => sum + character.charCodeAt(0), 0) % 2 ? territory.country : territory.woods;
    if (item.id === "suite-dautore") return territory.square;
    const index = Array.from(item.id).reduce((sum, character) => sum + character.charCodeAt(0), 0) % 3;
    return [territory.square, territory.duomo, territory.trigona][index];
  }
  // No category fallback: a venue may only show its own verified photograph.
  const photo = venuePhotos[item.id];
  return photo?.venueId === item.id && photo?.rightsEvidence && photo?.src && photo?.author && photo?.sourceUrl ? photo : null;
}

export default function DirectoryCardMedia({ kind, item }) {
  const photo = directoryPhoto(kind, item);
  if (!photo) return null;
  const isStay = kind === "stay";
  const isTerritory = isStay || photo.territory;
  const context = isStay ? "Foto del territorio · non della struttura" : `Foto del locale · ${item.name}`;
  return <figure className={`directory-card-media ${isTerritory ? "directory-territory" : "directory-taste"}`}>
    <a className="directory-photo-link" href={photo.src} target="_blank" rel="noreferrer" aria-label={`Ingrandisci: ${photo.title}. ${context}`}>
      <img src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} loading="lazy" decoding="async" />
      <span className="directory-photo-title">{photo.title}</span>
    </a>
    <figcaption>
      <span className="directory-photo-context">{context}</span>
      <details className="directory-photo-credit"><summary>Crediti foto</summary><span><a href={photo.sourceUrl || photo.source} target="_blank" rel="noreferrer">{photo.author}</a> · <a href={photo.licenseUrl} target="_blank" rel="noreferrer">{photo.license}</a>{!isTerritory && " · Impaginazione della miniatura; nessuna ricostruzione."}</span></details>
    </figcaption>
  </figure>;
}
