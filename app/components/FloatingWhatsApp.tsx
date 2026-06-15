"use client";

import { logInquiry } from "../lib/inquiry-log";
import type { HomeContent } from "../home-content";

export default function FloatingWhatsApp({ whatsapp }: { whatsapp: HomeContent["whatsapp"] }) {
  const href = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.prefill)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={whatsapp.aria}
      onClick={() => logInquiry({ type: "왓츠앱 플로팅 클릭", message: whatsapp.prefill })}
      className="group fixed bottom-5 left-4 z-[80] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft ring-1 ring-black/5 transition-transform hover:scale-105 md:bottom-6 md:left-6 md:h-16 md:w-16"
    >
      <span aria-hidden className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 chat-ping" />
      <svg viewBox="0 0 32 32" fill="currentColor" className="relative h-7 w-7 md:h-8 md:w-8" aria-hidden="true">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.864-1.39zM16.003 0C7.16 0 0 7.16 0 16c0 2.82.73 5.583 2.122 8.016L.05 32l8.16-2.043A15.96 15.96 0 0 0 16 32c8.84 0 16-7.16 16-16S24.84 0 16.003 0zm0 29.282c-2.578 0-5.1-.688-7.32-2.006l-.515-.315-5.45 1.405 1.433-5.293-.33-.545A13.234 13.234 0 0 1 2.722 16c0-7.32 5.96-13.278 13.28-13.278S29.28 8.68 29.28 16s-5.96 13.282-13.277 13.282z" />
      </svg>
    </a>
  );
}
