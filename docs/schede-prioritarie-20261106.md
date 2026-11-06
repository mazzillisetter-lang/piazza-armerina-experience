# Dove dormire e Dove mangiare — rilascio visivo

Richiesta del 6 novembre 2026: realizzare e pubblicare dopo verifica un modello condiviso sulle due pagine, conservando Home, navigazione e funzionalità approvate. La precedente prova statica resta separata e non è il risultato di questo incarico.

## Realizzato

- Modello fotografico comune per tutte le 41 strutture e i 43 locali, senza duplicare attività.
- Componente `DirectoryCardMedia`, CSS circoscritto alle schede: crema, nero, oro, piccoli richiami alle tessere di mosaico, tipografia esistente, fotografia ampia e contatti visibili.
- Immagini territoriali intere, senza ritagli architettonici; fotografie gastronomiche in miniatura. Nessuna ricostruzione generativa, nessuna immagine privata o protetta importata.
- Autore, fonte e licenza espandibili in ogni scheda; indicazione visibile di foto di contesto. Non sono fotografie degli ambienti, delle viste dalle camere o dei piatti delle attività.
- Suite d’Autore usa esclusivamente questo nome. Descrizione e recapiti confermati su https://www.suitedautore.it/ e https://www.suitedautore.it/art-hotel . Stesso modello delle altre strutture, nessun badge commerciale privilegiato.
- Immagini lazy/async, dimensioni riservate per evitare salti di impaginazione, riuso degli asset locali già presenti e della cache del browser. Nessuna dipendenza, tracker o servizio a pagamento aggiunto.
- Hover leggero soltanto su dispositivi che lo supportano e se non richiesta riduzione del movimento. Pulsanti da almeno44px e focus visibile.

## Verifiche

Build produzione riuscita. 13 test preesistenti in2suite superati; riguardano orariVilla e aggiornamentiPalio, non costituiscono un test completo delle nuove schede. Collaudo browser diretto: ricerca Suite d'Autore→1, telefono e sito corretti; caricamento completo41/43 schede, filtroPizza14, ricerca0 e ripristino; crediti foto espandibili.

Due pagine alle larghezze nominali320/390/768/1280px: nessun overflow orizzontale (spazio effettivo305/375/753/1265px con scrollbar). Smartphone e desktop osservati visivamente. Nessun test su hardware reale, nessuna certificazioneWCAG, nessun Lighthouse o dato di velocità reale dichiarato. Bundle iniziale188,69kB gzip, CSS iniziale16,26kB; immagini e codice delle sezioni caricati quando necessari. La Home non riceve la galleria delle schede.

## Limiti e completamento fotografico

Non è stata verificata una licenza per le foto specifiche delle singole attività. Registro delle ricerche in `ricerca-foto-schede-20261106.md`. Il risultato è un catalogo visivamente aggiornato con fotografie autentiche di contesto, non una galleria completa degli hotel e dei ristoranti. Per sostituirle servono immagini fornite dal titolare dei diritti o una licenza esplicita verificata. Nessuna autorizzazione alla pubblicazione è dedotta dalla semplice presenza online. Le gallerie delle attività restano raggiungibili tramite siti e Google.

Nessun nuovo prezzo, disponibilità, servizio, specialità, menu o traduzione inventato. I dati delle altre attività conservano la verifica precedente, senza una nuova data globale ingannevole. Foto, fonti e contenuti delle altre sezioni invariati. Questioni privacy, traduzioni, SEO e orari contrastanti dell’audit restano fuori da questa modifica visiva.

## Rilascio e ripristino

Base pubblica: `28769087278a12d326380bdd10779e1d1367d3ed`. Punto Git remoto `ripristino-prima-schede-20261106`; sviluppo separato `schede-prioritarie-20261106`. Pubblicare prima questo ramo, leggere checkCloudflare ed esaminare le due pagine, poi aggiornare `visita` e `armerina-experience-20261101` con confronto della testa attesa. `main` escluso. Se necessario ripristinare mediante nuovo commit che riporta soltanto i cinque file applicativi al contenuto della base, preservando eventuali aggiornamenti concorrenti. Non forzare i riferimenti alla cieca.

Gli SHA e l’esito pubblico finali sono registrati nella memoria consolidata della sessione: questa nota descrive i controlli prima dell’avvio del rilascio, non ne anticipa l’esito.
