# PRD — Piazza Armerina Experience

## Original problem statement
Voglio realizzare un sito web turistico premium chiamato **Piazza Armerina Experience**, dedicato alla città di Piazza Armerina, in Sicilia, e alla Villa Romana del Casale. Moderno, elegante, emozionante, responsive, multilingua. Stile cinematografico, caldo, raffinato: oro, nero, crema, tramonto siciliano; titoli eleganti, corsivi decorativi, foto grandi e nitide, animazioni leggere.
Homepage: panorama originale dell'utente (Cattedrale, Palazzo Trigona con sette finestre) interamente visibile e nitido, senza ricostruzioni/zoom/ritagli; a destra il mosaico originale della Villa Romana del Casale. Titolo "Piazza Armerina" / "Un'esperienza che ti resta nel cuore". Sotto: navigazione visiva verso Villa Romana del Casale, centro storico, Palio dei Normanni, dove mangiare, dove dormire, natura e itinerari, eventi, prodotti tipici, mappe e navette. Iniziare SOLO dalla homepage per approvazione. Non inventare foto di monumenti/mosaici. Non pubblicare su dominio definitivo senza approvazione.

User choices: lingue IT/EN/DE/FR/ES; schede senza foto (icone, numeri, tipografia); nessun modulo newsletter; nessuna funzionalità extra.

## Architecture
- React frontend only (static homepage), framer-motion + lenis. Assets saved in /app/frontend/public/img (panorama.png 1672x941, mosaico.jpg 660x343).
- i18n in src/i18n.js; components in src/components/site/.

## Implemented (2026-11-01)
- Header with SVG logo (dome mark, also favicon), 5-language switcher (saved in localStorage)
- Hero: masked line reveal title, Pinyon Script tagline, panorama full uncropped (w-full h-auto), mosaic card on right with subtle 3D tilt, parallax roman numeral
- Slow gold editorial marquee, cream intro section, 9-card bento (4x3 grid), footer with "anteprima in attesa di approvazione"

## Update (2026-11-01) — Rebuild from user reference screenshot
- Hero rebuilt as HTML/CSS: panorama full (72vw, natural ratio, no crop) with title/tagline/lead/CTA/video button overlaid on left (xl+); mosaic panel on right (28vw) with cursive words Storia/Arte/Natura/Sapori/Persone and decorative bougainvillea (AI-generated decorative flowers, not monuments)
- Header: logo, 7 nav links, search (toast "in arrivo"), language dropdown with flags, gold hamburger menu panel
- Parchment band with 9 clickable categories (lucide icons); Intro section now parchment
- Fonts: Playfair Display, Crimson Pro, Great Vibes
- Placeholders: "Guarda il video" and search show "disponibile a breve" toast

## Update (2026-11-01) — Pagina Villa Romana del Casale
- Route /villa-romana-del-casale (react-router), linked from homepage band (Villa) and Explore card
- Sections: hero (photo placeholder), Storia + "Lo sapevi che", 7 mosaic cards, percorso (8 steps + official map placeholder), Organizza la visita (PRACTICAL in src/content/villa.js, official links), Dopo la Villa
- Photos: 4 Wikimedia Commons images with attribution (Grande Caccia PD, Bikini CC BY 2.5, Polifemo CC BY-SA 2.0, Piccolo Circo CC BY-SA 4.0) + user's mosaic (scena erotica); Terme, Scene mitologiche, hero panorama = placeholders
- Multilingual: UI labels in 5 langs; long texts IT only (fallback + note banner)

## Backlog
- P0: user approval of homepage design
- P1: build the 9 section pages; replace card placeholders with user's photos
- P2: maps, shuttle timetables, local service links

## Update — 2026-11-04: Centro storico
Pagina/centro-storico con fotoCommons reali,Duomo ePalazzoTrigona come schede principali, passeggiata suggerita e fonti. Link daHome(CategoryBand,Explore) eDopoVilla. TestiIT con notafallback nelle altre lingue, coerente conVilla. Fotografie intere, nessuna ricostruzione; crediti/licenze/date inpagina.

## Prodotti tipici — 05/11/2026
Nuova pagina/prodotti-tipici: cinque specialità, quattro fotografie reali con crediti e lievi filtriCSS, distinzioneEnnese/Sicilia. Collegata daCategoryBand eExplore; linkMappe resta segnaposto. Fonti in docs/prodotti-tipici.md. Nessuna disponibilità o prezzo inventati. TestiIT con nota fallback, CTAhome5lingue. Build produzione riuscita; verifica browser/pubblicazione da completare sul nuovo commit.

## Ampliamento visivo Prodotti — 05/11/2026
Fabio considera la prima versione scarna, approva i collegamenti e chiede pane fotografato/più dolci e formaggi. Aggiunti sei nuovi scatti reali (guastedda, pane neroCastelvetrano, PecorinoSicilianoDOP, cassata, Martorana, granita/brioche) più arancini dalcatalogo esistente: undici fotografie uniche inpagina. PaneDittainoDOP conservato inrichiamo testuale; nessuna immagine generica etichettata DOP. Differenziate originiTrapani/Sicilia/Ennese e conservati linkbotteghe/ristoranti.

## Mappe e navette — 05/11/2026
Creata /mappe-e-navette e collegata da CategoryBand/Explore. Due programmi: prima Villa con sosta SGS e navetta stagionale, oppure prima centro con sosta regolare e passeggiata. Evidenziato rientro prima della chiusura del parcheggio. Quattro luoghi selezionabili con Google Maps caricato solo su richiesta; nessuna geolocalizzazione. Componenti ShuttleTimes/ParkingPrices/DirectionsInfo riutilizzati senza duplicare dati. Bus urbani Savit A/B distinti dalla navetta SA.DA.; fonti ufficiali in pagina. Locandina archivio2025 senza anno di validità: conferma al gestore richiesta, controllo data solo sul periodo1aprile–30ottobre, mai disponibilità in tempo reale. Foto reale Ludvig14 già licenziata, lievi filtri locali. Build riuscita; browser iframe320/390/768/1280 senza overflow, date1aprile/30ottobre/31ottobre e vuota corrette,12corse visibili, due foto caricate, mappaGoogle resa osservata. Pubblicazione anteprima da verificare sul commit finale; main invariato.

## Servizi utili — 05/11/2026
Fabio chiede farmacie/turni, benzinai, supermercati e altri servizi fondamentali. Creata /servizi-utili con10categorie filtrabili,6farmacie da elenco OrdineEnna e4supermercati da siti insegne. Aggiunti guardia medica/Chiello,112,ACI803116,bancomat,ricariche,bagni,veterinari,lavanderie e rinvioMappeNavette. Fonti collegate, calendariofarmacie2026 PDFufficiale e paginaOrdine peraggiornamenti; nessuna falsa apertura live né promessaturniautomatici. Benzinai/ATM/ricariche/veterinari/lavanderie sono ricercheGoogleMaps esplicite,non elenchi verificati. Bagni nessun punto/costo/orario inventato. Link dahome,headerInfoUtili desktop/menu eMappeNavette. Build riuscita;browserfiltri10→3→4→3→10,6farmacie e telefoni corretti;iframe320/390/768/1280 senzaoverflow. Nessunacalltelefonica eseguita. Pubblicazione da verificare;main invariato.

## Link riconoscibile e condivisione — 05/11/2026
Fabio richiede un URL leggibile/riconoscibile da inoltrare suWhatsApp. Preparato aliasanteprima visita.piazza-armerina-experience.pages.dev mediante branchvisita, specchio delbranchlavoro. Non cambiare main. Dopo futurepubblicazioni validate sulbranch armerina-experience-20261101, allinearevisita mediantefast-forward e controllareCloudflare: i duebranch non si sincronizzano da soli. Non dichiarareaggiornamentoautomatico. MetadataOpenGraph/Twitter staticiinHTML, fotoesistenteLudvig14CCBYSA4 1280x853, titolo/descrizioneprogetto,og:urlaliasvisita. Footer5lingueCopiaLink ecomposizioneWhatsAppsenzaautosend; statuscopiato/fallback. Nessundominioacquistato. Pubblicazione eprovaalias da verificare sulcommitfinale. RenderingeffettivodellaschedainWhatsAppnonconfermato.


## Stato corrente consolidato — 05/11/2026
Fabio chiarisce: dovevamo solo ottimizzare. Riferimento corrente audit/stato-ripartenza.md, da leggere prima delle vecchie note. Rami remoti visita e armerina-experience-20261101 riletti e allineati a b496d51; check Cloudflare success; home visita aperta. Le vecchie note «pubblicazione da verificare» sono storiche quando superate dall’audit. Piano istituzionale non implementato; ottimizzazioni ancora da eseguire. Nessun frontend modificato, nessun push/pubblicazione in questa ripresa. Priorità: ottimizzazione limitata del sito approvato, preservando foto/stile; pubblicazione resta soggetta ad approvazione.


## Ottimizzazione tecnica — 6 novembre 2026
Fabio autorizza a proseguire con il pacchetto limitato di ottimizzazione. Implementato sul ramo locale ottimizzazione-20261106: ricerca delle dieci sezioni con parole chiave (non ricerca integrale delle singole attività), dialog Radix con focus/tastiera, etichetta Villa corretta, alt foto principale Villa, mappa con nome accessibile/focus/confinamento/ritorno focus, stato espanso e chiusura Escape/esterno del menu, focus visibile e testo scuro sui pulsanti oro. Pagine secondarie caricate con React.lazy/Suspense. Framer Motion rispetta reducedMotion=user e Lenis non avviato se riduzione movimento già attiva all'apertura (non certificazione globale delle animazioni). Foto e dati turistici non modificati.

Verifiche nuove: build produzione riuscita; 13 test esistenti in due suite passati. JavaScript principale gzip 188,66 kB rispetto a 245,91 kB dell'audit (-23,28%); CSS principale 16,26 kB rispetto a 26,41 kB: risorse restanti scaricate quando si apre la relativa pagina, non eliminate. Nessuna misura Lighthouse o velocità reale dichiarata. Browser: ricerca parcheggio/farmacie/nessun risultato, focus iniziale/ritorno con Escape; menu aria-expanded true/false con Escape; mappa nome e focus interno, zoom 200%, Escape e ritorno al pulsante. Undici pagine a larghezza iframe390 più home320/768/1280: 14 viste con h1 presente e zero overflow orizzontale. Prove a dimensioni browser, non dispositivi fisici. Video: dialog e player YouTube con titolo «Piazza Armerina dall’alto» e pulsante Play caricati; riproduzione completa e sottotitoli non testati.

Durante QA il server statico locale non gestiva il fallback SPA (Cannot GET sul percorso); aggiunte copie index nelle cartelle del solo wrapper temporaneo di anteprima. Nessuna modifica del routing Cloudflare richiesta. Sorgenti e memoria salvati in commit locale; niente push, nessuna pubblicazione, alias visita e main invariati. Prima di pubblicare occorre via libera di Fabio e lettura dei rami remoti, poi check Cloudflare e collaudo pubblico. Restano ottimizzazione immagini, SEO per pagina, traduzioni e questioni editoriali/privacy/diritti dell'audit.
