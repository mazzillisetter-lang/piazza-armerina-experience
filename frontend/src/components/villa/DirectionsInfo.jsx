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
      <a href="/img/villa/bivio-sp90-streetview-2024.png" target="_blank" rel="noreferrer" aria-label="Ingrandisci la vista del bivio sulla SP90">
        <img src="/img/villa/bivio-sp90-streetview-2024.png" alt="Bivio sulla SP90 arrivando da Piazza Armerina: la strada per il parcheggio scende sulla destra" loading="lazy" width="1445" height="924" className="h-auto w-full rounded-md border border-[var(--gold)]/20" />
      </a>
      <figcaption className="mt-2 text-xs leading-relaxed text-[var(--cream-dim)]">Il bivio da riconoscere · Google Street View, novembre 2024. Immagine condivisa dal gestore; tocca per ingrandire.</figcaption>
    </figure>
    <details className="mt-3 text-sm leading-relaxed" data-testid="directions-sign-details">
      <summary className="cursor-pointer text-[var(--gold-soft)]">Vedi il cartello con la direzione corretta</summary>
      <figure className="mt-3">
        <a href="/img/villa/ingresso-sgs-cartello.jpg" target="_blank" rel="noreferrer" aria-label="Ingrandisci la fotografia del cartello al bivio">
          <img src="/img/villa/ingresso-sgs-cartello.jpg" alt="Cartello Villa Romana del Casale con freccia Ingresso 100 metri verso destra e segnale di divieto sul ramo sinistro" loading="lazy" width="691" height="1536" className="mx-auto max-h-80 w-full rounded-md object-contain" />
        </a>
        <figcaption className="mt-2 text-xs text-[var(--cream-dim)]">Foto fornita da SGS Parcheggi: segui la freccia verso destra. Tocca per ingrandire.</figcaption>
      </figure>
    </details>
    <p className="mt-3 text-xs leading-relaxed text-[var(--cream-dim)]">Indicazioni di accesso fornite dal gestore. Il collegamento alla mappa aiuta a trovare il parcheggio; verifica l’ultimo tratto con le indicazioni qui sopra.</p>
  </div>
);
