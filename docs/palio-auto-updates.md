# Aggiornamenti ufficiali del Palio 2027

Fabio ha autorizzato il 4 novembre 2026 l'aggiornamento automatico della pagina quando il Comune pubblica nuovi comunicati. Il controllo previsto è giornaliero: non è un collegamento push istantaneo al Comune.

## Accesso persistente
- Repository: mazzillisetter-lang/piazza-armerina-experience.
- Branch autorizzato: armerina-experience-20261101. Non modificare main o il dominio definitivo.
- Unico file aggiornabile nei controlli ordinari: frontend/public/data/palio-2027.json.
- Leggere e scrivere con il connettore GitHub, usando lo SHA corrente del file per update_file. Nessuna credenziale o dipendenza da un checkout locale.
- La pagina legge il JSON pubblico da raw.githubusercontent.com al caricamento, ogni cinque minuti e al ritorno del focus. Gli aggiornamenti dei dati non richiedono una nuova pubblicazione della pagina. La cache del provider può introdurre alcuni minuti di ritardo.
- Un timeout o un JSON non valido conserva gli ultimi dati validi e mostra un avviso. La copia iniziale nel bundle è datata; localStorage conserva l'ultimo dataset valido nel browser.

## Fonti autorizzate
Leggere i comunicati, le notizie, gli eventi e gli allegati pertinenti su:
- https://www.comune.piazzaarmerina.en.it/
- https://servizi.comune.piazzaarmerina.en.it/

Usare ricerca web con filtro sul dominio per trovare nuove pagine; aprire e leggere gli originali e i PDF, non basarsi sugli snippet. Il comunicato novita_542.html riguarda il 2026 e serve solo da archivio. Non trasferire informazioni del 2026 al 2027. L'assenza di risultati di ricerca non dimostra l'assenza di un programma.

## Schema del file
- schemaVersion: 1; edition: 2027.
- status: pending, partial, confirmed oppure cancelled.
- dateLabel: null oppure testo fino a 120 caratteri; dateSourceUrl: null oppure fonte comunale HTTPS.
- summary: testo fino a 1600 caratteri.
- verifiedAt: YYYY-MM-DD, data effettiva della verifica editoriale registrata.
- items: massimo 30 comunicati, ciascuno con id univoco, title (240 caratteri), text (2000), sourceUrl (URL comunale HTTPS), publishedAt (YYYY-MM-DD, data del comunicato).

confirmed richiede dateLabel, relativa fonte e almeno un comunicato. Usare partial per annunci parziali, senza inventare un programma completo. cancelled richiede un annullamento ufficiale inequivocabile. La data di pubblicazione di un comunicato può precedere il 2027; deve essere il contenuto a riguardare esplicitamente l'edizione 2027.

## Esecuzione di ogni controllo
1. Recuperare dal Git remoto AGENTS.md, questo documento e il JSON corrente. Rispettare i limiti applicabili; non dipendere dalla memoria della conversazione o dal computer di Fabio.
2. Cercare nuovi annunci e rettifiche, verificando anno effettivo, testo e allegati. Estrarre solo informazioni utili ai visitatori: date, ore, luoghi, cortei, biglietti, prenotazioni, accessibilità, trasporti e viabilità.
3. Conservare i fatti non smentiti dalle fonti più recenti. Le rettifiche sostituiscono le informazioni superate e citano il nuovo comunicato. Evitare duplicati; non riprodurre integralmente i testi.
4. Se le fonti sono inaccessibili o ambigue, non cambiare informazioni o stato e non aggiornare verifiedAt. Segnalare un blocco persistente che richiede intervento, senza presentarlo come controllo riuscito.
5. Se non emergono novità sostanziali, non fare commit e non inviare notifiche. verifiedAt non è un orologio live: indica l'ultima verifica editoriale salvata.
6. Se c'è una novità verificata, aggiornare il JSON preservando lo schema e tutti i campi. Applicare le regole di validPalioUpdates in frontend/src/lib/palioUpdates.js. Mai inserire HTML eseguibile o link non comunali. Su conflitto di SHA, rileggere e integrare; non forzare.
7. Scrivere con update_file, rileggere dal GitHub e controllare il feed pubblico. Se la cache non si aggiorna subito, distinguere il salvataggio dalla lettura pubblica. Non dichiarare la pagina aggiornata senza verifica. Non modificare layout, immagini o altri contenuti.
8. Comunicare a Fabio solo novità effettivamente salvate e verificate, oppure un blocco che richiede intervento, con link alla pagina e alle fonti. Nessuna notifica quotidiana senza novità.

## Stato iniziale
Il 4 novembre 2026 non è stato individuato un programma ufficiale 2027 nelle fonti consultate: status pending, items vuoto, dateLabel e dateSourceUrl null. Non inserire informazioni fittizie per provare l'interfaccia pubblica.
