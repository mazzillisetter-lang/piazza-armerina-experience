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
