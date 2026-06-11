"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Globe, Menu, X } from "lucide-react";
import type { HomeContent } from "../home-content";

export default function SiteHeader({
  inquiryHref,
  nav
}: {
  inquiryHref: string;
  nav: HomeContent["nav"];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled && !open;
  const dark = !solid;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? "bg-white/88 shadow-[0_1px_0_rgba(11,31,26,0.08)] backdrop-blur-xl"
            : open
              ? "bg-ink"
              : "border-b border-white/12 bg-ink/35 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[68px] w-[min(1140px,92vw)] items-center justify-between md:h-[78px]">
          <a href="#top" aria-label={nav.homeAria} onClick={() => setOpen(false)}>
            <Image
              src={dark ? "/media/cesel-logo-ci-white-transparent.png" : "/media/cesel-logo-ci-transparent.png"}
              alt={nav.homeAria}
              width={203}
              height={50}
              priority
              className={`h-auto w-36 transition md:w-44 ${dark ? "drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]" : ""}`}
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label={nav.homeAria}>
            {nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[1.02rem] font-semibold transition-colors duration-200 ${
                  dark ? "text-white/82 hover:text-white" : "text-ink/72 hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={nav.langSwitch.href}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.92rem] font-semibold ring-1 transition-colors duration-200 ${
                dark
                  ? "text-white/85 ring-white/30 hover:bg-white/10 hover:text-white"
                  : "text-ink/70 ring-ink/15 hover:text-forest hover:ring-forest/40"
              }`}
            >
              <Globe className="h-4 w-4" />
              {nav.langSwitch.label}
            </a>
            <a
              href={inquiryHref}
              className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[0.98rem] font-semibold transition-colors duration-200 ${
                dark ? "bg-white text-ink hover:bg-mint" : "bg-forest text-white hover:bg-ink"
              }`}
            >
              {nav.inquiry} <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>

          <div className="flex items-center gap-1.5 md:hidden">
            <a
              href={nav.langSwitch.href}
              className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.9rem] font-semibold ring-1 transition ${
                dark ? "text-white ring-white/30" : "text-ink ring-ink/15"
              }`}
            >
              <Globe className="h-4 w-4" />
              {nav.langSwitch.label}
            </a>
            <button
              type="button"
              aria-label={open ? nav.menuClose : nav.menuOpen}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition ${
                dark ? "text-white" : "text-ink"
              }`}
            >
              {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 flex flex-col bg-ink px-8 pb-12 pt-28 text-white md:hidden">
          <nav className="flex flex-col gap-2" aria-label={nav.homeAria}>
            {nav.items.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/12 py-5 text-3xl font-semibold tracking-tight"
                style={{ animation: `reveal-up 480ms ease ${index * 70}ms both` }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto space-y-4">
            <a
              href={inquiryHref}
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-mint px-6 py-4 text-lg font-semibold text-ink"
            >
              {nav.inquiry} <ArrowUpRight className="h-5 w-5" />
            </a>
            <p className="text-center text-[0.95rem] text-white/56">{nav.mobileContact}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
