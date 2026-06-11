"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroMedia({ alt }: { alt: string }) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (desktop.matches && !reducedMotion.matches) setShowVideo(true);
  }, []);

  return (
    <>
      <Image
        src="/media/hero-main-poster.webp"
        alt={alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
      {showVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
        >
          <source src="/media/hero-main.mp4" type="video/mp4" />
        </video>
      ) : null}
    </>
  );
}
