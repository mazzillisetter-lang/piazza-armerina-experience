export const EVENTS_FEED_URL = "https://raw.githubusercontent.com/mazzillisetter-lang/piazza-armerina-experience/armerina-experience-20261101/frontend/public/data/events.json";
export const EVENT_CATEGORIES = {musica:"Musica e spettacoli",cultura:"Arte e cultura",tradizioni:"Feste e tradizioni",sport:"Sport",famiglie:"Famiglie",altro:"Altri appuntamenti"};
export const MUNICIPAL_EVENTS_URL = "https://www.comune.piazzaarmerina.en.it/EG0/EGSCHTST38.HBL?MESSA=PUBBLICA&en=e1051";
const hosts=["www.comune.piazzaarmerina.en.it","comune.piazzaarmerina.en.it","servizi.comune.piazzaarmerina.en.it"];
export const municipalUrl=value=>{try{const u=new URL(value);return u.protocol==="https:"&&hosts.includes(u.hostname)&&!u.username&&!u.password;}catch{return false;}};
const text=(v,max)=>typeof v==="string"&&v.trim().length>0&&v.length<=max;
const optionalText=(v,max)=>v===null||text(v,max);
export const calendarDate=v=>{if(typeof v!=="string"||!/^\d{4}-\d{2}-\d{2}$/.test(v))return false;const d=new Date(v+"T00:00:00Z");return !Number.isNaN(d.getTime())&&d.toISOString().slice(0,10)===v;};
const timestamp=v=>typeof v==="string"&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(v)&&!Number.isNaN(Date.parse(v))&&new Date(v).toISOString()===v.replace("Z",".000Z");
const time=v=>v===null||(typeof v==="string"&&/^([01]\d|2[0-3]):[0-5]\d$/.test(v));
export function validEventUpdates(d){
 if(!d||d.schemaVersion!==1||!timestamp(d.updatedAt)||!calendarDate(d.verifiedAt)||!text(d.summary,1200)||!Array.isArray(d.sources)||!d.sources.length||d.sources.length>12||!d.sources.every(s=>text(s.label,120)&&municipalUrl(s.url))||!Array.isArray(d.events)||d.events.length>250)return false;
 const ids=new Set();
 return d.events.every(e=>{
 if(!e||!text(e.id,100)||ids.has(e.id))return false;ids.add(e.id);
 if(!text(e.title,240)||!Object.hasOwn(EVENT_CATEGORIES,e.category)||!["confirmed","partial","postponed","cancelled"].includes(e.status)||!text(e.description,1600)||!timestamp(e.updatedAt))return false;
 if(e.startDate!==null&&!calendarDate(e.startDate))return false;
 if(e.endDate!==null&&(!calendarDate(e.endDate)||!e.startDate||e.endDate<e.startDate))return false;
 if(e.status==="confirmed"&&!e.startDate)return false;
 if(e.status==="postponed"&&e.startDate!==null)return false;
 if(!time(e.startTime)||!time(e.endTime)||(!e.startDate&&(e.startTime!==null||e.endTime!==null)))return false;
 if(!optionalText(e.location,300)||!optionalText(e.ticketsText,600)||!optionalText(e.accessibility,600)||!optionalText(e.transport,1000)||!optionalText(e.notice,1000))return false;
 if((e.status==="postponed"||e.status==="cancelled")&&!text(e.notice,1000))return false;
 return Array.isArray(e.sources)&&e.sources.length>0&&e.sources.length<=15&&e.sources.every(s=>text(s.title,240)&&municipalUrl(s.url)&&(s.publishedAt===null||calendarDate(s.publishedAt))&&calendarDate(s.checkedAt));
 });
}
export const romeToday=(now=new Date())=>new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Rome",year:"numeric",month:"2-digit",day:"2-digit"}).format(now);
export const addDays=(date,days)=>new Date(Date.parse(date+"T12:00:00Z")+days*86400000).toISOString().slice(0,10);
export const eventIsPast=(e,today)=>Boolean(e.startDate&&(e.endDate||e.startDate)<today);
export const formatEventDate=date=>new Intl.DateTimeFormat("it-IT",{day:"numeric",month:"long",year:"numeric",timeZone:"Europe/Rome"}).format(new Date(date+"T12:00:00Z"));
export const statusLabel=status=>({confirmed:"Confermato",partial:"Annuncio parziale",postponed:"Rinviato · Nuova data da comunicare",cancelled:"Annullato"}[status]);
export function filterEvents(events,{today,period="upcoming",category="all",query=""}){
 const norm=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();const q=norm(query.trim());
 return events.filter(e=>{
 if(category!=="all"&&e.category!==category)return false;
 if(q&&!norm([e.title,e.description,e.location||"",EVENT_CATEGORIES[e.category]].join(" ")).includes(q))return false;
 if(period==="archive")return eventIsPast(e,today);
 if(eventIsPast(e,today))return false;
 if(period==="today")return Boolean(e.startDate&&e.startDate<=today&&(e.endDate||e.startDate)>=today);
 if(period==="week")return Boolean(e.startDate&&e.startDate<=addDays(today,6)&&(e.endDate||e.startDate)>=today);
 return true;
 }).sort((a,b)=>(a.startDate||"9999").localeCompare(b.startDate||"9999")||(a.startTime||"99").localeCompare(b.startTime||"99")||a.title.localeCompare(b.title,"it"));
}
