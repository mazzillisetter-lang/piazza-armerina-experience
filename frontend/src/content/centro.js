export const CENTRO_SOURCES = {
  city: { label: "Visit Sicily · Piazza Armerina", url: "https://www.visitsicily.info/piazza-armerina/" },
  cathedral: { label: "Comune · Cattedrale", url: "https://www.comune.piazzaarmerina.en.it/vivere_il_comune/luoghi/luogo_24.html" },
  fai: { label: "FAI · Cattedrale", url: "https://fondoambiente.it/luoghi/cattedrale-di-piazza-armerina" },
  museum: { label: "Parco · Museo di Palazzo Trigona", url: "https://www.villaromanadelcasale.it/museo-della-citta-e-del-territorio-di-piazza-armerina-palazzo-trigona/" },
  townhall: { label: "Comune · Palazzo di Città", url: "https://www.comune.piazzaarmerina.en.it/vivere_il_comune/luoghi/luogo_22.html" },
  fundro: { label: "Comune · San Rocco / Fundrò", url: "https://www.comune.piazzaarmerina.en.it/vivere_il_comune/luoghi/luogo_8.html" },
  giovanni: { label: "Comune · San Giovanni Evangelista", url: "https://www.comune.piazzaarmerina.en.it/vivere_il_comune/luoghi/luogo_32.html" },
  teatini: { label: "Comune · Chiesa dei Teatini", url: "https://www.comune.piazzaarmerina.en.it/vivere_il_comune/luoghi/luogo_33.html" },
  quarters: { label: "PiazzaArmerina.org · Quartieri storici", url: "https://www.piazzaarmerina.org/piazza-armerina/i-quattro-quartieri" },
};

export const CENTRO_PHOTOS = {
  square: { src: "/img/centro/centro-storico-tramonto.jpg", width: 400, height: 320, alt: "Panorama del centro storico di Piazza Armerina con il Duomo sopra i tetti e il cielo al tramonto", credit: "Foto fornita per il sito", filter: "brightness(1.02) contrast(1.04) saturate(0.94)" },
  cathedral: { src: "/img/centro/duomo-pelagalli.jpg", width: 1280, height: 891, alt: "Facciata completa del Duomo di Piazza Armerina, campanile e monumento a Marco Trigona nella piazza", author: "Carlo Pelagalli", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", source: "https://commons.wikimedia.org/wiki/File:Piazza_Armerina,_La_Cattedrale_-_panoramio.jpg", date: "2013" },
  palace: { src: "/img/centro/palazzo-trigona-pelagalli.jpg", width: 1280, height: 826, alt: "Facciata intera di Palazzo Trigona con portale centrale e balconi affacciati su Piazza Cattedrale", author: "Carlo Pelagalli", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", source: "https://commons.wikimedia.org/wiki/File:Piazza_Armerina,_Palazzo_Trigona_della_Floresta_e_di_San_Cono._Museo_della_citt%C3%A0_e_del_territorio_-_panoramio.jpg", date: "2013" },
};

export const CENTRO_PLACES = [
  { id: "duomo", number: "01", kicker: "Il simbolo della città", title: "Il Duomo", subtitle: "Cattedrale di Maria Santissima delle Vittorie", text: "La cupola emerge sopra i tetti del centro storico. In Piazza Cattedrale, la pietra color ocra e la facciata monumentale raccontano un lungo cantiere tra Seicento e Settecento, con tracce della chiesa precedente ancora riconoscibili nel campanile.", detail: "Fermati davanti al portale, poi osserva il campanile sulla destra: due parti dello stesso edificio che raccontano epoche diverse.", photo: "cathedral", sources: ["cathedral", "fai"], map: "Cattedrale Maria Santissima delle Vittorie Piazza Armerina" },
  { id: "palazzo-trigona", number: "02", kicker: "Una dimora, tante storie", title: "Palazzo Trigona", subtitle: "Museo della Città e del Territorio", text: "Accanto al Duomo, la residenza dei marchesi Trigona della Floresta dà alla piazza il suo volto nobiliare. Costruita tra la fine del Seicento e la prima metà del Settecento, è oggi sede del Museo della Città e del Territorio: un racconto che unisce archeologia, storia locale e ambienti del piano nobile.", detail: "Guarda il portale e il ritmo dei balconi. All’interno, il percorso museale collega il territorio della Villa Romana alla storia della città, dal medioevo al Novecento.", photo: "palace", sources: ["museum"], map: "Palazzo Trigona Piazza Cattedrale 20 Piazza Armerina" },
];

export const CENTRO_STOPS = [
  { id: "piazza", title: "Piazza Cattedrale", subtitle: "Duomo e Palazzo Trigona", text: "Comincia dalla piazza: guarda insieme i due edifici prima di avvicinarti ai singoli dettagli.", map: "Piazza Cattedrale Piazza Armerina" },
  { id: "garibaldi", title: "Piazza Garibaldi", subtitle: "Palazzo di Città e Fundrò", text: "Prosegui verso la facciata tardo barocca del Palazzo di Città. Poco distante, cerca la meridiana sopra il portale della chiesa di Fundrò.", map: "Piazza Garibaldi Piazza Armerina" },
  { id: "san-giovanni", title: "Largo San Giovanni", subtitle: "Affreschi e architetture religiose", text: "San Giovanni Evangelista custodisce affreschi di Guglielmo Borremans. Nello stesso nucleo si trova San Lorenzo, conosciuta come chiesa dei Teatini.", map: "Chiesa San Giovanni Evangelista Piazza Armerina" },
  { id: "monte", title: "I vicoli del Monte", subtitle: "Un altro passo, un’altra prospettiva", text: "Dedica una deviazione a via Monte: il portale turistico locale segnala Palazzo Geraci e il Monastero della Trinità lungo l’antica strada maestra. Osserva gli esterni e le stradine laterali.", map: "Via Monte Piazza Armerina" },
];

export const CENTRO_DETAILS = [
  { title: "Palazzo di Città", where: "Piazza Garibaldi", text: "Il portale in arenaria, lo stemma cittadino e l’orologio in alto rendono riconoscibile questa architettura civile tardo barocca.", source: "townhall" },
  { title: "San Rocco, detta Fundrò", where: "Piazza Garibaldi", text: "Una chiesa barocca legata ai monaci benedettini. Il dettaglio da cercare è la meridiana sul portale.", source: "fundro" },
  { title: "San Giovanni e i Teatini", where: "Largo San Giovanni", text: "Affreschi, cantoria dorata e una chiesa trasformata nei secoli: un piccolo nucleo da esplorare con calma, verificando prima l’apertura degli interni.", source: "giovanni", extraSource: "teatini" },
];
