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

## Tariffe — criterio di pubblicazione
Usare fonti ufficiali e distinguere ordinari, supplementi mostre e cumulativi. Al03/11/2026: homeVilla14/7, regionale mostra17/10; quest'ultima condizionale. Cumulativi da PDF2025 con anno dichiarato e conferma in biglietteria. Requisiti ridotto collegati al Parco, non inventare soglie età quando le pagine differiscono.

## Parcheggio SGS
Tariffe e orari dal cartello e avviso fotografati forniti da Fabio il03/11/2026. Auto2+1max8, moto1,50+0,60max5, camper5+1,50max10; supplementi per ora successiva o frazione. Minibus max19posti20/giorno, bus30/giorno. Dopo pagamento25min uscita solo auto/moto/camper. Estate08:45–18uscita19; inverno08:45–16uscita17, ultime domeniche marzo/ottobre. Camper solo diurno. Non attribuire al Comune questi dati né inventare metodi di pagamento/durata dei massimali.

## Navetta stagionale
Fonte PDF primario Villa CARTELLO-ORARI-bus-navetta.pdf (uploads/2025/05), consultato03/11/2026.1aprile–30ottobre; sei corse per direzione. Singola1,50€, A/Rgiornata2,50€, SA.DA. Tours3664448128, ogni corsa15min prima; preferibilmente45min ultima corsa da istruzioneFabio. Solo chiamata. La locandina grafica30ottobre omette sesta andata: usarePDF. Non promettere servizio invernale o conferma futura automatica.

## Accessibilità Villa
Carta servizi storica indica accesso facilitato attraverso personale; non prova dotazioni attuali o piena fruibilità autonoma. Scheda invita a concordare percorso, ausili e bagni conURP0935687667, urpmuseo.casale@regione.sicilia.it. Gratuitàdocumentata per disabilità e familiare/accompagnatore nei requisitiParco. Nessuna garanzia di navetta accessibile, ausili disponibili o bagni adattati.

## Come arrivare — ingressoSGS
Arrivando da PiazzaArmerinaSP90: tenere destra/discesa verso barriere, evitare ramo sinistro superiore con divieto. Foto utente28ottobre recuperate1000147565.jpg(cartello) e image(20261028-091227).png(StreetViewnov2024). Originali conservati in public/img/villa; dataStreetView esplicita, attribuzioni integre. GoogleMaps ricerca parcheggio, non promessa itinerario corretto.

## Video home
FabiofornisceYouTube sgfgMC4Y-Wc per pulsanteGuarda il video / Un minuto di emozioni. DialogRadix responsive coniframeyoutube-nocookie montato soloaprendo; nienteautoplay, chiusuraunmountfermariproduzione, linkYouTubefallback. NoncambiarevideoVillaQhFTY7m4xL4.

Durata osservata nelplayer123secondi: sottotitolo aggiornato aDue minuti di emozioni nelle5lingue.

## Home su tre dimensioni
Fabio vuole preservare panorama, mosaico, parole e fiori della home PC anche su smartphone e tablet. Adattamento CSS implementato senza cambiare gli asset; collaudo browser a larghezze simulate, non dispositivi fisici. Dettagli e limiti in docs/responsive-home.md.

## Preferenza home PC — 03/11/2026
I pulsanti Inizia il tuo viaggio e Guarda il video devono stare vicini al piede della foto, lasciando libera la Cattedrale. Ancorarli al fondo nella composizione orizzontale; preservare il comportamento smartphone.

Fabio ha approvato i pulsanti a piede foto. Il blocco testo PC deve avere più presenza sulla sinistra: titolo, frase in corsivo e descrizione ingranditi insieme in proporzione, mantenendo la Cattedrale visibile.

## Correzione home smartphone — 04/11/2026
Fabio rifiuta il taglio verticale del panorama: devono vedersi piazza intera, Cattedrale e Palazzo Trigona con le sette finestre. Mostrare la foto completa nel suo rapporto originale sul telefono; mosaico più piccolo e separato dagli edifici. La composizione desktop approvata resta il riferimento stilistico.

## Menu smartphone orizzontale
Fabio vuole la fascia del menu fissa trasparente, anche scorrendo, per lasciare visibile la foto sottostante. Rimuovere anche la sfocatura in questo orientamento. Il pannello del menu quando aperto mantiene sfondo leggibile.

## Foto bivio aggiornata — 04/11/2026
Usare la nuova foto del mattino fornita da Fabio per Come arrivare: cartelloVilla, divieto ramo sinistro e parcheggio/barriere visibili insieme. Una sola foto intera e ingrandibile sostituisce le precedenti StreetView e verticale; originale conservato senza filtri o ricostruzioni.

## Centro storico — 04/11/2026
Fabio richiede testi brevi e documentati perDuomo ePalazzoTrigona, foto reali curate e organizzazione di vicoli/chiese/palazzi. Implementata pagina/centro-storico nello stile nero/oro, due schede principali, quattro tappe suggerite e dettagliFundrò/PalazzoCittà/SanGiovanni/Teatini. FotoCommons con crediti/licenze/date e ingrandimento, nessun ritocco o ricostruzione. Fonti e scelte in docs/centro-storico.md. Non confondere una proposta editoriale di passeggiata con un percorso misurato/accessibile garantito.

## Panoramica Centro storico — 04/11/2026
Fabio sceglie la veduta notturna fornita1483588_gd.jpg al posto della panoramica iniziale, per differenziarla dalla home. Originale integrale, filigrana conservata; home e schedeDuomo/Trigona invariate.

## Miglioramento foto — 04/11/2026
Fabio richiede sempre valorizzazione fotografica prima di inserire le foto: luce, contrasto e colori curati, conservando architettura e dettagli reali. Sulla panoramica notturna applicato filtro CSS locale brightness1.08 contrast1.10 saturate1.12. Prova generativa scartata perché ricostruiva dettagli. Originale e filigrana preservati.

## Nuova panoramica tramonto — 04/11/2026
Fabio preferisce il nuovo scatto400x320, fornito con filenameb9c92bc0ab95f840cf637c37c7b9a7978a7b430d9a9884cad98189ad75c7df25.jpg, alla veduta notturna. Usare originale integrale con brightness1.02 contrast1.04 saturate0.94: colori già intensi, evitare eccesso. Non inventare dettagli tramite upscaling generativo. Autore/data/licenza non forniti.

## Scelta finale panorama Centro storico — 04/11/2026
Fabio sceglie definitivamente Piazza-Armerina-2.webp1217x694, migliore inquadratura/definizione, e chiede di fermarsi dopo la sostituzione. Asset centro-storico-panorama.webp originale; stesso trattamentoCSS leggero brightness1.02 contrast1.04 saturate0.94.


## Palio — 04/11/2026
Fabio richiede sezionePalio stagione2027, usando foto/bandiere già scelte inGit. Recuperate6immagini dalmain storico, integrate come elaborazioni artistiche/graphichelmamente nonufficiali, compresseWebP. Date12–14agosto indicate tradizionali e2027daconfermare; dettaglioperativi noninventati. Fonti e limiti diritti in docs/palio-2027.md.


## Aggiornamento automatico Palio — 04/11/2026
Fabio autorizza aggiornamento pagina dai comunicati ufficiali delComune. Implementato feedJSON2027 con stato/date/notizie/fonti/data verifica, frontend legge alcaricamento eogni5min convalidazione eultimo dataset valido. Controllo fonti giornaliero previsto: nonpush istantaneo. Schema/procedura in docs/palio-auto-updates.md; stato iniziale pending senza dati inventati. Attivazione automazione e verifica deploy da completare.


## Dove mangiare — 04/11/2026
Fabio richiede ricerca ampia dei locali di Piazza Armerina, layout funzionale recuperando il precedente, foto curate e contatti. Implementata pagina/dove-mangiare con43schede, filtri per tipo/zona, ricerca su tutto ilcatalogo e caricamento progressivo.11telefoni da pagine delleattività,1WhatsAppSUD esplicito; altrimenti GoogleMapsfoto/contatti. FotografiegastronomicheCommons conlicenze documentate, dichiarate illustrative e valorizzateCSS; nessunafotoinventatadeilocali. Fonti/limiti in docs/dove-mangiare.md e food-research.json. Build/pubblicazione/collaudo da verificare sulcommitfinale.


## Dove dormire — 04/11/2026
Fabio chiede di proseguire con ricerca e sezione Dove dormire. Raccolte 41 strutture con fonti: hotel, B&B, camere/dimore, case/appartamenti e strutture rurali. Ventotto telefoni da pagine delle attività, quattro WhatsApp espliciti, quattordici link a disponibilità/richiesta/prenotazione senza prezzi o disponibilità inventati. Ricerca, filtri tipo/zona, caricamento progressivo e collegamenti da home/menu. Foto reale notturna Stefano Li Moli CC BY-SA 3.0, intera, ritocco CSS lieve; non foto delle camere. Fonti e limiti in docs/dove-dormire.md e stay-research.json. Build e pubblicazione da verificare sul commit finale.
