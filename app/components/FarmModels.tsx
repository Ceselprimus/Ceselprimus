"use client";

import Image from "next/image";
import { useState } from "react";
import { Camera, ZoomIn } from "lucide-react";
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
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-6">
        {models.map((model, index) => (
          <button
            key={model.name}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white text-left ring-1 ring-ink/8 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <span className="relative block aspect-[16/10] w-full overflow-hidden bg-ink/5">
              <Image
                src={model.image}
                alt={model.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 92vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 rounded-full bg-ink/55 p-2 opacity-0 transition duration-300 group-hover:opacity-100">
                <ZoomIn className="h-4 w-4 text-white" />
              </span>
            </span>
            <span className="flex flex-1 flex-col p-5">
              <span className="text-lg font-bold tracking-tight text-ink md:text-xl">{model.name}</span>
              <span className="mt-1.5 text-[0.98rem] leading-relaxed text-ink/64">{model.desc}</span>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[0.9rem] font-semibold text-forest">
                <Camera className="h-4 w-4" />
                {photoHint}
              </span>
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
