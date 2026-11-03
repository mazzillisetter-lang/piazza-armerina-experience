import { Camera } from "lucide-react";

export const PhotoSlot = ({ photo, alt, label, className = "", testId }) =>
  photo ? (
    <figure className={`relative m-0 overflow-hidden bg-[#1a120c] ${className}`} data-testid={testId}>
      <img src={photo.src} alt={alt} style={photo.displayFilter ? { filter: photo.displayFilter } : undefined} loading="lazy" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]" />
      <figcaption className="absolute bottom-0 inset-x-0 px-3 py-1.5 text-[0.72rem] font-body italic text-white/90 bg-gradient-to-t from-black/70 to-transparent">
        {photo.page ? <a href={photo.page} target="_blank" rel="noreferrer" className="hover:text-[var(--gold-soft)]">{photo.credit}</a> : photo.credit}
        {photo.licenseUrl && <> · <a href={photo.licenseUrl} target="_blank" rel="noreferrer" className="hover:text-[var(--gold-soft)]" aria-label="Licenza della fotografia">Licenza</a></>}
      </figcaption>
    </figure>
  ) : (
    <div className={`relative grid place-items-center text-center border border-dashed border-[var(--gold)]/60 bg-[radial-gradient(circle_at_50%_40%,rgba(217,174,95,0.18),transparent_70%)] ${className}`} data-testid={testId}>
      <div className="px-6">
        <Camera className="w-9 h-9 mx-auto text-[var(--gold)]" strokeWidth={1.3} />
        <p className="mt-3 font-display italic text-lg text-[var(--gold-soft)]">{label}</p>
      </div>
    </div>
  );
