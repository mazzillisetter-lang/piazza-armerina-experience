# Dove mangiare — 4 novembre 2026

## Risultato
Pagina /dove-mangiare con 43 attività individuate online: 5 zona Villa, 14 centro e vie vicine, 20 in città e 4 campagna/dintorni. Non è un censimento completo, una classifica o una verifica di apertura in tempo reale.

Il layout riprende ricerca, zona, nome, descrizione e contatti del vecchio index.html su main, restilizzati in nero/oro con catalogo color pergamena. Filtri: ristoranti, pizza, pranzo veloce/rosticceria, panifici, dolci/gelati, bar/caffè, aperitivo. Ricerca per nome, indirizzo e tipo; risultati combinati con la zona. Prime 18 schede, ulteriori gruppi di 18 con Mostra altri; la ricerca copre sempre tutte le 43 attività.

## Contatti e fonti
I dati pubblicati sono in frontend/src/content/food.json. Fonti e limiti della ricerca per singolo candidato sono conservati in docs/food-research.json.
- Undici numeri di telefono riscontrati sui siti/pagine delle attività; gli altri recapiti diretti non vengono mostrati.
- Un solo WhatsApp: SUD, pubblicato espressamente sul sito dell'attività. Non costruire WhatsApp dai numeri cellulari.
- Google Maps apre una ricerca mirata per nome e indirizzo, non un place_id verificato o un elenco Google importato. Il pulsante consente di consultare foto, recapiti e indicazioni della scheda individuata da Google.
- Siti ufficiali e prenotazione diretta SUD collegati dove riscontrati. Il contatto Al Ritrovo è quello generale dell'hotel.
- Non importati recensioni, voti, prezzi o orari. Nessuna chiamata, prenotazione o messaggio inviato alle attività.

## Decisioni editoriali
- Preservati Memory Food, Imperial, Trinacria, La Ruota e Diana, già presenti nella prima raccolta. Siciliamo aggiunto per la zona Villa; non inventati quattro nomi di chioschi.
- Da Elide e La Chiave di Piazza deduplicati tra ristoranti e pizzerie. Panificio Barresi è distinto dalla Pasticceria Gelateria Barresi.
- MIRA incluso; I Baroni allo stesso indirizzo escluso per evitare una possibile vecchia denominazione duplicata.
- Arancino di Venere escluso: è ad Aidone.
- Quattro candidati fondati soltanto su un elenco generico Reteimprese non inclusi. Panifici Infurna/Giannone e Peccati di Gola restano in verifica nell'audit.
- Non collegato il dominio storico Officina della Pizza: reindirizzava a contenuti estranei. Vecchi contatti Europa e Diana non riutilizzati.
- Civici omessi dove le fonti differiscono (es. La Locanda, Tavernetta, Disìu, Caffè del Centro, Panificio delle Meraviglie). Zone orientative; nessuna distanza a piedi o garanzia accessibilità.

## Fotografie
Fotografie gastronomiche reali di categoria, non foto dei piatti delle attività. Le foto dei locali sono raggiungibili sui collegamenti Google e sui siti delle attività. Non copiate immagini di Google, recensioni o gallerie ufficiali senza licenza documentata.

1. Cannoli sicily.jpg — AnnaVie — CC0: https://commons.wikimedia.org/wiki/File:Cannoli_sicily.jpg
2. Noto, Cavatelli pomodoro ricotta salata.jpg — Guillaume Flambeau Von Uslar — CC BY 2.0: https://commons.wikimedia.org/wiki/File:Noto,_Cavatelli_pomodoro_ricotta_salata.jpg
3. Arancini (2009).jpg — Jeffrey_Allen — CC BY 2.0: https://commons.wikimedia.org/wiki/File:Arancini_(2009).jpg

File locali WebP proporzionali fino a 1600px; fonti e licenze in foodPhotos.json e didascalie visibili. Luminosità/contrasto CSS per pasta 1.08/1.03, altre 1.025/1.025. Foto originali preservate alle fonti e nella cartella di ricerca della sessione; nessuna ricostruzione. Le due miniature sono ritagliate solo nella presentazione CSS; versione intera resta nel file. Crediti indicano trasformazioni.

## Collegamenti e lingue
Home: fascia categorie e scheda Esplora. Menu desktop e mobile: voce Dove mangiare. Altre sezioni preservate. CTA tradotta nelle cinque lingue; pagina in italiano con avviso nelle altre lingue, come Villa/Centro/Palio.

## Verifica
Audit dati: 43 ID univoci, fonti HTTPS, zone valide e prefissi telefonici italiani. Build e controllo browser da completare prima di dichiarare pubblicazione.

Verifica 04/11/2026: build produzione riuscita. Browser desktop e iframe320/390/768px senza overflow; tre foto caricate. FiltroVilla5locali, ricercaMemory1, ricerca senzaaccentiDisiu1, ricercaassente0 e ripristino43. Caricamento progressivo18→36→43 verificato. SUD: tel,WhatsApp,Google,sitoufficiale,prenotazione presenti e conURLattesi; nessunachiamata/prenotazione eseguita. Smartphone: foto anticipata sottoiltitolo, primaimmaginecirca452pxa390. Revisioneindipendente dati favorevole con nota indirizzo condivisoNovecento/Trombino, senza prova diduplicazione; SUDricontrollatodalcoordinatore. Nessun test suhardwarefisico.
