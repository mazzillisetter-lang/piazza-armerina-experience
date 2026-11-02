// Contenuti della pagina Villa Romana del Casale. Le informazioni pratiche sono in PRACTICAL: aggiornarle qui.
export const OFFICIAL = {
  park: { label: "Sito ufficiale della Villa Romana del Casale", url: "https://www.villaromanadelcasale.it/" },
  comune: { label: "Comune di Piazza Armerina", url: "https://www.comune.piazzaarmerina.en.it/" },
  unesco: { label: "Scheda UNESCO (World Heritage List)", url: "https://whc.unesco.org/en/list/832" },
  maps: { label: "Apri in Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Villa+Romana+del+Casale+Piazza+Armerina" },
};

export const UI = {
  it: { nav: ["Storia", "Mosaici", "Percorso", "Visita", "Dopo la Villa"], home: "Home", back: "Torna alla homepage", didYouKnow: "Lo sapevi che…?", photoSoon: "Fotografia da inserire", where: "Dove", source: "Fonte", verify: "Da verificare sul sito ufficiale", updated: "Ultimo aggiornamento", mapSlot: "Mappa ufficiale del Parco", mapSlotText: "Spazio riservato alla planimetria ufficiale del Parco Archeologico. Non pubblichiamo mappe non verificate.", routeNote: "Sequenza indicativa: sul posto il percorso segue le passerelle e può variare.", translating: "" },
  en: { nav: ["History", "Mosaics", "Route", "Plan your visit", "After the Villa"], home: "Home", back: "Back to homepage", didYouKnow: "Did you know…?", photoSoon: "Photo coming soon", where: "Where", source: "Source", verify: "Check on the official website", updated: "Last update", mapSlot: "Official Park map", mapSlotText: "Reserved for the official plan of the Archaeological Park. We do not publish unverified maps.", routeNote: "Indicative sequence: on site the route follows the walkways and may vary.", translating: "Full English text coming soon — content shown in Italian." },
  de: { nav: ["Geschichte", "Mosaike", "Rundgang", "Besuch planen", "Nach der Villa"], home: "Start", back: "Zur Startseite", didYouKnow: "Wussten Sie…?", photoSoon: "Foto folgt", where: "Wo", source: "Quelle", verify: "Auf der offiziellen Website prüfen", updated: "Letzte Aktualisierung", mapSlot: "Offizieller Parkplan", mapSlotText: "Platz für den offiziellen Plan des Archäologischen Parks.", routeNote: "Richtwert: Vor Ort folgt der Rundgang den Stegen und kann abweichen.", translating: "Deutsche Übersetzung folgt — Inhalte auf Italienisch." },
  fr: { nav: ["Histoire", "Mosaïques", "Parcours", "Préparer la visite", "Après la Villa"], home: "Accueil", back: "Retour à l'accueil", didYouKnow: "Le saviez-vous… ?", photoSoon: "Photo à venir", where: "Où", source: "Source", verify: "À vérifier sur le site officiel", updated: "Dernière mise à jour", mapSlot: "Plan officiel du Parc", mapSlotText: "Espace réservé au plan officiel du Parc archéologique.", routeNote: "Séquence indicative : sur place, le parcours suit les passerelles et peut varier.", translating: "Traduction française à venir — contenu affiché en italien." },
  es: { nav: ["Historia", "Mosaicos", "Recorrido", "Organiza la visita", "Después de la Villa"], home: "Inicio", back: "Volver al inicio", didYouKnow: "¿Sabías que…?", photoSoon: "Fotografía próximamente", where: "Dónde", source: "Fuente", verify: "Verificar en la web oficial", updated: "Última actualización", mapSlot: "Mapa oficial del Parque", mapSlotText: "Espacio reservado al plano oficial del Parque Arqueológico.", routeNote: "Secuencia indicativa: in situ el recorrido sigue las pasarelas y puede variar.", translating: "Traducción al español próximamente — contenido en italiano." },
};

const MAP = {
  it: { title: "Esplora gli ambienti della Villa", intro: "Una vista d'insieme della Villa per orientarti tra terme, peristilio, Corridoio della Grande Caccia, basilica e appartamenti. Tocca la mappa per ingrandirla.", note: "Ricostruzione illustrativa a scopo divulgativo: non è una planimetria archeologica ufficiale. Per la planimetria ufficiale fai riferimento al Parco Archeologico.", open: "Ingrandisci la mappa", newTab: "Apri l'immagine in una nuova scheda", zoomIn: "Ingrandisci", zoomOut: "Riduci", close: "Chiudi", alt: "Mappa illustrata della Villa Romana del Casale con gli ambienti numerati" },
  en: { title: "Explore the rooms of the Villa", intro: "An overview of the Villa to find your way between baths, peristyle, Great Hunt corridor, basilica and apartments. Tap the map to enlarge it.", note: "Illustrative reconstruction for general information: this is not an official archaeological plan. For the official plan refer to the Archaeological Park.", open: "Enlarge map", newTab: "Open image in a new tab", zoomIn: "Zoom in", zoomOut: "Zoom out", close: "Close", alt: "Illustrated map of Villa Romana del Casale with numbered rooms" },
  de: { title: "Die Räume der Villa entdecken", intro: "Ein Überblick über die Villa: Thermen, Peristyl, Korridor der Großen Jagd, Basilika und Wohnräume. Tippen Sie auf die Karte, um sie zu vergrößern.", note: "Illustrative Rekonstruktion zu Informationszwecken: kein offizieller archäologischer Plan. Den offiziellen Plan finden Sie beim Archäologischen Park.", open: "Karte vergrößern", newTab: "Bild in neuem Tab öffnen", zoomIn: "Vergrößern", zoomOut: "Verkleinern", close: "Schließen", alt: "Illustrierte Karte der Villa Romana del Casale mit nummerierten Räumen" },
  fr: { title: "Explorez les salles de la Villa", intro: "Une vue d'ensemble de la Villa pour vous repérer entre thermes, péristyle, couloir de la Grande Chasse, basilique et appartements. Touchez la carte pour l'agrandir.", note: "Reconstitution illustrative à but informatif : ce n'est pas un plan archéologique officiel. Pour le plan officiel, consultez le Parc archéologique.", open: "Agrandir la carte", newTab: "Ouvrir l'image dans un nouvel onglet", zoomIn: "Agrandir", zoomOut: "Réduire", close: "Fermer", alt: "Carte illustrée de la Villa Romana del Casale avec les salles numérotées" },
  es: { title: "Explora los ambientes de la Villa", intro: "Una vista general de la Villa para orientarte entre termas, peristilo, corredor de la Gran Caza, basílica y apartamentos. Toca el mapa para ampliarlo.", note: "Reconstrucción ilustrativa con fines divulgativos: no es un plano arqueológico oficial. Para el plano oficial consulta el Parque Arqueológico.", open: "Ampliar el mapa", newTab: "Abrir la imagen en una nueva pestaña", zoomIn: "Ampliar", zoomOut: "Reducir", close: "Cerrar", alt: "Mapa ilustrado de la Villa Romana del Casale con los ambientes numerados" },
};
Object.keys(UI).forEach((k) => { UI[k].map = MAP[k]; });

const it = {
  heroKicker: "Patrimonio dell'Umanità UNESCO · Piazza Armerina",
  heroTitle: "Villa Romana del Casale",
  heroTagline: "Un viaggio nel cuore dell'antica Roma",
  heroLead: "Una residenza tardo-antica che custodisce uno dei più straordinari tappeti di mosaici del mondo romano, a pochi chilometri dal centro di Piazza Armerina.",
  heroPhoto: "Fotografia panoramica della Villa",
  historyKicker: "Scopri la storia",
  historyTitle: "Sedici secoli tra splendore e silenzio",
  history: [
    { title: "Una dimora del IV secolo", text: "La villa fu costruita nella prima metà del IV secolo d.C., sui resti di una villa rustica più antica. Ingresso monumentale, terme, un grande peristilio, sale di rappresentanza e appartamenti privati: tutto era pensato per stupire gli ospiti." },
    { title: "Residenza e latifondo", text: "Non era soltanto una casa di lusso. La villa era il cuore di un vasto latifondo agricolo: qui il proprietario riceveva, amministrava le sue terre e celebrava il proprio prestigio attraverso l'arte dei mosaici." },
    { title: "Un proprietario misterioso", text: "Chi abitava la villa? Nessuna iscrizione lo dice con certezza. Gli studiosi hanno pensato a un imperatore, come Massimiano, oppure a un esponente di altissimo rango dell'aristocrazia senatoria romana. Il mistero resta aperto." },
    { title: "Sepolta e ritrovata", text: "Abitata ancora nel Medioevo, la villa fu poi coperta da una frana di fango che ne protesse i pavimenti. Dopo i primi ritrovamenti dell'Ottocento, gli scavi scientifici iniziarono nel Novecento, con Paolo Orsi e poi Gino Vinicio Gentili, che negli anni Cinquanta riportò alla luce gran parte dei mosaici." },
  ],
  facts: [
    "I mosaici della villa coprono una superficie di circa 3.500 metri quadrati.",
    "Dal 1997 la Villa Romana del Casale è iscritta nella Lista del Patrimonio Mondiale UNESCO.",
    "Il mosaico delle «ragazze in bikini» fu realizzato sopra un pavimento geometrico più antico, di cui si vede ancora una parte.",
  ],
  mosaicsKicker: "Esplora i mosaici",
  mosaicsTitle: "Storie di pietra e colore",
  mosaicsLead: "Le scene più celebri della villa, raccontate in modo semplice. Ogni scheda indica l'ambiente in cui si trova il mosaico.",
  mosaics: [
    { key: "grande-caccia", title: "Corridoio della Grande Caccia", where: "Ambulacro della Grande Caccia", text: "Un corridoio lungo oltre sessanta metri racconta la cattura e il trasporto di animali esotici — leoni, tigri, elefanti, antilopi — destinati agli spettacoli di Roma. Alle estremità compaiono le personificazioni di terre lontane.", photo: { src: "/img/villa/grande-caccia.jpg", credit: "Foto storica, pubblico dominio", page: "https://commons.wikimedia.org/wiki/File:Mosaico_della_grande_caccia_01.jpg" } },
    { key: "ragazze", title: "Le Ragazze in Bikini", where: "Sala delle Dieci Ragazze", text: "Dieci giovani donne in abiti sportivi si allenano: lancio del disco, corsa, gioco della palla, pesi. Una premia la vincitrice con una corona e un ramo di palma. È il mosaico più famoso della villa.", photo: { src: "https://raw.githubusercontent.com/mazzillisetter-lang/piazza-armerina-experience/armerina-experience-20261101/Mosaico%20romano%20delle%20danzatrici%20classiche.png", credit: "Fotografia caricata per Piazza Armerina Experience · autore e licenza da verificare", page: null } },
    { key: "polifemo", title: "Ulisse e Polifemo", where: "Vestibolo di Polifemo", text: "Ulisse offre una coppa di vino al ciclope Polifemo, raffigurato qui con tre occhi, seduto davanti alla sua grotta. L'episodio dell'Odissea diventa una scena viva, piena di tensione.", photo: { src: "/img/villa/polifemo.jpg", credit: "Rino Porrovecchio, CC BY-SA 2.0, via Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Villa_romana_del_Casale_-_Mosaici_del_Vestibolo_di_Polifemo_(7831474200).jpg" } },
    { key: "piccolo-circo", title: "Il Piccolo Circo", where: "Vestibolo del Piccolo Circo", text: "Bambini alla guida di piccoli carri trainati da uccelli gareggiano attorno alla spina del circo: una divertente versione in miniatura delle grandi corse del Circo Massimo.", photo: { src: "/img/villa/piccolo-circo.jpg", credit: "Codex, CC BY-SA 4.0, via Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Piccolo_Circo.jpg" } },
    { key: "terme", title: "I mosaici delle terme", where: "Complesso termale", text: "Nelle terme il lusso diventava benessere. Nella palestra un grande mosaico mostra una corsa di quadrighe nel Circo Massimo; altri ambienti raccontano scene marine e momenti della cura del corpo.", photo: { src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Villa%20Del%20Casale%20Frigidarium.jpg?width=1200", credit: "Frigidarium · Urban, CC BY-SA 3.0 · Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Villa_Del_Casale_Frigidarium.jpg" }, photos: [{ src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Villa%20Romana%20del%20Casale-Palestre-Circus%20maximus%2C%20course%20de%20quadriges.jpg?width=960", credit: "Mosaico delle quadrighe · Colsu, CC BY-SA 4.0 · Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Villa_Romana_del_Casale-Palestre-Circus_maximus,_course_de_quadriges.jpg" }] },
    { key: "terme-palestra", title: "La palestra delle terme", where: "Palestra del complesso termale", text: "Il grande mosaico raffigura una corsa di quadrighe nel Circo Massimo: una delle decorazioni più spettacolari del complesso termale.", photo: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mosaic_of_Chariot_Race.jpg?width=1200", credit: "Colsu, CC BY-SA 4.0 · Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Villa_Romana_del_Casale-Palestre-Circus_maximus,_course_de_quadriges.jpg" } },
    { key: "triclinio", title: "Il Triclinio e le Fatiche di Ercole", where: "Grande Triclinio", text: "Nel grande triclinio, destinato ai banchetti e ai ricevimenti, i mosaici narrano le Fatiche di Ercole e altre scene della mitologia classica.", photo: null },
    { key: "arione", title: "La Sala di Arione", where: "Appartamenti della Villa", text: "Il mosaico racconta il mito di Arione, il musicista salvato da un delfino, in un ambiente ricco di figure marine.", photo: null },
    { key: "erotica", title: "La scena erotica", where: "Cubicolo della scena erotica", text: "Al centro di un medaglione incorniciato da una ghirlanda di foglie, una coppia si abbraccia. Un'immagine intima e delicata, rara nella decorazione della villa.", photo: { src: "/img/mosaico.jpg", credit: "Fotografia originale fornita da Piazza Armerina Experience", page: null } },
  ],
  routeKicker: "Percorso di visita",
  routeTitle: "Dall'ingresso agli appartamenti",
  route: [
    { title: "Ingresso monumentale", text: "L'arco d'ingresso e l'atrio introducono alla villa e alla sua scenografia." },
    { title: "Le terme", text: "Palestra, frigidarium e ambienti riscaldati: il complesso del benessere." },
    { title: "Il peristilio", text: "Il grande cortile porticato con giardino e fontana, cuore della residenza." },
    { title: "Corridoio della Grande Caccia", text: "Il lungo ambulacro con le scene di cattura degli animali esotici." },
    { title: "La basilica", text: "La sala di rappresentanza dove il proprietario riceveva gli ospiti." },
    { title: "Gli appartamenti privati", text: "Vestiboli e stanze con Ulisse e Polifemo, il Piccolo Circo e altre scene." },
    { title: "Sala delle Dieci Ragazze", text: "Le celebri atlete in «bikini»." },
    { title: "Il triclinio", text: "La grande sala da pranzo con le Fatiche di Ercole." },
  ],
  planKicker: "Organizza la visita",
  planTitle: "Informazioni pratiche",
  planLead: "Orari, tariffe e servizi possono cambiare. Verifica sempre sulle fonti ufficiali prima di partire.",
  afterKicker: "Dopo la Villa",
  afterTitle: "La giornata continua in città",
  afterText: "Sali verso la Cattedrale, passeggia tra i quartieri storici e lasciati guidare dai sapori dell'entroterra siciliano.",
  afterCta: "Scopri il centro storico",
  afterCta2: "Tutte le esperienze",
};

// Testi pratici: modificare qui quando arrivano dati ufficiali. Nessuna tariffa o orario inventato.
export const PRACTICAL = [
  { key: "orari", icon: "Clock", title: "Orari", text: "Gli orari di apertura variano durante l'anno.", link: "park", updated: "[da aggiornare]" },
  { key: "biglietti", icon: "Ticket", title: "Biglietti", text: "Tariffe, riduzioni ed eventuali biglietti cumulativi sono pubblicati dal Parco.", link: "park", updated: "[da aggiornare]" },
  { key: "parcheggio", icon: "SquareParking", title: "Parcheggio", text: "Informazioni su aree di sosta e relative tariffe in attesa di conferma da fonte ufficiale.", link: "comune", updated: "[da aggiornare]" },
  { key: "navetta", icon: "Bus", title: "Navetta", text: "Fermate e orari dei collegamenti tra il centro storico e la Villa saranno pubblicati appena disponibili da fonte ufficiale.", link: "comune", updated: "[da aggiornare]" },
  { key: "accessibilita", icon: "Accessibility", title: "Accessibilità", text: "La visita si svolge su passerelle sopraelevate. Per informazioni sull'accessibilità consulta il sito ufficiale.", link: "park", updated: "[da aggiornare]" },
  { key: "arrivare", icon: "Navigation", title: "Come arrivare", text: "La Villa si trova in contrada Casale, a circa 5 km dal centro di Piazza Armerina.", link: "maps", updated: "[da aggiornare]" },
];

export const VILLA = { it };
export const villaContent = (lang) => VILLA[lang] || VILLA.it;
