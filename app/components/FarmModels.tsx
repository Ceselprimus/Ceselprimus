"use client";

import Image from "next/image";
import { useState } from "react";
import { Camera } from "lucide-react";
import Lightbox from "./Lightbox";
import type { HomeContent } from "../home-content";

export default function FarmModels({
  models,
  photoHint,
  closeLabel
}: {
  models: HomeContent["alphafarm"]["models"];
  photoHint: string;
  closeLabel: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const lightboxItems = models.map((model) => ({
    image: model.image,
    title: model.name,
    site: model.desc
  }));

  return (
    <>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {models.map((model, index) => (
          <button
            key={model.name}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group flex items-center gap-5 rounded-2xl bg-white p-5 text-left ring-1 ring-ink/8 transition duration-300 hover:ring-forest/40 hover:shadow-card md:p-6"
          >
            <span className="min-w-0 flex-1">
              <span className="block text-xl font-bold tracking-tight text-ink">{model.name}</span>
              <span className="mt-2 block text-[1.02rem] leading-relaxed text-ink/66">{model.desc}</span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[0.92rem] font-semibold text-forest">
                <Camera className="h-4 w-4" />
                {photoHint}
              </span>
            </span>
            <span className="relative hidden h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-ink/5 sm:block md:h-28 md:w-28">
              <Image
                src={model.image}
                alt={model.name}
                fill
                sizes="112px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </span>
          </button>
        ))}
      </div>
      {openIndex !== null ? (
        <Lightbox
          items={lightboxItems}
          index={openIndex}
          onIndex={setOpenIndex}
          onClose={() => setOpenIndex(null)}
          closeLabel={closeLabel}
        />
      ) : null}
    </>
  );
}
