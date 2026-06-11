"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxItem {
  image: string;
  title: string;
  site?: string;
  tag?: string;
}

export default function Lightbox({
  items,
  index,
  onIndex,
  onClose,
  closeLabel
}: {
  items: LightboxItem[];
  index: number;
  onIndex: (next: number) => void;
  onClose: () => void;
  closeLabel: string;
}) {
  const item = items[index];
  const prev = (index - 1 + items.length) % items.length;
  const next = (index + 1) % items.length;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onIndex(prev);
      if (event.key === "ArrowRight") onIndex(next);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, onIndex, prev, next]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div className="flex items-center justify-between px-5 py-4 md:px-8">
        <p className="text-[0.95rem] font-semibold tabular-nums text-white/65">
          {index + 1} / {items.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/24"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="relative min-h-0 flex-1 px-3 md:px-20" onClick={onClose}>
        <div className="relative h-full w-full" onClick={(event) => event.stopPropagation()}>
          <Image
            key={item.image}
            src={item.image}
            alt={item.title}
            fill
            sizes="100vw"
            priority
            className="object-contain"
          />
        </div>
        {items.length > 1 ? (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onIndex(prev);
              }}
              aria-label="‹"
              className="absolute left-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/24 md:left-5"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onIndex(next);
              }}
              aria-label="›"
              className="absolute right-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/24 md:right-5"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </>
        ) : null}
      </div>
      <div className="px-5 pb-6 pt-4 text-center md:pb-8">
        <p className="text-lg font-bold tracking-tight text-white md:text-xl">{item.title}</p>
        {item.site ? (
          <p className="mt-1 text-[0.95rem] text-white/60">
            {item.site}
            {item.tag ? ` · ${item.tag}` : ""}
          </p>
        ) : null}
      </div>
    </div>
  );
}
