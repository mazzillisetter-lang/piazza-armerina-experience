export const DirectionsInfo = () => (
  <div className="mt-3 flex-1 font-body text-[var(--cream)]/85" data-testid="villa-directions-info">
    <p className="text-base leading-relaxed">Contrada Casale, a circa 5 km dal centro di Piazza Armerina.</p>
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-relaxed">
      <li>Arrivando da Piazza Armerina sulla SP90, segui le indicazioni per la Villa Romana del Casale.</li>
      <li>Al bivio, <strong className="text-white">tieni la destra e scendi verso le barriere del parcheggio SGS</strong>.</li>
      <li>Lascia il veicolo nel parcheggio e prosegui lungo il percorso pedonale segnalato per la Villa.</li>
    </ol>
    <p className="mt-4 border-l-2 border-[var(--gold)] pl-3 text-sm leading-relaxed"><strong className="text-white">Attenzione al navigatore:</strong> non imboccare il ramo sinistro, con divieto d’accesso, sopra le barriere. Segui sempre la segnaletica presente sul posto.</p>
    <figure className="mt-4">
      <a href="/img/villa/bivio-ingresso-sgs-2026-11-04.jpg" target="_blank" rel="noreferrer" aria-label="Ingrandisci la foto del bivio e dei cartelli per la Villa Romana">
        <img src="/img/villa/bivio-ingresso-sgs-2026-11-04.jpg" alt="Bivio sulla SP90: cartello Villa Romana del Casale con freccia d’ingresso verso destra, parcheggio e barriere in discesa; segnale di divieto sulla strada a sinistra" loading="lazy" width="2016" height="908" className="h-auto w-full rounded-md border border-[var(--gold)]/20" />
      </a>
      <figcaption className="mt-2 text-xs leading-relaxed text-[var(--cream-dim)]">Il bivio da riconoscere · Foto SGS Parcheggi del 4 novembre 2026. Segui a destra il cartello «Villa Romana del Casale – Ingresso» verso parcheggio e barriere; non imboccare la strada a sinistra con il segnale di divieto. Tocca la foto per ingrandire.</figcaption>
    </figure>
    <p className="mt-3 text-xs leading-relaxed text-[var(--cream-dim)]">Indicazioni di accesso fornite dal gestore. Il collegamento alla mappa aiuta a trovare il parcheggio; verifica l’ultimo tratto con le indicazioni qui sopra.</p>
  </div>
);
