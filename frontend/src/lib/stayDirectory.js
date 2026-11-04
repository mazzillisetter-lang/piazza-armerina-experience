export const STAY_TYPES = [["all","Tutte"],["hotel","Hotel"],["bb","B&B"],["camere","Camere e dimore"],["casa","Case e appartamenti"],["agriturismo","Agriturismi e dimore rurali"]];
export const STAY_ZONES = {centro:"Centro e vie vicine",citta:"In città",villa:"Zona Villa Romana",campagna:"Campagna e dintorni"};
export const normalizeStaySearch = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[’']/g," ").replace(/\s+/g," ").trim();
export function filterStays(places,{query="",type="all",zone="all"}={}) {
 const terms=normalizeStaySearch(query).split(" ").filter(Boolean);
 return places.filter(p=>(type==="all"||p.types.includes(type))&&(zone==="all"||p.zone===zone)&&terms.every(t=>normalizeStaySearch([p.name,p.address,p.description,STAY_ZONES[p.zone],...p.types.map(c=>STAY_TYPES.find(x=>x[0]===c)?.[1]||c)].join(" ")).includes(t)));
}
export const stayMapUrl = place => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name}, ${place.address}${/piazza armerina/i.test(place.address)?"":", Piazza Armerina"}`)}`;
