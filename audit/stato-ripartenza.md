# Piazza Armerina Experience — stato per ripartire

Aggiornato il 5 novembre 2026, dopo la richiesta di Fabio di chiarire la situazione e limitarsi all'ottimizzazione.

## Obiettivo corrente

Ottimizzare il sito esistente, conservando nero/oro, fotografie e composizione approvate. Non ricostruire il sito. La proposta di evoluzione istituzionale resta un piano successivo; non equivale a sviluppo già eseguito o autorizzazione alla pubblicazione.

## Stato verificato in questa ripresa

- Repository: mazzillisetter-lang/piazza-armerina-experience.
- Lettura GitHub riuscita. I rami visita e armerina-experience-20261101 sono ancora entrambi a b496d514451dd024d13a210d635f2407be9ae363. Main è separato, a 8801be1012b6a7292d17420f5a3b9fece281e9f7.
- Check Cloudflare Pages del commit b496d51: completed/success. Nessuna nuova pubblicazione effettuata in questa ripresa.
- Aperta nel browser la home https://visita.piazza-armerina-experience.pages.dev/ : panorama, mosaico, pulsanti e collegamenti alle sezioni presenti. Questo controllo non ripete il collaudo completo di tutte le pagine.
- Il ramo locale audit-istituzionale-20261105 contiene il commit 07f036d con soli documenti di audit; nessuna modifica applicativa o push successivo risulta dalle verifiche sopra.

## Lavoro già realizzato

La versione esaminata nell'audit comprende 11 pagine: home, Villa, centro storico, Palio, mangiare, dormire, natura e itinerari, eventi, prodotti tipici, mappe e navette, servizi utili. Include 43 locali, 41 strutture ricettive e 11 fotografie nella pagina prodotti. Mappe/navette, servizi e condivisione sono presenti: vecchie annotazioni «pubblicazione da verificare» descrivono fasi storiche, non lo stato finale dell'audit.

Audit precedente: build riuscita, 13 test esistenti superati, 44 controlli a dimensioni browser senza overflow orizzontale. Prove storiche sul medesimo commit, non ripetute oggi e non equivalenti a test su dispositivi fisici o certificazione WCAG.

## Da ottimizzare, non già corretto

1. Usabilità e accessibilità: ricerca ancora segnaposto, etichetta «SEZIONE IN ARRIVO» sulla Villa nonostante pagina esistente, testo alternativo della foto principale Villa, nome/focus del dialog mappa, contrasto e comandi tastiera.
2. Caricamento: foto home e risorse da alleggerire preservando inquadratura e qualità; SEO specifica delle pagine da completare.
3. Contenuti: traduzioni parziali; verificare orari Villa discordanti tra fonti, validità navetta, qualificazione di alcune fonti sanitarie e diritti delle foto.
4. Gestione: chiarire identità del gestore, informativa e tracciamenti effettivi. Nessuna conformità legale o WCAG già certificata.

Streaming effettivo del video home e anteprima della scheda WhatsApp restano da collaudare: pulsanti/metadati presenti non dimostrano il risultato completo.

## Memoria e metodo

Questa nota prevale sui vecchi «da verificare» quando descrivono lo stesso lavoro già concluso. Le annotazioni storiche si conservano, con stato corrente separato. I quattro ruoli e il coordinatore sono una procedura di lavoro; non sono cinque servizi autonomi continuamente attivi. L'automazione Eventi/Palio è un'attività separata già documentata nell'audit, non modificata né ricontrollata in questa ripresa.

Nessuna nuova pubblicazione è autorizzata da questa nota. Prossimo lavoro proposto: un pacchetto limitato di ottimizzazione tecnica in anteprima da esaminare, senza estendere il progetto. Il perimetro precedente richiede approvazione prima dello sviluppo e della pubblicazione; il chiarimento «dovevamo solo ottimizzare» restringe la priorità, senza annullare il vincolo sulla pubblicazione.

Fonti: API GitHub branches e check-runs del commit b496d51 rilette in questa sessione; home osservata nel browser; rapporto Audit_Piazza_Armerina_Experience_2026-11-05.md riletto nella versione conservata. Rapporto: https://chatgpt.com/library?file_id=libfile_16bfa8c245588191a5d75ec069803ad4&account_id=personal.


## Ottimizzazione tecnica — 6 novembre 2026
Fabio autorizza a proseguire con il pacchetto limitato di ottimizzazione. Implementato sul ramo locale ottimizzazione-20261106: ricerca delle dieci sezioni con parole chiave (non ricerca integrale delle singole attività), dialog Radix con focus/tastiera, etichetta Villa corretta, alt foto principale Villa, mappa con nome accessibile/focus/confinamento/ritorno focus, stato espanso e chiusura Escape/esterno del menu, focus visibile e testo scuro sui pulsanti oro. Pagine secondarie caricate con React.lazy/Suspense. Framer Motion rispetta reducedMotion=user e Lenis non avviato se riduzione movimento già attiva all'apertura (non certificazione globale delle animazioni). Foto e dati turistici non modificati.

Verifiche nuove: build produzione riuscita; 13 test esistenti in due suite passati. JavaScript principale gzip 188,66 kB rispetto a 245,91 kB dell'audit (-23,28%); CSS principale 16,26 kB rispetto a 26,41 kB: risorse restanti scaricate quando si apre la relativa pagina, non eliminate. Nessuna misura Lighthouse o velocità reale dichiarata. Browser: ricerca parcheggio/farmacie/nessun risultato, focus iniziale/ritorno con Escape; menu aria-expanded true/false con Escape; mappa nome e focus interno, zoom 200%, Escape e ritorno al pulsante. Undici pagine a larghezza iframe390 più home320/768/1280: 14 viste con h1 presente e zero overflow orizzontale. Prove a dimensioni browser, non dispositivi fisici. Video: dialog e player YouTube con titolo «Piazza Armerina dall’alto» e pulsante Play caricati; riproduzione completa e sottotitoli non testati.

Durante QA il server statico locale non gestiva il fallback SPA (Cannot GET sul percorso); aggiunte copie index nelle cartelle del solo wrapper temporaneo di anteprima. Nessuna modifica del routing Cloudflare richiesta. Sorgenti e memoria salvati in commit locale; niente push, nessuna pubblicazione, alias visita e main invariati. Prima di pubblicare occorre via libera di Fabio e lettura dei rami remoti, poi check Cloudflare e collaudo pubblico. Restano ottimizzazione immagini, SEO per pagina, traduzioni e questioni editoriali/privacy/diritti dell'audit.
