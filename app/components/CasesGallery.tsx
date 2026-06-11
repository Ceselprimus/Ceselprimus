"use client";

import Image from "next/image";
import { useState } from "react";
import { Camera, ZoomIn } from "lucide-react";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import type { HomeContent } from "../home-content";

export default function CasesGallery({ cases }: { cases: HomeContent["cases"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const openByImage = (image: string) => {
    const index = cases.allItems.findIndex((item) => item.image === image);
    setOpenIndex(index >= 0 ? index : 0);
  };

  return (
    <>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
        {cases.items.map((item, index) => (
          <Reveal key={item.image} delay={(index % 3) * 80}>
            <button
              type="button"
              onClick={() => openByImage(item.image)}
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
                <span className="absolute right-4 top-4 rounded-full bg-ink/55 p-2.5 opacity-0 transition duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4 text-white" />
                </span>
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
        ))}
      </div>
      <Reveal delay={100}>
        <div className="mt-10 flex flex-col items-center gap-5 md:mt-12">
          <button
            type="button"
            onClick={() => setOpenIndex(0)}
            className="inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-[1.05rem] font-semibold text-white transition hover:bg-forest"
          >
            <Camera className="h-5 w-5" />
            {cases.viewAllLabel}
            <span className="rounded-full bg-white/16 px-2.5 py-0.5 text-[0.9rem] font-bold tabular-nums">
              {cases.allItems.length}
            </span>
          </button>
          <p className="max-w-3xl text-center text-[0.95rem] leading-relaxed text-ink/48">{cases.note}</p>
        </div>
      </Reveal>
      {openIndex !== null ? (
        <Lightbox
          items={cases.allItems}
          index={openIndex}
          onIndex={setOpenIndex}
          onClose={() => setOpenIndex(null)}
          closeLabel={cases.closeLabel}
        />
      ) : null}
    </>
  );
}
