"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Camera, MessageCircle, Phone, X } from "lucide-react";
import ContactModal from "./ContactModal";
import type { HomeContent } from "../home-content";

interface ChatMessage {
  role: "bot" | "user";
  text: string;
  typing?: boolean;
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
  const bodyRef = useRef<HTMLDivElement>(null);

  // 첫 방문 후킹: 잠시 뒤 티저 말풍선 노출
  useEffect(() => {
    if (open || teaserDismissed) return;
    const timer = setTimeout(() => setTeaserVisible(true), 2600);
    return () => clearTimeout(timer);
  }, [open, teaserDismissed]);

  // 새 메시지마다 아래로 스크롤
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, busy]);

  const openPanel = () => {
    setOpen(true);
    setTeaserVisible(false);
    setTeaserDismissed(true);
    if (messages.length === 0) {
      setMessages([{ role: "bot", text: chat.greeting }]);
    }
  };

  const pushAnswer = (question: string, answer: string, index?: number) => {
    if (busy) return;
    setBusy(true);
    setMessages((prev) => [...prev, { role: "user", text: question }, { role: "bot", text: "", typing: true }]);
    if (index !== undefined) setAsked((prev) => [...prev, index]);
    setTimeout(() => {
      setMessages((prev) => {
        const next = prev.slice(0, -1);
        return [...next, { role: "bot", text: answer }];
      });
      setBusy(false);
    }, 850);
  };

  const onInquiry = () => {
    if (busy) return;
    setBusy(true);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: chat.inquiryChip },
      { role: "bot", text: "", typing: true }
    ]);
    setTimeout(() => {
      setMessages((prev) => {
        const next = prev.slice(0, -1);
        return [...next, { role: "bot", text: chat.inquiryLead }];
      });
      setBusy(false);
      setModalOpen(true);
    }, 700);
  };

  const onCases = () => {
    setOpen(false);
    document.querySelector("#cases")?.scrollIntoView({ behavior: "smooth" });
  };

  const remaining = faq.items.map((item, index) => ({ item, index })).filter(({ index }) => !asked.includes(index));

  return (
    <>
      {/* 플로팅 런처 + 티저 */}
      {!open ? (
        <div className="fixed bottom-5 right-4 z-[90] flex flex-col items-end gap-2.5 md:bottom-6 md:right-6">
          {teaserVisible ? (
            <div className="chat-pop relative max-w-[280px] rounded-2xl rounded-br-md bg-white p-4 shadow-soft ring-1 ring-ink/10">
              <button
                type="button"
                aria-label="✕"
                onClick={() => {
                  setTeaserVisible(false);
                  setTeaserDismissed(true);
                }}
                className="absolute -left-2.5 -top-2.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-white shadow-card"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <p className="text-[0.98rem] font-bold leading-snug text-ink">{chat.teaserTitle}</p>
              <p className="mt-1 text-[0.9rem] leading-relaxed text-ink/62">{chat.teaserBody}</p>
            </div>
          ) : null}
          <button
            type="button"
            onClick={openPanel}
            className="chat-launcher group inline-flex items-center gap-2.5 rounded-full bg-forest py-3.5 pl-4 pr-5 text-white shadow-soft transition hover:bg-ink"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/14">
              <MessageCircle className="h-5 w-5" />
              <span aria-hidden className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-mint chat-ping" />
            </span>
            <span className="text-[0.98rem] font-bold tracking-tight">{chat.launcher}</span>
          </button>
        </div>
      ) : null}

      {/* 채팅 패널 */}
      {open ? (
        <div className="chat-pop fixed bottom-0 left-0 right-0 z-[95] flex max-h-[82svh] flex-col overflow-hidden rounded-t-3xl bg-white shadow-soft ring-1 ring-ink/10 md:bottom-6 md:left-auto md:right-6 md:h-[600px] md:w-[392px] md:rounded-3xl">
          <div className="flex items-center justify-between gap-3 bg-forest px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/14">
                <MessageCircle className="h-5 w-5" />
                <span aria-hidden className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-mint" />
              </span>
              <div>
                <p className="text-[1.05rem] font-bold leading-tight">{chat.title}</p>
                <p className="text-[0.85rem] text-white/72">{chat.subtitle}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="✕"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/12 transition hover:bg-white/24"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={bodyRef} className="flex-1 space-y-3 overflow-y-auto bg-paper px-4 py-4">
            {messages.map((message, index) =>
              message.typing ? (
                <div key={index} className="flex">
                  <span className="inline-flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-white px-4 py-3 ring-1 ring-ink/8">
                    <span className="chat-dot h-2 w-2 rounded-full bg-forest/50" />
                    <span className="chat-dot h-2 w-2 rounded-full bg-forest/50" style={{ animationDelay: "0.15s" }} />
                    <span className="chat-dot h-2 w-2 rounded-full bg-forest/50" style={{ animationDelay: "0.3s" }} />
                  </span>
                </div>
              ) : message.role === "bot" ? (
                <div key={index} className="flex">
                  <p className="max-w-[85%] whitespace-pre-line rounded-2xl rounded-bl-md bg-white px-4 py-3 text-[0.95rem] leading-relaxed text-ink ring-1 ring-ink/8">
                    {message.text}
                  </p>
                </div>
              ) : (
                <div key={index} className="flex justify-end">
                  <p className="max-w-[85%] rounded-2xl rounded-br-md bg-forest px-4 py-3 text-[0.95rem] font-semibold leading-relaxed text-white">
                    {message.text}
                  </p>
                </div>
              )
            )}

            {!busy ? (
              <div className="space-y-2 pt-1.5">
                {remaining.map(({ item, index }) => (
                  <button
                    key={item.question}
                    type="button"
                    onClick={() => pushAnswer(item.question, item.answer, index)}
                    className="block w-full rounded-xl bg-white px-4 py-3 text-left text-[0.92rem] font-semibold text-ink ring-1 ring-forest/25 transition hover:bg-forest/[0.06] hover:ring-forest/50"
                  >
                    {item.question}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={onCases}
                  className="flex w-full items-center gap-2 rounded-xl bg-white px-4 py-3 text-left text-[0.92rem] font-semibold text-ink ring-1 ring-ink/12 transition hover:ring-forest/50"
                >
                  <Camera className="h-4 w-4 shrink-0 text-forest" />
                  {chat.casesChip}
                </button>
                <button
                  type="button"
                  onClick={onInquiry}
                  className="flex w-full items-center justify-between gap-2 rounded-xl bg-forest px-4 py-3.5 text-left text-[0.95rem] font-bold text-white transition hover:bg-ink"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0" />
                    {chat.inquiryChip}
                  </span>
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

      <ContactModal contact={contact} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
