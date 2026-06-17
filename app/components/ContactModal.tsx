"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Check, Mail, Phone, X } from "lucide-react";
import { logInquiry } from "../lib/inquiry-log";
import type { HomeContent } from "../home-content";

export default function ContactModal({
  contact,
  open,
  onClose,
  showForm = true,
  contextMessage
}: {
  contact: HomeContent["contact"];
  open: boolean;
  onClose: () => void;
  showForm?: boolean;
  contextMessage?: string;
}) {
  const [form, setForm] = useState({ name: "", contact: "", company: "", region: "", website: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    setSent(false);
    setForm({ name: "", contact: "", company: "", region: "", website: "" });
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const submit = () => {
    const value = form.contact.trim();
    const isEmail = value.includes("@");
    logInquiry({
      type: "사업개발 문의 폼",
      name: form.name.trim(),
      phone: isEmail ? "" : value,
      email: isEmail ? value : "",
      company: form.company.trim(),
      region: form.region.trim(),
      message: contextMessage || "(사업개발 문의 폼)",
      website: form.website
    });
    setSent(true);
  };

  const fl = contact.form;
  const inputClass =
    "w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-[0.98rem] text-ink outline-none transition placeholder:text-ink/40 focus:border-forest focus:ring-2 focus:ring-forest/15";

  const modal = (
    <div
      className="fixed inset-0 z-[110] overflow-y-auto bg-ink/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={contact.modalTitle}
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="my-4 w-full max-w-xl rounded-3xl bg-white p-6 shadow-soft md:p-8"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-ink md:text-[1.7rem]">{contact.modalTitle}</h3>
              <p className="mt-1.5 text-[1rem] leading-relaxed text-ink/60">{contact.modalBody}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="✕"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink/6 text-ink transition hover:bg-ink/12"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {showForm && !sent ? (
            <div className="mt-6 space-y-2.5">
              <p className="text-[0.9rem] text-ink/55">{fl.intro}</p>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={form.website}
                onChange={(event) => setForm({ ...form, website: event.target.value })}
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />
              <div className="grid gap-2.5 sm:grid-cols-2">
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={fl.name} className={inputClass} />
                <input value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} placeholder={fl.contact} className={inputClass} />
                <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder={fl.company} className={inputClass} />
                <input value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value })} placeholder={fl.region} className={inputClass} />
              </div>
              <button
                type="button"
                onClick={submit}
                className="w-full rounded-xl bg-gradient-to-br from-forest to-[#093D2E] px-4 py-3.5 text-[1rem] font-bold text-white shadow-[0_4px_14px_rgba(13,92,69,0.32)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                {fl.submit}
              </button>
            </div>
          ) : null}

          {sent ? (
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-forest/[0.06] px-5 py-4 ring-1 ring-forest/25">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-white">
                <Check className="h-5 w-5" />
              </span>
              <p className="text-[1rem] font-semibold leading-snug text-ink">{fl.sent}</p>
            </div>
          ) : null}

          <div className="mt-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-ink/10" />
            <span className="text-[0.85rem] font-semibold text-ink/45">{fl.orLabel}</span>
            <span className="h-px flex-1 bg-ink/10" />
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
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
                <p className="mt-3 text-[1.3rem] font-bold tracking-tight text-ink">{person.name}</p>
                <p className="mt-0.5 text-[0.95rem] font-semibold text-ink/58">{person.role}</p>
                <div className="mt-4 space-y-2">
                  {person.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      onClick={() =>
                        logInquiry({ type: `연락처 클릭 · ${phone.label}`, message: `${person.name} · ${phone.value}`, phone: phone.value })
                      }
                      className="flex items-center justify-between gap-2 rounded-xl bg-white px-4 py-3 ring-1 ring-ink/8 transition hover:ring-forest/40"
                    >
                      <span className="flex items-center gap-2 text-[0.9rem] font-semibold text-ink/55">
                        <Phone className="h-4 w-4 shrink-0 text-forest" />
                        {phone.label}
                      </span>
                      <span className="whitespace-nowrap text-[1.02rem] font-bold tracking-tight text-ink">{phone.value}</span>
                    </a>
                  ))}
                  <a
                    href={`mailto:${person.email}`}
                    onClick={() =>
                      logInquiry({ type: "연락처 클릭 · 이메일", message: `${person.name} · ${person.email}`, email: person.email })
                    }
                    className="flex items-center gap-2.5 rounded-xl bg-forest px-4 py-3 text-white transition hover:bg-ink"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    <span className="min-w-0 break-words text-[0.8rem] font-semibold leading-snug">{person.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return typeof document !== "undefined" ? createPortal(modal, document.body) : null;
}
