# Passaggio di consegne
Data: 2026-11-03.
## Stato attuale
- Repository: mazzillisetter-lang/piazza-armerina-experience; branch di lavoro armerina-experience-20261101. Main non modificato.
- Primo coordinatore configurato tramite AGENTS.md e agents/coordinator.md; contratto per quattro ruoli definito. Specialisti ancora da configurare.
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
Configurare il primo specialista operativo, immagini, e scegliere una modifica richiesta da Fabio per collaudare il flusso completo. L'utente deve indicare foto e sezione quando non già determinate.
Verificare build/deploy del nuovo codice e collaudo visivo prima di dichiarare completamento. Non pubblicare su main senza richiesta esplicita.
## Accessi e limiti
Connettore GitHub: lettura, creazione, aggiornamento e cancellazione file verificate. Git push dalla shell non autenticato: usare il connettore, senza richiedere credenziali in chat.
Dashboard Cloudflare aperta nel browser personale di Fabio, non autenticata nel browser condiviso. Usare check GitHub prima di chiedere login.
