"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import ContactModal from "./ContactModal";
import { logInquiry } from "../lib/inquiry-log";
import type { HomeContent } from "../home-content";

interface ChatMessage {
  role: "bot" | "user";
  text: string;
  typing?: boolean;
}

const chipEmojis = ["🏢", "🍓", "❄️", "⚡", "🏗️", "💬"];

function BotAvatar() {
  return (
    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-ink/10">
      <Image src="/icon.png" alt="" width={22} height={22} className="h-[22px] w-[22px] object-contain" />
    </span>
  );
}

export default function ChatWidget({
  chat,
  faq,
  contact
}: {
  chat: HomeContent["chat"];
  faq: HomeContent["faq"];
  contact: HomeContent["contact"];
}) {
  const [open, setOpen] = useState(false);
  const [teaserVisible, setTeaserVisible] = useState(false);
  const [teaserDismissed, setTeaserDismissed] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [asked, setAsked] = useState<number[]>([]);
  const [busy, setBusy] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", age: "", company: "", route: "", phone: "", website: "" });
  const followUpIndex = useRef(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (open || teaserDismissed) return;
    const timer = setTimeout(() => setTeaserVisible(true), 2600);
    return () => clearTimeout(timer);
  }, [open, teaserDismissed]);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const queue = (fn: () => void, delay: number) => {
    timers.current.push(setTimeout(fn, delay));
  };

  const typeThen = (text: string, delay: number, after?: () => void) => {
    setMessages((prev) => [...prev, { role: "bot", text: "", typing: true }]);
    queue(() => {
      setMessages((prev) => [...prev.slice(0, -1), { role: "bot", text }]);
      if (after) after();
    }, delay);
  };

  const openPanel = () => {
    setOpen(true);
    setTeaserVisible(false);
    setTeaserDismissed(true);
    if (messages.length === 0) {
      setBusy(true);
      queue(() => {
        typeThen(chat.greeting, 700, () => {
          queue(() => {
            typeThen(chat.greeting2, 800, () => {
              setBusy(false);
              setShowForm(true);
            });
          }, 350);
        });
      }, 250);
    }
  };

  const nextFollowUp = () => {
    const text = chat.followUps[followUpIndex.current % chat.followUps.length];
    followUpIndex.current += 1;
    return text;
  };

  const onQuestion = (question: string, answer: string, index: number) => {
    if (busy) return;
    setBusy(true);
    setAsked((prev) => [...prev, index]);
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    queue(() => {
      typeThen(answer, 1000, () => {
        queue(() => {
          typeThen(nextFollowUp(), 550, () => setBusy(false));
        }, 400);
      });
    }, 300);
  };

  const onInquiry = () => {
    if (busy) return;
    setShowForm(false);
    setBusy(true);
    setMessages((prev) => [...prev, { role: "user", text: chat.inquiryChip }]);
    queue(() => {
      typeThen(chat.inquiryLead, 700, () => {
        setBusy(false);
        queue(() => setModalOpen(true), 250);
      });
    }, 300);
  };

  const submitForm = () => {
    logInquiry({
      type: "챗봇 사전정보",
      name: form.name.trim(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      message: `나이: ${form.age.trim() || "-"} / 방문경로: ${form.route.trim() || "-"}`,
      website: form.website
    });
    setShowForm(false);
    setBusy(true);
    typeThen(chat.form.thanks, 700, () => setBusy(false));
  };

  const skipForm = () => {
    setShowForm(false);
  };

  const onCases = () => {
    setOpen(false);
    document.querySelector("#cases")?.scrollIntoView({ behavior: "smooth" });
  };

  const remaining = faq.items
    .map((item, index) => ({ item, index }))
    .filter(({ index }) => !asked.includes(index));

  return (
    <>
      {!open ? (
        <div className="fixed bottom-5 right-4 z-[90] flex flex-col items-end gap-3 md:bottom-6 md:right-6">
          {teaserVisible ? (
            <div className="chat-pop relative max-w-[300px] rounded-2xl rounded-br-md bg-white p-4 pr-5 shadow-soft ring-1 ring-ink/10">
              <button
                type="button"
                aria-label="✕"
                onClick={() => {
                  setTeaserVisible(false);
                  setTeaserDismissed(true);
                }}
                className="absolute -left-2.5 -top-2.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-white shadow-card transition hover:bg-energy"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <div className="flex items-start gap-3">
                <BotAvatar />
                <div>
                  <p className="text-[1rem] font-bold leading-snug text-ink">{chat.teaserTitle}</p>
                  <p className="mt-1 text-[0.92rem] leading-relaxed text-ink/65">{chat.teaserBody}</p>
                </div>
              </div>
            </div>
          ) : null}
          <button
            type="button"
            onClick={openPanel}
            className="chat-launcher group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-forest to-[#093D2E] py-3.5 pl-4 pr-6 text-white shadow-soft ring-1 ring-white/15 transition-transform hover:scale-[1.04]"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/14">
              <MessageCircle className="h-5 w-5" />
              <span aria-hidden className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-forest bg-mint chat-ping" />
            </span>
            <span className="text-[1.02rem] font-bold tracking-tight">{chat.launcher}</span>
          </button>
        </div>
      ) : null}

      {open ? (
        <div className="chat-pop fixed bottom-0 left-0 right-0 z-[95] flex max-h-[85svh] flex-col overflow-hidden rounded-t-3xl bg-white shadow-soft ring-1 ring-ink/10 md:bottom-6 md:left-auto md:right-6 md:h-[640px] md:w-[400px] md:rounded-[1.6rem]">
          <div className="bg-gradient-to-br from-forest to-[#093D2E] px-5 pb-4 pt-5 text-white">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="relative">
                  <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-white/30">
                    <Image src="/icon.png" alt="" width={30} height={30} className="h-[30px] w-[30px] object-contain" />
                  </span>
                  <span aria-hidden className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-forest bg-mint" />
                </span>
                <div>
                  <p className="text-[1.15rem] font-bold leading-tight">{chat.title}</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-[0.85rem] text-white/75">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-mint chat-ping" />
                    {chat.statusLabel}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="✕"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/12 transition hover:bg-white/25"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div ref={bodyRef} className="chat-body flex-1 space-y-1 overflow-y-auto bg-[#F2F5F1] px-4 pb-4 pt-5">
            {messages.map((message, index) => {
              const isBot = message.role === "bot";
              const startOfGroup = isBot && (index === 0 || messages[index - 1].role !== "bot");
              return (
                <div key={index} className={`chat-msg ${startOfGroup ? "mt-3 first:mt-0" : "mt-1.5"}`}>
                  {isBot && startOfGroup ? (
                    <p className="mb-1.5 ml-12 flex items-baseline gap-2 text-[0.8rem] font-semibold text-ink/55">
                      {chat.title}
                      <span className="font-normal text-ink/38">{chat.timeLabel}</span>
                    </p>
                  ) : null}
                  {isBot ? (
                    <div className="flex items-end gap-2.5">
                      {startOfGroup ? <BotAvatar /> : <span className="w-9 shrink-0" />}
                      {message.typing ? (
                        <span className="inline-flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-white px-4 py-3.5 shadow-[0_2px_10px_rgba(11,31,26,0.06)]">
                          <span className="chat-dot h-2 w-2 rounded-full bg-forest/55" />
                          <span className="chat-dot h-2 w-2 rounded-full bg-forest/55" style={{ animationDelay: "0.15s" }} />
                          <span className="chat-dot h-2 w-2 rounded-full bg-forest/55" style={{ animationDelay: "0.3s" }} />
                        </span>
                      ) : (
                        <p className="max-w-[82%] whitespace-pre-line rounded-2xl rounded-bl-md bg-white px-4 py-3 text-[0.98rem] leading-relaxed text-ink shadow-[0_2px_10px_rgba(11,31,26,0.06)]">
                          {message.text}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <p className="max-w-[82%] rounded-2xl rounded-br-md bg-gradient-to-br from-forest to-[#0B4A38] px-4 py-3 text-[0.98rem] font-semibold leading-relaxed text-white shadow-[0_3px_12px_rgba(13,92,69,0.28)]">
                        {message.text}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {!busy && showForm ? (
              <div className="chat-msg space-y-2.5 pt-4">
                <p className="ml-1 text-[0.82rem] leading-relaxed text-ink/50">{chat.form.intro}</p>
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
                <input
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  placeholder={chat.form.name}
                  className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-[0.95rem] text-ink outline-none transition placeholder:text-ink/40 focus:border-forest focus:ring-2 focus:ring-forest/15"
                />
                <input
                  value={form.age}
                  inputMode="numeric"
                  onChange={(event) => setForm({ ...form, age: event.target.value })}
                  placeholder={chat.form.age}
                  className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-[0.95rem] text-ink outline-none transition placeholder:text-ink/40 focus:border-forest focus:ring-2 focus:ring-forest/15"
                />
                <input
                  value={form.company}
                  onChange={(event) => setForm({ ...form, company: event.target.value })}
                  placeholder={chat.form.company}
                  className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-[0.95rem] text-ink outline-none transition placeholder:text-ink/40 focus:border-forest focus:ring-2 focus:ring-forest/15"
                />
                <input
                  value={form.route}
                  onChange={(event) => setForm({ ...form, route: event.target.value })}
                  placeholder={chat.form.route}
                  className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-[0.95rem] text-ink outline-none transition placeholder:text-ink/40 focus:border-forest focus:ring-2 focus:ring-forest/15"
                />
                <input
                  value={form.phone}
                  inputMode="tel"
                  onChange={(event) => setForm({ ...form, phone: event.target.value })}
                  placeholder={chat.form.phone}
                  className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-[0.95rem] text-ink outline-none transition placeholder:text-ink/40 focus:border-forest focus:ring-2 focus:ring-forest/15"
                />
                <button
                  type="button"
                  onClick={submitForm}
                  className="mt-1 w-full rounded-xl bg-gradient-to-br from-forest to-[#093D2E] px-4 py-3.5 text-[0.98rem] font-bold text-white shadow-[0_4px_14px_rgba(13,92,69,0.32)] transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  {chat.form.submit}
                </button>
                <button
                  type="button"
                  onClick={skipForm}
                  className="w-full py-1 text-center text-[0.9rem] font-semibold text-ink/45 transition hover:text-forest"
                >
                  {chat.form.skip}
                </button>
              </div>
            ) : null}

            {!busy && messages.length > 0 && !showForm ? (
              <div className="chat-msg space-y-2 pt-4">
                {remaining.length > 0 ? (
                  <p className="ml-1 flex items-center gap-2 text-[0.8rem] font-bold tracking-wide text-ink/45">
                    {chat.chipsLabel}
                    <span aria-hidden className="h-px flex-1 bg-ink/10" />
                  </p>
                ) : null}
                {remaining.map(({ item, index }) => (
                  <button
                    key={item.question}
                    type="button"
                    onClick={() => onQuestion(item.question, item.answer, index)}
                    className="flex w-full items-center gap-2.5 rounded-xl bg-white px-4 py-3 text-left text-[0.95rem] font-semibold text-ink shadow-[0_1px_6px_rgba(11,31,26,0.05)] ring-1 ring-ink/8 transition hover:-translate-y-0.5 hover:ring-forest/45 hover:shadow-card"
                  >
                    <span aria-hidden className="text-[1.05rem]">{chipEmojis[index % chipEmojis.length]}</span>
                    {item.question}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={onCases}
                  className="flex w-full items-center gap-2.5 rounded-xl bg-white px-4 py-3 text-left text-[0.95rem] font-semibold text-ink shadow-[0_1px_6px_rgba(11,31,26,0.05)] ring-1 ring-ink/8 transition hover:-translate-y-0.5 hover:ring-forest/45 hover:shadow-card"
                >
                  {chat.casesChip}
                </button>
                <button
                  type="button"
                  onClick={onInquiry}
                  className="flex w-full items-center justify-between gap-2 rounded-xl bg-gradient-to-br from-forest to-[#093D2E] px-4 py-3.5 text-left text-[0.98rem] font-bold text-white shadow-[0_4px_14px_rgba(13,92,69,0.32)] transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  <span>{chat.inquiryChip}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </button>
              </div>
            ) : null}
          </div>

          <p className="border-t border-ink/8 bg-white px-5 py-2.5 text-center text-[0.78rem] text-ink/45">
            {chat.footnote}
          </p>
        </div>
      ) : null}

      <ContactModal contact={contact} open={modalOpen} onClose={() => setModalOpen(false)} showForm={false} />
    </>
  );
}
