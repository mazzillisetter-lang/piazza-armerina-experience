# Piazza Armerina Experience — audit per l’evoluzione istituzionale

**Data:** 5 novembre 2026 · **Stato:** audit concluso, sviluppo e pubblicazione sospesi in attesa di approvazione.

**Valutazione:** il progetto ha una base concreta e un’identità riconoscibile. Per candidarlo come riferimento turistico e cittadino occorre consolidare affidabilità editoriale, accessibilità, diritti e gestione dei dati prima di ampliare le funzionalità. Non serve ricostruirlo da zero.

## Perimetro e sicurezza

- Repository: [mazzillisetter-lang/piazza-armerina-experience](https://github.com/mazzillisetter-lang/piazza-armerina-experience). Cloudflare Pages: `piazza-armerina-experience`. Frontend React in `frontend/`, contenuti in JS/JSON, pubblicazione statica da `frontend/build`.
- Riferimento esaminato: commit `b496d514451dd024d13a210d635f2407be9ae363`, comune ai rami `visita` e `armerina-experience-20261101`, riconfermati in lettura. `main` resta separato. Il link “visita” è un alias di anteprima; non è un dominio istituzionale.
- Memoria letta: `memory.md`, `handoff.md`, `lessons.md`, `changelog.md`, `memory/PRD.md` e istruzioni degli agenti. Conservati nero/oro, geometria del panorama, fotografie approvate e funzionalità esistenti.
- Creato il ramo **locale** `audit-istituzionale-20261105`; nessun push dell’audit, modifica applicativa o deployment eseguito. Nessun servizio a pagamento attivato.
- Lettura GitHub verificata. Scrittura e pubblicazione erano già state utilizzate nelle sessioni precedenti: non sono state riesercitate per questo audit. Accesso amministrativo Cloudflare, fatturazione, 2FA, intestazione e configurazione completa non verificati direttamente.
- Preparata copia dei file versionati del commit e prova di estrazione/confronto byte per byte; il verbale tecnico registra esito e SHA-256. È una copia del codice e degli asset, **non** un backup della configurazione Cloudflare, degli account o dell’intera cronologia Git. Un precedente tentativo di ripristino della cronologia in bundle non ha superato la prova: non lo considero un backup valido. Va prevista una copia durevole fuori dall’ambiente di lavoro.

**Metodo:** aperte tutte le 11 pagine pubbliche; controllati layout a 320/390/768/1280 px in iframe della copia isolata, codice, contenuti, interazioni principali e fonti prioritarie. Build riuscita; **13 test esistenti superati**, relativi a orari e aggiornamenti Palio. Non equivalgono a test dell’intero portale.

## 1. Cosa funziona già

| Area | Riscontro |
|---|---|
| Navigazione | Tutte le 11 pagine principali si aprono: home, Villa, centro, Palio, mangiare, dormire, natura, eventi, prodotti, mappe/navette, servizi. |
| Impaginazione | Nei 44 controlli di larghezza non è emerso overflow orizzontale. Ogni pagina presenta un titolo principale; nessun ID duplicato rilevato nelle viste iniziali. |
| Ristorazione e ospitalità | Cataloghi di **43 locali e 41 strutture**; caricamento progressivo e ricerca provati. “Trinacria” restituisce un locale, “Villa” sei strutture ricettive. Telefoni e WhatsApp sono presenti solo per parte del catalogo. |
| Informazioni pratiche | Tariffario SGS, foto dell’ingresso corretto, avviso sul ramo vietato, navetta distinta dai bus urbani, fonti e contatti. Farmacie con elenco e calendario ufficiale collegato. |
| Contenuti | Centro storico, natura e prodotti hanno descrizioni e fotografie; numerose immagini Commons dispongono di crediti e licenze documentati. |
| Condivisione | URL riconoscibile, pulsanti copia/WhatsApp, metadati social statici. La copia aveva mostrato esito positivo su HTTPS; l’anteprima effettiva nella chat WhatsApp non è confermata. |
| Aggiornamenti | Eventi e Palio leggono JSON pubblici, validano i dati e conservano l’ultima copia valida. Non presentano programmi futuri inventati. |

L’automazione preesistente “Eventi e Palio Piazza Armerina” risulta abilitata; il registro consultato riporta un’esecuzione completata il 5 novembre alle 11:52 circa, ora italiana, senza risultato testuale disponibile. Questo non prova che siano stati aggiunti eventi o aggiornato il portale. L’automazione non è stata modificata.

## 2. Cosa è incompleto o non funziona

| Priorità | Problema osservato | Implicazione / intervento da approvare |
|---|---|---|
| **P0** | Script Emergent/PostHog caricati dalla pagina; configurazione con opzioni di registrazione delle sessioni. Non trovate informativa privacy/cookie, identificazione del titolare o gestione delle preferenze nel portale. | Inventariare dati e destinatari; decidere quali strumenti conservare; configurare informativa e consenso dove necessario. Attivazione effettiva delle registrazioni, conservazione e accesso alla dashboard non sono confermati. |
| **P0** | Licenze/autori non documentati per parte degli asset, inclusi panorama del centro, scene/stemmi del Palio e alcune immagini della Villa. | Verificare autorizzazioni e provenienza; valutare separatamente i vincoli di riproduzione dei beni culturali. Il caricamento da parte dell’utente non dimostra automaticamente i diritti. Nessuna sostituzione o eliminazione eseguita. |
| **P0** | Orario invernale del portale 09–17, ultimo ingresso 16; la pagina della Villa indica 09–17:30, ultimo ingresso 16:30; altra pagina regionale mostra ancora 09–19. | Ottenere conferma dal Parco e adottare una fonte responsabile con data e scadenza. **Non posso confermare l’orario invernale corretto** dal solo confronto web. Il cambio stagionale calcolato correttamente non garantisce l’esattezza dell’orario. [Fonti orari](https://www.villaromanadelcasale.it/orari-tutti-siti/) · [Parco](https://parchiarcheologici.regione.sicilia.it/morgantina-villa-romana-casale/orari/) |
| **P0** | Alcuni riferimenti sanitari rinviano a `portal.myorigami.it`, che si presenta come portale ASP ma la cui qualificazione come canale istituzionale non è stata confermata tramite un collegamento dell’ente. | Riconfermare recapiti e fonte sanitaria con ASP; non trasformare l’aspetto di un sito in prova di ufficialità. |
| **P1** | Selettore IT/EN/DE/FR/ES disponibile, ma molte pagine interne restano italiane. Selezionando EN, il documento è marcato inglese mentre il contenuto italiano non ha un attributo `lang` specifico. | Traduzione progressiva e revisione umana, partendo dai servizi essenziali; corretta marcatura dei testi non tradotti. |
| **P1** | Foto introduttiva della Villa priva di `alt`. Mappa ingrandita: dialogo senza nome accessibile e focus rimasto all’esterno nell’apertura da tastiera. Menu senza stato espanso dichiarato. | Correggere alternative testuali, nome/focus/ritorno focus del dialogo e semantica del menu. |
| **P1** | Pulsanti `.btn-hero`: testo bianco sul gradiente oro, contrasto calcolato circa **1,88–2,95:1**. | Inferiore anche alla soglia 3:1 per testo grande; rivedere colori del testo/pulsante conservando la palette. Completare focus, tastiera, bersagli tattili, zoom e lettori vocali. |
| **P1** | Ricerca generale mostra “disponibile a breve”; scheda Villa nella home mostra “sezione in arrivo”, ma la pagina esiste. | Attivare la ricerca oppure concordare una presentazione coerente; correggere il testo della scheda. |
| **P1** | SEO ancora da anteprima: metadati descrittivi/social uguali tra pagine, URL social della home, nessun canonical/hreflang/sitemap nel codice pubblico; percorso sconosciuto ricade sulla home. | Preparare indicizzazione, metadati per pagina e gestione 404 solo quando si approverà la destinazione pubblica definitiva. Cloudflare documenta normalmente `noindex` per le anteprime; intestazioni effettive non verificate in questo audit. |
| **P1** | Foto principale home PNG da **2,80 MB**; decorazioni circa 0,80 MB aggiuntivi; unico bundle JS iniziale circa **246 kB gzip**. | Ottimizzare formati e varianti senza alterare l’inquadratura; valutare caricamento delle pagine su richiesta e dei font. Nessun punteggio Lighthouse o Core Web Vitals reale disponibile. |
| **P1** | Orari, prezzi, navetta e contatti mescolano dati datati, documenti 2025 e regole locali. Fonte degli eventi limitata soprattutto al Comune. | Registro dei dati con responsabile, ultima conferma e scadenza; includere avvisi del Parco e operatori verificati. PDF e fonti manuali non sono aggiornamenti in tempo reale. |
| **P2** | Mancano gestione editoriale semplice, dashboard aggregata documentata, manuale di gestione e accordi su proprietà/licenza/gestione. | Prepararli per l’offerta comunale dopo la stabilizzazione. Il footer non identifica chiaramente il gestore; non ho rilevato una dichiarazione esplicita di ufficialità comunale nelle pagine principali. |

Le regole cookie dipendono dai trattamenti effettivi: non basta aggiungere un banner. Il [Garante](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876) richiede trasparenza e condizioni coerenti con gli strumenti usati. Questo audit non è un parere legale né una certificazione WCAG. Obiettivo tecnico richiesto: [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/), da verificare anche manualmente e con tecnologie assistive; per un impiego pubblico vanno verificati gli obblighi applicabili con il referente dell’ente e le [indicazioni AgID](https://www.agid.gov.it/it/design-servizi/accessibilita/linee-guida-accessibilita-pa.html).

## 3. Quali collegamenti mancano e come differenziarsi

| Ambito | Integrazione proposta | Alternativa se manca un feed affidabile |
|---|---|---|
| Beni culturali | Parco, Trigona, Morgantina/Aidone; contatti e avvisi di apertura/chiusura, guide accreditate. | Schede confermate dal referente e link all’originale; indicazione della data di verifica. |
| Mobilità | Fermate esatte concordate con i gestori, rientro compatibile con il parcheggio, linee urbane e collegamenti extraurbani/aeroporti verificati. | Contatto del vettore e orario PDF con validità dichiarata. Nessuna disponibilità inventata. |
| Eventi | Comune, Parco e organizzatori riconoscibili; proposta evento sottoposta a revisione, non pubblicazione libera. | Aggiornamento editoriale con fonte e gestione di rettifiche/annullamenti. |
| Servizi essenziali | Calendario farmacie con passaggio al nuovo anno; conferma sanitaria; schede verificate per carburante, bagni e ricariche. | Ricerca mappa dichiarata come tale e numero da chiamare. |
| Residenti | Sportelli e contatti comunali, rifiuti, segnalazioni, protezione civile: collegamenti ai servizi ufficiali. | Sezione curata di collegamenti, senza duplicare pratiche, SPID o dati personali. |
| Attività e commercio | Schede aggiornabili dal gestore tramite richiesta controllata, criteri trasparenti di inclusione e rettifica. | Modulo o contatto redazionale con verifica manuale. |
| Misurazione | Pagine consultate, dispositivi, provenienze aggregate, accessi ai servizi e clic sui contatti. | Report mensile senza identificare i visitatori; tracciare eventi aggiuntivi solo con configurazione appropriata. |

**Confronto verificato, non classifica di superiorità:**

| Servizio | Cosa offre già | Ruolo possibile di Experience |
|---|---|---|
| [Comune](https://www.comune.piazzaarmerina.en.it/) | Avvisi, uffici, servizi amministrativi, rifiuti e contatti; il calendario consultato non mostrava eventi. | Accesso semplice ai servizi originali e percorso turistico coordinato. Calendario vuoto non significa assenza di eventi in città. |
| [piazzaarmerina.org](https://www.piazzaarmerina.org/) | Ampio racconto storico/turistico, itinerari e utilità; gestore privato dichiarato e pagine legali. | Affidabilità dei dati operativi e itinerari pratici, senza copiare testi o foto. |
| [Parco regionale](https://parchiarcheologici.regione.sicilia.it/morgantina-villa-romana-casale/) e [Villa](https://www.villaromanadelcasale.it/) | Informazioni sui beni, biglietti, avvisi e contatti; riscontrati disallineamenti tra pagine. | Riepilogo comprensibile, fonte visibile e conferma delle informazioni discordanti. |
| Distretto Dea di Morgantina | Individuate notizie storiche sul portale; il sito segnalato non è risultato accessibile allo strumento. | Referente e operatività attuale **non confermati**; non proporre integrazioni attive come già disponibili. |
| [Piazza Smart City](https://www.piazzasmartcity.it/) | Presenta app, offerte, prenotazioni e ordini; transazioni non provate. | Differenziarsi con guida turistica accessibile dal browser e relazione Villa–città, valutando collaborazioni invece di duplicare tutto. |
| [Savit](https://www.savitautolinee.it/piazza-armerina-orari-e-percorso/) e [Ordine Farmacisti](https://www.ordinefarmacistienna.it/cittadino/) | Percorsi/orari urbani e documenti delle farmacie. | Accessi diretti e informazioni contestualizzate, con responsabilità della fonte riconoscibile. |

La proposta distintiva più credibile è: **“Dalla Villa alla città, cosa posso fare e come ci arrivo?”**, affiancata da **“Mi serve adesso”**. Proposta di accesso: pulsanti principali sempre raggiungibili, servizi fondamentali entro due azioni dove possibile; distinguere “Visito la città” e “Vivo qui”. È una scelta progettuale da approvare, non una funzione già sviluppata.

## 4. Interventi indispensabili

1. **Affidabilità:** confermare orari/prezzi/contatti e attribuire a ogni dato una fonte, un responsabile e una scadenza.
2. **Diritti e privacy:** registro immagini/licenze/autorizzazioni; identità del gestore; inventario dei tracciamenti; informativa e configurazione coerente prima della presentazione istituzionale.
3. **Accessibilità:** correggere i difetti rilevati, completare il collaudo WCAG 2.2 AA, includendo tastiera, zoom, focus, video/sottotitoli e tecnologie assistive. Non aggiungere dichiarazioni di conformità senza verifica.
4. **Funzioni e lingue:** eliminare le incongruenze “in arrivo”, scegliere il comportamento della ricerca e completare almeno le informazioni operative in inglese; poi le altre lingue approvate.
5. **Gestione:** separare sviluppo, anteprima approvata e destinazione finale; backup durevole e prova periodica di ripristino; responsabilità editoriale e procedura di pubblicazione.

## 5. Interventi facoltativi o successivi

Preferiti e itinerario salvato, guida stampabile/offline, PWA installabile, QR distinti per punti di distribuzione, pannello per esercenti, suggerimenti di visita per durata/interessi, dati strutturati turistici, eventuali audioguide. Un assistente AI, pagamenti, prenotazioni centralizzate e integrazione nel biglietto parcheggio richiedono un progetto e autorizzazioni separati: non sono prerequisiti dell’audit né vengono attivati.

## 6. Complessità e costi

**Stime di pianificazione, non preventivo né tempi garantiti.** Dipendono da risposte degli enti, diritti sulle foto, revisione delle traduzioni e collaudi. Il consumo o saldo dei crediti Work non è misurabile da questo audit.

| Pacchetto | Impegno tecnico/editoriale stimato | Costo diretto incrementale degli strumenti |
|---|---|---|
| P0: dati, tracciamenti, gestore, registro diritti, rilascio sicuro | 8–16 ore; conferme esterne escluse | Potenzialmente €0 con strumenti esistenti; eventuali licenze/consulenze da quotare. |
| P1: accessibilità, ricerca, navigazione, prestazioni e SEO di base | 16–28 ore, più verifiche specialistiche | Nessun nuovo abbonamento necessariamente richiesto; collaudo professionale da preventivare. |
| P2: lingue, gestione editoriale, statistiche, manuale e dimostrazione | 20–40 ore; revisione linguistica esterna esclusa | Dipende dalla soluzione scelta e da eventuali fornitori. |
| Manutenzione iniziale | 2–4 ore/settimana proposte, da misurare dopo un mese | Tempo redazionale; hosting e strumenti secondo i piani effettivi. |

Totale di orientamento: **44–84 ore**, senza ricostruzione del sito. Se si affidasse tutto a un professionista, un semplice esempio di budget a **€40/ora ipotetici**, non tariffa di mercato accertata, sarebbe €1.760–3.360, prima di imposte, diritti, traduzioni e consulenze. Il lavoro con gli strumenti già disponibili può evitare questo esborso, ma richiede comunque tempo e controllo.

Cloudflare documenta un piano Pages gratuito con limiti, tra cui 500 build/mese e una build alla volta; il consumo reale dell’account non è stato verificato. [Limiti Pages](https://developers.cloudflare.com/pages/platform/limits/). Una prima statistica aggregata può essere valutata con [Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/about/), presentato come gratuito: disponibilità e configurazione dell’account da verificare, nessuna attivazione eseguita. Un dominio personalizzato resta facoltativo e va quotato per registrazione **e rinnovo**; nessun acquisto necessario ora.

Per l’assessorato occorreranno poi: piano di manutenzione con referenti e scadenze, manuale operativo, dimostrazione con dati reali, proposta di indicatori aggregati e accordo che distingua proprietà del codice, licenze dei contenuti, gestione, account/dominio e uscita dal servizio. Non risultano ancora accordi che attribuiscano ufficialità comunale.

## 7. Piano di lavoro per priorità e condizioni di avanzamento

| Ordine | Risultato da ottenere dopo approvazione | Condizione per proseguire |
|---|---|---|
| **0 — già svolto per l’audit** | Baseline, lettura memoria, ramo locale e copia verificata dei file. | Conservare copia e rapporto; completare backup durevole/configurazione prima del prossimo rilascio. |
| **1 — P0** | Registro dati/diritti, risoluzione orari discordanti, gestore e tracciamenti chiariti. | Fonti confermate e decisioni su privacy/asset; nessuna promessa non verificata. |
| **2 — P1** | Difetti accessibili e di navigazione corretti; ricerca e accesso rapido ai servizi; immagini ottimizzate. | Test funzionali, tastiera, zoom, contrasto e dispositivi reali; confronto con l’aspetto approvato. |
| **3 — P2** | Inglese operativo, altre traduzioni, schede revisionabili e integrazioni affidabili. | Responsabile editoriale, fonti/scadenze e gestione delle eccezioni provate. |
| **4 — presentazione** | Statistiche aggregate dimostrabili, manuale e proposta per l’assessorato. | Verifica dei costi, diritti e responsabilità; approvazione esplicita del rilascio. |

**Raccomandazione:** approvare eventualmente il solo P0 come prossimo pacchetto; mantenere il resto come piano, non come sviluppo autorizzato.

## Limiti delle verifiche

- Inventariati **495 URL distinti nel DOM** dopo apertura dei cataloghi completi, di cui **373 esterni** e 124 ricerche Google Maps. Sono un inventario, **non 373 collegamenti tutti certificati funzionanti**. Le fonti principali sono state aperte e confrontate; non sono stati verificati individualmente tutti i siti commerciali, i numeri chiamando, le disponibilità o i percorsi sul territorio.
- Rilevati 42 indirizzi immagine distinti; i riferimenti locali esaminati esistono. Il caricamento di tutte le immagini esterne, i diritti e la correttezza archeologica delle ricostruzioni non sono certificati. La mappa Villa è dichiarata illustrativa, non ufficiale: non va usata come percorso tecnico/accessibile garantito.
- Controlli responsive a dimensioni browser, non su hardware fisico; mancano zoom 200/400%, screen reader e verifica WCAG completa. La riduzione movimento copre parte delle animazioni CSS, non risulta coordinata con tutte le animazioni e lo scorrimento.
- Nessun benchmark mobile su rete limitata, dati reali LCP/INP/CLS o punteggio Lighthouse. Non eseguito un penetration test né certificata l’assenza di vulnerabilità. La richiesta HTTP dall’ambiente di analisi è stata rifiutata; apertura con browser riuscita. Intestazioni di sicurezza e cache richiedono un controllo dedicato.
- Nei log browser osservati compaiono errori del collegamento all’estensione; non sono prova di un difetto applicativo. Nessuna nuova schermata di crash delle pagine osservata. Streaming video effettivo, sottotitoli e anteprima WhatsApp restano da collaudare.
- L’aggiornamento eventi avviene tramite controllo periodico e JSON, non tramite una connessione live universale. Il precedente automatismo è rimasto invariato; non sono state introdotte nuove attività pianificate.

**Conclusione operativa:** nessuna modifica al portale pubblico, nessuna nuova pubblicazione o servizio a pagamento. Audit e proposta consegnati; sviluppo fermo in attesa dell’approvazione di Fabio.
