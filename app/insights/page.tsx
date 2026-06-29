import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import ChatWidget from "../components/ChatWidget";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import InsightsBoard from "../components/InsightsBoard";
import { koContent } from "../home-content";

const url = "https://www.ceslprimus.com/insights";

export const metadata: Metadata = {
  title: { absolute: "인사이트 | 쎄슬프라이머스 — 결로·저온제습·수직농장 가이드" },
  description:
    "식품공장 결로, 저온저장고 곰팡이, 딸기수직농장 사업 등 현장 문제와 해결법을 다루는 쎄슬프라이머스 인사이트. 저온제습·쿨링시스템·콜드체인·스마트팜 실무 가이드.",
  keywords: ["쎄슬프라이머스 인사이트", "식품공장 결로", "저온저장고 결로", "저온제습", "쿨링시스템", "딸기수직농장", "콜드체인"],
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "인사이트 | 쎄슬프라이머스",
    description: "현장 문제와 해결법 — 결로·저온제습·콜드체인·수직농장 실무 가이드.",
    url,
    siteName: "쎄슬프라이머스",
    locale: "ko_KR",
    images: [{ url: "/media/og-image.jpg", width: 1200, height: 630, alt: "쎄슬프라이머스 인사이트" }],
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${url}/#collection`,
  url,
  name: "쎄슬프라이머스 인사이트",
  inLanguage: "ko-KR",
  isPartOf: { "@id": "https://www.ceslprimus.com/#website" },
  about: { "@id": "https://www.ceslprimus.com/#organization" }
};

export default function InsightsPage() {
  const c = koContent;
  return (
    <main id="top" className="bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SiteHeader nav={c.nav} contact={c.contact} />

      <section className="bg-ink text-white">
        <div className="mx-auto w-[min(1140px,92vw)] pb-16 pt-32 md:pb-20 md:pt-44">
          <p className="text-[1rem] font-semibold text-mint">인사이트 · Insights</p>
          <h1 className="mt-4 text-[2rem] font-bold leading-[1.2] tracking-tight md:text-[2.8rem]">
            현장의 문제와 해결법을 기록합니다.
          </h1>
          <p className="mt-5 max-w-2xl text-[1.1rem] leading-relaxed text-white/75">
            식품공장 결로, 저온저장고 곰팡이, 딸기수직농장 사업까지 — 쎄슬프라이머스가 현장에서 마주한 문제와 해결 관점을 공유합니다.
          </p>
        </div>
      </section>

      <InsightsBoard />

      <footer className="bg-ink py-10 text-center">
        <a href="/" className="text-[0.95rem] font-semibold text-white transition hover:text-mint">쎄슬프라이머스 홈으로</a>
        <p className="mt-3 text-[0.85rem] text-white/55">© 2026 쎄슬프라이머스. 모든 권리 보유.</p>
      </footer>

      <ChatWidget chat={c.chat} faq={c.faq} contact={c.contact} />
      <FloatingWhatsApp whatsapp={c.whatsapp} />
    </main>
  );
}
