# Cronologia operativa
## 2026-11-03
- Letto il PRD esistente nel branch di lavoro.
- Verificata esistenza del repository, dei branch e del check Cloudflare relativo al commit 399ea78.
- Recuperati link di anteprima dal risultato Cloudflare: deploy riuscito il 2 novembre.
- Inizializzata memoria operativa versionata con memory.md, handoff.md, lessons.md e changelog.md.
- Nessuna modifica grafica in questa fase. Agenti e verifica visiva ancora da collaudare.

## Ripristino pubblicazione e primo coordinatore
- Rimosso il calendario inutilizzato e le due dipendenze che bloccavano npm; installazione e build locali riuscite.
- Cloudflare ha pubblicato 890e3da con successo; verificata risposta HTTP 200, Fabio conferma apertura della pagina.
- Aggiunti AGENTS.md e agents/coordinator.md: memoria iniziale, selezione strumenti, contratti di delega, controlli e chiusura della sessione.
- Aggiornato handoff allo stato verificato; quattro specialisti non ancora configurati. Nessuna variazione grafica in questa fase.

## Foto Ulisse e Polifemo
- Sostituita in anteprima la foto arancione Rino Porrovecchio con fotografia reale TyB CC BY 2.0; vecchio asset mantenuto.
- Nuovo asset locale inalterato, correzione CSS reversibile luminosità +2,5%, contrasto +3,5%, circoscritta alla singola foto.
- Credito, fonte, licenza e regolazione dichiarati. Configurato agents/images.md; controllo indipendente del candidato e build locale riusciti.
- Check Cloudflare 9d0f5cb riuscito; verificati nel browser foto caricata, dimensioni 1280x960, filtro isolato e resa desktop. Nessuna verifica mobile dichiarata.

## Orari stagionali automatici
- Fabio approva foto Polifemo.
- Configurati ruoli sviluppo, pubblicazione e qualità; primo incarico sviluppo/QA sugli orari.
- Sostituito placeholder card Orari con stagione corrente, apertura, ultimo ingresso, chiusura, prossimo cambio e dettagli delle due stagioni.
- Fonte orari del Parco e revisione statica03/11/2026; altre schede e foto preservate.
- 7 test logici passati, controllo indipendente favorevole.
- Build produzione compilata con successo.
- Deploy98fd4e0 riuscito; controllo browser desktop: orario invernale09/16/17 e cambio28marzo2027 corretti, fonte collegata e data statica. Revisione pubblicazione indipendente:13file attesi, main invariato, asset Polifemo conservati.

## Biglietti da fonti ufficiali
- Sostituito placeholder con ordinari14/7,minori18gratis, requisiti e fonti.
- Aggiunti dettagli supplemento mostra e cumulativi da tariffario2025 con data/condizioni trasparenti.
- Orari automatici, foto Polifemo e altre schede invariati.
- Build produzione riuscita e revisione indipendente contenuti favorevole.
- Cloudflare c44ca3f success; browser desktop verificati card, dettagli espandibili e link fonti, screenshot acquisito.

## Parcheggio SGS
- Scheda subito dopo Biglietti: tariffe auto/moto/camper visibili; orari, minibus/bus e regola camper nei dettagli. Fonte cartelli forniti da Fabio, data03/11/2026. Nessuna pubblicazione delle schermate WhatsApp personali.

Verifica03/11/2026: build produzione riuscita; revisione indipendente sui due cartelli favorevole. Commit applicativo1eb8fee688ec01e152b9f8a1059323bed627fdd5, check Cloudflare completed/success. Browser desktop: scheda compatta leggibile, dettaglio aperto/chiuso e tutti i valori verificati. Anteprima https://d2ea8057.piazza-armerina-experience.pages.dev/villa-romana-del-casale#visita . Mobile non verificato.

## Navetta stagionale
- Recuperato prospetto primario sul sito Villa; evitata locandina generata con sesta andata mancante.
- Scheda con periodo, fermate, tariffe, tabelle complete espandibili, chiamata e prenotazione; altre schede invariate.

Verifica03/11/2026: build produzione riuscita, revisione indipendente delPDF favorevole. Commit7b318b99b617c7dbeca21b3c51d4d513f2d699fd Cloudflare completed/success. Browser desktop: periodo/prezzi, 12corse nelle due tabelle, espansione/chiusura, tel ePDF verificati; screenshot compatto e tabelle. URL https://112c01f2.piazza-armerina-experience.pages.dev/villa-romana-del-casale#visita . Mobile non verificato.

## Accessibilità
- Aggiunti contatti diretti URP, indicazioni per concordare percorso e servizi, requisiti gratuità in dettaglio.
- Distinta Carta servizi storica da disponibilità effettiva da confermare. Altre schede preservate.

Verifica completata03/11/2026: build produzione riuscita; commit92ad9d66af9488719f4ffe875dd298ecbcb80f0d Cloudflare completed/success. Browser desktop verificati testi, linkURP/tel/mailto/fonti e dettaglio gratuito aperto/chiuso da tastiera. Screenshot acquisito. URL https://8ebcd9fb.piazza-armerina-experience.pages.dev/villa-romana-del-casale#visita . Mobile non verificato. Revisione indipendente non completata: specialista fermato da limite utilizzo; controllo contenuti svolto dal coordinatore sulle fonti ufficiali già consultate. Prossimo contenuto: Come arrivare, con attenzione al navigatoreSP90 e ingresso corretto dalle barriere, solo con istruzioni pertinenti.

## Come arrivare
- Sostituito placeholder con percorsoSP90 verso barriereSGS, avviso ramo sinistrovietato, fotografie reali utente recuperate.
- LinkMaps mirato a ricerca parcheggio senza coordinate inventate.

Verifica03/11/2026: build produzione riuscita, commit86eb1025a87123ace456931769bd1d4cd5463007 Cloudflare completed/success. Browser desktop controllati istruzioni, avviso, immagini caricate1445x924 e691x1536, dettaglio cartello aperto/chiuso e link immagine originale. BlobGit delle due immagini identici agli originali. URL https://e71cb1cf.piazza-armerina-experience.pages.dev/villa-romana-del-casale#visita . Screenshot percorso/foto acquisito. Mobile e instradamento effettivoGoogle non verificati; Maps è ricerca esplicitamente accompagnata dall’avviso bivio. Revisione svolta dal coordinatore; nessuna nuova esecuzione specialisti in questo incarico.

## Video nella home
- Sostituito avviso disponibileabreve conplayerYouTube sgfgMC4Y-Wc in dialog.
- Chiusuraaccessibile, proporzioni16:9, fallbackYouTube e traduzioni5lingue.

Stato03/11/2026: commitvideo956c94c50350cd985e7e2c6b208848ad4c2e4eb4 + correzionedurata9a0b53b68955f68bdbb6a625cafe6e4e91c50c0a salvati sulbranch. Buildlocale definitiva riuscita. Anteprima managed http://terminal.local:4173/ da buildin /workspace/scratch/home-video-preview/dist: dialogaperto, iframeIDsgfgMC4Y-Wc corretto, titoloYouTubePiazzaArmerinadall’alto, durata123sec osservata; sottotitoloDue minuti. ChiusuraX/Escape rimuoveiframe; ritorno focus verificato dopoX. Playercarica metadata ecomandi, ma streamrimane0:00 readyState0 nelbrowsercloud: riproduzione effettiva NON confermata. Viewportdesktop verificata; mobile noncollaudato. Cloudflare dei duecommit resta in_progress senza errore dopo attesa prolungata; aliasbranch servivaancora vecchiopulsante. NON dichiarare pubblicato. Prossimopasso: leggere check-runs9a0b53b finoesitoterminale, verificarehomepubblicata e video. Screenshot locale /workspace/scratch/home-video-anteprima.jpg. Nessuna nuovaesecuzione specialisti.

## Home smartphone, tablet e PC
- Conservati panorama, mosaico, parole decorative e fiori con proporzioni dedicate ai piccoli schermi.
- Migliorata leggibilità tablet e corretto menu a 320 px.
- Build produzione e controllo dimensioni nel browser riusciti; prove su hardware reale non effettuate. Pubblicazione Cloudflare da verificare sul commit.

## Pulsanti a piede foto
- Abbassati insieme CTA e video nella composizione della home da768px, con distanza dal fondo adattiva; smartphone invariato.
- Build produzione e verifica browser928/1280/390px riuscite.
- Verificata pubblicazione precedente8447467 e apertura player nella home pubblica; riproduzione stream non confermata nel browser remoto.

## Proporzioni testo home PC
- Ingranditi titolo, corsivo e descrizione nella sola versione da1024px; ampliata la colonna sinistra.
- Posizione approvata dei pulsanti preservata. Build produzione e controllo browser1280px riusciti.

## Panorama completo su smartphone
- Foto mobile nel rapporto originale1672:941, senza ritaglio verticale; testo sopra e mosaico ridotto sotto il panorama.
- Parole decorative e pulsanti disposti nella fascia inferiore; pulsante più compatto sotto360px.
- Regole tablet e PC preservate.
