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
