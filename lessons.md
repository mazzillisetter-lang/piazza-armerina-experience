# Lezioni operative
- Distinguere memoria riassuntiva, file versionati e cronologia completa.
- Un commit salvato non prova che il sito sia pubblicato.
- Leggere check-runs oltre a commit/status: quest'ultimo può avere statuses vuoto mentre Cloudflare ha già un check success.
- Una pubblicazione riuscita non prova che foto, ritaglio e layout siano corretti: serve controllo visivo.
- Una sessione Google sul computer di Fabio non equivale all'accesso nel browser condiviso.
- Cercare le informazioni disponibili in GitHub prima di bloccare il lavoro sul login Cloudflare.
- Mai richiedere password o codici in chat; usare il flusso protetto.
- Non dichiarare agenti attivi o lavoro continuo senza configurazione ed evidenza.
- Non sostituire foto reali dei monumenti con immagini inventate.
- Ispezionare gli import prima di cambiare versioni o ignorare i vincoli di dipendenza: eliminare componenti certamente inutilizzati può risolvere il conflitto senza alterare il sito.
- Git clone pubblico riuscito non significa Git push autenticato. Il connettore GitHub è il percorso di scrittura verificato in questa sessione.
- Un utente che conferma l'apertura della pagina non ha necessariamente approvato layout o contenuti né eseguito un collaudo mobile.
- Per mosaici documentari, una foto con dominante cromatica più naturale e regolazioni CSS minime consentono di preservare integralmente il file sorgente. Registrare parametri e licenza e non applicare il filtro globalmente.
- Orari turistici stagionali: usare il fuso del luogo e testare gli istanti limite delle ultime domeniche, non solo i mesi. Data di revisione distinta dalla data del cambio automatico. Documentare fonti ufficiali non allineate senza promettere sincronizzazione live.
- Tariffe: una pagina aggiornata per mostre non equivale al prezzo ordinario della home. Separare voci e applicabilità; rendere esplicito l'anno di tariffari più vecchi e non inventare validità dei cumulativi.

- Audit: il nome di un ente su un portale ospitato da terzi non conferma ufficialità; qualificare le fonti. Un inventario URL non è un collaudo di tutti i link. Verificare il ripristino del backup, non soltanto la creazione o git bundle verify.

- Cataloghi a caricamento progressivo: prima di creare una scheda cercare su tutti gli elementi, non soltanto sui primi18 visibili. Suite d’Autore era già presente in posizione35; migliorare visibilità e dati senza duplicati.


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
