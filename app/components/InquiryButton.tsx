"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Mail, Phone, X } from "lucide-react";
import type { HomeContent } from "../home-content";

export default function InquiryButton({
  className,
  contact,
  children
}: {
  className: string;
  contact: HomeContent["contact"];
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={contact.modalTitle}
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-soft md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-ink md:text-[1.7rem]">
                  {contact.modalTitle}
                </h3>
                <p className="mt-1.5 text-[1rem] leading-relaxed text-ink/60">{contact.modalBody}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="✕"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink/6 text-ink transition hover:bg-ink/12"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {contact.contacts.map((person) => (
                <div
                  key={person.email}
                  className={`rounded-2xl p-5 ring-1 ${person.primary ? "bg-forest/[0.04] ring-forest/30" : "bg-paper ring-ink/8"}`}
                >
                  <p
                    className={`inline-flex rounded-full px-3 py-1 text-[0.82rem] font-bold ${
                      person.primary ? "bg-forest/10 text-forest" : "bg-ink/6 text-ink/60"
                    }`}
                  >
                    {person.tag}
                  </p>
                  <p className="mt-3 text-[1.45rem] font-bold tracking-tight text-ink">{person.name}</p>
                  <p className="mt-0.5 text-[0.98rem] font-semibold text-ink/58">{person.role}</p>
                  <div className="mt-4 space-y-2">
                    {person.phones.map((phone) => (
                      <a
                        key={phone.href}
                        href={phone.href}
                        className="flex items-center justify-between gap-2 rounded-xl bg-white px-4 py-3 ring-1 ring-ink/8 transition hover:ring-forest/40"
                      >
                        <span className="flex items-center gap-2 text-[0.9rem] font-semibold text-ink/55">
                          <Phone className="h-4 w-4 shrink-0 text-forest" />
                          {phone.label}
                        </span>
                        <span className="whitespace-nowrap text-[1.02rem] font-bold tracking-tight text-ink">
                          {phone.value}
                        </span>
                      </a>
                    ))}
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center gap-2.5 rounded-xl bg-forest px-4 py-3 text-white transition hover:bg-ink"
                    >
                      <Mail className="h-4 w-4 shrink-0" />
                      <span className="break-all text-[0.95rem] font-semibold leading-snug">{person.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
