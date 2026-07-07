"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ZoomIn, Play, X } from "lucide-react";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import type { HomeContent } from "../home-content";

function VideoModal({
  youtubeId,
  title,
  onClose,
  closeLabel
}: {
  youtubeId: string;
  title: string;
  onClose: () => void;
  closeLabel: string;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={closeLabel}
        className="absolute right-5 top-5 rounded-full bg-white/12 p-2.5 text-white transition hover:bg-white/25"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="w-[min(960px,94vw)] overflow-hidden rounded-2xl bg-black shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default function CasesGallery({ cases }: { cases: HomeContent["cases"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [video, setVideo] = useState<{ youtubeId: string; title: string } | null>(null);

  const imageItems = cases.items.filter((item) => !item.youtubeId);

  return (
    <>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
        {cases.items.map((item, index) => {
          const isVideo = Boolean(item.youtubeId);
          return (
            <Reveal key={item.image} delay={(index % 3) * 80}>
              <button
                type="button"
                onClick={() =>
                  isVideo
                    ? setVideo({ youtubeId: item.youtubeId as string, title: `${item.title} — ${item.site}` })
                    : setOpenIndex(imageItems.findIndex((x) => x.image === item.image))
                }
                className="group block w-full overflow-hidden rounded-2xl bg-paper text-left ring-1 ring-ink/8 transition duration-300 hover:-translate-y-1.5 hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink/5">
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.site}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.045]"
                  />
                  {isVideo ? (
                    <>
                      <span className="absolute inset-0 bg-ink/25 transition duration-300 group-hover:bg-ink/15" />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-soft transition duration-300 group-hover:scale-110">
                          <Play className="h-7 w-7 translate-x-0.5 fill-forest text-forest" />
                        </span>
                      </span>
                    </>
                  ) : (
                    <span className="absolute right-4 top-4 rounded-full bg-ink/55 p-2.5 opacity-0 transition duration-300 group-hover:opacity-100">
                      <ZoomIn className="h-4 w-4 text-white" />
                    </span>
                  )}
                </div>
                <span className="flex items-start justify-between gap-3 p-5">
                  <span>
                    <span className="block text-[1.08rem] font-bold leading-snug tracking-tight text-ink">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-[0.95rem] font-medium text-ink/55">{item.site}</span>
                  </span>
                  <span className="shrink-0 rounded-full bg-forest/10 px-3 py-1 text-[0.82rem] font-bold text-forest">
                    {item.tag}
                  </span>
                </span>
              </button>
            </Reveal>
          );
        })}
      </div>
      <Reveal delay={100}>
        <p className="mt-8 text-[0.95rem] leading-relaxed text-ink/48">{cases.note}</p>
      </Reveal>
      {openIndex !== null ? (
        <Lightbox
          items={imageItems}
          index={openIndex}
          onIndex={setOpenIndex}
          onClose={() => setOpenIndex(null)}
          closeLabel={cases.closeLabel}
        />
      ) : null}
      {video ? (
        <VideoModal
          youtubeId={video.youtubeId}
          title={video.title}
          onClose={() => setVideo(null)}
          closeLabel={cases.closeLabel}
        />
      ) : null}
    </>
  );
}
