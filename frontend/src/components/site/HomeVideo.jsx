import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export const HomeVideo = ({ t, children }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>{children}</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/85" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] w-[92vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[var(--gold)]/40 bg-[#17100b] p-4 text-[var(--cream)] shadow-2xl sm:p-6" data-testid="home-video-dialog">
        <Dialog.Title className="pr-10 font-display text-xl font-bold sm:text-2xl">Piazza Armerina · {t.video}</Dialog.Title>
        <Dialog.Description className="mt-1 pr-10 font-body text-base text-[var(--cream-dim)]">{t.videoSub}</Dialog.Description>
        <Dialog.Close aria-label={t.videoClose} className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full text-[var(--gold-soft)] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]" data-testid="home-video-close"><X className="h-6 w-6" /></Dialog.Close>
        <div className="mt-4 aspect-video overflow-hidden rounded-md bg-black">
          <iframe src="https://www.youtube-nocookie.com/embed/sgfgMC4Y-Wc?rel=0" title="Piazza Armerina — video" className="h-full w-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" data-testid="home-video-player" />
        </div>
        <a href="https://www.youtube.com/watch?v=sgfgMC4Y-Wc" target="_blank" rel="noreferrer" className="mt-3 inline-block font-body text-base text-[var(--gold-soft)] underline hover:text-white">{t.videoYoutube}</a>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
