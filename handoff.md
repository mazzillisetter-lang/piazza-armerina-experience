# Passaggio di consegne
Data: 2026-11-03.
## Stato attuale
- Repository: mazzillisetter-lang/piazza-armerina-experience; branch di lavoro armerina-experience-20261101. Main non modificato.
- Primo coordinatore configurato tramite AGENTS.md e agents/coordinator.md; contratto per quattro ruoli definito. Specialista immagini configurato e prima esecuzione di selezione/controllo completata; sviluppo, pubblicazione e controllo qualità ora configurati in agents/.
- Nessun nuovo abbonamento, servizio persistente o monitoraggio attivato.
## Pubblicazione verificata
Commit 890e3da4b3ec6605713daa78d31bb354c69e3876: check Cloudflare completed/success.
Anteprima verificata HTTP 200: https://9cc2ec2d.piazza-armerina-experience.pages.dev
Fabio conferma in chat che la pagina si apre benissimo. Non equivale a un collaudo visivo completo desktop/mobile da parte dell'agente.
Alias branch restituito dal check: https://armerina-experience-20261101.piazza-armerina-experience.pages.dev (non ricontrollato dopo la correzione).
## Problema corretto
I vecchi link e20e8ba3 e alias branch restituivano 404. Le nuove build fallivano con npm ERESOLVE: date-fns 4.1.0 incompatibile con react-day-picker 8.10.1.
Ricerca in frontend/src: wrapper Calendar inutilizzato, nessuna pagina lo importava, date-fns senza import diretti. Rimossi due pacchetti e wrapper (cef5f9f, 4a55434).
Verifiche: npm install senza legacy-peer-deps riuscito; npm run build riuscito; output frontend/build con index.html, JS e CSS.
## Prossimo incarico
Attendere il controllo creativo di Fabio sulla scheda Orari; continuare sulle altre schede pratiche solo con dati/istruzioni pertinenti. Tutti i quattro ruoli hanno istruzioni versionate; esecuzione in sessione, nessun servizio continuo.
Verificare build/deploy del nuovo codice e collaudo visivo prima di dichiarare completamento. Non pubblicare su main senza richiesta esplicita.
## Accessi e limiti
Connettore GitHub: lettura, creazione, aggiornamento e cancellazione file verificate. Git push dalla shell non autenticato: usare il connettore, senza richiedere credenziali in chat.
Dashboard Cloudflare aperta nel browser personale di Fabio, non autenticata nel browser condiviso. Usare check GitHub prima di chiedere login.

## Prima sostituzione fotografica — Ulisse e Polifemo
Richiesta Fabio: foto meno gialla, solo lievi correzioni di contrasto/luminosità; nessuna ricostruzione.
Scelta foto TyB CC BY 2.0, fonte e licenza in frontend/public/img/villa/polifemo-tyb.source.md. Originale 1280x960 preservato byte per byte, vecchio polifemo.jpg conservato. Nuovo asset polifemo-tyb.jpg; regolazione CSS solo su quella foto brightness(1.025) contrast(1.035). Fonte e licenza collegate nella didascalia.
Build locale riuscita; revisione indipendente specialista immagini favorevole. Commit applicativo 9d0f5cba39126e615bc5556f4e21802371b64056 pubblicato con successo. URL verificato nel browser: https://e485c98d.piazza-armerina-experience.pages.dev/villa-romana-del-casale#mosaici . Foto caricata 1280x960, object-fit contain, filtro brightness(1.025) contrast(1.035) solo su Polifemo. Controllo visivo desktop effettuato: foto intera e credito leggibile. Collaudo mobile non effettuato; Fabio ha approvato il risultato: «Perfettamente riuscita».

## Scheda Orari automatica
Richiesta attuale implementata in villaHours.js e OpeningHours.jsx: orario stagionale9/16/17inverno e9/18/19estate; ultimi cambi domenicali marzo/ottobre ogni anno01UTC; anno/data Europe/Rome. Aggiornamento anche a pagina aperta con timer max60s anticipato alla transizione, focus e visibilitychange; cleanup presente. Solo card orari modificata, data revisione03/11/2026.
7 test logici passati (2026–2028, bisestile, fusi equivalenti, anno nuovo e input invalido). Revisione indipendente qualità favorevole; timer React verificato per lettura, non test componente. Compilazione npm run build riuscita. Commit applicativo 98fd4e0450beb462dcfba450d316b3dee8ad98e0: Cloudflare completed/success. Browser verificato su https://a8b9b68e.piazza-armerina-experience.pages.dev/villa-romana-del-casale#visita : ora solare,09:00/16:00/17:00, prossimo cambio28 marzo2027; fonte corretta e data revisione03/11/2026. Screenshot desktop effettuato, mobile non verificato. Fonti e disallineamento pagine Parco documentati in docs/villa-opening-hours.md.
Istruzioni dei tre ruoli mancanti aggiunte: agents/development.md, publication.md, quality.md. Nessun servizio persistente attivato; automatismo orari eseguito dal sito nel browser.

## Scheda Biglietti
Richiesta Fabio: prezzi dal sito ufficiale Villa. Implementata TicketPrices.jsx nella sola card biglietti:14/7ordinari,minori18gratis, requisiti ufficiali; supplemento3mostra con totali17/10condizionali; cumulativi18/9,24/12,34/17 con etichetta tariffario2025 e fontePDF. Fonte principale homeVilla; data consultazione03/11/2026. Fonti in docs/villa-tickets.md. Build npm run build riuscita; revisione indipendente contenuti favorevole. Commit applicativo c44ca3fe99cb45623e07b6226f970046b11c7e66 pubblicato con successo da Cloudflare. Verifica browser desktop su https://83e279b2.piazza-armerina-experience.pages.dev/villa-romana-del-casale#visita : prezzi14/7/gratis, dettagli mostre e cumulativi aperti/chiusi correttamente, tutti i link fonte corretti, data03/11/2026. Orari e foto preservati; viewport mobile non verificata.

## Parcheggio SGS — incarico corrente
Scheda aggiornata con tariffe fedeli ai cartelli inviati da Fabio. Prima ora e ore successive/frazioni distinte; massimali senza periodicità inventata. Avviso25min limitato auto/moto/camper. Orari stagionali e bus nei dettagli. Fonte gestore al posto del link Comune non pertinente.

Verifica03/11/2026: build produzione riuscita; revisione indipendente sui due cartelli favorevole. Commit applicativo1eb8fee688ec01e152b9f8a1059323bed627fdd5, check Cloudflare completed/success. Browser desktop: scheda compatta leggibile, dettaglio aperto/chiuso e tutti i valori verificati. Anteprima https://d2ea8057.piazza-armerina-experience.pages.dev/villa-romana-del-casale#visita . Mobile non verificato.

## Navetta — incarico corrente
Sostituito placeholder con periodo stagionale1aprile–30ottobre, tariffe e due tabelle complete6corse/direzione dalPDF primario Villa. Linklocandina e chiamataSA.DA.; prenotazione15min e consiglio45min ultima corsa daFabio. Nessuna promessa servizio fuori stagione. Verifiche completate come riportato sotto.

Verifica03/11/2026: build produzione riuscita, revisione indipendente delPDF favorevole. Commit7b318b99b617c7dbeca21b3c51d4d513f2d699fd Cloudflare completed/success. Browser desktop: periodo/prezzi, 12corse nelle due tabelle, espansione/chiusura, tel ePDF verificati; screenshot compatto e tabelle. URL https://112c01f2.piazza-armerina-experience.pages.dev/villa-romana-del-casale#visita . Mobile non verificato.

## Accessibilità — incarico corrente
Scheda pratica con preparazione della visita, accesso facilitato attribuito allaCarta, tel/mailtoURP e dettaglio gratuito/accompagnatori. Fonti e limiti in docs/villa-accessibility.md. Solo cardaccessibilita aggiornata; datarevisione03/11/2026.

Verifica completata03/11/2026: build produzione riuscita; commit92ad9d66af9488719f4ffe875dd298ecbcb80f0d Cloudflare completed/success. Browser desktop verificati testi, linkURP/tel/mailto/fonti e dettaglio gratuito aperto/chiuso da tastiera. Screenshot acquisito. URL https://8ebcd9fb.piazza-armerina-experience.pages.dev/villa-romana-del-casale#visita . Mobile non verificato. Revisione indipendente non completata: specialista fermato da limite utilizzo; controllo contenuti svolto dal coordinatore sulle fonti ufficiali già consultate. Prossimo contenuto: Come arrivare, con attenzione al navigatoreSP90 e ingresso corretto dalle barriere, solo con istruzioni pertinenti.
