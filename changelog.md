# Cronologia operativa
## 2026-11-03
- Letto il PRD esistente nel branch di lavoro.
- Verificata esistenza del repository, dei branch e del check Cloudflare relativo al commit 399ea78.
- Recuperati link di anteprima dal risultato Cloudflare: deploy riuscito il 2 novembre.
- Inizializzata memoria operativa versionata con memory.md, handoff.md, lessons.md e changelog.md.
- Nessuna modifica grafica in questa fase. Agenti e verifica visiva ancora da collaudare.

## Ripristino pubblicazione e primo coordinatore
- Rimosso il calendario inutilizzato e le due dipendenze che bloccavano npm; installazione e build locali riuscite.
- Cloudflare ha pubblicato 890e3da con successo; verificata risposta HTTP 200, Fabio conferma apertura della pagina.
- Aggiunti AGENTS.md e agents/coordinator.md: memoria iniziale, selezione strumenti, contratti di delega, controlli e chiusura della sessione.
- Aggiornato handoff allo stato verificato; quattro specialisti non ancora configurati. Nessuna variazione grafica in questa fase.

## Foto Ulisse e Polifemo
- Sostituita in anteprima la foto arancione Rino Porrovecchio con fotografia reale TyB CC BY 2.0; vecchio asset mantenuto.
- Nuovo asset locale inalterato, correzione CSS reversibile luminosità +2,5%, contrasto +3,5%, circoscritta alla singola foto.
- Credito, fonte, licenza e regolazione dichiarati. Configurato agents/images.md; controllo indipendente del candidato e build locale riusciti.
- Check Cloudflare 9d0f5cb riuscito; verificati nel browser foto caricata, dimensioni 1280x960, filtro isolato e resa desktop. Nessuna verifica mobile dichiarata.

## Orari stagionali automatici
- Fabio approva foto Polifemo.
- Configurati ruoli sviluppo, pubblicazione e qualità; primo incarico sviluppo/QA sugli orari.
- Sostituito placeholder card Orari con stagione corrente, apertura, ultimo ingresso, chiusura, prossimo cambio e dettagli delle due stagioni.
- Fonte orari del Parco e revisione statica03/11/2026; altre schede e foto preservate.
- 7 test logici passati, controllo indipendente favorevole.
- Build produzione compilata con successo.
- Deploy98fd4e0 riuscito; controllo browser desktop: orario invernale09/16/17 e cambio28marzo2027 corretti, fonte collegata e data statica. Revisione pubblicazione indipendente:13file attesi, main invariato, asset Polifemo conservati.

## Biglietti da fonti ufficiali
- Sostituito placeholder con ordinari14/7,minori18gratis, requisiti e fonti.
- Aggiunti dettagli supplemento mostra e cumulativi da tariffario2025 con data/condizioni trasparenti.
- Orari automatici, foto Polifemo e altre schede invariati.
- Build produzione riuscita e revisione indipendente contenuti favorevole.
- Cloudflare c44ca3f success; browser desktop verificati card, dettagli espandibili e link fonti, screenshot acquisito.

## Parcheggio SGS
- Scheda subito dopo Biglietti: tariffe auto/moto/camper visibili; orari, minibus/bus e regola camper nei dettagli. Fonte cartelli forniti da Fabio, data03/11/2026. Nessuna pubblicazione delle schermate WhatsApp personali.

Verifica03/11/2026: build produzione riuscita; revisione indipendente sui due cartelli favorevole. Commit applicativo1eb8fee688ec01e152b9f8a1059323bed627fdd5, check Cloudflare completed/success. Browser desktop: scheda compatta leggibile, dettaglio aperto/chiuso e tutti i valori verificati. Anteprima https://d2ea8057.piazza-armerina-experience.pages.dev/villa-romana-del-casale#visita . Mobile non verificato.

## Navetta stagionale
- Recuperato prospetto primario sul sito Villa; evitata locandina generata con sesta andata mancante.
- Scheda con periodo, fermate, tariffe, tabelle complete espandibili, chiamata e prenotazione; altre schede invariate.

Verifica03/11/2026: build produzione riuscita, revisione indipendente delPDF favorevole. Commit7b318b99b617c7dbeca21b3c51d4d513f2d699fd Cloudflare completed/success. Browser desktop: periodo/prezzi, 12corse nelle due tabelle, espansione/chiusura, tel ePDF verificati; screenshot compatto e tabelle. URL https://112c01f2.piazza-armerina-experience.pages.dev/villa-romana-del-casale#visita . Mobile non verificato.

## Accessibilità
- Aggiunti contatti diretti URP, indicazioni per concordare percorso e servizi, requisiti gratuità in dettaglio.
- Distinta Carta servizi storica da disponibilità effettiva da confermare. Altre schede preservate.

Verifica completata03/11/2026: build produzione riuscita; commit92ad9d66af9488719f4ffe875dd298ecbcb80f0d Cloudflare completed/success. Browser desktop verificati testi, linkURP/tel/mailto/fonti e dettaglio gratuito aperto/chiuso da tastiera. Screenshot acquisito. URL https://8ebcd9fb.piazza-armerina-experience.pages.dev/villa-romana-del-casale#visita . Mobile non verificato. Revisione indipendente non completata: specialista fermato da limite utilizzo; controllo contenuti svolto dal coordinatore sulle fonti ufficiali già consultate. Prossimo contenuto: Come arrivare, con attenzione al navigatoreSP90 e ingresso corretto dalle barriere, solo con istruzioni pertinenti.

## Come arrivare
- Sostituito placeholder con percorsoSP90 verso barriereSGS, avviso ramo sinistrovietato, fotografie reali utente recuperate.
- LinkMaps mirato a ricerca parcheggio senza coordinate inventate.

Verifica03/11/2026: build produzione riuscita, commit86eb1025a87123ace456931769bd1d4cd5463007 Cloudflare completed/success. Browser desktop controllati istruzioni, avviso, immagini caricate1445x924 e691x1536, dettaglio cartello aperto/chiuso e link immagine originale. BlobGit delle due immagini identici agli originali. URL https://e71cb1cf.piazza-armerina-experience.pages.dev/villa-romana-del-casale#visita . Screenshot percorso/foto acquisito. Mobile e instradamento effettivoGoogle non verificati; Maps è ricerca esplicitamente accompagnata dall’avviso bivio. Revisione svolta dal coordinatore; nessuna nuova esecuzione specialisti in questo incarico.

## Video nella home
- Sostituito avviso disponibileabreve conplayerYouTube sgfgMC4Y-Wc in dialog.
- Chiusuraaccessibile, proporzioni16:9, fallbackYouTube e traduzioni5lingue.

Stato03/11/2026: commitvideo956c94c50350cd985e7e2c6b208848ad4c2e4eb4 + correzionedurata9a0b53b68955f68bdbb6a625cafe6e4e91c50c0a salvati sulbranch. Buildlocale definitiva riuscita. Anteprima managed http://terminal.local:4173/ da buildin /workspace/scratch/home-video-preview/dist: dialogaperto, iframeIDsgfgMC4Y-Wc corretto, titoloYouTubePiazzaArmerinadall’alto, durata123sec osservata; sottotitoloDue minuti. ChiusuraX/Escape rimuoveiframe; ritorno focus verificato dopoX. Playercarica metadata ecomandi, ma streamrimane0:00 readyState0 nelbrowsercloud: riproduzione effettiva NON confermata. Viewportdesktop verificata; mobile noncollaudato. Cloudflare dei duecommit resta in_progress senza errore dopo attesa prolungata; aliasbranch servivaancora vecchiopulsante. NON dichiarare pubblicato. Prossimopasso: leggere check-runs9a0b53b finoesitoterminale, verificarehomepubblicata e video. Screenshot locale /workspace/scratch/home-video-anteprima.jpg. Nessuna nuovaesecuzione specialisti.

## Home smartphone, tablet e PC
- Conservati panorama, mosaico, parole decorative e fiori con proporzioni dedicate ai piccoli schermi.
- Migliorata leggibilità tablet e corretto menu a 320 px.
- Build produzione e controllo dimensioni nel browser riusciti; prove su hardware reale non effettuate. Pubblicazione Cloudflare da verificare sul commit.

## Pulsanti a piede foto
- Abbassati insieme CTA e video nella composizione della home da768px, con distanza dal fondo adattiva; smartphone invariato.
- Build produzione e verifica browser928/1280/390px riuscite.
- Verificata pubblicazione precedente8447467 e apertura player nella home pubblica; riproduzione stream non confermata nel browser remoto.

## Proporzioni testo home PC
- Ingranditi titolo, corsivo e descrizione nella sola versione da1024px; ampliata la colonna sinistra.
- Posizione approvata dei pulsanti preservata. Build produzione e controllo browser1280px riusciti.

## Panorama completo su smartphone
- Foto mobile nel rapporto originale1672:941, senza ritaglio verticale; testo sopra e mosaico ridotto sotto il panorama.
- Parole decorative e pulsanti disposti nella fascia inferiore; pulsante più compatto sotto360px.
- Regole tablet e PC preservate.

## Fascia menu telefono orizzontale
- Header trasparente senza sfocatura durante lo scroll su viewport orizzontali fino1023x600px.
- Build e verifica browser915x412 riuscite; pannello menu funzionante con sette collegamenti.

## Come arrivare — fotografia aggiornata
- Unica foto originaleSGS del4novembre2026 al posto di StreetView e foto verticale.
- Didascalia con direzione corretta e divieto; data scheda04/11/2026, ingrandimento disponibile.

## Centro storico
- Nuova pagina conDuomo ePalazzoTrigona, tre fotografie reali con attribuzione, descrizioni brevi e dettagli da cercare.
- Passeggiata suggerita con quattro tappe; approfondimentiFundrò,PalazzoCittà,SanGiovanni eTeatini e fonti collegate.
- Collegamenti attivi da home eDopoVilla; collaudo browser320–1280px e build riusciti.

## Panoramica Centro storico — 04/11/2026
Sostituita sola foto introduttiva con veduta notturna fornita daFabio; proporzioni1050x749, ingrandimento e filigrana conservati. Credito separato dalle fotoCommons.

## Luce e colore panoramica Centro storico
Valorizzazione lieve e reversibile della sola panoramica notturna: luminosità+8%, contrasto+10%, saturazione+12% tramiteCSS. Nessuna ricostruzione fotografica.

## Nuova scelta panoramica Centro storico
Sostituita veduta notturna con fotografia al tramonto fornita daFabio,400x320. Tono valorizzato senza ricostruzioni:luminosità1.02 contrasto1.04 saturazione0.94.

## Panoramica finale Centro storico
Scelto filePiazza-Armerina-2.webp1217x694 al posto del precedente400x320; inquadratura intera e trattamento cromatico leggero preservati.


## Palio stagione2027
Nuova pagina/ palio-dei-normanni con2scene,4quartieri,sequenzatradizionale3giorni econtattiufficiali. Collegata daHome,WebPleggeri ecredititrasparenti.


## Aggiornamento automatico Palio — 04/11/2026
Fabio autorizza aggiornamento pagina dai comunicati ufficiali delComune. Implementato feedJSON2027 con stato/date/notizie/fonti/data verifica, frontend legge alcaricamento eogni5min convalidazione eultimo dataset valido. Controllo fonti giornaliero previsto: nonpush istantaneo. Schema/procedura in docs/palio-auto-updates.md; stato iniziale pending senza dati inventati. Attivazione automazione e verifica deploy da completare.


## Dove mangiare — 04/11/2026
Fabio richiede ricerca ampia dei locali di Piazza Armerina, layout funzionale recuperando il precedente, foto curate e contatti. Implementata pagina/dove-mangiare con43schede, filtri per tipo/zona, ricerca su tutto ilcatalogo e caricamento progressivo.11telefoni da pagine delleattività,1WhatsAppSUD esplicito; altrimenti GoogleMapsfoto/contatti. FotografiegastronomicheCommons conlicenze documentate, dichiarate illustrative e valorizzateCSS; nessunafotoinventatadeilocali. Fonti/limiti in docs/dove-mangiare.md e food-research.json. Build/pubblicazione/collaudo da verificare sulcommitfinale.


## Dove dormire — 04/11/2026
Fabio chiede di proseguire con ricerca e sezione Dove dormire. Raccolte 41 strutture con fonti: hotel, B&B, camere/dimore, case/appartamenti e strutture rurali. Ventotto telefoni da pagine delle attività, quattro WhatsApp espliciti, quattordici link a disponibilità/richiesta/prenotazione senza prezzi o disponibilità inventati. Ricerca, filtri tipo/zona, caricamento progressivo e collegamenti da home/menu. Foto reale notturna Stefano Li Moli CC BY-SA 3.0, intera, ritocco CSS lieve; non foto delle camere. Fonti e limiti in docs/dove-dormire.md e stay-research.json. Build e pubblicazione da verificare sul commit finale.


## Natura e itinerari — 04/11/2026
Fabio richiede paesaggi, sentieri e itinerari degli Erei con fotografie curate. Implementata /natura-e-itinerari con quattro foto reali Commons CC BY-SA 4.0, filtri tra tre paesaggi (Rossomanno/Pietre/Ronza, Altesina, Pergusa), tre proposte (San Giacomo, ippovia, Floristella), fonti e contatti documentati. Collegamenti da home e menu Itinerari. Foto intere con lievi filtri CSS e crediti; nessuna ricostruzione. Dati operativi non verificati non promessi, foto Pergusa datata 2019. Build riuscita, browser locale quattro foto caricate, filtri 3→1→3, iframe 320/390/768/1280 senza overflow. Pubblicazione da verificare sul commit finale. Dettagli in docs/natura-e-itinerari.md e nature-research.json.


## Agenda eventi ufficiali — 04/11/2026
Fabio autorizza sezione Eventi con aggiornamento quotidiano da fonti ufficiali. Implementata /eventi con filtri temporali/categoria/ricerca, stati confermato/parziale/rinviato/annullato e archivio automatico Europe/Rome. Fonti comunali lette: calendario HBL38 vuoto, notizie, Vivere il Comune e ordinanze; nessun futuro appuntamento ufficiale confermato individuato. Non importati Summer Fest 2026 concluso, Barock 2025 o Barock Off 2026 solo nella stampa. Nessun RSS/ICS/API esposto individuato. JSON pubblico frontend/public/data/events.json, validazione, cache ultima copia valida e rilettura al caricamento/5min/focus; codice/layout non richiedono nuova pubblicazione a ogni novità. Procedura in docs/events-auto-updates.md, ricerca in docs/events-research.json. Foto Piazza Garibaldi reale già licenziata, nessuna fotografia inventata di eventi. Test logici date/DST/archivio/stati/schema riusciti; browser QA con fixture private escluse dal repo e iframe320/390/768/1280 senza overflow. Revisione indipendente con due correzioni applicate: ora finale isolata visibile, stato vuoto non assoluto. Build, pubblicazione e creazione automazione da verificare sul commit finale.

## Prodotti tipici — 05/11/2026
Nuova pagina/prodotti-tipici: cinque specialità, quattro fotografie reali con crediti e lievi filtriCSS, distinzioneEnnese/Sicilia. Collegata daCategoryBand eExplore; linkMappe resta segnaposto. Fonti in docs/prodotti-tipici.md. Nessuna disponibilità o prezzo inventati. TestiIT con nota fallback, CTAhome5lingue. Build produzione riuscita; verifica browser/pubblicazione da completare sul nuovo commit.

## Ampliamento visivo Prodotti — 05/11/2026
Fabio considera la prima versione scarna, approva i collegamenti e chiede pane fotografato/più dolci e formaggi. Aggiunti sei nuovi scatti reali (guastedda, pane neroCastelvetrano, PecorinoSicilianoDOP, cassata, Martorana, granita/brioche) più arancini dalcatalogo esistente: undici fotografie uniche inpagina. PaneDittainoDOP conservato inrichiamo testuale; nessuna immagine generica etichettata DOP. Differenziate originiTrapani/Sicilia/Ennese e conservati linkbotteghe/ristoranti.

## Mappe e navette — 05/11/2026
Creata /mappe-e-navette e collegata da CategoryBand/Explore. Due programmi: prima Villa con sosta SGS e navetta stagionale, oppure prima centro con sosta regolare e passeggiata. Evidenziato rientro prima della chiusura del parcheggio. Quattro luoghi selezionabili con Google Maps caricato solo su richiesta; nessuna geolocalizzazione. Componenti ShuttleTimes/ParkingPrices/DirectionsInfo riutilizzati senza duplicare dati. Bus urbani Savit A/B distinti dalla navetta SA.DA.; fonti ufficiali in pagina. Locandina archivio2025 senza anno di validità: conferma al gestore richiesta, controllo data solo sul periodo1aprile–30ottobre, mai disponibilità in tempo reale. Foto reale Ludvig14 già licenziata, lievi filtri locali. Build riuscita; browser iframe320/390/768/1280 senza overflow, date1aprile/30ottobre/31ottobre e vuota corrette,12corse visibili, due foto caricate, mappaGoogle resa osservata. Pubblicazione anteprima da verificare sul commit finale; main invariato.

## Servizi utili — 05/11/2026
Fabio chiede farmacie/turni, benzinai, supermercati e altri servizi fondamentali. Creata /servizi-utili con10categorie filtrabili,6farmacie da elenco OrdineEnna e4supermercati da siti insegne. Aggiunti guardia medica/Chiello,112,ACI803116,bancomat,ricariche,bagni,veterinari,lavanderie e rinvioMappeNavette. Fonti collegate, calendariofarmacie2026 PDFufficiale e paginaOrdine peraggiornamenti; nessuna falsa apertura live né promessaturniautomatici. Benzinai/ATM/ricariche/veterinari/lavanderie sono ricercheGoogleMaps esplicite,non elenchi verificati. Bagni nessun punto/costo/orario inventato. Link dahome,headerInfoUtili desktop/menu eMappeNavette. Build riuscita;browserfiltri10→3→4→3→10,6farmacie e telefoni corretti;iframe320/390/768/1280 senzaoverflow. Nessunacalltelefonica eseguita. Pubblicazione da verificare;main invariato.
