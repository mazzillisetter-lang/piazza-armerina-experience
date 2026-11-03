# Home responsive — 3 novembre 2026

Richiesta Fabio: conservare la composizione della home PC anche su tablet e smartphone, adattando panorama, mosaico, parole decorative e fiori.

## Modifiche
- Hook CSS dedicati a testo, azioni e parole del mosaico.
- Tablet 768–1023 px: hero più alta, testo leggibile, mosaico ampio e pulsanti con ritorno a capo.
- Smartphone sotto 768 px: hero alta, mosaico e parole visibili, dettagli floreali riposizionati; menu corretto anche a 320 px.
- Regole desktop da 1024 px preservate; nessuna sostituzione di fotografie.

## Verifiche
Build produzione `npm run build` riuscita; `git diff --check` passato.
Browser cloud con iframe same-origin a dimensioni definite: non dispositivi fisici né Safari iOS.
Home controllata a 320, 390, 430, 640, 768, 1024 e 1280 px; nessuna eccedenza orizzontale della pagina osservata. Menu mobile aperto/chiuso e dialog video verificati; a 320 px il dialog rientra nella larghezza disponibile e la chiusura rimuove il player. La riproduzione effettiva del flusso YouTube resta non confermata nel browser cloud.
Schede pratiche Villa a 390/768/1280 px: rispettivamente una/due/tre colonne; tabelle navetta entro i contenitori, sei righe per direzione.
Screenshot locali di controllo: /workspace/scratch/home-smartphone-390.jpg, /workspace/scratch/home-tablet-768.jpg, /workspace/scratch/home-pc-1280.jpg. Non sono asset del sito.

## Pubblicazione
Modifiche destinate esclusivamente al branch armerina-experience-20261101. Main invariato. All'avvio di questo incarico le precedenti build Cloudflare del video risultavano ancora in_progress: il successo locale non equivale a pubblicazione online verificata. Consultare il check del commit responsive prima di dichiararlo online.
