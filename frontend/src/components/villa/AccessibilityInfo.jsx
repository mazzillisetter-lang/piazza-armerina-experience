const RULES = "https://parchiarcheologici.regione.sicilia.it/morgantina-villa-romana-casale/norme-accessi-gratuiti-e-ridotti/";
const CHARTER = "https://www.villaromanadelcasale.it/wp-content/uploads/2021/07/carta_qualita_dei_servizi.pdf";

export const AccessibilityInfo = () => (
  <div className="mt-3 flex-1 font-body text-[var(--cream)]/85" data-testid="villa-accessibility-info">
    <p className="text-lg leading-relaxed">Per una visita in sedia a rotelle o con mobilità ridotta, concorda il percorso con il personale della Villa.</p>
    <p className="mt-3 text-base leading-relaxed">La Carta dei servizi del Parco indica accesso facilitato con il supporto del personale. Prima della visita, verifica ingressi utilizzabili, ausili disponibili e servizi igienici adatti alle tue esigenze.</p>
    <a href="tel:+390935687667" className="mt-4 inline-flex rounded-lg border border-[var(--gold)]/40 px-3 py-2 text-base text-[var(--gold-soft)] hover:text-white" data-testid="accessibility-call">Chiama l’URP · 0935 687667</a>
    <a href="mailto:urpmuseo.casale@regione.sicilia.it" className="mt-2 block break-words text-sm text-[var(--gold-soft)] underline hover:text-white" data-testid="accessibility-email">urpmuseo.casale@regione.sicilia.it</a>
    <details className="mt-4 border-t border-[var(--gold)]/20 pt-3 text-sm leading-relaxed" data-testid="accessibility-admission-details">
      <summary className="cursor-pointer text-[var(--gold-soft)]">Ingresso gratuito e accompagnatori</summary>
      <p className="mt-2">L’ingresso è gratuito per i visitatori con disabilità e per un familiare oppure un accompagnatore appartenente a servizi di assistenza socio-sanitaria, secondo le condizioni del Parco. Presenta in biglietteria la documentazione richiesta.</p>
      <a href={RULES} target="_blank" rel="noreferrer" className="mt-2 inline-block text-[var(--gold-soft)] underline hover:text-white">Consulta i requisiti ufficiali</a>
    </details>
    <a href={CHARTER} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-[var(--gold-soft)] underline hover:text-white">Carta dei servizi del Parco</a>
  </div>
);
