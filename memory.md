# Memoria operativa — Piazza Armerina Experience
## Lettura iniziale
Il coordinatore legge memory.md, handoff.md, lessons.md, changelog.md e memory/PRD.md prima del lavoro. Ogni agente riceve solo il compito e i vincoli pertinenti. Aggiornare questi file a fine sessione senza dichiarare verifiche non svolte.
## Decisioni dell'utente
- Fabio indica risultato, foto e sezione; il sistema deve gestire file, codice, GitHub, pubblicazione e verifica, presentando un risultato controllabile.
- Un coordinatore supervisiona quattro ruoli: immagini, sviluppo, versionamento/pubblicazione, controllo visivo.
- Per ora usare gli strumenti del piano disponibile; nessun nuovo abbonamento Relevance AI.
- Aspetto nero/oro, fotografie reali di luoghi e mosaici. Preservare geometria del panorama e Palazzo Trigona con sette finestre.
- Il controllo finale creativo spetta a Fabio. Rispettare il vincolo del PRD: dominio definitivo solo dopo approvazione.
## Fonti tecniche
Repository: mazzillisetter-lang/piazza-armerina-experience.
Branch di lavoro verificato: armerina-experience-20261101; default: main.
Frontend React in frontend/. Leggere memory/PRD.md per architettura e decisioni pregresse.
## Stato reale
Configurazione del coordinatore in AGENTS.md e agents/coordinator.md. Specialista immagini configurato in agents/images.md e provato in sessione su Polifemo; sviluppo, pubblicazione e controllo qualità configurati in agents/. Esecuzione su richiesta nella sessione; nessun servizio persistente. Non confondere istruzioni versionate con agenti in esecuzione.

## Fotografie — vincolo confermato da Fabio
Interventi delicati: scegliere fotografie reali migliori e regolare appena luce/contrasto; nessuna ricostruzione completa, alterazione delle figure o dei mosaici. Preservare originali e applicare regolazioni reversibili e specifiche per immagine.

## Orari stagionali approvati da Fabio
Ora solare/inverno: 09:00 apertura,16:00 ultimo ingresso,17:00 chiusura. Ora legale/estate:09:00 apertura,18:00 ultimo ingresso,19:00 chiusura. Cambio automatico ultime domeniche marzo e ottobre alle01:00UTC, fuso Europe/Rome. Mostrare periodo e prossimo cambio; data revisione statica03/11/2026. Non è una sincronizzazione live con gli avvisi del Parco.

## Tariffe — criterio di pubblicazione
Usare fonti ufficiali e distinguere ordinari, supplementi mostre e cumulativi. Al03/11/2026: homeVilla14/7, regionale mostra17/10; quest'ultima condizionale. Cumulativi da PDF2025 con anno dichiarato e conferma in biglietteria. Requisiti ridotto collegati al Parco, non inventare soglie età quando le pagine differiscono.

## Parcheggio SGS
Tariffe e orari dal cartello e avviso fotografati forniti da Fabio il03/11/2026. Auto2+1max8, moto1,50+0,60max5, camper5+1,50max10; supplementi per ora successiva o frazione. Minibus max19posti20/giorno, bus30/giorno. Dopo pagamento25min uscita solo auto/moto/camper. Estate08:45–18uscita19; inverno08:45–16uscita17, ultime domeniche marzo/ottobre. Camper solo diurno. Non attribuire al Comune questi dati né inventare metodi di pagamento/durata dei massimali.

## Navetta stagionale
Fonte PDF primario Villa CARTELLO-ORARI-bus-navetta.pdf (uploads/2025/05), consultato03/11/2026.1aprile–30ottobre; sei corse per direzione. Singola1,50€, A/Rgiornata2,50€, SA.DA. Tours3664448128, ogni corsa15min prima; preferibilmente45min ultima corsa da istruzioneFabio. Solo chiamata. La locandina grafica30ottobre omette sesta andata: usarePDF. Non promettere servizio invernale o conferma futura automatica.

## Accessibilità Villa
Carta servizi storica indica accesso facilitato attraverso personale; non prova dotazioni attuali o piena fruibilità autonoma. Scheda invita a concordare percorso, ausili e bagni conURP0935687667, urpmuseo.casale@regione.sicilia.it. Gratuitàdocumentata per disabilità e familiare/accompagnatore nei requisitiParco. Nessuna garanzia di navetta accessibile, ausili disponibili o bagni adattati.

## Come arrivare — ingressoSGS
Arrivando da PiazzaArmerinaSP90: tenere destra/discesa verso barriere, evitare ramo sinistro superiore con divieto. Foto utente28ottobre recuperate1000147565.jpg(cartello) e image(20261028-091227).png(StreetViewnov2024). Originali conservati in public/img/villa; dataStreetView esplicita, attribuzioni integre. GoogleMaps ricerca parcheggio, non promessa itinerario corretto.

## Video home
FabiofornisceYouTube sgfgMC4Y-Wc per pulsanteGuarda il video / Un minuto di emozioni. DialogRadix responsive coniframeyoutube-nocookie montato soloaprendo; nienteautoplay, chiusuraunmountfermariproduzione, linkYouTubefallback. NoncambiarevideoVillaQhFTY7m4xL4.

Durata osservata nelplayer123secondi: sottotitolo aggiornato aDue minuti di emozioni nelle5lingue.

## Home su tre dimensioni
Fabio vuole preservare panorama, mosaico, parole e fiori della home PC anche su smartphone e tablet. Adattamento CSS implementato senza cambiare gli asset; collaudo browser a larghezze simulate, non dispositivi fisici. Dettagli e limiti in docs/responsive-home.md.

## Preferenza home PC — 03/11/2026
I pulsanti Inizia il tuo viaggio e Guarda il video devono stare vicini al piede della foto, lasciando libera la Cattedrale. Ancorarli al fondo nella composizione orizzontale; preservare il comportamento smartphone.

Fabio ha approvato i pulsanti a piede foto. Il blocco testo PC deve avere più presenza sulla sinistra: titolo, frase in corsivo e descrizione ingranditi insieme in proporzione, mantenendo la Cattedrale visibile.

## Correzione home smartphone — 04/11/2026
Fabio rifiuta il taglio verticale del panorama: devono vedersi piazza intera, Cattedrale e Palazzo Trigona con le sette finestre. Mostrare la foto completa nel suo rapporto originale sul telefono; mosaico più piccolo e separato dagli edifici. La composizione desktop approvata resta il riferimento stilistico.

## Menu smartphone orizzontale
Fabio vuole la fascia del menu fissa trasparente, anche scorrendo, per lasciare visibile la foto sottostante. Rimuovere anche la sfocatura in questo orientamento. Il pannello del menu quando aperto mantiene sfondo leggibile.

## Foto bivio aggiornata — 04/11/2026
Usare la nuova foto del mattino fornita da Fabio per Come arrivare: cartelloVilla, divieto ramo sinistro e parcheggio/barriere visibili insieme. Una sola foto intera e ingrandibile sostituisce le precedenti StreetView e verticale; originale conservato senza filtri o ricostruzioni.

## Centro storico — 04/11/2026
Fabio richiede testi brevi e documentati perDuomo ePalazzoTrigona, foto reali curate e organizzazione di vicoli/chiese/palazzi. Implementata pagina/centro-storico nello stile nero/oro, due schede principali, quattro tappe suggerite e dettagliFundrò/PalazzoCittà/SanGiovanni/Teatini. FotoCommons con crediti/licenze/date e ingrandimento, nessun ritocco o ricostruzione. Fonti e scelte in docs/centro-storico.md. Non confondere una proposta editoriale di passeggiata con un percorso misurato/accessibile garantito.

## Panoramica Centro storico — 04/11/2026
Fabio sceglie la veduta notturna fornita1483588_gd.jpg al posto della panoramica iniziale, per differenziarla dalla home. Originale integrale, filigrana conservata; home e schedeDuomo/Trigona invariate.

## Miglioramento foto — 04/11/2026
Fabio richiede sempre valorizzazione fotografica prima di inserire le foto: luce, contrasto e colori curati, conservando architettura e dettagli reali. Sulla panoramica notturna applicato filtro CSS locale brightness1.08 contrast1.10 saturate1.12. Prova generativa scartata perché ricostruiva dettagli. Originale e filigrana preservati.

## Nuova panoramica tramonto — 04/11/2026
Fabio preferisce il nuovo scatto400x320, fornito con filenameb9c92bc0ab95f840cf637c37c7b9a7978a7b430d9a9884cad98189ad75c7df25.jpg, alla veduta notturna. Usare originale integrale con brightness1.02 contrast1.04 saturate0.94: colori già intensi, evitare eccesso. Non inventare dettagli tramite upscaling generativo. Autore/data/licenza non forniti.

## Scelta finale panorama Centro storico — 04/11/2026
Fabio sceglie definitivamente Piazza-Armerina-2.webp1217x694, migliore inquadratura/definizione, e chiede di fermarsi dopo la sostituzione. Asset centro-storico-panorama.webp originale; stesso trattamentoCSS leggero brightness1.02 contrast1.04 saturate0.94.


## Palio — 04/11/2026
Fabio richiede sezionePalio stagione2027, usando foto/bandiere già scelte inGit. Recuperate6immagini dalmain storico, integrate come elaborazioni artistiche/graphichelmamente nonufficiali, compresseWebP. Date12–14agosto indicate tradizionali e2027daconfermare; dettaglioperativi noninventati. Fonti e limiti diritti in docs/palio-2027.md.


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

## Link riconoscibile e condivisione — 05/11/2026
Fabio richiede un URL leggibile/riconoscibile da inoltrare suWhatsApp. Preparato aliasanteprima visita.piazza-armerina-experience.pages.dev mediante branchvisita, specchio delbranchlavoro. Non cambiare main. Dopo futurepubblicazioni validate sulbranch armerina-experience-20261101, allinearevisita mediantefast-forward e controllareCloudflare: i duebranch non si sincronizzano da soli. Non dichiarareaggiornamentoautomatico. MetadataOpenGraph/Twitter staticiinHTML, fotoesistenteLudvig14CCBYSA4 1280x853, titolo/descrizioneprogetto,og:urlaliasvisita. Footer5lingueCopiaLink ecomposizioneWhatsAppsenzaautosend; statuscopiato/fallback. Nessundominioacquistato. Pubblicazione eprovaalias da verificare sulcommitfinale. RenderingeffettivodellaschedainWhatsAppnonconfermato.

## Audit istituzionale — 05/11/2026
Richiesta Fabio: solo audit, nessuno sviluppo/pubblicazione senza approvazione. Baseline b496d514451dd024d13a210d635f2407be9ae363; branch locale audit-istituzionale-20261105 non pubblicato. Rapporto in audit/rapporto.md e riscontri.json, copia file baseline estratta e confrontata (backup-verificato.json); configurazioneCloudflare/storicoGit non coperti dalla snapshot. Rilevati privacy/titolare/tracciamenti, diritti incompleti, fonti orari discordanti, fonte sanitaria da qualificare, traduzioni parziali, alt mancante, dialog mappa senza nome/focus, contrasto CTA bianco/oro, ricerca placeholder, SEO/performance e gestione da consolidare. Undici pagine raggiungibili,44controlli responsive senzaoverflow,13test esistenti passati;373link esterni inventariati non tutti verificati. AutomazioneEventiPalio preesistente letta, non modificata; ultimo registro completato05/11/2026, nessun aggiornamento editoriale inferito. Nessuna modifica frontend o push. Prossima azione solo dopo approvazione: pacchettoP0 nel rapporto. Le stime44–84ore sono orientative, non preventivi.


## Stato corrente consolidato — 05/11/2026
Fabio chiarisce: dovevamo solo ottimizzare. Riferimento corrente audit/stato-ripartenza.md, da leggere prima delle vecchie note. Rami remoti visita e armerina-experience-20261101 riletti e allineati a b496d51; check Cloudflare success; home visita aperta. Le vecchie note «pubblicazione da verificare» sono storiche quando superate dall’audit. Piano istituzionale non implementato; ottimizzazioni ancora da eseguire. Nessun frontend modificato, nessun push/pubblicazione in questa ripresa. Priorità: ottimizzazione limitata del sito approvato, preservando foto/stile; pubblicazione resta soggetta ad approvazione.


## Ottimizzazione tecnica — 6 novembre 2026
Fabio autorizza a proseguire con il pacchetto limitato di ottimizzazione. Implementato sul ramo locale ottimizzazione-20261106: ricerca delle dieci sezioni con parole chiave (non ricerca integrale delle singole attività), dialog Radix con focus/tastiera, etichetta Villa corretta, alt foto principale Villa, mappa con nome accessibile/focus/confinamento/ritorno focus, stato espanso e chiusura Escape/esterno del menu, focus visibile e testo scuro sui pulsanti oro. Pagine secondarie caricate con React.lazy/Suspense. Framer Motion rispetta reducedMotion=user e Lenis non avviato se riduzione movimento già attiva all'apertura (non certificazione globale delle animazioni). Foto e dati turistici non modificati.

Verifiche nuove: build produzione riuscita; 13 test esistenti in due suite passati. JavaScript principale gzip 188,66 kB rispetto a 245,91 kB dell'audit (-23,28%); CSS principale 16,26 kB rispetto a 26,41 kB: risorse restanti scaricate quando si apre la relativa pagina, non eliminate. Nessuna misura Lighthouse o velocità reale dichiarata. Browser: ricerca parcheggio/farmacie/nessun risultato, focus iniziale/ritorno con Escape; menu aria-expanded true/false con Escape; mappa nome e focus interno, zoom 200%, Escape e ritorno al pulsante. Undici pagine a larghezza iframe390 più home320/768/1280: 14 viste con h1 presente e zero overflow orizzontale. Prove a dimensioni browser, non dispositivi fisici. Video: dialog e player YouTube con titolo «Piazza Armerina dall’alto» e pulsante Play caricati; riproduzione completa e sottotitoli non testati.

Durante QA il server statico locale non gestiva il fallback SPA (Cannot GET sul percorso); aggiunte copie index nelle cartelle del solo wrapper temporaneo di anteprima. Nessuna modifica del routing Cloudflare richiesta. Sorgenti e memoria salvati in commit locale; niente push, nessuna pubblicazione, alias visita e main invariati. Prima di pubblicare occorre via libera di Fabio e lettura dei rami remoti, poi check Cloudflare e collaudo pubblico. Restano ottimizzazione immagini, SEO per pagina, traduzioni e questioni editoriali/privacy/diritti dell'audit.


## Integrazione approvata — 6 novembre 2026
Fabio ha verificato l’anteprima https://215beb6c.piazza-armerina-experience.pages.dev/ e autorizzato l’integrazione della ricerca rapida e del pacchetto di ottimizzazione sul link abituale visita. Versione applicativa approvata: 03016ef1229ea4389c01ddfce240a3886fa2dadd (albero dc34c7753494878e21a1cf2dece04e1b533e5f61). Nessuna ulteriore modifica applicativa in questo rilascio; aggiornati soltanto questi documenti per registrare l’approvazione. Destinazioni autorizzate: armerina-experience-20261101 e visita mediante fast-forward. Main resta invariato. Controllare i check Cloudflare del commit di rilascio e la ricerca sul link pubblico prima di dichiarare conclusa l’integrazione. Conservare la snellezza del sito e l’identità approvata. Gli esiti finali saranno registrati anche nella memoria persistente; le note precedenti «nessuna autorizzazione» sono superate da questa approvazione.


## Suite d’Autore — 6 novembre 2026
Fabio richiede presenza ben visibile e collegamento al sito di Suite d’Autore. Verificato sul sito ufficiale www.suitedautore.it e /art-hotel: nome Art Design Gallery Hotel, Via Monte1/PiazzaDuomo, telefono0935688553, suite tematiche dedicate al design. La scheda esisteva già, id suite-dautore, posizione35 su41 e quindi oltre le prime18 visibili. Nessun duplicato: nome completo, descrizione ampliata con testo originale, fonti e verifica singola06/11, scheda spostata tra le prime visibili. Aggiunte parole chiave Suite d’Autore alla ricerca rapida per raggiungere Dove dormire; ricerca delle singole strutture resta nel catalogo. Nessuna fotografia copiata dal sito, nessuna nuova dipendenza o dato prezzo/disponibilità. Non inserita nel contenuto l’associazione politica/personale citata dall’utente. Dati restanti e numero41 preservati. Build produzione riuscita; 41 ID unici, tre varianti della ricerca Suite e filtro Hotel/Centro verificati. JS iniziale +24B gzip e pagina dormire +107B, nessuna dipendenza aggiunta. Collaudo pubblico da registrare sull’esatto commit di rilascio. Base pubblica fe0b2d6, main invariato.


## Sessione prioritaria schede — 6 novembre 2026
Fabio autorizza sviluppo effettivo e pubblicazione dopo i controlli di un modello condiviso per Dove dormire e Dove mangiare. Questa richiesta supera il precedente ambito di sola anteprima grafica. Nome esclusivamente Suite d’Autore: «fatto bene» era una richiesta di qualità. Nessuna relazione politica o preferenza commerciale dichiarata nella scheda.

Base pubblica verificata 28769087278a12d326380bdd10779e1d1367d3ed, visita e lavoro allineati; main invariato. Punto di ripristino remoto ripristino-prima-schede-20261106 allo stesso SHA. Ramo separato schede-prioritarie-20261106. Modello reale integrato nelle 41 schede soggiorni e 43 locali: fotografie ampie, crema/oro/nero, dettagli a tessere, contatti e fonti preservati, hover leggero e rispetto reduced-motion. Home e altre sezioni non modificate. Componente DirectoryCardMedia e CSS condiviso, nessuna dipendenza o servizio aggiunto.

Foto delle singole attività NON autorizzate dal solo fatto di essere pubbliche: ricerca documentata in docs/ricerca-foto-schede-20261106.md. Usate risorse già licenziate con autore/licenza/fonti in ogni scheda e dicitura esplicita territorio/immagine illustrativa, mai ambienti o piatti della struttura. Le pizzerie senza foto autorizzata mostrano contesto cittadino, non arancini. Suite d’Autore: sito ufficiale https://www.suitedautore.it/, nome corretto, Via Monte1, telefono0935688553 confermati. Nessun prezzo/servizio/recensione inventato. Da completare: fotografie autorizzate delle singole attività.

Controlli prima del rilascio: build produzione riuscita, 13 test esistenti superati; 8 viste browser (due pagine x320/390/768/1280) senza overflow; ricerca Suite d'Autore→1, numero telefonico e sito corretti; caricamento progressivo41soggiorni/43locali, filtroPizza14, ricerca vuota0 e ripristino riusciti; crediti espandibili su390. Non sono prove su hardware fisico né certificazione WCAG. JS iniziale188,69kB gzip, CSS iniziale16,26kB, fotografie lazy/async senza nuovi file; nessuna misura Lighthouse o velocità reale dichiarata. Pubblicazione prevista su ramo separato, verifica check e pagina, poi fast-forward visita/lavoro entro l’autorizzazione; esito pubblico e SHA effettivi riportati nella memoria consolidata a chiusura sessione.


## Correzione fotografica richiesta da Fabio — 6 novembre 2026
Fabio rifiuta le fotografie gastronomiche generiche ripetute nelle schede di Dove mangiare: ogni scheda dovrà usare soltanto foto della specifica attività, con provenienza e diritti verificati. La precedente approvazione delle immagini di categoria non vale più per queste schede. Nessun cambiamento richiesto a Dove dormire in questo intervento.

Eliminata l’assegnazione automatica per categoria nel componente condiviso. Registro foodVenuePhotos.json per associazioni esplicite tramite id locale, venueId e rightsEvidence: vuoto fino a disponibilità di immagini autorizzate. Non è una galleria completata: le schede non mostrano più cibo generico né un altro locale al posto della foto mancante. Collegamenti alle fotografie suGoogle preservati e resi espliciti; aggiunte cinque fonti fotografiche specifiche collegabili per Trinacria, Imperial, MemoryFood, LaRuota e AlFogher, senza copiare immagini.

Fonti e candidati documentati in docs/fonti-foto-locali-20261106.md. Nessuna licenza o autorizzazione di riutilizzo riscontrata; nessun ritocco eseguito e nessuna fotografia specifica importata. Siciliamo ha due profiliTripadvisor da riconciliare: non scegliere una foto a caso. Google permette collegamenti/embed nei limiti delle proprie condizioni, non una generica autorizzazione a scaricare e ritoccare le foto dei contributori (fonti: https://www.google.com/intl/en/help/terms_maps/ e https://about.google/brand-resource-center/products-and-services/geo-guidelines/).

Base pubblica72fe5f904a3a0577b2ffc1a34ba6e3715b8dfd28; punto Git remoto ripristino-prima-foto-locali-20261106 allo stessoSHA. Build riuscita. Pubblicazione/collaudo pubblico da riportare nella memoria consolidata finale; richiesta completa di fotografie proprie dei locali resta bloccata sui diritti. Non dichiarare completata la sostituzione con foto autentiche delle attività.
