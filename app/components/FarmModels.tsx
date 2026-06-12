import Image from "next/image";
import type { HomeContent } from "../home-content";

export default function FarmModels({ models }: { models: HomeContent["alphafarm"]["models"] }) {
  return (
    <div className="mt-5 grid gap-5 sm:grid-cols-2 md:mt-6 lg:grid-cols-4">
      {models.map((model) => (
        <article
          key={model.name}
          className="flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ink/8 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/5">
            <Image
              src={model.image}
              alt={model.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 92vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <p className="text-lg font-bold tracking-tight text-ink md:text-xl">{model.name}</p>
            <p className="mt-1.5 text-[0.98rem] leading-relaxed text-ink/64">{model.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
