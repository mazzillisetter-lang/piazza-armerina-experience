# PRD — Piazza Armerina Experience

## Original problem statement
Voglio realizzare un sito web turistico premium chiamato **Piazza Armerina Experience**, dedicato alla città di Piazza Armerina, in Sicilia, e alla Villa Romana del Casale. Moderno, elegante, emozionante, responsive, multilingua. Stile cinematografico, caldo, raffinato: oro, nero, crema, tramonto siciliano; titoli eleganti, corsivi decorativi, foto grandi e nitide, animazioni leggere.
Homepage: panorama originale dell'utente (Cattedrale, Palazzo Trigona con sette finestre) interamente visibile e nitido, senza ricostruzioni/zoom/ritagli; a destra il mosaico originale della Villa Romana del Casale. Titolo "Piazza Armerina" / "Un'esperienza che ti resta nel cuore". Sotto: navigazione visiva verso Villa Romana del Casale, centro storico, Palio dei Normanni, dove mangiare, dove dormire, natura e itinerari, eventi, prodotti tipici, mappe e navette. Iniziare SOLO dalla homepage per approvazione. Non inventare foto di monumenti/mosaici. Non pubblicare su dominio definitivo senza approvazione.

User choices: lingue IT/EN/DE/FR/ES; schede senza foto (icone, numeri, tipografia); nessun modulo newsletter; nessuna funzionalità extra.

## Architecture
- React frontend only (static homepage), framer-motion + lenis. Assets saved in /app/frontend/public/img (panorama.png 1672x941, mosaico.jpg 660x343).
- i18n in src/i18n.js; components in src/components/site/.

## Implemented (2026-11-01)
- Header with SVG logo (dome mark, also favicon), 5-language switcher (saved in localStorage)
- Hero: masked line reveal title, Pinyon Script tagline, panorama full uncropped (w-full h-auto), mosaic card on right with subtle 3D tilt, parallax roman numeral
- Slow gold editorial marquee, cream intro section, 9-card bento (4x3 grid), footer with "anteprima in attesa di approvazione"

## Update (2026-11-01) — Rebuild from user reference screenshot
- Hero rebuilt as HTML/CSS: panorama full (72vw, natural ratio, no crop) with title/tagline/lead/CTA/video button overlaid on left (xl+); mosaic panel on right (28vw) with cursive words Storia/Arte/Natura/Sapori/Persone and decorative bougainvillea (AI-generated decorative flowers, not monuments)
- Header: logo, 7 nav links, search (toast "in arrivo"), language dropdown with flags, gold hamburger menu panel
- Parchment band with 9 clickable categories (lucide icons); Intro section now parchment
- Fonts: Playfair Display, Crimson Pro, Great Vibes
- Placeholders: "Guarda il video" and search show "disponibile a breve" toast

## Update (2026-11-01) — Pagina Villa Romana del Casale
- Route /villa-romana-del-casale (react-router), linked from homepage band (Villa) and Explore card
- Sections: hero (photo placeholder), Storia + "Lo sapevi che", 7 mosaic cards, percorso (8 steps + official map placeholder), Organizza la visita (PRACTICAL in src/content/villa.js, official links), Dopo la Villa
- Photos: 4 Wikimedia Commons images with attribution (Grande Caccia PD, Bikini CC BY 2.5, Polifemo CC BY-SA 2.0, Piccolo Circo CC BY-SA 4.0) + user's mosaic (scena erotica); Terme, Scene mitologiche, hero panorama = placeholders
- Multilingual: UI labels in 5 langs; long texts IT only (fallback + note banner)

## Backlog
- P0: user approval of homepage design
- P1: build the 9 section pages; replace card placeholders with user's photos
- P2: maps, shuttle timetables, local service links

## Update — 2026-11-04: Centro storico
Pagina/centro-storico con fotoCommons reali,Duomo ePalazzoTrigona come schede principali, passeggiata suggerita e fonti. Link daHome(CategoryBand,Explore) eDopoVilla. TestiIT con notafallback nelle altre lingue, coerente conVilla. Fotografie intere, nessuna ricostruzione; crediti/licenze/date inpagina.
