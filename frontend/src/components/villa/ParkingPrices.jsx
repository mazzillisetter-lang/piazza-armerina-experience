const RATES = [
  ["Auto", "2,00 €", "1,00 €", "8,00 €"],
  ["Moto", "1,50 €", "0,60 €", "5,00 €"],
  ["Camper", "5,00 €", "1,50 €", "10,00 €"],
];

export const ParkingPrices = () => (
  <div className="mt-3 flex-1 font-body text-[var(--cream)]/85" data-testid="villa-parking-prices">
    <p className="text-base text-[var(--gold-soft)]">Villa Romana del Casale · SGS Parcheggi</p>
    <dl className="mt-3 divide-y divide-[var(--gold)]/20">
      {RATES.map(([vehicle, first, next, max]) => (
        <div key={vehicle} className="py-2">
          <div className="flex items-baseline justify-between gap-3 text-lg">
            <dt>{vehicle}</dt>
            <dd className="font-bold text-white">{first} <span className="text-sm font-normal">prima ora</span></dd>
          </div>
          <dd className="mt-1 text-sm leading-relaxed">Poi {next} per ogni ora o frazione · massimo {max}</dd>
        </div>
      ))}
    </dl>
    <p className="mt-3 text-sm leading-relaxed">Auto, moto e camper: dopo il pagamento hai <strong className="text-white">25 minuti per uscire</strong>.</p>
    <details className="mt-4 border-t border-[var(--gold)]/20 pt-3 text-sm leading-relaxed" data-testid="parking-hours-details">
      <summary className="cursor-pointer text-[var(--gold-soft)]">Orari e altre tariffe</summary>
      <p className="mt-2">Tutti i giorni. <strong>Estate:</strong> a pagamento 08:45–18:00, uscita entro le 19:00. <strong>Inverno:</strong> a pagamento 08:45–16:00, uscita entro le 17:00.</p>
      <p className="mt-2">Il periodo estivo inizia l’ultima domenica di marzo; quello invernale l’ultima domenica di ottobre.</p>
      <p className="mt-2">Minibus fino a 19 posti: <strong>20,00 € al giorno</strong>. Autobus: <strong>30,00 € al giorno</strong>.</p>
      <p className="mt-2">Camper: sosta consentita solo di giorno, dalle 08:45 fino alla chiusura al pubblico del sito.</p>
    </details>
    <p className="mt-4 text-sm text-[var(--cream-dim)]">Fonte: tariffario e avviso di uscita SGS Parcheggi.</p>
  </div>
);
