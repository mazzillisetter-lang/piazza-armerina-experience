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
